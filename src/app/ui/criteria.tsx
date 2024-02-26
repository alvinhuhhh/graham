import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CriteriaData } from "@/lib/definitions";

export default function CriteriaCard({ data }: { data: CriteriaData }) {
  const style = data.met
    ? {
        border: "border-green-800 bg-green-800/25",
        title: "text-green-600",
        description: "text-green-700",
        value: "text-green-600",
      }
    : {
        border: "border-red-800 bg-red-800/25",
        title: "text-red-600",
        description: "text-red-700",
        value: "text-red-600",
      };

  return (
    <Card className={style.border}>
      <CardHeader>
        <CardTitle className={style.title}>Criteria {data.order}</CardTitle>
        <CardDescription className={style.description}>
          {data.description}
        </CardDescription>
      </CardHeader>
      <CardContent className={style.value}>
        {data.valueLabel}: {data.value}
      </CardContent>
    </Card>
  );
}
