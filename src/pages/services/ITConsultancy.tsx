import { Button } from "@/components/ui/button";
import { Lightbulb, TrendingUp, Shield, MessageCircle } from "lucide-react";

const ITConsultancy = () => {
  const services = [
    { icon: Lightbulb, title: "Strategic Planning", description: "Technology roadmap & strategy" },
    { icon: TrendingUp, title: "Digital Transformation", description: "Modernize your business" },
    { icon: Shield, title: "Security Consulting", description: "Protect your assets" },
  ];

  const phoneNumber = "919696726607";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent("Hi! I'm interested in IT Consultancy services.")}`;

  return (
    <div className="min-h-screen">
      <section className="py-20 bg-gradient-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">IT Consultancy</h1>
          <p className="text-lg text-white/90 max-w-2xl mx-auto mb-8">
            Expert guidance to navigate your digital transformation journey
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
            Our experienced consultants help you make informed technology decisions. From cloud migration to security audits, we provide expert guidance to ensure your IT infrastructure supports your business goals.
          </p>
        </div>
      </section>

      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12">
            Our <span className="gradient-text">Expertise</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {services.map((service, index) => (
              <div key={index} className="bg-card border border-border rounded-xl p-8 text-center shadow-sm hover:shadow-lg transition-smooth">
                <div className="w-16 h-16 mx-auto mb-4 rounded-lg gradient-primary flex items-center justify-center text-white">
                  <service.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-muted-foreground text-sm">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ITConsultancy;
