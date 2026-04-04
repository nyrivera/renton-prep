import Link from "next/link";

import { MarketingShell } from "@/components/marketing/MarketingShell";
import { site } from "@/lib/site";

export function EventsHubContent() {
  return (
    <MarketingShell>
      <section className="section section--surface">
        <div className="container">
          <div className="hub-section">
            <h1>Events &amp; calendar</h1>
            <p className="hub-intro">
              Bell schedules, late-start days, and the academic calendar are
              published by the school each year. Use the sections below for how
              to get the current details.
            </p>
          </div>
        </div>
      </section>

      <section className="section section--alt" id="school-hours">
        <div className="container">
          <div className="hub-section">
            <h2>School hours</h2>
            <div className="hub-prose">
              <p>
                Daily start and end times can vary by grade and special
                schedules. The office can share the current bell schedule for
                your student.
              </p>
              <p>
                <a href={`tel:${site.phone.tel}`}>{site.phone.display}</a>
                {" · "}
                <Link href={site.urls.contact}>Request information</Link>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--surface" id="calendar">
        <div className="container">
          <div className="hub-section">
            <h2>Academic calendar</h2>
            <div className="hub-prose">
              <p>
                The year-at-a-glance calendar (breaks, conferences, and key
                dates) is distributed to families and available from the front
                office. If you need a copy or have a scheduling question, reach
                out to admissions.
              </p>
              <p>
                <a href={`tel:${site.phone.tel}`}>{site.phone.display}</a>
                {" · "}
                <Link href={site.urls.contact}>Request information</Link>
              </p>
            </div>
          </div>
        </div>
      </section>
    </MarketingShell>
  );
}
