import type { ActionFunctionArgs, LoaderFunctionArgs, MetaFunction } from '@remix-run/node';
import { redirect } from '@remix-run/node';
import { z } from 'zod';
import { LoginForm } from '~/components/form-login';
import { getUser, createUserSession, login } from '~/services/session.server';
import { safeRedirect } from '~/utils/safe-redirect';
import { typedFormError } from '~/utils/typed-form-error';

// 定义表单验证 schema
const loginSchema = z.object({
  email: z.string().email('请输入有效的邮箱地址'),
  password: z.string().min(6, '密码至少需要6个字符').max(50, '密码不能超过50个字符'),
  redirectTo: z.string().optional(),
});

// 元数据
export const meta: MetaFunction = () => {
  return [{ title: 'Login' }];
};

// 加载器
export async function loader({ request }: LoaderFunctionArgs) {
  const user = await getUser(request);

  if (user?.id) {
    return redirect('/');
  }

  return {};
}

// Action 处理函数
export async function action({ request }: ActionFunctionArgs) {
  const form = await request.formData();
  const formData = Object.fromEntries(form) as z.infer<typeof loginSchema>;

  try {
    const { email, password } = loginSchema.parse(formData);
    const user = await login({ email, password });
    if (!user) {
      throw new Error('Invalid email or password.');
    }

    return createUserSession(user, safeRedirect(formData.redirectTo));
  } catch (error) {
    return typedFormError(error);
  }
}

// UI
export default function Login() {
  return (
    <div className="flex min-h-svh flex-col items-center justify-center bg-background p-6 md:p-10">
      <div className="w-full max-w-sm md:max-w-3xl">
        <LoginForm />
      </div>
    </div>
  );
}
