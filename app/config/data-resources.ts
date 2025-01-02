// 定义数据资源
export const resources = ['post', 'category', 'user'] as const;

// 定义数据实体
export type Resources = (typeof resources)[number];
