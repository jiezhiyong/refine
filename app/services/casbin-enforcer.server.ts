import * as Sentry from '@sentry/remix';
import { newEnforcer } from 'casbin';
import { PrismaAdapter } from 'casbin-prisma-adapter';

import { db } from '~/services/db.server';

import { MODEL } from './casbin-rules.server';

// 保存 enforcer 实例
let enforcer: Awaited<ReturnType<typeof newEnforcer>> | null = null;

// 理论上应该监听数据库变更，更新最后更新时间，如果最后更新时间大于最后加载时间，则需要重新加载策略
// 但这里简单处理，每次都重新加载：节流 1min
let lastPolicyLoadTime = 0;

export async function createEnforcer() {
  try {
    if (enforcer !== null && enforcer !== undefined) {
      if (Date.now() - lastPolicyLoadTime > 60000) {
        try {
          if (typeof enforcer.loadPolicy === 'function') {
            await enforcer.loadPolicy();
            lastPolicyLoadTime = Date.now();
          } else {
            const adapter = await PrismaAdapter.newAdapter(db);
            enforcer = await newEnforcer(MODEL, adapter);
            lastPolicyLoadTime = Date.now();
          }
        } catch (loadError) {
          console.error('Error loading policy:', loadError);
          Sentry.captureException(loadError);

          const adapter = await PrismaAdapter.newAdapter(db);
          enforcer = await newEnforcer(MODEL, adapter);
          lastPolicyLoadTime = Date.now();
        }
      }

      return enforcer;
    }

    console.log('Creating new enforcer...');
    const adapter = await PrismaAdapter.newAdapter(db);
    enforcer = await newEnforcer(MODEL, adapter);
    lastPolicyLoadTime = Date.now();

    return enforcer;
  } catch (error) {
    console.error('Failed to create enforcer:', error);
    Sentry.captureException(error);

    try {
      console.log('Attempting to create enforcer with model only...');
      enforcer = await newEnforcer(MODEL);
      lastPolicyLoadTime = Date.now();
      return enforcer;
    } catch (fallbackError) {
      console.error('Failed to create fallback enforcer:', fallbackError);
      Sentry.captureException(fallbackError);

      throw new Error('无法创建权限检查器，请联系系统管理员');
    }
  }
}
