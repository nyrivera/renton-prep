import type { Metadata } from "next";

import { TbdPage } from "@/components/marketing/TbdPage";

export const metadata: Metadata = {
  title: "Careers | Renton Prep",
  description: "Career opportunities at Renton Prep Christian School.",
};

export default function CareersPage() {
  return (
    <div className="marketing-root">
      <TbdPage title="Careers" />
    </div>
  );
}
