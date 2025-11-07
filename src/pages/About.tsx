// import Navbar from "@/components/Navbar";
// import Footer from "@/components/Footer";
// import { Users, Target, Zap, Award, Sparkles, TrendingUp, Star } from "lucide-react";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import WhatsAppButton from "@/components/WhatsAppButton";

// const About = () => {
//   const values = [
//     {
//       icon: Users,
//       title: "Client-Centric",
//       description: "Your success is our priority. We build lasting partnerships through transparent communication and dedicated support.",
//       gradient: "from-blue-500 to-blue-600"
//     },
//     {
//       icon: Target,
//       title: "Innovation First",
//       description: "We stay ahead of tech trends to deliver cutting-edge solutions that give you a competitive advantage.",
//       gradient: "from-violet-500 to-violet-600"
//     },
//     {
//       icon: Zap,
//       title: "Fast & Agile",
//       description: "Rapid development cycles without compromising quality. We adapt quickly to your changing needs.",
//       gradient: "from-orange-500 to-orange-600"
//     },
//     {
//       icon: Award,
//       title: "Quality Assured",
//       description: "Every project undergoes rigorous testing and quality checks to ensure flawless performance.",
//       gradient: "from-pink-500 to-pink-600"
//     }
//   ];

//   return (
//     <div className="min-h-screen bg-background  overflow-hidden">
      
//       <main className="pt-10 relative z-10">
//         {/* Hero Section - Enhanced */}
//         <section className="container mx-auto px-4 lg:px-8 py-28">
//           <div className="max-w-5xl mx-auto text-center animate-fade-in-up">


//             <h1 className="text-5xl md:text-7xl font-black mb-8 tracking-tight leading-[1.1]">
//               Who <span className="gradient-text-primary relative inline-block">
//                 We Are
//                 <svg className="absolute -bottom-4 left-0 w-full h-4" viewBox="0 0 200 16" preserveAspectRatio="none">
//                   <path d="M0,12 Q100,0 200,12" fill="none" stroke="currentColor" strokeWidth="4" className="text-primary/40" strokeLinecap="round"/>
//                 </svg>
//               </span>
//             </h1>
            
//             <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-4xl mx-auto font-light">
//               At ZCrom, we merge <span className="text-foreground font-semibold">creativity</span> with <span className="text-foreground font-semibold">technology</span> to empower businesses of all scales. 
//               Our team of developers, designers, and strategists help turn ideas into powerful digital 
//               products — from startups to established enterprises.
//             </p>

//             {/* Floating Stats Preview */}
//             <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto mt-16">
//               {[
//                 { value: "50+", label: "Projects" },
//                 { value: "40+", label: "Clients" },
//                 { value: "10+", label: "Team" }
//               ].map((stat, index) => (
//                 <div key={index} className="group cursor-pointer hover:scale-110 transition-transform duration-300">
//                   <div className="text-4xl md:text-5xl font-black gradient-text-primary mb-2 group-hover:animate-pulse">
//                     {stat.value}
//                   </div>
//                   <div className="text-sm text-muted-foreground font-semibold group-hover:text-foreground transition-colors">
//                     {stat.label}
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </section>

//         {/* Mission Section - Enhanced */}
//         <section className="from-card/40 to-card/60 py-10 relative">
//           {/* Background Pattern */}
//           <div className="absolute inset-0 bg-grid-pattern opacity-[0.03]"></div>
          
//           <div className="container mx-auto px-4 lg:px-8 relative">
//             <div className="max-w-5xl mx-auto">
//               {/* Premium Badge */}
//               <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-secondary/10 via-secondary/5 to-secondary/10 rounded-full text-secondary text-sm font-semibold mb-10 border border-secondary/20 shadow-lg backdrop-blur-sm hover:scale-105 transition-all duration-300 mx-auto block w-fit">
//                 <Target size={16} className="animate-pulse" />
//                 <span className="tracking-wide">OUR MISSION</span>
//               </div>

//               <h2 className="text-4xl md:text-6xl font-black mb-10 text-center tracking-tight">
//                 Our <span className="gradient-text-secondary relative inline-block">
//                   Mission
//                   <svg className="absolute -bottom-3 left-0 w-full h-3" viewBox="0 0 200 12" preserveAspectRatio="none">
//                     <path d="M0,10 Q100,0 200,10" fill="none" stroke="currentColor" strokeWidth="3" className="text-secondary/40" strokeLinecap="round"/>
//                   </svg>
//                 </span>
//               </h2>

