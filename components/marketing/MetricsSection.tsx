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
              <span style={{ display: "block", width: 88, height: 88, position: "relative", margin: "0 auto" }}>
                <Image
                  src="/microsoft-showcase-badge.png"
                  alt="Microsoft Showcase School"
                  fill
                  style={{ objectFit: "contain" }}
                  priority
                />
              </span>
            </span>
          </div>
          <div className="metric-card" role="listitem">
            <span className="metric-value">STEM</span>
            <span className="metric-label">
              First Cognia STEM K–12 in Washington
            </span>
          </div>
          <div className="metric-card" role="listitem">
            <span className="metric-value">K–5</span>
            <span className="metric-label">
              The Genesis Project
            </span>
          </div>
          <div className="metric-card" role="listitem">
            <span className="metric-value">
              <span style={{ display: "block", width: 88, height: 88, position: "relative", margin: "0 auto" }}>
                <Image
                  src="/cognia-accredited-badge.png"
                  alt="Cognia Accredited: NCA CASI, NWAC, SACS CASI"
                  fill
                  style={{ objectFit: "contain" }}
                />
              </span>
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
