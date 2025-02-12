import type { LoaderFunctionArgs } from '@remix-run/node';
import { redirect } from '@remix-run/node';

import { destroySession, getSession } from '~/services';
import { getAllParams } from '~/utils';

export const loader = async ({ request, params }: LoaderFunctionArgs) => {
  const mergedParams = await getAllParams<{ redirectTo?: string }>(request, params);
  const session = await getSession(request.headers.get('Cookie'));

  return redirect(`/login?redirectTo=${mergedParams.redirectTo || '/'}`, {
    headers: {
      'Set-Cookie': await destroySession(session),
    },
  });
};

export default function UI() {
  return null;
}
