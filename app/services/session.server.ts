import * as Sentry from '@sentry/remix';
import { createCookieSessionStorage, redirect } from '@remix-run/node';
import invariant from 'tiny-invariant';
import { createThemeSessionResolver } from 'remix-themes';
import { getUserById } from '~/models/user.server';
import { authProvider } from '~/authProvider';

type LoginParams = {
  email: string;
  password: string;
};

invariant(process.env.SESSION_SECRET, 'SESSION_SECRET must be set.');

/** 用户登录 Session */
const storage = createCookieSessionStorage({
  cookie: {
    name: '__session',
    secrets: [process.env.SESSION_SECRET ?? ''],
    path: '/',
    sameSite: 'lax',
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    maxAge: undefined,
  },
});

/** 用户登录 */
export async function login({ email, password }: LoginParams) {
  try {
    const user = await authProvider.login({ email, password });
    if (user) {
      return { user };
    }
  } catch (error) {
    return error;
  }
}

/** 重定向到登录页 */
const redirectToLogin = (request: Request, redirectTo = request.url) => {
  const searchParams = new URLSearchParams([['redirectTo', redirectTo]]);
  throw redirect(`/login?${searchParams}`);
};

/** 校验用户登录 Session */
export async function requireUserSession(request: Request, redirectTo: string = request.url) {
  try {
    const user = await authProvider.check?.({ request, storage });
    return user;
  } catch (error) {
    redirectToLogin(request, redirectTo);
  }
}

/** 创建用户登录 Session */
export async function createUserSession(user: object, redirectTo: string) {
  const session = await storage.getSession();
  session.set('user', { ...user });
  return redirect(redirectTo, {
    headers: {
      'Set-Cookie': await storage.commitSession(session),
    },
  });
}

/** 用户登出 */
export async function logout(request: Request) {
  const session = await storage.getSession(request.headers.get('Cookie'));

  Sentry.setUser(null);

  return redirect('/login', {
    headers: {
      'Set-Cookie': await storage.destroySession(session),
    },
  });
}

/** 获取用户 ID */
export const getUserId = async (request: Request) => {
  const session = await getSession(request);
  return session.get(USER_SESSION_KEY);
};

/** 获取用户信息 */
export async function getUser(request: Request) {
  try {
    let user = null;
    const userId = await getUserId(request);

    if (userId) {
      user = await getUserById(userId);
    }
    return user;
  } catch (error) {
    return {
      message: 'cannot get user in database.',
      id: '',
      username: '',
      email: '',
    };
  }
}

/** 主题 Session */
const themeStorage = createCookieSessionStorage({
  cookie: {
    name: 'theme',
    secrets: [process.env.SESSION_SECRET ?? ''],
    path: '/',
    sameSite: 'lax',
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    maxAge: undefined,
  },
});

export const themeSessionResolver = createThemeSessionResolver(themeStorage);
