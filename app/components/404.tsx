import { Link } from '@remix-run/react';
import { Button } from '~/components-shadcn/button';

export function NotFound() {
  return (
    <div className="relative h-screen font-['sans-serif']">
      <div className="absolute left-1/2 top-1/2 w-full max-w-[520px] -translate-x-1/2 -translate-y-1/2 text-center leading-[1.4]">
        <div className="relative z-[-1] mx-auto mb-5 mt-0 h-[200px]">
          <h1 className="text-forceground absolute left-1/2 top-1/2 m-0 -translate-x-1/2 -translate-y-1/2 text-[236px] font-extralight uppercase">
            Oops!
          </h1>
          <h2 className="text-forceground absolute inset-x-0 bottom-0 m-auto inline-block bg-background px-[5px] pt-5 text-[28px] text-xl font-normal capitalize">
            {"404 - The Page can't be found"}
          </h2>
        </div>

        <Link to="/">
          <Button>Back To Home</Button>
        </Link>
      </div>
    </div>
  );
}
