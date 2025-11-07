import { useState } from "react";
import { Globe, Smartphone, Palette, Cloud, TrendingUp, Bot, Network, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import ServiceModal from "@/components/ServiceModal";

const ServicesSection = () => {
  const [modalState, setModalState] = useState({ isOpen: false, service: null as any });

  const services = [
    {
      icon: Globe,
      title: "Website Development",
      description: "Static to dynamic websites with modern frameworks",
      fullDescription: "We build responsive, high-performance websites using cutting-edge technologies like React, Next.js, and TypeScript. From simple landing pages to complex web applications, we deliver solutions that drive results.",
      url: "/services/website-development",
    },
    {
      icon: Smartphone,
      title: "App Development",
      description: "Native and cross-platform mobile applications",
      fullDescription: "Create stunning mobile experiences for iOS and Android. We specialize in React Native and Flutter for cross-platform development, ensuring your app reaches maximum audience with minimal cost.",
      url: "/services/mobile-application",
    },
    {
      icon: Palette,
      title: "UI/UX & Figma Design",
      description: "Beautiful, user-centric design systems",
      fullDescription: "Our designers create intuitive, engaging interfaces that users love. We use Figma to prototype and design complete design systems that scale with your product.",
      url: "/services/graphic-design",
    },
    {
      icon: Cloud,
      title: "Cloud Services & Deployment",
      description: "Scalable cloud infrastructure setup",
      fullDescription: "Deploy and manage your applications with confidence. We handle AWS, Azure, Google Cloud, and modern platforms like Vercel and Netlify to ensure your apps are fast, secure, and always available.",
      url: "/services/it-consultancy",
    },
    {
      icon: TrendingUp,
      title: "SEO & Digital Marketing",
      description: "Boost your online presence",
      fullDescription: "Get found online with our comprehensive SEO strategies. We optimize your website for search engines and create data-driven digital marketing campaigns that convert.",
      url: "/services/it-consultancy",
    },
    {
      icon: Bot,
      title: "AI Automation & Agents",
      description: "CRM, ERP, and custom automation solutions",
      fullDescription: "Leverage AI to automate repetitive tasks and unlock new efficiencies. We build custom AI agents, chatbots, and automation workflows that save time and reduce costs.",
      url: "/services/custom-software",
    },
    {
      icon: Network,
      title: "System Design",
      description: "Scalable architecture planning",
      fullDescription: "Plan for scale from day one. Our architects design robust, scalable systems that can handle millions of users while maintaining performance and reliability.",
      url: "/services/it-consultancy",
    },
    {
      icon: BookOpen,
      title: "Consulting & Strategy",
      description: "Expert guidance for your tech journey",
      fullDescription: "Navigate complex technical decisions with confidence. Our consultants bring years of experience to help you choose the right technologies and strategies for your business goals.",
      url: "/services/it-consultancy",
    },
  ];

  const openModal = (service: any) => {
    setModalState({ isOpen: true, service });
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl lg:text-5xl font-bold">
            Our <span className="gradient-text">Services</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            End-to-End Digital Solutions — From Idea to Launch
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group p-6 rounded-xl bg-card border border-border shadow-sm hover:shadow-lg transition-smooth hover:-translate-y-1"
            >
              <div className="w-12 h-12 rounded-lg gradient-primary flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-smooth shadow-md">
                <service.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-foreground">{service.title}</h3>
              <p className="text-muted-foreground mb-4 text-sm">{service.description}</p>
              <Button
                onClick={() => openModal(service)}
                variant="ghost"
                className="text-primary hover:text-primary font-semibold p-0 h-auto group"
              >
                View More →
              </Button>
            </div>
          ))}
        </div>
      </div>

      {modalState.service && (
        <ServiceModal
          isOpen={modalState.isOpen}
          onClose={() => setModalState({ isOpen: false, service: null })}
          title={modalState.service.title}
          description={modalState.service.fullDescription}
          serviceUrl={modalState.service.url}
        />
      )}
    </section>
  );
};

export default ServicesSection;
