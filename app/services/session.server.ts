import { createCookieSessionStorage, redirect } from '@remix-run/node';
import invariant from 'tiny-invariant';

import { getUserById, UserWithRoles } from '~/services/user.server';
import { SessionUser } from '~/types/user';

invariant(process.env.VITE_SECRET, 'VITE_SECRET must be set.');

export const sessionStorage = createCookieSessionStorage({
  cookie: {
    name: '__session',
    secrets: [process.env.VITE_SECRET ?? ''],
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
    let user: UserWithRoles | null = null;
    const session = await getUserSession(request);
    const sessionUser = session?.get('user') as SessionUser | undefined;

    if (sessionUser?.id) {
      user = await getUserById(sessionUser.id);
    }

    return user ? { ...user, role: sessionUser?.role || null } : null;
  } catch (error) {
    console.error('@getUser', error);
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
      throw new Error('Unauthorized: user not found');
    }

    return { user, session: await getUserSession(request) };
  } catch (error) {
    return Promise.reject(error);
  }
}
