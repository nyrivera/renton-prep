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
            Small Enough to Know Every Child.
            <br />
            Strong Enough to Prepare Them Well.
          </h1>
          <p className="hero-description">
            Renton Prep is a Christ-centered, accredited K–12 school in
            Renton, WA — where students are known individually, challenged
            rigorously, and formed in faith. Recognized as{" "}
            <strong>Washington&apos;s first Cognia STEM–certified K–12</strong>{" "}
            and a <strong>Microsoft Showcase School</strong>.
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
