"use client";

import { useEffect } from "react";

import { Button } from "@/components/ui/Button";

export default function DashboardError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("[dashboard]", error);
  }, [error]);

  return (
    <div className="mx-auto max-w-lg p-6 text-center">
      <h2 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">
        Dashboard unavailable
      </h2>
      <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
        {error.message || "We could not load this page."}
      </p>
      <Button type="button" className="mt-6" onClick={reset}>
        Try again
      </Button>
    </div>
  );
}