//               <div className="relative">
//                 {/* Glow Effect */}
//                 <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent blur-3xl"></div>
                
//                 <p className="text-lg md:text-2xl text-muted-foreground leading-relaxed text-center font-light relative p-10 bg-background/50 backdrop-blur-sm rounded-3xl border-2 border-primary/20 shadow-2xl">
//                   To <span className="text-foreground font-semibold">democratize technology</span> by making world-class digital solutions accessible to businesses 
//                   of all sizes. We believe every great idea deserves <span className="text-foreground font-semibold">exceptional execution</span>, and we're here to 
//                   make that happen through innovative design, robust development, and strategic consulting.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* Values Section - Enhanced */}
//         <section className="py-20 relative">
//           {/* Dot Pattern */}
//           <div className="absolute inset-0 opacity-[0.03]" style={{
//             backgroundImage: 'radial-gradient(circle, currentColor 1px, transparent 1px)',
//             backgroundSize: '40px 40px'
//           }}></div>

//           <div className="container mx-auto px-4 lg:px-8 relative">
//             {/* Premium Badge */}
//             <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 rounded-full text-primary text-sm font-semibold mb-10 border border-primary/20 shadow-lg backdrop-blur-sm hover:scale-105 transition-all duration-300 mx-auto block w-fit">
//               <Star size={16} className="fill-current animate-pulse" />
//               <span className="tracking-wide">WHAT DRIVES US</span>
//             </div>

//             <h2 className="text-4xl md:text-6xl font-black mb-16 text-center tracking-tight">
//               Our <span className="gradient-text-primary relative inline-block">
//                 Core Values
//                 <svg className="absolute -bottom-3 left-0 w-full h-3" viewBox="0 0 300 12" preserveAspectRatio="none">
//                   <path d="M0,10 Q150,0 300,10" fill="none" stroke="currentColor" strokeWidth="3" className="text-primary/40" strokeLinecap="round"/>
//                 </svg>
//               </span>
//             </h2>

//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
//               {values.map((value, index) => {
//                 const Icon = value.icon;
//                 return (
//                   <Card 
//                     key={index}
//                     className="bg-card/80 backdrop-blur-sm border-2 border-border hover:border-primary/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl group relative overflow-hidden"
//                   >
//                     {/* Shimmer Effect */}
//                     <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                    
//                     <CardHeader className="relative z-10">
//                       <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${value.gradient} flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
//                         <Icon className="text-white" size={28} />
//                       </div>
//                       <CardTitle className="text-2xl font-bold group-hover:text-primary transition-colors">
//                         {value.title}
//                       </CardTitle>
//                     </CardHeader>
//                     <CardContent className="relative z-10">
//                       <p className="text-muted-foreground leading-relaxed group-hover:text-foreground transition-colors">
//                         {value.description}
//                       </p>
//                     </CardContent>

//                     {/* Decorative Corner */}
//                     <div className="absolute -bottom-2 -right-2 w-20 h-20 bg-gradient-to-br from-primary/10 to-transparent rounded-tl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
//                   </Card>
//                 );
//               })}
//             </div>

//             {/* Floating Decorative Elements */}
//             <div className="absolute top-20 -left-8 w-24 h-24 border-2 border-primary/20 rounded-2xl rotate-12 pointer-events-none animate-float"></div>
//             <div className="absolute bottom-20 -right-8 w-28 h-28 border-2 border-secondary/20 rounded-2xl -rotate-12 pointer-events-none animate-float" style={{ animationDelay: '1s' }}></div>
//           </div>
//         </section>

//         {/* Team Stats - Premium Enhanced */}
//         <section className="bg-gradient-to-br from-card/60 via-card/80 to-card/60 py-28 relative overflow-hidden">
//           {/* Animated Background */}
//           <div className="absolute inset-0 opacity-[0.04]" style={{
//             backgroundImage: 'radial-gradient(circle at 2px 2px, currentColor 2px, transparent 0)',
//             backgroundSize: '48px 48px'
//           }}></div>

//           {/* Glow Effects */}
//           <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[150px]"></div>
//           <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-[150px]"></div>

