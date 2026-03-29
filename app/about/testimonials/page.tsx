import type { Metadata } from "next";

import { TbdPage } from "@/components/marketing/TbdPage";

export const metadata: Metadata = {
  title: "Testimonials | Renton Prep",
  description: "What families say about Renton Prep Christian School.",
};

export default function TestimonialsPage() {
  return (
    <div className="marketing-root">
      <TbdPage title="Testimonials" />
    </div>
  );
}
