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
p, admin, posts, (list)|(create)
p, admin, posts/*, (edit)|(show)|(delete)
p, admin, posts/*, field

p, admin, users, (list)|(create)
p, admin, users/*, (edit)|(show)|(delete)

p, admin, categories, (list)|(create)
p, admin, categories/*, (edit)|(show)|(delete)

p, editor, posts, (list)|(create)
p, editor, posts/*, (edit)|(show)
p, editor, posts/hit, field, deny

p, editor, categories, list
`);

const role = 'admin';

export const accessControlProvider: AccessControlProvider = {
  can: async ({ resource, action, params }) => {
    const enforcer = await newEnforcer(model, adapter);
    const reason = 'You are not allowed to perform this action';

    if (action === 'delete' || action === 'edit' || action === 'show') {
      return {
        can: await enforcer.enforce(role, `${resource}/${params?.id}`, action),
        reason,
      };
    }

    if (action === 'field') {
      return {
        can: await enforcer.enforce(role, `${resource}/${params?.field}`, action),
        reason,
      };
    }

    return {
      can: await enforcer.enforce(role, resource, action),
      reason,
    };
  },
  options: {
    buttons: { enableAccessControl: true, hideIfUnauthorized: false },
    queryOptions: { cacheTime: 5 * 60 * 1000, staleTime: 0 },
  },
};
