import { MarketingLink } from "@/components/marketing/MarketingLink";
import { site } from "@/lib/site";

function PlaceholderIcon({ stroke }: { stroke: string }) {
  return (
    <svg
      style={{ width: 28, height: 28, stroke, opacity: 0.4 }}
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <circle cx="8.5" cy="8.5" r="1.5" />
      <polyline points="21 15 16 10 5 21" />
    </svg>
  );
}

const tiles = [
  {
    label: "Classroom learning",
    bg: "linear-gradient(135deg,#e5eafb,#c8d5f0)",
    stroke: "var(--color-primary)",
  },
  {
    label: "Outdoor learning",
    bg: "linear-gradient(135deg,#f0f4e8,#dce8c8)",
    stroke: "var(--color-green-muted)",
  },
  {
    label: "Community events",
    bg: "linear-gradient(135deg,#fff4d6,#fde8a0)",
    stroke: "var(--color-accent)",
  },
  {
    label: "Chapel and worship",
    bg: "linear-gradient(135deg,#fce8e8,#f0c8c8)",
    stroke: "var(--color-red-muted)",
  },
  {
    label: "Genesis Project",
    bg: "linear-gradient(135deg,#ede8fb,#d5cff5)",
    stroke: "var(--color-primary)",
  },
];

export function CommunitySection() {
  return (
    <section
      className="section section--surface"
      id="community"
      aria-labelledby="community-heading"
    >
      <div className="container">
        <div className="section-intro section-intro--center">
          <span className="eyebrow eyebrow--muted">Our Community</span>
          <h2 id="community-heading">Life at Renton Prep</h2>
          <p>
            A glimpse into our classrooms, community events, and the everyday
            moments that make Renton Prep home.
          </p>
        </div>
        <div className="instagram-grid" aria-label="Community photo grid">
          {tiles.map((t) => (
            <div
              key={t.label}
              className="insta-placeholder"
              style={{ background: t.bg }}
              aria-label={t.label}
            >
              <PlaceholderIcon stroke={t.stroke} />
            </div>
          ))}
        </div>
        <div style={{ textAlign: "center", marginTop: "var(--space-4)" }}>
          <MarketingLink href={site.urls.instagram} className="btn btn-secondary">
            Follow @rentonprep on Instagram
          </MarketingLink>
        </div>
      </div>
    </section>
  );
}
