import type { Metadata } from "next";

import { CareersPageContent } from "@/components/marketing/CareersPageContent";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Career inquiries at Renton Prep Christian School — master–apprentice learning alongside students.",
  openGraph: {
    title: "Careers | Renton Prep",
    description:
      "We welcome inquiries from educators and contributors who share our mission.",
  },
};

export default function CareersPage() {
  return (
    <div className="marketing-root">
      <CareersPageContent />
    </div>
  );
}
