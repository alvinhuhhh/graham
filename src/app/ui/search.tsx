"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function SearchComponent() {
  return (
    <main className="flex flex-row gap-4">
      <Input placeholder="Enter ticker symbol" />
      <Button>Search</Button>
    </main>
  );
}
