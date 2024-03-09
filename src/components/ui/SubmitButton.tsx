import type { ComponentProps } from 'react';
import { Button } from './button';

const Spinner = () => {
  return (
    <div role="status">
      <div className="h-4 w-4 animate-spin rounded-full border-2 border-transparent border-t-current"></div>
      <span className="sr-only">Loading...</span>
    </div>
  );
};

export const SubmitButton = ({
  children,
  submitting,
  ...props
}: ComponentProps<typeof Button> & { submitting?: boolean }) => {
  return (
    <Button type="submit" {...props}>
      {submitting ? <Spinner /> : children}
    </Button>
  );
};
