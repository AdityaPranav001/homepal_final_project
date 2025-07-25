import Navigation from "@/components/layout/Navigation";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, Shield, Users, Clock, Star, Award } from "lucide-react";
import { Link } from "wouter";

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Care & Compassion",
      description: "We believe every home deserves personalized care and attention to detail."
    },
    {
      icon: Shield,
      title: "Trust & Safety",
      description: "All our helpers are thoroughly verified and background checked for your peace of mind."
    },
    {
      icon: Users,
      title: "Community First",
      description: "Building strong connections between neighbors and creating local employment opportunities."
    },
    {
      icon: Clock,
      title: "Reliability",
      description: "On-time service delivery and consistent quality you can count on."
    }
  ];

  const stats = [
    { number: "10,000+", label: "Verified Helpers" },
    { number: "50,000+", label: "Happy Customers" },
    { number: "1,00,000+", label: "Services Completed" },
    { number: "4.9★", label: "Average Rating" }
  ];

  const team = [
    {
      name: "Arjun Mehta",
      role: "Founder & CEO",
      description: "Former tech executive passionate about solving everyday problems through technology."
    },
    {
      name: "Priya Sharma",
      role: "Head of Operations",
      description: "Expert in service delivery with 10+ years in customer experience management."
    },
    {
      name: "Ravi Kumar",
      role: "Head of Technology",
      description: "Full-stack developer committed to building scalable solutions for growing communities."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
            About <span className="bg-gradient-hero bg-clip-text text-transparent">homepal</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We're on a mission to make household help accessible, affordable, and reliable for every family in India. 
            Founded in 2024, homepal connects trusted local helpers with busy families who need a helping hand at home.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center p-6 shadow-soft border-homepal-accent/50">
              <div className="text-3xl font-bold text-homepal-primary mb-2">{stat.number}</div>
              <div className="text-muted-foreground">{stat.label}</div>
            </Card>
          ))}
        </div>

        {/* Our Story */}
        <div className="mb-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">Our Story</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  homepal was born out of a simple observation: finding reliable household help shouldn't be stressful, 
                  expensive, or time-consuming. Our founders experienced firsthand the challenges of balancing work, 
                  family, and home maintenance in India's fast-paced urban environment.
                </p>
                <p>
                  We saw an opportunity to create a platform that benefits everyone - giving families access to 
                  affordable, on-demand help while providing meaningful employment opportunities for skilled individuals 
                  in local communities.
                </p>
                <p>
                  Today, homepal serves thousands of families across major Indian cities, connecting them with 
                  verified helpers who are passionate about providing excellent service at just ₹100 per hour.
                </p>
              </div>
            </div>
            <div className="relative">
              <Card className="p-8 bg-gradient-warm shadow-warm">
                <div className="text-center">
                  <Award className="h-16 w-16 text-homepal-primary mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-foreground mb-2">Our Mission</h3>
                  <p className="text-muted-foreground">
                    To revolutionize household services in India by making quality help accessible, 
                    affordable, and reliable for every family while creating dignified employment 
                    opportunities in local communities.
                  </p>
                </div>
              </Card>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-foreground text-center mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="p-6 text-center shadow-soft border-homepal-accent/50 hover:shadow-warm transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-hero rounded-lg flex items-center justify-center mx-auto mb-4">
                  <value.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-3">{value.title}</h3>
                <p className="text-muted-foreground text-sm">{value.description}</p>
              </Card>
            ))}
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-foreground text-center mb-12">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="p-6 text-center shadow-soft border-homepal-accent/50">
                <div className="w-20 h-20 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-1">{member.name}</h3>
                <p className="text-homepal-primary font-medium mb-3">{member.role}</p>
                <p className="text-muted-foreground text-sm">{member.description}</p>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <Card className="p-8 text-center bg-gradient-warm shadow-warm">
          <h2 className="text-3xl font-bold text-foreground mb-4">Join the homepal Family</h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Whether you're looking for reliable household help or want to earn by helping others, 
            homepal is here to connect you with your community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/signup?type=customer">
              <Button size="lg" className="bg-gradient-hero shadow-soft">
                Find a Helper
              </Button>
            </Link>
            <Link to="/signup?type=helper">
              <Button variant="outline" size="lg" className="border-homepal-primary text-homepal-primary hover:bg-homepal-primary hover:text-white">
                Become a Helper
              </Button>
            </Link>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default About;