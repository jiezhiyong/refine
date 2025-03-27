import { z } from 'zod';

// JSON
export const schemaJson = z.string().refine(
  (val) => {
    if (!val) {
      return true;
    }

    try {
      JSON.parse(val);
      return true;
    } catch (e) {
      return false;
    }
  },
  { message: '输入的JSON内容格式有误 - Invalid JSON format' }
);

// Prisma JSON
export const schemaPrismaJson = z.string().refine(
  (val): boolean => {
    if (!val) {
      return true;
    }

    try {
      const json = JSON.parse(val);

      if (json.select && json.include) {
        return false;
      }

      return true;
    } catch (e) {
      return false;
    }
  },
  (val) => {
    try {
      const json = JSON.parse(val);
      if (json.select && json.include) {
        return { message: 'select 和 include 不能同时使用，请选择其一' };
      }

      return { message: '输入的Prisma JSON内容格式有误 - Invalid Prisma JSON format' };
    } catch (e) {
      return { message: '输入的Prisma JSON内容格式有误 - Invalid Prisma JSON format' };
    }
  }
);
