import * as Sentry from '@sentry/remix';
import { newEnforcer } from 'casbin';
import { PrismaAdapter } from 'casbin-prisma-adapter';

import { db } from '~/services/db.server';

import { MODEL } from './casbin-rules.server';

// 保存 enforcer 实例
let enforcer: Awaited<ReturnType<typeof newEnforcer>> | null = null;

export async function createEnforcer() {
  try {
    if (enforcer) {
      return enforcer;
    }

    const adapter = await PrismaAdapter.newAdapter(db);
    enforcer = await newEnforcer(MODEL, adapter);

    return enforcer;
  } catch (error) {
    console.error('Failed to create enforcer:', error);
    Sentry.captureException(error);

    enforcer = await newEnforcer(MODEL);
    return enforcer;
  }
}
