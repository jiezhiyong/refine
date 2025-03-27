import { Prisma, PrismaClient } from '@prisma/client';

import { EnumAction } from '~/constants/action';
import { Resources } from '~/constants/resource';
import { getUser } from '~/services/session.server';
import { TAny } from '~/types/any';
import { handlePrismaError } from '~/utils/prisma-error-handler';
import { zodParse } from '~/utils/request';

import { checkPermission } from './casbin-permission.server';
import { EnhancedDbContext, getEnhancedDb } from './db.server';

/**
 * 检查指定的操作是否为有效的数据服务操作
 * @param action 操作名称
 * @returns 是否为有效操作
 */
export function isValidDataServiceAction(action: string): action is keyof typeof dataService {
  return action in dataService;
}

/**
 * 映射数据服务操作到权限操作
 * @param action 数据服务操作
 * @returns 对应的权限操作
 */
export function mapDataActionToPermissionAction(action: string): string {
  if (['findMany', 'findFirst', 'findUnique', 'findUniqueOrThrow', 'count'].includes(action)) {
    return 'list';
  } else if (['create', 'createMany'].includes(action)) {
    return 'create';
  } else if (['update', 'updateMany'].includes(action)) {
    return 'edit';
  } else if (['delete', 'deleteMany'].includes(action)) {
    return 'delete';
  }
  return 'unknown';
}

/**
 * 检查当前用户是否有权限执行指定操作
 * @param model 资源模型
 * @param action 操作名称
 * @param context 请求上下文
 * @returns 权限检查结果和相关信息
 */
export async function checkPermissionForAction(
  model: Resources,
  action: string,
  context: EnhancedDbContext
): Promise<{ hasPermission: boolean; subject: string; object: string; action: string }> {
  const { user, request } = context;
  const auth = user || (request ? await getUser(request) : undefined);

  let role: string | null = 'unknown';
  if (auth?.role) {
    role = auth.role;
  } else {
    return { hasPermission: false, subject: 'anonymous', object: model, action };
  }

  const subject = role;
  const permissionAction = mapDataActionToPermissionAction(action);
  const object = [EnumAction.edit, EnumAction.delete].includes(permissionAction as EnumAction) ? `${model}/*` : model;
  const hasPermission = await checkPermission(subject, object, permissionAction);

  return { hasPermission, subject, object, action: permissionAction };
}

/**
 * 通用数据服务
 * 提供对所有 Prisma 模型的通用 CRUD 操作，并进行权限检查（需要在调用时传入 context.user）
 */
