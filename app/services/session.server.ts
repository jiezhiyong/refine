import { createCookieSessionStorage, redirect } from '@remix-run/node';
import invariant from 'tiny-invariant';
import { authProvider } from '~/providers/auth';

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

// type LoginForm = {
//   email: string;
//   password: string;
// };

// export async function login({ email, password }: LoginForm) {
//   try {
//     const user = await authProvider.login({ email, password });
//     if (user) {
//       return { user };
//     }
//   } catch (error) {
//     return error;
//   }
// }

// export async function requireUserId(request: Request, redirectTo: string = new URL(request.url).pathname) {
//   try {
//     const user = await authProvider.check?.({ request, storage });
//     return user;
//   } catch (error) {
//     const searchParams = new URLSearchParams([['to', redirectTo]]);
//     throw redirect(`/login?${searchParams}`);
//   }
// }

// export async function createUserSession(user: object, redirectTo: string) {
//   const session = await storage.getSession();
//   session.set('user', { ...user });
//   return redirect(redirectTo, {
//     headers: {
//       'Set-Cookie': await storage.commitSession(session),
//     },
//   });
// }

// export async function logout(request: Request) {
//   const session = await storage.getSession(request.headers.get('Cookie'));
//   return redirect('/login', {
//     headers: {
//       'Set-Cookie': await storage.destroySession(session),
//     },
//   });
// }
