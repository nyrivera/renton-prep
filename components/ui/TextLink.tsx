import Link from "next/link";
import type { ComponentPropsWithoutRef, ReactNode } from "react";

const baseClass =
  "font-medium text-zinc-600 underline-offset-4 transition-colors hover:text-indigo-700 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 dark:text-zinc-400 dark:hover:text-indigo-400";

type NextLinkProps = ComponentPropsWithoutRef<typeof Link>;

export type TextLinkProps = NextLinkProps & {
  children: ReactNode;
  className?: string;
};

export function TextLink({ children, className = "", ...props }: TextLinkProps) {
  return (
    <Link className={`${baseClass} ${className}`.trim()} {...props}>
      {children}
    </Link>
  );
}
