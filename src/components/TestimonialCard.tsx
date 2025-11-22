import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

interface TestimonialCardProps {
  testimonial: {
    id: number;
    name: string;
    message: string;
    rating: number;
  };
}

const TestimonialCard = ({ testimonial }: TestimonialCardProps) => {
  return (
    <Card className="animate-fade-in">
      <CardContent className="p-6">
        <div className="flex gap-1 mb-4">
          {[...Array(testimonial.rating)].map((_, i) => (
            <Star key={i} className="h-4 w-4 fill-primary text-primary" />
          ))}
        </div>
        <p className="text-muted-foreground mb-4 italic">"{testimonial.message}"</p>
        <p className="font-semibold text-foreground">— {testimonial.name}</p>
      </CardContent>
    </Card>
  );
};

export default TestimonialCard;
