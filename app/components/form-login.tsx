import { Form, Link, useActionData, useNavigation, useSearchParams } from '@remix-run/react';
import { Button } from '~/components-shadcn/button';
import { Card, CardContent } from '~/components-shadcn/card';
import { Input } from '~/components-shadcn/input';
import { Label } from '~/components-shadcn/label';
import { ErrorMessage } from './error';
import { PrivacyPolicy } from './privacy-policy';
import { TcskOAuth2 } from './tcsk-oauth2';

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
  const { errors } = useActionData<ActionData>() || {};
  const [searchParams] = useSearchParams();
  const redirectTo = searchParams.get('redirectTo') || '/';
  const navigation = useNavigation();

  return (
    <div className="flex flex-col gap-6">
      <Card className="overflow-hidden">
        <CardContent className="grid p-0 md:grid-cols-2">
          <Form method="post" className="p-6 md:p-8">
            <input type="hidden" name="redirectTo" value={redirectTo} />

            <div className="flex flex-col gap-6">
              <div className="flex flex-col">
                <h1 className="flex items-center text-2xl font-bold">Welcome back</h1>
                <p className="text-balance text-muted-foreground">Login to your OSS Inc. account</p>
              </div>

              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  name="email"
                  id="email"
                  type="email"
                  placeholder="Goodman@example.com"
                  defaultValue={searchParams.get('email') || 'administrator@goodman.com'}
                  required
                  autoFocus
                  autoComplete="email"
                />
                <ErrorMessage error={errors?.email?.[0]} />
              </div>

              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="password">Password</Label>
                  <Link prefetch="intent" to="#" className="ml-auto text-sm underline-offset-2 hover:underline">
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
                  defaultValue="Abc@12345678"
                />
                <ErrorMessage error={errors?.password?.[0]} />
              </div>

              <div className="grid gap-2">
                <Button type="submit" className="w-full" disabled={navigation.state === 'submitting'}>
                  Login
                </Button>
                <ErrorMessage error={errors?.default?.[0]} />
              </div>

              <div className="relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t after:border-border">
                <span className="relative z-10 bg-background px-2 text-muted-foreground">or</span>
              </div>

              <TcskOAuth2 redirectTo={redirectTo} />

              <div className="text-center text-sm">
                {`Don't have an account? `}
                <Link prefetch="intent" to="/register" replace className="underline underline-offset-4">
                  Sign up
                </Link>
              </div>
            </div>
          </Form>
          <div className="relative hidden bg-muted md:block">
            <img src="/logo.gif" alt="" className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.3]" />
          </div>
        </CardContent>
      </Card>

      <PrivacyPolicy />
    </div>
  );
}
