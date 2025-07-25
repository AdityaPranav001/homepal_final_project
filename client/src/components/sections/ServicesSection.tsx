import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Wrench, 
  ChefHat, 
  Sparkles, 
  ShirtIcon as Laundry,
  Paintbrush2,
  Car,
  TreePine,
  ShoppingCart
} from "lucide-react";

const services = [
  {
    icon: Sparkles,
    title: "House Cleaning",
    description: "Deep cleaning, regular maintenance, and organizing services"
  },
  {
    icon: ChefHat,
    title: "Cooking & Meal Prep",
    description: "Personal chef services and meal preparation for your family"
  },
  {
    icon: Wrench,
    title: "Plumbing & Repairs",
    description: "Quick fixes, installations, and maintenance work"
  },
  {
    icon: Laundry,
    title: "Laundry & Ironing",
    description: "Washing, drying, folding, and ironing services"
  },
  {
    icon: Paintbrush2,
    title: "Painting & Decoration",
    description: "Interior painting and home decoration assistance"
  },
  {
    icon: TreePine,
    title: "Gardening",
    description: "Plant care, garden maintenance, and landscaping"
  },
  {
    icon: Car,
    title: "Car Washing",
    description: "Vehicle cleaning and maintenance at your doorstep"
  },
  {
    icon: ShoppingCart,
    title: "Grocery Shopping",
    description: "Personal shopping and errand running services"
  }
];

const ServicesSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            Services We Offer
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            From daily chores to specialized tasks, our verified helpers are ready to assist you with anything you need.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-soft transition-all duration-300 hover:scale-105 border-homepal-accent bg-gradient-subtle"
            >
              <CardHeader className="text-center">
                <div className="mx-auto w-12 h-12 bg-gradient-hero rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <service.icon className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-lg font-semibold text-foreground">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-center text-sm">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;