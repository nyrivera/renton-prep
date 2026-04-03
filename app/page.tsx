import type { Metadata } from "next";

import { MarketingHome } from "@/components/marketing/MarketingHome";
import { SiteFooter } from "@/components/marketing/SiteFooter";
import { SiteHeader } from "@/components/marketing/SiteHeader";

export const metadata: Metadata = {
  title: {
    absolute: "Renton Prep | A Premier Microsoft Showcase School",
  },
  description:
    "Christ-centered, technology-enabled education in Renton, WA — home of the Genesis AI Project, Washington's first Cognia STEM–certified K–12, and a Microsoft Showcase School.",
  openGraph: {
    title: "Renton Prep | A Premier Microsoft Showcase School",
    description:
      "Christ-centered, technology-enabled education in Renton, WA — home of the Genesis AI Project, Washington's first Cognia STEM–certified K–12, and a Microsoft Showcase School.",
    url: "/",
    type: "website",
  },
};

export default function Page() {
  return (
    <div className="marketing-root">
      <SiteHeader />
      <main id="main-content">
        <MarketingHome />
      </main>
      <SiteFooter />
    </div>
  );
}
