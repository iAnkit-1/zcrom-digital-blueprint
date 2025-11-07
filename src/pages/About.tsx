// import { Users, Target, Award, TrendingUp, Code, Rocket, Heart, Zap } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import teamImage from "@/assets/team-collaboration.jpg";

// const About = () => {
//   const values = [
//     {
//       icon: Target,
//       title: "Mission Driven",
//       description: "Empowering businesses through innovative digital solutions",
//     },
//     {
//       icon: Users,
//       title: "Client Focused",
//       description: "Your success is our top priority",
//     },
//     {
//       icon: Award,
//       title: "Quality Excellence",
//       description: "Delivering exceptional results every time",
//     },
//     {
//       icon: TrendingUp,
//       title: "Continuous Growth",
//       description: "Always learning and improving",
//     },
//   ];

//   const whyChooseUs = [
//     {
//       icon: Code,
//       title: "Expert Team",
//       description: "20+ skilled developers, designers, and strategists with 5+ years of experience",
//     },
//     {
//       icon: Rocket,
//       title: "Fast Delivery",
//       description: "Agile methodology ensuring on-time project completion without compromising quality",
//     },
//     {
//       icon: Heart,
//       title: "Client Satisfaction",
//       description: "100% client satisfaction rate with 50+ successful projects delivered",
//     },
//     {
//       icon: Zap,
//       title: "Cutting-Edge Tech",
//       description: "Latest technologies and frameworks to keep you ahead of the competition",
//     },
//   ];

//   const phoneNumber = "919696726607";
//   const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent("Hi! I want to know more about ZCROM")}`;

//   return (
//     <div className="min-h-screen">
//       {/* Hero */}
//       <section className="py-20 bg-gradient-subtle">
//         <div className="container mx-auto px-4 text-center">
//           <h1 className="text-4xl lg:text-6xl font-bold mb-6">
//             About <span className="gradient-text">ZCROM</span>
//           </h1>
//           <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
//             We are a team of passionate developers, designers, and strategists committed to building digital solutions that make a difference
//           </p>
//         </div>
//       </section>

