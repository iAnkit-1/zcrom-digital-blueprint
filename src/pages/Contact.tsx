


import { useState } from "react";
import emailjs from "emailjs-com";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone, Linkedin, MapPin, Send, Clock, Sparkles, MessageCircle, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "",
    message: ""
  });
  const [Loading, setLoading] = useState(false);

const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const result = await emailjs.send(
        "service_803gpda",
        "template_pyrudzb",
        {
          name: formData.name,
          email: formData.email,
          projectType: formData.projectType,
          message: formData.message,
        },
        "fSmuKtLvEEbN4xQf6"
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
        description: "Please try again later or contact us directly via email.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-background">
      
      <main className="pt-14 pb-20">
        <section className="container mx-auto mt-28 px-4 lg:px-8 py-18">
          <div className="max-w-5xl mx-auto text-center animate-fade-in-up">
            <h1 className="text-5xl md:text-7xl font-black mb-8 tracking-tight leading-[1.1]">
              Let's build something
              <span className="gradient-text relative inline-block">
                Great Together
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
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
             Whether you need a website, app, or automation system our team at ZCROM is ready to collaborate.
            </p>

           
          </div>
        </section>

        {/* Contact Form & Info */}
        <section className="container mx-auto px-4 lg:px-8 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Enhanced Contact Form */}
            <div className="lg:col-span-2">
              <Card className="border-border bg-card/60 backdrop-blur-sm hover:border-primary/30 transition-all duration-300 shadow-lg">
                <CardHeader className="space-y-1">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-8 h-8 rounded-lg bg-gradient-primary flex items-center justify-center">
                      <Send size={16} className="text-white" />
                    </div>
                    <CardTitle className="text-2xl md:text-3xl">Send us a Message</CardTitle>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Fill out the form below and we'll get back to you as soon as possible
                  </p>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="name" className="block text-sm font-semibold">
                          Your Name <span className="text-primary">*</span>
                        </label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="John Doe"
                          required
                          className="bg-background border-border focus:border-primary transition-colors h-12"
                        />
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="email" className="block text-sm font-semibold">
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
                          className="bg-background border-border focus:border-primary transition-colors h-12"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="projectType" className="block text-sm font-semibold">
                        Project Type <span className="text-primary">*</span>
                      </label>
                      <Input
                        id="projectType"
                        name="projectType"
                        value={formData.projectType}
                        onChange={handleChange}
                        placeholder="e.g., Website Development, Mobile App, E-commerce"
                        required
                        className="bg-background border-border focus:border-primary transition-colors h-12"
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="message" className="block text-sm font-semibold">
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
                        className="bg-background border-border focus:border-primary transition-colors resize-none"
                      />
                      <p className="text-xs text-muted-foreground">
                        The more details you provide, the better we can understand your needs
                      </p>
                    </div>

                    <Button 
                      type="submit" 
                      size="lg" 
                      className="w-full gradient-primary hover:opacity-90 hover:scale-[1.02] transition-all duration-300 font-semibold py-6 shadow-lg group"
                    >
                      Send Message
                      <Send size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>

                    <p className="text-xs text-center text-muted-foreground">
                      By submitting this form, you agree to our privacy policy
                    </p>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Enhanced Contact Info Cards */}
            <div className="space-y-6">
              {/* Email Card */}
              <Card className="group border-border bg-card/60 backdrop-blur-sm hover:border-primary/50 hover:shadow-xl hover:scale-105 transition-all duration-300">
                <CardContent className="pt-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-14 h-14 rounded-xl bg-gradient-primary flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <Mail  size={24} />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-lg mb-2">Email Us</h3>
                      <a 
                        href="mailto:contact@zcrom.com"
                        className="text-sm text-primary hover:underline block mb-1"
                      >
                        contact@zcrom.com
                      </a>
                      <a 
                        href="mailto:support@zcrom.com"
                        className="text-sm text-primary hover:underline block"
                      >
                        support@zcrom.com
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Phone Card */}
              <Card className="group border-border bg-card/60 backdrop-blur-sm hover:border-primary/50 hover:shadow-xl hover:scale-105 transition-all duration-300">
                <CardContent className="pt-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-14 h-14 rounded-xl bg-gradient-secondary flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <Phone  size={24} />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-lg mb-2">Call Us</h3>
                      <a 
                        href="tel:+919335059380"
                        className="text-sm text-primary hover:underline block mb-1 font-medium"
                      >
                        +91 9335059380
                      </a>
                      <p className="text-xs text-muted-foreground">Mon-Sat, 9AM-6PM IST</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Location Card */}
              <Card className="group border-border bg-card/60 backdrop-blur-sm hover:border-primary/50 hover:shadow-xl hover:scale-105 transition-all duration-300">
                <CardContent className="pt-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-14 h-14 rounded-xl bg-gradient-primary flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <MapPin  size={24} />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-lg mb-2">Visit Us</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Tech Park, Sector 5<br />
                        Bangalore, India 560001
                      </p>
                      <a 
                        href="https://maps.google.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs text-primary hover:underline mt-2 inline-block"
                      >
                        Get Directions →
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Social Card */}
              <Card className="group border-border bg-card/60 backdrop-blur-sm hover:border-primary/50 hover:shadow-xl hover:scale-105 transition-all duration-300">
                <CardContent className="pt-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-14 h-14 rounded-xl bg-gradient-secondary flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <Linkedin  size={24} />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-lg mb-2">Connect</h3>
                      <a
                        href="https://linkedin.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-primary hover:underline block"
                      >
                        Follow us on LinkedIn →
                      </a>
                      <p className="text-xs text-muted-foreground mt-1">Stay updated with our latest work</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Quick Info Card */}
              <Card className="border-primary/30 bg-gradient-to-br from-primary/10 to-transparent backdrop-blur-sm">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-2 mb-3">
                    <Sparkles className="text-primary flex-shrink-0 mt-1" size={20} />
                    <div>
                      <h3 className="font-bold text-sm mb-1">Fast Response</h3>
                      <p className="text-xs text-muted-foreground leading-relaxed">
                        We typically respond to all inquiries within 2-4 hours during business hours
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Trust Section */}
        <section className="container mx-auto px-4 lg:px-8 py-12">
          <div className="max-w-4xl mx-auto">
            <Card className="bg-gradient-to-br from-card to-card/50 border-primary/30 shadow-xl">
              <CardContent className="p-8">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold mb-2">Why Choose ZCrom?</h3>
                  <p className="text-muted-foreground">We're committed to your success</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center p-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                      <span className="text-2xl font-bold gradient-text-primary">1</span>
                    </div>
                    <h4 className="font-semibold mb-1">Free Consultation</h4>
                    <p className="text-sm text-muted-foreground">Discuss your project with our experts</p>
                  </div>
                  <div className="text-center p-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                      <span className="text-2xl font-bold gradient-text-primary">2</span>
                    </div>
                    <h4 className="font-semibold mb-1">Custom Solutions</h4>
                    <p className="text-sm text-muted-foreground">Tailored to your specific needs</p>
                  </div>
                  <div className="text-center p-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                      <span className="text-2xl font-bold gradient-text-primary">3</span>
                    </div>
                    <h4 className="font-semibold mb-1">Ongoing Support</h4>
                    <p className="text-sm text-muted-foreground">We're here even after launch</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

    </div>
  );
};

export default Contact;