import { Slot } from '@radix-ui/react-slot';
import { type VariantProps, cva } from 'class-variance-authority';
import React from 'react';
import { cn } from '~/lib/utils';

const buttonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap select-none font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        primary:
          'bg-control-primary text-label-secondary hover:bg-control-primary-muted',
        secondary: 'bg-control text-label hover:bg-control-shade',
        tertiary: 'h-auto p-0 rounded select-auto text-label',
        outline:
          'border border-control-shade bg-bg text-label shadow-sm hover:bg-bg-shade',
        ghost: 'text-label hover:bg-bg-shade',
        link: 'h-auto p-0 rounded text-label select-auto underline underline-offset-[6px] decoration-1 decoration-control hover:decoration-control-icon focus-visible:no-underline',
      },
      size: {
        sm: 'text-sm',
        base: 'text-base',
        lg: 'text-base',
      },
    },
    compoundVariants: [
      {
        variant: ['primary', 'secondary', 'outline', 'ghost'],
        size: 'sm',
        className: 'h-9 px-3 rounded-md',
      },
      {
        variant: ['primary', 'secondary', 'outline', 'ghost'],
        size: 'base',
        className: 'h-10 px-[14px] rounded-lg',
      },
      {
        variant: ['primary', 'secondary', 'outline', 'ghost'],
        size: 'lg',
        className: 'h-11 px-4 rounded-[10px]',
      },
    ],
    defaultVariants: {
      variant: 'primary',
      size: 'base',
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = 'Button';

export { Button };
