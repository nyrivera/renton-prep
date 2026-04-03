import type { Metadata } from "next";

import { TbdPage } from "@/components/marketing/TbdPage";

export const metadata: Metadata = {
  title: "Awards & Recognition",
  description: "Awards and recognitions for Renton Prep Christian School.",
  robots: { index: false, follow: false },
};

export default function AwardsPage() {
  return (
    <div className="marketing-root">
      <TbdPage title="Awards & recognition" />
    </div>
  );
}
