import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Smartphone,
  Droplets,
  Battery,
  Volume2,
  Settings,
  Cpu,
  Wifi,
  Wrench,
  MessageCircle,
} from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: Smartphone,
      title: "Crack Screen",
      description:
        "Depending on the type of crack on the display, we provide tailored solutions, including glass replacement, touch replacement, or full display replacement.",
      color: "text-primary",
      bgColor: "bg-primary/10",
    },
    {
      icon: Droplets,
      title: "Water Damaged",
      description:
        "Water-damaged phone? We specialize in repairs, from drying and corrosion removal to replacing damaged components, ensuring your phone's performance.",
      color: "text-accent",
      bgColor: "bg-accent/10",
    },
    {
      icon: Battery,
      title: "Battery Issue",
      description:
        "If your battery doesn't provide expected backup, we offer original battery replacements and expert solutions for all battery-related issues with charging port.",
      color: "text-secondary",
      bgColor: "bg-secondary/10",
    },
    {
      icon: Volume2,
      title: "Speaker + Mic",
      description:
        "We troubleshoot issues related to mobile phone microphones and speakers, providing effective solutions to ensure optimal audio performance.",
      color: "text-success",
      bgColor: "bg-success/10",
    },
    {
      icon: Settings,
      title: "Software",
      description:
        "If you're experiencing software-related issues such as unlocking phone, we're here to assist you in diagnosing and resolving the problem effectively.",
      color: "text-primary",
      bgColor: "bg-primary/10",
    },
    {
      icon: Cpu,
      title: "Motherboard",
      description:
        "We regularly solve various motherboard issues with our qualified engineers, ensuring reliable repairs to restore your device's functionality.",
      color: "text-accent",
      bgColor: "bg-accent/10",
    },
    {
      icon: Wifi,
      title: "Wifi + Network",
      description:
        "We're here to relieve you from network and Wi-Fi issues at a reasonable cost, ensuring seamless connectivity for your devices.",
      color: "text-secondary",
      bgColor: "bg-secondary/10",
    },
    {
      icon: Wrench,
      title: "Others",
      description:
        "If you encounter any issues with your mobile phone, feel free to visit our shops anytime for assistance and support. There can be a lot!",
      color: "text-success",
      bgColor: "bg-success/10",
    },
  ];

  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16 animate-slide-up">
          <h2 className="text-3xl lg:text-5xl font-bold">
            Our <span className="gradient-text">Services</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We offer free diagnosis to identify and address your device's
            problems quickly.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card
              key={service.title}
              className="service-card group hover:border-primary/50 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="text-center pb-4">
                <div
                  className={`w-16 h-16 ${service.bgColor} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}
                >
                  <service.icon className={`w-8 h-8 ${service.color}`} />
                </div>
                <CardTitle className="text-xl font-semibold">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center space-y-4">
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {service.description}
                </p>
                <Button
                  variant="whatsapp"
                  size="sm"
                  onClick={() =>
                    window.open("https://wa.me/+8801813-894280", "_blank")
                  }
                  className="w-full group"
                >
                  <MessageCircle className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                  Chat Now
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 animate-slide-up">
          <div className="bg-gradient-primary p-8 rounded-2xl text-white">
            <h3 className="text-2xl lg:text-3xl font-bold mb-4">
              Need Immediate Assistance?
            </h3>
            <p className="text-white/90 mb-6 max-w-md mx-auto">
              Our expert technicians are ready to help. No appointment required
              - just walk in!
            </p>
            <Button
              variant="secondary"
              size="xl"
              onClick={() =>
                window.open("https://wa.me/+8801813-894280", "_blank")
              }
              className="animate-float-gentle"
            >
              Get Help Now
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
