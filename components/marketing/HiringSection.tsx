import Link from "next/link";

import { site } from "@/lib/site";

export function HiringSection() {
  return (
    <section className="section section--surface" aria-labelledby="hiring-heading">
      <div className="container">
        <div className="section-intro section-intro--center">
          <span className="eyebrow eyebrow--muted">Careers</span>
          <h2 id="hiring-heading">Join Our Work</h2>
          <p>
            Renton Prep is built around a master–apprentice model of learning —
            educators and students working alongside each other toward genuine
            understanding. We welcome inquiries from educators, interns, and
            contributors who share our mission and want to be part of that work.
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
