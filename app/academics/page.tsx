import type { Metadata } from "next";

import { AcademicsHubContent } from "@/components/marketing/AcademicsHubContent";

export const metadata: Metadata = {
  title: "Academics | Renton Prep",
  description:
    "Academic programs, technology, elementary, and supply lists — Renton Prep Christian School.",
};

export default function AcademicsPage() {
  return (
    <div className="marketing-root">
      <AcademicsHubContent />
    </div>
  );
}
