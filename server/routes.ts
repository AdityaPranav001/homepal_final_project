import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertUserSchema, insertHelperProfileSchema, insertServiceSchema } from "@shared/schema";

export async function registerRoutes(app: Express): Promise<Server> {
  // User registration endpoint
  app.post("/api/auth/register", async (req, res) => {
    try {
      const userData = insertUserSchema.parse(req.body);
      const user = await storage.createUser(userData);
      
      // If it's a helper, create helper profile
      if (userData.userType === 'helper' && req.body.skills && req.body.experience) {
        await storage.createHelperProfile({
          userId: user.id,
          skills: req.body.skills.split(',').map((s: string) => s.trim()),
          experience: req.body.experience,
        });
      }
      
      res.json({ success: true, user: { id: user.id, name: user.name, email: user.email, userType: user.userType } });
    } catch (error) {
      res.status(400).json({ error: "Registration failed", details: error });
    }
  });

  // User login endpoint
  app.post("/api/auth/login", async (req, res) => {
    try {
      const { email, password } = req.body;
      const user = await storage.getUserByEmail(email);
      
      if (!user || user.password !== password) {
        return res.status(401).json({ error: "Invalid credentials" });
      }
      
      res.json({ success: true, user: { id: user.id, name: user.name, email: user.email, userType: user.userType } });
    } catch (error) {
      res.status(500).json({ error: "Login failed" });
    }
  });

  // Get all services
  app.get("/api/services", async (req, res) => {
    try {
      const services = await storage.getAllServices();
      res.json(services);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch services" });
    }
  });

  // Create a booking
  app.post("/api/bookings", async (req, res) => {
    try {
      const booking = await storage.createBooking(req.body);
      res.json(booking);
    } catch (error) {
      res.status(400).json({ error: "Failed to create booking" });
    }
  });

  // Get bookings for a customer
  app.get("/api/bookings/customer/:customerId", async (req, res) => {
    try {
      const customerId = parseInt(req.params.customerId);
      const bookings = await storage.getBookingsByCustomer(customerId);
      res.json(bookings);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch bookings" });
    }
  });

  // Get bookings for a helper
  app.get("/api/bookings/helper/:helperId", async (req, res) => {
    try {
      const helperId = parseInt(req.params.helperId);
      const bookings = await storage.getBookingsByHelper(helperId);
      res.json(bookings);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch bookings" });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
