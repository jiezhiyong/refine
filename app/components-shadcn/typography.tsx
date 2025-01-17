import React from 'react';
import { cn } from '~/utils/cn';

interface TypographyProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  className?: string;
}

export function H1({ children, className, ...props }: TypographyProps) {
  return (
    <h1 className={cn('scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl', className)} {...props}>
      {children}
    </h1>
  );
}

export function H2({ children, className, ...props }: TypographyProps) {
  return (
    <h2
      className={cn('mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0', className)}
      {...props}
    >
      {children}
    </h2>
  );
}

export function H3({ children, className, ...props }: TypographyProps) {
  return (
    <h3 className={cn('mt-8 scroll-m-20 text-2xl font-semibold tracking-tight', className)} {...props}>
      {children}
    </h3>
  );
}

export function H4({ children, className, ...props }: TypographyProps) {
  return (
    <h4 className={cn('scroll-m-20 text-xl font-semibold tracking-tight', className)} {...props}>
      {children}
    </h4>
  );
}

export function P({ children, className, ...props }: TypographyProps) {
  return (
    <p className={cn('leading-7 [&:not(:first-child)]:mt-6', className)} {...props}>
      {children}
    </p>
  );
}

export function Blockquote({ children, className, ...props }: TypographyProps) {
  return (
    <blockquote className={cn('mt-6 border-l-2 pl-6 italic', className)} {...props}>
      {children}
    </blockquote>
  );
}

export function List({ children, className, ...props }: TypographyProps) {
  return (
    <ul className={cn('my-6 ml-6 list-disc [&>li]:mt-2', className)} {...props}>
      {children}
    </ul>
  );
}

export function InlineCode({ children, className, ...props }: TypographyProps) {
  return (
    <code
      className={cn('relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold', className)}
      {...props}
    >
      {children}
    </code>
  );
}

export function Lead({ children, className, ...props }: TypographyProps) {
  return (
    <p className={cn('text-xl text-muted-foreground', className)} {...props}>
      {children}
    </p>
  );
}

export function Large({ children, className, ...props }: TypographyProps) {
  return (
    <div className={cn('text-lg font-semibold', className)} {...props}>
      {children}
    </div>
  );
}

export function Small({ children, className, ...props }: TypographyProps) {
  return (
    <small className={cn('text-sm font-medium leading-none', className)} {...props}>
      {children}
    </small>
  );
}

export function Muted({ children, className, ...props }: TypographyProps) {
  return (
    <p className={cn('text-sm text-muted-foreground', className)} {...props}>
      {children}
    </p>
  );
}

export function Image({ src, alt, className, ...props }: React.ImgHTMLAttributes<HTMLImageElement>) {
  return (
    <img
      src={src || '/placeholder.svg'}
      alt={alt}
      className={cn('w-full rounded-lg object-cover', className)}
      {...props}
    />
  );
}
