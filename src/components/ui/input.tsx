import { clsx } from 'clsx';
import { forwardRef, type ComponentProps, type ForwardedRef } from 'react';

const BaseInput = (
  { className, ...props }: ComponentProps<'input'>,
  ref: ForwardedRef<HTMLInputElement>
) => {
  return (
    <input
      ref={ref}
      className={clsx(
        'rounded border border-tertiary-4 bg-tertiary-5 px-2 py-1 ring-blue-500 focus:outline-none focus:ring',
        className
      )}
      {...props}
    />
  );
};

export const Input = forwardRef(BaseInput);
