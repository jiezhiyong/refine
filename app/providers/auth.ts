import { User } from '@prisma/client';
import { AuthActionResponse, AuthProvider, CheckResponse } from '@refinedev/core';
import * as Sentry from '@sentry/remix';

import { apiBase } from '~/config/base-url';
import { dashboardResource } from '~/config/resources';
import { TRole } from '~/constants/roles';
import { TAuthProvider } from '~/constants/user';
import { TAny } from '~/types/any';
import { PermissionRule } from '~/types/casbin';
import { canUseDOM } from '~/utils/can-use-dom';
import { verifySignature } from '~/utils/signature';

// 添加全局类型声明
declare global {
  interface Window {
    __PERMISSIONS_DATA__?: {
      permissions: PermissionRule[];
      signature: string;
    };
  }
}

type AuthProviderLoginParams = {
  providerName: TAuthProvider;
  email: string;
  password: string;
  redirectTo?: string;
};

let permissionsCache: PermissionRule[] | null = null;
let identityCache: User | null = null;

export const authProvider: {
  login: (
    params: AuthProviderLoginParams
  ) => Promise<AuthActionResponse & { user?: User & { role: TRole; roles: TRole[] } }>;
  logout: () => Promise<AuthActionResponse>;
  check: () => Promise<CheckResponse>;
  getIdentity: () => Promise<User | null>;
  getPermissions: (params?: Record<string, TAny>) => Promise<PermissionRule[]>;
  setPermissions: (permissions: PermissionRule[]) => Promise<void>;
  onError: Required<Pick<AuthProvider, 'onError'>>['onError'];
} = {
  login: async ({ providerName, email, password, redirectTo = dashboardResource }: AuthProviderLoginParams) => {
    const formData = new FormData();
    formData.append('email', email);
    formData.append('password', password);

    const response = await fetch(`${apiBase}/auth/${providerName}`, {
      method: 'POST',
      body: formData,
    });

    const res = await response.json();

    if (response.ok && res.id) {
      return {
        success: true,
        redirectTo,
        user: res,
      };
    }

    return {
      success: false,
      error: {
        message: res.message || '登录失败',
        name: 'Invalid credentials',
      },
    };
  },

  logout: async () => {
    Sentry.setUser(null);

    const redirectTo = encodeURIComponent(window.location.href);
    window.location.href = `/api/auth/logout?redirectTo=${redirectTo}`;

    return {
      success: true,
      redirectTo: `/login?redirectTo=${redirectTo}`,
    };
  },

  check: async () => {
    const redirectTo = `/login?redirectTo=${window.location.href}`;

    const response = await fetch(`${apiBase}/auth/me`);
    const { data } = await response.json();
    if (data && data.id) {
      return {
        authenticated: true,
      };
    }

    return {
      authenticated: false,
      error: {
        message: '未登录',
        name: 'Not authenticated',
      },
      logout: true,
      redirectTo,
    };
  },

  getIdentity: async () => {
    if (identityCache) {
      return identityCache;
    }

    const response = await fetch(`${apiBase}/auth/me`);
    const { data } = await response.json();
    if (data && data.id) {
      identityCache = data;
      return data;
    }

    return null;
  },

  onError: async (error) => {
    if (error.status === 401 || error.status === 403) {
      return {
        logout: true,
        redirectTo: '/login',
        error,
      };
    }

    return { error };
  },

  setPermissions: async (permissions: PermissionRule[]) => {
    permissionsCache = permissions;
  },
  getPermissions: async () => {
    // 优先使用内存缓存
    if (permissionsCache?.length) {
      return permissionsCache;
    }

    // 尝试从全局变量获取并验证权限数据
    if (canUseDOM() && window.__PERMISSIONS_DATA__) {
      const { permissions, signature } = window.__PERMISSIONS_DATA__;

      if (!permissions?.length) {
        return [];
      }

      if (await verifySignature({ data: permissions }, signature)) {
        permissionsCache = permissions;
        return permissionsCache;
      } else {
        console.error('@authProvider.getPermissions - 权限数据验证失败，可能被篡改');
      }
    }

    return [];
  },
};
