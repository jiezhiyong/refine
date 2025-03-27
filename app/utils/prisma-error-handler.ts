import { Prisma } from '@prisma/client';

/**
 * 转换 Prisma 错误消息为简短提示
 * @param message Prisma 原始错误消息
 * @returns 简化后的错误消息
 */
export function transformPrismaError2ShortMessage(message: string): string {
  if (!message.includes('prisma')) {
    return message;
  }

  // 提取错误类型，如 \nInvalid `prisma.post.update()` invocation ...
  const errorType = message.split('invocation')[0];

  // 提取最后的错误提示（通常在最后一行）
  let errorDetails = message.split('\n').pop() || '';

  // 对于特定错误，进行特定处理
  // eg: Invalid `prisma.category.delete()` , Foreign key constraint violated: `Post_categoryId_fkey (index)`
  if (errorDetails.includes('Foreign key constraint violated')) {
    errorDetails = `外键约束无法删除。当前记录与 \`${errorDetails.split(': `')[1].split('_')[0]}\` 存在关联关系`;
  }

  // 组合简化后的错误消息
  return `${errorType}, ${errorDetails}`.trim();
}

/**
 * 自定义Prisma错误类，用于保留完整的错误信息
 */
export class PrismaError extends Error {
  code: string;
  target?: string;
  originalError: unknown;

  constructor(error: { code: string; message: string; target?: string; originalError: unknown }) {
    super(error.message);

    this.name = 'PrismaError';
    this.code = error.code;
    this.target = error.target;
    this.originalError = error.originalError;

    // 确保instanceof正常工作
    Object.setPrototypeOf(this, PrismaError.prototype);
  }
}

/**
 * 处理Prisma错误、并翻译成中文
 * @param error Prisma错误对象
 * @returns 包含中文错误信息的对象
 */
export function handlePrismaError(error: unknown) {
  // 如果是Prisma错误
  if (error instanceof Prisma.PrismaClientKnownRequestError) {
    const { code, meta } = error || {};
    const { target: metaTarget, cause: metaCause, field_name } = meta || {};

    // 唯一约束错误
    if (code === 'P2002') {
      const target = Array.isArray(metaTarget) ? (metaTarget as string[]).join(', ') : (metaTarget as string);
      throw new PrismaError({
        code,
        message: `唯一性约束冲突：字段 "${target}" 的值已存在，请使用其他值。`,
        target,
        originalError: error,
      });
    }

    // 记录不存在错误
    if (code === 'P2025') {
      throw new PrismaError({
        code,
        message: `记录不存在：${metaCause || '请求的资源未找到'}`,
        originalError: error,
      });
    }

    // 外键约束错误
    // 另外对于特定错误，进行特定处理，eg: Invalid `prisma.category.delete()` , Foreign key constraint violated: `Post_categoryId_fkey (index)`
    if (code === 'P2003') {
      let reason = '关联记录不存在';
      if (field_name) {
        reason = `当前记录与 \`${String(field_name).split('_')[0]}\` 存在关联关系`;
      }

      throw new PrismaError({
        code,
        message: `外键约束失败：${reason}`,
        originalError: error,
      });
    }

    // 字段类型错误
    if (code === 'P2005') {
      throw new PrismaError({
        code,
        message: `字段类型错误：${field_name || '提供的值类型不正确'}`,
        originalError: error,
      });
    }

    // 默认返回原始错误代码和中文描述
    throw new PrismaError({
      code,
      message: `数据库操作错误 (${code}): ${error.message}`,
      originalError: error,
    });
  }

  // 如果是Prisma验证错误
  if (error instanceof Prisma.PrismaClientValidationError) {
    throw new PrismaError({
      code: 'VALIDATION_ERROR',
      message: `数据验证错误: ${transformPrismaError2ShortMessage(error.message)}`,
      originalError: error,
    });
  }

  // 其他未知错误
  throw new PrismaError({
    code: 'UNKNOWN_ERROR',
    message: error instanceof Error ? error.message : '发生未知错误',
    originalError: error,
  });
}
