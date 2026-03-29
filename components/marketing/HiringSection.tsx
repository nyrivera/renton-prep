import Link from "next/link";

import { site } from "@/lib/site";

export function HiringSection() {
  return (
    <section className="section section--surface" aria-labelledby="hiring-heading">
      <div className="container">
        <div className="section-intro section-intro--center">
          <span className="eyebrow eyebrow--muted">Careers</span>
          <h2 id="hiring-heading">We&apos;re Hiring!</h2>
          <p>
            Be ready to change lives. Students at Renton Prep Christian School use
            their voices to contribute solutions to challenges our global community
            faces. Questions about our master–apprentice approach?
          </p>
          <div className="btn-group" style={{ justifyContent: "center" }}>
            <Link href={site.urls.careers} className="btn btn-primary">
              View Careers
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
