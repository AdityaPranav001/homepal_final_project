import { useState } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { Home, ArrowLeft } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Signup = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  const defaultTab = searchParams.get("type") === "helper" ? "helper" : "customer";
  
  const [customerData, setCustomerData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    password: "",
    confirmPassword: ""
  });
  
  const [helperData, setHelperData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    skills: "",
    experience: "",
    password: "",
    confirmPassword: ""
  });

  const handleCustomerSignup = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (customerData.password !== customerData.confirmPassword) {
      toast({
        title: "Error",
        description: "Passwords do not match",
        variant: "destructive"
      });
      return;
    }
    
    if (Object.values(customerData).some(value => !value)) {
      toast({
        title: "Error",
        description: "Please fill in all fields",
        variant: "destructive"
      });
      return;
    }
    
    toast({
      title: "Success!",
      description: "Customer account created successfully",
    });
    navigate("/customer-dashboard");
  };

  const handleHelperSignup = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (helperData.password !== helperData.confirmPassword) {
      toast({
        title: "Error",
        description: "Passwords do not match",
        variant: "destructive"
      });
      return;
    }
    
    if (Object.values(helperData).some(value => !value)) {
      toast({
        title: "Error",
        description: "Please fill in all fields",
        variant: "destructive"
      });
      return;
    }
    
    toast({
      title: "Success!",
      description: "Helper account created successfully",
    });
    navigate("/helper-dashboard");
  };

  return (
    <div className="min-h-screen bg-gradient-subtle flex items-center justify-center p-4">
      <div className="w-full max-w-2xl space-y-6">
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
            <CardTitle className="text-2xl text-center">Join homepal</CardTitle>
            <CardDescription className="text-center">
              Create your account to get started
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue={defaultTab} className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-6">
                <TabsTrigger value="customer">Customer</TabsTrigger>
                <TabsTrigger value="helper">Helper</TabsTrigger>
              </TabsList>
              
              <TabsContent value="customer" className="space-y-4">
                <form onSubmit={handleCustomerSignup} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="customer-name">Full Name</Label>
                      <Input
                        id="customer-name"
                        placeholder="Enter your full name"
                        value={customerData.name}
                        onChange={(e) => setCustomerData(prev => ({...prev, name: e.target.value}))}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="customer-phone">Phone Number</Label>
                      <Input
                        id="customer-phone"
                        type="tel"
                        placeholder="Enter your phone number"
                        value={customerData.phone}
                        onChange={(e) => setCustomerData(prev => ({...prev, phone: e.target.value}))}
                        required
                      />
                    </div>
                  </div>
                  
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
                    <Label htmlFor="customer-address">Address</Label>
                    <Textarea
                      id="customer-address"
                      placeholder="Enter your full address"
                      value={customerData.address}
                      onChange={(e) => setCustomerData(prev => ({...prev, address: e.target.value}))}
                      required
                    />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="customer-password">Password</Label>
                      <Input
                        id="customer-password"
                        type="password"
                        placeholder="Create a password"
                        value={customerData.password}
                        onChange={(e) => setCustomerData(prev => ({...prev, password: e.target.value}))}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="customer-confirm-password">Confirm Password</Label>
                      <Input
                        id="customer-confirm-password"
                        type="password"
                        placeholder="Confirm your password"
                        value={customerData.confirmPassword}
                        onChange={(e) => setCustomerData(prev => ({...prev, confirmPassword: e.target.value}))}
                        required
                      />
                    </div>
                  </div>
                  
                  <Button type="submit" className="w-full bg-gradient-hero shadow-soft">
                    Create Customer Account
                  </Button>
                </form>
              </TabsContent>
              
              <TabsContent value="helper" className="space-y-4">
                <form onSubmit={handleHelperSignup} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="helper-name">Full Name</Label>
                      <Input
                        id="helper-name"
                        placeholder="Enter your full name"
                        value={helperData.name}
                        onChange={(e) => setHelperData(prev => ({...prev, name: e.target.value}))}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="helper-phone">Phone Number</Label>
                      <Input
                        id="helper-phone"
                        type="tel"
                        placeholder="Enter your phone number"
                        value={helperData.phone}
                        onChange={(e) => setHelperData(prev => ({...prev, phone: e.target.value}))}
                        required
                      />
                    </div>
                  </div>
                  
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
                    <Label htmlFor="helper-address">Address</Label>
                    <Textarea
                      id="helper-address"
                      placeholder="Enter your full address"
                      value={helperData.address}
                      onChange={(e) => setHelperData(prev => ({...prev, address: e.target.value}))}
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="helper-skills">Skills & Services</Label>
                    <Textarea
                      id="helper-skills"
                      placeholder="List your skills (e.g., cleaning, cooking, plumbing, etc.)"
                      value={helperData.skills}
                      onChange={(e) => setHelperData(prev => ({...prev, skills: e.target.value}))}
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="helper-experience">Experience</Label>
                    <Textarea
                      id="helper-experience"
                      placeholder="Describe your relevant experience"
                      value={helperData.experience}
                      onChange={(e) => setHelperData(prev => ({...prev, experience: e.target.value}))}
                      required
                    />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="helper-password">Password</Label>
                      <Input
                        id="helper-password"
                        type="password"
                        placeholder="Create a password"
                        value={helperData.password}
                        onChange={(e) => setHelperData(prev => ({...prev, password: e.target.value}))}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="helper-confirm-password">Confirm Password</Label>
                      <Input
                        id="helper-confirm-password"
                        type="password"
                        placeholder="Confirm your password"
                        value={helperData.confirmPassword}
                        onChange={(e) => setHelperData(prev => ({...prev, confirmPassword: e.target.value}))}
                        required
                      />
                    </div>
                  </div>
                  
                  <Button type="submit" className="w-full bg-gradient-hero shadow-soft">
                    Create Helper Account
                  </Button>
                </form>
              </TabsContent>
            </Tabs>
            
            <div className="mt-6 text-center text-sm">
              <span className="text-muted-foreground">Already have an account? </span>
              <Link to="/login" className="text-homepal-primary hover:underline">
                Sign in here
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Signup;