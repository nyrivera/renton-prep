import { forwardRef, type ButtonHTMLAttributes, type ReactNode } from "react";

const baseClass =
  "inline-flex items-center justify-center rounded-md px-5 py-3 text-sm font-semibold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#625bc4] disabled:pointer-events-none disabled:opacity-50 sm:text-base";

const variantClass: Record<"primary" | "secondary", string> = {
  primary:
    "bg-[#625bc4] text-white hover:bg-[#554fad] active:bg-[#4a4499] dark:bg-[#7a74d4] dark:hover:bg-[#625bc4]",
  secondary:
    "border border-[#625bc4] bg-transparent text-[#625bc4] hover:bg-[#625bc4]/5 active:bg-[#625bc4]/10 dark:border-[#7a74d4] dark:text-[#7a74d4] dark:hover:bg-[#625bc4]/10",
};

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  variant?: keyof typeof variantClass;
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  function Button(
    { children, variant = "primary", className = "", type = "button", ...props },
    ref,
  ) {
    return (
      <button
        ref={ref}
        type={type}
        className={`${baseClass} ${variantClass[variant]} ${className}`.trim()}
        {...props}
      >
        {children}
      </button>
    );
  },
);

