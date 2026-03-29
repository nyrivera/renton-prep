const cards = [
  {
    title: "Science of Reading",
    accent: "var(--color-primary)",
    body: "Our literacy program is built on structured phonics and the evidence base from the Science of Reading movement — giving every student a strong foundation.",
  },
  {
    title: "Mathematical Reasoning",
    accent: "var(--color-blue-muted)",
    body: "We prioritize conceptual understanding and number sense alongside procedural fluency, drawing on Singapore Math and other globally proven approaches.",
  },
  {
    title: "Socio-Emotional Learning",
    accent: "var(--color-green-muted)",
    body: "Research confirms that emotional intelligence and relational skills are as predictive of long-term success as academic achievement — we invest in both.",
  },
  {
    title: "Outdoor & Experiential Learning",
    accent: "var(--color-accent)",
    body: "Regular time outdoors and hands-on, project-based learning are built into our schedule because the evidence is clear: children learn better when they move and explore.",
  },
];

export function ResearchSection() {
  return (
    <section
      className="section section--surface"
      id="research"
      aria-labelledby="research-heading"
    >
      <div className="container">
        <div className="section-intro">
          <span className="eyebrow eyebrow--muted">Academic Foundation</span>
          <h2 id="research-heading">Grounded in What Works</h2>
          <p>
            Our curriculum draws from proven, peer-reviewed approaches — not
            trends. Every method we use has an evidence base.
          </p>
        </div>
        <div className="research-grid">
          {cards.map((c) => (
            <div key={c.title} className="research-card">
              <div
                className="research-card-accent"
                aria-hidden
                style={{ background: c.accent }}
              />
              <div className="research-card-body">
                <h4>{c.title}</h4>
                <p>{c.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
