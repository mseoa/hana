import { ButtonHTMLAttributes, PropsWithChildren } from 'react';

type Props = {
  // text: string | JSX.Element;
  variant?: string;
  classNames?: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button({
  children,
  variant = '',
  classNames = '',
  ...props
}: PropsWithChildren<Props>) {
  return (
    <button
      {...props}
      className={`btn ${variant} ${classNames} inline-flex items-center gap-1 normal-case`}
    >
      {children}
    </button>
  );
}
