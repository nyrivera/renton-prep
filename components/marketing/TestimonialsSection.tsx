const STAR_INDICES = [1, 2, 3, 4, 5] as const;

const quotes = [
  {
    quote:
      "Renton Prep changed how my daughter sees herself as a learner. She went from struggling to thriving — and the teachers knew exactly why and what she needed.",
    attr: "Parent of 3rd Grader · Enrolled Family",
  },
  {
    quote:
      "The combination of strong academics and genuine faith integration is rare. My kids are being challenged intellectually and shaped spiritually at the same time.",
    attr: "Parent of Two Students · Enrolled Family",
  },
  {
    quote:
      "The Genesis Project gave my son a way to talk about AI that was grounded and thoughtful. He is not afraid of the technology — he knows how to use it wisely.",
    attr: "Parent of 5th Grader · Enrolled Family",
  },
];

export function TestimonialsSection() {
  return (
    <section
      className="section section--alt"
      id="testimonials"
      aria-labelledby="testimonials-heading"
    >
      <div className="container">
        <div className="section-intro section-intro--center">
          <span className="eyebrow eyebrow--muted">Family Voices</span>
          <h2 id="testimonials-heading">What Our Families Say</h2>
          <p>Words from parents whose children call Renton Prep home.</p>
        </div>
        <div className="testimonials-grid">
          {quotes.map((q, i) => (
            <figure key={i} className="testimonial-card">
              <div className="testimonial-stars" aria-label="5 out of 5 stars">
                {STAR_INDICES.map((starIdx) => (
                  <span key={starIdx} aria-hidden="true">
                    ★
                  </span>
                ))}
              </div>
              <blockquote className="testimonial-quote">{q.quote}</blockquote>
              <figcaption className="testimonial-attr">{q.attr}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
