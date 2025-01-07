import type { ActionFunctionArgs, LoaderFunctionArgs, MetaFunction } from '@remix-run/node';
import { redirect } from '@remix-run/node';
import { z } from 'zod';
import { authProvider } from '~/providers/auth';
import { LoginForm } from '~/components/form-login';
import { commitSession, getSession, getUser } from '~/services/session.server';
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

  if (user && user.id) {
    return redirect('/');
  }

  return {};
}

// Action 处理函数
export async function action({ request }: ActionFunctionArgs) {
  try {
    const form = await request.formData();
    const formData = Object.fromEntries(form) as z.infer<typeof loginSchema>;

    const { email, password, redirectTo } = loginSchema.parse(formData);
    const { error, success, user } = await authProvider.login({
      providerName: 'user-pass',
      email,
      password,
      redirectTo,
    });

    if (error) {
      throw { default: [error.message] };
    }

    if (success && user?.id) {
      const session = await getSession(request.headers.get('Cookie'));
      session.set('user', user);

      return redirect(redirectTo!, {
        headers: {
          'Set-Cookie': await commitSession(session),
        },
      });
    }
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
