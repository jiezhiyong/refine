import { Link } from '@remix-run/react';

/** 登录、注册时的隐私政策 */
export function PrivacyPolicy() {
  return (
    <div className="text-balance text-center text-xs text-muted-foreground [&_a]:underline [&_a]:underline-offset-4 hover:[&_a]:text-primary">
      {'By clicking continue, you agree to our '}
      <Link to="#">Terms of Service</Link>
      {' and '}
      <Link to="#">Privacy Policy</Link>.
    </div>
  );
}
