import React from "react";
import { Button } from "@/components/ui/button";
import {
  MapPin,
  Phone,
  MessageCircle,
  Clock,
  Star,
  Smartphone,
  Heart,
} from "lucide-react";
import logoImage from "@/assets/logo.jpg";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Services", href: "#services" },
    { name: "About Us", href: "#about" },
    { name: "Location", href: "#location" },
    { name: "Contact", href: "#contact" },
  ];

  const services = [
    "Screen Repair",
    "Water Damage",
    "Battery Replacement",
    "Software Issues",
    "Motherboard Repair",
    "Audio Solutions",
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId.replace("#", ""));
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-gradient-to-b from-background to-muted/50 border-t border-border">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6 animate-slide-up">
            <div className="flex items-center space-x-3">
              <img
                src={logoImage}
                alt="Enam Service Center"
                className="w-12 h-12 rounded-lg shadow-soft"
              />
              <div>
                <h3 className="text-xl font-bold gradient-text">
                  Enam Service Center
                </h3>
                <p className="text-sm text-muted-foreground">
                  Dhaka's Leading Mobile Repair
                </p>
              </div>
            </div>

            <p className="text-muted-foreground leading-relaxed">
              Since 2017, we've been providing expert mobile repair services
              with fast turnaround times and quality guarantees. Your device,
              our expertise.
            </p>

            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2 bg-success/10 text-success px-3 py-2 rounded-lg">
                <Star className="w-4 h-4 fill-current" />
                <span className="text-sm font-medium">7+ Years</span>
              </div>
              <div className="flex items-center space-x-2 bg-primary/10 text-primary px-3 py-2 rounded-lg">
                <Smartphone className="w-4 h-4" />
                <span className="text-sm font-medium">5K+ Repairs</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div
            className="space-y-6 animate-slide-up"
            style={{ animationDelay: "0.1s" }}
          >
            <h4 className="text-lg font-semibold text-foreground">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-muted-foreground hover:text-primary transition-colors duration-200 text-left"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div
            className="space-y-6 animate-slide-up"
            style={{ animationDelay: "0.2s" }}
          >
            <h4 className="text-lg font-semibold text-foreground">
              Our Services
            </h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={service} className="text-muted-foreground text-sm">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div
            className="space-y-6 animate-slide-up"
            style={{ animationDelay: "0.3s" }}
          >
            <h4 className="text-lg font-semibold text-foreground">
              Contact Info
            </h4>

            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <div className="text-sm">
                  <div className="font-medium text-foreground">
                    Shop 409-410
                  </div>
                  <div className="text-muted-foreground">
                    Baitul View Tower
                    <br />
                    Purana Polton, Dhaka-1000
                  </div>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <div className="text-sm font-medium text-foreground">
                  +8801813-894280
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <Clock className="w-5 h-5 text-primary flex-shrink-0" />
                <div className="text-sm text-muted-foreground">
                  Sat-Thu: 10AM-10PM
                  <br />
                  Fri: 2PM-10PM
                </div>
              </div>
            </div>

            <Button
              variant="whatsapp"
              size="sm"
              className="w-full"
              onClick={() =>
                window.open("https://wa.me/+8801813-894280", "_blank")
              }
            >
              <MessageCircle className="w-4 h-4 mr-2" />
              Chat on WhatsApp
            </Button>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-muted-foreground">
              © {currentYear} Enam Service Center. All rights reserved.
            </div>

            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-red-500 fill-current" />
              <span>for our customers</span>
            </div>
          </div>
        </div>
      </div>

      {/* Floating WhatsApp Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          variant="whatsapp"
          size="icon"
          className="w-14 h-14 rounded-full shadow-lg animate-float-gentle"
          onClick={() => window.open("https://wa.me/+8801813-894280", "_blank")}
        >
          <MessageCircle className="w-6 h-6" />
        </Button>
      </div>
    </footer>
  );
};

export default Footer;
