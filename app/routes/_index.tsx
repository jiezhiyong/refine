import { redirect } from '@remix-run/node';

// 加载器 - 初始化 && 处理表单`GET`请求
export async function loader() {
  return redirect('/dashboard');
}
