import { AuthProvider } from '@refinedev/core';
import Cookies from 'js-cookie';
import * as cookie from 'cookie';
import { verifyLogin } from './models/user.server';

const COOKIE_NAME = 'user';

export const authProvider: AuthProvider = {
  login: async ({ email, password, remember }) => {
    const user = await verifyLogin(email, password);

    if (user) {
      Cookies.set(COOKIE_NAME, JSON.stringify(user));
      return { success: true };
    }

    return { success: false };
  },
  logout: async () => {
    Cookies.remove(COOKIE_NAME);

    return {
      success: true,
      redirectTo: '/login',
    };
  },
  onError: async (error) => {
    if (error && error.statusCode === 401) {
      return {
        error: new Error('Unauthorized'),
        logout: true,
        redirectTo: '/login',
      };
    }

    return {};
  },
  check: async (context) => {
    let user = undefined;
    if (context) {
      // for SSR
      const { request } = context;
      const parsedCookie = cookie.parse(request.headers.get('Cookie'));
      user = parsedCookie[COOKIE_NAME];
    } else {
      // for CSR
      const parsedCookie = Cookies.get(COOKIE_NAME);
      user = parsedCookie ? JSON.parse(parsedCookie) : undefined;
    }

    if (!user) {
      return {
        authenticated: false,
        error: { message: 'Check failed', name: 'Unauthorized' },
        logout: true,
        redirectTo: '/login',
      };
    }

    return { authenticated: true };
  },
  getPermissions: async () => {
    return null;
  },
  getIdentity: async () => {
    return null;
  },
};
