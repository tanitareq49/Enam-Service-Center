import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Users,
  Award,
  Clock,
  MapPin,
  Phone,
  CheckCircle,
  Star,
} from "lucide-react";
import happyCustomersImage from "@/assets/happy-customers.jpg";

const AboutSection = () => {
  const stats = [
    {
      icon: Award,
      value: "7+",
      label: "Years Experience",
      color: "text-primary",
    },
    {
      icon: Users,
      value: "6",
      label: "Expert Engineers",
      color: "text-secondary",
    },
    {
      icon: Clock,
      value: "5K+",
      label: "Devices Repaired",
      color: "text-accent",
    },
    {
      icon: Star,
      value: "99%",
      label: "Success Rate",
      color: "text-success",
    },
  ];

  const features = [
    "Best Engineers in Dhaka",
    "Latest Mobile Accessories",
    "Affordable Pricing",
    "Walk-in Service Available",
    "Quality Display Replacements",
    "Long-lasting Battery Solutions",
    "Premium Body Parts",
    "Fast & Reliable Service",
  ];

  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-slide-up">
            <div className="space-y-4">
              <div className="flex items-center space-x-2 text-primary font-medium">
                <Star className="w-5 h-5 fill-current" />
                <span>About Us</span>
              </div>
              <h2 className="text-3xl lg:text-5xl font-bold leading-tight">
                We are Dhaka's Leading
                <span className="gradient-text"> Mobile Repair</span> Specialist
              </h2>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <Card
                  key={stat.label}
                  className="text-center p-4 hover:shadow-soft transition-all duration-300 animate-scale-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-0">
                    <stat.icon
                      className={`w-8 h-8 ${stat.color} mx-auto mb-2`}
                    />
                    <div className="text-2xl font-bold text-foreground">
                      {stat.value}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {stat.label}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Story */}
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">
                  A Brief History
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Established in 2017, Enam Service Center is your trusted
                  mobile repair shop. We have five highly qualified hardware
                  engineers and one software engineer. Additionally, we offer
                  the latest accessories such as headsets, Bluetooth headphones,
                  screen protectors, and phone covers.
                </p>
              </div>

              <div>
                <h4 className="text-lg font-semibold mb-3 text-foreground">
                  Our Commitment
                </h4>
                <p className="text-muted-foreground leading-relaxed">
                  We are well known for our fast service and excellent
                  communication. We always consider customer costs and
                  consistently maintain our quality standards.
                </p>
              </div>
            </div>

            {/* Contact Info */}
            <div className="bg-gradient-primary/10 border border-primary/20 rounded-xl p-6 space-y-4">
              <h4 className="font-semibold text-foreground">Visit Our Shop</h4>
              <div className="space-y-2">
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-primary flex-shrink-0" />
                  <div>
                    <div className="font-medium text-foreground">
                      Shop 409-410, Baitul View Tower
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Purana Polton, Dhaka-1000
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                  <div className="font-medium text-foreground">
                    +8801813-894280
                  </div>
                </div>
              </div>
              <Button
                variant="whatsapp"
                className="w-full"
                onClick={() =>
                  window.open("https://wa.me/+8801813-894280", "_blank")
                }
              >
                Get in Touch
              </Button>
            </div>
          </div>

          {/* Right Content */}
          <div className="relative animate-scale-in">
            <div className="relative">
              <img
                src={happyCustomersImage}
                alt="Happy customers with repaired phones"
                className="w-full h-[500px] object-cover rounded-2xl shadow-primary"
              />

              {/* Overlay Content */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl"></div>

              {/* Features List Overlay */}
              <div className="absolute bottom-6 left-6 right-6">
                <h4 className="text-white font-semibold mb-4">
                  Why Choose Us?
                </h4>
                <div className="grid grid-cols-2 gap-2">
                  {features.slice(0, 4).map((feature, index) => (
                    <div
                      key={feature}
                      className="flex items-center space-x-2 text-white/90 animate-slide-up"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <CheckCircle className="w-4 h-4 text-success flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Floating Trust Badges */}
            <div className="absolute -top-4 -right-4 bg-success text-success-foreground p-4 rounded-xl shadow-soft animate-float-gentle">
              <div className="text-center">
                <div className="text-2xl font-bold">99%</div>
                <div className="text-xs">Success Rate</div>
              </div>
            </div>

            <div
              className="absolute top-1/4 -left-6 bg-accent text-accent-foreground p-3 rounded-xl shadow-soft animate-float-gentle"
              style={{ animationDelay: "1s" }}
            >
              <div className="text-center">
                <Award className="w-6 h-6 mx-auto mb-1" />
                <div className="text-xs">Quality</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
