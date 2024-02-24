"use server";

import { redirect } from "next/navigation";

export async function navigate(data: FormData) {
  redirect(`/details/${data.get("ticker")}`);
}