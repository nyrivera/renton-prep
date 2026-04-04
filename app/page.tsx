import type { Metadata } from "next";

import { MarketingHome } from "@/components/marketing/MarketingHome";
import { MarketingShell } from "@/components/marketing/MarketingShell";

export const metadata: Metadata = {
  title: {
    absolute: "Renton Prep | A Premier Microsoft Showcase School",
  },
  description:
    "A Christ-centered, accredited K–12 school in Renton, WA. Washington's first Cognia STEM-certified K–12, a Microsoft Showcase School, and home of the Genesis Project.",
  openGraph: {
    title: "Renton Prep | A Premier Microsoft Showcase School",
    description:
      "A Christ-centered, accredited K–12 school in Renton, WA. Washington's first Cognia STEM-certified K–12, a Microsoft Showcase School, and home of the Genesis Project.",
    url: "/",
    type: "website",
  },
};

export default function Page() {
  return (
    <div className="marketing-root">
      <MarketingShell>
        <MarketingHome />
      </MarketingShell>
    </div>
  );
}
