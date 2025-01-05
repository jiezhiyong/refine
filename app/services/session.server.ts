import { User } from '@prisma/client';
import { createCookieSessionStorage, redirect } from '@remix-run/node';
import invariant from 'tiny-invariant';
import { getUserById } from '~/models/user.server';

invariant(process.env.SESSION_SECRET, 'SESSION_SECRET must be set.');

export const sessionStorage = createCookieSessionStorage({
  cookie: {
    name: '__session',
    secrets: [process.env.SESSION_SECRET ?? ''],
    path: '/',
    sameSite: 'lax',
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    maxAge: 60 * 60 * 24 * 7, // 7 days
  },
});

export const { getSession, commitSession, destroySession } = sessionStorage;

// 重定向到登录页
const redirectToLogin = (request: Request, redirectTo = request.url) => {
  const searchParams = new URLSearchParams([['redirectTo', redirectTo]]);
  throw redirect(`/login?${searchParams}`);
};

// 获取 Session 中的 locale
export async function getSessionLocale(request: Request) {
  const session = await getSession(request.headers.get('Cookie'));
  return session.get('locale');
}

// 获取用户信息
export async function getUser(request: Request) {
  try {
    let user = null;
    const session = await getSession(request.headers.get('Cookie'));
    const userFromSession = session.get('user') as User;

    if (userFromSession.id) {
      user = await getUserById(userFromSession.id);
    }
    return user;
  } catch (error) {
    return null;
  }
}

// 校验用户登录 Session
export async function requireUserSession(request: Request, redirectTo: string = request.url) {
  try {
    const user = await getUser(request);
    if (!user?.id) {
      redirectToLogin(request, redirectTo);
    }

    return user;
  } catch (error) {
    redirectToLogin(request, redirectTo);
  }
}
