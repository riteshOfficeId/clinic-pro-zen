import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Calendar, Stethoscope } from "lucide-react";

interface DoctorCardProps {
  doctor: {
    id: number;
    name: string;
    specialization: string;
    experience: string;
    availability: string;
    image: string;
  };
}

const DoctorCard = ({ doctor }: DoctorCardProps) => {
  const initials = doctor.name
    .split(" ")
    .map((n) => n[0])
    .join("");

  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow animate-fade-in">
      <CardContent className="p-6">
        <div className="flex flex-col items-center text-center gap-4">
          <Avatar className="h-24 w-24">
            <AvatarImage src={doctor.image} alt={doctor.name} />
            <AvatarFallback className="bg-primary text-primary-foreground text-2xl">
              {initials}
            </AvatarFallback>
          </Avatar>
          
          <div className="space-y-2">
            <h3 className="text-xl font-semibold">{doctor.name}</h3>
            
            <div className="flex items-center justify-center gap-2 text-muted-foreground">
              <Stethoscope className="h-4 w-4" />
              <span className="text-sm">{doctor.specialization}</span>
            </div>
            
            <p className="text-sm text-muted-foreground">
              Experience: {doctor.experience}
            </p>
            
            <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
              <Calendar className="h-4 w-4" />
              <span>{doctor.availability}</span>
            </div>
          </div>
        </div>
      </CardContent>
      
      <CardFooter className="p-6 pt-0">
        <Link to="/appointment" className="w-full">
          <Button className="w-full">Book Appointment</Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default DoctorCard;
