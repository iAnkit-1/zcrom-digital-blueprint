// import { Button } from "@/components/ui/button";
// import { Code, Smartphone, Zap, Shield, MessageCircle } from "lucide-react";

// const WebsiteDevelopment = () => {
//   const features = [
//     {
//       icon: Code,
//       title: "Modern Frameworks",
//       description: "React, Next.js, Vue.js, and more",
//     },
//     {
//       icon: Smartphone,
//       title: "Responsive Design",
//       description: "Perfect on all devices",
//     },
//     {
//       icon: Zap,
//       title: "Fast Performance",
//       description: "Optimized for speed",
//     },
//     {
//       icon: Shield,
//       title: "Secure & Reliable",
//       description: "Enterprise-grade security",
//     },
//   ];

//   const phoneNumber = "919696726607";
//   const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent("Hi! I'm interested in Website Development services.")}`;

//   return (
//     <div className="min-h-screen">
//       {/* Hero */}
//       <section className="py-20 bg-gradient-primary text-white">
//         <div className="container mx-auto px-4 text-center">
//           <h1 className="text-4xl lg:text-6xl font-bold mb-6">
//             Website Development
//           </h1>
//           <p className="text-lg text-white/90 max-w-2xl mx-auto mb-8">
//             Build stunning, high-performance websites that engage users and drive results
//           </p>
//           <div className="flex flex-wrap gap-4 justify-center">
//             <Button className="bg-white text-primary hover:bg-white/90 font-semibold">
//               Book Free Session
//             </Button>
//             <Button
//               onClick={() => window.open(whatsappUrl, "_blank")}
//               className="bg-green-500 hover:bg-green-600 text-white"
//             >
//               <MessageCircle className="w-4 h-4 mr-2" />
//               Chat on WhatsApp
//             </Button>
//           </div>
//         </div>
//       </section>

//       {/* Overview */}
//       <section className="py-20 bg-background">
//         <div className="container mx-auto px-4 max-w-4xl">
//           <h2 className="text-3xl lg:text-4xl font-bold text-center mb-8">
//             Service <span className="gradient-text">Overview</span>
//           </h2>
//           <p className="text-lg text-muted-foreground text-center leading-relaxed">
//             Our website development services cover everything from simple landing pages to complex web applications. We use modern frameworks and best practices to ensure your website is fast, secure, and scalable.
//           </p>
//         </div>
//       </section>

//       {/* Features */}
//       <section className="py-20 bg-gradient-subtle">
//         <div className="container mx-auto px-4">
//           <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12">
//             Key <span className="gradient-text">Features</span>
//           </h2>
//           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
//             {features.map((feature, index) => (
//               <div
//                 key={index}
//                 className="bg-card border border-border rounded-xl p-6 text-center shadow-sm hover:shadow-lg transition-smooth"
//               >
//                 <div className="w-14 h-14 mx-auto mb-4 rounded-lg gradient-primary flex items-center justify-center text-white">
//                   <feature.icon className="w-7 h-7" />
//                 </div>
//                 <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
//                 <p className="text-muted-foreground text-sm">{feature.description}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Tech Stack */}
//       <section className="py-20 bg-background">
//         <div className="container mx-auto px-4 max-w-4xl">
//           <h2 className="text-3xl lg:text-4xl font-bold text-center mb-8">
//             Tech <span className="gradient-text">Stack</span>
//           </h2>
//           <div className="flex flex-wrap gap-3 justify-center">
//             {["React", "Next.js", "TypeScript", "Tailwind CSS", "Node.js", "MongoDB", "PostgreSQL", "AWS"].map((tech, index) => (
//               <span
//                 key={index}
//                 className="px-4 py-2 bg-card border border-border rounded-full text-sm font-semibold shadow-sm"
//               >
//                 {tech}
//               </span>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* CTA */}
//       <section className="py-20 bg-gradient-subtle">
//         <div className="container mx-auto px-4 text-center">
//           <h2 className="text-3xl lg:text-4xl font-bold mb-6">
//             Ready to Get <span className="gradient-text">Started?</span>
//           </h2>
//           <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
//             Let's discuss your website project and bring your vision to life
//           </p>
//           <div className="flex flex-wrap gap-4 justify-center">
//             <Button className="gradient-primary text-white font-semibold shadow-glow">
//               Book Free Session
//             </Button>
//             <Button
//               onClick={() => window.open(whatsappUrl, "_blank")}
//               className="bg-green-500 hover:bg-green-600 text-white"
//             >
//               <MessageCircle className="w-4 h-4 mr-2" />
//               Chat on WhatsApp
//             </Button>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default WebsiteDevelopment;


