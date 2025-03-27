import { z } from 'zod';

// schema: casbinRule
export const schemaCasbinRule = z.object({
  ptype: z.string(),
  v0: z.string().min(2),
  v1: z.string(),
  v2: z.string(),
  v3: z.string().optional().nullable(),
});

export type TSchemaCasbinRule = z.infer<typeof schemaCasbinRule>;
