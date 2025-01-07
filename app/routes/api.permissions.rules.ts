import { LoaderFunctionArgs } from '@remix-run/node';
import { getAllPermissions } from '~/services/casbin-permission.server';
import { getUser } from '~/services/session.server';

export async function loader({ request }: LoaderFunctionArgs) {
  const permissions = await getAllPermissions();

  try {
    const user = await getUser(request);
    if (!user) {
      return Response.json({ error: 'Unauthorized', reason: 'No user found' }, { status: 401 });
    }

    const role = user?.role;

    if (!role) {
      return Response.json({ permissions: [], reason: 'role is undefined' });
    }

    const filtered = permissions.filter((p) => p.subject === role);
    if (filtered.length > 0) {
      return Response.json({ permissions: filtered });
    }

    return Response.json({ permissions: [], reason: 'rules are empty' });
  } catch (error) {
    console.error('Error occurred while processing request:', error);
    return Response.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
