import { Users, Target, Award, TrendingUp } from "lucide-react";

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

      {/* Story */}
      <section className="py-20 bg-background">
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
    </div>
  );
};

export default About;
