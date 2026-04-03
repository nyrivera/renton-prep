import type { Metadata } from "next";

import { AcademicsHubContent } from "@/components/marketing/AcademicsHubContent";

export const metadata: Metadata = {
  title: "Academics",
  description:
    "Academic programs, technology, elementary, and supply lists — Renton Prep Christian School.",
  openGraph: {
    title: "Academics | Renton Prep",
    description:
      "Academic programs, technology, elementary, and supply lists — Renton Prep Christian School.",
    url: "/academics",
    type: "website",
  },
};

export default function AcademicsPage() {
  return (
    <div className="marketing-root">
      <AcademicsHubContent />
    </div>
  );
}
