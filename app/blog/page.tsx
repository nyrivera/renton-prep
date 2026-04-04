import { permanentRedirect } from "next/navigation";

import { site } from "@/lib/site";

/** Legacy /blog — school updates are published on Instagram. */
export default function BlogRedirect() {
  permanentRedirect(site.urls.blog);
}
