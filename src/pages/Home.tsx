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
