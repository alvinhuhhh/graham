import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export default function CriteriaSkeleton() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>
          <Skeleton className="h-8 w-32" />
        </CardTitle>
        <CardDescription>
          <Skeleton className="h-3.5 w-72" />
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Skeleton className="h-4 w-48" />
      </CardContent>
    </Card>
  );
}
