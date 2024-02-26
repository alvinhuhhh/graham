import { Suspense } from "react";
import DetailsSkeleton from "./details-skeleton";
import { Metadata } from "next";
import DetailsComponent from "./details";

export function generateMetadata({
  params,
}: {
  params: { ticker: string };
}): Metadata {
  const ticker = params.ticker.toUpperCase();

  return {
    title: `${ticker} Stock Details`,
  };
}

export default async function DetailsPage({
  params,
}: {
  params: { ticker: string };
}) {
  const ticker = params.ticker;

  return (
    <Suspense fallback={<DetailsSkeleton />}>
      <DetailsComponent ticker={ticker} />
    </Suspense>
  );
}
