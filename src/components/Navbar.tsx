// import { useState, useEffect } from "react";
// import { Link, useLocation } from "react-router-dom";
// import { Button } from "@/components/ui/button";
// import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
// import { Menu, ChevronDown } from "lucide-react";

// const Navbar = () => {
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const [isServicesOpen, setIsServicesOpen] = useState(false);
//   const location = useLocation();

//   useEffect(() => {
//     const handleScroll = () => setIsScrolled(window.scrollY > 20);
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const navLinks = [
//     { name: "Home", path: "/" },
//     { name: "Services", path: "#" },
//     { name: "Portfolio", path: "/portfolio" },
//     { name: "About", path: "/about" },
//     { name: "Career", path: "/career" },
//     { name: "Contact", path: "/contact" },
//   ];

//   const services = [
//     { name: "Website Development", path: "/services/website-development" },
//     { name: "Mobile App Development", path: "/services/mobile-application" },
//     { name: "Custom Software Development", path: "/services/custom-software" },
//     { name: "AI Automation & Agents", path: "/services/ai-automation" },
//     { name: "UI/UX & Figma Design", path: "/services/ui-ux-figma-design" },
//     { name: "Cloud Services & Deployment", path: "/services/cloud-services" },
//     { name: "System Design Solutions", path: "/services/system-design" },
//     { name: "SEO & Digital Marketing", path: "/services/seo-marketing" },
//     { name: "IT Consultancy", path: "/services/it-consultancy" },
//   ];

//   const isActive = (path: string) => location.pathname === path;

//   return (
//     <nav
//       className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
//         isScrolled
//           ? "bg-background/95 backdrop-blur-md shadow-md"
//           : "bg-transparent"
//       }`}
//     >
//       {/* Offer Bar - only visible when not scrolled */}
//       {!isScrolled && (
//         <div className="w-full bg-gradient-primary text-white text-sm py-2 px-4 text-center font-medium">
//           🚀 Exclusive Offer: Get{" "}
//           <span className="font-bold">20% OFF</span> on your first project with
//           ZCROM!{" "}
//           <Link
//             to="/contact"
//             className="underline font-semibold hover:text-yellow-200 transition-colors"
//           >
//             Contact Us Now →
//           </Link>
//         </div>
//       )}

//       <div className="container mx-auto px-4">
//         <div className="flex items-center justify-between h-20">
//           {/* Logo */}
//           <Link to="/" className="flex items-center gap-3 group">
//             <div className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center transition-transform group-hover:scale-105">
//               <span className="text-white font-bold text-xl">Z</span>
//             </div>
//             <span className="text-2xl font-bold text-foreground">ZCROM</span>
//           </Link>

//           {/* Desktop Navigation */}
//           <div className="hidden lg:flex items-center gap-8">
//             {navLinks.map((link) =>
//               link.name === "Services" ? (
//                 <div key={link.name} className="relative group">
//                   <button
//                     className={`flex items-center gap-1 text-sm font-medium transition-colors ${
//                       isActive(link.path)
//                         ? "text-primary"
//                         : "text-foreground hover:text-primary"
//                     }`}
//                   >
//                     Services
//                     <ChevronDown size={16} />
//                   </button>

//                   {/* Dropdown */}
//                   <div className="absolute left-0 top-full mt-2 hidden group-hover:block bg-background border rounded-xl shadow-lg py-2 w-72">
//                     {services.map((service, i) => (
//                       <Link
//                         key={i}
//                         to={service.path}
//                         className="block px-4 py-2 text-sm text-foreground hover:bg-muted transition-colors"
//                       >
//                         {service.name}
//                       </Link>
//                     ))}
//                   </div>
//                 </div>
//               ) : (
//                 <Link
//                   key={link.path}
//                   to={link.path}
//                   className={`text-sm font-medium transition-colors relative group ${
//                     isActive(link.path)
//                       ? "text-primary"
//                       : "text-foreground hover:text-primary"
//                   }`}
//                 >
//                   {link.name}
//                   <span
//                     className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full ${
//                       isActive(link.path) ? "w-full" : ""
//                     }`}
//                   />
//                 </Link>
//               )
//             )}
//           </div>

//           {/* CTA Button */}
//           <div className="hidden lg:block">
//             <Button
//               asChild
//               size="lg"
//               className="gradient-primary text-white font-semibold shadow-glow w-full"
//             >
//               <Link to="/contact">Contact Now</Link>
//             </Button>
//           </div>

//           {/* Mobile Menu */}
//           <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
//             <SheetTrigger asChild className="lg:hidden">
//               <Button variant="ghost" size="icon">
//                 <Menu size={24} />
//               </Button>
//             </SheetTrigger>
//             <SheetContent
//               side="right"
//               className="w-[300px] sm:w-[400px] overflow-y-auto"
//             >
//               <nav className="flex flex-col gap-4 mt-8">
//                 {navLinks.map((link) =>
//                   link.name === "Services" ? (
//                     <div key={link.name}>
//                       <button
//                         onClick={() => setIsServicesOpen(!isServicesOpen)}
//                         className={`w-full text-left text-base font-medium py-3 px-4 rounded-lg transition-colors flex justify-between items-center ${
//                           isServicesOpen
//                             ? "gradient-primary text-white font-semibold shadow-glow w-full"
//                             : "text-foreground hover:bg-muted"
//                         }`}
//                       >
//                         Services
//                         <ChevronDown
//                           size={18}
//                           className={`transition-transform ${
//                             isServicesOpen ? "rotate-180" : ""
//                           }`}
//                         />
//                       </button>
//                       {isServicesOpen && (
//                         <div className="mt-2 ml-4 flex flex-col gap-1">
//                           {services.map((service, i) => (
//                             <Link
//                               key={i}
//                               to={service.path}
//                               onClick={() => setIsMobileMenuOpen(false)}
//                               className="block px-3 py-2 text-sm rounded-md text-foreground hover:bg-muted transition-colors"
//                             >
//                               {service.name}
//                             </Link>
//                           ))}
//                         </div>
//                       )}
//                     </div>
//                   ) : (
//                     <Link
//                       key={link.path}
//                       to={link.path}
//                       onClick={() => setIsMobileMenuOpen(false)}
//                       className={`text-base font-medium py-3 px-4 rounded-lg transition-colors ${
//                         isActive(link.path)
//                           ? "gradient-primary text-white font-semibold shadow-glow w-full"
//                           : "text-foreground hover:bg-muted"
//                       }`}
//                     >
//                       {link.name}
//                     </Link>
//                   )
//                 )}
//                 <Button
//                   asChild
//                   size="lg"
//                   className="gradient-primary text-white font-semibold shadow-glow w-full"
//                 >
//                   <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)}>
//                     Contact Now
//                   </Link>
//                 </Button>
//               </nav>
//                <div className="text-center mt-20 space-y-4">
//           <h2 className="text-5xl md:text-6xl font-extrabold mb-8 tracking-tight">
//             <span className="gradient-text relative inline-block">
//               ZCROM
//               <svg
//                 className="absolute -bottom-3 left-0 w-full h-3"
//                 viewBox="0 0 200 12"
//                 preserveAspectRatio="none"
//               >
//                 <path
//                   d="M0,10 Q100,0 200,10"
//                   fill="none"
//                   stroke="currentColor"
//                   strokeWidth="3"
//                   className="text-primary/40"
//                   strokeLinecap="round"
//                 />
//               </svg>
//             </span>
//           </h2>
//           <p className="text-lg text-gray-600 max-w-2xl mx-auto">
//             Transforming ideas into successful digital products
//           </p>
//         </div>
//             </SheetContent>
//           </Sheet>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;


import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, ChevronDown, X, Sparkles } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Services", path: "#" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "About", path: "/about" },
    { name: "Career", path: "/career" },
    { name: "Contact", path: "/contact" },
  ];

  const services = [
    { name: "Website Development", path: "/services/website-development", icon: "🌐" },
    { name: "Mobile App Development", path: "/services/mobile-application", icon: "📱" },
    { name: "Custom Software Development", path: "/services/custom-software", icon: "⚙️" },
    { name: "AI Automation & Agents", path: "/services/ai-automation", icon: "🤖" },
    { name: "UI/UX & Figma Design", path: "/services/ui-ux-figma-design", icon: "🎨" },
    { name: "Cloud Services & Deployment", path: "/services/cloud-services", icon: "☁️" },
    { name: "System Design Solutions", path: "/services/system-design", icon: "🏗️" },
    { name: "SEO & Digital Marketing", path: "/services/seo-marketing", icon: "📊" },
    { name: "IT Consultancy", path: "/services/it-consultancy", icon: "💼" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-white/80 dark:bg-gray-900/80 backdrop-blur-2xl shadow-lg border-b border-gray-200/50 dark:border-gray-800/50"
          : "bg-transparent"
      }`}
    >
      {/* Premium Offer Bar */}
      {!isScrolled && (
        <div className="relative w-full bg-gradient-to-r from-violet-600 via-purple-600 to-fuchsia-600 text-white overflow-hidden">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRjMC0yLjIxLTEuNzktNC00LTRzLTQgMS43OS00IDQgMS43OSA0IDQgNCA0LTEuNzkgNC00em0wLTEwYzAtMi4yMS0xLjc5LTQtNC00cy00IDEuNzktNCA0IDEuNzkgNCA0IDQgNC0xLjc5IDQtNHoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-30"></div>
          <div className="relative z-10 container mx-auto px-4 py-2.5 flex items-center justify-center gap-2 text-sm font-medium">
            <Sparkles size={16} className="animate-pulse" />
            <span className="hidden sm:inline">Limited Time Offer:</span>
            <span className="font-bold">Get 20% OFF</span>
            <span className="hidden md:inline">on your first project with ZCROM!</span>
            <Link
              to="/contact"
              className="ml-2 px-3 py-1 bg-white/20 hover:bg-white/30 rounded-full font-semibold transition-all duration-300 hover:scale-105 backdrop-blur-sm"
            >
              Claim Now →
            </Link>
          </div>
        </div>
      )}

      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Premium Logo */}
          <Link to="/" className="flex items-center gap-3 group relative">
            <div className="relative">
              {/* Animated gradient ring */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-violet-600 via-purple-600 to-fuchsia-600 opacity-0 group-hover:opacity-100 blur-lg transition-opacity duration-500"></div>
              
              {/* Logo container */}
              <div className="relative w-12 h-12 rounded-2xl bg-gradient-to-br from-violet-600 via-purple-600 to-fuchsia-600 flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:rotate-6 shadow-xl">
                <span className="text-white font-bold text-2xl font-sans">Z</span>
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/20 to-transparent"></div>
              </div>
            </div>
            
            <div className="flex flex-col">
              <span className="text-2xl font-bold bg-gradient-to-r from-violet-600 via-purple-600 to-fuchsia-600 bg-clip-text text-transparent">
                ZCROM
              </span>
              <span className="text-[10px] font-medium text-gray-500 dark:text-gray-400 -mt-1">
                Digital Solutions
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) =>
              link.name === "Services" ? (
                <div key={link.name} className="relative group">
                  <button
                    className={`flex items-center gap-1.5 px-4 py-2 text-sm font-semibold rounded-xl transition-all duration-300 ${
                      isActive(link.path)
                        ? "text-violet-600 bg-violet-50 dark:bg-violet-950/30"
                        : "text-gray-700 dark:text-gray-300 hover:text-violet-600 hover:bg-gray-50 dark:hover:bg-gray-800/50"
                    }`}
                  >
                    Services
                    <ChevronDown size={14} className="transition-transform group-hover:rotate-180 duration-300" />
                  </button>

                  {/* Modern Dropdown */}
                  <div className="absolute left-0 top-full mt-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:translate-y-0 translate-y-2">
                    <div className="bg-white dark:bg-gray-900 backdrop-blur-2xl border border-gray-200 dark:border-gray-800 rounded-2xl shadow-2xl py-4 w-80 overflow-hidden">
                      {/* Gradient header */}
                      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-violet-600 via-purple-600 to-fuchsia-600"></div>
                      
                      <div className="px-2 ">
                        {services.map((service, i) => (
                          <Link
                            key={i}
                            to={service.path}
                            className="group/item flex items-center gap-3 px-4 py-3 rounded-xl text-sm text-gray-700 dark:text-gray-300 hover:bg-gradient-to-r hover:from-violet-50 hover:to-fuchsia-50 dark:hover:from-violet-950/30 dark:hover:to-fuchsia-950/30 transition-all duration-200 border-l-4 border-transparent hover:border-violet-600"
                          >
                            <span className="text-2xl group-hover/item:scale-125 transition-transform duration-200">
                              {service.icon}
                            </span>
                            <span className="font-medium group-hover/item:text-violet-600 transition-colors">
                              {service.name}
                            </span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`relative px-4 py-2 text-sm font-semibold rounded-xl transition-all duration-300 ${
                    isActive(link.path)
                      ? "text-violet-600 bg-violet-50 dark:bg-violet-950/30"
                      : "text-gray-700 dark:text-gray-300 hover:text-violet-600 hover:bg-gray-50 dark:hover:bg-gray-800/50"
                  }`}
                >
                  {link.name}
                  {isActive(link.path) && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 bg-violet-600 rounded-full"></span>
                  )}
                </Link>
              )
            )}
          </div>

          {/* Premium CTA Button */}
          <div className="hidden lg:block">
            <Button
              asChild
              size="lg"
              className="relative bg-gradient-to-r from-violet-600 via-purple-600 to-fuchsia-600 hover:from-violet-700 hover:via-purple-700 hover:to-fuchsia-700 text-white font-bold shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 rounded-xl px-6 border-0 overflow-hidden group"
            >
              <Link to="/contact" className="relative z-10">
                <span className="flex items-center gap-2">
                  Get Started
                  <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
              </Link>
            </Button>
          </div>

          {/* Mobile Menu Trigger */}
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button 
                variant="ghost" 
                size="icon"
                className="hover:bg-violet-50 dark:hover:bg-violet-950/30 rounded-xl"
              >
                <Menu size={24} className="text-gray-700 dark:text-gray-300" />
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-[320px] sm:w-[400px] bg-white dark:bg-gray-900 border-l border-gray-200 dark:border-gray-800 overflow-y-auto"
            >
              {/* Mobile Menu Header */}
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-violet-600 via-purple-600 to-fuchsia-600 flex items-center justify-center shadow-lg">
                    <span className="text-white font-bold text-lg">Z</span>
                  </div>
                  <span className="text-xl font-bold bg-gradient-to-r from-violet-600 to-fuchsia-600 bg-clip-text text-transparent">
                    ZCROM
                  </span>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="hover:bg-gray-100 dark:hover:bg-gray-800 rounded-xl"
                >
                  <X size={20} />
                </Button>
              </div>

              {/* Mobile Navigation */}
              <nav className="flex flex-col gap-2">
                {navLinks.map((link) =>
                  link.name === "Services" ? (
                    <div key={link.name}>
                      <button
                        onClick={() => setIsServicesOpen(!isServicesOpen)}
                        className={`w-full text-left text-base font-semibold py-3 px-4 rounded-xl transition-all duration-300 flex justify-between items-center ${
                          isServicesOpen
                            ? "bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white shadow-lg"
                            : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                        }`}
                      >
                        Services
                        <ChevronDown
                          size={18}
                          className={`transition-transform duration-300 ${
                            isServicesOpen ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                      {isServicesOpen && (
                        <div className="mt-2 ml-2 space-y-1">
                          {services.map((service, i) => (
                            <Link
                              key={i}
                              to={service.path}
                              onClick={() => setIsMobileMenuOpen(false)}
                              className="flex items-center gap-3 px-4 py-2.5 text-sm rounded-xl text-gray-700 dark:text-gray-300 hover:bg-violet-50 dark:hover:bg-violet-950/30 hover:text-violet-600 transition-all duration-200"
                            >
                              <span className="text-lg">{service.icon}</span>
                              <span className="font-medium">{service.name}</span>
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      key={link.path}
                      to={link.path}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`text-base font-semibold py-3 px-4 rounded-xl transition-all duration-300 ${
                        isActive(link.path)
                          ? "bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white shadow-lg"
                          : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                      }`}
                    >
                      {link.name}
                    </Link>
                  )
                )}
                
                <Button
                  asChild
                  size="lg"
                  className="mt-4 bg-gradient-to-r from-violet-600 via-purple-600 to-fuchsia-600 hover:from-violet-700 hover:via-purple-700 hover:to-fuchsia-700 text-white font-bold shadow-lg rounded-xl border-0"
                >
                  <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                    Get Started
                  </Link>
                </Button>
              </nav>

              {/* Mobile Menu Footer */}
              <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800">
                <div className="text-center space-y-3">
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-violet-600 to-fuchsia-600 bg-clip-text text-transparent">
                    ZCROM
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Transforming ideas into successful digital products
                  </p>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;