import Link from "next/link";

export function HeartAndMindSection() {
  return (
    <section
      className="section section--alt"
      aria-labelledby="heart-heading"
    >
      <div className="container">
        <div className="section-intro section-intro--center">
          <span className="eyebrow eyebrow--muted">Our School&apos;s Heart and Mind</span>
          <h2 id="heart-heading">Relational teaching, anchored in truth</h2>
          <p style={{ maxWidth: "62ch", marginInline: "auto" }}>
            Our teaching approach is relational and affirms students&apos; innate
            abilities. With love that comes from God, we use technological advances
            alongside biblical principles so students experience balance in heart
            and mind, and learn to write their own success story.
          </p>
          <p style={{ marginTop: "var(--space-3)" }}>
            <Link href="/#choose-heading" className="faq-link">
              Why families choose Renton Prep
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}
