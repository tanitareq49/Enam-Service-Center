import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  MapPin, 
  Clock, 
  Phone, 
  Navigation, 
  Map,
  MessageCircle,
  Star
} from 'lucide-react';

const LocationSection = () => {
  const openGoogleMaps = () => {
    window.open('https://www.google.com/maps/search/Enam+Service+Center+Purana+Polton+Dhaka', '_blank');
  };

  const businessHours = [
    { day: 'Saturday - Thursday', time: '10:00 AM - 10:00 PM' },
    { day: 'Friday', time: '2:00 PM - 10:00 PM' },
  ];

  return (
    <section id="location" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16 animate-slide-up">
          <h2 className="text-3xl lg:text-5xl font-bold">
            <span className="gradient-text">Where to Find</span> Us!
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Visit our modern service center in the heart of Dhaka for all your mobile repair needs.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Location Details */}
          <div className="space-y-6 animate-slide-up">
            <Card className="p-6 hover:shadow-soft transition-all duration-300">
              <CardHeader className="p-0 mb-6">
                <CardTitle className="flex items-center space-x-3 text-2xl">
                  <MapPin className="w-8 h-8 text-primary" />
                  <span>Our Location</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0 space-y-6">
                <div className="space-y-3">
                  <div>
                    <h3 className="font-semibold text-lg text-foreground">Enam Service Center</h3>
                    <p className="text-muted-foreground">
                      Shop 409-410, Baitul View Tower<br />
                      Purana Polton, Dhaka-1000<br />
                      Bangladesh
                    </p>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-primary" />
                    <span className="font-medium">+8801873065677</span>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="font-semibold flex items-center space-x-2">
                    <Clock className="w-5 h-5 text-secondary" />
                    <span>Business Hours</span>
                  </h4>
                  <div className="space-y-2">
                    {businessHours.map((schedule, index) => (
                      <div key={index} className="flex justify-between items-center">
                        <span className="text-muted-foreground">{schedule.day}</span>
                        <span className="font-medium">{schedule.time}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button 
                    variant="hero" 
                    className="flex-1"
                    onClick={openGoogleMaps}
                  >
                    <Navigation className="w-4 h-4 mr-2" />
                    Get Directions
                  </Button>
                  <Button 
                    variant="whatsapp" 
                    className="flex-1"
                    onClick={() => window.open('https://wa.me/+8801873065677', '_blank')}
                  >
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Chat Now
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Additional Info Cards */}
            <div className="grid sm:grid-cols-2 gap-4">
              <Card className="p-4 text-center hover:shadow-soft transition-all duration-300 animate-float-gentle">
                <CardContent className="p-0">
                  <Map className="w-8 h-8 text-accent mx-auto mb-2" />
                  <h4 className="font-semibold mb-1">Easy to Find</h4>
                  <p className="text-sm text-muted-foreground">
                    Located in Baitul View Tower, a well-known landmark
                  </p>
                </CardContent>
              </Card>
              
              <Card className="p-4 text-center hover:shadow-soft transition-all duration-300 animate-float-gentle" style={{ animationDelay: '0.5s' }}>
                <CardContent className="p-0">
                  <Star className="w-8 h-8 text-success mx-auto mb-2 fill-current" />
                  <h4 className="font-semibold mb-1">Trusted Location</h4>
                  <p className="text-sm text-muted-foreground">
                    Serving customers since 2017 in this prime location
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Map Placeholder */}
          <div className="animate-scale-in">
            <Card className="overflow-hidden h-[500px] hover:shadow-primary transition-all duration-300">
              <div 
                className="w-full h-full bg-gradient-primary relative cursor-pointer group"
                onClick={openGoogleMaps}
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-white space-y-4">
                    <Map className="w-16 h-16 mx-auto group-hover:scale-110 transition-transform" />
                    <div>
                      <h3 className="text-2xl font-bold mb-2">Find Us on Google Maps</h3>
                      <p className="text-white/90 mb-4">
                        Click to open in Google Maps for navigation
                      </p>
                      <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm rounded-lg px-4 py-2">
                        <Navigation className="w-4 h-4" />
                        <span className="text-sm font-medium">Get Directions</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Floating location pin */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="bg-white text-primary p-3 rounded-full shadow-lg animate-float">
                    <MapPin className="w-6 h-6 fill-current" />
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 animate-slide-up">
          <div className="bg-card border border-border rounded-2xl p-8 max-w-2xl mx-auto shadow-soft">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Visit Our Service Center?
            </h3>
            <p className="text-muted-foreground mb-6">
              No appointment needed! Walk in anytime during business hours for immediate assistance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="hero" 
                size="lg"
                onClick={openGoogleMaps}
              >
                <Map className="w-4 h-4 mr-2" />
                View on Maps
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => window.open('https://wa.me/+8801873065677', '_blank')}
              >
                <Phone className="w-4 h-4 mr-2" />
                Call Now
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;