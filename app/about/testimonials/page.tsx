import { permanentRedirect } from "next/navigation";

/** Family voices live on the home page — keep /about/testimonials for bookmarks. */
export default function TestimonialsRedirect() {
  permanentRedirect("/#testimonials");
}
