import { Link } from '@remix-run/react';
import { Button } from '~/components-shadcn/button';

export default function NotFound() {
  return (
    <div className="relative h-screen font-['sans-serif']">
      <div className="absolute left-1/2 top-1/2 w-full max-w-[520px] -translate-x-1/2 -translate-y-1/2 text-center leading-[1.4]">
        <div className="relative z-[-1] mx-auto mb-5 mt-0 h-[200px]">
          <h1 className="absolute left-1/2 top-1/2 m-0 -translate-x-1/2 -translate-y-1/2 text-[236px] font-extralight uppercase text-[#211b19]">
            Oops!
          </h1>
          <h2 className="absolute inset-x-0 bottom-0 m-auto inline-block bg-white px-[5px] py-2.5 text-[28px] font-normal uppercase text-[#211b19]">
            {"404 - The Page can't be found"}
          </h2>
        </div>
        <Button size="lg" asChild>
          <Link to="/">Back To Home</Link>
        </Button>
      </div>
    </div>
  );
}
