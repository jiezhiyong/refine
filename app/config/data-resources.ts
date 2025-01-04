// 定义数据资源枚举
export enum EnumResource {
  User = 'user',
  Role = 'role',
  Log = 'log',
  Post = 'post',
  Category = 'category',
}

// 从 EnumResource 自动推导出资源数组
export const resources = Object.values(EnumResource) as unknown as readonly ['user', 'role', 'log', 'post', 'category'];

// 定义数据实体
export type Resources = (typeof resources)[number];
