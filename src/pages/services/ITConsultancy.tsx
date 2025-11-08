// 


import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Lightbulb, TrendingUp, Shield, MessageCircle, Cloud, Users, BarChart, Settings, Target, Award, CheckCircle, Rocket, Clock, Globe, Code, Database, Lock, Zap, FileText, Briefcase, LineChart, GitBranch, Server, Workflow, Headphones, Package, DollarSign, TrendingDown, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const ITConsultancy = () => {
  const navigate = useNavigate();
  const services = [
    {
      icon: Lightbulb,
      title: "IT Strategy & Planning",
      description: "Comprehensive technology roadmaps aligned with your business objectives and long-term vision",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop",
    },
    {
      icon: TrendingUp,
      title: "Digital Transformation",
      description: "End-to-end modernization strategies to drive innovation and competitive advantage",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop",
    },
    {
      icon: Cloud,
      title: "Cloud Migration & Strategy",
      description: "Strategic cloud adoption planning with AWS, Azure, and Google Cloud expertise",
      image: "https://images.unsplash.com/photo-1639322537228-f710d846310a?w=800&h=600&fit=crop",
    },
    {
      icon: Shield,
      title: "Cybersecurity Consulting",
      description: "Comprehensive security audits, compliance, and risk management strategies",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=600&fit=crop",
    },
    {
      icon: BarChart,
      title: "Technology Assessment",
      description: "Evaluate current infrastructure, identify gaps, and recommend optimal solutions",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
    },
    {
      icon: Users,
      title: "Change Management",
      description: "Guide teams through technology transitions with training and adoption strategies",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop",
    },
  ];

  const expertise = [
    {
      icon: Lightbulb,
      title: "Strategic Planning",
      description: "Technology roadmap and IT strategy aligned with business goals",
    },
    {
      icon: TrendingUp,
      title: "Digital Transformation",
      description: "Modernize operations with cutting-edge technologies",
    },
    {
      icon: Shield,
      title: "Security Consulting",
      description: "Protect assets with comprehensive security frameworks",
    },
    {
      icon: Cloud,
      title: "Cloud Strategy",
      description: "Optimize cloud adoption and multi-cloud architecture",
    },
    {
      icon: Settings,
      title: "IT Optimization",
      description: "Streamline processes and reduce operational costs",
    },
    {
      icon: Target,
      title: "Vendor Selection",
      description: "Choose the right technology partners and solutions",
    },
  ];

  const solutions = [
    {
      title: "IT Strategy & Roadmap Development",
      description: "Create comprehensive 3-5 year technology plans aligned with business objectives",
      benefits: ["Clear technology vision", "Budget planning", "Risk mitigation", "Competitive advantage"],
    },
    {
      title: "Cloud Migration Planning",
      description: "Strategic approach to moving workloads to cloud with minimal disruption",
      benefits: ["Cost analysis", "Migration roadmap", "Vendor selection", "Risk assessment"],
    },
    {
      title: "Security & Compliance Audit",
      description: "Comprehensive security assessments and compliance gap analysis",
      benefits: ["Vulnerability identification", "Compliance roadmap", "Risk prioritization", "Remediation plan"],
    },
    {
      title: "Technology Stack Assessment",
      description: "Evaluate current tech stack and recommend modern alternatives",
      benefits: ["Performance analysis", "Cost comparison", "Migration planning", "Team training"],
    },
    {
      title: "Digital Transformation Strategy",
      description: "Guide organizations through digital initiatives and process automation",
      benefits: ["Process mapping", "Tool selection", "Change management", "ROI tracking"],
    },
    {
      title: "IT Governance Framework",
      description: "Establish policies, procedures, and best practices for IT operations",
      benefits: ["Policy development", "Process documentation", "Compliance alignment", "Risk management"],
    },
  ];

  const projects = [
    {
      title: "Global Bank Digital Transformation",
      description: "Led digital transformation initiative for international bank, modernizing legacy systems and implementing cloud-first strategy",
      results: ["$5M annual savings", "80% faster deployments", "99.99% uptime achieved"],
      industry: "Financial Services",
      image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=800&h=600&fit=crop",
    },
    {
      title: "Healthcare IT Security Overhaul",
      description: "Comprehensive security assessment and implementation of HIPAA-compliant infrastructure for hospital network",
      results: ["HIPAA compliant", "Zero breaches", "30% cost reduction"],
      industry: "Healthcare",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=600&fit=crop",
    },
    {
      title: "Retail Chain Cloud Migration",
      description: "Migrated 200+ stores to cloud infrastructure with zero downtime during peak season",
      results: ["200 stores migrated", "Zero downtime", "40% cost savings"],
      industry: "Retail",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
    },
    {
      title: "Manufacturing ERP Implementation",
      description: "Advised on ERP selection and implementation strategy for mid-size manufacturing company",
      results: ["50% efficiency gain", "Real-time visibility", "$2M ROI in 18 months"],
      industry: "Manufacturing",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=600&fit=crop",
    },
    {
      title: "SaaS Startup Technology Roadmap",
      description: "Developed 3-year technology strategy and architecture for rapidly growing SaaS startup",
      results: ["10x scale capacity", "Series B funding", "Market leader position"],
      industry: "Technology",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
    },
    {
      title: "Education Platform Modernization",
      description: "Guided university through legacy system replacement and cloud adoption strategy",
      results: ["50K users supported", "Modern platform", "Enhanced student experience"],
      industry: "Education",
      image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&h=600&fit=crop",
    },
  ];

  const process = [
    {
      step: "01",
      title: "Discovery & Assessment",
      description: "Understand your business, current state, challenges, and strategic objectives through detailed analysis",
    },
    {
      step: "02",
      title: "Gap Analysis",
      description: "Identify gaps between current and desired state, prioritize areas for improvement",
    },
    {
      step: "03",
      title: "Strategy Development",
      description: "Create comprehensive roadmap with actionable recommendations and implementation timeline",
    },
    {
      step: "04",
      title: "Stakeholder Alignment",
      description: "Present findings, build consensus, and secure buy-in from key stakeholders",
    },
    {
      step: "05",
      title: "Implementation Support",
      description: "Guide execution, provide ongoing advisory, and ensure successful delivery",
    },
    {
      step: "06",
      title: "Continuous Optimization",
      description: "Monitor outcomes, measure success, and recommend continuous improvements",
    },
  ];

  const stats = [
    { number: "500+", label: "Clients Advised" },
    { number: "$100M+", label: "Cost Savings Generated" },
    { number: "25+", label: "Years Experience" },
    { number: "98%", label: "Client Satisfaction" },
  ];

  const testimonials = [
    {
      name: "Thomas Anderson",
      role: "CIO, Global Enterprises",
      content: "Their strategic guidance transformed our IT operations. We reduced costs by 40% while improving service quality. Best investment we made.",
      rating: 5,
    },
    {
      name: "Linda Martinez",
      role: "CEO, HealthTech Solutions",
      content: "The cloud migration strategy they developed saved us from costly mistakes. Their expertise in healthcare compliance was invaluable.",
      rating: 5,
    },
    {
      name: "Richard Park",
      role: "VP Technology, RetailCorp",
      content: "Outstanding consultants who truly understand business needs, not just technology. Their roadmap guided us through 3 years of growth.",
      rating: 5,
    },
  ];

  const industries = [
    { name: "Financial Services", image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=400&h=300&fit=crop" },
    { name: "Healthcare", image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=400&h=300&fit=crop" },
    { name: "Retail & E-Commerce", image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop" },
    { name: "Manufacturing", image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop" },
    { name: "Education", image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&h=600&fit=crop" },
    { name: "Government", image: "https://images.unsplash.com/photo-1541872705-1f73c6400ec9?w=400&h=300&fit=crop" },
  ];

  const benefits = [
    { icon: DollarSign, title: "Cost Reduction", desc: "Save 30-50% on IT spending through optimization" },
    { icon: Rocket, title: "Faster Innovation", desc: "Accelerate time-to-market for new initiatives" },
    { icon: Shield, title: "Risk Mitigation", desc: "Identify and address vulnerabilities proactively" },
    { icon: TrendingUp, title: "Competitive Edge", desc: "Leverage technology for business advantage" },
    { icon: Users, title: "Team Empowerment", desc: "Upskill teams with modern best practices" },
    { icon: Target, title: "Strategic Alignment", desc: "Align technology with business objectives" },
  ];

  const phoneNumber = "919335059380";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent("Hi! I'm interested in IT Consultancy services.")}`;

  return (
    <div className="min-h-screen pt-24">

      {/* Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-10 items-center max-w-6xl mx-auto">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold mb-4">
                Strategic IT Guidance for <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">Business Growth</span>
              </h2>
   
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                With 5+ years of experience across industries, we've helped 500+ organizations transform their IT operations, reduce costs by 30-50%, and achieve their digital transformation goals.
              </p>
              <div className="space-y-3">
                {[
                  "Vendor-neutral advice aligned with your goals",
                  "Proven frameworks and methodologies",
                  "Industry-specific expertise and insights",
                  "C-level advisory and board presentations",
                  "Hands-on implementation support",
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
               <div className="flex items-center gap-4 mt-6 justify-center md:justify-start">
                  <Button 
                    onClick={() => navigate('/contact')}
                    className="gradient-primary text-white font-semibold shadow-glow hover:shadow-lg transition-smooth group"
                  >
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
                src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop"
                alt="IT consulting team"
                className="rounded-2xl shadow-2xl w-full"
              />
              <div className="absolute -bottom-4 -left-4 bg-white p-6 rounded-xl shadow-xl">
                <div className="flex items-center gap-3">
                  <Award className="w-8 h-8 text-emerald-600" />
                  <div>
                    <div className="text-2xl font-bold">5+ Years</div>
                    <div className="text-sm text-gray-600">Industry Experience</div>
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
              Consulting <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">Services</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive IT advisory services to drive your digital success
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
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-emerald-600 to-teal-600 flex items-center justify-center mb-4">
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

      {/* Expertise */}
      <section className="py-16 bg-gradient-to-br from-emerald-50 to-teal-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl lg:text-5xl font-bold text-center mb-12">
            Our <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">Expertise</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {expertise.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="bg-white border border-gray-200 rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300"
                >
                  <div className="w-14 h-14 mb-4 rounded-xl bg-gradient-to-br from-emerald-600 to-teal-600 flex items-center justify-center text-white shadow-lg">
                    <Icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold mb-3">
              Advisory <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">Solutions</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Tailored consulting engagements to address your specific challenges
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {solutions.map((solution, index) => (
              <Card key={index} className="hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                <CardHeader>
                  <CardTitle className="text-lg">{solution.title}</CardTitle>
                  <CardDescription className="text-sm mt-2 leading-relaxed">
                    {solution.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {solution.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                        <span className="text-xs text-gray-600">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold mb-3">
              Client <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">Success Stories</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Real transformations we've guided across industries
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {projects.map((project, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-3 right-3 bg-emerald-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                    {project.industry}
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
                    {project.results.map((result, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <TrendingUp className="w-4 h-4 text-green-500" />
                        <span className="text-xs text-gray-600">{result}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold mb-3">
              Our Consulting <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">Approach</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Proven methodology for delivering successful outcomes
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {process.map((item, index) => (
              <div key={index} className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-xl p-6 shadow-lg">
                <div className="bg-gradient-to-br from-emerald-600 to-teal-600 text-white text-2xl font-bold w-12 h-12 rounded-full flex items-center justify-center mb-4 shadow-lg">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-10 items-center">
              <div>
                <img
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop"
                  alt="Business meeting"
                  className="rounded-2xl shadow-2xl"
                />
              </div>
              <div>
                <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                  Business Impact of <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">IT Consulting</span>
                </h2>
                <div className="space-y-4">
                  {benefits.map((benefit, index) => {
                    const Icon = benefit.icon;
                    return (
                      <div key={index} className="flex gap-4">
                        <div className="w-12 h-12 flex-shrink-0 rounded-lg bg-gradient-to-br from-emerald-600 to-teal-600 flex items-center justify-center text-white">
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
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold mb-3">
              Industries <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">We Serve</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Deep expertise across multiple sectors
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

      {/* Featured Case Study */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto bg-gradient-to-br from-emerald-600 to-teal-600 rounded-2xl overflow-hidden shadow-2xl">
            <div className="grid lg:grid-cols-2">
              <div className="p-10 text-white">
                <div className="inline-block px-3 py-1 bg-white/20 rounded-full text-sm font-semibold mb-4">
                  Featured Engagement
                </div>
                <h3 className="text-3xl font-bold mb-4">
                  Enterprise Cloud Transformation
                </h3>
                <p className="text-white/90 mb-6 leading-relaxed">
                  Led comprehensive cloud strategy for Fortune 500 company, developing 3-year roadmap that included multi-cloud architecture, migration planning, and change management. Resulted in $5M annual cost savings and 80% faster deployment cycles.
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5" />
                    <span>$5M annual savings achieved</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5" />
                    <span>80% faster deployments</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5" />
                    <span>Multi-cloud strategy implemented</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5" />
                    <span>200+ stakeholders aligned</span>
                  </div>
                </div>
              </div>
              <div className="relative h-full min-h-[400px]">
                <img
                  src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=600&fit=crop"
                  alt="Consulting engagement"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-emerald-600 via-teal-600 to-cyan-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container relative z-10 mx-auto px-4 text-center">
          <h2 className="text-4xl lg:text-6xl font-bold mb-4">
            Ready to Transform Your <span className="text-yellow-300">IT Strategy?</span>
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8 leading-relaxed">
            Let's discuss your challenges and create a roadmap for technology-driven business success
          </p>
          <div className="flex flex-wrap gap-6 justify-center">
            <Button 
              size="lg" 
              className="bg-white text-emerald-600 hover:bg-gray-100 font-semibold text-lg px-10 py-6 shadow-2xl"
              onClick={() => window.open(whatsappUrl, "_blank")}
            >
              Schedule Free Consultation
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
            <p className="text-sm">✓ Free initial assessment • ✓ No obligation • ✓ Confidential discussion • ✓ Expert guidance</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ITConsultancy;