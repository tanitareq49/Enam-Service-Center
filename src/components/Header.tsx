import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, MapPin } from "lucide-react";
import logoImage from "@/assets/logo.jpg";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-soft border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="flex items-center space-x-3 animate-slide-up">
            <img
              src={logoImage}
              alt="Enam Service Center"
              className="w-10 h-10 lg:w-12 lg:h-12 rounded-lg shadow-soft"
            />
            <div>
              <h1 className="text-lg lg:text-xl font-bold gradient-text">
                Enam Service Center
              </h1>
              <p className="text-xs text-muted-foreground hidden sm:block">
                Dhaka's Leading Mobile Repair
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("home")}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("location")}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Location
            </button>
          </nav>

          {/* Contact Info & CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className="text-right">
              <div className="flex items-center text-sm text-muted-foreground">
                <Phone className="w-4 h-4 mr-1" />
                +8801813-894280
              </div>
              <div className="flex items-center text-xs text-muted-foreground">
                <MapPin className="w-3 h-3 mr-1" />
                Purana Polton, Dhaka
              </div>
            </div>
            <Button
              variant="whatsapp"
              size="lg"
              onClick={() =>
                window.open("https://wa.me/+8801813-894280", "_blank")
              }
              className="animate-float-gentle"
            >
              Chat Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-foreground hover:text-primary transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-md border-b border-border shadow-soft animate-slide-up">
            <nav className="flex flex-col space-y-4 p-6">
              <button
                onClick={() => scrollToSection("home")}
                className="text-left text-foreground hover:text-primary transition-colors font-medium"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("services")}
                className="text-left text-foreground hover:text-primary transition-colors font-medium"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="text-left text-foreground hover:text-primary transition-colors font-medium"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("location")}
                className="text-left text-foreground hover:text-primary transition-colors font-medium"
              >
                Location
              </button>
              <div className="pt-4 border-t border-border">
                <div className="flex items-center text-sm text-muted-foreground mb-2">
                  <Phone className="w-4 h-4 mr-2" />
                  +8801813-894280
                </div>
                <Button
                  variant="whatsapp"
                  size="default"
                  onClick={() =>
                    window.open("https://wa.me/+8801813-894280", "_blank")
                  }
                  className="w-full"
                >
                  Chat on WhatsApp
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
