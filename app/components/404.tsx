import { useBack } from '@refinedev/core';
import { Link } from '@remix-run/react';

import { Button } from '~/components/ui/button';

export function NotFound({ message }: { message?: string }) {
  const back = useBack();

  return (
    <div className="relative h-screen font-['sans-serif']">
      <div className="absolute top-1/2 left-1/2 w-full max-w-[520px] -translate-x-1/2 -translate-y-1/2 text-center leading-[1.4]">
        <div className="relative z-[-1] mx-auto mt-0 mb-5 h-[200px]">
          <h1 className="text-forceground absolute top-1/2 left-1/2 m-0 -translate-x-1/2 -translate-y-1/2 text-[236px] font-extralight uppercase">
            Oops!
          </h1>
          <h2 className="text-forceground bg-background absolute inset-x-0 bottom-0 m-auto inline-block px-[5px] pt-5 text-[28px] font-normal capitalize">
            <span className="bg-background absolute -top-1 -right-1 -bottom-1 -left-1 z-10 blur-xl" />
            {"404 - The Page can't be found"}
          </h2>
        </div>
        <p className="mb-8 text-xl text-red-500">Sorry, You are looking for something that isn&apos;t here.</p>

        <Button onClick={back} className="mr-3">
          Go Back
        </Button>

        <Link prefetch="intent" viewTransition to="/">
          <Button>Back To Home</Button>
        </Link>
      </div>
    </div>
  );
}
