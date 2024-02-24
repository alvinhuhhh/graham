"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { navigate } from "@/lib/actions";
import { Search } from "lucide-react";

export default function SearchComponent({
  placeholder,
}: {
  placeholder: string;
}) {
  // TODO: add input validation
  return (
    <form className="flex flex-row gap-4" action={navigate}>
      <Input name="ticker" type="text" placeholder={placeholder} />
      <Button size="icon">
        <Search />
      </Button>
    </form>
  );
}
