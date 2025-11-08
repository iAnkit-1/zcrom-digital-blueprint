import { useState } from "react";
import {
  Globe,
  Smartphone,
  Palette,
  Cloud,
  Search,
  Cpu,
  TrendingUp,
  Users,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useNavigate } from "react-router-dom";

interface Service {
  icon: React.ElementType;
  title: string;
  description: string;
  details: string;
  pricing: string;
  slug: string;
}

const services: Service[] = [
  {
    icon: Globe,
    title: "Website Development",
    description: "Static to dynamic websites with modern frameworks",
    details:
      "We build responsive, fast, and SEO-optimized websites using cutting-edge technologies like React, Next.js, and Tailwind CSS. From landing pages to complex web applications.",
    pricing: "Starting from ₹2,999",
    slug: "website-development",
  },
  {
    icon: Smartphone,
    title: "App Development",
    description: "Native and cross-platform mobile applications",
    details:
      "Create stunning mobile apps for iOS and Android using React Native, Flutter, or native technologies. We handle everything from design to deployment.",
    pricing: "Custom pricing based on features",
    slug: "mobile-application",
  },
  {
    icon: Palette,
    title: "UI/UX & Figma Design",
    description: "Beautiful, user-centric design systems",
    details:
      "Transform your ideas into pixel-perfect designs. We create intuitive interfaces and comprehensive design systems in Figma.",
    pricing: "Starting from ₹4,999",
    slug: "ui-ux-figma-design",
  },
  {
    icon: Cloud,
    title: "Cloud Services & Deployment",
    description: "Scalable cloud infrastructure setup",
    details:
      "Deploy and manage your applications on AWS, Google Cloud, or Azure. We handle DevOps, CI/CD, and scaling.",
    pricing: "₹14,999 - ₹24,999",
    slug: "cloud-services",
  },
  {
    icon: Search,
    title: "SEO & Digital Marketing",
    description: "Boost your online presence",
    details:
      "Comprehensive SEO strategies, content optimization, and digital marketing campaigns to increase your visibility and conversions.",
    pricing: "Monthly packages from ₹9,999",
    slug: "seo-marketing",
  },
  {
    icon: Cpu,
    title: "AI Automation & Agents",
    description: "CRM, ERP, and custom automation solutions",
    details:
      "Streamline your business with custom CRM/ERP systems, workflow automation, and integration solutions.",
    pricing: "Starting from ₹29,999",
    slug: "ai-automation",
  },
  {
    icon: TrendingUp,
    title: "System Design",
    description: "Scalable architecture planning",
    details:
      "Expert system design and architecture consultation for large-scale applications. We ensure your platform is built to scale.",
    pricing: "₹80,000 - ₹1,00,000",
    slug: "system-design",
  },
  {
    icon: Users,
    title: "Consulting & Strategy",
    description: "Expert guidance for your tech journey",
    details:
      "One-on-one strategy sessions with our experts. Get personalized advice on technology stack, architecture, and growth strategies.",
    pricing: "Free first meeting, then from ₹1,100/session",
    slug: "it-consultancy",
  },
];

const ServicesGrid = () => {
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const navigate = useNavigate(); 
  const handleCardClick = (service: Service) => {
    setSelectedService(service);
  };

  const handleGetStarted = (service: Service | null) => {
    if (service) {
      navigate(`/services/${service.slug}`);
    } else {
      navigate("/services");
    }
  };

  const handleLearnMore = (service: Service | null) => {
    if (service) {
      navigate(`/services/${service.slug}`);
    } else {
      navigate("/services");
    }
  };

  return (
    <>
      {/* Services Grid */}
      <div className="p-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((service, index) => {
          const Icon = service.icon;
          return (
            <Card
              key={index}
              className="group relative overflow-hidden transition-all duration-300 cursor-pointer bg-white border border-gray-200 hover:scale-105 hover:shadow-xl hover:shadow-primary/10"
              onClick={() => handleCardClick(service)}
            >
              {/* Animated gradient border */}
              <div className="absolute inset-0 rounded-xl p-[3px] bg-[linear-gradient(90deg,#3B82F6,#8B5CF6,#06B6D4,#3B82F6)] bg-[length:800%_800%] animate-borderRun opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="w-full h-full rounded-[15px] bg-white"></div>
              </div>

              {/* Card content */}
              <CardHeader className="relative z-10">
                <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center mb-4 group-hover:animate-float shadow-md">
                  <Icon className="text-white" size={24} />
                </div>
                <CardTitle className="text-lg text-gray-900">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-sm text-gray-600">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="relative z-10">
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-primary hover:text-primary/80 p-0 h-auto font-medium"
                >
                  View More →
                </Button>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Service Details Modal */}
      <Dialog open={!!selectedService} onOpenChange={() => setSelectedService(null)}>
        <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto bg-white text-gray-800 border border-gray-200 shadow-2xl">
          <DialogHeader className="space-y-6">
            {/* Icon and Title Section */}
            <div className="flex items-start gap-4">
              <div className="w-16 h-16 rounded-2xl bg-gradient-primary flex items-center justify-center flex-shrink-0 shadow-md">
                {selectedService && <selectedService.icon className="text-white" size={32} />}
              </div>
              <div className="flex-1">
                <DialogTitle className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                  {selectedService?.title}
                </DialogTitle>
                <p className="text-gray-600">{selectedService?.description}</p>
              </div>
            </div>

            {/* Divider */}
            <div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>

            <DialogDescription className="text-base space-y-6">
              {/* Details Section */}
              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
                  <div className="w-1 h-6 bg-gradient-primary rounded-full"></div>
                  What We Offer
                </h3>
                <p className="text-gray-700 leading-relaxed pl-4">
                  {selectedService?.details}
                </p>
              </div>

              {/* Pricing Card */}
              <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-primary/10 via-primary/5 to-transparent p-6 border border-primary/20 shadow-md">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl"></div>
                <div className="relative z-10">
                  <div className="flex items-center gap-2 mb-3">
                    <TrendingUp className="text-primary" size={20} />
                    <p className="font-bold text-gray-900 text-lg">Investment</p>
                  </div>
                  <p className="text-2xl font-bold text-primary">
                    {selectedService?.pricing}
                  </p>
                  <p className="text-sm text-gray-600 mt-2">
                    Transparent pricing with no hidden costs
                  </p>
                </div>
              </div>

              {/* CTA Section */}
              <div className="flex gap-3 pt-2">
                <Button
                  className="flex-1 bg-gradient-primary hover:opacity-90 text-white font-semibold shadow-md hover:shadow-lg transition-all duration-300"
                  onClick={() => handleGetStarted(selectedService)}
                >
                  Get Started
                </Button>
                <Button
                  variant="outline"
                  className="flex-1 border-primary/40 text-primary hover:bg-primary/10"
                  onClick={() => handleLearnMore(selectedService)}
                >
                  Learn More
                </Button>
              </div>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ServicesGrid;