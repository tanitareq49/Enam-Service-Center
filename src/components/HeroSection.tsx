import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, Star, Shield, Zap } from "lucide-react";
import heroImage from "@/assets/hero-repair.jpg";

const HeroSection = () => {
  const scrollToServices = () => {
    const element = document.getElementById("services");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden pt-20"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-hero opacity-10"></div>
      <div className="absolute top-20 right-10 w-64 h-64 bg-primary/20 rounded-full blur-3xl animate-float"></div>
      <div
        className="absolute bottom-20 left-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-float"
        style={{ animationDelay: "2s" }}
      ></div>

      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-slide-up">
            <div className="space-y-4">
              <div className="flex items-center space-x-2 text-sm text-primary font-medium">
                <Star className="w-4 h-4 fill-current" />
                <span>Hi! Welcome To</span>
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                <span className="gradient-text">Enam</span> Service Center
              </h1>
              <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed">
                From repairs to accessories, we provide expert solutions for
                your devices. Enjoy fast, reliable, and affordable service to
                keep you connected.
              </p>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center space-x-2 bg-card/50 backdrop-blur-sm rounded-lg px-4 py-2 border border-border/50">
                <Shield className="w-5 h-5 text-success" />
                <span className="text-sm font-medium">7+ Years Experience</span>
              </div>
              <div className="flex items-center space-x-2 bg-card/50 backdrop-blur-sm rounded-lg px-4 py-2 border border-border/50">
                <Zap className="w-5 h-5 text-secondary" />
                <span className="text-sm font-medium">Fast Service</span>
              </div>
              <div className="flex items-center space-x-2 bg-card/50 backdrop-blur-sm rounded-lg px-4 py-2 border border-border/50">
                <CheckCircle className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium">Quality Guaranteed</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                variant="hero"
                size="xl"
                onClick={scrollToServices}
                className="group"
              >
                Explore Services
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                variant="whatsapp"
                size="xl"
                onClick={() =>
                  window.open("https://wa.me/+8801813-894280", "_blank")
                }
              >
                Get Quick Help
              </Button>
            </div>

            {/* Features List */}
            <div className="grid sm:grid-cols-2 gap-3 pt-4">
              {[
                "Best Engineers",
                "Latest Accessories",
                "Low Cost",
                "Walk-in Service",
                "Quality Displays",
                "Long-lasting Batteries",
                "Premium Body Parts",
                "Fast Service",
              ].map((feature, index) => (
                <div
                  key={feature}
                  className="flex items-center space-x-2 animate-slide-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CheckCircle className="w-4 h-4 text-success flex-shrink-0" />
                  <span className="text-sm text-foreground">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div className="relative animate-scale-in">
            <div className="relative">
              <img
                src={heroImage}
                alt="Professional Mobile Repair Service"
                className="w-full h-[500px] lg:h-[600px] object-cover rounded-2xl shadow-primary animate-phone-glow"
              />

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 bg-secondary text-secondary-foreground p-4 rounded-xl shadow-secondary animate-float-gentle">
                <div className="text-2xl font-bold">7+</div>
                <div className="text-sm">Years</div>
              </div>

              <div
                className="absolute -bottom-4 -left-4 bg-success text-success-foreground p-4 rounded-xl shadow-soft animate-float-gentle"
                style={{ animationDelay: "1s" }}
              >
                <div className="text-2xl font-bold">5K+</div>
                <div className="text-sm">Repairs</div>
              </div>

              <div
                className="absolute top-1/2 -right-6 bg-accent text-accent-foreground p-3 rounded-full shadow-soft animate-float-gentle"
                style={{ animationDelay: "2s" }}
              >
                <Star className="w-6 h-6 fill-current" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
