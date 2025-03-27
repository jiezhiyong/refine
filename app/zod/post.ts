import { z } from 'zod';

import { EnumPostStatus } from '~/constants/post';

// schema: post
export const schemaPost = z.object({
  title: z.string().min(2, { message: undefined }),
  content: z.string().min(2),
  status: z.enum([EnumPostStatus.DRAFT, EnumPostStatus.PUBLISHED, EnumPostStatus.REJECTED]),
  categoryId: z.string(),
});

export type TSchemaPost = z.infer<typeof schemaPost>;
