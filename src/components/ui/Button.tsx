import { cva, type VariantProps } from 'class-variance-authority';
import { twMerge } from 'tailwind-merge';
import type React from 'react';

const button = cva(
  [
    'cursor-pointer hover:outline-2 hover:outline-red-700 rounded-lg inline-flex items-center justify-center p-1 dark:bg-neutral-700'
  ],
  {
    variants: {
      color: {
        primary: ['bg-transparent'],
        secondary: ['bg-neutral-100']
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
  ...props
}: ButtonProps) => {
  return (
    <button
      className={twMerge(button({ color, size, radius, className }))}
      {...props}
    >
      {icon && icon}
      {children}
    </button>
  );
};
