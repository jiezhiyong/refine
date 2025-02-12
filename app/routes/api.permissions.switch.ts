import { ActionFunctionArgs } from '@remix-run/node';

import { TRole } from '~/constants';
import { commitSession, requireUser } from '~/services';

export async function action({ request }: ActionFunctionArgs) {
  if (request.method !== 'POST') {
    return Response.json({ error: 'Method not allowed' }, { status: 405 });
  }

  try {
    const formData = await request.formData();
    const nextRole = formData.get('role') as TRole;

    if (!nextRole) {
      throw new Error('Role is required');
    }

    const { user, session } = await requireUser(request);

    if (!user.roles?.includes(nextRole)) {
      throw new Error('You do not have permission to switch to this role');
    }

    if (!session) {
      throw new Error('Unauthorized');
    }

    session.set('user', { ...user, role: nextRole });

    return Response.json(
      { success: true },
      {
        headers: {
          'Set-Cookie': await commitSession(session),
        },
      }
    );
  } catch (error) {
    return Response.json({ error }, { status: 401 });
  }
}

export default function UI() {
  return null;
}
