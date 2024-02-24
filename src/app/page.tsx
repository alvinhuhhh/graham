import { Muted, Title } from "@/components/ui/typography";
import SearchComponent from "@/app/ui/search";

export default function Home() {
  return (
    <main className="flex flex-col justify-center items-center h-screen gap-12">
      <div className="flex flex-col justify-center items-center">
        <Title>Graham</Title>
        <Muted>Personal investment butler</Muted>
        <div className="w-full mt-8">
          <SearchComponent />
        </div>
      </div>
    </main>
  );
}
