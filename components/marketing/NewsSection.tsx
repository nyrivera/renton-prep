import Link from "next/link";

import { featuredNews, site } from "@/lib/site";

export function NewsSection() {
  return (
    <section className="section section--alt" aria-labelledby="news-heading">
      <div className="container">
        <div className="section-intro">
          <span className="eyebrow eyebrow--muted">From the School</span>
          <h2 id="news-heading">Featured News</h2>
          <p>Highlights from the Renton Prep blog and announcements.</p>
        </div>
        <div className="news-grid">
          {featuredNews.map((item, i) => (
            <article key={i} className="news-card">
              <p className="news-card-meta">{item.date}</p>
              <h3 className="news-card-title">{item.title}</h3>
              <Link href={item.href} className="news-card-link">
                Read more
              </Link>
            </article>
          ))}
        </div>
        <div style={{ textAlign: "center", marginTop: "var(--space-5)" }}>
          <Link href={site.urls.blog} className="btn btn-secondary">
            View Blog
          </Link>
        </div>
      </div>
    </section>
  );
}
