import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface ServiceCardProps {
  service: {
    id: number;
    name: string;
    priceRange: string;
    description: string;
  };
}

const ServiceCard = ({ service }: ServiceCardProps) => {
  return (
    <Card className="hover:shadow-lg transition-shadow animate-fade-in h-full">
      <CardHeader>
        <div className="flex items-start justify-between gap-2">
          <CardTitle className="text-xl">{service.name}</CardTitle>
          <Badge variant="secondary" className="shrink-0">{service.priceRange}</Badge>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground">{service.description}</p>
      </CardContent>
    </Card>
  );
};

export default ServiceCard;
