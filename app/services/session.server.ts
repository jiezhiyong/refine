import * as Sentry from '@sentry/remix';
import { createCookieSessionStorage, redirect } from '@remix-run/node';
import invariant from 'tiny-invariant';
import { getUserById } from '../models/user.server';
import { createThemeSessionResolver } from 'remix-themes';

invariant(process.env.SESSION_SECRET, 'SESSION_SECRET must be set.');

const USER_SESSION_KEY = 'userId';

type SessionData = {
  userId: string;
};

type SessionFlashData = {
  error: string;
};

/** 用户登录 Session */
const sessionStorage = createCookieSessionStorage<SessionData, SessionFlashData>({
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

/** 获取用户登录 Session */
export async function getSession(request: Request) {
  const cookie = request.headers.get('Cookie');
  return sessionStorage.getSession(cookie);
}

/** 获取用户 ID */
export const getUserId = async (request: Request) => {
  const session = await getSession(request);
  return session.get(USER_SESSION_KEY);
};

/** 获取用户信息 */
export async function getUser(request: Request) {
  let user = null;
  const userId = await getUserId(request);

  if (userId) {
    user = await getUserById(userId);
  }

  return user;
}

/** 校验用户登录 Session */
export const requireUserSession = async (request: Request, redirectTo: string = new URL(request.url).pathname) => {
  const user = await getUser(request);
  if (!user) {
    const searchParams = new URLSearchParams([['redirectTo', redirectTo]]);
    throw redirect(`/login?${searchParams}`);
  }

  return user;
};

/** 创建用户登录 Session */
export async function createUserSession({
  request,
  userId,
  remember = true,
  redirectTo,
}: {
  request: Request;
  userId: string;
  remember?: boolean;
  redirectTo: string;
}) {
  const session = await getSession(request);
  session.set(USER_SESSION_KEY, userId);

  return redirect(redirectTo, {
    headers: {
      'Set-Cookie': await sessionStorage.commitSession(session, {
        maxAge: remember ? 60 * 60 * 24 * 7 : undefined,
      }),
    },
  });
}

/** 用户登出 */
export async function logout(request: Request) {
  Sentry.setUser(null);

  const session = await getSession(request);
  return redirect('/login', {
    headers: {
      'Set-Cookie': await sessionStorage.destroySession(session),
    },
  });
}

/** 主题 Session */
const themeStorage = createCookieSessionStorage<SessionData, SessionFlashData>({
  cookie: {
    name: 'theme:state',
    secrets: [process.env.SESSION_SECRET ?? ''],
    path: '/',
    sameSite: 'lax',
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    maxAge: undefined,
  },
});

export const themeSessionResolver = createThemeSessionResolver(themeStorage);
