import { newModelFromString } from 'casbin';

/**
 * 访问控制模型
 * RBAC（基于角色的访问控制）和 ACL（访问控制列表）的混合模型
 */
const MODEL_CONF = `
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
`;

// 使用 newModelFromString 创建模型
export const MODEL = newModelFromString(MODEL_CONF);
