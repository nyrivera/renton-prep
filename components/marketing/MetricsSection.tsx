import Image from "next/image";

export function MetricsSection() {
  return (
    <section
      className="section section--surface"
      aria-labelledby="recognition-heading"
    >
      <div className="container">
        <div className="recognition">
          <div className="recognition-content">
            <span className="eyebrow eyebrow--muted">Recognition</span>
            <h2 id="recognition-heading">
              First Cognia STEM-Accredited K–12 School in Washington
            </h2>
            <p className="recognition-body">
              Renton Prep combines accredited academics, STEM distinction, and a
              thoughtful K–12 learning journey designed to help students grow
              with purpose, confidence, and curiosity.
            </p>
            <ul className="recognition-points" role="list">
              <li>
                <strong>Cognia-accredited</strong> K–12 school
              </li>
              <li>
                <strong>STEM-accredited</strong> program in Washington
              </li>
              <li>
                <strong>The Genesis Project</strong> for K–5 students
              </li>
            </ul>
          </div>
          <div
            className="recognition-badges"
            role="list"
            aria-label="Accreditation badges"
          >
            <div className="recognition-badge" role="listitem">
              <div className="recognition-badge-img">
                <Image
                  src="/cognia-accredited-badge.png"
                  alt="Cognia Accredited: NCA CASI, NWAC, SACS CASI"
                  width={140}
                  height={114}
                  style={{ objectFit: "contain" }}
                />
              </div>
              <span className="recognition-badge-label">
                Cognia Accredited
              </span>
            </div>
            <div className="recognition-badge" role="listitem">
              <div className="recognition-badge-img">
                <Image
                  src="/microsoft-showcase-badge.jpg"
                  alt="Microsoft Showcase School"
                  width={100}
                  height={100}
                  style={{ objectFit: "contain" }}
                />
              </div>
              <span className="recognition-badge-label">
                Microsoft Showcase School
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
