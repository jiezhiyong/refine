// 定义数据资源枚举
export enum EnumResource {
  user = 'user',
  role = 'role',
  log = 'log',
  post = 'post',
  category = 'category',
}

// 定义数据实体
export type Resources = `${EnumResource}`;
