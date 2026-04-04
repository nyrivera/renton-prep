import Link from "next/link";

import { MarketingShell } from "@/components/marketing/MarketingShell";
import { site } from "@/lib/site";

/** Legal / privacy — contact routing only; no policy text invented. */
export function LegalPageContent() {
  return (
    <MarketingShell>
      <section className="section section--surface" aria-labelledby="legal-h1">
        <div className="container">
          <div className="section-intro section-intro--center">
            <span className="eyebrow eyebrow--muted">Legal</span>
            <h1 id="legal-h1">Legal &amp; privacy</h1>
            <p style={{ maxWidth: "52ch", margin: "0 auto" }}>
              {site.legalName}
              <br />
              {site.address.lines[0]}
              <br />
              {site.address.lines[1]}
            </p>
            <p
              style={{
                maxWidth: "52ch",
                margin: "var(--space-4) auto 0",
                color: "var(--color-text-muted)",
              }}
            >
              Questions about privacy, this website, or official school records?
              Contact us by phone or through Request information and we will route
              your message to the appropriate office.
            </p>
            <div
              className="btn-group"
              style={{ justifyContent: "center", marginTop: "var(--space-4)" }}
            >
              <a href={`tel:${site.phone.tel}`} className="btn btn-secondary">
                Call {site.phone.display}
              </a>
              <Link href={site.urls.contact} className="btn btn-primary">
                Request information
              </Link>
            </div>
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
