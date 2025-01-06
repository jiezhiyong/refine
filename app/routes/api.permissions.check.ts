import { ActionFunctionArgs } from '@remix-run/node';
import { checkPermission } from '~/services/casbin-permission.server';
import { getUser } from '~/services/session.server';

export async function action({ request }: ActionFunctionArgs) {
  if (request.method !== 'POST') {
    return Response.json({ error: 'Method not allowed' }, { status: 405 });
  }

  const { object, action } = await request.json();

  const user = await getUser(request);
  const role = user?.role;

  if (!role) {
    return Response.json({ permitted: false, role, object, action });
  }

  const permitted = await checkPermission(role, object, action);

  console.log('checkPermission:', role, object, action, '=>', permitted); // TODO: delete this
  return Response.json({ permitted, role, object, action });
}
