import { z } from 'zod';

// schema: frontRouteModule
export const schemaFrontRouteModule = z.object({
  projectId: z.string().nonempty({ message: 'Project is required' }),
  title: z.string().min(2, { message: undefined }),
  description: z.string().optional().nullable(),
  global: z.any().optional().nullable(),
  pathReplaceProject: z.string().optional().nullable(),
  pathReplaceModule: z.string().optional().nullable(),
});

export type TSchemaFrontRouteModule = z.infer<typeof schemaFrontRouteModule>;
