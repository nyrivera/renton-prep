import type { Metadata } from "next";

import { EventsHubContent } from "@/components/marketing/EventsHubContent";

export const metadata: Metadata = {
  title: "Events & Calendar",
  description: "School hours and academic calendar | Renton Prep Christian School.",
};

export default function EventsPage() {
  return (
    <div className="marketing-root">
      <EventsHubContent />
    </div>
  );
}
