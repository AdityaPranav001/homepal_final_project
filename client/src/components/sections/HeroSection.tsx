import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Star, Users, Clock } from "lucide-react";
import { Link } from "wouter";
import heroImage from "@/assets/hero-image.jpg";

const HeroSection = () => {
  return (
    <section className="min-h-screen bg-gradient-subtle flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                Get Help at{" "}
                <span className="bg-gradient-hero bg-clip-text text-transparent">
                  Home
                </span>{" "}
                in Minutes
              </h1>
              <p className="text-xl text-muted-foreground max-w-lg">
                Connect with trusted helpers for all your household needs. 
                From cleaning to cooking, plumbing to repairs - just ₹100/hour.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/signup?type=customer">
                <Button size="lg" className="bg-gradient-hero shadow-warm">
                  Find a Helper
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/signup?type=helper">
                <Button variant="outline" size="lg" className="border-homepal-primary text-homepal-primary hover:bg-homepal-primary hover:text-white">
                  Become a Helper
                </Button>
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center space-x-8 pt-4">
              <div className="flex items-center space-x-2">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <span className="text-sm text-muted-foreground">4.9/5 rating</span>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="h-4 w-4 text-homepal-primary" />
                <span className="text-sm text-muted-foreground">10,000+ helpers</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="h-4 w-4 text-homepal-primary" />
                <span className="text-sm text-muted-foreground">Available 24/7</span>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-warm">
              <img
                src={heroImage}
                alt="Professional helper working in home"
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
            
            {/* Floating Price Card */}
            <Card className="absolute -bottom-6 -left-6 p-4 bg-white shadow-soft border-homepal-primary/20">
              <div className="text-center">
                <div className="text-2xl font-bold text-homepal-primary">₹100</div>
                <div className="text-sm text-muted-foreground">per hour</div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;