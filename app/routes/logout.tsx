import { LoaderFunctionArgs } from '@remix-run/node';
import { logout } from '~/services/session.server';

export async function loader({ request }: LoaderFunctionArgs) {
  return await logout(request);
}
