import { createCookie } from '@remix-run/node';

export interface CookiePreferences {
  sidebarIsOpen?: boolean;
}

export const prefs = createCookie('prefs', {
  maxAge: 604_800, // one week
});
