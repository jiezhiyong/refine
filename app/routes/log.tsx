import type { LoaderFunctionArgs } from '@remix-run/node';
import { requireUserSession } from '~/services/session.server';
import { PageError } from '~/components/500';
import Layout from '~/components/layout';

export async function loader({ request }: LoaderFunctionArgs) {
  await requireUserSession(request);
  return null;
}

// UI
export default function Log() {
  return <Layout />;
}

// 错误边界处理
export function ErrorBoundary() {
  return <PageError />;
}
