import { permanentRedirect } from "next/navigation";

/** No dedicated student-stories page yet — send visitors to our story. */
export default function StudentStoriesRedirect() {
  permanentRedirect("/about");
}
