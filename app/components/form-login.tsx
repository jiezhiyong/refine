import { Form, Link, useActionData, useNavigation, useSearchParams } from '@remix-run/react';
import { t } from 'i18next';

import { Button } from '~/components/ui/button';
import { Card, CardContent } from '~/components/ui/card';
import { Input } from '~/components/ui/input';
import { Label } from '~/components/ui/label';
import { dashboardResource } from '~/config/resources';

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
  const redirectTo = searchParams.get('redirectTo') || dashboardResource;
  const navigation = useNavigation();

  return (
    <div className="flex flex-col gap-6">
      <Card className="overflow-hidden">
        <CardContent className="grid p-0 md:grid-cols-2">
          <Form method="post" className="p-6 md:p-8">
            <input type="hidden" name="redirectTo" value={redirectTo} />

            <div className="flex flex-col gap-6">
              <div className="flex flex-col">
                <h1 className="flex items-center text-2xl font-bold">{t('pages.login.title')}</h1>
                <p className="text-muted-foreground text-balance">{t('pages.login.description')}</p>
              </div>

              <div className="grid gap-2">
                <Label htmlFor="email">{t('pages.login.fields.email')}</Label>
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
                  <Label htmlFor="password">{t('pages.login.fields.password')}</Label>
                  <Link prefetch="intent" viewTransition to="#" className="ml-auto text-sm">
                    {t('pages.login.buttons.forgotPassword')}
                  </Link>
                </div>
                <Input
                  name="password"
                  id="password"
                  type="password"
                  required
                  autoComplete="current-password"
                  minLength={8}
                  maxLength={32}
                  defaultValue="Abc@12345678"
                />
                <ErrorMessage error={errors?.password?.[0]} />
              </div>

              <div className="grid gap-2">
                <Button type="submit" className="w-full" disabled={navigation.state === 'submitting'}>
                  {t('pages.login.buttons.submit')}
                </Button>
                <ErrorMessage error={errors?.default?.[0]} />
              </div>

              <div className="after:border-border relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t">
                <span className="bg-background text-muted-foreground relative z-10 px-2">
                  {t('pages.login.divider')}
                </span>
              </div>

              <TcskOAuth2 redirectTo={redirectTo} />

              <div className="text-center text-sm">
                {t('pages.login.noAccount')}
                <Link prefetch="intent" viewTransition to="/register" replace className="underline underline-offset-4">
                  {t('pages.login.signup')}
                </Link>
              </div>
            </div>
          </Form>
          <div className="bg-muted relative hidden md:block">
            <img
              src="/images/logo.png"
              alt=""
              className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.3]"
            />
          </div>
        </CardContent>
      </Card>

      <PrivacyPolicy />
    </div>
  );
}
