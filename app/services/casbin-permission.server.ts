import { PermissionRule } from '~/types/casbin';
import { createEnforcer } from './casbin-enforcer.server';
import { getUserSession } from './session.server';

export async function checkPermission(subject: string, object: string, action: string): Promise<boolean> {
  const enforcer = await createEnforcer();
  return enforcer.enforce(subject, object, action);
}

export async function getPermissions(request?: Request): Promise<PermissionRule[]> {
  const enforcer = await createEnforcer();
  const policies = await enforcer.getPolicy();

  let rules = policies.map(([subject, object, action, effect]) => ({
    subject,
    object,
    action,
    effect,
  }));

  if (request) {
    const session = await getUserSession(request);
    const user = session?.get('user');
    if (user?.role) {
      rules = rules.filter((rule) => rule.subject === user.role);
    }
  }

  return rules;
}
