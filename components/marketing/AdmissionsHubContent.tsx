import Link from "next/link";

import { MarketingLink } from "@/components/marketing/MarketingLink";
import { MarketingShell } from "@/components/marketing/MarketingShell";
import { microcopy, site } from "@/lib/site";
import { tuition } from "@/lib/tuition";

const stub = (
  <p style={{ color: "var(--color-text-muted)" }}>
    Details for this topic are being added to the new site. Please call{" "}
    <a href={`tel:${site.phone.tel}`}>{site.phone.display}</a> or{" "}
    <Link href="/contact">contact us</Link>.
  </p>
);

export function AdmissionsHubContent() {
  return (
    <MarketingShell>
      {/* ── Hero / CTA ─────────────────────────────────────────────── */}
      <section className="section section--surface" aria-labelledby="adm-h1">
        <div className="container">
          <div className="hub-section">
            <h1 id="adm-h1">Admissions</h1>
            <p className="hub-intro">
              Practical information about enrolling at Renton Prep. For
              step-by-step application instructions, see below; you can also
              reach the office any time.
            </p>

            <div className="enroll-card">
              <h2>How to Enroll</h2>
              <div className="enroll-steps">
                <p>Request Information</p>
                <p>Connect with Admissions</p>
                <p>Apply and Receive Decision</p>
              </div>
              <p className="cta-microcopy" style={{ marginTop: "var(--space-2)" }}>
                We guide you through each step.
              </p>
            </div>

            <div className="btn-group" id="start-application">
              <Link href="/contact" className="btn btn-primary">
                Request Information
              </Link>
              <MarketingLink href={site.urls.apply} className="btn btn-secondary">
                Apply Now
              </MarketingLink>
            </div>
            <p className="cta-microcopy">{microcopy.noCommitment}</p>
          </div>
        </div>
      </section>

      {/* ── How to Apply ───────────────────────────────────────────── */}
      <section className="section section--alt" id="how-to-apply">
        <div className="container">
          <div className="hub-section">
            <h2>How to apply</h2>
            <div className="hub-prose">
              <p>
                Our application is managed through the FACTS Admissions portal.
                Follow the steps below to complete your application.
              </p>
            </div>

            <ol className="apply-steps">
              <li className="apply-step">
                <span className="apply-step__num">1</span>
                <div>
                  <h3 className="apply-step__title">Create an account</h3>
                  <p>
                    Visit the{" "}
                    <MarketingLink href={site.urls.apply}>
                      FACTS Admissions portal
                    </MarketingLink>{" "}
                    and select the <em>Create an Account</em> tab at the top
                    of the page. You will create a login, set a password, and
                    verify your email address before continuing.
                  </p>
                </div>
              </li>
              <li className="apply-step">
                <span className="apply-step__num">2</span>
                <div>
                  <h3 className="apply-step__title">Start your application</h3>
                  <p>
                    You can log in and out at any time — your progress saves
                    automatically. A green check mark will appear on each
                    section once all required fields are complete.
                  </p>
                </div>
              </li>
              <li className="apply-step">
                <span className="apply-step__num">3</span>
                <div>
                  <h3 className="apply-step__title">
                    Review, submit &amp; pay the application fee
                  </h3>
                  <p>
                    When all required fields are finished, click{" "}
                    <em>Review &amp; Submit</em>. You will then be prompted
                    to pay the <strong>$45 application fee</strong> to
                    complete your submission.
                  </p>
                </div>
              </li>
              <li className="apply-step">
                <span className="apply-step__num">4</span>
                <div>
                  <h3 className="apply-step__title">
                    Submit required documents
                  </h3>
                  <p>
                    Please ensure the following documents are provided to
                    the admissions office:
                  </p>
                  <ul>
                    <li>Most recent report card</li>
                    <li>Most recent standardized test scores</li>
                    <li>
                      IEP, 504 plan, psychological evaluation, or testing
                      for academic concerns (if applicable)
                    </li>
                  </ul>
                </div>
              </li>
            </ol>

            <div style={{ marginTop: "var(--space-6)" }}>
              <Link href={site.urls.contact} className="btn btn-primary">
                Request Information
              </Link>
            </div>

            <p
              className="hub-prose"
              style={{ marginTop: "var(--space-5)", fontStyle: "italic" }}
            >
              Still have questions?{" "}
              <Link href={site.urls.contact}>Contact us</Link> and we will
              be happy to help.
            </p>

            <p style={{ marginTop: "var(--space-4)" }}>
              Sincerely,
              <br />
              <strong>Dr. David Zimmerman</strong>
            </p>
          </div>
        </div>
      </section>

      {/* ── Tuition ────────────────────────────────────────────────── */}
      <section className="section section--surface" id="tuition-fees">
        <div className="container">
          <div className="hub-section">
            <h2>Tuition &amp; fees</h2>
            <div className="tuition-rates">
              <h3>Renton Prep Tuition Rates</h3>
              <p className="tuition-rates__intro">
                The rate includes tuition and fees, and does not include
                uniforms, extended before and after school care, personal
                classroom supplies, lunches or snacks, or personal digital
                devices or any other individual items that may be added as part
                of the school program.
              </p>
              <div className="tuition-table-wrap">
                <table className="tuition-table">
                  <caption className="sr-only">
                    Renton Prep tuition for school year {tuition.schoolYear}
                  </caption>
                  <thead>
                    <tr>
                      <th scope="col">Program</th>
                      <th scope="col">
                        {tuition.schoolYear}
                        <span className="tuition-sub">Yearly tuition</span>
                      </th>
                      <th scope="col">
                        {tuition.schoolYear}
                        <span className="tuition-sub">12 payments</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {tuition.programs.map((p) => (
                      <tr key={p.name}>
                        <th scope="row">{p.name}</th>
                        <td>{p.annual}</td>
                        <td>{p.monthly}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="tuition-footnote">{tuition.footnote}</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Financial Aid ──────────────────────────────────────────── */}
      <section className="section section--surface" id="financial-assistance">
        <div className="container">
          <div className="hub-section">
            <h2>Financial assistance</h2>
            <h3>Financial Aid</h3>
            <div className="hub-prose">
              <p>
                Renton Prep partners with FACTS Grant &amp; Aid to review
                financial aid applications.
              </p>
              <p>
                For new students, financial aid is reviewed after the
                application is submitted and the student has been accepted.
                Families will be notified once a decision is made.
              </p>
              <p>
                Financial aid is part of joining the Renton Prep community.
                Students and families receiving aid are expected to support the
                school&apos;s Christ-centered approach, respect the learning
                environment, and contribute positively to the community.
              </p>
              <p>
                If a student or family&apos;s actions significantly disrupt the
                school environment or do not align with these expectations,
                financial aid may be reevaluated. Decisions are made by the
                leadership team, and families will be notified in writing. A
                review can be requested, but final decisions remain with the
                school.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Uniforms ───────────────────────────────────────────────── */}
      <section className="section section--alt" id="uniforms">
        <div className="container">
          <div className="hub-section">
            <h2>Uniforms</h2>
            <div className="uniform-guidelines">
              <h3>Uniform Guidelines</h3>
              <h4 className="uniform-guidelines__subhead">Basics</h4>
              <ul>
                <li>Approved uniform (Lands&apos; End)</li>
                <li>Gray bottoms</li>
                <li>Black, non-scuff shoes</li>
                <li>Black, white, or gray socks/tights</li>
              </ul>
              <h4 className="uniform-guidelines__subhead">Expectations</h4>
              <ul>
                <li>Clean, neat, and well-fitted</li>
                <li>Natural hair colors</li>
                <li>No distracting styles</li>
              </ul>
              <h4 className="uniform-guidelines__subhead">Not Allowed</h4>
              <ul>
                <li>Hoodies, sweatpants, or non-P.E. athletic wear</li>
                <li>Open-toe shoes</li>
                <li>Ripped/stained clothing or visible undergarments</li>
              </ul>
              <h4 className="uniform-guidelines__subhead">Outerwear</h4>
              <ul>
                <li>Coats allowed outside only</li>
                <li>Approved uniform layers indoors</li>
              </ul>
              <h4 className="uniform-guidelines__subhead">Dress Days</h4>
              <ul>
                <li>Follow the theme or wear uniform</li>
              </ul>
              <p className="uniform-guidelines__rule">
                <strong>Simple Rule:</strong> When in doubt, keep it simple and
                school-appropriate.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Student Handbook ───────────────────────────────────────── */}
      <section className="section section--surface" id="student-handbook">
        <div className="container">
          <div className="hub-section">
            <h2>Student handbook</h2>
            {stub}
          </div>
        </div>
      </section>

      {/* ── Extended Care ──────────────────────────────────────────── */}
      <section className="section section--alt" id="extended-school-care">
        <div className="container">
          <div className="hub-section">
            <h2>Extended school care</h2>
            <h3>Extended Care</h3>
            <h4>Hours</h4>
            <dl className="hub-details">
              <dt>Before School:</dt>
              <dd>7:45–8:15 a.m.</dd>
              <dt>After School:</dt>
              <dd>3:45–4:15 p.m.</dd>
              <dt>Rate:</dt>
              <dd>{tuition.extendedCareRate}</dd>
              <dt>Contact:</dt>
              <dd>
                <a href={`tel:${site.phone.tel}`}>{site.phone.display}</a>
              </dd>
            </dl>
            <div className="hub-prose" style={{ marginTop: "var(--space-4)" }}>
              <p>
                Extended Care provides a safe, supervised space for students
                before and after school. It is available for Kindergarten–8th
                grade on a drop-in basis, depending on enrollment.
              </p>
            </div>
            <div
              className="divider"
              role="separator"
              aria-hidden="true"
              style={{ margin: "var(--space-5) 0" }}
            />
            <h4>What to Expect</h4>
            <div className="hub-prose">
              <p>
                Students spend time reading, working on school assignments, and
                participating in quiet activities. After school includes snack
                time (from home), homework, and structured activities.
              </p>
            </div>
          </div>
        </div>
      </section>
    </MarketingShell>
  );
}
