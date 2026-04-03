import Link from "next/link";

import { missionVisionAction } from "@/lib/site";

export function MissionSection() {
  return (
    <section
      className="section section--alt"
      id="mission"
      aria-labelledby="mission-heading"
    >
      <div className="container">
        <div className="section-intro section-intro--center">
          <span className="eyebrow eyebrow--muted">Our Mission</span>
          <h2 id="mission-heading">Mission, Vision, and Action</h2>
          <p>
            The official statements that guide Renton Prep Christian School.
          </p>
          <p style={{ marginTop: "var(--space-2)" }}>
            <Link href="/about" className="faq-link">
              Read how the school grew from the Renton community
            </Link>
          </p>
        </div>
        <div className="mva-grid">
          {/* ── 01 Mission ── */}
          <div className="mva-card">
            <div className="mva-card-number">01 — Mission</div>
            <h3>Our Mission</h3>
            <p>{missionVisionAction.mission}</p>
            <p className="mva-card-prose">
              At Renton Prep, educators and students are both considered
              learners, uniquely positioned to bring hope to a hurting world. We
              follow the example of Jesus as an effective teacher who asked,
              &ldquo;Do you hear what these children are saying?&rdquo; (Matthew
              21:16)—by listening carefully, inviting questions, and engaging
              multiple perspectives.
            </p>
            <p className="mva-card-prose">
              Our mission calls learners to practice critical thinking and
              problem‑solving through productive struggle, both individually and
              collaboratively. In a rapidly changing world, we view challenge and
              uncertainty not as obstacles to avoid, but as essential
              opportunities to innovate and grow.
            </p>
            <p className="mva-card-prose">
              We are committed to forming learners who approach relationships,
              work, and daily life with discernment, resilience, responsibility,
              and purpose.
            </p>
          </div>

          {/* ── 02 Vision ── */}
          <div className="mva-card">
            <div className="mva-card-number">02 — Vision</div>
            <h3>Our Vision</h3>
            <p>{missionVisionAction.vision}</p>
            <p className="mva-card-prose">
              As technology and society continue to evolve, our vision remains
              anchored in our enduring mission and values, while thoughtfully
              adapting emerging skills and human traits that remain relevant in a
              continually changing world.
            </p>
            <p className="mva-card-prose">
              We seek to build a legacy shaped by the God-given talent, insight,
              and voice of students, educators, and collaborators, by cultivating
              strong and nuanced thinking skills, with the grit, wisdom, and
              flexibility required to move ideas into action.
            </p>
          </div>

          {/* ── 03 Action ── */}
          <div className="mva-card">
            <div className="mva-card-number">03 — Action</div>
            <h3>Our Action</h3>
            <p>{missionVisionAction.action}</p>
            <p className="mva-card-prose">
              A technology‑enabled education means more than incorporating
              modern tools and secure systems. It requires thoughtful learning
              design. As technology advances, our practices adapt. Our values
              remain constant.
            </p>
            <p className="mva-card-prose">
              {/*
               * TODO (owner): Provide the expansion of each letter in
               * C.H.R.I.S.T. so this can be wired to a tooltip or an
               * /about#christ-values anchor once the values page is built.
               */}
              Guided by Christ&apos;s life and ministry and expressed through
              our{" "}
              <abbr
                className="mva-christ-acronym"
                title="C.H.R.I.S.T. core values"
              >
                C.H.R.I.S.T.
              </abbr>{" "}
              core values, we shape both thinking skills and adaptability so
              learners and collaborators, from children to adults, can refine
              ideas, apply learning, and contribute meaningfully to their
              communities and world.
            </p>
            <p className="mva-card-prose">
              All Genesis Project–related action remains aligned with Renton
              Prep&apos;s mission, vision, and beliefs while allowing approved
              translation for secular or interorganizational applications.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
