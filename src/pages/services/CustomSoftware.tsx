
import { Button } from "@/components/ui/button";
import { Cpu, Database, GitBranch, Layers, MessageCircle, CheckCircle, Users, TrendingUp, Globe, Server, Lock, Rocket, Clock, BarChart, Headphones, Code, Zap, Shield, Settings, FileText, Target, Award, ThumbsUp, Briefcase, Package, Workflow, Cloud, Timer, Sparkles, ArrowRight } from "lucide-react";

const CustomSoftware = () => {
  const features = [
    { icon: Cpu, title: "Tailored Solutions", description: "Custom-built for your exact business requirements" },
    { icon: Database, title: "Scalable Architecture", description: "Designed to handle growth seamlessly" },
    { icon: GitBranch, title: "Agile Development", description: "Iterative approach with continuous feedback" },
    { icon: Layers, title: "Full-Stack Expertise", description: "Complete end-to-end solution delivery" },
    { icon: Shield, title: "Enterprise Security", description: "Military-grade data protection" },
    { icon: Zap, title: "High Performance", description: "Optimized for speed and efficiency" },
  ];

  const services = [
    {
      title: "Enterprise Resource Planning (ERP)",
      description: "Centralized systems to manage all business processes including inventory, accounting, HR, and supply chain in one unified platform.",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop",
    },
    {
      title: "Customer Relationship Management (CRM)",
      description: "Custom CRM solutions to track customer interactions, manage sales pipelines, and automate marketing campaigns effectively.",
      image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&h=600&fit=crop",
    },
    {
      title: "Business Intelligence & Analytics",
      description: "Data-driven platforms with advanced analytics, real-time reporting, and predictive insights for informed decision making.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
    },
    {
      title: "Workflow Automation Systems",
      description: "Automate repetitive tasks, streamline processes, and eliminate manual bottlenecks to improve operational efficiency.",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop",
    },
    {
      title: "Document Management Systems",
      description: "Secure document storage, version control, collaboration tools, and intelligent search capabilities for your organization.",
      image: "https://images.unsplash.com/photo-1568992687947-868a62a9f521?w=800&h=600&fit=crop",
    },
    {
      title: "Supply Chain Management",
      description: "End-to-end supply chain solutions with inventory tracking, order management, logistics, and vendor coordination.",
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&h=600&fit=crop",
    },
  ];

  const process = [
    {
      step: "01",
      title: "Requirements Analysis",
      description: "Deep dive into your business needs, pain points, and objectives to create detailed specifications.",
    },
    {
      step: "02",
      title: "Architecture Design",
      description: "Design scalable system architecture with database schemas, API structures, and integration points.",
    },
    {
      step: "03",
      title: "Agile Development",
      description: "Build software in sprints with regular demos, testing, and iterative improvements based on feedback.",
    },
    {
      step: "04",
      title: "Quality Assurance",
      description: "Rigorous testing including unit tests, integration tests, security audits, and performance optimization.",
    },
    {
      step: "05",
      title: "Deployment & Training",
      description: "Smooth deployment with zero downtime, comprehensive documentation, and user training sessions.",
    },
    {
      step: "06",
      title: "Support & Maintenance",
      description: "Ongoing technical support, bug fixes, feature updates, and system monitoring for continuous improvement.",
    },
  ];

  const industries = [
    { name: "Healthcare", icon: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=400&h=300&fit=crop" },
    { name: "Finance & Banking", icon: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=400&h=300&fit=crop" },
    { name: "E-Commerce", icon: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop" },
    { name: "Manufacturing", icon: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop" },
    { name: "Education", icon: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=400&h=300&fit=crop" },
    { name: "Logistics", icon: "https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?w=400&h=300&fit=crop" },
  ];

  const stats = [
    { number: "300+", label: "Custom Solutions Built" },
    { number: "99%", label: "Client Retention Rate" },
    { number: "15+", label: "Years Experience" },
    { number: "40+", label: "Expert Developers" },
  ];

  const testimonials = [
    {
      name: "David Miller",
      role: "CTO, LogiTech Solutions",
      content: "Their custom ERP solution transformed our operations. We reduced processing time by 60% and increased accuracy significantly.",
      rating: 5,
    },
    {
      name: "Jennifer Wang",
      role: "Operations Manager, RetailPro",
      content: "The inventory management system they built handles our 50+ locations seamlessly. Best ROI we've achieved in years.",
      rating: 5,
    },
    {
      name: "Robert Thompson",
      role: "CEO, HealthCare Plus",
      content: "They delivered a HIPAA-compliant patient management system on time and within budget. Exceptional technical expertise!",
      rating: 5,
    },
  ];

  const technologies = {
    languages: ["Python", "Java", "C#", "JavaScript", "TypeScript", "Go", "Ruby", "PHP"],
    frameworks: [".NET Core", "Spring Boot", "Django", "Express.js", "ASP.NET", "Laravel", "Ruby on Rails"],
    databases: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "Oracle", "SQL Server", "Cassandra"],
    cloud: ["AWS", "Azure", "Google Cloud", "Docker", "Kubernetes", "Terraform", "Jenkins"],
  };

  const benefits = [
    { icon: Target, title: "Perfect Fit", desc: "Designed specifically for your workflows and processes" },
    { icon: TrendingUp, title: "Competitive Advantage", desc: "Unique features that set you apart from competitors" },
    { icon: Timer, title: "Time Efficiency", desc: "Automate tasks and eliminate manual work" },
    { icon: Lock, title: "Full Control", desc: "Complete ownership and customization rights" },
    { icon: Cloud, title: "Cloud-Native", desc: "Modern architecture for reliability and scale" },
    { icon: Headphones, title: "Dedicated Support", desc: "Priority technical assistance 24/7" },
  ];

  const phoneNumber = "919335059380";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent("Hi! I'm interested in Custom Software Development.")}`;

  return (
    <div className="min-h-screen pt-24">

      {/* Overview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-10 items-center max-w-6xl mx-auto">

            <div>
              <h2 className="text-4xl lg:text-5xl font-bold mb-4">
                Why Custom Software for <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Your Business?</span>
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                With 5+ years of experience, we've delivered mission-critical software for enterprises across healthcare, finance, manufacturing, and more. Our solutions reduce costs, improve efficiency, and scale with your growth.
              </p>
              <div className="space-y-3">
                {[
                  "100% tailored to your business needs",
                  "Full source code ownership",
                  "Seamless integration with existing systems",
                  "Scalable architecture for future growth",
                  "Comprehensive documentation & training",
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
              <div className="flex items-center gap-4 mt-6 justify-center md:justify-start">
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
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=600&fit=crop"
                alt="Software development team"
                className="rounded-2xl shadow-2xl w-full"
              />
              <div className="absolute -bottom-4 -left-4 bg-white p-6 rounded-xl shadow-xl">
                <div className="flex items-center gap-3">
                  <Award className="w-8 h-8 text-indigo-600" />
                  <div>
                    <div className="text-2xl font-bold">ISO Certified</div>
                    <div className="text-sm text-gray-600">Quality Assured</div>
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
              Custom Software <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Solutions We Build</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              From concept to deployment, we create software that drives your business forward
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {services.map((service, index) => (
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
                  <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-gradient-to-br from-indigo-50 to-purple-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl lg:text-5xl font-bold text-center mb-12">
            Core <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Capabilities</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <div className="w-14 h-14 mb-4 rounded-xl bg-gradient-to-br from-indigo-600 to-purple-600 flex items-center justify-center text-white shadow-lg">
                  <feature.icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold mb-3">
              Industries We <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Serve</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Delivering specialized solutions across multiple sectors
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-6xl mx-auto">
            {industries.map((industry, index) => (
              <div key={index} className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300">
                <img src={industry.icon} alt={industry.name} className="w-full h-32 object-cover group-hover:scale-110 transition-transform duration-300" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-3">
                  <span className="text-white font-bold text-sm">{industry.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold mb-3">
              Our Development <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Process</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Proven methodology delivering quality software on time and budget
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {process.map((item, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg">
                <div className="bg-gradient-to-br from-indigo-600 to-purple-600 text-white text-2xl font-bold w-12 h-12 rounded-full flex items-center justify-center mb-4 shadow-lg">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold mb-3">
              Advanced <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Technology Stack</span>
            </h2>
            <p className="text-lg text-gray-300">
              We leverage cutting-edge technologies to build robust, scalable solutions
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div>
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <Code className="w-6 h-6 text-indigo-400" />
                Languages
              </h3>
              <div className="space-y-2">
                {technologies.languages.map((tech, index) => (
                  <div key={index} className="bg-gray-800 px-3 py-2 rounded-lg text-sm font-semibold border border-gray-700 hover:border-indigo-500 transition-colors">
                    {tech}
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <Layers className="w-6 h-6 text-purple-400" />
                Frameworks
              </h3>
              <div className="space-y-2">
                {technologies.frameworks.map((tech, index) => (
                  <div key={index} className="bg-gray-800 px-3 py-2 rounded-lg text-sm font-semibold border border-gray-700 hover:border-purple-500 transition-colors">
                    {tech}
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <Database className="w-6 h-6 text-pink-400" />
                Databases
              </h3>
              <div className="space-y-2">
                {technologies.databases.map((tech, index) => (
                  <div key={index} className="bg-gray-800 px-3 py-2 rounded-lg text-sm font-semibold border border-gray-700 hover:border-pink-500 transition-colors">
                    {tech}
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <Server className="w-6 h-6 text-blue-400" />
                Cloud & DevOps
              </h3>
              <div className="space-y-2">
                {technologies.cloud.map((tech, index) => (
                  <div key={index} className="bg-gray-800 px-3 py-2 rounded-lg text-sm font-semibold border border-gray-700 hover:border-blue-500 transition-colors">
                    {tech}
                  </div>
                ))}
              </div>
            </div>
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
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop"
                  alt="Team working on custom software"
                  className="rounded-2xl shadow-2xl"
                />
              </div>
              <div>
                <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                  Why Choose <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Our Team?</span>
                </h2>
                <div className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex gap-4">
                      <div className="w-12 h-12 flex-shrink-0 rounded-lg bg-gradient-to-br from-indigo-600 to-purple-600 flex items-center justify-center text-white">
                        <benefit.icon className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold mb-1">{benefit.title}</h3>
                        <p className="text-gray-600 text-sm">{benefit.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gradient-to-br from-indigo-50 to-purple-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold mb-3">
              Client <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Success Stories</span>
            </h2>
            <p className="text-lg text-gray-600">
              Hear from businesses we've helped transform
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
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-600 to-purple-600 flex items-center justify-center text-white font-bold">
                    {testimonial.name.charAt(0)}
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
          <div className="max-w-6xl mx-auto bg-gradient-to-br from-indigo-600 to-purple-600 rounded-2xl overflow-hidden shadow-2xl">
            <div className="grid lg:grid-cols-2">
              <div className="p-10 text-white">
                <div className="inline-block px-3 py-1 bg-white/20 rounded-full text-sm font-semibold mb-4">
                  Featured Case Study
                </div>
                <h3 className="text-3xl font-bold mb-4">
                  Manufacturing ERP System
                </h3>
                <p className="text-white/90 mb-6 leading-relaxed">
                  Built a comprehensive ERP solution for a mid-sized manufacturer that integrated inventory management, production scheduling, quality control, and financial reporting into one unified platform.
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5" />
                    <span>70% reduction in manual data entry</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5" />
                    <span>Real-time inventory tracking across 5 warehouses</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5" />
                    <span>ROI achieved within 18 months</span>
                  </div>
                </div>
                <Button className="bg-white text-indigo-600 hover:bg-gray-100 font-semibold">
                  View Full Case Study
                </Button>
              </div>
              <div className="relative h-full min-h-[300px]">
                <img
                  src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&h=600&fit=crop"
                  alt="Case study"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-indigo-600 via-purple-600 to-blue-700 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container relative z-10 mx-auto px-4 text-center">
          <h2 className="text-4xl lg:text-6xl font-bold mb-4">
            Ready to Build Your <span className="text-yellow-300">Custom Solution?</span>
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8 leading-relaxed">
            Let's discuss your project requirements and create software that transforms your business operations
          </p>
          <div className="flex flex-wrap gap-6 justify-center">
            <Button className="bg-white text-indigo-600 hover:bg-gray-100 font-semibold text-lg px-10 py-6 shadow-2xl">
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
          <div className="mt-10 text-white/80">
            <p className="text-sm">✓ Free project assessment • ✓ Detailed proposal • ✓ No commitment required</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CustomSoftware;