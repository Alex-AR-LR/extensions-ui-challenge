/* import { cva } from 'class-variance-authority';
import { twMerge } from 'tailwind-merge';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export const Button = ({ children, ...props }: Props) => {
  return <button {...props}>{children}</button>;
}; */

import { cva, type VariantProps } from 'class-variance-authority';
// import { twMerge } from 'tailwind-merge';

const button = cva(['rounded', 'px-4'], {
  variants: {
    color: {
      primary: ['bg-neutral-300'],
      secondary: ['bg-neutral-600']
    }
  }
});

export type ButtonProps = VariantProps<typeof button> &
  React.ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = ({
  className,
  children,
  color,
  ...props
}: ButtonProps) => {
  return (
    <button {...props} className={className}>
      {children}
    </button>
  );
};
