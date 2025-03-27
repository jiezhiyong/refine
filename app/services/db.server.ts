import { PrismaClient, User } from '@prisma/client';
import { enhance } from '@zenstackhq/runtime';

import { Resources, RESOURCES_LIST } from '~/constants/resource';
import { singleton } from '~/utils/singleton';

import { getUser } from './session.server';

/**
 * Prisma
 * 硬编码一个唯一的键，这样当这个模块被重新导入时我们可以查找到之前的客户端实例
 */
export const db = singleton('prisma', () => new PrismaClient({ log: ['error'] }));

/**
 * 第二个 Prisma 客户端, 用于访问第二个数据库
 */
export const db2 = singleton('prisma2', () => {
  return new PrismaClient({ log: ['error'], datasourceUrl: process.env.DATABASE_URL_B });
});

/**
 * 获取带有用户上下文的增强 Prisma 客户端, ZenStack - https://zenstack.dev/docs/the-complete-guide/part1/enhancement
 * 在需要访问数据库的地方，应该使用此函数获取带有用户权限的客户端
 * @param request 当前请求对象
 * @returns 增强的 Prisma 客户端
 */

export async function getEnhancedDb({ request, user }: EnhancedDbContext) {
  const auth = user || (request ? await getUser(request) : undefined);
  return enhance(db, { user: auth || undefined }, { logPrismaQuery: true });
}

export type EnhancedDbContext = { request?: Request; user?: User | null };

/**
 * 判断资源是否为 Prisma 模型
 * @param resource 资源名称
 * @returns 是否为 Prisma 模型
 */
export function isPrismaModel(resource: string): resource is Resources {
  return RESOURCES_LIST.some((r) => r.endsWith(resource));
}

// 排除的表
const excludeTables = [
  '_prisma_migrations',
  'casbin_rule',
  'Menu',
  'Role',
  'User',
  'UserRole',
  'DynamicPage',
  'AuditRecord',
  'Log',
  'FrontRouteProject',
  'FrontRouteModule',
];

// 查询所有可访问的表, 用于 discover、dynamicPage 等场景
export async function queryTablesAll() {
  const tableAll = await db.$queryRawUnsafe("SELECT * FROM information_schema.tables WHERE table_schema = 'public'"); // TODO: MySQL语法 SELECT table_name FROM information_schema.tables WHERE table_schema = 'database_name'

  const tables: { value: string; label: string }[] = [];
  if (Array.isArray(tableAll)) {
    tables.push(
      ...tableAll
        .filter((table) => !excludeTables.includes(table.table_name))
        .map((table) => ({
          value: table.table_name,
          label: table.table_name,
        }))
    );
  }

  return tables;
}
