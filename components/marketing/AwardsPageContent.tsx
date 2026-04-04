import Link from "next/link";

import { MarketingShell } from "@/components/marketing/MarketingShell";
import { recognitions, site } from "@/lib/site";

/**
 * Awards / recognition page — only repeats claims already used on the public site
 * (home, metrics, lib/site). No new awards or statistics.
 */
export function AwardsPageContent() {
  return (
    <MarketingShell>
      <section
        className="section section--surface"
        aria-labelledby="awards-heading"
      >
        <div className="container">
          <div className="section-intro section-intro--center">
            <span className="eyebrow eyebrow--muted">Recognition</span>
            <h1 id="awards-heading">Awards &amp; recognition</h1>
            <p style={{ maxWidth: "52ch", margin: "0 auto" }}>
              {site.tagline}. The points below match how we describe Renton Prep
              across this site.
            </p>
          </div>
          <ul
            style={{
              maxWidth: "640px",
              margin: "0 auto var(--space-6)",
              padding: 0,
              display: "flex",
              flexDirection: "column",
              gap: "var(--space-2)",
              listStyle: "none",
            }}
          >
            {recognitions.map((r) => (
              <li
                key={r.label}
                style={{
                  fontSize: "16px",
                  lineHeight: 1.55,
                  color: "var(--color-text-muted)",
                }}
              >
                {r.label}
              </li>
            ))}
          </ul>
          <div
            className="btn-group"
            style={{ justifyContent: "center", flexWrap: "wrap" }}
          >
            <Link href={site.urls.genesisProject} className="btn btn-secondary">
              The Genesis Project
            </Link>
            <Link href={site.urls.about} className="btn btn-secondary">
              Our story
            </Link>
            <Link href={site.urls.contact} className="btn btn-primary">
              Request information
            </Link>
          </div>
        </div>
      </section>
    </MarketingShell>
  );
}
