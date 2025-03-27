export enum EnumPostStatus {
  DRAFT = 'DRAFT',
  PUBLISHED = 'PUBLISHED',
  REJECTED = 'REJECTED',
}

export type TPostStatus = `${EnumPostStatus}`;

export const POST_STATUS_LIST = Object.values(EnumPostStatus);

export const POST_STATUS_MAP = {
  [EnumPostStatus.DRAFT]: { badge: 'outline' },
  [EnumPostStatus.PUBLISHED]: { badge: undefined },
  [EnumPostStatus.REJECTED]: { badge: 'destructive' },
};
