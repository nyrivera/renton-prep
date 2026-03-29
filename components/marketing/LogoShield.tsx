import type { SVGProps } from "react";

export type LogoShieldProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

export function LogoShield({ size = 42, className = "", ...props }: LogoShieldProps) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 80 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
      {...props}
    >
      <path
        d="M40 6 L72 18 L72 46 C72 60 58 72 40 76 C22 72 8 60 8 46 L8 18 Z"
        fill="#1a1c3a"
      />
      <path d="M40 6 L72 18 L72 30 L40 38 Z" fill="#625bc4" opacity=".9" />
      <path d="M8 18 L40 6 L40 38 L8 30 Z" fill="#8fbad6" opacity=".85" />
      <path d="M8 30 L40 38 L40 58 L8 46 Z" fill="#b84a4f" opacity=".8" />
      <path d="M40 38 L72 30 L72 46 L40 58 Z" fill="#8f9c3a" opacity=".8" />
      <path
        d="M8 46 L40 58 L40 76 C22 72 8 60 8 46 Z"
        fill="#ffb70f"
        opacity=".75"
      />
      <path
        d="M40 58 L72 46 C72 60 58 72 40 76 Z"
        fill="#625bc4"
        opacity=".6"
      />
      <line
        x1="40"
        y1="12"
        x2="40"
        y2="72"
        stroke="rgba(255,255,255,.35)"
        strokeWidth="2.5"
      />
      <line
        x1="14"
        y1="32"
        x2="66"
        y2="32"
        stroke="rgba(255,255,255,.35)"
        strokeWidth="2.5"
      />
      <path
        d="M40 6 L72 18 L72 46 C72 60 58 72 40 76 C22 72 8 60 8 46 L8 18 Z"
        fill="none"
        stroke="rgba(255,255,255,.2)"
        strokeWidth="1.5"
      />
    </svg>
  );
}
