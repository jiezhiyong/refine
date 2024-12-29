import { createCookie } from '@remix-run/node';
import { RemixI18Next } from 'remix-i18next/server';
import * as i18n from '~/configs/i18n';
import { preferencesCookie } from './cookie.server';

export const localeCookie = createCookie('lng', {
  path: '/',
  sameSite: 'lax',
  secure: process.env.NODE_ENV === 'production',
  httpOnly: true,
});

export default new RemixI18Next({
  detection: {
    supportedLanguages: i18n.supportedLngs,
    fallbackLanguage: i18n.fallbackLng,
    cookie: preferencesCookie,
  },
  // This is the configuration for i18next used when translating messages server-side only
  i18next: { ...i18n },
});
