import { Skeleton } from "@/components/ui/Skeleton";

export default function DashboardLoading() {
  return (
    <div className="p-4 sm:p-6">
      <Skeleton className="mb-4 h-8 w-48" label="Loading dashboard" />
      <Skeleton className="h-4 w-full max-w-md" />
      <Skeleton className="mt-2 h-4 w-full max-w-sm" />
    </div>
  );
}
