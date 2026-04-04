import { permanentRedirect } from "next/navigation";

/** Legacy /events — calendar and hours are handled directly with the school. */
export default function EventsRedirectPage() {
  permanentRedirect("/request-information");
}
