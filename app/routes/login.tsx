import type { ActionFunctionArgs, LoaderFunctionArgs } from '@remix-run/node';
import { redirect, json, data } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import { getSession, commitSession, requireUserSession } from '~/session';

/** 加载器 */
export async function loader({ request }: LoaderFunctionArgs) {
  const session = await getSession(request.headers.get('Cookie'));

  if (session.has('userId')) {
    return redirect('/');
  }

  const res = { error: session.get('error') };

  return data(res, {
    headers: {
      'Set-Cookie': await commitSession(session),
    },
  });
}

/** 操作器 */
export async function action({ request }: ActionFunctionArgs) {
  const session = await requireUserSession(request);
  const form = await request.formData();
  const username = form.get('username');
  const password = form.get('password');

  const userId = 'await validateCredentials(username, password)';

  if (userId == null) {
    session.flash('error', 'Invalid username/password');

    return redirect('/login', {
      headers: {
        'Set-Cookie': await commitSession(session),
      },
    });
  }

  session.set('userId', userId);

  return redirect('/', {
    headers: {
      'Set-Cookie': await commitSession(session),
    },
  });
}

/** 组件 */
export default function Login() {
  const { error } = useLoaderData<typeof loader>();

  return (
    <div>
      {error ? <div className="error">{error}</div> : null}
      <form method="POST">
        <div>
          <p>Please sign in</p>
        </div>
        <label>
          Username: <input name="username" type="text" />
        </label>
        <label>
          Password: <input name="password" type="password" />
        </label>
      </form>
    </div>
  );
}
