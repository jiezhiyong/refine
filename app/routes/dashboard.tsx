import { data } from '@remix-run/node';
import { accessControlProvider } from '~/providers/access-control';
import PageError from '~/components/500';
import Layout from '~/components/layout';
import { HandleFunction } from '~/types/handle';

// 创建应用程序约定
export const handle: HandleFunction = {
  from: 'dashboard',
};

export async function loader() {
  // const can = accessControlProvider.can({
  //   resource: 'posts',
  //   action: 'list',
  // });

  // if (!can) {
  //   return data({}, { status: 403 });
  // }

  return { initialData: {} };
}

// UI
export default function Dashboard() {
  // return <Layout />;
  return <div>Dashboard</div>;
}

// 错误边界处理
export function ErrorBoundary() {
  return <PageError />;
}
