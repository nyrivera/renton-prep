import Link from "next/link";

import { missionVisionAction } from "@/lib/site";

export function MissionSection() {
  return (
    <section
      className="section section--alt"
      id="mission"
      aria-labelledby="mission-heading"
    >
      <div className="container">
        <div className="section-intro section-intro--center">
          <span className="eyebrow eyebrow--muted">Our Mission</span>
          <h2 id="mission-heading">Mission, Vision, and Action</h2>
          <p>
            The official statements that guide Renton Prep Christian School.
          </p>
          <p style={{ marginTop: "var(--space-2)" }}>
            <Link href="/about" className="faq-link">
              Read how the school grew from the Renton community
            </Link>
          </p>
        </div>
        <div className="mva-grid">
          <div className="mva-card">
            <div className="mva-card-number">01 — Mission</div>
            <h3>Our Mission</h3>
            <p>{missionVisionAction.mission}</p>
          </div>
          <div className="mva-card">
            <div className="mva-card-number">02 — Vision</div>
            <h3>Our Vision</h3>
            <p>{missionVisionAction.vision}</p>
          </div>
          <div className="mva-card">
            <div className="mva-card-number">03 — Action</div>
            <h3>Our Action</h3>
            <p>{missionVisionAction.action}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
