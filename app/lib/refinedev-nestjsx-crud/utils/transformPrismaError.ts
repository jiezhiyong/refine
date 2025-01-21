/**
 * 转换 Prisma 错误消息为简短提示
 * @param errorMessage Prisma 原始错误消息
 * @returns 简化后的错误消息
 */
export function transformPrismaError(errorMessage: string): string {
  if (!errorMessage.includes('prisma')) {
    return errorMessage;
  }

  // 提取错误类型，如 \nInvalid `prisma.post.update()` invocation ...
  const errorType = errorMessage.split('invocation')[0];

  // 提取最后的错误提示（通常在最后一行）
  const errorDetails = errorMessage.split('\n').pop() || '';

  // 组合简化后的错误消息
  return `${errorType}, ${errorDetails}`.trim();
}
