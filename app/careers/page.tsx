import type { Metadata } from "next";

import { TbdPage } from "@/components/marketing/TbdPage";

export const metadata: Metadata = {
  title: "Careers",
  description: "Career opportunities at Renton Prep Christian School.",
  robots: { index: false, follow: false },
};

export default function CareersPage() {
  return (
    <div className="marketing-root">
      <TbdPage title="Careers" />
    </div>
  );
}
