import Link from "next/link";

import { MarketingLink } from "@/components/marketing/MarketingLink";
import { MarketingShell } from "@/components/marketing/MarketingShell";
import { site } from "@/lib/site";

export function GenesisProjectContent() {
  return (
    <MarketingShell>

      {/* ── Hero ─────────────────────────────────────────────────────── */}
      <section className="section section--surface" aria-labelledby="gp-heading">
        <div className="container">
          <div className="hub-section">
            <span className="eyebrow eyebrow--muted">The Genesis Project</span>
            <h1 id="gp-heading">The Genesis Project at Renton Prep</h1>
            <p className="hub-intro">
              A Thoughtful, Research-Informed Approach to Learning, Innovation,
              and Human Flourishing
            </p>
            <div className="hub-prose" style={{ marginTop: "var(--space-4)" }}>
              <p>
                At Renton Prep, we believe schools should prepare students not
                only for academic success, but also for lives of wisdom,
                purpose, and service. The Genesis Project reflects that
                commitment.
              </p>
              <p>
                The Genesis Project is Renton Prep&apos;s long-term learning
                and research initiative focused on how students grow, how
                meaningful learning happens, and how emerging technologies —
                including artificial intelligence — can be introduced with
                care, responsibility, and clear educational purpose.
              </p>
              <p>
                This is not innovation for its own sake. It is a thoughtful,
                deeply human approach to education, grounded in strong
                relationships, academic rigor, Christian faith, and careful
                stewardship.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Why It Matters ───────────────────────────────────────────── */}
      <section className="section section--alt" aria-labelledby="gp-why-heading">
        <div className="container">
          <div className="hub-section">
            <h2 id="gp-why-heading">Why the Genesis Project Matters</h2>
            <div className="hub-prose">
              <p>
                In recent years, many schools have rushed to adopt new
                technologies without clear guardrails, developmental
                considerations, or a deeper educational vision. At the same
                time, research has raised important questions about
                accountability, evidence, and long-term outcomes in newer
                school models.
              </p>
              <p>
                Renton Prep has taken a different path.
              </p>
              <p>
                The Genesis Project was built to ensure that innovation serves
                students well, strengthens trust, and supports deep learning
                rather than distracting from it. Our aim is not simply to use
                new tools, but to ask better questions:
              </p>
            </div>
            <ul className="genesis-highlights">
              <li>What helps students think deeply and grow wisely?</li>
              <li>
                How do we preserve human relationships at the center of
                learning?
              </li>
              <li>
                How do we prepare students for a changing world without
                compromising childhood, character, or faith?
              </li>
              <li>
                How can a small school remain agile while also being rigorous,
                accountable, and academically strong?
              </li>
            </ul>
            <div className="hub-prose" style={{ marginTop: "var(--space-4)" }}>
              <p>
                These are not questions we began asking in response to public
                trends. They have already been central to our work.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Small by Design ──────────────────────────────────────────── */}
      <section className="section section--surface" aria-labelledby="gp-small-heading">
        <div className="container">
          <div className="hub-section">
            <h2 id="gp-small-heading">Small by Design, Strong by Structure</h2>
            <div className="hub-prose">
              <p>
                Renton Prep offers the close relationships and personalized
                learning many families value in small-school environments,
                while also maintaining the structure and accountability
                families expect from a strong academic institution.
              </p>
              <p>We are:</p>
            </div>
            <ul className="genesis-highlights">
              <li>Internationally and state accredited</li>
              <li>State approved</li>
              <li>Academically rigorous</li>
              <li>Relational and student-centered</li>
              <li>Committed to measurable growth and long-term outcomes</li>
            </ul>
            <div className="hub-prose" style={{ marginTop: "var(--space-4)" }}>
              <p>
                Our size gives us flexibility. Our standards give families
                confidence.
              </p>
              <p>
                That combination is one of the things that makes Renton Prep
                distinct.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Personalized Learning ─────────────────────────────────────── */}
      <section className="section section--alt" aria-labelledby="gp-personalized-heading">
        <div className="container">
          <div className="hub-section">
            <h2 id="gp-personalized-heading">Personalized Learning with Purpose</h2>
            <div className="hub-prose">
              <p>Every student is different.</p>
              <p>
                Some are ready to move ahead quickly. Others benefit from more
                time, support, and repetition. We believe strong schools make
                room for both.
              </p>
              <p>
                At Renton Prep, personalized learning does not mean lowering
                expectations. It means knowing students well enough to
                challenge them appropriately, support them intentionally, and
                help them develop confidence, resilience, and ownership of
                their learning.
              </p>
              <p>
                We value productive struggle. We believe growth often comes
                through challenge. And we work to create an environment where
                students are both supported and stretched.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Responsible Innovation ────────────────────────────────────── */}
      <section className="section section--surface" aria-labelledby="gp-innovation-heading">
        <div className="container">
          <div className="hub-section">
            <h2 id="gp-innovation-heading">
              Responsible Innovation, Not Trend-Chasing
            </h2>
            <div className="hub-prose">
              <p>
                The Genesis Project guides how Renton Prep evaluates and
                introduces emerging technologies, including artificial
                intelligence.
              </p>
              <p>
                We do not believe schools should adopt technology simply
                because it is new, popular, or marketable. We believe new
                tools should be used only when they genuinely strengthen
                learning — and only when they are introduced with maturity,
                adult guidance, and clear moral and educational purpose.
              </p>
              <p>
                That means we ask careful questions before implementation:
              </p>
            </div>
            <ul className="genesis-highlights">
              <li>Is this age-appropriate?</li>
              <li>Does this support deep thinking rather than replace it?</li>
              <li>Does this strengthen learning or create dependence?</li>
              <li>
                Does this preserve trust, responsibility, and human connection?
              </li>
              <li>Is this aligned with our values and our mission?</li>
            </ul>
            <div className="hub-prose" style={{ marginTop: "var(--space-4)" }}>
              <p>
                Technology should serve students. It should never displace the
                relationships, judgment, discipline, and reflection that matter
                most.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Academic Strength & Human Formation ──────────────────────── */}
      <section className="section section--alt" aria-labelledby="gp-academics-heading">
        <div className="container">
          <div className="hub-section">
            <h2 id="gp-academics-heading">
              Academic Strength and Human Formation
            </h2>
            <div className="hub-prose">
              <p>
                Renton Prep is committed to strong academic outcomes, but we
                believe education must reach beyond performance alone.
              </p>
              <p>
                Our goal is to help students become thoughtful, capable,
                grounded young people who can read carefully, think critically,
                communicate clearly, and live with integrity.
              </p>
              <p>
                That formation happens through rigorous academics, but also
                through the daily life of the school: discussion, reflection,
                accountability, creativity, service, and the steady guidance of
                trusted adults.
              </p>
              <p>Alongside academics, students engage in:</p>
            </div>
            <ul className="genesis-highlights">
              <li>Fine Arts</li>
              <li>Music and performance</li>
              <li>Public speaking</li>
              <li>Cultural field trips</li>
              <li>Creative exploration</li>
              <li>Relational learning experiences that support the whole child</li>
            </ul>
            <div className="hub-prose" style={{ marginTop: "var(--space-4)" }}>
              <p>
                We want students to leave Renton Prep not only prepared for
                their next academic step, but prepared to lead meaningful
                lives.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Community ─────────────────────────────────────────────────── */}
      <section className="section section--surface" aria-labelledby="gp-community-heading">
        <div className="container">
          <div className="hub-section">
            <h2 id="gp-community-heading">
              A Community that Welcomes Thoughtful Engagement
            </h2>
            <div className="hub-prose">
              <p>
                Renton Prep values intellectual curiosity, honest questions,
                and respectful engagement with ideas.
              </p>
              <p>
                We want students to learn in a community where they are known,
                where they are encouraged to think carefully, and where they
                encounter a richness of ideas and perspectives in ways that
                deepen both understanding and character.
              </p>
              <p>
                As a Christian school, our faith shapes the way we teach and
                live together. We follow the example of Jesus, who welcomed
                questions, honored the dignity of every person, and formed
                people for lives of love, wisdom, and service.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Leadership ───────────────────────────────────────────────── */}
      <section className="section section--alt" aria-labelledby="gp-leadership-heading">
        <div className="container">
          <div className="hub-section">
            <h2 id="gp-leadership-heading">
              Leadership That Brings Scholarship and Practice Together
            </h2>
            <div className="hub-prose">
              <p>
                The Genesis Project is part of a broader vision for
                educational excellence at Renton Prep under the leadership of{" "}
                <strong>Dr. Michelle Zimmerman, PhD</strong>, an
                internationally recognized voice in AI and education and
                author of{" "}
                <em>Teaching AI: Exploring New Frontiers in Education</em>.
              </p>
              <p>
                Under her leadership, Renton Prep has pursued innovation with
                seriousness, accountability, and a clear sense of educational
                responsibility.
              </p>
              <p>The school has been recognized as:</p>
            </div>
            <ul className="genesis-highlights">
              <li>
                A recognized Microsoft Flagship School — one of a select number of K–12 schools in the United States to receive this designation
              </li>
              <li>
                Washington State&apos;s first Cognia STEM-Certified K–12 school
              </li>
            </ul>
            <div className="hub-prose" style={{ marginTop: "var(--space-4)" }}>
              <p>
                These recognitions reflect more than innovation alone. They
                reflect a commitment to excellence, thoughtful leadership, and
                meaningful student preparation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── What Makes Renton Prep Different ─────────────────────────── */}
      <section className="section section--surface" aria-labelledby="gp-different-heading">
        <div className="container">
          <div className="hub-section">
            <h2 id="gp-different-heading">What Makes Renton Prep Different</h2>
            <div className="hub-prose">
              <p>
                Families often come to Renton Prep looking for something
                increasingly rare: a school that is academically strong,
                deeply relational, faith-centered, and thoughtful about
                innovation.
              </p>
              <p>
                The Genesis Project helps make that possible. It reflects a
                school that is:
              </p>
            </div>
            <ul className="genesis-highlights">
              <li>Personal without being informal in its standards</li>
              <li>Innovative without being reactionary</li>
              <li>Faith-centered without being intellectually narrow</li>
              <li>
                Small enough to know students deeply, yet strong enough to
                prepare them well
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* ── Visit CTA ────────────────────────────────────────────────── */}
      <section className="section section--alt" aria-labelledby="gp-visit-heading">
        <div className="container">
          <div className="hub-section">
            <h2 id="gp-visit-heading">Visit Renton Prep</h2>
            <div className="hub-prose">
              <p>
                The best way to understand Renton Prep and the Genesis Project
                is to experience the school in person.
              </p>
              <p>
                We invite you to visit campus, observe the life of the school,
                and learn more about how Renton Prep helps students grow in
                knowledge, character, and purpose.
              </p>
            </div>
            <div className="btn-group" style={{ marginTop: "var(--space-5)" }}>
              <Link href={site.urls.contact} className="btn btn-primary">
                Request a Visit
              </Link>
              <MarketingLink href={site.urls.apply} className="btn btn-secondary">
                Start Your Application
              </MarketingLink>
            </div>
          </div>
        </div>
      </section>

    </MarketingShell>
  );
}
