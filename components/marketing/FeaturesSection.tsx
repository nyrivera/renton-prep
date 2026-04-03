const items = [
  {
    title: "Every Child Is Known",
    body: "Class sizes stay small on purpose. Teachers follow each student's learning patterns over time, knowing when to push harder, when to slow down, and when a different approach will finally unlock understanding.",
  },
  {
    title: "Faith Woven Throughout",
    body: "Scripture and the example of Christ shape how we frame every subject, from how we interpret history to how we resolve conflict in the hallway. Faith isn't a chapel add-on; it is the operating culture of the school.",
  },
  {
    title: "Research-Backed Methods",
    body: "Instruction is built on methods with documented results: spaced practice, frequent low-stakes assessment, and project-based learning that connects classroom skills to real problems. What and how we teach is continuously revised against current evidence.",
  },
  {
    title: "Technology as a Learning Tool",
    body: "Technology, including AI, is a means to stronger thinking, not a substitute for it. Students develop the discernment to know when and how to use these tools well, building habits that serve them long after the tools themselves change.",
  },
  {
    title: "Whole-Child Development",
    body: "Academic challenge, character formation, physical health, and creative expression are all treated as essential, not as extras competing for time. A student taught only facts is not fully prepared.",
  },
  {
    title: "Small School, Strong Community",
    body: "At this size, parents know teachers by name, and teachers know parents. Families join a school where involvement is natural, communication is direct, and no decision about your child is made without you in the conversation.",
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
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
