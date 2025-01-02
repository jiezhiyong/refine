import { LoaderFunctionArgs, redirect } from '@remix-run/node';
import { authProvider } from '~/providers/auth';
import { sessionStorage } from '~/services/session.server';

export async function loader({ request }: LoaderFunctionArgs) {
  const { authenticated, redirectTo } = await authProvider.check({ request, sessionStorage });

  if (!authenticated) {
    throw redirect(redirectTo!);
  }

  return redirect('/post');
}
