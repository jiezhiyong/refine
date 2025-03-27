import { useNotification } from '@refinedev/core';
import { Form, Link, useActionData, useNavigation, useSearchParams } from '@remix-run/react';
import { t } from 'i18next';
import { GalleryVerticalEnd } from 'lucide-react';
import { useState } from 'react';

import { Button } from '~/components/ui/button';
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
    code?: string[];
    password?: string[];
    default?: string[];
  };
}

// 注册表单
export function RegisterForm() {
  const { errors } = useActionData<ActionData>() || {};
  const [searchParams] = useSearchParams();
  const redirectTo = searchParams.get('redirectTo') || dashboardResource;
  const navigation = useNavigation();
  const { open } = useNotification();
  const [isSending, setIsSending] = useState(false);
  const [countdown, setCountdown] = useState(0);
  const [email, setEmail] = useState('administrator@goodman.com');

  async function sendVerificationCode(email: string) {
    setIsSending(true);
    try {
      const response = await fetch('/api/send-code', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || '发送验证码失败');
      }

      open?.({
        key: 'register-email-sent',
        message: '验证码已发送',
        description: '请查看您的邮箱',
        type: 'success',
      });

      // 开始倒计时
      setCountdown(60);
      const timer = setInterval(() => {
        setCountdown((prev) => {
          if (prev <= 1) {
            clearInterval(timer);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    } catch (error) {
      open?.({
        key: 'register-email-sent',
        message: 'Error',
        description: error instanceof Error ? error.message : '发送验证码失败',
        type: 'error',
      });
    } finally {
      setIsSending(false);
    }
  }

  return (
    <div className="flex flex-col gap-6">
      <Form method="post">
        <input type="hidden" name="redirectTo" value={redirectTo} />

        <div className="flex flex-col gap-6">
          <div className="flex flex-col items-center gap-2">
            <Link prefetch="intent" viewTransition to="/" className="flex flex-col items-center gap-2 font-medium">
              <div className="flex h-8 w-8 items-center justify-center rounded-md">
                <GalleryVerticalEnd className="size-6" />
              </div>
              <span className="sr-only">Remix Inc.</span>
            </Link>
            <h1 className="text-xl font-bold">{t('pages.register.title')}</h1>
            <div className="text-center text-sm">
              {t('pages.register.haveAccount')}
              <Link prefetch="intent" viewTransition to="/login" replace className="underline underline-offset-4">
                {t('pages.register.signin')}
              </Link>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <div className="grid gap-2">
              <Label htmlFor="email">{t('pages.register.fields.email')}</Label>
              <div className="flex gap-2">
                <Input
                  name="email"
                  id="email"
                  type="email"
                  placeholder="Goodman@example.com"
                  required
                  autoFocus
                  autoComplete="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <Button
                  className="h-9"
                  type="button"
                  disabled={isSending || countdown > 0 || !email}
                  variant="outline"
                  onClick={() => sendVerificationCode(email)}
                >
                  {countdown > 0 ? `${countdown}s` : 'Send Code'}
                </Button>
              </div>
              <ErrorMessage error={errors?.email?.[0]} />
            </div>

            <div className="grid gap-2">
              <Label htmlFor="code">{t('pages.register.fields.validateCode')}</Label>
              <Input name="code" id="code" type="code" required minLength={8} maxLength={6} defaultValue="123456" />
              <ErrorMessage error={errors?.code?.[0]} />
            </div>

            <div className="grid gap-2">
              <Label htmlFor="password">{t('pages.register.fields.password')}</Label>
              <Input
                name="password"
                id="password"
                type="password"
                required
                autoComplete="new-password"
                minLength={8}
                maxLength={32}
                defaultValue="Abc@12345678"
              />
              <ErrorMessage error={errors?.password?.[0]} />
            </div>

            <div className="grid gap-2">
              <Button type="submit" className="w-full" disabled={navigation.state === 'submitting'}>
                {t('pages.register.buttons.submit')}
              </Button>
              <ErrorMessage error={errors?.default?.[0]} />
            </div>
          </div>

          <div className="after:border-border relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t">
            <span className="bg-background text-muted-foreground relative z-10 px-2">or</span>
          </div>

          <TcskOAuth2 redirectTo={redirectTo} />
        </div>
      </Form>

      <PrivacyPolicy />
    </div>
  );
}
