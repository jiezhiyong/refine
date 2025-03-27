import { CanAccess } from '@refinedev/core';
import type { LoaderFunctionArgs } from '@remix-run/node';

import { PermissionDenied } from '~/components/403';
import { PageError } from '~/components/500';
import { SidebarLayout } from '~/components/layout';
import { requireUserSession } from '~/services/session.server';

export async function loader({ request }: LoaderFunctionArgs) {
  await requireUserSession(request);
  return null;
}

// UI
export default function AuditRecord() {
  return (
    <CanAccess fallback={<PermissionDenied />}>
      <SidebarLayout />
    </CanAccess>
  );
}

// 错误边界处理
export function ErrorBoundary() {
  return <PageError />;
}
