import { createCookie } from '@remix-run/node';
import invariant from 'tiny-invariant';
import { TypeLocaleLanguage } from '~/config/i18n';

invariant(process.env.SESSION_SECRET, 'SESSION_SECRET must be set.');

export interface CookiePreferences {
  sidebarIsClose?: boolean;
  lng?: TypeLocaleLanguage;
}

/** 用户偏好Cookie */
export const preferencesCookie = createCookie('user-preferences', {
  secrets: [process.env.SESSION_SECRET ?? ''],
  path: '/',
  sameSite: 'lax',
  httpOnly: true,
  secure: process.env.NODE_ENV === 'production',
});

/** 获取用户偏好Cookie */
export const getCookie = async (request: Request): Promise<CookiePreferences> => {
  const cookieHeader = request.headers.get('Cookie');

  return await preferencesCookie.parse(cookieHeader);
};

/** 设置用户偏好Cookie */
export const setCookie = async (request: Request, cookie: CookiePreferences) => {
  const exitingCookie = await getCookie(request);
  const cookieHeader = await preferencesCookie.serialize({
    ...exitingCookie,
    ...cookie,
  });

  return new Response(null, {
    headers: {
      'Set-Cookie': cookieHeader,
    },
  });
};
