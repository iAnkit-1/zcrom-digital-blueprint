import { Button } from "@/components/ui/button";
import { Briefcase, MapPin, Clock } from "lucide-react";

const Career = () => {
  const openings = [
    {
      title: "Senior React Developer",
      type: "Full-time",
      location: "Varanasi / Remote",
      experience: "3-5 years",
    },
    {
      title: "UI/UX Designer",
      type: "Full-time",
      location: "Varanasi / Remote",
      experience: "2-4 years",
    },
    {
      title: "Node.js Backend Developer",
      type: "Full-time",
      location: "Varanasi / Remote",
      experience: "2-5 years",
    },
    {
      title: "Digital Marketing Specialist",
      type: "Full-time",
      location: "Varanasi / Remote",
      experience: "1-3 years",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">
            Join <span className="gradient-text">Our Team</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Be part of something amazing. Work with cutting-edge technologies and talented professionals
          </p>
        </div>
      </section>

      {/* Why Join */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12">
            Why Join <span className="gradient-text">ZCROM?</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center p-6">
              <div className="w-16 h-16 mx-auto mb-4 rounded-lg gradient-primary flex items-center justify-center text-white text-2xl font-bold">
                💡
              </div>
              <h3 className="text-xl font-bold mb-2">Innovation</h3>
              <p className="text-muted-foreground">Work on exciting projects using latest technologies</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 mx-auto mb-4 rounded-lg gradient-primary flex items-center justify-center text-white text-2xl font-bold">
                🚀
              </div>
              <h3 className="text-xl font-bold mb-2">Growth</h3>
              <p className="text-muted-foreground">Continuous learning and career advancement opportunities</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 mx-auto mb-4 rounded-lg gradient-primary flex items-center justify-center text-white text-2xl font-bold">
                🤝
              </div>
              <h3 className="text-xl font-bold mb-2">Culture</h3>
              <p className="text-muted-foreground">Collaborative environment with talented professionals</p>
            </div>
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12">
            Open <span className="gradient-text">Positions</span>
          </h2>
          <div className="max-w-4xl mx-auto space-y-4">
            {openings.map((job, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-xl p-6 shadow-sm hover:shadow-lg transition-smooth flex flex-col md:flex-row md:items-center md:justify-between gap-4"
              >
                <div>
                  <h3 className="text-xl font-bold mb-2">{job.title}</h3>
                  <div className="flex flex-wrap gap-3 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Briefcase className="w-4 h-4" />
                      {job.type}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {job.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {job.experience}
                    </span>
                  </div>
                </div>
                <Button className="gradient-primary text-white font-semibold">
                  Apply Now
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Career;
