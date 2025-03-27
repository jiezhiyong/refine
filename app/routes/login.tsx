import type { ActionFunctionArgs, LoaderFunctionArgs, MetaFunction } from '@remix-run/node';
import { redirect } from '@remix-run/node';

import { LoginForm } from '~/components/form-login';
import { dashboardResource } from '~/config/resources';
import { EnumAuthProvider } from '~/constants/user';
import { authProvider } from '~/providers';
import { commitSession, getSession, getUser } from '~/services/session.server';
import { getAllParams } from '~/utils/get-all-params';
import { typedFormError } from '~/utils/typed-form-error';
import { TSchemaLoginRegister } from '~/zod';

export const meta: MetaFunction = () => {
  return [{ title: 'Login' }];
};

// 加载器
export async function loader({ request }: LoaderFunctionArgs) {
  const user = await getUser(request);

  if (user && user.id) {
    return redirect(dashboardResource);
  }

  return {};
}

// Action 处理函数
export async function action({ request }: ActionFunctionArgs) {
  try {
    const mergedParams = await getAllParams<TSchemaLoginRegister>(request);
    const { email, password, redirectTo } = mergedParams;

    const { error, success, user } = await authProvider.login({
      providerName: EnumAuthProvider.USER_PASS,
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
    <div className="bg-background flex min-h-svh flex-col items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm md:max-w-3xl">
        <LoginForm />
      </div>
    </div>
  );
}
