import { useSearchParams, useActionData, Form, Link, useNavigation } from '@remix-run/react';
import { Button } from '~/components-shadcn/button';
import { Card, CardContent } from '~/components-shadcn/card';
import { Input } from '~/components-shadcn/input';
import { Label } from '~/components-shadcn/label';
import { PrivacyPolicy } from './privacy-policy';
import { ErrorMessage } from './error';
import { useEffect } from 'react';
import { useModal } from '~/hooks/use-modal';

// 定义错误类型
interface ActionData {
  errors?: {
    email?: string[];
    password?: string[];
    default?: string[];
  };
}

// 登录表单
export function LoginForm() {
  const { showModal } = useModal();
  const { errors } = useActionData<ActionData>() || {};
  const [searchParams] = useSearchParams();
  const redirectTo = searchParams.get('redirectTo') || '/';
  const navigation = useNavigation();

  useEffect(() => {
    if (errors?.default?.[0]) {
      showModal({
        type: 'alert',
        title: '登录提交失败',
        description: errors.default[0],
      });
    }
  }, [showModal, errors?.default]);

  return (
    <div className="flex flex-col gap-6">
      <Card className="overflow-hidden">
        <CardContent className="grid p-0 md:grid-cols-2">
          <Form method="post" className="p-6 md:p-8">
            <input type="hidden" name="redirectTo" value={redirectTo} />

            <div className="flex flex-col gap-6">
              <div className="flex flex-col">
                <h1 className="flex items-center text-2xl font-bold">Welcome back</h1>
                <p className="text-balance text-muted-foreground">Login to your Acme OSS Inc. account</p>
              </div>

              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  name="email"
                  id="email"
                  type="email"
                  placeholder="Goodman@example.com"
                  required
                  autoFocus
                  autoComplete="email"
                />
                <ErrorMessage error={errors?.email?.[0]} />
              </div>

              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="password">Password</Label>
                  <Link to="#" className="ml-auto text-sm underline-offset-2 hover:underline">
                    Forgot your password?
                  </Link>
                </div>
                <Input
                  name="password"
                  id="password"
                  type="password"
                  required
                  autoComplete="current-password"
                  minLength={6}
                  maxLength={50}
                />
                <ErrorMessage error={errors?.password?.[0]} />
              </div>

              <Button type="submit" className="w-full" disabled={navigation.state === 'submitting'}>
                Login
              </Button>

              <div className="relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t after:border-border">
                <span className="relative z-10 bg-background px-2 text-muted-foreground">or</span>
              </div>

              <Button variant="outline" className="w-full" type="button">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path
                    d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
                    fill="currentColor"
                  />
                </svg>
                {'Login with GitHub'}
              </Button>

              <div className="text-center text-sm">
                {`Don't have an account? `}
                <Link to="/register" replace className="underline underline-offset-4">
                  Sign up
                </Link>
              </div>
            </div>
          </Form>
          <div className="relative hidden bg-muted md:block">
            <img
              src="/placeholder.svg"
              alt=""
              className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
            />
          </div>
        </CardContent>
      </Card>

      <PrivacyPolicy />
    </div>
  );
}
