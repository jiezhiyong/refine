import type { ActionFunctionArgs, LoaderFunctionArgs } from '@remix-run/node';
import { data, redirect } from '@remix-run/node';
import { z } from 'zod';
import { LoginForm } from '~/components/login-form';
import { getUserId, createUserSession } from '~/services/session.server';
import { verifyLogin } from '~/services/user.server';
import { safeRedirect } from '~/utils/safe-redirect';
import { validateEmail } from '~/utils/validate-email';

// 定义表单验证 schema
const loginSchema = z.object({
  email: z.string().email('请输入有效的邮箱地址'),
  password: z.string().min(6, '密码至少需要6个字符').max(50, '密码不能超过50个字符'),
});

// 定义表单数据类型
type LoginFormData = z.infer<typeof loginSchema>;

// 加载器
export async function loader({ request }: LoaderFunctionArgs) {
  const userId = await getUserId(request);

  if (userId) {
    return redirect('/');
  }

  return {};
}

// Action 处理函数
export async function action({ request }: ActionFunctionArgs) {
  const formData = await request.formData();
  const { email, password, remember, redirectTo } = Object.fromEntries(formData);

  if (!validateEmail(email)) {
    return data({ errors: { email: 'Email is invalid', password: null } }, { status: 400 });
  }

  if (typeof password !== 'string' || password.length === 0) {
    return data({ errors: { email: null, password: 'Password is required' } }, { status: 400 });
  }

  if (password.length < 8) {
    return data({ errors: { email: null, password: 'Password is too short' } }, { status: 400 });
  }

  const user = await verifyLogin(email, password);
  if (!user) {
    return data({ errors: { email: 'Invalid email or password', password: null } }, { status: 400 });
  }

  return createUserSession({
    redirectTo: safeRedirect(redirectTo),
    remember: remember === 'on' ? true : false,
    request,
    userId: user.id,
  });
}

// UI
export default function Login() {
  return (
    <div className="flex min-h-svh flex-col items-center justify-center bg-muted p-6 md:p-10">
      <div className="w-full max-w-sm md:max-w-3xl">
        <LoginForm />
      </div>
    </div>
  );
}
