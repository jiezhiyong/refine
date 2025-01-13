import { useSearchParams, useActionData, Form, Link, useNavigation } from '@remix-run/react';
import { GalleryVerticalEnd } from 'lucide-react';
import { Button } from '~/components-shadcn/button';
import { Input } from '~/components-shadcn/input';
import { Label } from '~/components-shadcn/label';
import { PrivacyPolicy } from './privacy-policy';
import { ErrorMessage } from './error';
import { TcskOAuth2 } from './tcsk-oauth2';
import { useState } from 'react';
import { toast } from 'sonner';

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
  const redirectTo = searchParams.get('redirectTo') || '/';
  const navigation = useNavigation();
  const [isSending, setIsSending] = useState(false);
  const [countdown, setCountdown] = useState(0);

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

      toast.success('验证码已发送', {
        description: '请查看您的邮箱',
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
      toast.error('错误', {
        description: error instanceof Error ? error.message : '发送验证码失败',
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
            <Link to="/" className="flex flex-col items-center gap-2 font-medium">
              <div className="flex h-8 w-8 items-center justify-center rounded-md">
                <GalleryVerticalEnd className="size-6" />
              </div>
              <span className="sr-only">Remix Inc.</span>
            </Link>
            <h1 className="text-xl font-bold">Welcome to Signup OSS Inc.</h1>
            <div className="text-center text-sm">
              {`Already has an account? `}
              <Link to="/login" replace className="underline underline-offset-4">
                Sign in
              </Link>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <div className="flex gap-2">
                <Input
                  name="email"
                  id="email"
                  type="email"
                  placeholder="Goodman@example.com"
                  required
                  autoFocus
                  autoComplete="email"
                  defaultValue="administrator@goodman.com"
                />
                {/* <Button
                  type="button"
                  disabled={isSending || countdown > 0 || !field.value}
                  variant="outline"
                  onClick={sendVerificationCode}
                >
                  {countdown > 0 ? `${countdown}s` : 'Send Code'}
                </Button> */}
              </div>
              <ErrorMessage error={errors?.email?.[0]} />
            </div>

            <div className="grid gap-2">
              <Label htmlFor="code">Validate Code</Label>
              <Input name="code" id="code" type="code" required minLength={6} maxLength={6} />
              <ErrorMessage error={errors?.code?.[0]} />
            </div>

            <div className="grid gap-2">
              <Label htmlFor="password">Password</Label>
              <Input
                name="password"
                id="password"
                type="password"
                required
                autoComplete="new-password"
                minLength={6}
                maxLength={50}
                defaultValue="Abc@12345678"
              />
              <ErrorMessage error={errors?.password?.[0]} />
            </div>

            <div className="grid gap-2">
              <Button type="submit" className="w-full" disabled={navigation.state === 'submitting'}>
                Register
              </Button>
              <ErrorMessage error={errors?.default?.[0]} />
            </div>
          </div>

          <div className="relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t after:border-border">
            <span className="relative z-10 bg-background px-2 text-muted-foreground">or</span>
          </div>

          <TcskOAuth2 redirectTo={redirectTo} />
        </div>
      </Form>

      <PrivacyPolicy />
    </div>
  );
}
