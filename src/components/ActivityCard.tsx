import { Button } from "./ui/button";
import { Card, CardDescription, CardHeader } from "./ui/card";

interface CauseCardProps {
  Icon: React.ElementType;
  title: string;
  description: string;
}

export default function ActivityCard({
  Icon,
  title,
  description,
}: CauseCardProps) {
  return (
    <Card className="p-8 md:w-[400px] mx-auto">
      <CardHeader>
        <div className="mx-auto">
          <Icon size={140} strokeWidth={2} color="orange" />
        </div>
        <h1 className="text-center text-2xl font-semibold">{title}</h1>
      </CardHeader>
      <CardDescription className="text-center">{description}</CardDescription>
      <Button className="w-1/2 mx-auto bg-orange-500">Learn More</Button>
    </Card>
  );
}
