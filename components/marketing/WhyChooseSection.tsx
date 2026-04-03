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
            A small, fully accredited Christian school where students are known
            by name, challenged academically, and formed in faith. Built for
            families who want both genuine care and serious scholarship.
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
                fontSize: "16px",
                lineHeight: 1.55,
                color: "var(--color-text-muted)",
              }}
            >
              {r.label}
            </li>
          ))}
        </ul>
        <div style={{ textAlign: "center" }}>
          <Link href={site.urls.awards} className="btn btn-secondary">
            Awards and Recognition
          </Link>
        </div>
      </div>
    </section>
  );
}
