import { useState } from "react";
import emailjs from "emailjs-com";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  MapPin,
  Phone,
  Mail,
  Facebook,
  Instagram,
  Youtube,
  Twitter,
  Linkedin,
  Send,
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const result = await emailjs.send(
        "service_803gpda", // Replace with your EmailJS service ID
        "template_pyrudzb", // Replace with your EmailJS template ID
        {
          name: formData.name,
          email: formData.email,
          projectType: formData.projectType,
          message: formData.message,
        },
        "fSmuKtLvEEbN4xQf6" // Replace with your public key
      );

      console.log("EmailJS Result:", result.text);
      toast({
        title: "✅ Message Sent!",
        description: "Thank you for reaching out. We'll get back to you soon.",
      });

      setFormData({ name: "", email: "", projectType: "", message: "" });
    } catch (error) {
      console.error("EmailJS Error:", error);
      toast({
        title: "❌ Failed to Send Message",
        description:
          "Please try again later or contact us directly via email.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl lg:text-5xl font-bold">
            Contact{" "}
            <span className="gradient-text relative inline-block">
              Us
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
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Let's discuss your project and bring your ideas to life
          </p>
        </div>

        {/* Grid: Form + Info */}
        <div className="grid lg:grid-cols-2 gap-12 items-stretch">
          {/* Left: Contact Form */}
          <div className="bg-card border border-border rounded-xl p-8 shadow-sm flex flex-col justify-between">
            <h3 className="text-2xl font-bold mb-6">Fill out the form below</h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label
                    htmlFor="name"
                    className="block text-sm font-semibold"
                  >
                    Your Name <span className="text-primary">*</span>
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    required
                    className="h-12"
                  />
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold"
                  >
                    Email Address <span className="text-primary">*</span>
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    required
                    className="h-12"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="projectType"
                  className="block text-sm font-semibold"
                >
                  Project Type <span className="text-primary">*</span>
                </label>
                <Input
                  id="projectType"
                  name="projectType"
                  value={formData.projectType}
                  onChange={handleChange}
                  placeholder="e.g., Website Development, Mobile App, E-commerce"
                  required
                  className="h-12"
                />
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="message"
                  className="block text-sm font-semibold"
                >
                  Project Details <span className="text-primary">*</span>
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your project, requirements, timeline, and budget..."
                  rows={6}
                  required
                  className="resize-none"
                />
                <p className="text-xs text-muted-foreground">
                  The more details you provide, the better we can understand
                  your needs.
                </p>
              </div>

              <Button
                type="submit"
                size="lg"
                disabled={loading}
                className="w-full gradient-primary hover:opacity-90 hover:scale-[1.02] transition-all duration-300 font-semibold py-6 shadow-lg group"
              >
                {loading ? "Sending..." : "Send Message"}
                {!loading && (
                  <Send
                    size={18}
                    className="ml-2 group-hover:translate-x-1 transition-transform"
                  />
                )}
              </Button>

              <p className="text-xs text-center text-muted-foreground">
                By submitting this form, you agree to our privacy policy.
              </p>
            </form>
          </div>

          {/* Right: Contact Info */}
          <div className="bg-card border border-border rounded-xl p-12 shadow-sm flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-bold mb-6 gradient-text">
                Meet ZCROM Support Team
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Your reliable partner for website and software development
                services. Reach out to us — we’re here to help you build and
                grow your digital presence.
              </p>

              <div className="space-y-8">
                <div className="flex gap-3">
                  <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <p className="text-sm text-muted-foreground">
                    828X+2J9, Bahadur Rd, Opp. Baldhar Beer Baba, Near Siv
                    Katra, Madhiya, near Kolkata Bazaar, Padao, Varanasi,
                    Uttar Pradesh 221008
                  </p>
                </div>
                <div className="flex gap-3">
                  <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                  <div className="text-sm text-muted-foreground">
                    <a
                      href="tel:+919696726607"
                      className="hover:text-primary transition-smooth"
                    >
                      +91 96967 26607
                    </a>
                    <br />
                    <a
                      href="tel:+916392945727"
                      className="hover:text-primary transition-smooth"
                    >
                      +91 63929 45727
                    </a>
                  </div>
                </div>
                <div className="flex gap-3">
                  <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                  <div className="text-sm text-muted-foreground">
                    <a
                      href="mailto:contact@zcrom.com"
                      className="hover:text-primary transition-smooth"
                    >
                      contact@zcrom.com
                    </a>
                    <br />
                    <a
                      href="mailto:support@zcrom.com"
                      className="hover:text-primary transition-smooth"
                    >
                      support@zcrom.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex gap-3 mt-8 pt-6 border-t border-border">
              <a
                href="https://instagram.com"
                className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center text-white hover:scale-110 transition-smooth"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://facebook.com"
                className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white hover:scale-110 transition-smooth"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://youtube.com"
                className="w-10 h-10 rounded-full bg-red-600 flex items-center justify-center text-white hover:scale-110 transition-smooth"
              >
                <Youtube className="w-5 h-5" />
              </a>
              <a
                href="mailto:contact@zcrom.com"
                className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center text-white hover:scale-110 transition-smooth"
              >
                <Mail className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com"
                className="w-10 h-10 rounded-full bg-sky-500 flex items-center justify-center text-white hover:scale-110 transition-smooth"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com"
                className="w-10 h-10 rounded-full bg-blue-700 flex items-center justify-center text-white hover:scale-110 transition-smooth"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
