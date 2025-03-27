import { z } from 'zod';

// schema: role
export const schemaRole = z.object({
  title: z.string().min(2, { message: undefined }),
  description: z.string().min(2),
});

export type TSchemaRole = z.infer<typeof schemaRole>;
