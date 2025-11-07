import { Button } from "@/components/ui/button";
import { Zap, MessageCircle, Calendar, ArrowRight } from "lucide-react";

const OfferSection = () => {
  const offerEndDate = new Date();
  offerEndDate.setDate(offerEndDate.getDate() + 7);
  const formattedDate = offerEndDate.toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  });

  const phoneNumber = "919696726607";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent("Hi! I'd like to claim the 20% discount offer.")}`;

  return (
    <section className="m-8 p-20 bg-background">
        <div
          className="p-10 rounded-2xl text-center border text-white shadow-xl relative overflow-hidden"
          style={{
            background:
              "linear-gradient(135deg, hsl(211 100% 50%) 0%, hsl(271 76% 53%) 100%)",
          }}
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full -ml-24 -mb-24" />

          <div className="relative z-10">
            <h2 className="text-3xl font-bold mb-4">
              Get 20% Off Your First Project
            </h2>
            <p className="text-base mb-8 max-w-2xl mx-auto opacity-95 leading-relaxed">
              We're always looking for exceptional talent. Feel free to send us
              your resume and we'll reach out when a suitable position opens up.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button
                onClick={() => window.open(whatsappUrl, "_blank")}
                className="bg-green-500 hover:bg-green-600 text-white font-semibold shadow-lg hover:shadow-xl transition-smooth group"
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                Chat on WhatsApp
              </Button>
              <Button className="bg-white text-primary hover:bg-white/90 font-semibold px-8 shadow-lg">
                <Calendar className="ml-2 h-5 w-5" />
                Book a Session
              </Button>
            </div>
          </div>
      </div>
    </section>
  );
};

export default OfferSection;
