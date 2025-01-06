import type { Password, User } from '@prisma/client';
import bcrypt from 'bcryptjs';
import { db } from '~/services/db.server';

/** 根据 ID 获取用户 */
export async function getUserById(id: User['id']) {
  return db.user.findUnique({ where: { id } });
}

/** 根据 Email 获取用户 */
export async function getUserByEmail(email: User['email']) {
  return db.user.findUnique({ where: { email } });
}

/** 创建用户 */
export async function createUser(email: User['email'], password: string) {
  const hashedPassword = await bcrypt.hash(password, 10);

  return db.user.create({
    data: {
      email,
      name: email.split('@')[0],
      password: {
        create: {
          hash: hashedPassword,
        },
      },
    },
  });
}

/** 删除用户 */
export async function deleteUserByEmail(email: User['email']) {
  return db.user.delete({ where: { email } });
}

/** 验证用户登录 */
export async function verifyLogin(email: User['email'], password: Password['hash']) {
  const userWithPasswordAndRoles = await db.user.findUnique({
    where: { email },
    include: {
      password: true,
      roles: {
        include: {
          role: true,
        },
      },
    },
  });

  if (!userWithPasswordAndRoles || !userWithPasswordAndRoles.password) {
    return null;
  }

  const isValid = await bcrypt.compare(password, userWithPasswordAndRoles.password.hash);
  if (!isValid) {
    return null;
  }

  // 提取角色
  const roles = userWithPasswordAndRoles.roles.map((userRole) => userRole.role.title);
  const userWithRoles = {
    ...userWithPasswordAndRoles,
    password: '******',
    roles,
    role: roles[0],
  };

  return userWithRoles;
}
