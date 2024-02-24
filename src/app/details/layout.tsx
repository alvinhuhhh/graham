import { H2 } from "@/components/ui/typography";
import SearchComponent from "../ui/search";
import { Separator } from "@/components/ui/separator";

export default function DetailsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main>
      <div className="flex flex-row justify-between p-2">
        <H2>Graham</H2>
        <SearchComponent placeholder="Enter another ticker symbol" />
      </div>

      <Separator />

      <div className="flex flex-col justify-center items-center pb-8">
        {children}
      </div>
    </main>
  );
}
