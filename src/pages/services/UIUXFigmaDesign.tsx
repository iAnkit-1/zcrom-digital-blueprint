import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Palette, Figma, Layers, Smartphone, Monitor, Zap, Users, Target, TrendingUp, Eye, MousePointer, Heart, CheckCircle, Award, Rocket, Clock, BarChart, Lightbulb, Sparkles, MessageCircle, Star, Layout, PenTool, Code, Globe, Settings, FileText } from "lucide-react";

const UIUXFigmaDesign = () => {
  const services = [
    {
      icon: Palette,
      title: "UI Design",
      description: "Beautiful, modern interfaces that capture attention and drive engagement with pixel-perfect precision",
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=600&fit=crop",
    },
    {
      icon: Users,
      title: "UX Research & Strategy",
      description: "Data-driven user research, personas, and journey mapping to create intuitive experiences",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop",
    },
    {
      icon: Figma,
      title: "Figma Prototyping",
      description: "Interactive, high-fidelity prototypes that bring your vision to life before development",
      image: "https://images.unsplash.com/photo-1609921212029-bb5a28e60960?w=800&h=600&fit=crop",
    },
    {
      icon: Smartphone,
      title: "Mobile App Design",
      description: "Native iOS and Android designs optimized for touch interactions and mobile behavior",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop",
    },
    {
      icon: Monitor,
      title: "Web App Design",
      description: "Responsive web applications with seamless experiences across all devices and browsers",
      image: "https://images.unsplash.com/photo-1547658719-da2b51169166?w=800&h=600&fit=crop",
    },
    {
      icon: Layout,
      title: "Design Systems",
      description: "Comprehensive design systems and component libraries for consistent brand experiences",
      image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=800&h=600&fit=crop",
    },
  ];

  const designProcess = [
    {
      step: "01",
      title: "Discovery & Research",
      description: "Deep dive into your business goals, target audience, and competitive landscape through user interviews and market analysis",
    },
    {
      step: "02",
      title: "User Personas & Journey Maps",
      description: "Create detailed user personas and map customer journeys to identify pain points and opportunities",
    },
    {
      step: "03",
      title: "Wireframing & Information Architecture",
      description: "Structure content and create low-fidelity wireframes to establish optimal user flows",
    },
    {
      step: "04",
      title: "Visual Design & Branding",
      description: "Craft stunning visual designs aligned with your brand identity using color theory and typography",
    },
    {
      step: "05",
      title: "Interactive Prototyping",
      description: "Build clickable, interactive prototypes in Figma for user testing and stakeholder feedback",
    },
    {
      step: "06",
      title: "Usability Testing & Iteration",
      description: "Conduct user testing sessions, gather feedback, and refine designs for optimal usability",
    },
  ];

  const portfolio = [
    {
      title: "FinTech Mobile Banking App",
      description: "Redesigned mobile banking experience increasing user engagement by 85% and reducing support tickets by 60%",
      metrics: ["85% more engagement", "60% fewer support tickets", "4.8★ app store rating"],
      image: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=800&h=600&fit=crop",
      category: "Mobile App",
    },
    {
      title: "SaaS Dashboard Redesign",
      description: "Complete dashboard overhaul for analytics platform improving task completion rate by 70% and user satisfaction",
      metrics: ["70% faster task completion", "95% user satisfaction", "40% increase in feature adoption"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
      category: "Web App",
    },
    {
      title: "E-Commerce Platform UI",
      description: "Modern e-commerce design increasing conversion rate by 45% through optimized checkout flow and visual hierarchy",
      metrics: ["45% higher conversion", "30% larger cart size", "2x mobile sales"],
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
      category: "E-Commerce",
    },
    {
      title: "Healthcare Patient Portal",
      description: "HIPAA-compliant patient portal with intuitive appointment booking and medical records access",
      metrics: ["90% appointment self-service", "50% reduced phone calls", "98% satisfaction score"],
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=600&fit=crop",
      category: "Healthcare",
    },
    {
      title: "Real Estate Marketplace",
      description: "Property search platform with advanced filters, virtual tours, and AI-powered recommendations",
      metrics: ["3x longer session time", "65% more inquiries", "Top 5 in category"],
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop",
      category: "Marketplace",
    },
    {
      title: "EdTech Learning Platform",
      description: "Gamified learning experience for students with progress tracking and interactive lessons",
      metrics: ["80% course completion", "4.9★ student rating", "2x engagement"],
      image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&h=600&fit=crop",
      category: "Education",
    },
  ];

  const features = [
    {
      icon: Eye,
      title: "User-Centered Design",
      description: "Every design decision backed by user research and testing",
    },
    {
      icon: Zap,
      title: "Fast Turnaround",
      description: "Deliver high-quality designs in weeks, not months",
    },
    {
      icon: MousePointer,
      title: "Interactive Prototypes",
      description: "Clickable prototypes that feel like real products",
    },
    {
      icon: Layers,
      title: "Design Systems",
      description: "Scalable component libraries for consistency",
    },
    {
      icon: Target,
      title: "Conversion Focused",
      description: "Designs optimized for business goals and KPIs",
    },
    {
      icon: Heart,
      title: "Accessibility First",
      description: "WCAG compliant designs for all users",
    },
  ];

  const tools = [
    { name: "Figma", icon: Figma, color: "from-purple-500 to-pink-500" },
    { name: "Adobe XD", icon: PenTool, color: "from-pink-500 to-red-500" },
    { name: "Sketch", icon: Layout, color: "from-yellow-500 to-orange-500" },
    { name: "Photoshop", icon: Palette, color: "from-blue-500 to-cyan-500" },
    { name: "Illustrator", icon: Star, color: "from-orange-500 to-red-500" },
    { name: "After Effects", icon: Zap, color: "from-purple-500 to-blue-500" },
  ];

  const testimonials = [
    {
      name: "Jessica Brown",
      role: "Product Manager, StartupX",
      content: "The UI/UX redesign transformed our product. User engagement increased by 85% and our conversion rate doubled. Best investment we made!",
      rating: 5,
      avatar: "JB",
    },
    {
      name: "David Lee",
      role: "CEO, TechFlow Solutions",
      content: "Their Figma prototypes were so detailed that development was seamless. They truly understand both design and business needs.",
      rating: 5,
      avatar: "DL",
    },
    {
      name: "Amanda Singh",
      role: "Marketing Director, GrowthCo",
      content: "Working with them was a dream. Fast iterations, beautiful designs, and they really listened to our feedback throughout.",
      rating: 5,
      avatar: "AS",
    },
  ];

  const stats = [
    { number: "500+", label: "Designs Delivered" },
    { number: "98%", label: "Client Satisfaction" },
    { number: "4.9★", label: "Average Rating" },
    { number: "150+", label: "Happy Clients" },
  ];

  const industries = [
    { name: "FinTech", image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=400&h=300&fit=crop" },
    { name: "Healthcare", image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=400&h=300&fit=crop" },
    { name: "E-Commerce", image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop" },
    { name: "SaaS", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop" },
    { name: "Education", image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=400&h=300&fit=crop" },
    { name: "Real Estate", image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=400&h=300&fit=crop" },
  ];

  const benefits = [
    { icon: TrendingUp, title: "Increase Conversions", desc: "Optimized user flows that drive 40%+ conversion increases" },
    { icon: Heart, title: "Boost User Satisfaction", desc: "Intuitive designs that users love and recommend" },
    { icon: Clock, title: "Reduce Development Time", desc: "Detailed specs and components speed up development by 50%" },
    { icon: Target, title: "Lower Support Costs", desc: "Clear interfaces reduce customer support needs by 60%" },
    { icon: Award, title: "Stand Out from Competition", desc: "Premium designs that differentiate your brand" },
    { icon: Rocket, title: "Scale with Confidence", desc: "Design systems that grow with your product" },
  ];

  const phoneNumber = "919696726607";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent("Hi! I'm interested in UI/UX & Figma Design services")}`;

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative py-20 bg-gradient-to-br from-pink-500 via-purple-500 to-indigo-600 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-semibold mb-4">
              🎨 Award-Winning Design Agency
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold mb-4 leading-tight">
              UI/UX & Figma Design Services
            </h1>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Transform your digital products with stunning, user-centered designs that drive engagement, conversions, and business growth
            </p>
            <div className="flex flex-wrap gap-4 justify-center mb-10">
              <Button 
                size="lg" 
                className="bg-white text-pink-600 hover:bg-gray-100 font-semibold text-lg px-8 py-6 shadow-2xl"
                onClick={() => window.open(whatsappUrl, "_blank")}
              >
                Get Free Design Consultation
              </Button>
              <Button 
                size="lg" 
                className="bg-green-500 hover:bg-green-600 text-white font-semibold text-lg px-8 py-6 shadow-2xl"
                onClick={() => window.open(whatsappUrl, "_blank")}
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Chat on WhatsApp
              </Button>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl lg:text-5xl font-bold mb-1">{stat.number}</div>
                  <div className="text-white/80 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-10 items-center max-w-6xl mx-auto">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold mb-4">
                Design That Drives <span className="bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">Real Results</span>
              </h2>
              <p className="text-lg text-gray-600 mb-4 leading-relaxed">
                Great design isn't just about aesthetics—it's about solving problems and achieving business goals. We create beautiful, intuitive interfaces that users love and that drive measurable results for your business.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Our design philosophy combines user research, data analytics, and creative excellence to deliver experiences that convert. From initial concept to final prototype, we ensure every pixel serves a purpose.
              </p>
              <div className="space-y-3">
                {[
                  "40%+ average increase in conversion rates",
                  "User-tested designs backed by real data",
                  "Complete Figma files and design systems",
                  "Seamless handoff to developers",
                  "Unlimited revisions until you're satisfied",
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=800&h=600&fit=crop"
                alt="Designer working on UI"
                className="rounded-2xl shadow-2xl w-full"
              />
              <div className="absolute -bottom-4 -left-4 bg-white p-6 rounded-xl shadow-xl">
                <div className="flex items-center gap-3">
                  <Sparkles className="w-8 h-8 text-pink-600" />
                  <div>
                    <div className="text-2xl font-bold">Design Excellence</div>
                    <div className="text-sm text-gray-600">Award-Winning Work</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold mb-3">
              Our Design <span className="bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">Services</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive UI/UX design solutions for web and mobile applications
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
                >
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-pink-600 to-purple-600 flex items-center justify-center mb-4">
                      <Icon className="text-white" size={24} />
                    </div>
                    <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-gradient-to-br from-pink-50 to-purple-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl lg:text-5xl font-bold text-center mb-12">
            Why Choose Our <span className="bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">Design Team?</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="bg-white border border-gray-200 rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300"
                >
                  <div className="w-14 h-14 mb-4 rounded-xl bg-gradient-to-br from-pink-600 to-purple-600 flex items-center justify-center text-white shadow-lg">
                    <Icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Portfolio */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold mb-3">
              Featured <span className="bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">Projects</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Real results from designs we've created for forward-thinking companies
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {portfolio.map((project, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-3 right-3 bg-white px-3 py-1 rounded-full text-xs font-semibold text-gray-700">
                    {project.category}
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-lg">{project.title}</CardTitle>
                  <CardDescription className="text-sm mt-2 leading-relaxed">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {project.metrics.map((metric, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <TrendingUp className="w-4 h-4 text-green-500" />
                        <span className="text-xs text-gray-600">{metric}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Design Process */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold mb-3">
              Our Design <span className="bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">Process</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              A proven methodology that delivers exceptional user experiences
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {designProcess.map((item, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg">
                <div className="bg-gradient-to-br from-pink-600 to-purple-600 text-white text-2xl font-bold w-12 h-12 rounded-full flex items-center justify-center mb-4 shadow-lg">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tools */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold mb-3">
              Design <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">Tools We Master</span>
            </h2>
            <p className="text-lg text-gray-300">
              Industry-leading tools for creating exceptional digital experiences
            </p>
          </div>
          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-6 max-w-5xl mx-auto">
            {tools.map((tool, index) => {
              const Icon = tool.icon;
              return (
                <div
                  key={index}
                  className="bg-gray-800 rounded-xl p-6 text-center hover:bg-gray-750 transition-all duration-300 transform hover:-translate-y-1"
                >
                  <div className={`w-14 h-14 mx-auto mb-4 rounded-lg bg-gradient-to-br ${tool.color} flex items-center justify-center`}>
                    <Icon className="text-white" size={28} />
                  </div>
                  <div className="font-bold">{tool.name}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-10 items-center">
              <div>
                <img
                  src="https://images.unsplash.com/photo-1572044162444-ad60f128bdea?w=800&h=600&fit=crop"
                  alt="Design team brainstorming"
                  className="rounded-2xl shadow-2xl"
                />
              </div>
              <div>
                <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                  Business Impact of <span className="bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">Great Design</span>
                </h2>
                <div className="space-y-4">
                  {benefits.map((benefit, index) => {
                    const Icon = benefit.icon;
                    return (
                      <div key={index} className="flex gap-4">
                        <div className="w-12 h-12 flex-shrink-0 rounded-lg bg-gradient-to-br from-pink-600 to-purple-600 flex items-center justify-center text-white">
                          <Icon className="w-6 h-6" />
                        </div>
                        <div>
                          <h3 className="text-lg font-bold mb-1">{benefit.title}</h3>
                          <p className="text-gray-600 text-sm">{benefit.desc}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold mb-3">
              Industries <span className="bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">We Serve</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Specialized design solutions across multiple sectors
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-6xl mx-auto">
            {industries.map((industry, index) => (
              <div key={index} className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300">
                <img src={industry.image} alt={industry.name} className="w-full h-32 object-cover group-hover:scale-110 transition-transform duration-300" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-3">
                  <span className="text-white font-bold text-sm">{industry.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gradient-to-br from-pink-50 to-purple-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold mb-3">
              Client <span className="bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">Love</span>
            </h2>
            <p className="text-lg text-gray-600">
              Hear from businesses we've helped transform through design
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg">
                <div className="flex gap-1 mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-lg">★</span>
                  ))}
                </div>
                <p className="text-gray-700 mb-4 leading-relaxed italic text-sm">"{testimonial.content}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-pink-600 to-purple-600 flex items-center justify-center text-white font-bold">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-bold text-sm">{testimonial.name}</div>
                    <div className="text-xs text-gray-600">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study Highlight */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto bg-gradient-to-br from-pink-600 to-purple-600 rounded-2xl overflow-hidden shadow-2xl">
            <div className="grid lg:grid-cols-2">
              <div className="p-10 text-white">
                <div className="inline-block px-3 py-1 bg-white/20 rounded-full text-sm font-semibold mb-4">
                  Featured Case Study
                </div>
                <h3 className="text-3xl font-bold mb-4">
                  E-Commerce Redesign: 45% Conversion Increase
                </h3>
                <p className="text-white/90 mb-6 leading-relaxed">
                  Complete UI/UX overhaul of a fashion e-commerce platform. Through extensive user research, A/B testing, and iterative design, we simplified the checkout process, improved product discovery, and created a mobile-first experience.
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5" />
                    <span>45% increase in conversion rate</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5" />
                    <span>30% larger average order value</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5" />
                    <span>2x mobile sales in first month</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5" />
                    <span>60% reduction in cart abandonment</span>
                  </div>
                </div>
                <Button className="bg-white text-pink-600 hover:bg-gray-100 font-semibold">
                  View Full Case Study
                </Button>
              </div>
              <div className="relative h-full min-h-[400px]">
                <img
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop"
                  alt="E-commerce dashboard"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Design Principles */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold mb-3">
              Our Design <span className="bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">Principles</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              The foundation of every exceptional design we create
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              {
                icon: Users,
                title: "User First",
                description: "Every decision driven by user needs and behavior data",
              },
              {
                icon: Eye,
                title: "Visual Hierarchy",
                description: "Clear information structure guiding users naturally",
              },
              {
                icon: Zap,
                title: "Performance",
                description: "Fast, responsive designs optimized for all devices",
              },
              {
                icon: Heart,
                title: "Accessibility",
                description: "Inclusive designs that work for everyone",
              },
              {
                icon: Lightbulb,
                title: "Innovation",
                description: "Fresh ideas that push boundaries while staying usable",
              },
              {
                icon: Target,
                title: "Goal-Oriented",
                description: "Designs aligned with business objectives and KPIs",
              },
              {
                icon: Settings,
                title: "Consistency",
                description: "Cohesive experiences across all touchpoints",
              },
              {
                icon: BarChart,
                title: "Data-Driven",
                description: "Decisions backed by analytics and user testing",
              },
            ].map((principle, index) => {
              const Icon = principle.icon;
              return (
                <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-pink-600 to-purple-600 flex items-center justify-center mb-4">
                    <Icon className="text-white" size={24} />
                  </div>
                  <h3 className="text-lg font-bold mb-2">{principle.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{principle.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Before/After Showcase */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold mb-3">
              Transformation <span className="bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">Stories</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              See the dramatic impact of professional UI/UX design
            </p>
          </div>
          <div className="max-w-5xl mx-auto space-y-12">
            {[
              {
                title: "SaaS Dashboard Modernization",
                before: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
                after: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
                improvements: ["70% faster task completion", "Clean, modern interface", "Improved data visualization"],
              },
              {
                title: "Mobile Banking App Redesign",
                before: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=600&h=400&fit=crop",
                after: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=600&h=400&fit=crop",
                improvements: ["85% increase in engagement", "Simplified navigation", "Enhanced security features"],
              },
            ].map((showcase, index) => (
              <div key={index} className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-2xl p-8">
                <h3 className="text-2xl font-bold mb-6 text-center">{showcase.title}</h3>
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <div className="text-sm font-semibold text-gray-500 mb-2 text-center">BEFORE</div>
                    <img src={showcase.before} alt="Before design" className="rounded-xl shadow-lg w-full" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent mb-2 text-center">AFTER</div>
                    <img src={showcase.after} alt="After design" className="rounded-xl shadow-lg w-full" />
                  </div>
                </div>
                <div className="flex flex-wrap gap-3 justify-center">
                  {showcase.improvements.map((improvement, idx) => (
                    <div key={idx} className="bg-white px-4 py-2 rounded-full text-sm font-semibold border-2 border-pink-200">
                      ✓ {improvement}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Figma Deliverables */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-10 items-center">
              <div>
                <h2 className="text-4xl lg:text-5xl font-bold mb-4">
                  Complete Figma <span className="bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">Deliverables</span>
                </h2>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  You receive comprehensive Figma files with everything developers need for pixel-perfect implementation. Our deliverables ensure smooth handoff and faster development.
                </p>
                <div className="space-y-4">
                  {[
                    { icon: Figma, title: "Complete Figma Files", desc: "Organized, named layers and components" },
                    { icon: Layers, title: "Design System", desc: "Reusable components and style guide" },
                    { icon: MousePointer, title: "Interactive Prototypes", desc: "Clickable flows for user testing" },
                    { icon: Code, title: "Developer Specs", desc: "CSS values, spacing, and assets" },
                    { icon: Globe, title: "Responsive Layouts", desc: "Desktop, tablet, and mobile views" },
                    { icon: FileText, title: "Documentation", desc: "Design rationale and usage guidelines" },
                  ].map((item, index) => {
                    const Icon = item.icon;
                    return (
                      <div key={index} className="flex gap-4 bg-white rounded-lg p-4 shadow-sm">
                        <div className="w-10 h-10 flex-shrink-0 rounded-lg bg-gradient-to-br from-pink-600 to-purple-600 flex items-center justify-center text-white">
                          <Icon className="w-5 h-5" />
                        </div>
                        <div>
                          <h3 className="font-bold mb-1">{item.title}</h3>
                          <p className="text-gray-600 text-sm">{item.desc}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div>
                <img
                  src="https://images.unsplash.com/photo-1609921212029-bb5a28e60960?w=800&h=600&fit=crop"
                  alt="Figma design system"
                  className="rounded-2xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Packages */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold mb-3">
              Design <span className="bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">Packages</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Flexible packages to match your project needs and budget
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              {
                name: "Starter",
                price: "Contact Us",
                description: "Perfect for small projects and MVPs",
                features: [
                  "Up to 10 screens",
                  "2 rounds of revisions",
                  "Mobile OR Desktop",
                  "Basic prototyping",
                  "Figma source files",
                  "2-week delivery",
                ],
                popular: false,
              },
              {
                name: "Professional",
                price: "Contact Us",
                description: "Ideal for growing businesses",
                features: [
                  "Up to 25 screens",
                  "Unlimited revisions",
                  "Mobile + Desktop + Tablet",
                  "Advanced prototyping",
                  "Design system included",
                  "User testing session",
                  "3-week delivery",
                ],
                popular: true,
              },
              {
                name: "Enterprise",
                price: "Contact Us",
                description: "For complex applications",
                features: [
                  "Unlimited screens",
                  "Unlimited revisions",
                  "All device types",
                  "Interactive prototypes",
                  "Complete design system",
                  "Multiple user testing",
                  "Ongoing support",
                  "Priority delivery",
                ],
                popular: false,
              },
            ].map((pkg, index) => (
              <div
                key={index}
                className={`relative bg-white rounded-2xl p-8 shadow-lg ${
                  pkg.popular ? "border-4 border-pink-500 scale-105" : "border-2 border-gray-200"
                } hover:shadow-2xl transition-all duration-300`}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-pink-600 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-bold">
                    MOST POPULAR
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold mb-2">{pkg.name}</h3>
                  <div className="text-3xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent mb-2">
                    {pkg.price}
                  </div>
                  <p className="text-sm text-gray-600">{pkg.description}</p>
                </div>
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-sm text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  className={`w-full ${
                    pkg.popular
                      ? "bg-gradient-to-r from-pink-600 to-purple-600 text-white hover:opacity-90"
                      : "bg-gray-100 text-gray-900 hover:bg-gray-200"
                  }`}
                  onClick={() => window.open(whatsappUrl, "_blank")}
                >
                  Get Started
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl lg:text-5xl font-bold mb-3">
                Frequently Asked <span className="bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">Questions</span>
              </h2>
            </div>
            <div className="space-y-4">
              {[
                {
                  q: "What's the typical timeline for a UI/UX project?",
                  a: "Projects typically take 2-6 weeks depending on complexity. Simple landing pages can be done in 2 weeks, while complex applications may take 4-6 weeks including research and testing.",
                },
                {
                  q: "Do you provide development services too?",
                  a: "While we specialize in design, we work closely with development teams and provide detailed specifications for seamless implementation. We can also recommend trusted development partners.",
                },
                {
                  q: "What format will the final deliverables be in?",
                  a: "You receive complete Figma files with organized layers, a design system, interactive prototypes, and exported assets. We also provide documentation for developers.",
                },
                {
                  q: "How many revision rounds are included?",
                  a: "Our Professional and Enterprise packages include unlimited revisions. Starter packages include 2 rounds. We work iteratively to ensure you're satisfied with the final design.",
                },
                {
                  q: "Do you do user testing?",
                  a: "Yes! We conduct usability testing with real users to validate designs before final delivery. This ensures the design actually works for your target audience.",
                },
              ].map((faq, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-md">
                  <h3 className="text-lg font-bold mb-2">{faq.q}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-pink-600 via-purple-600 to-indigo-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container relative z-10 mx-auto px-4 text-center">
          <h2 className="text-4xl lg:text-6xl font-bold mb-4">
            Ready to Create Something <span className="text-yellow-300">Beautiful?</span>
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8 leading-relaxed">
            Let's transform your product with exceptional UI/UX design that users love and that drives measurable business results
          </p>
          <div className="flex flex-wrap gap-6 justify-center">
            <Button 
              size="lg" 
              className="bg-white text-pink-600 hover:bg-gray-100 font-semibold text-lg px-10 py-6 shadow-2xl"
              onClick={() => window.open(whatsappUrl, "_blank")}
            >
              Schedule Free Design Consultation
            </Button>
            <Button 
              size="lg"
              className="bg-green-500 hover:bg-green-600 text-white font-semibold text-lg px-10 py-6 shadow-2xl"
              onClick={() => window.open(whatsappUrl, "_blank")}
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Chat on WhatsApp
            </Button>
          </div>
          <div className="mt-10 text-white/80">
            <p className="text-sm">✓ Free design audit • ✓ Portfolio review • ✓ Custom proposal • ✓ No commitment required</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default UIUXFigmaDesign;