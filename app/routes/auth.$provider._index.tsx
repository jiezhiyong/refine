import { type ActionFunctionArgs } from '@remix-run/node';
import { authenticator } from '~/services/auth.server';

export async function loader() {
  return Response.json(
    { message: 'you are not allowed to use this GET method api.' },
    { status: 403, statusText: 'Forbidden' }
  );
}

export const action = async ({ request, params }: ActionFunctionArgs) => {
  const { provider } = params;
  await authenticator.authenticate(provider || 'unknown', request);
};
