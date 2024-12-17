import type { ActionFunctionArgs } from '@remix-run/node';
import { zodResolver } from '@hookform/resolvers/zod';
import { json } from '@remix-run/node';
import { Form, useActionData } from '@remix-run/react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

// 定义表单验证 schema
const registerSchema = z
  .object({
    username: z.string().min(3, '用户名至少需要3个字符').max(20, '用户名不能超过20个字符'),
    email: z.string().email('请输入有效的邮箱地址'),
    password: z.string().min(6, '密码至少需要6个字符').max(50, '密码不能超过50个字符'),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: '两次输入的密码不匹配',
    path: ['confirmPassword'],
  });

// 定义表单数据类型
type RegisterFormData = z.infer<typeof registerSchema>;

// Action 处理函数
export async function action({ request }: ActionFunctionArgs) {
  const formData = await request.formData();
  const rawFormData = Object.fromEntries(formData);

  try {
    // 验证表单数据
    const validatedData = registerSchema.parse(rawFormData);

    // TODO: 处理注册逻辑，比如保存到数据库
    console.log('注册数据：', validatedData);

    return json({ success: true });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return json({ errors: error.errors }, { status: 400 });
    }

    return json({ error: '注册失败' }, { status: 500 });
  }
}

export default function Register() {
  const actionData = useActionData<typeof action>();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),
  });

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    // 这里不需要阻止默认行为，让 Remix Form 处理提交
    const form = event.currentTarget;

    handleSubmit(() => {
      // 验证通过后，让表单正常提交
      form.submit();
    })(event);
  };

  return (
    <div className="mx-auto mt-10 max-w-md rounded-lg bg-white p-6 shadow-md">
      <h1 className="mb-6 text-2xl font-bold">用户注册</h1>

      <Form className="space-y-4" method="post" onSubmit={onSubmit}>
        <div>
          <label className="block text-sm font-medium text-gray-700" htmlFor="username">
            用户名
          </label>
          <input
            {...register('username')}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            id="username"
            name="username"
            type="text"
          />
          {errors.username && <p className="mt-1 text-sm text-red-600">{errors.username.message}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700" htmlFor="email">
            邮箱
          </label>
          <input
            {...register('email')}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            id="email"
            name="email"
            type="email"
          />
          {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700" htmlFor="password">
            密码
          </label>
          <input
            {...register('password')}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            id="password"
            name="password"
            type="password"
          />
          {errors.password && <p className="mt-1 text-sm text-red-600">{errors.password.message}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700" htmlFor="confirmPassword">
            确认密码
          </label>
          <input
            {...register('confirmPassword')}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            id="confirmPassword"
            name="confirmPassword"
            type="password"
          />
          {errors.confirmPassword && <p className="mt-1 text-sm text-red-600">{errors.confirmPassword.message}</p>}
        </div>

        <button
          className="flex w-full justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          type="submit"
        >
          注册
        </button>
      </Form>

      {actionData?.success && <p className="mt-4 text-sm text-green-600">注册成功！</p>}
    </div>
  );
}
