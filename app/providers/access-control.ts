import { AccessControlProvider } from '@refinedev/core';
import { apiBase } from '~/config/base-url';

export const accessControlProvider: AccessControlProvider = {
  can: async ({ resource, action, params }) => {
    const reason = 'You are not allowed to perform this action';

    try {
      const response = await fetch(`${apiBase}/permissions/check`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ object: resource ?? '', action }),
      });

      const { permitted } = await response.json();

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

  // can: async ({ resource, action, params, context }) => {
  //   const userRoles = context?.roles || ['guest']; // 从 context 获取角色数组
  //   let can = false;

  //   const enforcer = await newEnforcer(model, adapter);
  //   const message = 'You are not allowed to perform this action';

  //   // 检查用户的所有角色
  //   for (const role of userRoles) {
  //     let hasPermission = false;

  //     if (action === 'delete' || action === 'edit' || action === 'show') {
  //       hasPermission = await enforcer.enforce(role, `${resource}/${params?.id}`, action);
  //     } else if (action === 'field') {
  //       hasPermission = await enforcer.enforce(role, `${resource}/${params?.field}`, action);
  //     } else {
  //       hasPermission = await enforcer.enforce(role, resource, action);
  //     }

  //     if (hasPermission) {
  //       can = true;
  //       break;
  //     }
  //   }

  //   const result = { can } as { can: boolean; reason?: string };
  //   if (!can) {
  //     result.reason = message;
  //   }

  //   return result;
  // },
  options: {
    buttons: { enableAccessControl: true, hideIfUnauthorized: false },
    queryOptions: { cacheTime: 5 * 60 * 1000, staleTime: 0 },
  },
};
