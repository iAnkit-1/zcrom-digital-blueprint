import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const ProjectsSection = () => {
  const navigate = useNavigate();

  const projects = [
    {
      title: "E-commerce Platform for Indian Retailer",
      description:
        "Built a scalable online shopping platform with payment integration and inventory management.",
      category: "Web Development",
      image:
        "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=800&q=80", // E-commerce
    },
    {
      title: "AI-Based Automation for Logistics Startup",
      description:
        "Developed intelligent route optimization and automated dispatch system.",
      category: "AI & Automation",
      image:
        "https://images.unsplash.com/photo-1581090700227-1e37b190418e?auto=format&fit=crop&w=800&q=80", // AI automation
    },
    {
      title: "EdTech Web App for College Students",
      description:
        "Created an interactive learning platform with video courses and real-time collaboration.",
      category: "Education",
      image:
        "https://images.unsplash.com/photo-1596495577886-d920f1fb7238?auto=format&fit=crop&w=800&q=80", // EdTech
    },
    {
      title: "Healthcare Management System",
      description:
        "Comprehensive patient management and appointment scheduling solution.",
      category: "Healthcare",
      image:
        "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=800&q=80", // Healthcare
    },
    {
      title: "Real Estate Mobile App",
      description:
        "Property listing and virtual tour application for iOS and Android.",
      category: "Real Estate",
      image:
        "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=800&q=80", // Real Estate
    },
    {
      title: "Restaurant Ordering System",
      description:
        "Online ordering platform with QR code menu and payment processing.",
      category: "Food & Beverage",
      image:
        "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80", // Restaurant
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Heading */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-5xl md:text-6xl font-extrabold mb-8 tracking-tight">
            Projects{" "}
            <span className="gradient-text relative inline-block">
              People Loved
              <svg
                className="absolute -bottom-3 left-0 w-full h-3"
                viewBox="0 0 200 12"
                preserveAspectRatio="none"
              >
                <path
                  d="M0,10 Q100,0 200,10"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  className="text-primary/40"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Transforming ideas into successful digital products
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              {/* Project Image */}
              <div className="h-48 relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="inline-block px-3 py-1 bg-white/90 text-primary text-xs font-semibold rounded-full shadow-sm">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-900 group-hover:text-primary transition-all duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-600 text-sm">{project.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Call-to-action Button */}
        <div className="text-center">
          <Button
            onClick={() => navigate("/portfolio")}
            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold px-6 py-3 rounded-full shadow-md hover:shadow-lg transition-all duration-300 group"
          >
            View Our Work
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
