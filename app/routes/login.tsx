import type { ActionFunctionArgs, LoaderFunctionArgs } from '@remix-run/node';
import { redirect } from '@remix-run/node';
import { z } from 'zod';
import { LoginForm } from '~/components/form-login';
import { getUser, createUserSession } from '~/services/session.server';
import { verifyLogin } from '~/models/user.server';
import { safeRedirect } from '~/utils/safe-redirect';
import { typedFormError } from '~/utils/typed-form-error';

// 定义表单验证 schema
const loginSchema = z.object({
  email: z.string().email('请输入有效的邮箱地址'),
  password: z.string().min(6, '密码至少需要6个字符').max(50, '密码不能超过50个字符'),
  redirectTo: z.string().optional(),
});

// 加载器
export async function loader({ request }: LoaderFunctionArgs) {
  const user = await getUser(request);

  if (user) {
    return redirect('/');
  }

  return {};
}

// Action 处理函数
export async function action({ request }: ActionFunctionArgs) {
  const formData = await request.formData();
  const rawData = Object.fromEntries(formData) as z.infer<typeof loginSchema>;

  try {
    const { email, password } = loginSchema.parse(rawData);
    const user = await verifyLogin(email, password);
    if (!user) {
      throw new Error('Invalid email or password.');
    }

    return createUserSession({
      redirectTo: safeRedirect(rawData.redirectTo),
      request,
      userId: user.id,
    });
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
