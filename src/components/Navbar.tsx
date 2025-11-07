import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, ChevronDown } from "lucide-react";

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
    { name: "Blogs", path: "/blogs" },
    { name: "Contact", path: "/contact" },
  ];

  // Each service now has a proper route
  const services = [
    { name: "Website Development", path: "/services/website-development" },
    { name: "Mobile App Development", path: "/services/mobile-application" },
    { name: "UI/UX & Figma Design", path: "/services/ui-ux-figma-design" },
    { name: "Custom Software Development", path: "/services/custom-software" },
    { name: "Cloud Services & Deployment", path: "/services/cloud-services"},
    { name: "IT Consultancy", path: "/services/it-consultancy" },
    { name: "SEO & Digital Marketing", path: "/services/seo-marketing" },
    { name: "AI Automation & Agents", path: "/services/ai-automation" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur-md shadow-md" : "bg-transparent"
      }`}
    >
      {/* Offer bar */}
      <div className="w-full bg-gradient-primary text-white text-sm py-2 px-4 text-center font-medium">
        🚀 Exclusive Offer: Get <span className="font-bold">20% OFF</span> on your first project with ZCROM!{" "}
        <Link
          to="/contact"
          className="underline font-semibold hover:text-yellow-200 transition-colors"
        >
          Contact Us Now →
        </Link>
      </div>

      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center transition-transform group-hover:scale-105">
              <span className="text-white font-bold text-xl">Z</span>
            </div>
            <span className="text-2xl font-bold text-foreground">ZCROM</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) =>
              link.name === "Services" ? (
                <div key={link.name} className="relative group">
                  <button
                    className={`flex items-center gap-1 text-sm font-medium transition-colors ${
                      isActive(link.path)
                        ? "text-primary"
                        : "text-foreground hover:text-primary"
                    }`}
                  >
                    Services
                    <ChevronDown size={16} />
                  </button>
                  {/* Dropdown */}
                  <div className="absolute left-0 top-full mt-2 hidden group-hover:block bg-background border rounded-xl shadow-lg py-2 w-72">
                    {services.map((service, i) => (
                      <Link
                        key={i}
                        to={service.path}
                        className="block px-4 py-2 text-sm text-foreground hover:bg-muted transition-colors"
                      >
                        {service.name}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-sm font-medium transition-colors relative group ${
                    isActive(link.path)
                      ? "text-primary"
                      : "text-foreground hover:text-primary"
                  }`}
                >
                  {link.name}
                  <span
                    className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full ${
                      isActive(link.path) ? "w-full" : ""
                    }`}
                  />
                </Link>
              )
            )}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Button
              asChild
              size="lg"
              className="gradient-primary text-white font-semibold shadow-glow w-full"
            >
              <Link to="/contact">Contact Now</Link>
            </Button>
          </div>

          {/* Mobile Menu */}
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon">
                <Menu size={24} />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px] overflow-y-auto">
              <nav className="flex flex-col gap-4 mt-8">
                {navLinks.map((link) =>
                  link.name === "Services" ? (
                    <div key={link.name}>
                      <button
                        onClick={() => setIsServicesOpen(!isServicesOpen)}
                        className={`w-full text-left text-base font-medium py-3 px-4 rounded-lg transition-colors flex justify-between items-center ${
                          isServicesOpen
                            ? "bg-primary text-primary-foreground"
                            : "text-foreground hover:bg-muted"
                        }`}
                      >
                        Services
                        <ChevronDown
                          size={18}
                          className={`transition-transform ${
                            isServicesOpen ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                      {isServicesOpen && (
                        <div className="mt-2 ml-4 flex flex-col gap-1">
                          {services.map((service, i) => (
                            <Link
                              key={i}
                              to={service.path}
                              onClick={() => setIsMobileMenuOpen(false)}
                              className="block px-3 py-2 text-sm rounded-md text-foreground hover:bg-muted transition-colors"
                            >
                              {service.name}
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
                      className={`text-base font-medium py-3 px-4 rounded-lg transition-colors ${
                        isActive(link.path)
                          ? "bg-primary text-primary-foreground"
                          : "text-foreground hover:bg-muted"
                      }`}
                    >
                      {link.name}
                    </Link>
                  )
                )}
                <Button
                  asChild
                  size="lg"
                  className="bg-primary hover:bg-primary-hover text-primary-foreground w-full mt-4"
                >
                  <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                    Contact Now
                  </Link>
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
