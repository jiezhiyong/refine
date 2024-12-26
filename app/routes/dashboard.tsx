import { LoaderFunctionArgs } from '@remix-run/node';
import Layout from '~/components/layout';
import { requireUserSession } from '~/services/session.server';
import { HandleFunction } from '~/types/handle';

// 创建应用程序约定
export const handle: HandleFunction = {
  from: 'dashboard',
};

// 加载器 - 初始化 && 处理表单`GET`请求
export async function loader({ request }: LoaderFunctionArgs) {
  await requireUserSession(request);
  return {};
}

// UI
export default function Dashboard() {
  return <Layout />;
}
