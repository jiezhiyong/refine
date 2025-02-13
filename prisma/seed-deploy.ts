import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';

import { CASBIN_POLICIES } from 'mock/db/sql-pemission';
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
  await db.user.create({
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
  console.log('已创建管理员用户');
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
