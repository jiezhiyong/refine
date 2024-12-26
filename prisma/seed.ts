import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';
import { jokes } from '../mocks/jokes.ts';

const db = new PrismaClient();

async function seed() {
  const email = 'goodman@remix.run';
  await db.user.delete({ where: { email } }).catch(() => {
    /** */
  });

  const hashedPassword = await bcrypt.hash('12345678', 10);
  const goodman = await db.user.create({
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

  await Promise.all(
    jokes.map((joke) => {
      const data = { userId: goodman.id, ...joke };
      return db.joke.create({ data });
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
