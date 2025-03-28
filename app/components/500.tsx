import { useBack } from '@refinedev/core';
import { ErrorResponse } from '@remix-run/node';
import { isRouteErrorResponse, useRouteError } from '@remix-run/react';

import { Button } from '~/components/ui/button';
import { useMountEffect } from '~/hooks/use-mount-effect';

export function PageError({ error }: { error?: Error | ErrorResponse | { message: string } | unknown }) {
  const routeError = useRouteError();
  const back = useBack();

  if (!error) {
    error = routeError;
  }

  useMountEffect(() => {
    console.error('@PageError', error);
  });

  return (
    <div className="relative h-screen flex-1 font-['sans-serif']">
      <div className="absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2 px-10 text-center leading-[1.4]">
        <div className="relative z-[-1] mx-auto mt-0 mb-5 h-[200px]">
          <h1 className="text-forceground absolute top-1/2 left-1/2 m-0 -translate-x-1/2 -translate-y-1/2 text-[236px] font-extralight uppercase">
            Oops!
          </h1>
          <h2 className="text-forceground bg-background absolute inset-x-0 bottom-0 m-auto inline-block max-w-[520px] px-[5px] pt-5 text-[28px] font-normal capitalize">
            <span className="bg-background absolute -top-1 -right-1 -bottom-1 -left-1 z-10 blur-xl" />
            {isRouteErrorResponse(error) ? `${error.status} ${error.statusText}` : 'Something went wrong'}
          </h2>
        </div>
        <p className="mb-8 text-xl text-red-500">{(error as Error).message || 'unknown error'}</p>

        <Button onClick={back} className="mr-3">
          Go Back
        </Button>
        <Button onClick={() => location.reload()}>Retry</Button>
      </div>
    </div>
  );
}
