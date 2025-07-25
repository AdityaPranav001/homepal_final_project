import Navigation from "@/components/layout/Navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Switch } from "@/components/ui/switch";
import { 
  Calendar, 
  Clock, 
  MapPin, 
  Star, 
  IndianRupee,
  Phone,
  Mail,
  CheckCircle,
  XCircle
} from "lucide-react";

const HelperDashboard = () => {
  const availableJobs = [
    {
      id: 1,
      service: "House Cleaning",
      customer: "Sarah Johnson",
      address: "Bandra West, Mumbai",
      date: "2024-01-25",
      time: "10:00 AM",
      duration: "3 hours",
      payment: "₹300",
      distance: "2.5 km"
    },
    {
      id: 2,
      service: "Cooking",
      customer: "Rajesh Patel",
      address: "Andheri East, Mumbai", 
      date: "2024-01-26",
      time: "2:00 PM",
      duration: "2 hours",
      payment: "₹200",
      distance: "4.1 km"
    }
  ];

  const upcomingJobs = [
    {
      id: 3,
      service: "Plumbing",
      customer: "Lisa Chen",
      address: "Powai, Mumbai",
      date: "2024-01-25",
      time: "11:00 AM",
      duration: "2 hours",
      payment: "₹200",
      status: "confirmed"
    }
  ];

  const completedJobs = [
    {
      id: 4,
      service: "Garden Maintenance",
      customer: "Amit Sharma",
      date: "2024-01-20",
      payment: "₹400",
      rating: 5,
      review: "Excellent work! Very professional and thorough."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Helper Dashboard</h1>
          <p className="text-muted-foreground">Manage your jobs and earnings</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Availability Toggle */}
            <Card className="shadow-soft border-homepal-accent/50">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span>Availability Status</span>
                  <div className="flex items-center space-x-2">
                    <span className="text-sm text-muted-foreground">Offline</span>
                    <Switch />
                    <span className="text-sm text-homepal-primary font-semibold">Online</span>
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Toggle your availability to start receiving job requests in your area.</p>
              </CardContent>
            </Card>

            {/* Available Jobs */}
            <Card className="shadow-soft border-homepal-accent/50">
              <CardHeader>
                <CardTitle>Available Jobs Near You</CardTitle>
                <CardDescription>Accept jobs that match your skills</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {availableJobs.map((job) => (
                  <div key={job.id} className="p-4 bg-homepal-accent rounded-lg border border-homepal-primary/20">
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <h4 className="font-semibold text-foreground text-lg">{job.service}</h4>
                        <p className="text-sm text-muted-foreground">Customer: {job.customer}</p>
                      </div>
                      <div className="text-right">
                        <div className="text-xl font-bold text-homepal-primary">{job.payment}</div>
                        <div className="text-xs text-muted-foreground">{job.duration}</div>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <MapPin className="h-4 w-4" />
                        <span>{job.address}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Clock className="h-4 w-4" />
                        <span>{job.date} at {job.time}</span>
                      </div>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <Badge variant="outline" className="text-homepal-primary border-homepal-primary">
                        {job.distance} away
                      </Badge>
                      <div className="flex gap-2">
                        <Button size="sm" variant="outline">
                          <XCircle className="h-4 w-4 mr-1" />
                          Decline
                        </Button>
                        <Button size="sm" className="bg-gradient-hero shadow-soft">
                          <CheckCircle className="h-4 w-4 mr-1" />
                          Accept
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Upcoming Jobs */}
            <Card className="shadow-soft border-homepal-accent/50">
              <CardHeader>
                <CardTitle>Upcoming Jobs</CardTitle>
                <CardDescription>Your confirmed schedule</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {upcomingJobs.map((job) => (
                  <div key={job.id} className="flex items-center justify-between p-4 bg-green-50 border border-green-200 rounded-lg">
                    <div className="flex items-center space-x-4">
                      <Avatar>
                        <AvatarFallback className="bg-gradient-hero text-white">
                          {job.customer.split(' ').map(n => n[0]).join('')}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <h4 className="font-semibold text-foreground">{job.service}</h4>
                        <p className="text-sm text-muted-foreground">{job.customer}</p>
                        <div className="flex items-center gap-4 mt-1">
                          <div className="flex items-center gap-1 text-xs text-muted-foreground">
                            <Calendar className="h-3 w-3" />
                            {job.date}
                          </div>
                          <div className="flex items-center gap-1 text-xs text-muted-foreground">
                            <Clock className="h-3 w-3" />
                            {job.time} ({job.duration})
                          </div>
                          <div className="flex items-center gap-1 text-xs text-muted-foreground">
                            <MapPin className="h-3 w-3" />
                            {job.address}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-end gap-2">
                      <div className="text-lg font-bold text-homepal-primary">{job.payment}</div>
                      <div className="flex gap-2">
                        <Button size="sm" variant="outline">
                          <Phone className="h-4 w-4" />
                        </Button>
                        <Button size="sm" variant="outline">
                          <Mail className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Recent Reviews */}
            <Card className="shadow-soft border-homepal-accent/50">
              <CardHeader>
                <CardTitle>Recent Reviews</CardTitle>
                <CardDescription>What customers are saying</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {completedJobs.map((job) => (
                  <div key={job.id} className="p-4 bg-muted rounded-lg">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h4 className="font-semibold text-foreground">{job.service}</h4>
                        <p className="text-sm text-muted-foreground">{job.customer} • {job.date}</p>
                      </div>
                      <div className="flex items-center gap-1">
                        {[...Array(job.rating)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-current text-yellow-400" />
                        ))}
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground italic">"{job.review}"</p>
                    <div className="flex justify-between items-center mt-2">
                      <span className="text-sm font-semibold text-homepal-primary">{job.payment} earned</span>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Profile Card */}
            <Card className="shadow-soft border-homepal-accent/50">
              <CardHeader>
                <CardTitle>Helper Profile</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center">
                  <Avatar className="w-20 h-20 mx-auto mb-4">
                    <AvatarFallback className="bg-gradient-hero text-white text-lg">
                      PS
                    </AvatarFallback>
                  </Avatar>
                  <h3 className="font-semibold text-foreground">Priya Sharma</h3>
                  <p className="text-sm text-muted-foreground">Helper since 2023</p>
                  <div className="flex items-center justify-center gap-1 mt-2">
                    <Star className="h-4 w-4 fill-current text-yellow-400" />
                    <span className="text-sm font-semibold">4.9</span>
                    <span className="text-sm text-muted-foreground">(127 reviews)</span>
                  </div>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-homepal-primary" />
                    <span className="text-muted-foreground">Bandra, Mumbai</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="h-4 w-4 text-homepal-primary" />
                    <span className="text-muted-foreground">+91 98765 43210</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="h-4 w-4 text-homepal-primary" />
                    <span className="text-muted-foreground">priya@example.com</span>
                  </div>
                </div>
                <Button variant="outline" className="w-full">
                  Edit Profile
                </Button>
              </CardContent>
            </Card>

            {/* Earnings Card */}
            <Card className="shadow-soft border-homepal-accent/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <IndianRupee className="h-5 w-5 text-homepal-primary" />
                  Earnings
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 gap-4 text-center">
                  <div className="p-3 bg-homepal-accent rounded-lg">
                    <div className="text-2xl font-bold text-homepal-primary">₹12,500</div>
                    <div className="text-xs text-muted-foreground">This Month</div>
                  </div>
                  <div className="p-3 bg-homepal-accent rounded-lg">
                    <div className="text-2xl font-bold text-homepal-primary">₹45,200</div>
                    <div className="text-xs text-muted-foreground">Total Earned</div>
                  </div>
                </div>
                <Button variant="outline" className="w-full">
                  View Earnings Details
                </Button>
              </CardContent>
            </Card>

            {/* Stats Card */}
            <Card className="shadow-soft border-homepal-accent/50">
              <CardHeader>
                <CardTitle>Your Stats</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div className="p-3 bg-homepal-accent rounded-lg">
                    <div className="text-2xl font-bold text-homepal-primary">89</div>
                    <div className="text-xs text-muted-foreground">Jobs Completed</div>
                  </div>
                  <div className="p-3 bg-homepal-accent rounded-lg">
                    <div className="text-2xl font-bold text-homepal-primary">98%</div>
                    <div className="text-xs text-muted-foreground">Success Rate</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HelperDashboard;