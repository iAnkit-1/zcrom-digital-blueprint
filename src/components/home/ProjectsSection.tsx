import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const ProjectsSection = () => {
  const navigate = useNavigate();

  const projects = [
    {
      title: "E-commerce Platform for Indian Retailer",
      description: "Built a scalable online shopping platform with payment integration and inventory management",
      category: "Web Development",
    },
    {
      title: "AI-Based Automation for Logistics Startup",
      description: "Developed intelligent route optimization and automated dispatch system",
      category: "AI & Automation",
    },
    {
      title: "EdTech Web App for College Students",
      description: "Created an interactive learning platform with video courses and real-time collaboration",
      category: "Education",
    },
    {
      title: "Healthcare Management System",
      description: "Comprehensive patient management and appointment scheduling solution",
      category: "Healthcare",
    },
    {
      title: "Real Estate Mobile App",
      description: "Property listing and virtual tour application for iOS and Android",
      category: "Real Estate",
    },
    {
      title: "Restaurant Ordering System",
      description: "Online ordering platform with QR code menu and payment processing",
      category: "Food & Beverage",
    },
  ];

  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl lg:text-5xl font-bold">
            Projects That People <span className="gradient-text">Loved</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Transforming ideas into successful digital products
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-card border border-border rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-smooth hover:-translate-y-1"
            >
              <div className="h-48 bg-gradient-primary relative overflow-hidden">
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="inline-block px-3 py-1 bg-white/90 text-primary text-xs font-semibold rounded-full">
                    {project.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-foreground group-hover:text-primary transition-smooth">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm">{project.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button
            onClick={() => navigate("/portfolio")}
            className="gradient-primary text-white font-semibold shadow-glow hover:shadow-lg transition-smooth group"
          >
            View Our Work
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-smooth" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
