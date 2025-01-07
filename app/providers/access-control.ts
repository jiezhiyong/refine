import { AccessControlProvider } from '@refinedev/core';
import { apiBase } from '~/config/base-url';

export const accessControlProvider: AccessControlProvider = {
  can: async ({ resource, action, params }) => {
    const reason = 'You are not allowed to perform this action';

    try {
      if (action === 'delete' || action === 'edit' || action === 'show') {
        resource = `${resource}/${params?.id}`;
      } else if (action === 'field') {
        resource = `${resource}/${params?.field}`;
      }

      const response = await fetch(`${apiBase}/permissions/check`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ object: resource, action }),
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
  options: {
    buttons: { enableAccessControl: true, hideIfUnauthorized: false },
    queryOptions: { cacheTime: 5 * 60 * 1000, staleTime: 0 },
  },
};
