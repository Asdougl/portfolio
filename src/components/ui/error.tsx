import type { ComponentProps } from 'react';

export const Error = ({ className, ...props }: ComponentProps<'p'>) => {
  return <p className={`text-sm text-red-400 ${className}`} {...props} />;
};
