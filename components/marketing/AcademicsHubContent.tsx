import Link from "next/link";

import { MarketingShell } from "@/components/marketing/MarketingShell";
import { site } from "@/lib/site";

const stub = (
  <p style={{ color: "var(--color-text-muted)" }}>
    This section is being updated on the new site. Call{" "}
    <a href={`tel:${site.phone.tel}`}>{site.phone.display}</a> or{" "}
    <Link href="/contact">contact us</Link> for details.
  </p>
);

export function AcademicsHubContent() {
  return (
    <MarketingShell>
      <section className="section section--surface">
        <div className="container">
          <div className="hub-section">
            <h1>Academics</h1>
            <p className="hub-intro">
              Christ-centered, research-informed learning across grade levels.
              Use the sections below for program details as we publish them.
            </p>
            <div className="btn-group">
              <Link href="/#genesis" className="btn btn-primary">
                Explore the Genesis Project
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--alt" id="technology">
        <div className="container">
          <div className="hub-section">
            <h2>Technology</h2>
            {stub}
          </div>
        </div>
      </section>

      <section className="section section--surface" id="elementary">
        <div className="container">
          <div className="hub-section">
            <h2>Elementary</h2>
            {stub}
          </div>
        </div>
      </section>

      <section className="section section--alt" id="supply-lists">
        <div className="container">
          <div className="hub-section">
            <h2>Supply lists</h2>
            {stub}
          </div>
        </div>
      </section>
    </MarketingShell>
  );
}
