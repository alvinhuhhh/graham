import CriteriaCard from "@/app/ui/criteria";
import { H1, H3, H4, Muted } from "@/components/ui/typography";
import { getCriteria } from "@/lib/data";
import { CriteriaData, CriteriaResponse } from "@/lib/definitions";
import { Suspense } from "react";
import DetailsSkeleton from "./page-skeleton";

export default async function DetailsPage({
  params,
}: {
  params: { ticker: string };
}) {
  const response: CriteriaResponse | null = await getCriteria(params.ticker);

  let ticker = "";
  let price = "";
  let currency = "";
  let name = "";
  let data = [] as CriteriaData[];
  if (response) {
    ticker = response.ticker;
    price = response.price.toString();
    currency = response.currency;
    name = response.name;
    data = response.criteria;
  }

  return (
    <Suspense fallback={<DetailsSkeleton />}>
      <main className="flex flex-col gap-2 max-w-screen-sm">
        <div className="flex flex-col px-8 py-4">
          <div className="flex flex-row justify-between">
            <H1>{ticker}</H1>
            <H3>
              {currency} {price}
            </H3>
          </div>
          <div>
            <Muted>{name}</Muted>
          </div>
        </div>

        <div className="flex flex-col gap-2 px-8">
          <H4>Summary</H4>

          {data.map((d: CriteriaData) => (
            <CriteriaCard key={d.order} data={d} />
          ))}
        </div>
      </main>
    </Suspense>
  );
}
