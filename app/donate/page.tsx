import type { Metadata } from "next";

import { TbdPage } from "@/components/marketing/TbdPage";

const PLACEHOLDER =
  "This page is being updated. Please contact us directly for help.";

export const metadata: Metadata = {
  title: "Donate",
  description: PLACEHOLDER,
  robots: { index: false, follow: false },
  openGraph: {
    title: "Donate | Renton Prep",
    description: PLACEHOLDER,
  },
};

export default function DonatePage() {
  return (
    <div className="marketing-root">
      <TbdPage title="Donate" description={PLACEHOLDER} />
    </div>
  );
}
