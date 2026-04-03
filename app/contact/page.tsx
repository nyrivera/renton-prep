import { permanentRedirect } from "next/navigation";

/** /contact is now /request-information — keep old links working. */
export default function ContactRedirect() {
  permanentRedirect("/request-information");
}
