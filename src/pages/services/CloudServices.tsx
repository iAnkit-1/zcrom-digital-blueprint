import { Cloud, Server, Shield, Zap, CheckCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const CloudServices = () => {
  const benefits = [
    "99.9% Uptime Guarantee",
    "Auto-Scaling Infrastructure",
    "Advanced Security & Compliance",
    "24/7 Monitoring & Support",
    "Cost-Optimized Solutions",
    "Disaster Recovery Setup",
  ];

  const techStack = [
    { name: "AWS", icon: Cloud },
    { name: "Google Cloud", icon: Server },
    { name: "Azure", icon: Shield },
    { name: "Docker & Kubernetes", icon: Zap },
  ];

  const projects = [
    {
      title: "E-commerce Cloud Migration",
      description: "Migrated a high-traffic retail platform to AWS with 40% cost reduction",
      tech: "AWS, Docker, Kubernetes",
    },
    {
      title: "Healthcare SaaS Deployment",
      description: "HIPAA-compliant cloud infrastructure for medical data management",
      tech: "Azure, PostgreSQL, Redis",
    },
    {
      title: "Fintech Auto-Scaling Solution",
      description: "Built scalable payment processing system handling 10K+ transactions/min",
      tech: "GCP, Cloud Functions, Pub/Sub",
    },
  ];

  const phoneNumber = "919696726607";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent("Hi! I'm interested in Cloud Services & Deployment")}`;

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
            <Cloud className="w-16 h-16 mx-auto mb-6" />
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Cloud Services & Deployment
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Scalable, secure, and cost-effective cloud infrastructure for modern applications
            </p>
            <div className="flex gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-white text-primary hover:bg-white/90"
                onClick={() => window.open(whatsappUrl, "_blank")}
              >
                Get Free Consultation
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
              Enterprise-Grade <span className="gradient-text">Cloud Solutions</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Deploy, manage, and scale your applications with confidence. Our cloud services cover everything from initial architecture design to ongoing DevOps support. We specialize in AWS, Google Cloud, and Azure, ensuring your infrastructure is optimized for performance, security, and cost.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Whether you're migrating legacy systems or building cloud-native applications, we provide end-to-end solutions including CI/CD pipelines, containerization, serverless architecture, and multi-cloud strategies.
            </p>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12">
            Why Choose Our <span className="gradient-text">Cloud Services</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="flex items-center gap-3 bg-card border border-border rounded-lg p-4 shadow-sm hover:shadow-md transition-smooth"
              >
                <CheckCircle className="text-primary w-6 h-6 flex-shrink-0" />
                <span className="font-medium">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12">
            Technologies We <span className="gradient-text">Master</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {techStack.map((tech, index) => {
              const Icon = tech.icon;
              return (
                <Card key={index} className="text-center hover:shadow-lg transition-smooth">
                  <CardHeader>
                    <div className="w-16 h-16 mx-auto rounded-lg gradient-primary flex items-center justify-center mb-4">
                      <Icon className="text-white" size={32} />
                    </div>
                    <CardTitle className="text-lg">{tech.name}</CardTitle>
                  </CardHeader>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12">
            Success <span className="gradient-text">Stories</span>
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
                  <div className="text-xs text-muted-foreground">
                    <strong>Tech:</strong> {project.tech}
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
              Ready to Scale Your Infrastructure?
            </h2>
            <p className="text-lg text-white/90 mb-8">
              Let's discuss your cloud requirements and build a solution that grows with your business.
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
                Schedule a Call
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CloudServices;
