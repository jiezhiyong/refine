import { data } from '@remix-run/node';
import { accessControlProvider } from '~/providers/access-control';
import PageError from '~/components/500';
import Layout from '~/components/layout';
import { HandleFunction } from '~/types/handle';

// 创建应用程序约定
export const handle: HandleFunction = {
  fromAbc: 'xyz',
};

export async function loader() {
  const can = await accessControlProvider.can({
    resource: 'post',
    action: 'list',
  });

  if (!can) {
    return data({}, { status: 403 });
  }

  return { initialData: {} };
}

// UI
export default function Post() {
  return <Layout />;
}

// 错误边界处理
export function ErrorBoundary() {
  return <PageError />;
}
