import { Button } from "@/components/ui/button";
import { Zap, MessageCircle, Calendar } from "lucide-react";

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
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="relative rounded-2xl gradient-primary p-1 shadow-glow">
          <div className="bg-background rounded-xl p-8 lg:p-12">
            <div className="text-center space-y-6">
              <div className="inline-flex items-center gap-2 bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full text-sm font-semibold">
                <Zap className="w-4 h-4" />
                Limited Time Offer
              </div>
              
              <h2 className="text-3xl lg:text-5xl font-bold">
                Get <span className="gradient-text">20% Off</span> Your First Project
              </h2>
              
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Contact us today and get free consultation + priority onboarding
              </p>
              
              <p className="text-sm text-muted-foreground">
                Offer valid till <span className="font-semibold text-foreground">{formattedDate}</span>
              </p>

              <div className="flex flex-wrap gap-4 justify-center pt-4">
                <Button
                  onClick={() => window.open(whatsappUrl, "_blank")}
                  className="bg-green-500 hover:bg-green-600 text-white font-semibold shadow-lg hover:shadow-xl transition-smooth group"
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Chat on WhatsApp
                </Button>
                <Button className="gradient-primary text-white font-semibold shadow-glow hover:shadow-lg transition-smooth group">
                  <Calendar className="w-4 h-4 mr-2" />
                  Book a Session
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OfferSection;
