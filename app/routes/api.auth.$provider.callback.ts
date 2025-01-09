import type { LoaderFunctionArgs } from '@remix-run/node';
import { EnumAuthProvider } from '~/constants/auth';
import { authenticator } from '~/services/auth.server';

export const loader = ({ request, params }: LoaderFunctionArgs) => {
  const { provider } = params;
  console.log('loader', provider);
  //   return authenticator.authenticate(provider || EnumAuthProvider.tcshuke, request);
  return {};
};
