import Image from "next/image";
import Link from "next/link";

import { MarketingLink } from "@/components/marketing/MarketingLink";
import { site } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="site-footer" aria-label="Site footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="logo">
              <div className="logo-badge">
                <Image
                  src="/logo.png"
                  alt="Renton Prep Christian School"
                  width={1125}
                  height={509}
                  className="logo-img"
                />
              </div>
            </div>
            <p>
              A fully accredited, Christ-centered K–12 school in Renton, WA.
              Small by design, nationally recognized, and focused on preparing
              students for college, career, and meaningful contribution.
            </p>
            <p className="footer-brand-schwabe">
              <MarketingLink href={site.urls.schwabe}>
                In memory of Henry and Edith Schwabe · Our history
              </MarketingLink>
            </p>
          </div>
          <div className="footer-col">
            <h5>About</h5>
            <ul>
              <li>
                <Link href={site.urls.about}>About Renton Prep</Link>
              </li>
              <li>
                <MarketingLink href={site.urls.mission}>
                  Mission, Vision, &amp; Action
                </MarketingLink>
              </li>
              <li>
                <MarketingLink href={site.urls.awards}>
                  Awards and Recognition
                </MarketingLink>
              </li>
              <li>
                <MarketingLink href={site.urls.testimonials}>
                  Testimonials
                </MarketingLink>
              </li>
              <li>
                <MarketingLink href={site.urls.blog}>
                  News &amp; updates
                </MarketingLink>
              </li>
              <li>
                <MarketingLink href={site.urls.careers}>Careers</MarketingLink>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h5>Admissions</h5>
            <ul>
              <li>
                <MarketingLink href={site.urls.admissions}>Admissions</MarketingLink>
              </li>
              <li>
                <MarketingLink href={site.urls.tuition}>
                  Tuition &amp; Fees
                </MarketingLink>
              </li>
              <li>
                <MarketingLink href={site.urls.financialAid}>
                  Financial Assistance
                </MarketingLink>
              </li>
              <li>
                <MarketingLink href={site.urls.uniforms}>Uniforms</MarketingLink>
              </li>
              <li>
                <MarketingLink href={site.urls.extendedCare}>
                  Extended School Care
                </MarketingLink>
              </li>
              <li>
                <MarketingLink href={site.urls.apply}>Apply Now</MarketingLink>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h5>Academics</h5>
            <ul>
              <li>
                <MarketingLink href={site.urls.academics}>Academics</MarketingLink>
              </li>
              <li>
                <MarketingLink href={site.urls.genesisProject}>
                  The Genesis Project
                </MarketingLink>
              </li>
              <li>
                <Link href={site.urls.contact}>Request Information</Link>
              </li>
              <li>
                <a href={`tel:${site.phone.tel}`}>{site.phone.display}</a>
              </li>
              <li>
                <span>
                  {site.address.lines[0]}
                  <br />
                  {site.address.lines[1]}
                </span>
              </li>
              <li>
                <MarketingLink href={site.urls.instagram}>Instagram</MarketingLink>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <span>
            © 2026 {site.legalName}. All rights reserved.
          </span>
          <span>
            <MarketingLink href={site.urls.privacy}>Legal &amp; privacy</MarketingLink>
            {" · "}
            <Link href="/#faq">FAQ</Link>
            {" · "}
            <MarketingLink href={site.urls.donate}>Donate</MarketingLink>
          </span>
        </div>
      </div>
    </footer>
  );
}
