import { LoaderFunctionArgs, redirect } from '@remix-run/node';

import { requireUserSession } from '~/services';

export async function loader({ request }: LoaderFunctionArgs) {
  await requireUserSession(request);
  return redirect('/playground/dashboard/about');
}
