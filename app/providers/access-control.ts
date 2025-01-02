import { AccessControlProvider, CanParams } from '@refinedev/core';
import { newEnforcer, newModel, StringAdapter } from 'casbin';
import { Resources } from '~/config/data-resources';

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
p, admin, post, (list)|(create)
p, admin, post/*, (edit)|(show)|(delete)
p, admin, post/*, field

p, admin, user, (list)|(create)
p, admin, user/*, (edit)|(show)|(delete)

p, admin, category, (list)|(create)
p, admin, category/*, (edit)|(show)|(delete)

p, editor, post, (list)|(create)
p, editor, post/*, (edit)|(show)
p, editor, post/hit, field, deny

p, editor, category, list
`);

const role = 'admin';

export const accessControlProvider: AccessControlProvider = {
  can: async ({ resource, action, params }) => {
    let can = false;

    const enforcer = await newEnforcer(model, adapter);
    const message = 'You are not allowed to perform this action';

    if (action === 'delete' || action === 'edit' || action === 'show') {
      can = await enforcer.enforce(role, `${resource}/${params?.id}`, action);
    }

    if (action === 'field') {
      can = await enforcer.enforce(role, `${resource}/${params?.field}`, action);
    }

    can = await enforcer.enforce(role, resource, action);

    return {
      can,
      reason: !can ? message : undefined,
    };
  },
  options: {
    buttons: { enableAccessControl: true, hideIfUnauthorized: false },
    queryOptions: { cacheTime: 5 * 60 * 1000, staleTime: 0 },
  },
};
