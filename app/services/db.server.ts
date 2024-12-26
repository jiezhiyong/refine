import { PrismaClient } from '@prisma/client';
import { singleton } from '~/utils/singleton';

/**
 * Prisma 客户端
 * 硬编码一个唯一的键，这样当这个模块被重新导入时我们可以查找到之前的客户端实例
 */
export const db = singleton('prisma', () => new PrismaClient());
