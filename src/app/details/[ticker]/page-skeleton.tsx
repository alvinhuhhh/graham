import CriteriaSkeleton from "@/app/ui/criteria-skeleton";
import { Skeleton } from "@/components/ui/skeleton";

export default function DetailsSkeleton() {
  return (
    <main className="flex flex-col gap-2 max-w-screen-sm">
      <div className="flex flex-col px-8 py-4">
        <div className="flex flex-row justify-between gap-1">
          <Skeleton className="h-10 lg:h-12 w-32 lg:w-36" />
          <Skeleton className="h-8 w-24" />
        </div>
        <div>
          <Skeleton className="h-3.5 w-36" />
        </div>
      </div>

      <div className="flex flex-col gap-2 px-8">
        <Skeleton className="h-4 w-32" />
        <CriteriaSkeleton />
        <CriteriaSkeleton />
        <CriteriaSkeleton />
        <CriteriaSkeleton />
        <CriteriaSkeleton />
      </div>
    </main>
  );
}
