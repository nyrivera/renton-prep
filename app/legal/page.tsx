import type { Metadata } from "next";

import { LegalPageContent } from "@/components/marketing/LegalPageContent";

export const metadata: Metadata = {
  title: "Legal & Privacy",
  description:
    "Contact Renton Prep Christian School for privacy and legal questions.",
  openGraph: {
    title: "Legal & Privacy | Renton Prep",
    description:
      "How to reach Renton Prep for privacy, website, and records questions.",
  },
};

export default function LegalPage() {
  return (
    <div className="marketing-root">
      <LegalPageContent />
    </div>
  );
}
