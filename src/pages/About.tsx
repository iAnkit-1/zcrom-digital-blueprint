import { Users, Target, Award, TrendingUp, Code, Rocket, Heart, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import teamImage from "@/assets/team-collaboration.jpg";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Mission Driven",
      description: "Empowering businesses through innovative digital solutions",
    },
    {
      icon: Users,
      title: "Client Focused",
      description: "Your success is our top priority",
    },
    {
      icon: Award,
      title: "Quality Excellence",
      description: "Delivering exceptional results every time",
    },
    {
      icon: TrendingUp,
      title: "Continuous Growth",
      description: "Always learning and improving",
    },
  ];

  const whyChooseUs = [
    {
      icon: Code,
      title: "Expert Team",
      description: "20+ skilled developers, designers, and strategists with 5+ years of experience",
    },
    {
      icon: Rocket,
      title: "Fast Delivery",
      description: "Agile methodology ensuring on-time project completion without compromising quality",
    },
    {
      icon: Heart,
      title: "Client Satisfaction",
      description: "100% client satisfaction rate with 50+ successful projects delivered",
    },
    {
      icon: Zap,
      title: "Cutting-Edge Tech",
      description: "Latest technologies and frameworks to keep you ahead of the competition",
    },
  ];

  const phoneNumber = "919696726607";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent("Hi! I want to know more about ZCROM")}`;

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">
            About <span className="gradient-text">ZCROM</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            We are a team of passionate developers, designers, and strategists committed to building digital solutions that make a difference
          </p>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div>
              <img 
                src={teamImage} 
                alt="ZCROM Team" 
                className="rounded-2xl shadow-lg w-full h-auto"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl lg:text-4xl font-bold">
                Who We <span className="gradient-text">Are</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                ZCROM is a next-generation tech agency specializing in web development, mobile applications, AI automation, and cloud solutions. We turn ambitious ideas into powerful digital products that drive growth.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Founded by a team of passionate technologists, we've evolved from a small startup to a trusted partner for businesses across India, USA, and UK. Our mission is simple: deliver world-class software solutions that exceed expectations.
              </p>
              <div className="grid grid-cols-3 gap-4 pt-4">
                <div className="text-center">
                  <div className="text-3xl font-bold gradient-text">50+</div>
                  <div className="text-sm text-muted-foreground">Projects</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold gradient-text">10+</div>
                  <div className="text-sm text-muted-foreground">Industries</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold gradient-text">100%</div>
                  <div className="text-sm text-muted-foreground">Satisfaction</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-6 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold">Our Story</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Founded with a vision to bridge the gap between ideas and implementation, ZCROM has grown into a trusted partner for businesses seeking digital transformation. We combine technical expertise with creative thinking to deliver solutions that not only meet but exceed expectations.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              From startups to established enterprises, we've helped 50+ clients across 10+ industries bring their digital visions to life. Our team thrives on challenges and is committed to staying at the forefront of technology.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12">
            Why Choose <span className="gradient-text">ZCROM</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {whyChooseUs.map((item, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-xl p-6 text-center shadow-sm hover:shadow-lg transition-smooth hover:-translate-y-1"
              >
                <div className="w-14 h-14 mx-auto mb-4 rounded-lg gradient-primary flex items-center justify-center text-white">
                  <item.icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12">
            Our <span className="gradient-text">Values</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-xl p-6 text-center shadow-sm hover:shadow-lg transition-smooth hover:-translate-y-1"
              >
                <div className="w-14 h-14 mx-auto mb-4 rounded-lg gradient-primary flex items-center justify-center text-white">
                  <value.icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                <p className="text-muted-foreground text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Meet Our <span className="gradient-text">Team</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-12">
            A diverse group of experts passionate about technology and innovation
          </p>
          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {[1, 2, 3, 4].map((_, index) => (
              <div key={index} className="text-center">
                <div className="w-32 h-32 mx-auto mb-4 rounded-full gradient-primary"></div>
                <h3 className="font-bold text-lg">Team Member</h3>
                <p className="text-sm text-muted-foreground">Position</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center bg-gradient-primary rounded-2xl p-12 text-white">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Ready to Build Something Amazing?
            </h2>
            <p className="text-lg text-white/90 mb-8">
              Join 50+ businesses who trust ZCROM for their digital transformation journey.
            </p>
            <div className="flex gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-white text-primary hover:bg-white/90"
                onClick={() => window.open(whatsappUrl, "_blank")}
              >
                Chat on WhatsApp
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-white hover:bg-white/10"
                onClick={() => window.location.href = "/contact"}
              >
                Schedule a Call
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
