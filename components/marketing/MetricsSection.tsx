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
              <span className="sr-only">Science, technology, engineering, and math. </span>
            </span>
            <span className="metric-label">
              First Cognia STEM K–12 in Washington
            </span>
          </div>
          <div className="metric-card" role="listitem">
            <span className="metric-value">
              <span aria-hidden="true">AI</span>
              <span className="sr-only">Artificial intelligence literacy, </span>
            </span>
            <span className="metric-label">
              Genesis Project (K&nbsp;prep–5th)
            </span>
          </div>
          <div className="metric-card" role="listitem">
            <span className="metric-value">
              <span aria-hidden="true">K–12</span>
              <span className="sr-only">Kindergarten through twelfth grade. </span>
            </span>
            <span className="metric-label">
              Microsoft Flagship School (U.S.)
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
