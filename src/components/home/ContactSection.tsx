import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Facebook, Instagram, Youtube, Twitter, Linkedin } from "lucide-react";
import { toast } from "sonner";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "",
    details: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent! We'll get back to you soon.");
    setFormData({ name: "", email: "", projectType: "", details: "" });
  };

  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl lg:text-5xl font-bold">
            Contact <span className="gradient-text">Us</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Let's discuss your project and bring your ideas to life
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left: Form */}
          <div className="bg-card border border-border rounded-xl p-8 shadow-sm">
            <h3 className="text-2xl font-bold mb-6">Fill out the form below</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Input
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="h-12"
                />
              </div>
              <div>
                <Input
                  type="email"
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="h-12"
                />
              </div>
              <div>
                <Input
                  placeholder="e.g., Website Development, Mobile App"
                  value={formData.projectType}
                  onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                  required
                  className="h-12"
                />
              </div>
              <div>
                <Textarea
                  placeholder="Tell us about your project, requirements, timeline, and budget..."
                  value={formData.details}
                  onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                  required
                  rows={6}
                />
              </div>
              <Button type="submit" className="w-full gradient-primary text-white font-semibold h-12">
                Send Message
              </Button>
            </form>
          </div>

          {/* Right: Info */}
          <div className="space-y-8">
            <div className="bg-card border border-border rounded-xl p-8 shadow-sm">
              <h3 className="text-2xl font-bold mb-6 gradient-text">Meet ZCROM Support Team</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Your reliable partner for website and software development services. Reach out to us — we're here to help you build and grow your digital presence.
              </p>

              <div className="space-y-4">
                <div className="flex gap-3">
                  <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <p className="text-sm text-muted-foreground">
                    828X+2J9, Bahadur Rd, Opp. Baldhar Beer Baba, Near Siv Katra, Madhiya, near Kolkata Bazaar, Padao, Varanasi, Uttar Pradesh 221008
                  </p>
                </div>
                <div className="flex gap-3">
                  <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                  <div className="text-sm text-muted-foreground">
                    <a href="tel:+919696726607" className="hover:text-primary transition-smooth">
                      +91 96967 26607
                    </a>
                    <br />
                    <a href="tel:+916392945727" className="hover:text-primary transition-smooth">
                      +91 63929 45727
                    </a>
                  </div>
                </div>
                <div className="flex gap-3">
                  <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                  <div className="text-sm text-muted-foreground">
                    <a href="mailto:contact@zcrom.com" className="hover:text-primary transition-smooth">
                      contact@zcrom.com
                    </a>
                    <br />
                    <a href="mailto:support@zcrom.com" className="hover:text-primary transition-smooth">
                      support@zcrom.com
                    </a>
                  </div>
                </div>
              </div>

              <div className="flex gap-3 mt-6 pt-6 border-t border-border">
                <a href="https://instagram.com" className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center text-white hover:scale-110 transition-smooth">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="https://facebook.com" className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white hover:scale-110 transition-smooth">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="https://youtube.com" className="w-10 h-10 rounded-full bg-red-600 flex items-center justify-center text-white hover:scale-110 transition-smooth">
                  <Youtube className="w-5 h-5" />
                </a>
                <a href="mailto:contact@zcrom.com" className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center text-white hover:scale-110 transition-smooth">
                  <Mail className="w-5 h-5" />
                </a>
                <a href="https://twitter.com" className="w-10 h-10 rounded-full bg-sky-500 flex items-center justify-center text-white hover:scale-110 transition-smooth">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="https://linkedin.com" className="w-10 h-10 rounded-full bg-blue-700 flex items-center justify-center text-white hover:scale-110 transition-smooth">
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
