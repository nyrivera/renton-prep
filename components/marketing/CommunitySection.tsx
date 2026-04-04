import fs from "node:fs";
import path from "node:path";

import Image from "next/image";

import { MarketingLink } from "@/components/marketing/MarketingLink";
import { site } from "@/lib/site";

/**
 * Four-photo grid (2×2 desktop, stack on small screens).
 * Files live in /public/ — keep extensions in sync with on-disk assets.
 */
const photos = [
  {
    src: "/community-1.jpeg",
    alt: "Teacher reading aloud to elementary students gathered on the classroom floor",
    position: "center 35%",
  },
  {
    src: "/community-2.JPG",
    alt: "Students crossing a suspension bridge on a Renton Prep outdoor field trip",
    position: "center 25%",
  },
  {
    src: "/community-3.jpg",
    alt: "Teacher leading a morning lesson with students seated on the floor",
    position: "center 30%",
  },
  {
    src: "/community-4.jpg",
    alt: "Students watching a classroom presentation on the large screen",
    position: "center center",
  },
];

function photosExist(): boolean {
  return photos.every((p) =>
    fs.existsSync(path.join(process.cwd(), "public", p.src)),
  );
}

export function CommunitySection() {
  if (!photosExist()) return null;

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

        <div className="community-grid" role="group" aria-label="Community photo grid">
          {photos.map((photo, i) => (
            <div key={i} className="community-cell">
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                sizes="(max-width: 520px) 100vw, 50vw"
                style={{ objectFit: "cover", objectPosition: photo.position }}
              />
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
