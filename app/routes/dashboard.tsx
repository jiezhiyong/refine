import { LoaderFunctionArgs } from '@remix-run/node';
import PageError from '~/components/500';
import Layout from '~/components/layout';
import { requireUserSession } from '~/services/session.server';

export async function loader({ request }: LoaderFunctionArgs) {
  await requireUserSession(request);
  return null;
}

// UI
export default function Post() {
  return <Layout />;
}

// 错误边界处理
export function ErrorBoundary() {
  return <PageError />;
}
