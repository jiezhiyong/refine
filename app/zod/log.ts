import { z } from 'zod';

import { EnumLogType } from '~/constants/log';

// schema: log
export const schemaLog = z.object({
  resource: z.string(),
  action: z.enum([
    EnumLogType.create,
    EnumLogType.createMany,
    EnumLogType.delete,
    EnumLogType.deleteMany,
    EnumLogType.update,
    EnumLogType.updateMany,
  ]),
  data: z.any().optional().nullable(),
  dataPrevious: z.any().optional().nullable(),
  meta: z.any().optional().nullable(),
});

export type TSchemaLog = z.infer<typeof schemaLog>;
