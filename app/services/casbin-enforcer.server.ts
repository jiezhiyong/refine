import { newEnforcer } from 'casbin';
import { PrismaAdapter } from 'casbin-prisma-adapter';

import { db } from '~/services/db.server';

import { MODEL } from './casbin-rules.server';

// 保存 enforcer 实例
let enforcer: Awaited<ReturnType<typeof newEnforcer>> | null = null;

export async function createEnforcer() {
  if (enforcer) {
    return enforcer;
  }

  const adapter = await PrismaAdapter.newAdapter(db);
  enforcer = await newEnforcer(MODEL, adapter);

  return enforcer;
}
