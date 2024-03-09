import { forwardRef, type ComponentProps, type ForwardedRef } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

const buttonStyle = cva(
  'rounded px-4 py-2 focus:outline-none focus:ring ring-blue-500 disabled:opacity-60',
  {
    variants: {
      intent: {
        primary: 'bg-tertiary-1 text-neutral-950',
        secondary: 'bg-tertiary-2',
        tertiary: 'bg-tertiary-3',
      },
    },
  }
);

const BaseButton = (
  {
    className,
    ...props
  }: ComponentProps<'button'> & VariantProps<typeof buttonStyle>,
  ref: ForwardedRef<HTMLButtonElement>
) => {
  return (
    <button
      ref={ref}
      type="button"
      className={buttonStyle({ ...props, className })}
      {...props}
    />
  );
};

export const Button = forwardRef(BaseButton);
