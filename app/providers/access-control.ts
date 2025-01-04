import { AccessControlProvider } from '@refinedev/core';
import { newEnforcer, newModel, StringAdapter } from 'casbin';

export const model = newModel(`
[request_definition]
r = sub, obj, act

[policy_definition]
p = sub, obj, act, eft

[role_definition]
g = _, _

[policy_effect]
e = some(where (p.eft == allow)) && !some(where (p.eft == deny))

[matchers]
m = g(r.sub, p.sub) && keyMatch(r.obj, p.obj) && regexMatch(r.act, p.act)
`);

export const adapter = new StringAdapter(`
p, administrator, post, (list)|(create)
p, administrator, post/*, (edit)|(show)|(delete)
p, administrator, post/*, field
p, administrator, user, (list)|(create)
p, administrator, user/*, (edit)|(show)|(delete)
p, administrator, category, (list)|(create)
p, administrator, category/*, (edit)|(show)|(delete)
p, administrator, role, (list)|(create)
p, administrator, role/*, (edit)|(show)|(delete)

p, editor, post, (list)|(create)
p, editor, post/*, (edit)|(show)
p, editor, post/hit, field, deny
p, editor, user, list
p, editor, role, list
p, editor, category, list

p, guest, post, list
p, guest, post/*, show
p, guest, post/hit, field, deny
p, guest, user, list
p, guest, role, list
p, guest, category, list
`);

export const accessControlProvider: AccessControlProvider = {
  can: async ({ resource, action, params, context }) => {
    const userRoles = context?.roles || ['guest']; // 从 context 获取角色数组
    let can = false;

    const enforcer = await newEnforcer(model, adapter);
    const message = 'You are not allowed to perform this action';

    // 检查用户的所有角色
    for (const role of userRoles) {
      let hasPermission = false;

      if (action === 'delete' || action === 'edit' || action === 'show') {
        hasPermission = await enforcer.enforce(role, `${resource}/${params?.id}`, action);
      } else if (action === 'field') {
        hasPermission = await enforcer.enforce(role, `${resource}/${params?.field}`, action);
      } else {
        hasPermission = await enforcer.enforce(role, resource, action);
      }

      if (hasPermission) {
        can = true;
        break;
      }
    }

    const result = { can } as { can: boolean; reason?: string };
    if (!can) {
      result.reason = message;
    }

    return result;
  },
  options: {
    buttons: { enableAccessControl: true, hideIfUnauthorized: false },
    queryOptions: { cacheTime: 5 * 60 * 1000, staleTime: 0 },
  },
};
