import { Link } from '@remix-run/react';
import { Button } from '~/components-shadcn/button';

export function PermissionDenied() {
  return (
    <div className="relative h-screen font-['sans-serif']">
      <div className="absolute left-1/2 top-1/2 w-full max-w-[520px] -translate-x-1/2 -translate-y-1/2 text-center leading-[1.4]">
        <div className="relative z-[-1] mx-auto mb-5 mt-0 h-[200px]">
          <h1 className="text-forceground absolute left-1/2 top-1/2 m-0 -translate-x-1/2 -translate-y-1/2 text-[236px] font-extralight uppercase">
            Oops!
          </h1>
          <h2 className="text-forceground absolute inset-x-0 bottom-0 m-auto inline-block bg-background px-[5px] pt-5 text-[28px] font-normal capitalize">
            <span className="absolute -bottom-1 -left-1 -right-1 -top-1 z-10 bg-background blur-xl" />
            {'403 - Permission Denied'}
          </h2>
        </div>
        <p className="mb-8 text-xl text-red-500">Sorry, You don't have permission to access this page.</p>

        <Link prefetch="intent" to="/api/auth/logout">
          <Button>Back To Login</Button>
        </Link>
      </div>
    </div>
  );
}
