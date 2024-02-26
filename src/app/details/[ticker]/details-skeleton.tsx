import CriteriaSkeleton from "@/app/ui/criteria-skeleton";
import { Skeleton } from "@/components/ui/skeleton";
import { H4 } from "@/components/ui/typography";

export default function DetailsSkeleton() {
  return (
    <main className="flex flex-col gap-2 w-[640px]">
      <div className="flex flex-col px-8 py-4 w-full">
        <div className="flex flex-row justify-between w-full">
          <Skeleton className="h-12 w-36 mb-2" />
          <Skeleton className="h-10 w-40" />
        </div>
        <div>
          <Skeleton className="h-4 w-36" />
        </div>
      </div>

      <div className="flex flex-col gap-2 px-8">
        <H4>Summary</H4>
        <CriteriaSkeleton />
        <CriteriaSkeleton />
        <CriteriaSkeleton />
        <CriteriaSkeleton />
        <CriteriaSkeleton />
      </div>
    </main>
  );
}
