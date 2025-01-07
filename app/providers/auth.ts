import * as Sentry from '@sentry/remix';
import { AuthActionResponse, AuthProvider, CheckResponse } from '@refinedev/core';
import { User } from '@prisma/client';
import { apiBase } from '~/config/base-url';
import { PermissionRule } from '~/types/casbin';

type AuthProviderLoginParams = {
  providerName: 'user-pass' | 'github';
  email: string;
  password: string;
  redirectTo?: string;
};

let permissionsCache: PermissionRule[] | null = null;

export const authProvider: {
  login: (params: AuthProviderLoginParams) => Promise<AuthActionResponse & { user?: User }>;
  logout: () => Promise<AuthActionResponse>;
  check: () => Promise<CheckResponse>;
  getIdentity: () => Promise<User | null>;
  getPermissions: (params?: Record<string, any>) => Promise<PermissionRule[]>;
  setPermissions: (permissions: PermissionRule[]) => void;
  onError: Required<Pick<AuthProvider, 'onError'>>['onError'];
} = {
  login: async ({ providerName, email, password, redirectTo = '/' }: AuthProviderLoginParams) => {
    try {
      const formData = new FormData();

      formData.append('email', email);
      formData.append('password', password);

      const response = await fetch(`${apiBase}/auth/${providerName}`, {
        method: 'POST',
        body: formData,
        credentials: 'include',
      });

      const res = await response.json();

      if (response.ok && res.id) {
        Sentry.setUser({ email: res?.email, username: res?.username || '?', id: res?.id });

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
    } catch (error) {
      console.error('@authProvider.login', error);
      return {
        success: false,
        error: {
          message: '登录失败，请检查用户名和密码',
          name: 'Invalid credentials',
        },
      };
    }
  },

  logout: async () => {
    Sentry.setUser(null);

    window.location.href = '/api/auth/logout';

    return {
      success: true,
      redirectTo: '/login',
    };
  },

  check: async () => {
    const redirectTo = `/login?redirectTo=${window.location.href}`;

    try {
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
    } catch (error) {
      return {
        authenticated: false,
        error: {
          message: '未登录',
          name: 'Not authenticated',
        },
        logout: true,
        redirectTo,
      };
    }
  },

  getIdentity: async () => {
    try {
      const response = await fetch(`${apiBase}/auth/me`);
      const { data } = await response.json();
      if (data && data.id) {
        return data;
      }

      return null;
    } catch (error) {
      console.error('@authProvider.getIdentity', error);
      return null;
    }
  },

  onError: async (error) => {
    console.error('@authProvider.onError', error);

    if (error.status === 401 || error.status === 403) {
      return {
        logout: true,
        redirectTo: '/login',
        error,
      };
    }

    return { error };
  },

  setPermissions: (permissions: PermissionRule[]) => {
    permissionsCache = permissions;
  },
  getPermissions: async () => {
    return permissionsCache || [];
  },
};
