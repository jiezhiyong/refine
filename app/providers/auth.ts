import * as Sentry from '@sentry/remix';
import { AuthActionResponse, AuthProvider } from '@refinedev/core';
import { User } from '@prisma/client';

type AuthProviderLoginParams = {
  request: Request;
  providerName: 'user-pass' | 'github';
  email: string;
  password: string;
  redirectTo?: string;
};

export const authProvider: Omit<AuthProvider, 'getIdentity'> & {
  login: (params: AuthProviderLoginParams) => Promise<AuthActionResponse>;
  getIdentity: (request: Request) => Promise<User | null>;
  register: Required<Pick<AuthProvider, 'register'>>['register'];
  forgotPassword: Required<Pick<AuthProvider, 'forgotPassword'>>['forgotPassword'];
  updatePassword: Required<Pick<AuthProvider, 'updatePassword'>>['updatePassword'];
  getPermissions: Required<Pick<AuthProvider, 'getPermissions'>>['getPermissions'];
} = {
  login: async ({ request, providerName, email, password, redirectTo = '/' }: AuthProviderLoginParams) => {
    try {
      const formData = new FormData();
      formData.append('email', email);
      formData.append('password', password);

      const host = request.headers.get('origin');
      const response = await fetch(`${host}/auth/${providerName}`, {
        method: 'POST',
        body: formData,
      });

      console.log('response', response);

      // const formData = new FormData();
      // formData.append('email', email);
      // formData.append('password', password);

      // const user = await authenticator.authenticate(
      //   'user-pass',
      //   new Request('', {
      //     method: 'POST',
      //     body: formData,
      //   })
      // );

      // if (user) {
      //   Sentry.setUser({ email: user?.email, username: user?.username || '?', id: user?.id });

      //   return {
      //     success: true,
      //     redirectTo,
      //   };
      // }

      return {
        success: false,
        error: {
          message: '登录失败',
          name: 'Invalid credentials',
        },
      };
    } catch (error) {
      console.error(error);
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
    try {
      await sessionStorage.destroySession(await sessionStorage.getSession());

      Sentry.setUser(null);

      return { success: true, redirectTo: '/login' };
    } catch (error) {
      return {
        success: false,
        error: {
          message: '登出失败',
          name: 'Logout Error',
        },
      };
    }
  },

  check: async (request: Request) => {
    const redirectTo = `/login?redirectTo=${request.url}`;

    try {
      const session = await sessionStorage.getSession(request.headers.get('Cookie'));
      const id = session.get('id');

      if (id) {
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

  getIdentity: async (request: Request) => {
    try {
      const session = await sessionStorage.getSession(request.headers.get('Cookie'));
      const user = session.get('user') as User;

      if (user) {
        return user;
      }

      return null;
    } catch (error) {
      return null;
    }
  },

  onError: async (error) => {
    console.error(error);

    if (error.status === 401 || error.status === 403) {
      return {
        logout: true,
        redirectTo: '/login',
        error,
      };
    }

    return { error };
  },

  register: async ({ email, password }) => {
    try {
      console.log(email, password);
      // const existingUser = await getUserByEmail(email);

      // if (existingUser) {
      //   return {
      //     success: false,
      //     error: {
      //       message: 'A user already exists with this email.',
      //       name: 'Register Error',
      //     },
      //   };
      // }

      // await createUser(email, password);
      return {
        success: true,
        redirectTo: '/login',
      };
    } catch (error) {
      return {
        success: false,
        error: {
          message: '注册失败',
          name: 'Register Error',
        },
      };
    }
  },

  forgotPassword: async ({ email }) => {
    try {
      // TODO: await send password reset link to the user's email address

      return {
        success: true,
        redirectTo: '/login',
      };
    } catch (error) {
      return {
        success: false,
        error: {
          name: 'Forgot Password Error',
          message: 'Email send failed',
        },
      };
    }
  },

  updatePassword: async (request: Request) => {
    try {
      // TODO: await update the user's password

      return {
        success: true,
        redirectTo: '/login',
      };
    } catch (error) {
      return {
        success: false,
        error: {
          name: 'Updare Password Error',
          message: 'Password update failed',
        },
      };
    }
  },

  getPermissions: async (params) => {
    // TODO: get permissions

    return ['admin'];
  },
};
