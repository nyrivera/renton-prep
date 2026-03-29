import Link from "next/link";

import { MarketingLink } from "@/components/marketing/MarketingLink";
import { site } from "@/lib/site";

export function CtaSection() {
  return (
    <section
      className="section section--surface"
      id="next-steps"
      aria-labelledby="cta-heading"
    >
      <div className="container">
        <div className="cta-block">
          <div>
            <h2 id="cta-heading">
              Ready to See Renton Prep
              <br />
              for Yourself?
            </h2>
            <p>
              Tour our campus, meet our teachers, and find out if Renton Prep is
              the right fit for your family. Request Information or start an
              application from here.
            </p>
          </div>
          <div className="cta-actions">
            <Link href={site.urls.contact} className="btn btn-ghost-white">
              Request Information
            </Link>
            <MarketingLink href={site.urls.apply} className="btn btn-ghost-white">
              Apply Now
            </MarketingLink>
          </div>
          <p className="cta-microcopy cta-microcopy--light">
            No commitment. Takes about 2 minutes. We will guide you through each
            step.
          </p>
        </div>

        <div className="cta-options" style={{ marginTop: "var(--space-6)" }}>
          <div className="cta-option">
            <div className="cta-option-icon" aria-hidden>
              <svg
                style={{
                  width: 32,
                  height: 32,
                  margin: "0 auto",
                  stroke: "var(--color-primary)",
                }}
                viewBox="0 0 24 24"
                fill="none"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                <polyline points="9 22 9 12 15 12 15 22" />
              </svg>
            </div>
            <h4>Schedule a Campus Tour</h4>
            <p>
              Connect through our admissions team to plan a visit at our Renton
              campus.
            </p>
            <Link
              href={site.urls.contact}
              className="btn btn-secondary"
              style={{ marginTop: "var(--space-3)" }}
            >
              Request Information
            </Link>
          </div>
          <div className="cta-option">
            <div className="cta-option-icon" aria-hidden>
              <svg
                style={{
                  width: 32,
                  height: 32,
                  margin: "0 auto",
                  stroke: "var(--color-primary)",
                }}
                viewBox="0 0 24 24"
                fill="none"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                <polyline points="14 2 14 8 20 8" />
                <line x1="16" y1="13" x2="8" y2="13" />
                <line x1="16" y1="17" x2="8" y2="17" />
                <polyline points="10 9 9 9 8 9" />
              </svg>
            </div>
            <h4>Start an Application</h4>
            <p>
              Our admissions process is clear, welcoming, and family-centered
              from the first step.
            </p>
            <MarketingLink
              href={site.urls.apply}
              className="btn btn-secondary"
              style={{ marginTop: "var(--space-3)" }}
            >
              Apply Now
            </MarketingLink>
          </div>
          <div className="cta-option">
            <div className="cta-option-icon" aria-hidden>
              <svg
                style={{
                  width: 32,
                  height: 32,
                  margin: "0 auto",
                  stroke: "var(--color-primary)",
                }}
                viewBox="0 0 24 24"
                fill="none"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
            </div>
            <h4>Call Admissions</h4>
            <p>
              Questions about curriculum, tuition, or fit? Reach us directly at
              the number below.
            </p>
            <a
              href={`tel:${site.phone.tel}`}
              className="btn btn-secondary"
              style={{ marginTop: "var(--space-3)" }}
            >
              {site.phone.display}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
