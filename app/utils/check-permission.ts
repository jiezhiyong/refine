// TODO: 菜单权限
// import { PrismaClient } from '@prisma/client';

// const prisma = new PrismaClient();

// export async function checkPermission(userId: string, path: string) {
//   const user = await prisma.user.findUnique({ where: { id: userId } });
//   if (!user) return false;

//   const menu = await prisma.menu.findFirst({ where: { path } });
//   if (!menu) return false;

//   const allowedRoles = menu.roles.split(',');
//   return allowedRoles.includes(user.role);
// }

// https://pro.ant.design/zh-CN/docs/authority-management
// https://umijs.org/zh-CN/plugins/plugin-access

// <Access />

// export function useAccess() {

// }

// https://demo.dashpress.io/zh-cn/roles/dadada?tab=app
// Refine 实现精细访问控制
// 原生集成到授权服务，为常见的访问控制模型如ACL、RBAC和ABAC模型提供开箱即用的支持。
