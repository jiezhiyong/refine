import { z } from 'zod';

// schema: dynamicPage
export const schemaDynamicPage = z.object({
  path: z.string().min(6, '请输入正确的路径, eg: /group/category/name'),
  title: z.string().min(1, '请输入页面标题'),
  isActive: z.boolean().optional().nullable(),
  enableCreate: z.boolean().optional().nullable(),
  enableDelete: z.boolean().optional().nullable(),
  enableEdit: z.boolean().optional().nullable(),
  enableClone: z.boolean().optional().nullable(),
  tableSql: z.any(),
  tableRecordLink: z.any().optional().nullable(),
  tableField: z.any().optional().nullable(),
  formField: z.any().optional().nullable(),
  meta: z.any().optional().nullable(),
});

export type TSchemaDynamicPage = z.infer<typeof schemaDynamicPage>;