//           <div className="container mx-auto px-4 lg:px-8 relative z-10">
//             {/* Premium Badge */}
//             <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-primary/15 via-primary/10 to-primary/15 rounded-full text-primary text-sm font-bold mb-12 border-2 border-primary/30 shadow-2xl backdrop-blur-sm hover:scale-105 transition-all duration-300 mx-auto block w-fit">
//               <TrendingUp size={16} className="animate-pulse" />
//               <span className="tracking-widest">OUR ACHIEVEMENTS</span>
//             </div>

//             <h2 className="text-4xl md:text-5xl font-black text-center mb-20 tracking-tight">
//               Success <span className="gradient-text-primary">By Numbers</span>
//             </h2>

//             <div className="grid grid-cols-2 md:grid-cols-4 gap-12 max-w-6xl mx-auto">
//               {[
//                 { value: "50+", label: "Projects Completed", gradient: "gradient-text-primary" },
//                 { value: "40+", label: "Happy Clients", gradient: "gradient-text-secondary" },
//                 { value: "10+", label: "Team Members", gradient: "gradient-text-primary" },
//                 { value: "5+", label: "Years Experience", gradient: "gradient-text-secondary" }
//               ].map((stat, index) => (
//                 <div 
//                   key={index} 
//                   className="text-center group cursor-pointer hover:scale-110 transition-all duration-300 p-8 rounded-3xl bg-background/50 backdrop-blur-sm border-2 border-primary/20 hover:border-primary/50 hover:shadow-2xl"
//                 >
//                   <div className={`text-5xl md:text-7xl font-black ${stat.gradient} mb-4 group-hover:animate-pulse`}>
//                     {stat.value}
//                   </div>
//                   <div className="text-sm md:text-base text-muted-foreground font-semibold tracking-wide group-hover:text-foreground transition-colors">
//                     {stat.label}
//                   </div>
//                   {/* Rating Stars */}
//                   <div className="flex items-center justify-center gap-1 mt-4 opacity-0 group-hover:opacity-100 transition-opacity">
//                     {[...Array(5)].map((_, i) => (
//                       <Star 
//                         key={i} 
//                         size={12} 
//                         className="text-yellow-500 fill-yellow-500" 
//                       />
//                     ))}
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Animated Decorative Dots */}
//           <div className="absolute top-24 left-16 w-3 h-3 bg-primary rounded-full animate-ping"></div>
//           <div className="absolute bottom-32 right-24 w-3 h-3 bg-secondary rounded-full animate-ping" style={{ animationDelay: '1s' }}></div>
//           <div className="absolute top-1/2 left-1/4 w-2 h-2 bg-primary rounded-full animate-ping" style={{ animationDelay: '2s' }}></div>
//         </section>
//       </main>

//       <Footer />
//       <WhatsAppButton />
//     </div>
//   );
// };

// export default About;

