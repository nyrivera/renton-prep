export function GenesisSection() {
  return (
    <section
      className="section section--alt"
      id="genesis"
      aria-labelledby="genesis-heading"
    >
      <div className="container">
        <div className="genesis-layout">
          <div className="genesis-content">
            <div className="genesis-badge" aria-label="New program">
              <span className="genesis-badge-dot" aria-hidden />
              <span>New Program</span>
            </div>
            <span className="eyebrow eyebrow--muted">The Genesis Project</span>
            <h2 id="genesis-heading">
              AI Literacy,
              <br />
              Built for Children
            </h2>
            <p
              style={{
                color: "var(--color-text-muted)",
                fontSize: "17px",
                lineHeight: 1.65,
                marginTop: "var(--space-2)",
              }}
            >
              A structured curriculum designed for elementary-age learners —
              teaching students to think alongside AI tools critically,
              creatively, and ethically.
            </p>
            <div className="genesis-list">
              <div className="genesis-item">
                <div className="genesis-item-num" aria-hidden>
                  1
                </div>
                <div className="genesis-item-body">
                  <h4>Critical Thinking First</h4>
                  <p>
                    Students learn to question AI outputs, verify sources, and
                    apply their own reasoning — so they lead the tool rather than
                    follow it.
                  </p>
                </div>
              </div>
              <div className="genesis-item">
                <div className="genesis-item-num" aria-hidden>
                  2
                </div>
                <div className="genesis-item-body">
                  <h4>Age-Appropriate Exposure</h4>
                  <p>
                    Each grade level engages with AI concepts at the right
                    developmental moment, building progressively sophisticated
                    fluency across K–5.
                  </p>
                </div>
              </div>
              <div className="genesis-item">
                <div className="genesis-item-num" aria-hidden>
                  3
                </div>
                <div className="genesis-item-body">
                  <h4>Ethical Frameworks</h4>
                  <p>
                    From the earliest grades, students explore questions of
                    responsibility, authorship, and impact — grounded in Christian
                    ethics and human dignity.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div
            className="genesis-visual"
            aria-label="Genesis Project interactive illustration"
          >
            <div className="genesis-terminal">
              <div className="genesis-terminal-bar" aria-hidden>
                <span />
                <span />
                <span />
              </div>
              <pre>
                <span className="t-green">Student:</span> Is this AI answer
                correct?
                {"\n\n"}
                <span className="t-blue">Genesis Guide:</span> Great
                question. Let&apos;s{"\n"}check three things together:
                {"\n\n"}
                <span className="t-gold">→</span> Where did this claim come
                from?{"\n"}
                <span className="t-gold">→</span> Does it match what we already
                know?{"\n"}
                <span className="t-gold">→</span> What would happen if it&apos;s
                wrong?
                {"\n\n"}
                <span className="t-green">Student:</span> Oh — I think I can
                verify this{"\n"}in our science book.
                {"\n\n"}
                <span className="t-blue">Genesis Guide:</span> Exactly.
                You&apos;re leading{"\n"}the tool. The tool doesn&apos;t lead you.
              </pre>
            </div>
            <p className="genesis-visual-label">
              Simulated Genesis Project exchange · Grade 3 scenario
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
