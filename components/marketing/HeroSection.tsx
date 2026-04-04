import Image from "next/image";
import Link from "next/link";

import { MarketingLink } from "@/components/marketing/MarketingLink";
import { microcopy, site } from "@/lib/site";

export function HeroSection() {
  return (
    <section className="hero" aria-label="Introduction">
      {/* Blurred background plate — fills entire hero with warm classroom atmosphere */}
      <div className="hero-plate" aria-hidden="true" />
      {/* Sharp foreground photo — shows full scene, positioned right */}
      <div className="hero-image" aria-hidden="true">
        <Image
          src="/hero-1.jpeg"
          alt=""
          fill
          priority
          sizes="100vw"
          style={{ objectFit: "contain", objectPosition: "right 20%" }}
        />
      </div>
      {/* Readability gradient overlay */}
      <div className="hero-overlay" aria-hidden="true" />
      {/* Left-side subtle blur for text legibility */}
      <div className="hero-focus" aria-hidden="true" />
      <div className="container">
        <div className="hero-content">
          <h1>
            Small Enough to Know Every Child.
            <br />
            Strong Enough to Prepare Them Well.
          </h1>
          <p className="hero-description">
            Renton Prep is a Christ-centered, accredited K–12 school in
            Renton, WA, where students are known individually, challenged
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
