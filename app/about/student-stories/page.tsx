import type { Metadata } from "next";

import { TbdPage } from "@/components/marketing/TbdPage";

export const metadata: Metadata = {
  title: "Student Stories",
  description: "Student stories from Renton Prep Christian School.",
  robots: { index: false, follow: false },
};

export default function StudentStoriesPage() {
  return (
    <div className="marketing-root">
      <TbdPage title="Student stories" />
    </div>
  );
}
