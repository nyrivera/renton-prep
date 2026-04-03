import Link from "next/link";

import { site } from "@/lib/site";

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
              <span className="genesis-badge-dot" aria-hidden="true" />
              <span>New Program</span>
            </div>
            <span className="eyebrow eyebrow--muted">The Genesis Project</span>
            <h2 id="genesis-heading">
              Learning to Lead
              <br />
              the Tool
            </h2>
            <p
              style={{
                color: "var(--color-text-muted)",
                fontSize: "17px",
                lineHeight: 1.65,
                marginTop: "var(--space-2)",
              }}
            >
              A K–5 curriculum rooted in Renton Prep&apos;s mission — forming
              elementary-age learners who think critically, ask good questions,
              and understand what the tools they use can and cannot do.
            </p>
            <div className="genesis-list">
              <div className="genesis-item">
                <div className="genesis-item-num" aria-hidden="true">
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
                <div className="genesis-item-num" aria-hidden="true">
                  2
                </div>
                <div className="genesis-item-body">
                  <h4>Age-Appropriate Exposure</h4>
                  <p>
                    Each grade introduces concepts at the right developmental
                    moment — building on prior learning so understanding deepens
                    naturally, K through 5.
                  </p>
                </div>
              </div>
              <div className="genesis-item">
                <div className="genesis-item-num" aria-hidden="true">
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
            <div style={{ marginTop: "var(--space-5)" }}>
              <Link href={site.urls.genesisProject} className="btn btn-secondary">
                Learn more about the Genesis Project
              </Link>
            </div>
          </div>
          <div
            className="genesis-visual"
            aria-label="Genesis Project interactive illustration"
          >
            <div className="genesis-terminal">
              <div className="genesis-terminal-bar" aria-hidden="true">
                <span />
                <span />
                <span />
              </div>
              <pre style={{ overflowX: "auto", whiteSpace: "pre-wrap", wordBreak: "break-word" }}>
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
