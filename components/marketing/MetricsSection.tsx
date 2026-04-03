import Image from "next/image";

export function MetricsSection() {
  return (
    <section className="section section--surface">
      <div className="container">
        <div
          className="metrics-grid"
          role="list"
          aria-label="School recognitions"
        >
          <div className="metric-card" role="listitem">
            <span className="metric-value">
              <Image
                src="/microsoft-showcase-badge.png"
                alt="Microsoft Showcase School"
                width={88}
                height={88}
                style={{ display: "block", margin: "0 auto" }}
                priority
              />
            </span>
          </div>
          <div className="metric-card" role="listitem">
            <span className="metric-value">
              <span aria-hidden="true">STEM</span>
              <span className="sr-only">Washington&apos;s first Cognia STEM-certified K–12</span>
            </span>
            <span className="metric-label" aria-hidden="true">
              First Cognia STEM K–12 in Washington
            </span>
          </div>
          <div className="metric-card" role="listitem">
            <span className="metric-value">
              <span aria-hidden="true">GP</span>
              <span className="sr-only">The Genesis Project</span>
            </span>
            <span className="metric-label" aria-hidden="true">
              Genesis Project · K–5
            </span>
          </div>
          <div className="metric-card" role="listitem">
            <span className="metric-value">
              <span aria-hidden="true">K–12</span>
              <span className="sr-only">Cognia-accredited K through 12 school</span>
            </span>
            <span className="metric-label" aria-hidden="true">
              Cognia-Accredited K–12 School
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
