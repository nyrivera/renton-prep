import Link from "next/link";

import { MarketingLink } from "@/components/marketing/MarketingLink";
import { MarketingShell } from "@/components/marketing/MarketingShell";
import { site } from "@/lib/site";

export function AcademicsHubContent() {
  return (
    <MarketingShell>
      <section className="section section--surface">
        <div className="container">
          <div className="hub-section">
            <h1>Academics</h1>
            <p className="hub-intro">
              Christ-centered, research-informed learning across K–12 on one
              campus. Use the links below to go deeper on technology and
              enrollment.
            </p>
            <div className="btn-group">
              <MarketingLink
                href={site.urls.genesisProject}
                className="btn btn-primary"
              >
                The Genesis Project
              </MarketingLink>
              <Link href="/#research" className="btn btn-secondary">
                Research on the home page
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--alt" id="technology">
        <div className="container">
          <div className="hub-section">
            <h2>Technology</h2>
            <div className="hub-prose">
              <p>
                Technology is part of how we teach and learn—not an add-on. The
                Genesis Project describes how Renton Prep approaches AI and
                digital tools with students and families.
              </p>
              <p>
                <MarketingLink href={site.urls.genesisProject}>
                  Read about the Genesis Project
                </MarketingLink>
                {" · "}
                <Link href="/#genesis">Genesis section on the home page</Link>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--surface" id="elementary">
        <div className="container">
          <div className="hub-section">
            <h2>Elementary</h2>
            <div className="hub-prose">
              <p>
                Elementary students are part of the full K–12 program at our
                Renton campus. For grade levels, enrollment steps, and tuition,
                start with admissions.
              </p>
              <p>
                <Link href={site.urls.admissions} className="btn btn-secondary">
                  Admissions
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>
    </MarketingShell>
  );
}
