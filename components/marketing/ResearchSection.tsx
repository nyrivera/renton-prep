const cards = [
  {
    title: "Reading Instruction That Works",
    accent: "var(--color-primary)",
    body: "Literacy instruction starts with the foundational skills — phonics, decoding, and word recognition — then builds through fluency, vocabulary, and comprehension. Students don't just learn to read; they read to discover, think, and grow.",
  },
  {
    title: "Mathematical Reasoning",
    accent: "var(--color-blue-muted)",
    body: "Students are expected to explain their thinking, not just arrive at the right answer. Math class involves discussion — showing how a problem was solved, trying alternative approaches, and building the confidence that comes from genuine understanding.",
  },
  {
    title: "Socio-Emotional Learning",
    accent: "var(--color-green-muted)",
    body: "Students who understand themselves, manage conflict well, and work effectively with others carry those skills into every area of life. We treat character and relational development as core curriculum, not supplementary programming.",
  },
  {
    title: "Outdoor & Experiential Learning",
    accent: "var(--color-accent)",
    body: "Students learn beyond the classroom through field trips, outdoor time, and hands-on projects built into the regular schedule. Getting out of the building — and into the world — isn't a reward for finishing work; it's part of how the work gets done.",
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
            Instruction here follows the evidence — not the trend cycle. We
            build on what research consistently shows works, then adapt it for
            the students we actually know.
          </p>
        </div>
        <div className="research-grid">
          {cards.map((c) => (
            <div key={c.title} className="research-card">
              <div
                className="research-card-accent"
                aria-hidden="true"
                style={{ background: c.accent }}
              />
              <div className="research-card-body">
                <h3>{c.title}</h3>
                <p>{c.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
