import Link from "next/link";
import type { CSSProperties, ReactNode } from "react";

export function isExternalHref(href: string): boolean {
  return /^https?:\/\//i.test(href);
}

type MarketingLinkProps = {
  href: string;
  className?: string;
  style?: CSSProperties;
  children: ReactNode;
  onClick?: () => void;
};

/** Internal routes use Next Link; http(s) uses a regular anchor (e.g. Instagram, external apply portal). */
export function MarketingLink({
  href,
  className,
  style,
  children,
  onClick,
}: MarketingLinkProps) {
  if (isExternalHref(href)) {
    return (
      <a
        href={href}
        className={className}
        style={style}
        target="_blank"
        rel="noopener noreferrer"
        onClick={onClick}
      >
        {children}
      </a>
    );
  }
  return (
    <Link
      href={href}
      className={className}
      style={style}
      onClick={onClick}
    >
      {children}
    </Link>
  );
}
