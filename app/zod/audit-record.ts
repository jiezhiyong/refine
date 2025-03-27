import { z } from 'zod';

import { EnumAuditStatus } from '~/constants/audit-status';
import { EnumLogType } from '~/constants/log';

// schema: AuditRecord
export const schemaAuditRecord = z.object({
  title: z.string(),
  status: z.enum([EnumAuditStatus.PENDING, EnumAuditStatus.RESOLVED, EnumAuditStatus.REJECTED, EnumAuditStatus.FAILED]),
  action: z.enum([
    EnumLogType.create,
    EnumLogType.createMany,
    EnumLogType.delete,
    EnumLogType.deleteMany,
    EnumLogType.update,
    EnumLogType.updateMany,
  ]),
  data: z.any().optional(),
  dataPrevious: z.any().optional(),
  meta: z.object({
    parent: z.string().optional(),
    id: z.string().optional(),
  }),
  resource: z.string(),
});

export type TSchemaAuditRecord = z.infer<typeof schemaAuditRecord>;
