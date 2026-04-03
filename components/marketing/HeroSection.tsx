import Link from "next/link";

import { MarketingLink } from "@/components/marketing/MarketingLink";
import { microcopy, site } from "@/lib/site";

export function HeroSection() {
  return (
    <section className="hero" aria-label="Introduction">
      <div className="hero-bg" aria-hidden="true" />
      <div className="hero-pattern" aria-hidden="true" />
      <div className="container">
        <div className="hero-content">
          <h1>
            Preparing Wise, Grounded Children
            <br />
            for a World That Doesn&apos;t Stand Still
          </h1>
          <p className="hero-description">
            Discover the future of education with the Genesis Project — a
            structured AI literacy program for elementary learners — within a
            Christ-centered, technology-enabled micro-school recognized as a{" "}
            <strong>Microsoft Showcase School</strong> and{" "}
            <strong>Washington&apos;s first Cognia STEM–certified K–12</strong>.
          </p>
          <div className="hero-ctas">
            <Link href={site.urls.contact} className="btn btn-primary">
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
      </div>
      <div className="hero-rule" aria-hidden="true" />
    </section>
  );
}
