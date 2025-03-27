import { z } from 'zod';

// schema: login、register
export const schemaLoginRegister = z.object({
  email: z.string().email('请输入有效的邮箱地址'),
  password: z.string().min(6, '密码至少需要6个字符').max(50, '密码不能超过50个字符'),
  redirectTo: z.string().optional(),
});

export type TSchemaLoginRegister = z.infer<typeof schemaLoginRegister>;
