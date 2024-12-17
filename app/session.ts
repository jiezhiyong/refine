import { createCookieSessionStorage, redirect } from '@remix-run/node';

type SessionData = {
  userId: string;
};

type SessionFlashData = {
  error: string;
};

const { getSession, commitSession, destroySession } = createCookieSessionStorage<SessionData, SessionFlashData>({
  cookie: {
    name: '__session',
    secrets: [process.env.COOKIE_SECRET ?? ''],
    path: '/',
    sameSite: 'lax',
    httpOnly: true,
    secure: true,
    maxAge: 7 * 24 * 60 * 60, // one week
  },
});

const requireUserSession = async (request: Request) => {
  const cookie = request.headers.get('cookie');
  const session = await getSession(cookie);

  if (!session.has('userId')) {
    throw redirect('/login');
  }

  return session;
};

export { getSession, commitSession, destroySession, requireUserSession };
