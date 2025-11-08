import { Button } from "@/components/ui/button";
import { CheckCircle2, ArrowRight } from "lucide-react";
import teamImage from "@/assets/team-collaboration.jpg";
import { useNavigate } from "react-router-dom";

const WhyChooseSection = () => {
    const navigate = useNavigate();
  const reasons = [
    "Transparent Communication",
    "Agile Development Process",
    "Dedicated Expert Teams",
    "On-time Delivery",
    "Cost-effective Solutions",
    "24/7 Support",
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <h2 className="text-3xl lg:text-5xl font-bold">
              Why Choose <span className="gradient-text">ZCROM?</span>
            </h2>
            <div className="space-y-4">
              {reasons.map((reason, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <p className="text-lg text-foreground font-medium">{reason}</p>
                </div>
              ))}
            </div>
            <Button 
              onClick={() => navigate('/contact')}
              className="gradient-primary text-white font-semibold shadow-glow hover:shadow-lg transition-smooth group"
            >
              Book a Free Consultation
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-smooth" />
            </Button>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-smooth">
              <img
                src={teamImage}
                alt="Team collaboration and innovation"
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-card border border-border rounded-xl p-6 shadow-lg hidden lg:block">
              <p className="text-3xl font-bold gradient-text">5+</p>
              <p className="text-sm text-muted-foreground">Years Experience</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
