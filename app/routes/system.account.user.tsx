import type { LoaderFunctionArgs } from '@remix-run/node';
import { requireUserSession } from '~/services/session.server';
import { PageError } from '~/components/500';
import { Layout } from '~/components/layout';
import { CanAccess } from '@refinedev/core';
import { PermissionDenied } from '~/components/403';

export async function loader({ request }: LoaderFunctionArgs) {
  await requireUserSession(request);
  return null;
}

// UI
export default function User() {
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
