import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';

import { categories } from 'mock/db/sql-categories';
import { CASBIN_POLICIES } from 'mock/db/sql-pemission';
import { posts } from 'mock/db/sql-posts';
import { roles } from 'mock/db/sql-roles';
import { userAdministrator } from 'mock/db/sql-users';
import { EnumAuthProvider } from '~/constants';

const db = new PrismaClient();

async function seed() {
  // 删除所有已存在的数据
  try {
    await db.user.deleteMany();
    await db.role.deleteMany();
    await db.post.deleteMany();
    await db.category.deleteMany();
    await db.casbinRule.deleteMany();
  } catch (error) {
    /**  */
  }

  // 初始化 Casbin 规则
  const rules = CASBIN_POLICIES.map(([ptype, v0, v1, v2, v3]) => ({
    ptype,
    v0,
    v1,
    v2,
    v3,
  }));

  await db.casbinRule.createMany({
    data: rules,
  });

  // 创建管理员用户
  const adminUser = await db.user.create({
    data: {
      email: userAdministrator.email,
      name: userAdministrator.name,
      avatar: userAdministrator.avatar,
      provider: EnumAuthProvider.userpass,
      password: {
        create: {
          hash: await bcrypt.hash(userAdministrator.password!, 10),
        },
      },
    },
  });

  // 创建角色
  const createdRoles = await Promise.all(
    roles.map((role) => {
      return db.role.create({
        data: {
          ...role,
          creator: {
            connect: { id: adminUser.id },
          },
        },
      });
    })
  );

  // 为管理员用户分配所有角色
  await Promise.all(
    createdRoles.map((role) =>
      db.userRole.create({
        data: {
          userId: adminUser.id,
          roleId: role.id,
        },
      })
    )
  );

  // 创建 categories
  await Promise.all(
    categories.map((category) => {
      const data = { ...category, userId: adminUser.id };
      return db.category.create({ data });
    })
  );

  // 创建 posts
  await Promise.all(
    posts.map((post) => {
      const { category, ...rest } = post;
      const data = { ...rest, userId: adminUser.id, categoryId: category.id };
      return db.post.create({ data });
    })
  );
}

async function main() {
  try {
    await seed();
  } catch (e) {
    console.error(e);
    process.exit(1);
  } finally {
    await db.$disconnect();
  }
}

main();
