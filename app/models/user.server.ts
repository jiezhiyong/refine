import type { Password, User } from '@prisma/client';
import bcrypt from 'bcryptjs';
import { db } from '../services/db.server';

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
  const userWithPassword = await db.user.findUnique({
    where: { email },
    include: {
      password: true,
    },
  });

  if (!userWithPassword || !userWithPassword.password) {
    return null;
  }

  const isValid = await bcrypt.compare(password, userWithPassword.password.hash);
  if (!isValid) {
    return null;
  }

  return { ...userWithPassword, password: null };
}
