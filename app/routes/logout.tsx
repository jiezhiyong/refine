import { LoaderFunctionArgs } from '@remix-run/node';
import { logout } from '~/services/session.server';

// 加载器 - 初始化 && 处理表单`GET`请求
export async function loader({ request }: LoaderFunctionArgs) {
  return logout(request);
}
