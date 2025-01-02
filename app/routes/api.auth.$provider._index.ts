import { type ActionFunctionArgs } from '@remix-run/node';
import { authenticator } from '~/services/auth.server';
import { TAny } from '~/types/any';

export async function loader() {
  return Response.json({ message: 'Method not allowed' }, { status: 405 });
}

export const action = async ({ request, params }: ActionFunctionArgs) => {
  try {
    const { provider } = params;
    const user = await authenticator.authenticate(provider || 'unknown', request);

    if (user) {
      return Response.json(user);
    }

    return Response.json({ message: 'Authentication failed' }, { status: 401 });
  } catch (error: TAny) {
    return Response.json({ message: error?.message || 'Authentication failed' }, { status: 401 });
  }
};
