import { type ActionFunctionArgs, type MetaFunction, redirect } from '@remix-run/node';

import { RegisterForm } from '~/components/form-register';
import { EnumAuthProvider } from '~/constants/user';
import { createUser, getUserByEmail } from '~/services/user.server';
import { getAllParams } from '~/utils/get-all-params';
import { typedFormError } from '~/utils/typed-form-error';
import { TSchemaLoginRegister } from '~/zod';

export const meta: MetaFunction = () => {
  return [{ title: 'Register' }];
};

// Action 处理函数
export async function action({ request }: ActionFunctionArgs) {
  try {
    const mergedParams = await getAllParams<TSchemaLoginRegister>(request);
    const { email, password } = mergedParams;

    const existingUser = await getUserByEmail(email);

    if (existingUser) {
      throw { email: ['A user already exists with this email.'] };
    }

    await createUser({ email, password, provider: EnumAuthProvider.USER_PASS });

    return redirect(`/login?email=${email}`);
  } catch (error) {
    return typedFormError(error);
  }
}

// UI
export default function Register() {
  return (
    <div className="bg-background flex min-h-svh flex-col items-center justify-center gap-6 p-6 md:p-10">
      <div className="w-full max-w-sm">
        <RegisterForm />
      </div>
    </div>
  );
}
