import type { ComponentPropsWithoutRef, ReactNode } from "react";

export type SectionProps = Omit<ComponentPropsWithoutRef<"section">, "children"> & {
  children: ReactNode;
};

export function Section({ children, className = "", ...rest }: SectionProps) {
  return (
    <section
      className={`py-12 sm:py-16 md:py-20 ${className}`.trim()}
      {...rest}
    >
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </section>
  );
}
