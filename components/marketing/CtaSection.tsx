import Link from "next/link";

import { MarketingLink } from "@/components/marketing/MarketingLink";
import { microcopy, site } from "@/lib/site";

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
            {microcopy.noCommitmentFull}
          </p>
        </div>

        <div className="cta-options" style={{ marginTop: "var(--space-6)" }}>
          <div className="cta-option">
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
