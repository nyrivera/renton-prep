import { z } from "zod";

/** Validates any JSON-serializable value (API bodies for scoring, etc.). */
export const jsonValueSchema: z.ZodType<unknown> = z.lazy(() =>
  z.union([
    z.string(),
    z.number(),
    z.boolean(),
    z.null(),
    z.array(z.lazy(() => jsonValueSchema)),
    z.record(z.string(), z.lazy(() => jsonValueSchema)),
  ]),
);

