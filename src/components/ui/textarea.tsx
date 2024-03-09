import clsx from 'clsx';
import { forwardRef, type ComponentProps, type ForwardedRef } from 'react';

const TextareaBase = (
  { className, ...props }: ComponentProps<'textarea'>,
  ref: ForwardedRef<HTMLTextAreaElement>
) => {
  return (
    <textarea
      ref={ref}
      className={clsx(
        'h-24 resize-none rounded border border-tertiary-4 bg-tertiary-5 px-2 py-1 ring-blue-500 focus:outline-none focus:ring',
        className
      )}
      {...props}
    />
  );
};

export const Textarea = forwardRef(TextareaBase);
