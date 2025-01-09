import type { LoaderFunctionArgs } from '@remix-run/node';
import { EnumAuthProvider } from '~/constants/auth';
import { authenticator } from '~/services/auth.server';

export const loader = ({ request, params }: LoaderFunctionArgs) => {
  const { provider } = params;
  return authenticator.authenticate(provider || EnumAuthProvider.tcshuke, request);
};
