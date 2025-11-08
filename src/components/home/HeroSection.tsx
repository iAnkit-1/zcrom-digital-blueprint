import { Button } from "@/components/ui/button";
import { ArrowRight, MessageCircle, Zap, Users, Award } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const HeroSection = () => {
  const phoneNumber = "919335059380";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    "Hi ZCROM! I'd like to book a free session."
  )}`;

  return (
    <section
      className="relative bg-[url('https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/hero/gradient-bg-with-grid.png')] bg-cover bg-center bg-no-repeat text-slate-800 text-sm pt-8 md:pt-20 pb-32 md:pb-44 overflow-hidden"
    >
      {/* Hero Content */}
      <div className="flex flex-col-reverse gap-10 md:flex-row px-4 md:px-16 lg:px-24 xl:px-32 items-center pt-20">
        {/* Left Content */}
        <div className="max-md:text-center">
          <h1 className="text-4xl md:text-6xl/[76px] font-semibold max-w-2xl text-slate-900">
            Building Scalable{" "}
              <span className="gradient-text relative inline-block">
                Digital Solutions
                <svg
                  className="absolute -bottom-3 left-0 w-full h-3"
                  viewBox="0 0 200 12"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M0,10 Q100,0 200,10"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    className="text-primary/40"
                    strokeLinecap="round"
                  />
                </svg>
                </span> for the Future 🚀
          </h1>

          <p className="text-sm md:text-base max-w-md mt-6 max-md:px-2 text-slate-600">
            We help startups and businesses turn ideas into reality through world-class web, mobile, and AI solutions.
          </p>

          {/* CTA Buttons */}
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

          {/* Rating Section */}
          <div className="flex items-center mt-9 justify-center md:justify-start">
            <div className="flex -space-x-3.5 pr-3">
              {[
                "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200",
                "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200",
                "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&h=200&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=200&auto=format&fit=crop&q=60",
                "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=200&auto=format&fit=crop&q=60",
              ].map((src, i) => (
                <img
                  key={i}
                  src={src}
                  alt="user"
                  className="size-10 border-2 border-white rounded-full hover:-translate-y-px transition z-[2]"
                />
              ))}
            </div>
            <div>
              <div className="flex items-center gap-px">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    width="13"
                    height="12"
                    viewBox="0 0 13 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.85536 0.463527C6.00504 0.00287118 6.65674 0.00287028 6.80642 0.463526L7.82681 3.60397C7.89375 3.80998 8.08572 3.94946 8.30234 3.94946H11.6044C12.0888 3.94946 12.2901 4.56926 11.8983 4.85397L9.22687 6.79486C9.05162 6.92219 8.97829 7.14787 9.04523 7.35388L10.0656 10.4943C10.2153 10.955 9.68806 11.338 9.2962 11.0533L6.62478 9.11244C6.44954 8.98512 6.21224 8.98512 6.037 9.11244L3.36558 11.0533C2.97372 11.338 2.44648 10.955 2.59616 10.4943L3.61655 7.35388C3.68349 7.14787 3.61016 6.92219 3.43491 6.79486L0.763497 4.85397C0.37164 4.56927 0.573027 3.94946 1.05739 3.94946H4.35944C4.57606 3.94946 4.76803 3.80998 4.83497 3.60397L5.85536 0.463527Z"
                      fill="#FF8F20"
                    />
                  </svg>
                ))}
              </div>
              <p className="text-sm text-slate-500">Trusted by 1,000+ clients</p>
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div className="w-full md:max-w-xs lg:max-w-lg flex justify-center md:justify-end">
          <img
            className="w-full h-auto object-contain"
            src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/hero/users-group.png"
            alt="Hero Users"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

// import { Button } from "@/components/ui/button";
// import { ArrowRight, MessageCircle, Code, Palette, Brain, Cloud, BarChart3, Sparkles, CheckCircle2, Users, Zap, Award } from "lucide-react";

// const DigitalAgencyPage = () => {
//   const phoneNumber = "919696726607";
//   const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
//     "Hi ZCROM! I'd like to discuss my project."
//   )}`;

//   const services = [
//     {
//       icon: Code,
//       title: "Web & Mobile Apps",
//       description: "Full-stack development with cutting-edge technologies for web and mobile platforms",
//       color: "text-blue-600"
//     },
//     {
//       icon: BarChart3,
//       title: "SEO & Digital Marketing",
//       description: "Data-driven strategies to boost your online presence and drive conversions",
//       color: "text-green-600"
//     },
//     {
//       icon: Palette,
//       title: "UI/UX Design",
//       description: "Beautiful, intuitive interfaces that delight users and drive engagement",
//       color: "text-purple-600"
//     },
//     {
//       icon: Brain,
//       title: "AI & Automation",
//       description: "Intelligent solutions that streamline operations and unlock new possibilities",
//       color: "text-pink-600"
//     },
//     {
//       icon: Sparkles,
//       title: "Custom Software",
//       description: "Tailored solutions built to solve your unique business challenges",
//       color: "text-orange-600"
//     },
//     {
//       icon: Cloud,
//       title: "Cloud & Deployment",
//       description: "Scalable infrastructure and seamless deployment on AWS, Azure, and GCP",
//       color: "text-cyan-600"
//     }
//   ];



