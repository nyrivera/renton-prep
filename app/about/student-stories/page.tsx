import type { Metadata } from "next";

import { TbdPage } from "@/components/marketing/TbdPage";

export const metadata: Metadata = {
  title: "Student Stories | Renton Prep",
  description: "Student stories from Renton Prep Christian School.",
};

export default function StudentStoriesPage() {
  return (
    <div className="marketing-root">
      <TbdPage title="Student stories" />
    </div>
  );
}
