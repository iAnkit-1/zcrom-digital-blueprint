import HeroSection from "@/components/home/HeroSection";
import ServicesSection from "@/components/home/ServicesSection";
import ProjectsSection from "@/components/home/ProjectsSection";
import CompaniesSection from "@/components/home/CompaniesSection";
import WhyChooseSection from "@/components/home/WhyChooseSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import OfferSection from "@/components/home/OfferSection";
import ContactSection from "@/components/home/ContactSection";

const Home = () => {
  return (
    <main>
      <HeroSection />
      <div className="text-center animate-fade-in">
         
              
              <h2 className="text-5xl md:text-6xl font-extrabold mb-8 tracking-tight">
                Our <span className="gradient-text relative inline-block">
                  Services
                  <svg className="absolute -bottom-3 left-0 w-full h-3" viewBox="0 0 200 12" preserveAspectRatio="none">
                    <path d="M0,10 Q100,0 200,10" fill="none" stroke="currentColor" strokeWidth="3" className="text-primary/40" strokeLinecap="round"/>
                  </svg>
                </span>
              </h2>
              <p className="text-muted-foreground text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed font-light">
                End-to-End Digital Solutions — From <span className="text-foreground font-semibold">Idea</span> to <span className="text-foreground font-semibold">Launch</span>
              </p>
            </div>
      <ServicesSection />
      <ProjectsSection />
      <CompaniesSection />
      <WhyChooseSection />
      <TestimonialsSection />
      <OfferSection />
      <ContactSection />
    </main>
  );
};

export default Home;
