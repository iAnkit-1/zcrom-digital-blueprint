// import { Button } from "@/components/ui/button";
// import { Smartphone, Tablet, Watch, MessageCircle } from "lucide-react";

// const MobileApplication = () => {
//   const platforms = [
//     { icon: Smartphone, title: "iOS Development", description: "Native Swift & SwiftUI apps" },
//     { icon: Tablet, title: "Android Development", description: "Native Kotlin & Java apps" },
//     { icon: Watch, title: "Cross-Platform", description: "React Native & Flutter" },
//   ];

//   const phoneNumber = "919696726607";
//   const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent("Hi! I'm interested in Mobile Application Development.")}`;

//   return (
//     <div className="min-h-screen">
//       <section className="py-20 bg-gradient-primary text-white">
//         <div className="container mx-auto px-4 text-center">
//           <h1 className="text-4xl lg:text-6xl font-bold mb-6">Mobile Application Development</h1>
//           <p className="text-lg text-white/90 max-w-2xl mx-auto mb-8">
//             Create stunning mobile experiences for iOS and Android that users love
//           </p>
//           <div className="flex flex-wrap gap-4 justify-center">
//             <Button className="bg-white text-primary hover:bg-white/90 font-semibold">Book Free Session</Button>
//             <Button onClick={() => window.open(whatsappUrl, "_blank")} className="bg-green-500 hover:bg-green-600 text-white">
//               <MessageCircle className="w-4 h-4 mr-2" />Chat on WhatsApp
//             </Button>
//           </div>
//         </div>
//       </section>

//       <section className="py-20 bg-background">
//         <div className="container mx-auto px-4 max-w-4xl">
//           <h2 className="text-3xl lg:text-4xl font-bold text-center mb-8">
//             Service <span className="gradient-text">Overview</span>
//           </h2>
//           <p className="text-lg text-muted-foreground text-center leading-relaxed">
//             We build high-performance mobile applications that deliver exceptional user experiences. Whether you need native apps or cross-platform solutions, we have the expertise to bring your mobile vision to life.
//           </p>
//         </div>
//       </section>

//       <section className="py-20 bg-gradient-subtle">
//         <div className="container mx-auto px-4">
//           <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12">
//             Our <span className="gradient-text">Platforms</span>
//           </h2>
//           <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
//             {platforms.map((platform, index) => (
//               <div key={index} className="bg-card border border-border rounded-xl p-8 text-center shadow-sm hover:shadow-lg transition-smooth">
//                 <div className="w-16 h-16 mx-auto mb-4 rounded-lg gradient-primary flex items-center justify-center text-white">
//                   <platform.icon className="w-8 h-8" />
//                 </div>
//                 <h3 className="text-xl font-bold mb-2">{platform.title}</h3>
//                 <p className="text-muted-foreground text-sm">{platform.description}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       <section className="py-20 bg-background">
//         <div className="container mx-auto px-4 max-w-4xl">
//           <h2 className="text-3xl lg:text-4xl font-bold text-center mb-8">
//             Tech <span className="gradient-text">Stack</span>
//           </h2>
//           <div className="flex flex-wrap gap-3 justify-center">
//             {["React Native", "Flutter", "Swift", "Kotlin", "Firebase", "Redux", "GraphQL", "REST APIs"].map((tech, index) => (
//               <span key={index} className="px-4 py-2 bg-card border border-border rounded-full text-sm font-semibold shadow-sm">
//                 {tech}
//               </span>
//             ))}
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default MobileApplication;


import React from 'react';
import { Smartphone, Tablet, Watch, MessageCircle, CheckCircle, Code, Zap, Shield, Users, TrendingUp, Star, ArrowRight, Play, Layers, Sparkles, Target, Award, Clock, BarChart } from "lucide-react";

