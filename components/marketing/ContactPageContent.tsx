import { ContactForm } from "@/components/marketing/ContactForm";
import { MarketingLink } from "@/components/marketing/MarketingLink";
import { MarketingShell } from "@/components/marketing/MarketingShell";
import { site } from "@/lib/site";

export function ContactPageContent() {
  return (
    <MarketingShell>
      <section className="section section--surface">
        <div className="container">
          <div className="hub-section">
            <h1>Request Information</h1>
            <p className="contact-intro-text">
              Fill out the form below and we&apos;ll be in touch as soon as
              possible during school business hours.
            </p>

            <ContactForm />

            <address style={{ marginTop: "var(--space-6)" }}>
              <ul className="contact-info-list">
                <li>
                  <strong>Phone:</strong>{" "}
                  <a href={`tel:${site.phone.tel}`}>{site.phone.display}</a>
                </li>
                <li>
                  <strong>Address:</strong>
                  <br />
                  {site.address.lines[0]}
                  <br />
                  {site.address.lines[1]}
                </li>
              </ul>
            </address>
            <div className="btn-group contact-actions" style={{ marginTop: "var(--space-4)" }}>
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
