import doctorsData from "@/data/doctors.json";
import DoctorCard from "@/components/DoctorCard";

const Doctors = () => {
  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Doctors</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Meet our team of experienced and dedicated healthcare professionals
          </p>
        </div>

        {/* Doctors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {doctorsData.map((doctor, index) => (
            <div key={doctor.id} style={{ animationDelay: `${index * 0.1}s` }}>
              <DoctorCard doctor={doctor} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Doctors;
