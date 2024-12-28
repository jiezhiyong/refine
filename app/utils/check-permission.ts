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
