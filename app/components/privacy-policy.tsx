import { Link } from '@remix-run/react';

/** 登录、注册时的隐私政策 */
export function PrivacyPolicy() {
  return (
    <div className="text-muted-foreground [&_a]:hover:text-primary text-center text-xs text-balance [&_a]:underline [&_a]:underline-offset-4">
      {'By clicking continue, you agree to our '}
      <Link prefetch="intent" viewTransition to="#">
        Privacy Policy
      </Link>
      .
    </div>
  );
}
