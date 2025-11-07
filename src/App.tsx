import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import About from "./pages/About";
import Career from "./pages/Career";
import Contact from "./pages/Contact";
import WebsiteDevelopment from "./pages/services/WebsiteDevelopment";
import CustomSoftware from "./pages/services/CustomSoftware";
import MobileApplication from "./pages/services/MobileApplication";
import GraphicDesign from "./pages/services/GraphicDesign";
import ITConsultancy from "./pages/services/ITConsultancy";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <div className="flex-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/about" element={<About />} />
              <Route path="/career" element={<Career />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/services/website-development" element={<WebsiteDevelopment />} />
              <Route path="/services/custom-software" element={<CustomSoftware />} />
              <Route path="/services/mobile-application" element={<MobileApplication />} />
              <Route path="/services/graphic-design" element={<GraphicDesign />} />
              <Route path="/services/it-consultancy" element={<ITConsultancy />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
          <Footer />
          <WhatsAppButton />
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
