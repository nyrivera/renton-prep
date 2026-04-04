import { site } from "@/lib/site";

type SchoolJsonLdProps = { siteUrl: string };

/** Single JSON-LD graph for the school; fields match `lib/site.ts` only. */
export function SchoolJsonLd({ siteUrl }: SchoolJsonLdProps) {
  const base = siteUrl.replace(/\/$/, "");
  const data = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    name: site.name,
    legalName: site.legalName,
    url: `${base}/`,
    telephone: site.phone.tel,
    address: {
      "@type": "PostalAddress",
      streetAddress: site.addressStructured.streetAddress,
      addressLocality: site.addressStructured.addressLocality,
      addressRegion: site.addressStructured.addressRegion,
      postalCode: site.addressStructured.postalCode,
      addressCountry: site.addressStructured.addressCountry,
    },
    sameAs: [site.urls.instagram],
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
