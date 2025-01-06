import { createCookieSessionStorage, redirect } from '@remix-run/node';
import invariant from 'tiny-invariant';
import { getUserById } from '~/models/user.server';
import { SessionUser } from '~/types/user';

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

// 获取用户 Session
export async function getUserSession(request: Request) {
  try {
    return getSession(request.headers.get('Cookie'));
  } catch (error) {
    return null;
  }
}

// 获取用户信息
export async function getUser(request: Request) {
  try {
    let user = null;
    const session = await getUserSession(request);
    const sessionUser = session?.get('user') as SessionUser;
    if (sessionUser?.id) {
      user = await getUserById(sessionUser.id);
    }
    return { ...sessionUser, ...user };
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

// 检验用户信息
export async function requireUser(request: Request) {
  try {
    const user = await getUser(request);
    if (!user?.id) {
      throw new Error('Unauthorized');
    }

    return { user, session: await getUserSession(request) };
  } catch (error) {
    return Promise.reject(error);
  }
}
