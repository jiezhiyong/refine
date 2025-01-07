import { AccessControlProvider } from '@refinedev/core';
import { apiBase } from '~/config/base-url';
import { PermissionRule } from '~/types/casbin';

let permissionRules: PermissionRule[] | null = null;

export const accessControlProvider: AccessControlProvider = {
  can: async ({ resource = '', action, params }) => {
    const reason = 'You are not allowed to perform this action';

    try {
      const rules = await loadPermissionRules();

      if (!rules || !rules.length) {
        return {
          can: false,
          reason,
        };
      }

      if (action === 'delete' || action === 'edit' || action === 'show') {
        resource = `${resource}/${params?.id}`;
      } else if (action === 'field') {
        resource = `${resource}/${params?.field}`;
      }

      const matchedRules = rules.filter((rule) => {
        return (
          (rule.object === '*' || keyMatch(resource, rule.object)) &&
          (rule.action === '*' || regexMatch(action, rule.action))
        );
      });

      // 如果没有匹配的规则，默认拒绝访问
      if (matchedRules.length === 0) {
        return {
          can: false,
          reason,
        };
      }

      // 按照规则的具体程度排序：具体路径 > 通配符路径
      const sortedRules = matchedRules.sort((a, b) => {
        const aSpecificity = (a.object.match(/\*/g) || []).length;
        const bSpecificity = (b.object.match(/\*/g) || []).length;
        return aSpecificity - bSpecificity;
      });

      // 使用最具体的规则（数组第一个元素）
      const mostSpecificRule = sortedRules[0];
      const permitted = mostSpecificRule.effect !== 'deny';

      return {
        can: permitted,
        reason: !permitted ? reason : undefined,
      };
    } catch (error) {
      console.error('@accessControlProvider - Permission check failed:', error);
      return {
        can: false,
        reason: reason,
      };
    }
  },
  options: {
    buttons: { enableAccessControl: true, hideIfUnauthorized: false },
    queryOptions: { cacheTime: 5 * 60 * 1000, staleTime: 0 },
  },
};

async function loadPermissionRules() {
  if (permissionRules?.length) return permissionRules;

  const response = await fetch(`${apiBase}/permissions/rules`, {
    credentials: 'include',
  });
  const data = await response.json();
  permissionRules = data?.permissions as PermissionRule[];

  console.log('permissionRules', permissionRules);

  return permissionRules;
}

function keyMatch(key1: string, key2: string): boolean {
  const key2Parts = key2.split('/*');

  if (key2Parts.length === 1) {
    return key1 === key2;
  }

  const basePath = key2Parts[0];
  return key1.startsWith(basePath);
}

function regexMatch(pattern1: string, pattern2: string): boolean {
  try {
    const regex = new RegExp('^' + pattern2 + '$');
    return regex.test(pattern1);
  } catch {
    return pattern1 === pattern2;
  }
}
