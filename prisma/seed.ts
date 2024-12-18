import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';
import { jokes } from '../mocks/jokes';

const db = new PrismaClient();

async function seed() {
  const email = 'spiderman@remix.run';
  await db.user.delete({ where: { email } }).catch(() => {
    /** */
  });

  const hashedPassword = await bcrypt.hash('12345678', 10);
  const spiderman = await db.user.create({
    data: {
      email,
      password: {
        create: {
          hash: hashedPassword,
        },
      },
    },
  });

  await Promise.all(
    jokes.map((joke) => {
      const data = { jokesterId: spiderman.id, ...joke };
      return db.joke.create({ data });
    })
  );
}

async function main() {
  try {
    await seed();
    console.log(`Database has been seeded. 🌱`);
  } catch (e) {
    console.error(e);
    process.exit(1);
  } finally {
    await db.$disconnect();
  }
}

main();
