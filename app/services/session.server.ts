import { createCookieSessionStorage } from '@remix-run/node';
import invariant from 'tiny-invariant';

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