//       {/* Who We Are */}
//       <section className="py-20 bg-background">
//         <div className="container mx-auto px-4">
//           <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
//             <div>
//               <img 
//                 src={teamImage} 
//                 alt="ZCROM Team" 
//                 className="rounded-2xl shadow-lg w-full h-auto"
//               />
//             </div>
//             <div className="space-y-6">
//               <h2 className="text-3xl lg:text-4xl font-bold">
//                 Who We <span className="gradient-text">Are</span>
//               </h2>
//               <p className="text-lg text-muted-foreground leading-relaxed">
//                 ZCROM is a next-generation tech agency specializing in web development, mobile applications, AI automation, and cloud solutions. We turn ambitious ideas into powerful digital products that drive growth.
//               </p>
//               <p className="text-lg text-muted-foreground leading-relaxed">
//                 Founded by a team of passionate technologists, we've evolved from a small startup to a trusted partner for businesses across India, USA, and UK. Our mission is simple: deliver world-class software solutions that exceed expectations.
//               </p>
//               <div className="grid grid-cols-3 gap-4 pt-4">
//                 <div className="text-center">
//                   <div className="text-3xl font-bold gradient-text">50+</div>
//                   <div className="text-sm text-muted-foreground">Projects</div>
//                 </div>
//                 <div className="text-center">
//                   <div className="text-3xl font-bold gradient-text">10+</div>
//                   <div className="text-sm text-muted-foreground">Industries</div>
//                 </div>
//                 <div className="text-center">
//                   <div className="text-3xl font-bold gradient-text">100%</div>
//                   <div className="text-sm text-muted-foreground">Satisfaction</div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Story */}
//       <section className="py-20 bg-gradient-subtle">
//         <div className="container mx-auto px-4">
//           <div className="max-w-4xl mx-auto space-y-6 text-center">
//             <h2 className="text-3xl lg:text-4xl font-bold">Our Story</h2>
//             <p className="text-lg text-muted-foreground leading-relaxed">
//               Founded with a vision to bridge the gap between ideas and implementation, ZCROM has grown into a trusted partner for businesses seeking digital transformation. We combine technical expertise with creative thinking to deliver solutions that not only meet but exceed expectations.
//             </p>
//             <p className="text-lg text-muted-foreground leading-relaxed">
//               From startups to established enterprises, we've helped 50+ clients across 10+ industries bring their digital visions to life. Our team thrives on challenges and is committed to staying at the forefront of technology.
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* Why Choose Us */}
//       <section className="py-20 bg-background">
//         <div className="container mx-auto px-4">
//           <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12">
//             Why Choose <span className="gradient-text">ZCROM</span>
//           </h2>
//           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
//             {whyChooseUs.map((item, index) => (
//               <div
//                 key={index}
//                 className="bg-card border border-border rounded-xl p-6 text-center shadow-sm hover:shadow-lg transition-smooth hover:-translate-y-1"
//               >
//                 <div className="w-14 h-14 mx-auto mb-4 rounded-lg gradient-primary flex items-center justify-center text-white">
//                   <item.icon className="w-7 h-7" />
//                 </div>
//                 <h3 className="text-xl font-bold mb-2">{item.title}</h3>
//                 <p className="text-muted-foreground text-sm">{item.description}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Values */}
//       <section className="py-20 bg-gradient-subtle">
//         <div className="container mx-auto px-4">
//           <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12">
//             Our <span className="gradient-text">Values</span>
//           </h2>
//           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
//             {values.map((value, index) => (
//               <div
//                 key={index}
//                 className="bg-card border border-border rounded-xl p-6 text-center shadow-sm hover:shadow-lg transition-smooth hover:-translate-y-1"
//               >
//                 <div className="w-14 h-14 mx-auto mb-4 rounded-lg gradient-primary flex items-center justify-center text-white">
//                   <value.icon className="w-7 h-7" />
//                 </div>
//                 <h3 className="text-xl font-bold mb-2">{value.title}</h3>
//                 <p className="text-muted-foreground text-sm">{value.description}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Team */}
//       <section className="py-20 bg-background">
//         <div className="container mx-auto px-4 text-center">
//           <h2 className="text-3xl lg:text-4xl font-bold mb-6">
//             Meet Our <span className="gradient-text">Team</span>
//           </h2>
//           <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-12">
//             A diverse group of experts passionate about technology and innovation
//           </p>
//           <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
//             {[1, 2, 3, 4].map((_, index) => (
//               <div key={index} className="text-center">
//                 <div className="w-32 h-32 mx-auto mb-4 rounded-full gradient-primary"></div>
//                 <h3 className="font-bold text-lg">Team Member</h3>
//                 <p className="text-sm text-muted-foreground">Position</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section className="py-20 bg-gradient-subtle">
//         <div className="container mx-auto px-4">
//           <div className="max-w-3xl mx-auto text-center bg-gradient-primary rounded-2xl p-12 text-white">
//             <h2 className="text-3xl lg:text-4xl font-bold mb-4">
//               Ready to Build Something Amazing?
//             </h2>
//             <p className="text-lg text-white/90 mb-8">
//               Join 50+ businesses who trust ZCROM for their digital transformation journey.
//             </p>
//             <div className="flex gap-4 justify-center">
//               <Button 
//                 size="lg" 
//                 className="bg-white text-primary hover:bg-white/90"
//                 onClick={() => window.open(whatsappUrl, "_blank")}
//               >
//                 Chat on WhatsApp
//               </Button>
//               <Button 
//                 size="lg" 
//                 variant="outline" 
//                 className="border-white text-white hover:bg-white/10"
//                 onClick={() => window.location.href = "/contact"}
//               >
//                 Schedule a Call
//               </Button>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default About;




import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Users, Target, Zap, Award, Sparkles, TrendingUp, Star } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import WhatsAppButton from "@/components/WhatsAppButton";

