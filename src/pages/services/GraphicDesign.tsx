import { Button } from "@/components/ui/button";
import { Palette, Figma, Layers, MessageCircle } from "lucide-react";

const GraphicDesign = () => {
  const services = [
    { icon: Palette, title: "UI/UX Design", description: "User-centric interfaces" },
    { icon: Figma, title: "Figma Prototyping", description: "Interactive prototypes" },
    { icon: Layers, title: "Design Systems", description: "Scalable components" },
  ];

  const phoneNumber = "919335059380";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent("Hi! I'm interested in Graphic Design services.")}`;

  return (
    <div className="min-h-screen">
      <section className="py-20 bg-gradient-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">Graphic & UI/UX Design</h1>
          <p className="text-lg text-white/90 max-w-2xl mx-auto mb-8">
            Beautiful, intuitive designs that engage users and drive conversions
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
            Our design team creates stunning visual experiences that combine aesthetics with usability. From brand identity to complete design systems, we ensure your digital products look amazing and work flawlessly.
          </p>
        </div>
      </section>

      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12">
            Our <span className="gradient-text">Services</span>
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

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-8">
            Design <span className="gradient-text">Tools</span>
          </h2>
          <div className="flex flex-wrap gap-3 justify-center">
            {["Figma", "Adobe XD", "Sketch", "Illustrator", "Photoshop", "InVision", "Framer"].map((tool, index) => (
              <span key={index} className="px-4 py-2 bg-card border border-border rounded-full text-sm font-semibold shadow-sm">
                {tool}
              </span>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default GraphicDesign;
