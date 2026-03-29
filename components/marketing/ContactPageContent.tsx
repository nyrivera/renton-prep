import { MarketingLink } from "@/components/marketing/MarketingLink";
import { MarketingShell } from "@/components/marketing/MarketingShell";
import { site } from "@/lib/site";

export function ContactPageContent() {
  return (
    <MarketingShell>
      <section className="section section--surface">
        <div className="container">
          <div className="section-intro">
            <h1>Contact</h1>
            <p style={{ color: "var(--color-text-muted)", maxWidth: "52ch" }}>
              Reach the Renton Prep office directly. We will respond as soon as
              we can during school business hours.
            </p>
            <ul
              style={{
                listStyle: "none",
                padding: 0,
                marginTop: "var(--space-4)",
                lineHeight: 1.7,
              }}
            >
              <li>
                <strong>Phone:</strong>{" "}
                <a href={`tel:${site.phone.tel}`}>{site.phone.display}</a>
              </li>
              <li style={{ marginTop: "var(--space-2)" }}>
                <strong>Address:</strong>
                <br />
                {site.address.lines[0]}
                <br />
                {site.address.lines[1]}
              </li>
            </ul>
            <div className="btn-group" style={{ marginTop: "var(--space-5)" }}>
              <MarketingLink href={site.urls.apply} className="btn btn-primary">
                Apply Now
              </MarketingLink>
              <a href={`tel:${site.phone.tel}`} className="btn btn-secondary">
                Call Admissions
              </a>
            </div>
          </div>
        </div>
      </section>
    </MarketingShell>
  );
}
