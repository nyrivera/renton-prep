const items = [
  {
    title: "Every Child Is Known",
    body: "Class sizes stay small on purpose. Teachers follow each student's learning patterns over time, knowing when to push harder, when to slow down, and when a different approach will finally unlock understanding.",
    svg: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        strokeWidth={1.8}
        strokeLinecap="round"
        strokeLinejoin="round"
        stroke="currentColor"
      >
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    title: "Faith Woven Throughout",
    body: "Scripture and the example of Christ shape how we frame every subject, from how we interpret history to how we resolve conflict in the hallway. Faith isn't a chapel add-on; it is the operating culture of the school.",
    svg: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        strokeWidth={1.8}
        strokeLinecap="round"
        strokeLinejoin="round"
        stroke="currentColor"
      >
        <path d="M18 8h1a4 4 0 0 1 0 8h-1" />
        <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" />
        <line x1="6" y1="1" x2="6" y2="4" />
        <line x1="10" y1="1" x2="10" y2="4" />
        <line x1="14" y1="1" x2="14" y2="4" />
      </svg>
    ),
  },
  {
    title: "Research-Backed Methods",
    body: "Instruction is built on methods with documented results: spaced practice, frequent low-stakes assessment, and project-based learning that connects classroom skills to real problems. What and how we teach is continuously revised against current evidence.",
    svg: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        strokeWidth={1.8}
        strokeLinecap="round"
        strokeLinejoin="round"
        stroke="currentColor"
      >
        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
      </svg>
    ),
  },
  {
    title: "Technology as a Learning Tool",
    body: "Technology, including AI, is a means to stronger thinking, not a substitute for it. Students develop the discernment to know when and how to use these tools well, building habits that serve them long after the tools themselves change.",
    svg: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        strokeWidth={1.8}
        strokeLinecap="round"
        strokeLinejoin="round"
        stroke="currentColor"
      >
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
  },
  {
    title: "Whole-Child Development",
    body: "Academic challenge, character formation, physical health, and creative expression are all treated as essential, not as extras competing for time. A student taught only facts is not fully prepared.",
    svg: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        strokeWidth={1.8}
        strokeLinecap="round"
        strokeLinejoin="round"
        stroke="currentColor"
      >
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
  },
  {
    title: "Small School, Strong Community",
    body: "At this size, parents know teachers by name, and teachers know parents. Families join a school where involvement is natural, communication is direct, and no decision about your child is made without you in the conversation.",
    svg: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        strokeWidth={1.8}
        strokeLinecap="round"
        strokeLinejoin="round"
        stroke="currentColor"
      >
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
  },
];

export function FeaturesSection() {
  return (
    <section className="section section--surface" aria-labelledby="why-heading">
      <div className="container">
        <div className="section-intro">
          <span className="eyebrow eyebrow--muted">Why Renton Prep</span>
          <h2 id="why-heading">What Sets Us Apart</h2>
          <p>
            Rigorous academics, a Christ-centered culture, and a school
            community small enough that every teacher knows every student,
            K through 12, in the same building.
          </p>
        </div>
        <div className="features-grid">
          {items.map((item, i) => (
            <div key={i} className="feature-card">
              <div className="feature-icon" aria-hidden="true">
                {item.svg}
              </div>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
