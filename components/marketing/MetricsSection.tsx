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
              <span aria-hidden="true">MS</span>
              <span className="sr-only">Microsoft Showcase School</span>
            </span>
            <span className="metric-label" aria-hidden="true">
              Microsoft Showcase School
            </span>
          </div>
          <div className="metric-card" role="listitem">
            <span className="metric-value">
              <span aria-hidden="true">STEM</span>
              <span className="sr-only">Cognia STEM certified</span>
            </span>
            <span className="metric-label" aria-hidden="true">
              First Cognia STEM K–12 in Washington
            </span>
          </div>
          <div className="metric-card" role="listitem">
            <span className="metric-value">
              <span aria-hidden="true">AI</span>
              <span className="sr-only">Genesis AI literacy program</span>
            </span>
            <span className="metric-label" aria-hidden="true">
              Genesis Project (K&nbsp;prep–5th)
            </span>
          </div>
          <div className="metric-card" role="listitem">
            <span className="metric-value">
              <span aria-hidden="true">K–12</span>
              <span className="sr-only">Microsoft Flagship School for K through 12</span>
            </span>
            <span className="metric-label" aria-hidden="true">
              Microsoft Flagship School (U.S.)
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
