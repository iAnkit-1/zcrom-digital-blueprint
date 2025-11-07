import { Network, Database, Layers, Shield, CheckCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const SystemDesign = () => {
  const benefits = [
    "Scalable Architecture Design",
    "High-Performance Systems",
    "Microservices Architecture",
    "Database Schema Design",
    "API Design & Integration",
    "Load Balancing & Caching",
    "Security & Compliance",
    "Disaster Recovery Planning",
  ];

  const expertise = [
    {
      icon: Network,
      title: "Distributed Systems",
      description: "Design resilient systems that scale horizontally across multiple servers",
    },
    {
      icon: Database,
      title: "Database Architecture",
      description: "Optimize data storage with SQL, NoSQL, and hybrid solutions",
    },
    {
      icon: Layers,
      title: "Microservices",
      description: "Break down monoliths into maintainable, independent services",
    },
    {
      icon: Shield,
      title: "Security Design",
      description: "Build secure systems with encryption, authentication, and compliance",
    },
  ];

  const projects = [
    {
      title: "E-commerce Platform Architecture",
      description: "Designed scalable system handling 100K+ concurrent users with 99.99% uptime",
      scale: "100K Users",
    },
    {
      title: "Real-Time Analytics System",
      description: "Built data pipeline processing 1M+ events per second for fintech startup",
      scale: "1M Events/sec",
    },
    {
      title: "Microservices Migration",
      description: "Transformed legacy monolith into 20+ microservices reducing downtime by 90%",
      scale: "90% Less Downtime",
    },
  ];

  const phoneNumber = "919696726607";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent("Hi! I'm interested in System Design & Architecture")}`;

  return (
    <div className="min-h-screen">
      {/* Hero Banner */}
      <section className="relative py-20 bg-gradient-primary overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center text-white">
            <Network className="w-16 h-16 mx-auto mb-6" />
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              System Design & Architecture
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Build scalable, high-performance systems designed to grow with your business
            </p>
            <div className="flex gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-white text-primary hover:bg-white/90"
                onClick={() => window.open(whatsappUrl, "_blank")}
              >
                Get Architecture Review
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-white hover:bg-white/10"
                onClick={() => window.location.href = "/contact"}
              >
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-center">
              Architecture for <span className="gradient-text">Scale</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Great software starts with great architecture. We design systems that handle millions of users, process massive data volumes, and remain resilient under any load. Whether you're building a new product or scaling an existing one, our system design expertise ensures your platform is built on a solid foundation.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              From distributed systems and microservices to database optimization and API design—we cover every aspect of modern software architecture. Our designs prioritize scalability, performance, security, and maintainability from day one.
            </p>
          </div>
        </div>
      </section>

      {/* Expertise Grid */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12">
            Our <span className="gradient-text">Expertise</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {expertise.map((item, index) => {
              const Icon = item.icon;
              return (
                <Card key={index} className="hover:shadow-lg transition-smooth">
                  <CardHeader>
                    <div className="w-14 h-14 rounded-lg gradient-primary flex items-center justify-center mb-4">
                      <Icon className="text-white" size={28} />
                    </div>
                    <CardTitle className="text-lg">{item.title}</CardTitle>
                    <CardDescription className="text-sm mt-2">
                      {item.description}
                    </CardDescription>
                  </CardHeader>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12">
            What You <span className="gradient-text">Get</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="flex items-center gap-3 bg-card border border-border rounded-lg p-4 shadow-sm hover:shadow-md transition-smooth"
              >
                <CheckCircle className="text-primary w-6 h-6 flex-shrink-0" />
                <span className="font-medium text-sm">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12">
            Architecture <span className="gradient-text">Success Stories</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {projects.map((project, index) => (
              <Card key={index} className="hover:shadow-lg transition-smooth">
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription className="text-sm mt-2">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="inline-block px-4 py-2 bg-gradient-primary text-white rounded-full text-sm font-semibold">
                    {project.scale}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center bg-gradient-primary rounded-2xl p-12 text-white">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Need Expert Architecture Guidance?
            </h2>
            <p className="text-lg text-white/90 mb-8">
              Let's design a system that scales from MVP to millions of users seamlessly.
            </p>
            <div className="flex gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-white text-primary hover:bg-white/90"
                onClick={() => window.open(whatsappUrl, "_blank")}
              >
                Chat on WhatsApp
                <ArrowRight className="ml-2" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-white hover:bg-white/10"
                onClick={() => window.location.href = "/contact"}
              >
                Book Consultation
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SystemDesign;
