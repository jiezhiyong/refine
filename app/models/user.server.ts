import type { Password, User } from '@prisma/client';
import bcrypt from 'bcryptjs';

import { EnumRole, EnumRoleId, TAuthProvider } from '~/constants';
import { db } from '~/services';
import { TAny } from '~/types';

/** 根据 ID 获取用户 */
export async function getUserById(id: User['id']) {
  const user = await db.user.findUnique({
    where: { id },
    include: {
      roles: {
        include: {
          role: true,
        },
      },
    },
  });

  return withRoles(user);
}

/** 根据 Email 获取用户 */
export async function getUserByEmail(email: User['email']) {
  const user = await db.user.findUnique({
    where: { email },
    include: {
      roles: {
        include: {
          role: true,
        },
      },
    },
  });

  return withRoles(user);
}

/** 创建新用户，默认分配 guest 权限 */
export async function createUser({
  email,
  name,
  password,
  provider,
}: {
  email: User['email'];
  password?: string;
  name?: string;
  provider: TAuthProvider;
}) {
  const user = await db.user.create({
    data: {
      email,
      name: name || email.split('@')[0],
      provider,
      password: password
        ? {
            create: {
              hash: await bcrypt.hash(password, 10),
            },
          }
        : undefined,
    },
  });

  await db.userRole.create({
    data: {
      userId: user.id,
      roleId: EnumRoleId.guest,
    },
  });

  return { ...user, role: EnumRole.guest, roles: [EnumRole.guest] };
}

/** 删除用户 */
export async function deleteUserByEmail(email: User['email']) {
  return db.user.delete({ where: { email } });
}

/** 验证用户登录 */
export async function verifyUserpassLogin(email: User['email'], password: Password['hash']) {
  const user = await db.user.findUnique({
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

  if (!user || !user.password) {
    return null;
  }

  const isValid = await bcrypt.compare(password, user.password.hash);
  if (!isValid) {
    return null;
  }

  return withRoles(user);
}

// 提取角色
const withRoles = (_userWithRoles: (User & { roles: { role: { title: string } & Record<string, TAny> }[] }) | null) => {
  if (!_userWithRoles) {
    return null;
  }

  // 定义角色优先级映射
  const rolePriority: { [key: string]: number } = {
    administrator: 1,
    editor: 2,
    guest: 3,
  };

  // 按照预定义顺序排序角色
  const roles = _userWithRoles.roles
    .map((userRole) => userRole.role.title)
    .sort((a, b) => rolePriority[a] - rolePriority[b]);

  const userWithRoles = {
    ..._userWithRoles,
    password: '******',
    roles,
    role: roles[0],
  };

  return userWithRoles;
};
