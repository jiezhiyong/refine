import { z } from 'zod';

// schema: frontRouteProject
export const schemaFrontRouteProject = z.object({
  title: z.string().min(2, { message: undefined }),
  description: z.string().optional().nullable(),
  global: z.any(),
});

export type TSchemaFrontRouteProject = z.infer<typeof schemaFrontRouteProject>;
