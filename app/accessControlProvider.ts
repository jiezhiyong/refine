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

export const accessControlProvider: AccessControlProvider = {
  can: async ({ resource, action, params }) => {
    const enforcer = await newEnforcer(model, adapter);

    if (action === 'delete' || action === 'edit' || action === 'show') {
      const can = await enforcer.enforce(role, `${resource}/${params?.id}`, action);
      return { can };
    }

    if (action === 'field') {
      const can = await enforcer.enforce(role, `${resource}/${params?.field}`, action);
      return { can };
    }

    const can = await enforcer.enforce(role, resource, action);
    return { can };
  },
  options: {
    queryOptions: {},
    buttons: {
      enableAccessControl: true,
      hideIfUnauthorized: false,
    },
  },
};
