import servicesData from "@/data/services.json";
import ServiceCard from "@/components/ServiceCard";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Services = () => {
  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive healthcare services tailored to meet your needs
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {servicesData.map((service, index) => (
            <div key={service.id} style={{ animationDelay: `${index * 0.1}s` }}>
              <ServiceCard service={service} />
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center animate-fade-in">
          <p className="text-lg text-muted-foreground mb-6">
            Ready to book an appointment for any of our services?
          </p>
          <Link to="/appointment">
            <Button size="lg">Book Appointment</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Services;