export const dataService = {
  /**
   * 查找多个记录
   * @param model Prisma 模型名称
   * @param args 查询参数
   * @param context 请求上下文
   * @returns 查询结果数组
   */
  async findMany<T = unknown>(
    model: Resources,
    args: Prisma.Args<unknown, 'findMany'>,
    context: EnhancedDbContext
  ): Promise<{ data: T[]; total: number }> {
    try {
      // 权限检查
      const { hasPermission, action } = await checkPermissionForAction(model, 'findMany', context);
      if (!hasPermission) {
        throw new Error(`你没有权限执行操作 \`${model}.${action}\``);
      }

      const db: TAny = await getEnhancedDb(context || {});
      const [data, total] = await Promise.all([db[model].findMany(args), this.count(model, args.where, context)]);

      return { data, total };
    } catch (error) {
      throw handlePrismaError(error);
    }
  },

  /**
   * 查找第一个匹配的记录
   * @param model Prisma 模型名称
   * @param args 查询参数
   * @param context 请求上下文
   * @returns 查询结果或 null
   */
  async findFirst<T = unknown>(
    model: Resources,
    args: Prisma.Args<unknown, 'findFirst'>,
    context: EnhancedDbContext
  ): Promise<T | null> {
    try {
      // 权限检查
      const { hasPermission, action } = await checkPermissionForAction(model, 'findFirst', context);
      if (!hasPermission) {
        throw new Error(`你没有权限执行操作 \`${model}.${action}\``);
      }

      const db: TAny = await getEnhancedDb(context || {});
      return db[model].findFirst(args);
    } catch (error) {
      throw handlePrismaError(error);
    }
  },

  /**
   * 通过唯一标识查找记录
   * @param model Prisma 模型名称
   * @param args 查询参数
   * @param context 请求上下文
   * @returns 查询结果或 null
   */
  async findUnique<T = unknown>(
    model: Resources,
    args: Prisma.Args<unknown, 'findUnique'>,
    context: EnhancedDbContext
  ): Promise<T | null> {
    try {
      // 权限检查
      const { hasPermission, action } = await checkPermissionForAction(model, 'findUnique', context);
      if (!hasPermission) {
        throw new Error(`你没有权限执行操作 \`${model}.${action}\``);
      }

      const db: TAny = await getEnhancedDb(context || {});
      return db[model].findUnique(args);
    } catch (error) {
      throw handlePrismaError(error);
    }
  },

  /**
   * 通过唯一标识查找记录，如果不存在则抛出错误
   * @param model Prisma 模型名称
   * @param args 查询参数
   * @param context 请求上下文
   * @returns 查询结果
   */
  async findUniqueOrThrow<T = unknown>(
    model: Resources,
    args: Prisma.Args<unknown, 'findUniqueOrThrow'>,
    context: EnhancedDbContext
  ): Promise<T> {
    try {
      // 权限检查
      const { hasPermission, action } = await checkPermissionForAction(model, 'findUniqueOrThrow', context);
      if (!hasPermission) {
        throw new Error(`你没有权限执行操作 \`${model}.${action}\``);
      }

      const db: TAny = await getEnhancedDb(context || {});

      return db[model].findUniqueOrThrow(args);
    } catch (error) {
      throw handlePrismaError(error);
    }
  },

  /**
   * 计数查询
   * @param model Prisma 模型名称
   * @param args 查询参数
   * @param context 请求上下文
   * @returns 记录数
   */
  async count(model: Resources, args: Prisma.Args<unknown, 'count'>, context: EnhancedDbContext): Promise<number> {
    try {
      // 权限检查
      const { hasPermission, action } = await checkPermissionForAction(model, 'count', context);
      if (!hasPermission) {
        throw new Error(`你没有权限执行操作 \`${model}.${action}\``);
      }

      const db: TAny = await getEnhancedDb(context || {});
      return db[model].count(args);
    } catch (error) {
      throw handlePrismaError(error);
    }
  },

  /**
   * 创建记录
   * @param model Prisma 模型名称
   * @param args 创建参数
   * @param context 请求上下文
   * @returns 创建的记录
   */
  async create<T = unknown>(
    model: Resources,
    args: Prisma.Args<unknown, 'create'>,
    context: EnhancedDbContext
  ): Promise<T> {
    try {
      // 权限检查
      const { hasPermission, action } = await checkPermissionForAction(model, 'create', context);
      if (!hasPermission) {
        throw new Error(`你没有权限执行操作 \`${model}.${action}\``);
      }

      const { success, originalError } = zodParse(String(model), args.data);
      if (!success) {
        throw originalError;
      }

      const db: TAny = await getEnhancedDb(context || {});
      return db[model].create(args);
    } catch (error) {
      throw handlePrismaError(error);
    }
  },

  /**
   * 批量创建记录
   * @param model Prisma 模型名称
   * @param args 创建参数
   * @param context 请求上下文
   * @returns 创建结果
   */
  async createMany<T = Prisma.BatchPayload>(
    model: Resources,
    args: Prisma.Args<unknown, 'createMany'>,
    context: EnhancedDbContext
  ): Promise<T> {
    try {
      // 权限检查
      const { hasPermission, action } = await checkPermissionForAction(model, 'createMany', context);
      if (!hasPermission) {
        throw new Error(`你没有权限执行操作 \`${model}.${action}\``);
      }

      for (const item of args.data) {
        const { success, originalError } = zodParse(String(model), item);
        if (!success) {
          throw originalError;
        }
      }

      const db: TAny = await getEnhancedDb(context || {});
      return db[model].createMany(args);
    } catch (error) {
      throw handlePrismaError(error);
    }
  },

  /**
   * 更新记录
   * @param model Prisma 模型名称
   * @param args 更新参数
   * @param context 请求上下文
   * @returns 更新后的记录
   */
  async update<T = unknown>(
    model: Resources,
    args: Prisma.Args<unknown, 'update'>,
    context: EnhancedDbContext
  ): Promise<T> {
    try {
      // 权限检查
      const { hasPermission, action } = await checkPermissionForAction(model, 'update', context);
      if (!hasPermission) {
        throw new Error(`你没有权限执行操作 \`${model}.${action}\``);
      }

      const db: TAny = await getEnhancedDb(context || {});
      return db[model].update(args);
    } catch (error) {
      throw handlePrismaError(error);
    }
  },

  /**
   * 批量更新记录
   * @param model Prisma 模型名称
   * @param args 更新参数
   * @param context 请求上下文
   * @returns 更新结果
   */
  async updateMany<T = Prisma.BatchPayload>(
    model: Resources,
    args: Prisma.Args<unknown, 'updateMany'>,
    context: EnhancedDbContext
  ): Promise<T> {
    try {
      // 权限检查
      const { hasPermission, action } = await checkPermissionForAction(model, 'updateMany', context);
      if (!hasPermission) {
        throw new Error(`你没有权限执行操作 \`${model}.${action}\``);
      }

      const db: TAny = await getEnhancedDb(context || {});
      return db[model].updateMany(args);
    } catch (error) {
      throw handlePrismaError(error);
    }
  },

  /**
   * 删除记录
   * @param model Prisma 模型名称
   * @param args 删除参数
   * @param context 请求上下文
   * @returns 删除的记录
   */
  async delete<T = unknown>(
    model: Resources,
    args: Prisma.Args<unknown, 'delete'>,
    context: EnhancedDbContext
  ): Promise<T> {
    try {
      // 权限检查
      const { hasPermission, action } = await checkPermissionForAction(model, 'delete', context);
      if (!hasPermission) {
        throw new Error(`你没有权限执行操作 \`${model}.${action}\``);
      }

      const db: TAny = await getEnhancedDb(context || {});
      return db[model].delete(args);
    } catch (error) {
      throw handlePrismaError(error);
    }
  },

  /**
   * 批量删除记录
   * @param model Prisma 模型名称
   * @param args 删除参数
   * @param context 请求上下文
   * @returns 删除结果
   */
  async deleteMany<T = Prisma.BatchPayload>(
    model: Resources,
    args: Prisma.Args<unknown, 'deleteMany'>,
    context: EnhancedDbContext
  ): Promise<T> {
    try {
      // 权限检查
      const { hasPermission, action } = await checkPermissionForAction(model, 'deleteMany', context);
      if (!hasPermission) {
        throw new Error(`你没有权限执行操作 \`${model}.${action}\``);
      }

      const db: TAny = await getEnhancedDb(context || {});
      return db[model].deleteMany(args);
    } catch (error) {
      throw handlePrismaError(error);
    }
  },

  /**
   * 执行原始数据库查询
   * @param query 查询语句
   * @param params 查询参数
   * @param context 请求上下文
   * @returns 查询结果
   */
  async executeRaw<T = unknown>(query: string, params: unknown[] = [], context: EnhancedDbContext): Promise<T> {
    try {
      // 原始查询操作需要特殊的权限处理，这里简化为系统级操作
      // 可以选择不进行权限检查，或者检查特定的系统级权限
      if (context.user?.role !== 'admin') {
        throw new Error('只有管理员才能执行原始数据库查询');
      }

      const db: TAny = await getEnhancedDb(context || {});
      return db.$executeRaw.apply(db, [query, ...params]);
    } catch (error) {
      throw handlePrismaError(error);
    }
  },

  /**
   * 执行原始数据库查询并返回查询结果
   * @param query 查询语句
   * @param params 查询参数
   * @param context 请求上下文
   * @returns 查询结果
   */
  async queryRaw<T = unknown>(query: string, params: unknown[] = [], context: EnhancedDbContext): Promise<T> {
    try {
      // 原始查询操作需要特殊的权限处理，这里简化为系统级操作
      // 可以选择不进行权限检查，或者检查特定的系统级权限
      if (context.user?.role !== 'admin') {
        throw new Error('只有管理员才能执行原始数据库查询');
      }

      const db: TAny = await getEnhancedDb(context || {});
      return db.$queryRaw.apply(db, [query, ...params]);
    } catch (error) {
      throw handlePrismaError(error);
    }
  },

  /**
   * 事务操作
   * @param fn 事务函数
   * @param context 请求上下文
   * @returns 事务结果
   */
  async transaction<T>(fn: (prisma: PrismaClient) => Promise<T>, context: EnhancedDbContext): Promise<T> {
    try {
      // 事务操作需要特殊的权限处理，这里简化为系统级操作
      // 可以选择不进行权限检查，或者检查特定的系统级权限
      if (context.user?.role !== 'admin') {
        throw new Error('只有管理员才能执行事务操作');
      }

      const db: TAny = await getEnhancedDb(context || {});
      return await db.$transaction(fn);
    } catch (error) {
      throw handlePrismaError(error);
    }
  },
};
