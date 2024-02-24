"use client";

import CriteriaCard from "@/app/ui/criteria";
import SearchComponent from "@/app/ui/search";
import { Skeleton } from "@/components/ui/skeleton";
import { H2, H3, Title } from "@/components/ui/typography";
import { CriteriaData, CriteriaResponse } from "@/lib/definitions";
import axios from "axios";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function DetailsPage() {
  const [ticker, setTicker] = useState("");
  const [price, setPrice] = useState("");
  const [data, setData] = useState([] as CriteriaData[]);

  const params = useParams();

  const url = `https://graham-api.fly.dev/api/criteria?ticker=${params.ticker}`;

  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        let data: CriteriaResponse = response.data;

        setTicker(data.ticker);
        setPrice(data.price.toString());
        setData(data.criteria);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <main className="flex flex-col gap-2">
      <div className="flex flex-row">
        <Title>{ticker}</Title>
        <H3>${price}</H3>
      </div>

      <div className="flex flex-col gap-2">
        {data.map((d) => (
          <CriteriaCard key={d.order} data={d} />
        ))}
      </div>
    </main>
  );
}
