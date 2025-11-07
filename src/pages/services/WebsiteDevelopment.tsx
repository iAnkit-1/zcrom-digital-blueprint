import { Button } from "@/components/ui/button";
import { Code, Smartphone, Zap, Shield, MessageCircle } from "lucide-react";

const WebsiteDevelopment = () => {
  const features = [
    {
      icon: Code,
      title: "Modern Frameworks",
      description: "React, Next.js, Vue.js, and more",
    },
    {
      icon: Smartphone,
      title: "Responsive Design",
      description: "Perfect on all devices",
    },
    {
      icon: Zap,
      title: "Fast Performance",
      description: "Optimized for speed",
    },
    {
      icon: Shield,
      title: "Secure & Reliable",
      description: "Enterprise-grade security",
    },
  ];

  const phoneNumber = "919696726607";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent("Hi! I'm interested in Website Development services.")}`;

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="py-20 bg-gradient-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">
            Website Development
          </h1>
          <p className="text-lg text-white/90 max-w-2xl mx-auto mb-8">
            Build stunning, high-performance websites that engage users and drive results
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button className="bg-white text-primary hover:bg-white/90 font-semibold">
              Book Free Session
            </Button>
            <Button
              onClick={() => window.open(whatsappUrl, "_blank")}
              className="bg-green-500 hover:bg-green-600 text-white"
            >
              <MessageCircle className="w-4 h-4 mr-2" />
              Chat on WhatsApp
            </Button>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-8">
            Service <span className="gradient-text">Overview</span>
          </h2>
          <p className="text-lg text-muted-foreground text-center leading-relaxed">
            Our website development services cover everything from simple landing pages to complex web applications. We use modern frameworks and best practices to ensure your website is fast, secure, and scalable.
          </p>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12">
            Key <span className="gradient-text">Features</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-xl p-6 text-center shadow-sm hover:shadow-lg transition-smooth"
              >
                <div className="w-14 h-14 mx-auto mb-4 rounded-lg gradient-primary flex items-center justify-center text-white">
                  <feature.icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-8">
            Tech <span className="gradient-text">Stack</span>
          </h2>
          <div className="flex flex-wrap gap-3 justify-center">
            {["React", "Next.js", "TypeScript", "Tailwind CSS", "Node.js", "MongoDB", "PostgreSQL", "AWS"].map((tech, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-card border border-border rounded-full text-sm font-semibold shadow-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Ready to Get <span className="gradient-text">Started?</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Let's discuss your website project and bring your vision to life
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button className="gradient-primary text-white font-semibold shadow-glow">
              Book Free Session
            </Button>
            <Button
              onClick={() => window.open(whatsappUrl, "_blank")}
              className="bg-green-500 hover:bg-green-600 text-white"
            >
              <MessageCircle className="w-4 h-4 mr-2" />
              Chat on WhatsApp
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WebsiteDevelopment;
