import Link from "next/link";

import { recognitions, site } from "@/lib/site";

export function WhyChooseSection() {
  return (
    <section className="section section--surface" aria-labelledby="choose-heading">
      <div className="container">
        <div className="section-intro section-intro--center">
          <span className="eyebrow eyebrow--muted">Why Renton Prep</span>
          <h2 id="choose-heading">Choose Renton Prep Christian School</h2>
          <p>
            A Christ-centered, technology-enhanced micro-school with multiple awards
            and recognitions — opening the door for families to build an excellent
            foundation for their children&apos;s future.
          </p>
        </div>
        <ul
          style={{
            maxWidth: "640px",
            margin: "0 auto var(--space-6)",
            padding: 0,
            display: "flex",
            flexDirection: "column",
            gap: "var(--space-2)",
          }}
        >
          {recognitions.map((r) => (
            <li
              key={r.label}
              style={{
                display: "flex",
                gap: "var(--space-2)",
                alignItems: "flex-start",
                fontSize: "16px",
                lineHeight: 1.55,
                color: "var(--color-text-muted)",
              }}
            >
              <span
                aria-hidden
                style={{
                  color: "var(--color-primary)",
                  fontWeight: 700,
                  flexShrink: 0,
                }}
              >
                ✓
              </span>
              <span>{r.label}</span>
            </li>
          ))}
        </ul>
        <div style={{ textAlign: "center" }}>
          <Link href={site.urls.awards} className="btn btn-secondary">
            View Awards &amp; Hoopla
          </Link>
        </div>
      </div>
    </section>
  );
}
