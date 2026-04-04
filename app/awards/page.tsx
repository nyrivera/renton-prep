import type { Metadata } from "next";

import { AwardsPageContent } from "@/components/marketing/AwardsPageContent";

export const metadata: Metadata = {
  title: "Awards & Recognition",
  description:
    "How Renton Prep describes its accreditations, STEM certification, and Microsoft Showcase recognition.",
  openGraph: {
    title: "Awards & Recognition | Renton Prep",
    description:
      "Accreditations, Cognia STEM certification, and Microsoft Showcase School recognition.",
  },
};

export default function AwardsPage() {
  return (
    <div className="marketing-root">
      <AwardsPageContent />
    </div>
  );
}
