import { Theme } from 'remix-themes';
import { LocaleLanguage } from '~/config';

export interface CookiePreferences {
  sidebarIsClose?: string;
  locale?: LocaleLanguage;
  theme?: Theme | null;
}

/** 获取用户偏好Cookie */
export const getPreferencesCookie = async (request: Request): Promise<CookiePreferences> => {
  const cookieHeader = request.headers.get('Cookie') || '';
  const cookies = cookieHeader.split('; ').find((s) => s.startsWith('preferences='));

  try {
    return JSON.parse(cookies?.split('=')[1] || '{}') as CookiePreferences;
  } catch (error) {
    return {};
  }
};

/** 获取待设置的用户偏好Cookie */
export const getPreferencesNextCookie = async (request: Request, cookie: CookiePreferences) => {
  const exitingCookie = (await getPreferencesCookie(request)) || {};

  const newCookie = JSON.stringify({
    ...exitingCookie,
    ...cookie,
  });

  return `preferences=${newCookie}; Path=/; SameSite=Lax`;
};

/** 设置用户偏好Cookie */
export const setPreferencesCookie = async (request: Request, cookie: CookiePreferences) => {
  const newCookie = await getPreferencesNextCookie(request, cookie);

  return new Response(null, {
    headers: {
      'Set-Cookie': newCookie,
    },
  });
};
