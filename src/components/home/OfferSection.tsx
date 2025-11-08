import { Button } from "@/components/ui/button";
import { MessageCircle, Calendar } from "lucide-react";

const OfferSection = () => {
  const offerEndDate = new Date();
  offerEndDate.setDate(offerEndDate.getDate() + 7);
  const formattedDate = offerEndDate.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  const phoneNumber = "919696726607";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    "Hi! I'd like to claim the 20% discount offer."
  )}`;

  return (
    <section className="mx-4 sm:mx-8 md:mx-16 lg:mx-24 my-12">
      <div
        className="relative overflow-hidden text-white border rounded-2xl shadow-xl text-center 
        px-6 py-12 sm:px-10 sm:py-16 md:px-16 md:py-20 
        bg-gradient-to-r from-blue-500 to-purple-600"
      >
        {/* Decorative circles */}
        <div className="absolute top-0 right-0 w-40 h-40 sm:w-56 sm:h-56 bg-white/10 rounded-full -mr-16 -mt-16" />
        <div className="absolute bottom-0 left-0 w-32 h-32 sm:w-48 sm:h-48 bg-white/10 rounded-full -ml-16 -mb-16" />

        {/* Content */}
        <div className="relative z-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
            Get 20% Off Your First Project
          </h2>

          <p className="text-sm sm:text-base md:text-lg mb-8 max-w-2xl mx-auto opacity-95 leading-relaxed">
            Kickstart your journey with us and enjoy an exclusive discount! 
            Offer valid until <strong>{formattedDate}</strong>.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              onClick={() => window.open(whatsappUrl, "_blank")}
              className="w-full sm:w-auto bg-green-500 hover:bg-green-600 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center"
            >
              <MessageCircle className="w-4 h-4 mr-2" />
              Chat on WhatsApp
            </Button>

            <Button className="w-full sm:w-auto bg-white text-primary hover:bg-white/90 font-semibold px-8 shadow-lg flex items-center justify-center">
              <Calendar className="w-5 h-5 mr-2" />
              Book a Session
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OfferSection;
