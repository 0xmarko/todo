import { type VariantProps, cva } from 'class-variance-authority';
import React from 'react';
import { cn } from '~/lib/utils';

const inputVariants = cva(
  'flex w-full border outline-none border-control-shade bg-transparent px-16 text-base transition-all placeholder:text-label-light focus-visible:ring-1 focus-visible:ring-control-shade disabled:cursor-not-allowed disabled:opacity-50',
  {
    variants: {
      size: {
        base: 'h-40 px-12 rounded-8',
        lg: 'h-44 px-16 rounded-10',
      },
    },
    defaultVariants: {
      size: 'base',
    },
  },
);

export interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'>,
    VariantProps<typeof inputVariants> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, size, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(inputVariants({ size, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Input.displayName = 'Input';

export { Input };
