// 定义数据资源枚举
export const EnumResource = {
  user: 'user',
  role: 'role',
  log: 'log',
  post: 'post',
  category: 'category',
} as const;

// 定义数据实体
export type Resources = (typeof EnumResource)[keyof typeof EnumResource];
