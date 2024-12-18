import { PrismaClient } from '@prisma/client';

/**
 * 单例模式
 * 由于开发服务器会重新加载（require）打包后的代码，需要做一些特殊处理来确保某些数据能够在重新加载后保持持久化
 */
export const singleton = <Value>(name: string, valueFactory: () => Value): Value => {
  const g = global as any;
  g.__singletons ??= {};
  g.__singletons[name] ??= valueFactory();
  return g.__singletons[name];
};

/**
 * Prisma 客户端
 * 硬编码一个唯一的键，这样当这个模块被重新导入时我们可以查找到之前的客户端实例
 */
export const db = singleton('prisma', () => new PrismaClient());