//   return (
//     <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
//       {/* Hero Section */}
//       <section className="relative bg-[url('https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/hero/gradient-bg-with-grid.png')] bg-cover bg-center bg-no-repeat text-slate-800 pt-20 md:pt-32 pb-24 md:pb-32 overflow-hidden">
//         <div className="max-w-7xl mx-auto px-4 md:px-8">
//           <div className="flex flex-col-reverse gap-12 md:flex-row items-center">
//             {/* Left Content */}
//             <div className="flex-1 max-md:text-center">
//               <div className="inline-block px-4 py-2 bg-primary/10 rounded-full mb-6">
//                 <span className="text-primary font-semibold text-sm">🚀 Your Digital Growth Partner</span>
//               </div>
              
//               <h1 className="text-4xl md:text-6xl font-bold text-slate-900 leading-tight">
//                 Transform Your Business with{" "}
//                 <span className="bg-gradient-to-r from-primary via-purple-600 to-pink-600 bg-clip-text text-transparent">
//                   Cutting-Edge
//                 </span>
//                 {" "}Digital Solutions
//               </h1>

//               <p className="text-lg md:text-xl mt-6 text-slate-600 max-w-2xl">
//                 From web development to AI automation, we craft innovative digital experiences that drive growth and deliver results.
//               </p>

//               {/* CTA Buttons */}
//               <div className="flex flex-col sm:flex-row items-center gap-4 mt-8 justify-center md:justify-start">
//                 <Button className="w-full sm:w-auto bg-gradient-to-r from-primary to-purple-600 text-white font-semibold px-8 py-6 shadow-lg hover:shadow-xl transition-all duration-300 group">
//                   Start Your Project
//                   <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
//                 </Button>
//                 <Button
//                   onClick={() => window.open(whatsappUrl, "_blank")}
//                   variant="outline"
//                   className="w-full sm:w-auto font-semibold border-2 border-primary text-primary hover:bg-primary hover:text-white px-8 py-6 transition-all duration-300 group"
//                 >
//                   <MessageCircle className="w-5 h-5 mr-2" />
//                   Chat on WhatsApp
//                 </Button>
//               </div>

//               {/* Social Proof */}
//               <div className="flex items-center gap-4 mt-10 justify-center md:justify-start">
//                 <div className="flex -space-x-3">
//                   {[
//                     "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=200&h=200&auto=format&fit=crop",
//                     "https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=200&h=200&auto=format&fit=crop",
//                     "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=200&h=200&auto=format&fit=crop",
//                     "https://images.unsplash.com/photo-1558655146-9f40138edfeb?q=80&w=200&h=200&auto=format&fit=crop",
//                   ].map((src, i) => (
//                     <img
//                       key={i}
//                       src={src}
//                       alt="service"
//                       className="size-12 border-3 border-white rounded-full hover:-translate-y-1 transition-transform duration-200 object-cover"
//                     />
//                   ))}
//                 </div>
//                 <div>
//                   <div className="flex items-center gap-1">
//                     {[...Array(5)].map((_, i) => (
//                       <svg key={i} className="w-4 h-4 fill-yellow-400" viewBox="0 0 20 20">
//                         <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
//                       </svg>
//                     ))}
//                   </div>
//                   <p className="text-sm text-slate-600 font-medium">Trusted by 200+ clients worldwide</p>
//                 </div>
//               </div>
//             </div>

//             {/* Right Image - Service Showcase */}
//             <div className="flex-1 flex justify-center md:justify-end">
//               <div className="grid grid-cols-2 gap-4 max-w-md">
//                 <div className="bg-white rounded-2xl p-4 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
//                   <img
//                     className="w-full h-32 object-cover rounded-lg mb-3"
//                     src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=400&h=300&auto=format&fit=crop"
//                     alt="Web Development"
//                   />
//                   <h4 className="font-semibold text-slate-900 text-sm">Web Apps</h4>
//                   <p className="text-xs text-slate-600 mt-1">Custom Solutions</p>
//                 </div>
//                 <div className="bg-white rounded-2xl p-4 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 mt-8">
//                   <img
//                     className="w-full h-32 object-cover rounded-lg mb-3"
//                     src="https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=400&h=300&auto=format&fit=crop"
//                     alt="Mobile Apps"
//                   />
//                   <h4 className="font-semibold text-slate-900 text-sm">Mobile Apps</h4>
//                   <p className="text-xs text-slate-600 mt-1">iOS & Android</p>
//                 </div>
//                 <div className="bg-white rounded-2xl p-4 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
//                   <img
//                     className="w-full h-32 object-cover rounded-lg mb-3"
//                     src="https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?q=80&w=400&h=300&auto=format&fit=crop"
//                     alt="SEO & Marketing"
//                   />
//                   <h4 className="font-semibold text-slate-900 text-sm">SEO & Marketing</h4>
//                   <p className="text-xs text-slate-600 mt-1">Growth Strategy</p>
//                 </div>
//                 <div className="bg-white rounded-2xl p-4 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 mt-8">
//                   <img
//                     className="w-full h-32 object-cover rounded-lg mb-3"
//                     src="https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=400&h=300&auto=format&fit=crop"
//                     alt="AI & Automation"
//                   />
//                   <h4 className="font-semibold text-slate-900 text-sm">AI & Automation</h4>
//                   <p className="text-xs text-slate-600 mt-1">Smart Solutions</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default DigitalAgencyPage;