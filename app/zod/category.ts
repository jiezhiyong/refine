import { z } from 'zod';

// schema: category
export const schemaCategory = z.object({
  title: z.string().min(2, { message: undefined }),
  description: z.string().optional().nullable(),
});

export type TSchemaCategory = z.infer<typeof schemaCategory>;