const About = () => {
  const values = [
    {
      icon: Users,
      title: "Client-Centric",
      description: "Your success is our priority. We build lasting partnerships through transparent communication and dedicated support.",
      gradient: "from-blue-500 to-blue-600"
    },
    {
      icon: Target,
      title: "Innovation First",
      description: "We stay ahead of tech trends to deliver cutting-edge solutions that give you a competitive advantage.",
      gradient: "from-violet-500 to-violet-600"
    },
    {
      icon: Zap,
      title: "Fast & Agile",
      description: "Rapid development cycles without compromising quality. We adapt quickly to your changing needs.",
      gradient: "from-orange-500 to-orange-600"
    },
    {
      icon: Award,
      title: "Quality Assured",
      description: "Every project undergoes rigorous testing and quality checks to ensure flawless performance.",
      gradient: "from-pink-500 to-pink-600"
    }
  ];

  return (
    <div className="min-h-screen bg-background  overflow-hidden">
      {/* Premium Animated Background */}
      
      <Navbar />
      
      
      <main className="pt-10 relative z-10">
        {/* Hero Section - Enhanced */}
        <section className="container mx-auto px-4 lg:px-8 py-28">
          <div className="max-w-5xl mx-auto text-center animate-fade-in-up">

      

            {/* Premium Badge */}
             <div className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-primary/20 via-secondary/20 to-primary/20 rounded-full text-primary text-sm font-bold mb-12 border-2 border-primary/40 shadow-2xl backdrop-blur-xl hover:scale-105 transition-all duration-300">
              <Sparkles size={20} style={{ animationDuration: '3s' }} />
              <span className="tracking-widest">ABOUT ZCROM</span>
              <Sparkles size={20}  style={{ animationDuration: '3s', animationDirection: 'reverse' }} />
            </div>

            <h1 className="text-5xl md:text-7xl font-black mb-8 tracking-tight leading-[1.1]">
              Who <span className="gradient-text-primary relative inline-block">
                We Are
                <svg className="absolute -bottom-4 left-0 w-full h-4" viewBox="0 0 200 16" preserveAspectRatio="none">
                  <path d="M0,12 Q100,0 200,12" fill="none" stroke="currentColor" strokeWidth="4" className="text-primary/40" strokeLinecap="round"/>
                </svg>
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-4xl mx-auto font-light">
              At ZCrom, we merge <span className="text-foreground font-semibold">creativity</span> with <span className="text-foreground font-semibold">technology</span> to empower businesses of all scales. 
              Our team of developers, designers, and strategists help turn ideas into powerful digital 
              products — from startups to established enterprises.
            </p>

            {/* Floating Stats Preview */}
            <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto mt-16">
              {[
                { value: "50+", label: "Projects" },
                { value: "40+", label: "Clients" },
                { value: "10+", label: "Team" }
              ].map((stat, index) => (
                <div key={index} className="group cursor-pointer hover:scale-110 transition-transform duration-300">
                  <div className="text-4xl md:text-5xl font-black gradient-text-primary mb-2 group-hover:animate-pulse">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground font-semibold group-hover:text-foreground transition-colors">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Mission Section - Enhanced */}
        <section className="from-card/40 to-card/60 py-10 relative">
          {/* Background Pattern */}
          <div className="absolute inset-0 bg-grid-pattern opacity-[0.03]"></div>
          
          <div className="container mx-auto px-4 lg:px-8 relative">
            <div className="max-w-5xl mx-auto">
              {/* Premium Badge */}
              <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-secondary/10 via-secondary/5 to-secondary/10 rounded-full text-secondary text-sm font-semibold mb-10 border border-secondary/20 shadow-lg backdrop-blur-sm hover:scale-105 transition-all duration-300 mx-auto block w-fit">
                <Target size={16} className="animate-pulse" />
                <span className="tracking-wide">OUR MISSION</span>
              </div>

              <h2 className="text-4xl md:text-6xl font-black mb-10 text-center tracking-tight">
                Our <span className="gradient-text-secondary relative inline-block">
                  Mission
                  <svg className="absolute -bottom-3 left-0 w-full h-3" viewBox="0 0 200 12" preserveAspectRatio="none">
                    <path d="M0,10 Q100,0 200,10" fill="none" stroke="currentColor" strokeWidth="3" className="text-secondary/40" strokeLinecap="round"/>
                  </svg>
                </span>
              </h2>

              <div className="relative">
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent blur-3xl"></div>
                
                <p className="text-lg md:text-2xl text-muted-foreground leading-relaxed text-center font-light relative p-10 bg-background/50 backdrop-blur-sm rounded-3xl border-2 border-primary/20 shadow-2xl">
                  To <span className="text-foreground font-semibold">democratize technology</span> by making world-class digital solutions accessible to businesses 
                  of all sizes. We believe every great idea deserves <span className="text-foreground font-semibold">exceptional execution</span>, and we're here to 
                  make that happen through innovative design, robust development, and strategic consulting.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section - Enhanced */}
        <section className="py-20 relative">
          {/* Dot Pattern */}
          <div className="absolute inset-0 opacity-[0.03]" style={{
            backgroundImage: 'radial-gradient(circle, currentColor 1px, transparent 1px)',
            backgroundSize: '40px 40px'
          }}></div>

          <div className="container mx-auto px-4 lg:px-8 relative">
            {/* Premium Badge */}
            <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 rounded-full text-primary text-sm font-semibold mb-10 border border-primary/20 shadow-lg backdrop-blur-sm hover:scale-105 transition-all duration-300 mx-auto block w-fit">
              <Star size={16} className="fill-current animate-pulse" />
              <span className="tracking-wide">WHAT DRIVES US</span>
            </div>

            <h2 className="text-4xl md:text-6xl font-black mb-16 text-center tracking-tight">
              Our <span className="gradient-text-primary relative inline-block">
                Core Values
                <svg className="absolute -bottom-3 left-0 w-full h-3" viewBox="0 0 300 12" preserveAspectRatio="none">
                  <path d="M0,10 Q150,0 300,10" fill="none" stroke="currentColor" strokeWidth="3" className="text-primary/40" strokeLinecap="round"/>
                </svg>
              </span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <Card 
                    key={index}
                    className="bg-card/80 backdrop-blur-sm border-2 border-border hover:border-primary/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl group relative overflow-hidden"
                  >
                    {/* Shimmer Effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                    
                    <CardHeader className="relative z-10">
                      <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${value.gradient} flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                        <Icon className="text-white" size={28} />
                      </div>
                      <CardTitle className="text-2xl font-bold group-hover:text-primary transition-colors">
                        {value.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="relative z-10">
                      <p className="text-muted-foreground leading-relaxed group-hover:text-foreground transition-colors">
                        {value.description}
                      </p>
                    </CardContent>

                    {/* Decorative Corner */}
                    <div className="absolute -bottom-2 -right-2 w-20 h-20 bg-gradient-to-br from-primary/10 to-transparent rounded-tl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </Card>
                );
              })}
            </div>

            {/* Floating Decorative Elements */}
            <div className="absolute top-20 -left-8 w-24 h-24 border-2 border-primary/20 rounded-2xl rotate-12 pointer-events-none animate-float"></div>
            <div className="absolute bottom-20 -right-8 w-28 h-28 border-2 border-secondary/20 rounded-2xl -rotate-12 pointer-events-none animate-float" style={{ animationDelay: '1s' }}></div>
          </div>
        </section>

        {/* Team Stats - Premium Enhanced */}
        <section className="bg-gradient-to-br from-card/60 via-card/80 to-card/60 py-28 relative overflow-hidden">
          {/* Animated Background */}
          <div className="absolute inset-0 opacity-[0.04]" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, currentColor 2px, transparent 0)',
            backgroundSize: '48px 48px'
          }}></div>

          {/* Glow Effects */}
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[150px]"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-[150px]"></div>

          <div className="container mx-auto px-4 lg:px-8 relative z-10">
            {/* Premium Badge */}
            <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-primary/15 via-primary/10 to-primary/15 rounded-full text-primary text-sm font-bold mb-12 border-2 border-primary/30 shadow-2xl backdrop-blur-sm hover:scale-105 transition-all duration-300 mx-auto block w-fit">
              <TrendingUp size={16} className="animate-pulse" />
              <span className="tracking-widest">OUR ACHIEVEMENTS</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-black text-center mb-20 tracking-tight">
              Success <span className="gradient-text-primary">By Numbers</span>
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-12 max-w-6xl mx-auto">
              {[
                { value: "50+", label: "Projects Completed", gradient: "gradient-text-primary" },
                { value: "40+", label: "Happy Clients", gradient: "gradient-text-secondary" },
                { value: "10+", label: "Team Members", gradient: "gradient-text-primary" },
                { value: "5+", label: "Years Experience", gradient: "gradient-text-secondary" }
              ].map((stat, index) => (
                <div 
                  key={index} 
                  className="text-center group cursor-pointer hover:scale-110 transition-all duration-300 p-8 rounded-3xl bg-background/50 backdrop-blur-sm border-2 border-primary/20 hover:border-primary/50 hover:shadow-2xl"
                >
                  <div className={`text-5xl md:text-7xl font-black ${stat.gradient} mb-4 group-hover:animate-pulse`}>
                    {stat.value}
                  </div>
                  <div className="text-sm md:text-base text-muted-foreground font-semibold tracking-wide group-hover:text-foreground transition-colors">
                    {stat.label}
                  </div>
                  {/* Rating Stars */}
                  <div className="flex items-center justify-center gap-1 mt-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        size={12} 
                        className="text-yellow-500 fill-yellow-500" 
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Animated Decorative Dots */}
          <div className="absolute top-24 left-16 w-3 h-3 bg-primary rounded-full animate-ping"></div>
          <div className="absolute bottom-32 right-24 w-3 h-3 bg-secondary rounded-full animate-ping" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 left-1/4 w-2 h-2 bg-primary rounded-full animate-ping" style={{ animationDelay: '2s' }}></div>
        </section>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default About;