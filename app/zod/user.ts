import { z } from 'zod';

// schema: user
export const schemaUser = z.object({
  name: z.string().min(1, '用户名不能为空'),
  email: z.string().email('请输入有效的邮箱地址'),
  avatar: z.string().optional().nullable(),
});

export type TSchemaUser = z.infer<typeof schemaUser>;
