import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';
import { userAdministrator, users } from '../public/sql-users.ts';
import { roles } from '../public/sql-roles.ts';
import { categories } from '../public/sql-categories.ts';
import { posts } from '../public/sql-posts.ts';
import { EnumAuthProvider } from '~/constants/auth.ts';

const db = new PrismaClient();

async function seed() {
  // 删除所有已存在的 user、roles、posts、categories
  try {
    await db.user.deleteMany();
    await db.role.deleteMany();
    await db.post.deleteMany();
    await db.category.deleteMany();
  } catch (error) {
    /**  */
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
          hash: await bcrypt.hash(userAdministrator.password, 10),
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

  // 创建其他用户并分配角色
  await Promise.all(
    users.map(async (user) => {
      const { password, role, ...rest } = user;
      const newUser = await db.user.create({
        data: {
          ...rest,
          provider: EnumAuthProvider.userpass,
          password: {
            create: {
              hash: await bcrypt.hash(password, 10),
            },
          },
        },
      });

      await db.userRole.create({
        data: {
          userId: newUser.id,
          roleId: role.id,
        },
      });

      return newUser;
    })
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
