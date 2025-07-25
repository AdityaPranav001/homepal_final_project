import Navigation from "@/components/layout/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  UserPlus, 
  Search, 
  Calendar, 
  CheckCircle, 
  Star,
  Shield,
  Clock,
  IndianRupee,
  MapPin,
  Phone
} from "lucide-react";
import { Link } from "react-router-dom";

const HowItWorks = () => {
  const customerSteps = [
    {
      icon: UserPlus,
      title: "Sign Up",
      description: "Create your customer account with basic details and verify your phone number."
    },
    {
      icon: Search,
      title: "Find Helpers",
      description: "Browse verified helpers in your area and check their ratings, reviews, and skills."
    },
    {
      icon: Calendar,
      title: "Book Service",
      description: "Select a helper, choose your preferred date and time, and describe your requirements."
    },
    {
      icon: CheckCircle,
      title: "Get Help",
      description: "Your helper arrives on time and completes the work. Pay safely through the app."
    }
  ];

  const helperSteps = [
    {
      icon: UserPlus,
      title: "Register",
      description: "Create your helper profile with skills, experience, and verification documents."
    },
    {
      icon: Shield,
      title: "Get Verified",
      description: "Complete background verification and skills assessment to build customer trust."
    },
    {
      icon: Search,
      title: "Find Jobs",
      description: "Browse available jobs in your area and accept requests that match your skills."
    },
    {
      icon: IndianRupee,
      title: "Earn Money",
      description: "Complete jobs, get rated by customers, and receive payments directly to your account."
    }
  ];

  const features = [
    {
      icon: Shield,
      title: "Verified Helpers",
      description: "All helpers go through thorough background checks and skill verification."
    },
    {
      icon: Star,
      title: "Rating System",
      description: "Transparent rating and review system helps you choose the best helpers."
    },
    {
      icon: Clock,
      title: "Flexible Scheduling",
      description: "Book services when you need them - morning, evening, or weekends."
    },
    {
      icon: IndianRupee,
      title: "Transparent Pricing",
      description: "Simple ₹100/hour pricing with no hidden fees or surge charges."
    },
    {
      icon: MapPin,
      title: "Local Network",
      description: "Connect with helpers in your neighborhood for faster service delivery."
    },
    {
      icon: Phone,
      title: "24/7 Support",
      description: "Round-the-clock customer support to help resolve any issues quickly."
    }
  ];

  const pricing = [
    { service: "House Cleaning", time: "2-4 hours", price: "₹200-400" },
    { service: "Cooking", time: "1-3 hours", price: "₹100-300" },
    { service: "Plumbing", time: "1-2 hours", price: "₹100-200" },
    { service: "Gardening", time: "2-3 hours", price: "₹200-300" },
    { service: "Laundry", time: "1-2 hours", price: "₹100-200" },
    { service: "Car Washing", time: "1 hour", price: "₹100" }
  ];

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
            How <span className="bg-gradient-hero bg-clip-text text-transparent">homepal</span> Works
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Getting help at home is now as easy as ordering food. Here's how our simple 4-step process works for both customers and helpers.
          </p>
        </div>

        {/* Customer Journey */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">For Customers</h2>
            <p className="text-muted-foreground">Get reliable household help in just 4 simple steps</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {customerSteps.map((step, index) => (
              <Card key={index} className="relative shadow-soft border-homepal-accent/50 hover:shadow-warm transition-all duration-300">
                <CardHeader className="text-center">
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-gradient-hero text-white px-3 py-1 text-sm font-bold">
                      {index + 1}
                    </Badge>
                  </div>
                  <div className="w-16 h-16 bg-gradient-hero rounded-lg flex items-center justify-center mx-auto mb-4 mt-4">
                    <step.icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-lg">{step.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-center text-sm">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Helper Journey */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">For Helpers</h2>
            <p className="text-muted-foreground">Start earning by helping your neighbors in 4 easy steps</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {helperSteps.map((step, index) => (
              <Card key={index} className="relative shadow-soft border-homepal-accent/50 hover:shadow-warm transition-all duration-300">
                <CardHeader className="text-center">
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-homepal-secondary text-foreground px-3 py-1 text-sm font-bold">
                      {index + 1}
                    </Badge>
                  </div>
                  <div className="w-16 h-16 bg-homepal-secondary rounded-lg flex items-center justify-center mx-auto mb-4 mt-4">
                    <step.icon className="h-8 w-8 text-foreground" />
                  </div>
                  <CardTitle className="text-lg">{step.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-center text-sm">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Features Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Why Choose homepal?</h2>
            <p className="text-muted-foreground">Built with trust, safety, and convenience in mind</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="p-6 shadow-soft border-homepal-accent/50 hover:shadow-warm transition-all duration-300">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-hero rounded-lg flex items-center justify-center flex-shrink-0">
                    <feature.icon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground text-sm">{feature.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Pricing Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Simple, Transparent Pricing</h2>
            <p className="text-muted-foreground">Just ₹100 per hour for all services - no hidden fees</p>
          </div>
          
          <Card className="shadow-soft border-homepal-accent/50">
            <CardHeader>
              <CardTitle className="text-center">Service Examples</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {pricing.map((item, index) => (
                  <div key={index} className="flex justify-between items-center p-4 bg-homepal-accent rounded-lg">
                    <div>
                      <div className="font-semibold text-foreground">{item.service}</div>
                      <div className="text-sm text-muted-foreground">{item.time}</div>
                    </div>
                    <div className="text-lg font-bold text-homepal-primary">{item.price}</div>
                  </div>
                ))}
              </div>
              <div className="mt-6 p-4 bg-gradient-warm rounded-lg text-center">
                <p className="text-muted-foreground">
                  <strong>Rate:</strong> ₹100/hour • <strong>No booking fees</strong> • <strong>No surge pricing</strong> • <strong>Pay only for actual time worked</strong>
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* CTA Section */}
        <Card className="p-8 text-center bg-gradient-warm shadow-warm">
          <h2 className="text-3xl font-bold text-foreground mb-4">Ready to Get Started?</h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Join thousands of satisfied customers and helpers who trust homepal for their household needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/signup?type=customer">
              <Button size="lg" className="bg-gradient-hero shadow-soft">
                Book Your First Helper
              </Button>
            </Link>
            <Link to="/signup?type=helper">
              <Button variant="outline" size="lg" className="border-homepal-primary text-homepal-primary hover:bg-homepal-primary hover:text-white">
                Start Earning as Helper
              </Button>
            </Link>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default HowItWorks;