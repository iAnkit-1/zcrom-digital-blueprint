import { Button } from "@/components/ui/button";
import { Smartphone, Tablet, Watch, MessageCircle } from "lucide-react";

const MobileApplication = () => {
  const platforms = [
    { icon: Smartphone, title: "iOS Development", description: "Native Swift & SwiftUI apps" },
    { icon: Tablet, title: "Android Development", description: "Native Kotlin & Java apps" },
    { icon: Watch, title: "Cross-Platform", description: "React Native & Flutter" },
  ];

  const phoneNumber = "919696726607";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent("Hi! I'm interested in Mobile Application Development.")}`;

  return (
    <div className="min-h-screen">
      <section className="py-20 bg-gradient-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">Mobile Application Development</h1>
          <p className="text-lg text-white/90 max-w-2xl mx-auto mb-8">
            Create stunning mobile experiences for iOS and Android that users love
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
            We build high-performance mobile applications that deliver exceptional user experiences. Whether you need native apps or cross-platform solutions, we have the expertise to bring your mobile vision to life.
          </p>
        </div>
      </section>

      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12">
            Our <span className="gradient-text">Platforms</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {platforms.map((platform, index) => (
              <div key={index} className="bg-card border border-border rounded-xl p-8 text-center shadow-sm hover:shadow-lg transition-smooth">
                <div className="w-16 h-16 mx-auto mb-4 rounded-lg gradient-primary flex items-center justify-center text-white">
                  <platform.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold mb-2">{platform.title}</h3>
                <p className="text-muted-foreground text-sm">{platform.description}</p>
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
            {["React Native", "Flutter", "Swift", "Kotlin", "Firebase", "Redux", "GraphQL", "REST APIs"].map((tech, index) => (
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

export default MobileApplication;
