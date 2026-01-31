import { cva, type VariantProps } from 'class-variance-authority';
import { twMerge } from 'tailwind-merge';
import type React from 'react';

const button = cva(
  [
    'cursor-pointer rounded-lg inline-flex items-center justify-center p-1 focus:outline-2 focus:outline-offset-2 focus:outline-red-700'
  ],
  {
    variants: {
      color: {
        primary: ['bg-neutral-100 dark:bg-neutral-700 dark:hover:bg-neutral-600 hover:bg-neutral-300'],
        secondary: ['bg-neutral-0 text-neutral-900 hover:opacity-65 dark:bg-neutral-800 dark:text-neutral-0 dark:hover:opacity-100 dark:hover:bg-neutral-600']
      },
      state:{
        active: ['bg-red-500 text-neutral-0 dark:bg-red-600 dark:text-neutral-800 '],
        inactive: ['bg-neutral-100 dark:bg-neutral-700 dark:hover:bg-neutral-600 hover:bg-neutral-300']
      },
      size: {
        small: ['min-w-12 min-h-12']
      },
      radius: {
        none: ['rounded-none'],
        sm: ['rounded-sm'],
        md: ['rounded-md'],
        lg: ['rounded-lg'],
        full: ['rounded-full']
      },
      defaultVariants: {
        color: 'primary',
        radius: 'md',
        size: 'small'
      }
    }
  }
);

export interface ButtonProps
  extends
    Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'color'>,
    VariantProps<typeof button> {
  icon?: React.ReactNode;
}

export const Button = ({
  className,
  children,
  color,
  size,
  radius,
  icon,
  state,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={twMerge(button({ color, size,state, radius, className }))}
      {...props}
    >
      {icon && icon}
      {children}
    </button>
  );
};
