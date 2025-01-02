import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';
import { categories } from '../public/sql-categories.ts';
import { posts } from '../public/sql-posts.ts';

const db = new PrismaClient();

async function seed() {
  const email = 'admin@remix.run';

  try {
    await db.user.delete({ where: { email } });
  } catch (error) {
    /** */
  }

  const hashedPassword = await bcrypt.hash('Abc@12345678', 10);
  const newUser = await db.user.create({
    data: {
      email,
      name: 'Brian Goodman',
      username: 'shadcn',
      avatar: 'https://ui.shadcn.com/avatars/shadcn.jpg',
      password: {
        create: {
          hash: hashedPassword,
        },
      },
    },
  });

  // 删除所有已存在的 posts、categories
  try {
    await db.post.deleteMany();
    await db.category.deleteMany();
  } catch (error) {
    /**  */
  }

  // 首先创建 categories
  await Promise.all(
    categories.map((category) => {
      const data = { ...category };
      return db.category.create({ data });
    })
  );

  // 然后创建 posts
  await Promise.all(
    posts.map((post) => {
      const { category, ...rest } = post;
      const data = { ...rest, userId: newUser.id, categoryId: category.id };
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
