import { PropsWithChildren } from 'react';

export const Row = ({
  title,
  children,
}: Required<
  PropsWithChildren<{
    title: string;
  }>
>) => {
  return (
    <>
      <dl className="flex flex-wrap">
        <div className="flex-auto pt-4">
          <dt className="scroll-m-20 text-xs font-semibold tracking-tight">{title}</dt>
          <dd className="mt-1 text-base font-normal leading-7 text-foreground">{children}</dd>
        </div>
      </dl>
    </>
  );
};
