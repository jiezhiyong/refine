// 定义数据资源枚举
export enum EnumResource {
  user = 'user',
  userRole = 'userRole',
  role = 'role',
  casbinRule = 'casbinRule',
  log = 'log',
  post = 'post',
  category = 'category',
  frontRouteProject = 'frontRouteProject',
  frontRouteModule = 'frontRouteModule',
  auditRecord = 'auditRecord',
  menu = 'menu',
  dynamicPage = 'dynamicPage',
}

// 定义数据实体
export type Resources = `${EnumResource}`;

// 定义数据资源列表
export const RESOURCES_LIST = Object.values(EnumResource);
