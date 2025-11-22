import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Target, Eye, Award } from "lucide-react";
import doctorsData from "@/data/doctors.json";
import DoctorCard from "@/components/DoctorCard";

const About = () => {
  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About ClinicPro</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Providing exceptional healthcare services with a commitment to excellence, compassion, and innovation
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <Card className="animate-fade-in">
            <CardHeader>
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Target className="h-6 w-6 text-primary" />
              </div>
              <CardTitle>Our Mission</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                To deliver comprehensive, patient-centered healthcare that improves lives and promotes wellness in our community.
              </p>
            </CardContent>
          </Card>

          <Card className="animate-fade-in" style={{ animationDelay: "0.1s" }}>
            <CardHeader>
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Eye className="h-6 w-6 text-primary" />
              </div>
              <CardTitle>Our Vision</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                To be the most trusted healthcare provider, known for clinical excellence, innovation, and compassionate care.
              </p>
            </CardContent>
          </Card>

          <Card className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <CardHeader>
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Award className="h-6 w-6 text-primary" />
              </div>
              <CardTitle>Our Values</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Excellence, integrity, compassion, and respect guide every decision we make and every interaction we have.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Story Section */}
        <section className="mb-16 animate-fade-in">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Our Story</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p>
                Founded in 2010, ClinicPro was established with a vision to provide accessible, high-quality healthcare to our community. 
                What started as a small clinic with a handful of dedicated physicians has grown into a comprehensive healthcare facility 
                serving thousands of patients annually.
              </p>
              <p>
                Over the years, we've invested in state-of-the-art medical technology, expanded our team of specialists, and continuously 
                improved our facilities to ensure the best possible care for our patients. Our commitment to excellence has earned us 
                recognition as one of the leading healthcare providers in the region.
              </p>
              <p>
                Today, ClinicPro stands as a beacon of hope and healing, offering a wide range of medical services under one roof. 
                Our multidisciplinary approach ensures that every patient receives comprehensive, coordinated care tailored to their 
                unique needs.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Facilities Section */}
        <section className="mb-16 animate-fade-in">
          <h2 className="text-3xl font-bold mb-8 text-center">Our Facilities</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Modern Infrastructure</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Our clinic features modern, well-equipped examination rooms, advanced diagnostic facilities, and comfortable 
                  waiting areas designed with patient comfort in mind.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Advanced Equipment</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We utilize the latest medical technology and equipment to ensure accurate diagnoses and effective treatments, 
                  from digital X-rays to advanced laboratory systems.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Clean & Safe Environment</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We maintain the highest standards of cleanliness and follow strict safety protocols to ensure a safe environment 
                  for all our patients and staff.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Patient-Friendly Space</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Our facilities are designed to be accessible and welcoming, with ample parking, wheelchair accessibility, 
                  and a calming atmosphere throughout.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Team Section */}
        <section className="animate-fade-in">
          <h2 className="text-3xl font-bold mb-4 text-center">Meet Our Team</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Our team of experienced doctors and healthcare professionals is dedicated to providing you with the best possible care
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {doctorsData.map((doctor, index) => (
              <div key={doctor.id} style={{ animationDelay: `${index * 0.1}s` }}>
                <DoctorCard doctor={doctor} />
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
