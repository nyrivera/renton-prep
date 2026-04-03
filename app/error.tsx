"use client";

import { useEffect } from "react";

import { Button } from "@/components/ui/Button";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Always log — production visibility is essential for diagnosing issues.
    // Replace with a service like Sentry for structured error tracking.
    console.error("[error-boundary]", error);
  }, [error]);

  return (
    <div className="mx-auto flex min-h-[50vh] max-w-lg flex-col items-center justify-center gap-6 px-4 py-16 text-center">
      <h1 className="text-2xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
        Something went wrong
      </h1>
      <p className="text-sm text-zinc-600 dark:text-zinc-400">
        An unexpected error occurred. Please try again.
        {error.digest ? (
          <span className="mt-1 block text-xs text-zinc-400">
            Error ID: {error.digest}
          </span>
        ) : null}
      </p>
      <Button type="button" onClick={reset}>
        Try again
      </Button>
    </div>
  );
}
