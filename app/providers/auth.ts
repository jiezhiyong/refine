import * as Sentry from '@sentry/remix';
import { AuthActionResponse, AuthProvider, CheckResponse } from '@refinedev/core';
import { User } from '@prisma/client';
import { SessionStorage, SessionData } from '@remix-run/node';

type AuthProviderLoginParams = {
  request: Request;
  providerName: 'user-pass' | 'github';
  email: string;
  password: string;
  redirectTo?: string;
};

export const authProvider: {
  login: (params: AuthProviderLoginParams) => Promise<AuthActionResponse & { user?: User }>;
  logout: () => Promise<AuthActionResponse>;
  check: (params: {
    request: Request;
    sessionStorage: SessionStorage<SessionData, SessionData>;
  }) => Promise<CheckResponse>;
  getIdentity: (params: {
    request: Request;
    sessionStorage: SessionStorage<SessionData, SessionData>;
  }) => Promise<User | null>;
  onError: Required<Pick<AuthProvider, 'onError'>>['onError'];
} = {
  login: async ({ request, providerName, email, password, redirectTo = '/' }: AuthProviderLoginParams) => {
    try {
      const formData = new FormData();

      formData.append('email', email);
      formData.append('password', password);

      const origin = request.headers.get('origin');
      const response = await fetch(`${origin}/api/auth/${providerName}`, {
        method: 'POST',
        body: formData,
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

  check: async ({ request, sessionStorage }) => {
    const redirectTo = `/login?redirectTo=${request.url}`;

    try {
      const session = await sessionStorage.getSession(request.headers.get('Cookie'));
      const user = session.get('user');

      if (user.id) {
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

  getIdentity: async ({ request, sessionStorage }) => {
    try {
      const session = await sessionStorage.getSession(request.headers.get('Cookie'));
      const user = session.get('user') as User;

      if (user.id) {
        return user;
      }

      return null;
    } catch (error) {
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
};
