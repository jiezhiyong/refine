import { TRole } from '~/constants';
import { PermissionRule } from '~/types';
import { createEnforcer } from './casbin-enforcer.server';
import { getUserSession } from './session.server';

export async function checkPermission(subject: string, object: string, action: string): Promise<boolean> {
  const enforcer = await createEnforcer();
  return enforcer.enforce(subject, object, action);
}

export async function getPermissions({
  request,
  userRole,
}: {
  request?: Request;
  userRole?: TRole;
}): Promise<PermissionRule[]> {
  let rules: PermissionRule[] = [];

  const enforcer = await createEnforcer();
  const policies = await enforcer.getPolicy();

  const rulesAll = policies.map(([subject, object, action, effect]) => ({
    subject,
    object,
    action,
    effect,
  }));

  let role = userRole;
  if (!role && request) {
    const session = await getUserSession(request);
    const user = session?.get('user');
    if (user?.role) {
      role = user.role;
    }
  }

  if (role) {
    rules = rulesAll.filter((rule) => rule.subject === role);
  }

  return rules;
}
