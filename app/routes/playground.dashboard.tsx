import { CanAccess } from '@refinedev/core';
import { LoaderFunctionArgs } from '@remix-run/node';

import { Layout, PageError, PermissionDenied } from '~/components';
import { requireUserSession } from '~/services';

export async function loader({ request }: LoaderFunctionArgs) {
  await requireUserSession(request);
  return null;
}

// UI
export default function Dashboard() {
  return (
    <CanAccess fallback={<PermissionDenied />}>
      <Layout />
    </CanAccess>
  );
}

// 错误边界处理
export function ErrorBoundary() {
  return <PageError />;
}
