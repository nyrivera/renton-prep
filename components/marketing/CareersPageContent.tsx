import Link from "next/link";

import { MarketingShell } from "@/components/marketing/MarketingShell";
import { microcopy, site } from "@/lib/site";

/** Careers — aligns with home HiringSection; no job listings invented. */
export function CareersPageContent() {
  return (
    <MarketingShell>
      <section className="section section--surface" aria-labelledby="careers-h1">
        <div className="container">
          <div className="section-intro section-intro--center">
            <span className="eyebrow eyebrow--muted">Careers</span>
            <h1 id="careers-h1">Join our work</h1>
            <p style={{ maxWidth: "52ch", margin: "0 auto" }}>
              Renton Prep is built around a master–apprentice model of learning:
              educators and students working alongside each other toward genuine
              understanding. We welcome inquiries from educators, interns, and
              contributors who share our mission and want to be part of that
              work.
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
            <p className="cta-microcopy">{microcopy.noCommitment}</p>
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
