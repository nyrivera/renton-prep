import Link from "next/link";

import { MarketingShell } from "@/components/marketing/MarketingShell";
import { site } from "@/lib/site";

const DEFAULT_COPY =
  "This page is being updated. Please contact us directly for help.";

export function TbdPage({
  title,
  description,
}: {
  title: string;
  description?: string;
}) {
  return (
    <MarketingShell>
      <section className="section section--surface">
        <div className="container">
          <div className="section-intro">
            <h1>{title}</h1>
            <p style={{ color: "var(--color-text-muted)", maxWidth: "52ch" }}>
              {description ?? DEFAULT_COPY}
            </p>
            <div className="btn-group">
              <a href={`tel:${site.phone.tel}`} className="btn btn-secondary">
                Call Admissions
              </a>
              <Link href="/contact" className="btn btn-primary">
                Request Information
              </Link>
            </div>
            <p className="cta-microcopy">No commitment. Takes about 2 minutes.</p>
            <p style={{ marginTop: "var(--space-4)" }}>
              <Link href="/" className="faq-link">
                Back to home
              </Link>
            </p>
          </div>
        </div>
      </section>
    </MarketingShell>
  );
}
