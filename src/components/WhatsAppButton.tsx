import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  const phoneNumber = "919696726607";
  const message = "Hi ZCROM! I'm interested in your services.";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 group"
    >
      <div className="relative">
        <div className="w-14 h-14 bg-green-500 rounded-full flex items-center justify-center text-white shadow-lg hover:shadow-xl hover:scale-110 transition-smooth animate-float">
          <MessageCircle className="w-7 h-7" />
        </div>
        <span className="absolute -top-2 -left-28 bg-foreground text-background px-3 py-1 rounded-lg text-sm font-medium opacity-0 group-hover:opacity-100 transition-smooth whitespace-nowrap">
          WhatsApp Now
        </span>
      </div>
    </a>
  );
};

export default WhatsAppButton;
