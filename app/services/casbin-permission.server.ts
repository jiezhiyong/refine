import { PermissionRule } from '~/types/casbin';
import { createEnforcer } from './casbin-enforcer.server';

export async function checkPermission(subject: string, object: string, action: string): Promise<boolean> {
  const enforcer = await createEnforcer();
  return enforcer.enforce(subject, object, action);
}

export async function getAllPermissions(): Promise<PermissionRule[]> {
  const enforcer = await createEnforcer();
  const policies = await enforcer.getPolicy();
  return policies.map(([subject, object, action, effect]) => ({
    subject,
    object,
    action,
    effect,
  }));
}
