import { jsonError } from "@/lib/api-response";

/**
 * Lead capture is not implemented yet (no persistence or email integration).
 * Returns 501 so clients are not misled by a fake success response.
 */
export async function POST() {
  return jsonError("Lead capture is not implemented yet.", 501, {
    code: "NOT_IMPLEMENTED",
  });
}
