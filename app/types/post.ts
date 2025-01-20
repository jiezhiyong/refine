// 文章状态类型
export const POST_STATUS = {
  DRAFT: 'DRAFT',
  PUBLISHED: 'PUBLISHED',
  REJECTED: 'REJECTED',
} as const;

export const POST_STATUS_LIST = Object.values(POST_STATUS);

// 文章状态
export type PostStatus = (typeof POST_STATUS)[keyof typeof POST_STATUS];

// 文章状态映射
export const POST_STATUS_MAP = {
  DRAFT: { badge: 'outline' },
  PUBLISHED: { badge: undefined },
  REJECTED: { badge: 'destructive' },
};
