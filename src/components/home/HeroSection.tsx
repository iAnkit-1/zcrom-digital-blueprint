import { Button } from "@/components/ui/button";
import { ArrowRight, MessageCircle, Zap, Users, Award } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const HeroSection = () => {
  const phoneNumber = "919696726607";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent("Hi ZCROM! I'd like to book a free session.")}`;

  return (
    <section className="relative overflow-hidden bg-gradient-subtle py-20 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in">
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
              Building Scalable{" "}
              <span className="gradient-text">Digital Solutions</span> for the Future 🚀
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
              We help startups and businesses turn ideas into reality through world-class web, mobile, and AI solutions.
            </p>

            {/* Trust Metrics */}
            <div className="grid grid-cols-3 gap-4 pt-4">
              <div className="text-center p-4 rounded-lg bg-card border border-border shadow-sm hover:shadow-md transition-smooth">
                <div className="flex justify-center mb-2">
                  <Zap className="w-6 h-6 text-primary" />
                </div>
                <p className="text-2xl font-bold gradient-text">50+</p>
                <p className="text-sm text-muted-foreground">Successful Projects</p>
              </div>
              <div className="text-center p-4 rounded-lg bg-card border border-border shadow-sm hover:shadow-md transition-smooth">
                <div className="flex justify-center mb-2">
                  <Users className="w-6 h-6 text-accent" />
                </div>
                <p className="text-2xl font-bold gradient-text">10+</p>
                <p className="text-sm text-muted-foreground">Industries Served</p>
              </div>
              <div className="text-center p-4 rounded-lg bg-card border border-border shadow-sm hover:shadow-md transition-smooth">
                <div className="flex justify-center mb-2">
                  <Award className="w-6 h-6 text-primary" />
                </div>
                <p className="text-2xl font-bold gradient-text">100%</p>
                <p className="text-sm text-muted-foreground">Client Satisfaction</p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <Button className="gradient-primary text-white font-semibold shadow-glow hover:shadow-lg transition-smooth group">
                Book Free Session
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-smooth" />
              </Button>
              <Button
                onClick={() => window.open(whatsappUrl, "_blank")}
                variant="outline"
                className="font-semibold border-primary text-primary hover:bg-primary hover:text-white transition-smooth group"
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                Chat on WhatsApp
              </Button>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative animate-scale-in">
            <div className="relative rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-smooth">
              <img
                src={heroImage}
                alt="Team collaboration in modern tech workspace"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent"></div>
            </div>
            {/* Floating Element */}
            <div className="absolute -bottom-6 -left-6 bg-card border border-border rounded-xl p-4 shadow-lg animate-float hidden lg:block">
              <p className="text-sm font-semibold gradient-text">Trusted by 50+ clients worldwide</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
