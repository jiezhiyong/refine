import { ErrorResponse } from '@remix-run/node';
import { isRouteErrorResponse, useRouteError } from '@remix-run/react';
import { Button } from '~/components-shadcn/button';
import { useMountEffect } from '~/hooks/use-mount-effect';

export default function PageError({ error }: { error?: Error | ErrorResponse | { message: string } | unknown }) {
  const routeError = useRouteError();

  if (!error) {
    error = routeError;
  }

  useMountEffect(() => {
    console.error('@PageError', error);
  });

  return (
    <div className="relative h-screen flex-1 font-['sans-serif']">
      <div className="absolute left-1/2 top-1/2 w-full max-w-[520px] -translate-x-1/2 -translate-y-1/2 text-center leading-[1.4]">
        <div className="relative z-[-1] mx-auto mb-5 mt-0 h-[200px]">
          <h1 className="text-forceground absolute left-1/2 top-1/2 m-0 -translate-x-1/2 -translate-y-1/2 text-[236px] font-extralight uppercase">
            Oops!
          </h1>
          <h2 className="text-forceground absolute inset-x-0 bottom-0 m-auto inline-block bg-background px-[5px] pt-5 text-[28px] font-normal uppercase">
            {isRouteErrorResponse(error) ? `${error.status} ${error.statusText}` : 'Something went wrong'}
          </h2>
        </div>
        <p className="mb-8 text-red-500">{(error as Error).message || 'unknown error'}</p>
        <Button size="lg" onClick={() => location.reload()}>
          Try Again
        </Button>
      </div>
    </div>
  );
}
