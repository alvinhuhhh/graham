import axios from "axios";
import { CriteriaResponse } from "./definitions";

export async function getCriteria(
  ticker: string
): Promise<CriteriaResponse | null> {
  const url = `https://graham-api.fly.dev/api/criteria?ticker=${ticker}`;

  try {
    const response = await axios.get(url);

    return response.data as CriteriaResponse;
  } catch (error) {
    console.error(error);
    return null;
  }
}
