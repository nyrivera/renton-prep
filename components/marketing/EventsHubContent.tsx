import Link from "next/link";

import { MarketingShell } from "@/components/marketing/MarketingShell";
import { site } from "@/lib/site";

const stub = (
  <p style={{ color: "var(--color-text-muted)" }}>
    Calendars and hours are being finalized for this site. Call{" "}
    <a href={`tel:${site.phone.tel}`}>{site.phone.display}</a> or{" "}
    <Link href="/contact">contact us</Link>.
  </p>
);

export function EventsHubContent() {
  return (
    <MarketingShell>
      <section className="section section--surface">
        <div className="container">
          <div className="hub-section">
            <h1>Events &amp; calendar</h1>
            <p className="hub-intro">
              School hours and the academic calendar will be posted here.
            </p>
          </div>
        </div>
      </section>

      <section className="section section--alt" id="school-hours">
        <div className="container">
          <div className="hub-section">
            <h2>School hours</h2>
            {stub}
          </div>
        </div>
      </section>

      <section className="section section--surface" id="calendar">
        <div className="container">
          <div className="hub-section">
            <h2>Academic calendar</h2>
            {stub}
          </div>
        </div>
      </section>
    </MarketingShell>
  );
}
