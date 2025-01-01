import { AuthProvider } from '@refinedev/core';

export const authProvider: AuthProvider = {
  login: async ({ email, password, redirectTo = '/' }) => {
    try {
      const response = await fetch('/auth/login', {
        method: 'POST',
        body: JSON.stringify({ email, password }),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        return {
          success: true,
          redirectTo,
        };
      }

      return {
        success: false,
        error: {
          message: '登录失败',
          name: 'Invalid credentials',
        },
      };
    } catch (error) {
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
      await fetch('/auth/logout', { method: 'POST' });
      return {
        success: true,
        redirectTo: '/login',
      };
    } catch (error) {
      return {
        success: false,
        error: {
          message: '退出失败',
          name: 'Logout Error',
        },
      };
    }
  },

  check: async () => {
    try {
      const response = await fetch('/auth/check');
      if (response.ok) {
        return {
          authenticated: true,
        };
      }
      return {
        authenticated: false,
        redirectTo: '/login',
      };
    } catch (error) {
      return {
        authenticated: false,
        redirectTo: '/login',
      };
    }
  },

  getIdentity: async () => {
    try {
      const response = await fetch('/auth/me');
      if (response.ok) {
        const user = await response.json();
        return user;
      }
    } catch (error) {
      return null;
    }
    return null;
  },

  onError: async (error) => {
    console.error(error);
    return { error };
  },
};
