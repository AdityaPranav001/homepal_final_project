import Navigation from "@/components/layout/Navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { 
  Calendar, 
  Clock, 
  MapPin, 
  Star, 
  Plus,
  Phone,
  Mail
} from "lucide-react";

const CustomerDashboard = () => {
  const upcomingBookings = [
    {
      id: 1,
      service: "House Cleaning",
      helper: "Priya Sharma",
      date: "2024-01-25",
      time: "10:00 AM",
      duration: "3 hours",
      status: "confirmed",
      rating: 4.8
    },
    {
      id: 2,
      service: "Cooking",
      helper: "Rahul Kumar",
      date: "2024-01-26",
      time: "2:00 PM", 
      duration: "2 hours",
      status: "pending",
      rating: 4.9
    }
  ];

  const pastBookings = [
    {
      id: 3,
      service: "Plumbing",
      helper: "Amit Singh",
      date: "2024-01-20",
      time: "11:00 AM",
      duration: "2 hours",
      status: "completed",
      rating: 4.7
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "confirmed": return "bg-green-100 text-green-800";
      case "pending": return "bg-yellow-100 text-yellow-800";
      case "completed": return "bg-blue-100 text-blue-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Customer Dashboard</h1>
          <p className="text-muted-foreground">Manage your bookings and find helpers</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Quick Actions */}
            <Card className="shadow-soft border-homepal-accent/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Plus className="h-5 w-5 text-homepal-primary" />
                  Quick Actions
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Button className="h-20 bg-gradient-hero shadow-soft flex flex-col">
                    <span className="font-semibold">Book a Helper</span>
                    <span className="text-sm opacity-90">Find helpers nearby</span>
                  </Button>
                  <Button variant="outline" className="h-20 border-homepal-primary text-homepal-primary hover:bg-homepal-primary hover:text-white flex flex-col">
                    <span className="font-semibold">Emergency Service</span>
                    <span className="text-sm">Available 24/7</span>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Upcoming Bookings */}
            <Card className="shadow-soft border-homepal-accent/50">
              <CardHeader>
                <CardTitle>Upcoming Bookings</CardTitle>
                <CardDescription>Your scheduled services</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {upcomingBookings.map((booking) => (
                  <div key={booking.id} className="flex items-center justify-between p-4 bg-homepal-accent rounded-lg">
                    <div className="flex items-center space-x-4">
                      <Avatar>
                        <AvatarFallback className="bg-gradient-hero text-white">
                          {booking.helper.split(' ').map(n => n[0]).join('')}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <h4 className="font-semibold text-foreground">{booking.service}</h4>
                        <p className="text-sm text-muted-foreground">{booking.helper}</p>
                        <div className="flex items-center gap-4 mt-1">
                          <div className="flex items-center gap-1 text-xs text-muted-foreground">
                            <Calendar className="h-3 w-3" />
                            {booking.date}
                          </div>
                          <div className="flex items-center gap-1 text-xs text-muted-foreground">
                            <Clock className="h-3 w-3" />
                            {booking.time} ({booking.duration})
                          </div>
                          <div className="flex items-center gap-1 text-xs text-muted-foreground">
                            <Star className="h-3 w-3 fill-current text-yellow-400" />
                            {booking.rating}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-end gap-2">
                      <Badge className={getStatusColor(booking.status)}>
                        {booking.status}
                      </Badge>
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

            {/* Past Bookings */}
            <Card className="shadow-soft border-homepal-accent/50">
              <CardHeader>
                <CardTitle>Recent Bookings</CardTitle>
                <CardDescription>Your booking history</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {pastBookings.map((booking) => (
                  <div key={booking.id} className="flex items-center justify-between p-4 bg-muted rounded-lg">
                    <div className="flex items-center space-x-4">
                      <Avatar>
                        <AvatarFallback className="bg-gradient-hero text-white">
                          {booking.helper.split(' ').map(n => n[0]).join('')}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <h4 className="font-semibold text-foreground">{booking.service}</h4>
                        <p className="text-sm text-muted-foreground">{booking.helper}</p>
                        <div className="flex items-center gap-4 mt-1">
                          <div className="flex items-center gap-1 text-xs text-muted-foreground">
                            <Calendar className="h-3 w-3" />
                            {booking.date}
                          </div>
                          <div className="flex items-center gap-1 text-xs text-muted-foreground">
                            <Star className="h-3 w-3 fill-current text-yellow-400" />
                            {booking.rating}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-end gap-2">
                      <Badge className={getStatusColor(booking.status)}>
                        {booking.status}
                      </Badge>
                      <Button size="sm" variant="outline">
                        Rate & Review
                      </Button>
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
                <CardTitle>Profile</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center">
                  <Avatar className="w-20 h-20 mx-auto mb-4">
                    <AvatarFallback className="bg-gradient-hero text-white text-lg">
                      JD
                    </AvatarFallback>
                  </Avatar>
                  <h3 className="font-semibold text-foreground">John Doe</h3>
                  <p className="text-sm text-muted-foreground">Customer since 2024</p>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-homepal-primary" />
                    <span className="text-muted-foreground">Mumbai, Maharashtra</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="h-4 w-4 text-homepal-primary" />
                    <span className="text-muted-foreground">+91 98765 43210</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="h-4 w-4 text-homepal-primary" />
                    <span className="text-muted-foreground">john@example.com</span>
                  </div>
                </div>
                <Button variant="outline" className="w-full">
                  Edit Profile
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
                    <div className="text-2xl font-bold text-homepal-primary">15</div>
                    <div className="text-xs text-muted-foreground">Total Bookings</div>
                  </div>
                  <div className="p-3 bg-homepal-accent rounded-lg">
                    <div className="text-2xl font-bold text-homepal-primary">₹2,400</div>
                    <div className="text-xs text-muted-foreground">Total Spent</div>
                  </div>
                </div>
                <div className="p-3 bg-homepal-accent rounded-lg text-center">
                  <div className="text-xl font-bold text-homepal-primary">4.8★</div>
                  <div className="text-xs text-muted-foreground">Average Helper Rating</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerDashboard;