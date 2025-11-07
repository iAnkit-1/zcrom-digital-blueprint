import { Search, TrendingUp, Target, BarChart, CheckCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const SEOMarketing = () => {
  const benefits = [
    "Keyword Research & Strategy",
    "On-Page SEO Optimization",
    "Technical SEO Audits",
    "Content Marketing Strategy",
    "Link Building Campaigns",
    "Local SEO for Businesses",
    "Analytics & Reporting",
    "Conversion Rate Optimization",
  ];

  const services = [
    {
      icon: Search,
      title: "SEO Optimization",
      description: "Rank higher on Google with comprehensive on-page and off-page SEO",
    },
    {
      icon: Target,
      title: "PPC Campaigns",
      description: "Google Ads & social media advertising for maximum ROI",
    },
    {
      icon: TrendingUp,
      title: "Social Media Marketing",
      description: "Build engagement across Instagram, Facebook, LinkedIn & more",
    },
    {
      icon: BarChart,
      title: "Analytics & Insights",
      description: "Data-driven decisions with detailed performance tracking",
    },
  ];

  const projects = [
    {
      title: "E-commerce SEO Growth",
      description: "Increased organic traffic by 350% in 6 months for fashion retailer",
      result: "+350% Traffic",
    },
    {
      title: "Local SEO for Restaurant Chain",
      description: "Ranked #1 for 25+ local keywords across 10 cities",
      result: "#1 Rankings",
    },
    {
      title: "SaaS Content Marketing",
      description: "Generated 5000+ qualified leads through content strategy",
      result: "5K+ Leads",
    },
  ];

  const phoneNumber = "919696726607";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent("Hi! I'm interested in SEO & Digital Marketing")}`;

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
            <Search className="w-16 h-16 mx-auto mb-6" />
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              SEO & Digital Marketing
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Boost your online visibility and drive qualified traffic that converts
            </p>
            <div className="flex gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-white text-primary hover:bg-white/90"
                onClick={() => window.open(whatsappUrl, "_blank")}
              >
                Get Free SEO Audit
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
              Grow Your Business <span className="gradient-text">Online</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              In today's digital landscape, being found online is critical. Our SEO and digital marketing services help you dominate search rankings, attract your target audience, and convert visitors into customers. We combine data-driven strategies with creative execution to deliver measurable results.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              From comprehensive SEO audits to social media campaigns, PPC advertising, and content marketing—we provide end-to-end digital marketing solutions tailored to your business goals.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12">
            Our <span className="gradient-text">Services</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card key={index} className="hover:shadow-lg transition-smooth">
                  <CardHeader>
                    <div className="w-14 h-14 rounded-lg gradient-primary flex items-center justify-center mb-4">
                      <Icon className="text-white" size={28} />
                    </div>
                    <CardTitle className="text-lg">{service.title}</CardTitle>
                    <CardDescription className="text-sm mt-2">
                      {service.description}
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
            What We <span className="gradient-text">Deliver</span>
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
            Proven <span className="gradient-text">Results</span>
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
                    {project.result}
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
              Ready to Dominate Search Rankings?
            </h2>
            <p className="text-lg text-white/90 mb-8">
              Get a free SEO audit and discover how we can boost your online presence.
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
                Request Free Audit
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SEOMarketing;
