import type { LoaderFunction } from 'react-router';

import { getUser } from '@/services/session.server';

export const loader: LoaderFunction = async ({ request }) => {
  const user = await getUser(request);
  return Response.json({ data: user });
};
