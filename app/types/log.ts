// 审计日志状态类型
export const LOG_STATUS = {
  create: 'create',
  createMany: 'createMany',
  delete: 'delete',
  deleteMany: 'deleteMany',
  update: 'update',
  updateMany: 'updateMany',
} as const;

export const LOG_STATUS_LIST = Object.values(LOG_STATUS);

// 审计日志状态
export type LogStatus = (typeof LOG_STATUS)[keyof typeof LOG_STATUS];

// 审计日志状态映射
export const LOG_STATUS_MAP = {
  create: { badge: 'outline' },
  createMany: { badge: 'outline' },
  delete: { badge: 'destructive' },
  deleteMany: { badge: 'destructive' },
  update: { badge: undefined },
  updateMany: { badge: undefined },
};
