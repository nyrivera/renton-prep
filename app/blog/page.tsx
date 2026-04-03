import type { Metadata } from "next";

import { TbdPage } from "@/components/marketing/TbdPage";

const PLACEHOLDER =
  "This page is being updated. Please contact us directly for help.";

export const metadata: Metadata = {
  title: "Blog & News",
  description: PLACEHOLDER,
  robots: { index: false, follow: false },
  openGraph: {
    title: "Blog & News | Renton Prep",
    description: PLACEHOLDER,
  },
};

export default function BlogPage() {
  return (
    <div className="marketing-root">
      <TbdPage title="Blog & news" description={PLACEHOLDER} />
    </div>
  );
}
