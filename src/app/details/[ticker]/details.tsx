import CriteriaCard from "@/app/ui/criteria";
import { H1, H3, H4, Muted } from "@/components/ui/typography";
import { getCriteria } from "@/lib/data";
import { CriteriaData, CriteriaResponse } from "@/lib/definitions";

export default async function DetailsComponent({ ticker }: { ticker: string }) {
  const response: CriteriaResponse | null = await getCriteria(ticker);

  if (response) {
    return (
      <main className="flex flex-col gap-2 max-w-screen-sm">
        <div className="flex flex-col px-8 py-4">
          <div className="flex flex-row justify-between">
            <H1>{response.ticker}</H1>
            <H3>
              {response.currency} {response.price.toString()}
            </H3>
          </div>
          <div>
            <Muted>{response.name}</Muted>
          </div>
        </div>

        <div className="flex flex-col gap-2 px-8">
          <H4>Summary</H4>

          {response.criteria.map((d: CriteriaData) => (
            <CriteriaCard key={d.order} data={d} />
          ))}
        </div>
      </main>
    );
  }

  return (
    <main className="flex flex-col justify-center items-center p-8 max-w-screen-sm">
      <H3>Ticker not found!</H3>
      <Muted>Try another ticker symbol?</Muted>
    </main>
  );
}
