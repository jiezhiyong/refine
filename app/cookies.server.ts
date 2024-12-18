import { createCookie } from '@remix-run/node';
import invariant from 'tiny-invariant';

invariant(process.env.SESSION_SECRET, 'SESSION_SECRET must be set.');

export interface CookiePreferences {
  theme?: 'light' | 'dark';
  sidebarIsOpen?: boolean;
}

/**
 * 用户偏好Cookie
 */
export const signedCookie = createCookie('user-prefs', {
  secrets: [process.env.SESSION_SECRET ?? ''],
  path: '/',
  sameSite: 'lax',
  httpOnly: true,
  secure: true,
  maxAge: 7 * 24 * 60 * 60, // one week
});
