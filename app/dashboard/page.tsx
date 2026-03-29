import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard | Renton Prep",
};

/** Placeholder: internal tools are not exposed on the public site. */
export default function DashboardPage() {
  return (
    <main id="main-content" className="p-4 sm:p-6">
      <h1 className="text-xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
        Dashboard
      </h1>
      <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
        Internal tools are not available here yet. Use the public site for
        admissions and contact information.
      </p>
      <p className="mt-4">
        <Link
          href="/"
          className="text-sm font-semibold text-indigo-600 underline-offset-4 hover:underline dark:text-indigo-400"
        >
          Back to home
        </Link>
      </p>
    </main>
  );
}