const MobileApplication = () => {
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

  const phoneNumber = "919696726607";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent("Hi! I'm interested in Mobile Application Development.")}`;

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }

        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out;
        }

        .animate-fade-in {
          animation: fadeIn 1s ease-out;
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        .animate-slide-in-left {
          animation: slideInLeft 0.8s ease-out;
        }

        .animate-slide-in-right {
          animation: slideInRight 0.8s ease-out;
        }

        .gradient-text {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .gradient-bg-primary {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        }

        .gradient-bg-card {
          background: linear-gradient(135deg, rgba(102, 126, 234, 0.05) 0%, rgba(118, 75, 162, 0.05) 100%);
        }

        .btn-primary {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          padding: 0.875rem 2rem;
          border-radius: 0.75rem;
          font-weight: 600;
          transition: all 0.3s ease;
          border: none;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
        }

        .btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 24px -8px rgba(102, 126, 234, 0.4);
        }

        .btn-secondary {
          background: white;
          color: #667eea;
          padding: 0.875rem 2rem;
          border-radius: 0.75rem;
          font-weight: 600;
          transition: all 0.3s ease;
          border: 2px solid #667eea;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
        }

        .btn-secondary:hover {
          background: #667eea;
          color: white;
          transform: translateY(-2px);
        }

        .btn-whatsapp {
          background: #25D366;
          color: white;
          padding: 0.875rem 2rem;
          border-radius: 0.75rem;
          font-weight: 600;
          transition: all 0.3s ease;
          border: none;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
        }

        .btn-whatsapp:hover {
          background: #20BA5A;
          transform: translateY(-2px);
          box-shadow: 0 12px 24px -8px rgba(37, 211, 102, 0.4);
        }

        .service-card {
          background: white;
          border-radius: 1rem;
          padding: 2rem;
          border: 2px solid #f3f4f6;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          height: 100%;
        }

        .service-card:hover {
          transform: translateY(-8px);
          border-color: #667eea;
          box-shadow: 0 20px 40px -12px rgba(102, 126, 234, 0.2);
        }

        .platform-card {
          background: white;
          border-radius: 1.5rem;
          padding: 2.5rem;
          border: 2px solid #f3f4f6;
          transition: all 0.4s ease;
          height: 100%;
        }

        .platform-card:hover {
          transform: translateY(-12px);
          border-color: #667eea;
          box-shadow: 0 25px 50px -12px rgba(102, 126, 234, 0.25);
        }

        .process-card {
          background: white;
          border-radius: 1.25rem;
          padding: 2rem;
          border: 2px solid #f3f4f6;
          position: relative;
          transition: all 0.3s ease;
        }

        .process-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 4px;
          background: linear-gradient(90deg, #667eea, #764ba2);
          border-radius: 1.25rem 1.25rem 0 0;
          transform: scaleX(0);
          transition: transform 0.4s ease;
        }

        .process-card:hover::before {
          transform: scaleX(1);
        }

        .process-card:hover {
          border-color: #667eea;
          box-shadow: 0 15px 30px -8px rgba(102, 126, 234, 0.2);
        }

        .stat-card {
          background: white;
          border-radius: 1.25rem;
          padding: 2rem;
          border: 2px solid #f3f4f6;
          text-align: center;
          transition: all 0.3s ease;
        }

        .stat-card:hover {
          transform: scale(1.05);
          border-color: #667eea;
          box-shadow: 0 20px 40px -12px rgba(102, 126, 234, 0.25);
        }

        .tech-badge {
          background: white;
          padding: 0.75rem 1.5rem;
          border-radius: 9999px;
          border: 2px solid #e5e7eb;
          font-weight: 600;
          font-size: 0.875rem;
          transition: all 0.3s ease;
          display: inline-block;
        }

        .tech-badge:hover {
          border-color: #667eea;
          background: linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%);
          transform: translateY(-2px);
        }

        .feature-item {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding: 0.75rem;
          background: white;
          border-radius: 0.75rem;
          border: 1px solid #f3f4f6;
          transition: all 0.2s ease;
        }

        .feature-item:hover {
          border-color: #667eea;
          background: linear-gradient(135deg, rgba(102, 126, 234, 0.05) 0%, rgba(118, 75, 162, 0.05) 100%);
          transform: translateX(4px);
        }
      `}</style>

      {/* Hero Section */}
      <section className="gradient-bg-primary text-white py-20 lg:py-28 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-up">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-semibold mb-6">
                <Sparkles size={16} />
                <span>MOBILE APPLICATION DEVELOPMENT</span>
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-black mb-6 leading-tight">
                Create Stunning Mobile Experiences That Users Love
              </h1>
              
              <p className="text-lg lg:text-xl text-white/90 mb-8 leading-relaxed">
                Transform your ideas into powerful mobile applications. We build native iOS, Android, and cross-platform apps that deliver exceptional performance and user engagement.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <button className="btn-secondary">
                  <Play size={18} />
                  Book Free Consultation
                </button>
                <button onClick={() => window.open(whatsappUrl, "_blank")} className="btn-whatsapp">
                  <MessageCircle size={18} />
                  Chat on WhatsApp
                </button>
              </div>

              <div className="flex items-center gap-8 mt-12">
                <div>
                  <div className="text-3xl font-bold">100+</div>
                  <div className="text-white/80 text-sm">Apps Delivered</div>
                </div>
                <div className="w-px h-12 bg-white/20"></div>
                <div>
                  <div className="text-3xl font-bold">95%</div>
                  <div className="text-white/80 text-sm">Client Satisfaction</div>
                </div>
                <div className="w-px h-12 bg-white/20"></div>
                <div>
                  <div className="text-3xl font-bold">5+</div>
                  <div className="text-white/80 text-sm">Years Experience</div>
                </div>
              </div>
            </div>

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
      <section className="py-20 lg:py-28">
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
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
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
                  <div className="w-16 h-16 rounded-xl gradient-bg-primary flex items-center justify-center mb-6 shadow-lg">
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
      <section className="py-20 lg:py-28">
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
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
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
      <section className="py-20 lg:py-28">
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
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
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
              <span key={index} className="tech-badge">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-28 gradient-bg-primary text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }}></div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl lg:text-5xl font-black mb-6">
            Ready to Build Your Mobile App?
          </h2>
          
          <p className="text-lg lg:text-xl text-white/90 mb-10 leading-relaxed">
            Let's transform your idea into a stunning mobile application. Schedule a free consultation with our experts today.
          </p>
          
          <div className="flex flex-wrap gap-4 justify-center">
            <button className="btn-secondary">
              <Play size={18} />
              Get Started Now
            </button>
            <button onClick={() => window.open(whatsappUrl, "_blank")} className="btn-whatsapp">
              <MessageCircle size={18} />
              Chat on WhatsApp
            </button>
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