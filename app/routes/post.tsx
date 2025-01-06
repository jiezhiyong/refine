import { data, LoaderFunctionArgs } from '@remix-run/node';
import { accessControlProvider } from '~/providers/access-control';
import { PageError } from '~/components/500';
import Layout from '~/components/layout';
import { HandleFunction } from '~/types/handle';
import { requireUserSession } from '~/services/session.server';
import { CanAccess } from '@refinedev/core';
import { PermissionDenied } from '~/components/403';

// 创建应用程序约定
export const handle: HandleFunction = {
  fromAbc: 'xyz',
};

export async function loader({ request }: LoaderFunctionArgs) {
  await requireUserSession(request);

  const can = await accessControlProvider.can({
    resource: 'post',
    action: 'list',
  });

  if (!can) {
    return data({}, { status: 403 });
  }

  return null;
}

// UI
export default function Post() {
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
