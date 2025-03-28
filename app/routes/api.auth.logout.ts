import type { LoaderFunctionArgs } from '@remix-run/node';
import { redirect } from '@remix-run/node';

import { dashboardResource } from '~/config/resources';
import { destroySession, getSession } from '~/services/session.server';
import { getAllParams } from '~/utils/get-all-params';

export const loader = async ({ request, params }: LoaderFunctionArgs) => {
  const mergedParams = await getAllParams<{ redirectTo?: string }>(request, params);
  const session = await getSession(request.headers.get('Cookie'));

  return redirect(`/login?redirectTo=${mergedParams.redirectTo || dashboardResource}`, {
    headers: {
      'Set-Cookie': await destroySession(session),
    },
  });
};
