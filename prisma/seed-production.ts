import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';

import { categories } from 'mock/db/sql-categories';
import { CASBIN_POLICIES } from 'mock/db/sql-pemission';
import { posts } from 'mock/db/sql-posts';
import { roles } from 'mock/db/sql-roles';
import { userAdministrator } from 'mock/db/sql-users';
import { EnumAuthProvider } from '~/constants';

const db = new PrismaClient();

export async function seedProduction() {
  // 检查是否已经初始化
  const adminExists = await db.user.findFirst({
    where: { email: userAdministrator.email },
  });

  if (adminExists) {
    console.log('生产环境数据已经初始化，跳过初始化过程');
    return;
  }

  console.log('开始初始化生产环境数据...');

  // 初始化 Casbin 规则
  const existingRules = await db.casbinRule.findMany();
  if (existingRules.length === 0) {
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
    console.log('已初始化 Casbin 规则');
  }

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
  console.log('已创建管理员用户');

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
  console.log('已创建角色');

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
  console.log('已为管理员用户分配所有角色');

  // 创建 categories
  await Promise.all(
    categories.map((category) => {
      const data = { ...category, userId: adminUser.id };
      return db.category.create({ data });
    })
  );
  console.log('已创建 categories');

  // 创建 posts
  await Promise.all(
    posts.map((post) => {
      const { category, ...rest } = post;
      const data = { ...rest, userId: adminUser.id, categoryId: category.id };
      return db.post.create({ data });
    })
  );
  console.log('已创建 posts');

  console.log('生产环境数据初始化完成');
}

async function main() {
  try {
    await seedProduction();
  } catch (e) {
    console.error('生产环境数据初始化失败:', e);
    process.exit(1);
  } finally {
    await db.$disconnect();
  }
}

main();
