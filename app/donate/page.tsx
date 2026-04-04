import type { Metadata } from "next";

import { DonatePageContent } from "@/components/marketing/DonatePageContent";

export const metadata: Metadata = {
  title: "Donate",
  description:
    "Contact Renton Prep Christian School to learn about supporting the school.",
  openGraph: {
    title: "Donate | Renton Prep",
    description:
      "Contact the school to learn about supporting Renton Prep Christian School.",
  },
};

export default function DonatePage() {
  return (
    <div className="marketing-root">
      <DonatePageContent />
    </div>
  );
}
