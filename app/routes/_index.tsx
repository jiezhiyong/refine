import { LoaderFunctionArgs, redirect } from '@remix-run/node';

import { getDashboardResource } from '~/config/resources';

export async function loader({ request }: LoaderFunctionArgs) {
  const referer = request.headers.get('Referer');
  const origin = new URL(request.url).origin;

  const dashboardResource = getDashboardResource();
  if (
    (dashboardResource && dashboardResource !== '/' && !referer) ||
    (referer && referer.replace(origin, '').length < 1)
  ) {
    return redirect(dashboardResource);
  }

  return null;
}

export default function Index() {
  return null;
}
