import type { AuthProvider, User } from '@prisma/client';
import bcrypt from 'bcryptjs';

import { EnumRole, rolePriority } from '~/constants/roles';
import { db } from '~/services/db.server';
import { TAny } from '~/types/any';

/** 根据 ID 获取用户 */
export async function getUserById(id: User['id']) {
  const user = await db.user.findUnique({
    where: { id },
    include: {
      roles: {
        select: {
          role: {
            select: {
              title: true,
            },
          },
        },
      },
    },
  });

  return withUserRoles(user);
}

/** 根据 Email 获取用户 */
export async function getUserByEmail(email: User['email']) {
  const user = await db.user.findUnique({
    where: { email },
    include: {
      roles: {
        select: {
          role: {
            select: {
              title: true,
            },
          },
        },
      },
    },
  });

  return withUserRoles(user);
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
  provider: AuthProvider;
}) {
  const user = await db.user.create({
    data: {
      avatar: '/images/avatar.jpg',
      email,
      name: name || email.split('@')[0],
      provider,
      password,
    },
  });

  const roleGuest = await db.role.findUnique({
    where: { title: EnumRole.guest },
  });

  await db.userRole.create({
    data: {
      user: {
        connect: {
          id: user.id,
        },
      },
      role: {
        connect: {
          id: roleGuest?.id,
        },
      },
    },
  });

  return { ...user, role: EnumRole.guest, roles: [EnumRole.guest] };
}

/** 删除用户 */
export async function deleteUserByEmail(email: User['email']) {
  return db.user.delete({ where: { email } });
}

/** 验证用户登录 */
export async function verifyUserpassLogin(email: User['email'], password: string) {
  const user = await db.user.findUnique({
    where: { email },
    include: {
      roles: {
        select: {
          role: {
            select: {
              title: true,
            },
          },
        },
      },
    },
  });

  if (!user || !user.password) {
    return null;
  }

  const isValid = await bcrypt.compare(password, user.password);
  if (!isValid) {
    return null;
  }

  return withUserRoles(user);
}

export type UserWithRoles = ReturnType<typeof withUserRoles>;

// 提取角色
const withUserRoles = (
  _userWithRoles: (User & { roles: { role: { title: string } & Record<string, TAny> }[] }) | null
) => {
  if (!_userWithRoles) {
    return null;
  }

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

/**
 * 更新用户角色
 * 开启事务：原子性保证、数据一致性、并发安全
 */
export async function updateUserRoles({ roleIds, userId }: { roleIds: string[]; userId: string }) {
  return await db.$transaction(async (tx) => {
    // 1. 获取需要修改角色的用户当前所拥有的角色
    const currentRoles = await tx.userRole.findMany({
      where: { userId },
      select: { roleId: true },
    });

    const currentRoleIds = currentRoles.map((r) => r.roleId);

    // 2. 计算需要添加和删除的角色
    const rolesToAdd = roleIds.filter((id) => !currentRoleIds.includes(id));
    const rolesToRemove = currentRoleIds.filter((id) => !roleIds.includes(id));

    if (!rolesToRemove.length && !rolesToAdd.length) {
      return { message: '用户角色没有任何变更' };
    }

    // 3. 删除不再需要的角色关联
    if (rolesToRemove.length > 0) {
      await tx.userRole.deleteMany({
        where: {
          userId,
          roleId: { in: rolesToRemove },
        },
      });
    }

    // 4. 添加新的角色关联
    if (rolesToAdd.length > 0) {
      await tx.userRole.createMany({
        data: rolesToAdd.map((roleId) => ({
          userId,
          roleId,
        })),
      });
    }

    // 5. 返回更新后的用户数据
    return await tx.user.findUnique({
      where: { id: userId },
      include: {
        roles: {
          include: {
            role: true,
          },
        },
      },
    });
  });
}
