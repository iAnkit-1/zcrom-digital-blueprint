import { Button } from "@/components/ui/button";
import { Cpu, Database, GitBranch, Layers, MessageCircle } from "lucide-react";

const CustomSoftware = () => {
  const features = [
    { icon: Cpu, title: "Tailored Solutions", description: "Built for your unique needs" },
    { icon: Database, title: "Scalable Architecture", description: "Grows with your business" },
    { icon: GitBranch, title: "Agile Development", description: "Flexible and iterative" },
    { icon: Layers, title: "Full-Stack Expertise", description: "End-to-end development" },
  ];

  const phoneNumber = "919696726607";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent("Hi! I'm interested in Custom Software Development.")}`;

  return (
    <div className="min-h-screen">
      <section className="py-20 bg-gradient-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">Custom Software Development</h1>
          <p className="text-lg text-white/90 max-w-2xl mx-auto mb-8">
            Enterprise-grade custom software solutions tailored to your business requirements
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button className="bg-white text-primary hover:bg-white/90 font-semibold">Book Free Session</Button>
            <Button onClick={() => window.open(whatsappUrl, "_blank")} className="bg-green-500 hover:bg-green-600 text-white">
              <MessageCircle className="w-4 h-4 mr-2" />Chat on WhatsApp
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-8">
            Service <span className="gradient-text">Overview</span>
          </h2>
          <p className="text-lg text-muted-foreground text-center leading-relaxed">
            We build custom software solutions that solve complex business challenges. From CRM systems to ERP platforms, we deliver robust applications that streamline your operations.
          </p>
        </div>
      </section>

      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12">
            Key <span className="gradient-text">Features</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="bg-card border border-border rounded-xl p-6 text-center shadow-sm hover:shadow-lg transition-smooth">
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

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-8">
            Tech <span className="gradient-text">Stack</span>
          </h2>
          <div className="flex flex-wrap gap-3 justify-center">
            {["Python", "Java", "C#", ".NET", "Node.js", "PostgreSQL", "MongoDB", "Docker", "Kubernetes", "AWS"].map((tech, index) => (
              <span key={index} className="px-4 py-2 bg-card border border-border rounded-full text-sm font-semibold shadow-sm">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default CustomSoftware;
