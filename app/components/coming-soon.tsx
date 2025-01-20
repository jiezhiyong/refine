import { useBack } from '@refinedev/core';
import { Button } from '~/components-shadcn/button';

export function ComingSoon() {
  const back = useBack();

  return (
    <div className="relative h-full font-['sans-serif']">
      <div className="absolute left-1/2 top-1/2 w-full max-w-[520px] -translate-x-1/2 -translate-y-1/2 text-center leading-[1.4]">
        <div className="relative z-[-1] mx-auto mb-5 mt-0 h-[200px]">
          <h1 className="text-forceground absolute left-1/2 top-1/2 m-0 -translate-x-1/2 -translate-y-1/2 text-[236px] font-extralight uppercase">
            Oops!
          </h1>
          <h2 className="text-forceground absolute inset-x-0 bottom-0 m-auto inline-block bg-background px-[5px] pt-5 text-[28px] font-normal capitalize">
            <span className="absolute -bottom-1 -left-1 -right-1 -top-1 z-10 bg-background blur-xl" />
            {'Coming Soon ...'}
          </h2>
        </div>
        <p className="mb-8 text-xl">Sorry, This page is under construction.</p>

        <Button onClick={back} className="mr-3">
          Go Back
        </Button>
      </div>
    </div>
  );
}