import React from 'react';
import { Users, Target, Zap, Award, Sparkles, TrendingUp, Star } from "lucide-react";

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
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }

        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }

        @keyframes pulse-glow {
          0%, 100% { opacity: 0.5; }
          50% { opacity: 1; }
        }

        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out;
        }

        .animate-fade-in {
          animation: fadeIn 1s ease-out;
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .gradient-text-primary {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .gradient-text-secondary {
          background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .card {
          background: white;
          border-radius: 1rem;
          border: 1px solid #e5e7eb;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 40px -12px rgba(0, 0, 0, 0.15);
          border-color: #667eea;
        }

        .stat-card {
          background: white;
          border-radius: 1.5rem;
          border: 2px solid #f3f4f6;
          padding: 2rem;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
          overflow: hidden;
        }

        .stat-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 4px;
          background: linear-gradient(90deg, #667eea, #764ba2);
          transform: scaleX(0);
          transition: transform 0.4s ease;
        }

        .stat-card:hover::before {
          transform: scaleX(1);
        }

        .stat-card:hover {
          transform: translateY(-12px) scale(1.05);
          box-shadow: 0 25px 50px -12px rgba(102, 126, 234, 0.25);
          border-color: #667eea;
        }

        .badge {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.625rem 1.5rem;
          background: linear-gradient(135deg, rgba(102, 126, 234, 0.1), rgba(118, 75, 162, 0.1));
          border-radius: 9999px;
          border: 1px solid rgba(102, 126, 234, 0.2);
          font-size: 0.875rem;
          font-weight: 600;
          letter-spacing: 0.05em;
          backdrop-filter: blur(8px);
          transition: all 0.3s ease;
        }

        .badge:hover {
          transform: scale(1.05);
          box-shadow: 0 8px 16px -4px rgba(102, 126, 234, 0.3);
        }

        .section-title {
          font-size: clamp(2rem, 5vw, 3.5rem);
          font-weight: 800;
          line-height: 1.2;
          margin-bottom: 2rem;
          letter-spacing: -0.02em;
        }

        .mission-box {
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.7));
          backdrop-filter: blur(20px);
          border-radius: 2rem;
          border: 2px solid rgba(102, 126, 234, 0.15);
          padding: 3rem;
          box-shadow: 0 20px 60px -15px rgba(0, 0, 0, 0.1);
          position: relative;
          overflow: hidden;
        }

        .mission-box::before {
          content: '';
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: radial-gradient(circle, rgba(102, 126, 234, 0.05) 0%, transparent 70%);
          animation: pulse-glow 4s ease-in-out infinite;
        }

        .image-container {
          border-radius: 1.5rem;
          overflow: hidden;
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
          border: 1px solid rgba(255, 255, 255, 0.5);
          transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .image-container:hover {
          transform: scale(1.03) translateY(-8px);
          box-shadow: 0 35px 70px -15px rgba(102, 126, 234, 0.3);
        }

        .value-icon {
          width: 3.5rem;
          height: 3.5rem;
          border-radius: 1rem;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 1.5rem;
          box-shadow: 0 10px 20px -5px rgba(0, 0, 0, 0.2);
          transition: all 0.3s ease;
        }

        .card:hover .value-icon {
          transform: scale(1.1) rotate(5deg);
        }

        .list-item {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.95rem;
          color: #6b7280;
          transition: all 0.2s ease;
        }

        .list-item:hover {
          color: #374151;
          transform: translateX(4px);
        }

        .decorative-line {
          position: absolute;
          bottom: -0.75rem;
          left: 0;
          width: 100%;
          height: 0.75rem;
        }

        .stats-background {
          background: linear-gradient(135deg, #f9fafb 0%, #ffffff 50%, #f3f4f6 100%);
          position: relative;
        }

        .stats-background::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-image: radial-gradient(circle at 1px 1px, rgba(102, 126, 234, 0.05) 1px, transparent 0);
          background-size: 40px 40px;
        }
      `}</style>

      <main className="pt-16">
        {/* About ZCROM Section */}
        <section className="py-20 lg:py-28 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="badge text-purple-700 mb-8">
                  <Sparkles size={16} />
                  <span>ABOUT ZCROM</span>
                  <Sparkles size={16} />
                </div>

              
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            
              {/* Left Side - Text Content */}
              <div className="animate-fade-in-up">
                
                <p className="text-lg text-gray-600 leading-relaxed">
                  Welcome to <span className="font-semibold text-gray-900">ZCROM</span> — your trusted 
                  technology partner for scalable website and software development. 
                  We specialize in building powerful, user-centric digital experiences 
                  that help businesses grow and succeed in the digital age.
                </p>

                <p className="text-lg text-gray-600 leading-relaxed mb-2">
                  From intuitive websites and custom software to enterprise-grade 
                  applications and mobile solutions, our team combines creativity, 
                  technical expertise, and deep market understanding to deliver 
                  results that matter.
                </p>

                <ul className="grid sm:grid-cols-2 gap-3 mb-8">
                  {[
                    "Web Design & Development",
                    "Mobile App Development",
                    "Graphic Design & Branding",
                    "SEO & Digital Marketing",
                    "IT Consultancy Services",
                    "Career Opportunities",
                  ].map((item, index) => (
                    <li key={index} className="list-item">
                      <Star size={16} className="text-purple-600 fill-purple-600" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="space-y-6">
                  <div className="border-l-4 border-purple-600 pl-6">
                    <h3 className="text-xl font-bold mb-2 text-gray-900">Client-Centric Solutions</h3>
                    <p className="text-gray-600">
                      Your success is our goal. We understand your business, challenges, 
                      and objectives to offer tailored digital solutions that deliver 
                      real value.
                    </p>
                  </div>

                  <div className="border-l-4 border-pink-500 pl-6">
                    <h3 className="text-xl font-bold mb-2 text-gray-900">End-to-End Development</h3>
                    <p className="text-gray-600">
                      From planning to deployment, we stay with you every step of the way. 
                      Transparent processes and seamless communication ensure the best outcomes.
                    </p>
                  </div>

                  <div className="border-l-4 border-purple-600 pl-6">
                    <h3 className="text-xl font-bold mb-2 text-gray-900">Innovation Meets Simplicity</h3>
                    <p className="text-gray-600">
                      We use cutting-edge technology to create innovative solutions 
                      that remain simple, scalable, and user-friendly.
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Side - Image */}
              <div className="animate-fade-in">
                <div className="image-container">
                  <img
                    src="https://webdeveloperkashi.com/assets/images/about-img/about.png"
                    alt="About ZCROM"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="badge text-pink-600 mb-10 mx-auto">
              <Target size={16} />
              <span>OUR MISSION</span>
            </div>

            <h2 className="section-title text-center text-gray-900">
              Our <span className="gradient-text-secondary relative inline-block">
                Mission
                <svg className="decorative-line" viewBox="0 0 200 12" preserveAspectRatio="none">
                  <path d="M0,10 Q100,0 200,10" fill="none" stroke="url(#gradient)" strokeWidth="3" strokeLinecap="round"/>
                  <defs>
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" style={{stopColor: '#f093fb', stopOpacity: 0.4}} />
                      <stop offset="100%" style={{stopColor: '#f5576c', stopOpacity: 0.4}} />
                    </linearGradient>
                  </defs>
                </svg>
              </span>
            </h2>

            <div className="mission-box">
              <p className="text-xl md:text-2xl text-gray-700 leading-relaxed text-center font-light relative z-10">
                To <span className="text-gray-900 font-semibold">democratize technology</span> by making world-class digital solutions accessible to businesses 
                of all sizes. We believe every great idea deserves <span className="text-gray-900 font-semibold">exceptional execution</span>, and we're here to 
                make that happen through innovative design, robust development, and strategic consulting.
              </p>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="badge text-purple-700 mb-10 mx-auto">
              <Star size={16} className="fill-current" />
              <span>WHAT DRIVES US</span>
            </div>

            <h2 className="section-title text-center text-gray-900 mb-16">
              Our <span className="gradient-text-primary relative inline-block">
                Core Values
                <svg className="decorative-line" viewBox="0 0 300 12" preserveAspectRatio="none">
                  <path d="M0,10 Q150,0 300,10" fill="none" stroke="url(#gradient2)" strokeWidth="3" strokeLinecap="round"/>
                  <defs>
                    <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" style={{stopColor: '#667eea', stopOpacity: 0.4}} />
                      <stop offset="100%" style={{stopColor: '#764ba2', stopOpacity: 0.4}} />
                    </linearGradient>
                  </defs>
                </svg>
              </span>
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <div key={index} className="card p-6 group">
                    <div className={`value-icon bg-gradient-to-br ${value.gradient}`}>
                      <Icon className="text-white" size={24} />
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-purple-700 transition-colors">
                      {value.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Team Stats */}
        <section className="stats-background py-24">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="badge text-purple-700 mb-12 mx-auto">
              <TrendingUp size={16} />
              <span>OUR ACHIEVEMENTS</span>
            </div>

            <h2 className="section-title text-center text-gray-900 mb-16">
              Success <span className="gradient-text-primary">By Numbers</span>
            </h2>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { value: "50+", label: "Projects Completed", color: "purple" },
                { value: "40+", label: "Happy Clients", color: "pink" },
                { value: "10+", label: "Team Members", color: "purple" },
                { value: "5+", label: "Years Experience", color: "pink" }
              ].map((stat, index) => (
                <div key={index} className="stat-card text-center group cursor-pointer">
                  <div className={`text-5xl lg:text-6xl font-black ${stat.color === 'purple' ? 'gradient-text-primary' : 'gradient-text-secondary'} mb-3`}>
                    {stat.value}
                  </div>
                  <div className="text-sm font-semibold text-gray-600 tracking-wide">
                    {stat.label}
                  </div>
                  <div className="flex items-center justify-center gap-1 mt-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={12} className="text-yellow-500 fill-yellow-500" />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default About;