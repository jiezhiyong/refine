import { AccessControlProvider } from '@refinedev/core';

import { EnumAction } from '~/constants';

import { authProvider } from './auth';

export const accessControlProvider: AccessControlProvider = {
  can: async ({ resource = '', action, params }) => {
    try {
      const permissions = await authProvider.getPermissions();

      if (!permissions?.length) {
        return {
          can: false,
          reason: 'No permission rules found',
        };
      }

      if (action === EnumAction.delete || action === EnumAction.edit || action === EnumAction.show) {
        resource = `${resource}/${params?.id}`;
      } else if (action === EnumAction.field) {
        resource = `${resource}/${params?.field}`;
      }

      const matchedRules = permissions.filter((rule) => {
        return (
          (rule.object === '*' || keyMatch(resource, rule.object)) &&
          (rule.action === '*' || regexMatch(action, rule.action))
        );
      });

      // 如果没有匹配的规则，则拒绝访问
      if (matchedRules.length === 0) {
        return {
          can: false,
          reason: 'Permission denied',
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
        reason: !permitted ? 'You are not allowed to perform this action' : undefined,
      };
    } catch (error) {
      console.error('@accessControlProvider - Permission check failed:', error);
      return {
        can: false,
        reason: 'Permission check failed',
      };
    }
  },
  options: {
    buttons: { enableAccessControl: true, hideIfUnauthorized: false },
    queryOptions: { cacheTime: 5 * 60 * 1000, staleTime: 0 },
  },
};

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
