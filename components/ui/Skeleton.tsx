import type { HTMLAttributes } from "react";

export type SkeletonProps = HTMLAttributes<HTMLDivElement> & {
  /** Screen reader label while loading */
  label?: string;
};

export function Skeleton({
  className = "",
  label = "Loading",
  ...props
}: SkeletonProps) {
  return (
    <div
      role="status"
      aria-busy="true"
      aria-label={label}
      className={`animate-pulse rounded-md bg-zinc-200/80 dark:bg-zinc-700/80 ${className}`.trim()}
      {...props}
    />
  );
}
