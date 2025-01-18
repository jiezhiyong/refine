// 审计日志状态类型
export const LOG_STATUS = {
  create: 'create',
  delete: 'delete',
  update: 'update',
} as const;

export const LOG_STATUS_LIST = Object.values(LOG_STATUS);

// 审计日志状态
export type LogStatus = (typeof LOG_STATUS)[keyof typeof LOG_STATUS];

// 审计日志状态映射
export const LOG_STATUS_MAP = {
  create: { badge: undefined },
  delete: { badge: 'destructive' },
  update: { badge: 'outline' },
};
