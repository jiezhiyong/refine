import { redirect, type ActionFunctionArgs, type MetaFunction } from '@remix-run/node';
import { z } from 'zod';
import { RegisterForm } from '~/components/form-register';
import { authProvider } from '~/auth-provider';

// 定义表单验证 schema
const registerSchema = z.object({
  email: z.string().email('请输入有效的邮箱地址'),
  password: z.string().min(6, '密码至少需要6个字符').max(50, '密码不能超过50个字符'),
  redirectTo: z.string().optional(),
});

// 元数据
export const meta: MetaFunction = () => {
  return [{ title: 'Register' }];
};

// Action 处理函数
export async function action({ request }: ActionFunctionArgs) {
  const formData = await request.formData();
  const rawData = Object.fromEntries(formData) as z.infer<typeof registerSchema>;

  const { email, password } = registerSchema.parse(rawData);
  const { redirectTo, error, success } = await authProvider.register({ email, password });

  if (error) {
    return { error };
  }

  if (success) {
    return redirect(redirectTo!);
  }
}

// UI
export default function Register() {
  return (
    <div className="flex min-h-svh flex-col items-center justify-center gap-6 bg-background p-6 md:p-10">
      <div className="w-full max-w-sm">
        <RegisterForm />
      </div>
    </div>
  );
}
