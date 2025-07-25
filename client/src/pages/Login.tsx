import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Home, ArrowLeft } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Login = () => {
  const [location, setLocation] = useLocation();
  const { toast } = useToast();
  const searchParams = new URLSearchParams(window.location.search);
  const defaultTab = searchParams.get("type") === "helper" ? "helper" : "customer";
  
  const [customerData, setCustomerData] = useState({
    email: "",
    password: ""
  });
  
  const [helperData, setHelperData] = useState({
    email: "",
    password: ""
  });

  const handleCustomerLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customerData.email || !customerData.password) {
      toast({
        title: "Error",
        description: "Please fill in all fields",
        variant: "destructive"
      });
      return;
    }
    
    toast({
      title: "Success!",
      description: "Logged in successfully as customer",
    });
    setLocation("/customer-dashboard");
  };

  const handleHelperLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (!helperData.email || !helperData.password) {
      toast({
        title: "Error", 
        description: "Please fill in all fields",
        variant: "destructive"
      });
      return;
    }
    
    toast({
      title: "Success!",
      description: "Logged in successfully as helper",
    });
    setLocation("/helper-dashboard");
  };

  return (
    <div className="min-h-screen bg-gradient-subtle flex items-center justify-center p-4">
      <div className="w-full max-w-md space-y-6">
        {/* Header */}
        <div className="text-center space-y-4">
          <Link to="/" className="inline-flex items-center space-x-2 text-homepal-primary hover:text-homepal-primary-light transition-colors">
            <ArrowLeft className="h-4 w-4" />
            <span className="text-sm">Back to Home</span>
          </Link>
          <div className="flex items-center justify-center space-x-2">
            <div className="w-8 h-8 bg-gradient-hero rounded-lg flex items-center justify-center">
              <Home className="h-5 w-5 text-white" />
            </div>
            <span className="text-2xl font-bold text-foreground">homepal</span>
          </div>
        </div>

        <Card className="shadow-soft border-homepal-accent/50">
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl text-center">Welcome Back</CardTitle>
            <CardDescription className="text-center">
              Sign in to your account to continue
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue={defaultTab} className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-6">
                <TabsTrigger value="customer">Customer</TabsTrigger>
                <TabsTrigger value="helper">Helper</TabsTrigger>
              </TabsList>
              
              <TabsContent value="customer" className="space-y-4">
                <form onSubmit={handleCustomerLogin} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="customer-email">Email</Label>
                    <Input
                      id="customer-email"
                      type="email"
                      placeholder="Enter your email"
                      value={customerData.email}
                      onChange={(e) => setCustomerData(prev => ({...prev, email: e.target.value}))}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="customer-password">Password</Label>
                    <Input
                      id="customer-password"
                      type="password"
                      placeholder="Enter your password"
                      value={customerData.password}
                      onChange={(e) => setCustomerData(prev => ({...prev, password: e.target.value}))}
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full bg-gradient-hero shadow-soft">
                    Sign In as Customer
                  </Button>
                </form>
              </TabsContent>
              
              <TabsContent value="helper" className="space-y-4">
                <form onSubmit={handleHelperLogin} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="helper-email">Email</Label>
                    <Input
                      id="helper-email"
                      type="email"
                      placeholder="Enter your email"
                      value={helperData.email}
                      onChange={(e) => setHelperData(prev => ({...prev, email: e.target.value}))}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="helper-password">Password</Label>
                    <Input
                      id="helper-password"
                      type="password"
                      placeholder="Enter your password"
                      value={helperData.password}
                      onChange={(e) => setHelperData(prev => ({...prev, password: e.target.value}))}
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full bg-gradient-hero shadow-soft">
                    Sign In as Helper
                  </Button>
                </form>
              </TabsContent>
            </Tabs>
            
            <div className="mt-6 text-center text-sm">
              <span className="text-muted-foreground">Don't have an account? </span>
              <Link to="/signup" className="text-homepal-primary hover:underline">
                Sign up here
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Login;