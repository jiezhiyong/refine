import type { LoaderFunction } from '@remix-run/node';
import { getUser } from '~/services/session.server';

export const loader: LoaderFunction = async ({ request }) => {
  const user = await getUser(request);
  return Response.json({ data: user });
};
