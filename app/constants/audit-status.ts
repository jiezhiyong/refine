export enum EnumAuditStatus {
  PENDING = 'PENDING',
  RESOLVED = 'RESOLVED',
  REJECTED = 'REJECTED',
  FAILED = 'FAILED',
}

export type TAuditStatus = `${EnumAuditStatus}`;

export const AUDIT_STATUS_LIST = Object.values(EnumAuditStatus);

export const AUDIT_STATUS_MAP = {
  [EnumAuditStatus.PENDING]: { badge: undefined },
  [EnumAuditStatus.RESOLVED]: { badge: 'outline' },
  [EnumAuditStatus.REJECTED]: { badge: 'destructive' },
  [EnumAuditStatus.FAILED]: { badge: 'destructive' },
};
