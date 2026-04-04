import Link from "next/link";

import { MarketingShell } from "@/components/marketing/MarketingShell";
import { site } from "@/lib/site";

/** Donate — factual contact path only; no donation platform invented. */
export function DonatePageContent() {
  return (
    <MarketingShell>
      <section className="section section--surface" aria-labelledby="donate-h1">
        <div className="container">
          <div className="section-intro section-intro--center">
            <span className="eyebrow eyebrow--muted">Support</span>
            <h1 id="donate-h1">Donate</h1>
            <p style={{ maxWidth: "52ch", margin: "0 auto" }}>
              To learn about supporting {site.legalName}, please contact the
              school directly. We will connect you with the right person on our
              team.
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
