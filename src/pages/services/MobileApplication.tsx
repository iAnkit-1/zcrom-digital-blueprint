

import React from 'react';
import { Smartphone, Tablet, Watch, MessageCircle, CheckCircle, Code, Zap, Shield, Users, TrendingUp, Star, ArrowRight, Play, Layers, Sparkles, Target, Award, Clock, BarChart, Calendar } from "lucide-react";
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const MobileApplication = () => {
    const navigate = useNavigate();
  
  const platforms = [
    { 
      icon: Smartphone, 
      title: "iOS Development", 
      description: "Native Swift & SwiftUI apps for iPhone and iPad with seamless Apple ecosystem integration",
      features: ["Swift & SwiftUI", "App Store Optimization", "Apple Pay Integration", "Push Notifications"]
    },
    { 
      icon: Tablet, 
      title: "Android Development", 
      description: "Native Kotlin & Java apps optimized for performance across all Android devices",
      features: ["Kotlin & Java", "Material Design", "Google Services", "Multi-device Support"]
    },
    { 
      icon: Watch, 
      title: "Cross-Platform", 
      description: "Build once, deploy everywhere with React Native & Flutter for maximum reach",
      features: ["React Native", "Flutter", "Single Codebase", "Cost Effective"]
    },
  ];

  const services = [
    {
      icon: Code,
      title: "Custom App Development",
      description: "Tailored mobile solutions designed specifically for your business needs and user requirements."
    },
    {
      icon: Layers,
      title: "UI/UX Design",
      description: "Beautiful, intuitive interfaces that provide exceptional user experiences and drive engagement."
    },
    {
      icon: Zap,
      title: "App Modernization",
      description: "Transform legacy apps with modern technologies, improved performance, and enhanced features."
    },
    {
      icon: Shield,
      title: "Security & Compliance",
      description: "Enterprise-grade security measures and compliance with industry standards and regulations."
    },
    {
      icon: Users,
      title: "Consulting & Strategy",
      description: "Expert guidance on app architecture, technology stack, and go-to-market strategies."
    },
    {
      icon: TrendingUp,
      title: "Maintenance & Support",
      description: "Ongoing updates, bug fixes, and performance optimization to keep your app running smoothly."
    }
  ];

  const process = [
    {
      number: "01",
      title: "Discovery & Planning",
      description: "We analyze your requirements, target audience, and business goals to create a comprehensive project roadmap.",
      icon: Target
    },
    {
      number: "02",
      title: "Design & Prototyping",
      description: "Our designers create interactive prototypes and visual designs that bring your vision to life.",
      icon: Layers
    },
    {
      number: "03",
      title: "Development & Testing",
      description: "Expert developers build your app using best practices while QA engineers ensure flawless functionality.",
      icon: Code
    },
    {
      number: "04",
      title: "Launch & Growth",
      description: "We handle app store deployment and provide ongoing support to ensure long-term success.",
      icon: TrendingUp
    }
  ];

  const stats = [
    { value: "100+", label: "Apps Delivered", icon: Smartphone },
    { value: "95%", label: "Client Satisfaction", icon: Star },
    { value: "50+", label: "Active Projects", icon: Code },
    { value: "24/7", label: "Support Available", icon: Clock }
  ];

  const features = [
    "Native & Cross-Platform Development",
    "Cloud Integration (AWS, Firebase, Azure)",
    "Real-time Data Synchronization",
    "Offline Mode Capabilities",
    "Push Notifications & Alerts",
    "Payment Gateway Integration",
    "Social Media Integration",
    "Analytics & Reporting",
    "Multi-language Support",
    "Scalable Architecture",
    "API Development & Integration",
    "App Store Optimization (ASO)"
  ];

  const phoneNumber = "919335059380";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent("Hi! I'm interested in Mobile Application Development.")}`;

  return (
    <div className="min-h-screen pt-24">

      {/* Hero Section */}
      <section className="py-20 lg:py-28 relative overflow-hidden bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Text Content */}
            <div className="animate-fade-in-up text-gray-900">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-100 rounded-full text-purple-700 text-sm font-semibold mb-6">
                <Sparkles size={16} />
                <span>MOBILE APPLICATION DEVELOPMENT</span>
              </div>

              <h1 className="text-4xl lg:text-6xl font-black mb-6 leading-tight">
                Create <span className="gradient-text">Stunning Mobile Experiences</span> That Users Love
              </h1>

              <p className="text-lg lg:text-xl text-gray-700 mb-8 leading-relaxed">
                Transform your ideas into powerful mobile applications. We build native iOS, Android, and cross-platform apps that deliver exceptional performance and user engagement.
              </p>

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

              <div className="flex items-center gap-8 mt-12 text-gray-900">
                <div>
                  <div className="text-3xl font-bold">100+</div>
                  <div className="text-gray-600 text-sm">Apps Delivered</div>
                </div>
                <div className="w-px h-12 bg-gray-200"></div>
                <div>
                  <div className="text-3xl font-bold">95%</div>
                  <div className="text-gray-600 text-sm">Client Satisfaction</div>
                </div>
                <div className="w-px h-12 bg-gray-200"></div>
                <div>
                  <div className="text-3xl font-bold">5+</div>
                  <div className="text-gray-600 text-sm">Years Experience</div>
                </div>
              </div>
            </div>

            {/* Image Section */}
            <div className="animate-fade-in hidden lg:block">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&h=600&fit=crop" 
                  alt="Mobile App Development"
                  className="rounded-2xl shadow-2xl"
                />
                <div className="absolute -bottom-6 -left-6 bg-white text-gray-900 p-6 rounded-xl shadow-2xl animate-float">
                  <div className="flex items-center gap-3">
                    <Award className="text-purple-600" size={32} />
                    <div>
                      <div className="font-bold text-lg">Award Winning</div>
                      <div className="text-sm text-gray-600">Design Excellence</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="stat-card">
                  <Icon className="w-10 h-10 mx-auto mb-3 text-purple-600" />
                  <div className="text-3xl lg:text-4xl font-black gradient-text mb-2">{stat.value}</div>
                  <div className="text-sm text-gray-600 font-semibold">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Service Overview */}
      <section className="py-10 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-left">
              <img 
                src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop" 
                alt="Mobile Development"
                className="rounded-2xl shadow-2xl"
              />
            </div>

            <div className="animate-slide-in-right">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-100 rounded-full text-purple-700 text-sm font-semibold mb-6">
                <Target size={16} />
                <span>SERVICE OVERVIEW</span>
              </div>

              <h2 className="text-3xl lg:text-5xl font-black mb-6 text-gray-900">
                Build Apps That Drive <span className="gradient-text">Business Growth</span>
              </h2>

              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                We specialize in building high-performance mobile applications that deliver exceptional user experiences. From concept to launch and beyond, we're your trusted partner in mobile innovation.
              </p>

              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                Whether you need a native iOS app, Android application, or cross-platform solution, our team of expert developers brings your mobile vision to life with cutting-edge technology and industry best practices.
              </p>

              <div className="space-y-4">
                {["Native iOS & Android Development", "Cross-Platform Solutions", "Custom Features & Integrations", "Ongoing Support & Maintenance"].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="text-green-500 flex-shrink-0" size={24} />
                    <span className="text-gray-700 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Platforms */}
      <section className="py-10 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-100 rounded-full text-purple-700 text-sm font-semibold mb-6">
              <Layers size={16} />
              <span>PLATFORMS WE SUPPORT</span>
            </div>
            
            <h2 className="text-3xl lg:text-5xl font-black mb-6 text-gray-900">
              Expert Development Across All <span className="gradient-text">Mobile Platforms</span>
            </h2>
            
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              From native to cross-platform, we deliver tailored mobile solutions that reach your audience wherever they are
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {platforms.map((platform, index) => {
              const Icon = platform.icon;
              return (
                <div key={index} className="platform-card">
                  <div className="w-16 h-16 rounded-xl gradient-primary flex items-center justify-center mb-6 shadow-lg">
                    <Icon className="text-white" size={32} />
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-3 text-gray-900">{platform.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{platform.description}</p>
                  
                  <div className="space-y-2">
                    {platform.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm text-gray-700">
                        <CheckCircle size={16} className="text-purple-600" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-10 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-100 rounded-full text-purple-700 text-sm font-semibold mb-6">
              <Sparkles size={16} />
              <span>COMPREHENSIVE SERVICES</span>
            </div>
            
            <h2 className="text-3xl lg:text-5xl font-black mb-6 text-gray-900">
              End-to-End Mobile <span className="gradient-text">Development Services</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div key={index} className="service-card group">
                  <div className="w-14 h-14 rounded-lg gradient-bg-card flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Icon className="text-purple-600" size={28} />
                  </div>
                  
                  <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-purple-700 transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Development Process */}
      <section className="py-10 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-100 rounded-full text-purple-700 text-sm font-semibold mb-6">
              <BarChart size={16} />
              <span>OUR PROCESS</span>
            </div>
            
            <h2 className="text-3xl lg:text-5xl font-black mb-6 text-gray-900">
              How We Build <span className="gradient-text">Successful Apps</span>
            </h2>
            
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              A proven methodology that ensures your mobile app is delivered on time, within budget, and exceeds expectations
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="process-card">
                  <div className="text-5xl font-black gradient-text mb-4">{step.number}</div>
                  
                  <div className="w-12 h-12 rounded-lg gradient-bg-card flex items-center justify-center mb-4">
                    <Icon className="text-purple-600" size={24} />
                  </div>
                  
                  <h3 className="text-xl font-bold mb-3 text-gray-900">{step.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features & Capabilities */}
      <section className="py-10 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-100 rounded-full text-purple-700 text-sm font-semibold mb-6">
              <Zap size={16} />
              <span>FEATURES & CAPABILITIES</span>
            </div>
            
            <h2 className="text-3xl lg:text-5xl font-black mb-6 text-gray-900">
              Powerful Features for <span className="gradient-text">Modern Apps</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {features.map((feature, index) => (
              <div key={index} className="feature-item">
                <CheckCircle className="text-green-500 flex-shrink-0" size={20} />
                <span className="text-gray-700 font-medium text-sm">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-10 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-100 rounded-full text-purple-700 text-sm font-semibold mb-6">
              <Code size={16} />
              <span>TECHNOLOGIES WE USE</span>
            </div>
            
            <h2 className="text-3xl lg:text-5xl font-black mb-6 text-gray-900">
              Cutting-Edge <span className="gradient-text">Tech Stack</span>
            </h2>
            
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-12">
              We leverage the latest technologies and frameworks to build robust, scalable mobile applications
            </p>
          </div>

          <div className="flex flex-wrap gap-3 justify-center">
            {[
              "React Native", "Flutter", "Swift", "SwiftUI", "Kotlin", "Java",
              "Firebase", "Redux", "GraphQL", "REST APIs", "MongoDB", "PostgreSQL",
              "AWS", "Azure", "Node.js", "TypeScript", "Git", "CI/CD"
            ].map((tech, index) => (
              <span key={index} className="tech-badge bg-black rounded-full px-4 py-2 text-sm font-semibold text-white shadow-sm">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

       <section className="p-20 bg-background">
        <div
          className="p-10 rounded-2xl text-center border text-white shadow-xl relative overflow-hidden"
          style={{
            background:
              "linear-gradient(135deg, hsl(211 100% 50%) 0%, hsl(271 76% 53%) 100%)",
          }}
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full -ml-24 -mb-24" />

          <div className="relative z-10">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Build Your Mobile App?
            </h2>
            <p className="text-base mb-8 max-w-2xl mx-auto opacity-95 leading-relaxed">
              Let's transform your idea into a stunning mobile application. Schedule a free consultation with our experts today.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button
                onClick={() => window.open(whatsappUrl, "_blank")}
                className="bg-green-500 hover:bg-green-600 text-white font-semibold shadow-lg hover:shadow-xl transition-smooth group"
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                Chat on WhatsApp
              </Button>
              <Button className="bg-white text-primary hover:bg-white/90 font-semibold px-8 shadow-lg"
                onClick={() => navigate('/contact')}>
                <Calendar className="ml-2 h-5 w-5" />
                Book a Session
              </Button>
            </div>
          </div>
           <div className="mt-12 flex items-center justify-center gap-8 text-sm">
            <div className="flex items-center gap-2">
              <CheckCircle size={20} />
              <span>Free Consultation</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle size={20} />
              <span>No Hidden Costs</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle size={20} />
              <span>Fast Delivery</span>
            </div>
          </div>
      </div>
    </section>
    </div>
  );
};

export default MobileApplication;