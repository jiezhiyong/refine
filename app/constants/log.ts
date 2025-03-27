export enum EnumLogType {
  create = 'create',
  createMany = 'createMany',
  delete = 'delete',
  deleteMany = 'deleteMany',
  update = 'update',
  updateMany = 'updateMany',
}

export type TLogStatus = `${EnumLogType}`;

export const LOG_STATUS_LIST = Object.values(EnumLogType);

// 审计日志状态映射
export const LOG_STATUS_MAP = {
  [EnumLogType.create]: { badge: 'outline' },
  [EnumLogType.createMany]: { badge: 'outline' },
  [EnumLogType.delete]: { badge: 'destructive' },
  [EnumLogType.deleteMany]: { badge: 'destructive' },
  [EnumLogType.update]: { badge: undefined },
  [EnumLogType.updateMany]: { badge: undefined },
};

/**
 * 自定义审计日志键旧值
 */
export const AUDIT_LOG_CUSTOM_OLD = 'AUDIT_LOG_CUSTOM_OLD' as const;

/**
 * 自定义审计日志键新值
 */
export const AUDIT_LOG_CUSTOM_NEW = 'AUDIT_LOG_CUSTOM_NEW' as const;
