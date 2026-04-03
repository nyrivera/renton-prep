import type { Metadata } from "next";

import { TbdPage } from "@/components/marketing/TbdPage";

export const metadata: Metadata = {
  title: "Testimonials",
  description: "What families say about Renton Prep Christian School.",
  robots: { index: false, follow: false },
};

export default function TestimonialsPage() {
  return (
    <div className="marketing-root">
      <TbdPage title="Testimonials" />
    </div>
  );
}
