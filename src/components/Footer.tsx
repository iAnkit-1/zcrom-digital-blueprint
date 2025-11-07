import { Link } from "react-router-dom";
import { Facebook, Instagram, Youtube, Mail, Twitter, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-subtle border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-full gradient-primary flex items-center justify-center text-white font-bold text-lg shadow-glow">
                Z
              </div>
              <span className="text-xl font-bold gradient-text">ZCROM</span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              ZCROM is a next-gen tech agency delivering cutting-edge web, mobile, and AI software solutions. We help startups and enterprises scale efficiently.
            </p>
          </div>

          {/* Our Services */}
          <div>
            <h3 className="font-bold text-foreground mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services/website-development" className="text-muted-foreground hover:text-primary transition-smooth text-sm">
                  Web Design & Development
                </Link>
              </li>
              <li>
                <Link to="/services/mobile-application" className="text-muted-foreground hover:text-primary transition-smooth text-sm">
                  Mobile Application Development
                </Link>
              </li>
              <li>
                <Link to="/services/graphic-design" className="text-muted-foreground hover:text-primary transition-smooth text-sm">
                  Graphic Design
                </Link>
              </li>
              <li>
                <Link to="/services/custom-software" className="text-muted-foreground hover:text-primary transition-smooth text-sm">
                  Software Development
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-foreground mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-primary transition-smooth text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="text-muted-foreground hover:text-primary transition-smooth text-sm">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link to="/career" className="text-muted-foreground hover:text-primary transition-smooth text-sm">
                  Career
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-muted-foreground hover:text-primary transition-smooth text-sm">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-foreground mb-4">Contact Info</h3>
            <div className="space-y-3 text-sm text-muted-foreground">
              <p className="leading-relaxed">
                828X+2J9, Bahadur Rd, Opp. Baldhar Beer Baba, Near Siv Katra, Madhiya, Padao, Varanasi, UP 221008
              </p>
              <p>
                <a href="tel:+919696726607" className="hover:text-primary transition-smooth">
                  +91 96967 26607
                </a>
                <br />
                <a href="tel:+916392945727" className="hover:text-primary transition-smooth">
                  +91 63929 45727
                </a>
              </p>
              <p>
                <a href="mailto:contact@zcrom.com" className="hover:text-primary transition-smooth">
                  contact@zcrom.com
                </a>
                <br />
                <a href="mailto:support@zcrom.com" className="hover:text-primary transition-smooth">
                  support@zcrom.com
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Social Media Icons */}
        <div className="flex items-center justify-center gap-4 mt-8 pt-8 border-t border-border">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center text-white hover:scale-110 transition-smooth shadow-md"
          >
            <Instagram className="w-5 h-5" />
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white hover:scale-110 transition-smooth shadow-md"
          >
            <Facebook className="w-5 h-5" />
          </a>
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full bg-red-600 flex items-center justify-center text-white hover:scale-110 transition-smooth shadow-md"
          >
            <Youtube className="w-5 h-5" />
          </a>
          <a
            href="mailto:contact@zcrom.com"
            className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center text-white hover:scale-110 transition-smooth shadow-md"
          >
            <Mail className="w-5 h-5" />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full bg-sky-500 flex items-center justify-center text-white hover:scale-110 transition-smooth shadow-md"
          >
            <Twitter className="w-5 h-5" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full bg-blue-700 flex items-center justify-center text-white hover:scale-110 transition-smooth shadow-md"
          >
            <Linkedin className="w-5 h-5" />
          </a>
        </div>

        {/* Copyright */}
        <div className="text-center mt-8 pt-4 border-t border-border">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} ZCROM. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
