const items = [
  {
    title: "Every Child Is Known",
    body: "Low ratios and intentional mentorship mean teachers know each student's strengths, struggles, and growth trajectory — not just their grades.",
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
    body: "Christian formation isn't a separate class. It shapes how we approach every subject, conflict, and question — rooting students in enduring truth.",
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
    body: "Our curriculum draws from the best peer-reviewed educational research, adapted for the developmental stage of each child and the demands of tomorrow.",
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
    title: "AI-Integrated Curriculum",
    body: "Students learn to use AI tools responsibly and critically — building fluency that will be essential throughout higher education and the workforce.",
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
    body: "Academics, character, physical wellness, and creative expression are treated as equally essential parts of a complete education.",
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
    body: "Families become part of a genuine community where parents are partners, not passengers, in their child's education.",
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
            A different kind of school, built on a different set of priorities.
          </p>
        </div>
        <div className="features-grid">
          {items.map((item) => (
            <div key={item.title} className="feature-card">
              <div className="feature-icon" aria-hidden>
                {item.svg}
              </div>
              <h4>{item.title}</h4>
              <p>{item.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
