import { Button } from "@/components/ui/button";

const Portfolio = () => {
  const projects = [
    {
      title: "E-commerce Platform for Indian Retailer",
      category: "Web Development",
      tech: "React, Node.js, MongoDB",
      description: "Built a scalable online shopping platform with payment integration and inventory management system",
    },
    {
      title: "AI-Based Automation for Logistics Startup",
      category: "AI & Automation",
      tech: "Python, TensorFlow, AWS",
      description: "Developed intelligent route optimization and automated dispatch system using machine learning",
    },
    {
      title: "EdTech Web App for College Students",
      category: "Education",
      tech: "React, Firebase, Stripe",
      description: "Created an interactive learning platform with video courses and real-time collaboration features",
    },
    {
      title: "Healthcare Management System",
      category: "Healthcare",
      tech: "Angular, .NET, SQL Server",
      description: "Comprehensive patient management and appointment scheduling solution with telemedicine support",
    },
    {
      title: "Real Estate Mobile App",
      category: "Real Estate",
      tech: "React Native, Node.js, PostgreSQL",
      description: "Property listing and virtual tour application for iOS and Android with AR capabilities",
    },
    {
      title: "Restaurant Ordering System",
      category: "Food & Beverage",
      tech: "Next.js, Stripe, Twilio",
      description: "Online ordering platform with QR code menu, payment processing, and SMS notifications",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">
            Our <span className="gradient-text">Portfolio</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore our successful projects and see how we've helped businesses transform digitally
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group bg-card border border-border rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-smooth hover:-translate-y-1"
              >
                <div className="h-48 bg-gradient-primary relative">
                  <div className="absolute inset-0 bg-black/20"></div>
                  <div className="absolute bottom-4 left-4">
                    <span className="inline-block px-3 py-1 bg-white/90 text-primary text-xs font-semibold rounded-full">
                      {project.category}
                    </span>
                  </div>
                </div>
                <div className="p-6 space-y-3">
                  <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-smooth">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">{project.description}</p>
                  <p className="text-xs text-muted-foreground font-mono">
                    <span className="font-semibold">Tech:</span> {project.tech}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button className="gradient-primary text-white font-semibold shadow-glow">
              Load More Projects
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