import { Button } from "@/components/ui/button";
import { Code, Smartphone, Zap, Shield, MessageCircle, CheckCircle, Users, TrendingUp, Globe, Layers, Server, Lock, Rocket, Clock, BarChart, Headphones } from "lucide-react";

const WebsiteDevelopment = () => {
  const features = [
    {
      icon: Code,
      title: "Modern Frameworks",
      description: "React, Next.js, Vue.js, and Angular for cutting-edge solutions",
    },
    {
      icon: Smartphone,
      title: "Responsive Design",
      description: "Pixel-perfect across all devices and screen sizes",
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Optimized for sub-second load times",
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Bank-level encryption and security protocols",
    },
    {
      icon: Globe,
      title: "SEO Optimized",
      description: "Built to rank high on search engines",
    },
    {
      icon: Server,
      title: "Scalable Infrastructure",
      description: "Grow from 100 to 1M users seamlessly",
    },
  ];

  const services = [
    {
      title: "Custom Web Applications",
      description: "Tailored solutions built from scratch to match your exact business requirements and workflows.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
    },
    {
      title: "E-Commerce Platforms",
      description: "Full-featured online stores with payment integration, inventory management, and analytics.",
      image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=600&fit=crop",
    },
    {
      title: "SaaS Applications",
      description: "Cloud-based software solutions with subscription management and multi-tenant architecture.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
    },
    {
      title: "Progressive Web Apps",
      description: "Mobile-first applications that work offline and provide native app-like experiences.",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop",
    },
  ];

  const process = [
    {
      step: "01",
      title: "Discovery & Planning",
      description: "We analyze your requirements, target audience, and business goals to create a comprehensive project roadmap.",
    },
    {
      step: "02",
      title: "Design & Prototyping",
      description: "Our designers create intuitive UI/UX designs and interactive prototypes for your approval.",
    },
    {
      step: "03",
      title: "Development & Testing",
      description: "Our developers build your application using agile methodology with continuous testing and quality assurance.",
    },
    {
      step: "04",
      title: "Deployment & Support",
      description: "We launch your application and provide ongoing maintenance, updates, and technical support.",
    },
  ];

  const stats = [
    { number: "500+", label: "Projects Delivered" },
    { number: "98%", label: "Client Satisfaction" },
    { number: "24/7", label: "Support Available" },
    { number: "50+", label: "Expert Developers" },
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO, TechStart Inc.",
      content: "They transformed our vision into a stunning web application. The attention to detail and technical expertise was outstanding.",
      rating: 5,
    },
    {
      name: "Michael Chen",
      role: "Founder, E-Shop Pro",
      content: "Our e-commerce platform handles thousands of transactions daily without any issues. Best investment we made!",
      rating: 5,
    },
    {
      name: "Emily Rodriguez",
      role: "Marketing Director, GrowthCo",
      content: "The team delivered ahead of schedule and exceeded all our expectations. Highly professional and responsive.",
      rating: 5,
    },
  ];

  const phoneNumber = "919335059380";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent("Hi! I'm interested in Website Development services.")}`;

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative py-24 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-500 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container relative z-10 mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-semibold mb-6">
              🚀 Transform Your Business Digital Presence
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
              Professional Website & Web Application Development
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto mb-10 leading-relaxed">
              Build stunning, high-performance web solutions that engage users, drive conversions, and scale with your business growth
            </p>
            <div className="flex flex-wrap gap-4 justify-center mb-12">
              <Button className="bg-white text-purple-600 hover:bg-gray-100 font-semibold text-lg px-8 py-6 shadow-2xl">
                Book Free Consultation
              </Button>
              <Button
                onClick={() => window.open(whatsappUrl, "_blank")}
                className="bg-green-500 hover:bg-green-600 text-white font-semibold text-lg px-8 py-6 shadow-2xl"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Chat on WhatsApp
              </Button>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl lg:text-5xl font-bold mb-2">{stat.number}</div>
                  <div className="text-white/80 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Overview with Image */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                Why Choose Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Development Services?</span>
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                We specialize in creating custom web applications that solve real business problems. Our team of expert developers combines technical excellence with creative design to deliver solutions that exceed expectations.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                From startups to enterprise-level organizations, we've helped hundreds of businesses establish their digital presence and achieve measurable results through innovative web solutions.
              </p>
              <div className="space-y-4">
                {[
                  "Clean, maintainable code architecture",
                  "Agile development methodology",
                  "Regular progress updates and demos",
                  "Post-launch support and maintenance",
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop"
                alt="Team collaboration on web development"
                className="rounded-2xl shadow-2xl w-full"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl">
                <div className="flex items-center gap-3">
                  <Users className="w-8 h-8 text-purple-600" />
                  <div>
                    <div className="text-2xl font-bold">15+ Years</div>
                    <div className="text-sm text-gray-600">Industry Experience</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Development Services</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive web development solutions tailored to your unique business needs
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-56 object-cover"
                />
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl lg:text-5xl font-bold text-center mb-16">
            Core <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Features</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="w-16 h-16 mb-6 rounded-xl bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center text-white shadow-lg">
                  <feature.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              Our Development <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Process</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              A proven methodology that ensures quality, transparency, and timely delivery
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {process.map((item, index) => (
              <div key={index} className="relative">
                <div className="bg-gradient-to-br from-blue-600 to-purple-600 text-white text-3xl font-bold w-16 h-16 rounded-full flex items-center justify-center mb-6 shadow-lg">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
                {index < process.length - 1 && (
                  <div className="hidden lg:block absolute top-8 -right-4 w-8 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              Cutting-Edge <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Technology Stack</span>
            </h2>
            <p className="text-lg text-gray-300">
              We use the latest technologies and frameworks to build robust, scalable applications
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-12 max-w-5xl mx-auto">
            <div>
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                <Code className="w-6 h-6 text-blue-400" />
                Frontend
              </h3>
              <div className="space-y-3">
                {["React.js", "Next.js", "Vue.js", "TypeScript", "Tailwind CSS", "Redux"].map((tech, index) => (
                  <div key={index} className="bg-gray-800 px-4 py-3 rounded-lg text-sm font-semibold border border-gray-700 hover:border-blue-500 transition-colors">
                    {tech}
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                <Server className="w-6 h-6 text-purple-400" />
                Backend
              </h3>
              <div className="space-y-3">
                {["Node.js", "Express.js", "Python", "Django", "PostgreSQL", "MongoDB"].map((tech, index) => (
                  <div key={index} className="bg-gray-800 px-4 py-3 rounded-lg text-sm font-semibold border border-gray-700 hover:border-purple-500 transition-colors">
                    {tech}
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                <Layers className="w-6 h-6 text-pink-400" />
                Infrastructure
              </h3>
              <div className="space-y-3">
                {["AWS", "Docker", "Kubernetes", "CI/CD", "Redis", "Nginx"].map((tech, index) => (
                  <div key={index} className="bg-gray-800 px-4 py-3 rounded-lg text-sm font-semibold border border-gray-700 hover:border-pink-500 transition-colors">
                    {tech}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              Client <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Success Stories</span>
            </h2>
            <p className="text-lg text-gray-600">
              Don't just take our word for it - hear from our satisfied clients
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-xl">★</span>
                  ))}
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed italic">"{testimonial.content}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center text-white font-bold">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-bold">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <img
                  src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=600&fit=crop"
                  alt="Developer working on code"
                  className="rounded-2xl shadow-2xl"
                />
              </div>
              <div>
                <h2 className="text-4xl lg:text-5xl font-bold mb-8">
                  Benefits of Working <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">With Us</span>
                </h2>
                <div className="space-y-6">
                  {[
                    { icon: Clock, title: "On-Time Delivery", desc: "We respect deadlines and deliver projects on schedule" },
                    { icon: TrendingUp, title: "Scalable Solutions", desc: "Built to grow with your business needs" },
                    { icon: Lock, title: "Data Security", desc: "Enterprise-grade security and compliance" },
                    { icon: Headphones, title: "24/7 Support", desc: "Round-the-clock technical assistance" },
                    { icon: BarChart, title: "Performance Analytics", desc: "Detailed insights and monitoring" },
                    { icon: Rocket, title: "Fast Deployment", desc: "Quick launch with zero downtime" },
                  ].map((benefit, index) => (
                    <div key={index} className="flex gap-4">
                      <div className="w-12 h-12 flex-shrink-0 rounded-lg bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center text-white">
                        <benefit.icon className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-1">{benefit.title}</h3>
                        <p className="text-gray-600">{benefit.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-500 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container relative z-10 mx-auto px-4 text-center">
          <h2 className="text-4xl lg:text-6xl font-bold mb-6">
            Ready to Build Something <span className="text-yellow-300">Amazing?</span>
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto mb-10 leading-relaxed">
            Let's discuss your project and turn your vision into a powerful web application that drives real business results
          </p>
          <div className="flex flex-wrap gap-6 justify-center">
            <Button className="bg-white text-purple-600 hover:bg-gray-100 font-semibold text-lg px-10 py-6 shadow-2xl">
              Schedule Free Consultation
            </Button>
            <Button
              onClick={() => window.open(whatsappUrl, "_blank")}
              className="bg-green-500 hover:bg-green-600 text-white font-semibold text-lg px-10 py-6 shadow-2xl"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Chat on WhatsApp
            </Button>
          </div>
          <div className="mt-12 text-white/80">
            <p className="text-sm">✓ Free consultation • ✓ No obligation quote • ✓ Fast response time</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WebsiteDevelopment;