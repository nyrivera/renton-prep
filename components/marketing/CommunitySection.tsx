import Image from "next/image";

import { MarketingLink } from "@/components/marketing/MarketingLink";
import { site } from "@/lib/site";

/**
 * Photo grid layout — editorial 3+2:
 *   Top row (3 cells, portrait-leaning):
 *     community-1.jpg  reading session
 *     community-2.jpg  suspension bridge field trip
 *     community-3.jpg  teacher with class on floor
 *   Bottom row (2 cells, landscape-leaning):
 *     community-4.jpg  kids watching TV/screen
 *     community-5.jpg  students on Bainbridge Island sign
 *
 * Drop those 5 files into /public/ to populate the grid.
 * object-position is tuned per photo to keep the main subject in frame.
 */
const photos = [
  {
    src: "/community-1.jpg",
    alt: "Teacher reading aloud to elementary students gathered on the classroom floor",
    position: "center 35%",
  },
  {
    src: "/community-2.jpg",
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
  {
    src: "/community-5.jpg",
    alt: "Renton Prep students posing on the Bainbridge Island welcome sign during a field trip",
    position: "center 40%",
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

        <div className="community-grid" aria-label="Community photo grid">
          {photos.map((photo, i) => (
            <div key={i} className="community-cell">
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                sizes="(max-width: 520px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
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
