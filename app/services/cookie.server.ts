import { createCookie } from '@remix-run/node';
import invariant from 'tiny-invariant';

invariant(process.env.SESSION_SECRET, 'SESSION_SECRET must be set.');

export interface CookiePreferences {
  ['sidebar:state']?: boolean;
}

/** 用户偏好Cookie */
export const signedCookie = createCookie('user-prefs', {
  secrets: [process.env.SESSION_SECRET ?? ''],
  path: '/',
  sameSite: 'lax',
  httpOnly: true,
  secure: true,
  maxAge: 7 * 24 * 60 * 60, // one week
});

/** 获取用户偏好Cookie */
export const getCookie = async (request: Request): Promise<CookiePreferences> => {
  const cookieHeader = request.headers.get('Cookie');

  return await signedCookie.parse(cookieHeader);
};

/** 设置用户偏好Cookie */
export const setCookie = async (request: Request, cookie: CookiePreferences) => {
  const exitingCookie = await getCookie(request);
  const cookieHeader = await signedCookie.serialize({
    ...exitingCookie,
    ...cookie,
  });

  return new Response(null, {
    headers: {
      'Set-Cookie': cookieHeader,
    },
  });
};
