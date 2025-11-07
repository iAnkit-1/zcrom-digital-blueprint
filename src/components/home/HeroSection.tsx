import { Button } from "@/components/ui/button";
import { ArrowRight, MessageCircle, Zap, Users, Award } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const HeroSection = () => {
  const phoneNumber = "919696726607";
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
