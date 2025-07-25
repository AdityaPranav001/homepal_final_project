import { 
  users, 
  helperProfiles, 
  bookings, 
  services, 
  reviews,
  type User, 
  type InsertUser,
  type HelperProfile,
  type InsertHelperProfile,
  type Booking,
  type InsertBooking,
  type Service,
  type InsertService,
  type Review,
  type InsertReview
} from "@shared/schema";
import { db } from "./db";
import { eq, and } from "drizzle-orm";

export interface IStorage {
  // User methods
  getUser(id: number): Promise<User | undefined>;
  getUserByEmail(email: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  // Helper profile methods
  getHelperProfile(userId: number): Promise<HelperProfile | undefined>;
  createHelperProfile(profile: InsertHelperProfile): Promise<HelperProfile>;
  updateHelperAvailability(userId: number, available: boolean): Promise<void>;
  
  // Service methods
  getAllServices(): Promise<Service[]>;
  createService(service: InsertService): Promise<Service>;
  
  // Booking methods
  createBooking(booking: InsertBooking): Promise<Booking>;
  getBookingsByCustomer(customerId: number): Promise<Booking[]>;
  getBookingsByHelper(helperId: number): Promise<Booking[]>;
  updateBookingStatus(bookingId: number, status: string): Promise<void>;
  
  // Review methods
  createReview(review: InsertReview): Promise<Review>;
  getReviewsByHelper(helperId: number): Promise<Review[]>;
}

export class DatabaseStorage implements IStorage {
  // User methods
  async getUser(id: number): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.id, id));
    return user || undefined;
  }

  async getUserByEmail(email: string): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.email, email));
    return user || undefined;
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const [user] = await db
      .insert(users)
      .values(insertUser)
      .returning();
    return user;
  }

  // Helper profile methods
  async getHelperProfile(userId: number): Promise<HelperProfile | undefined> {
    const [profile] = await db
      .select()
      .from(helperProfiles)
      .where(eq(helperProfiles.userId, userId));
    return profile || undefined;
  }

  async createHelperProfile(profile: InsertHelperProfile): Promise<HelperProfile> {
    const [helperProfile] = await db
      .insert(helperProfiles)
      .values(profile)
      .returning();
    return helperProfile;
  }

  async updateHelperAvailability(userId: number, available: boolean): Promise<void> {
    await db
      .update(helperProfiles)
      .set({ available })
      .where(eq(helperProfiles.userId, userId));
  }

  // Service methods
  async getAllServices(): Promise<Service[]> {
    return await db.select().from(services);
  }

  async createService(service: InsertService): Promise<Service> {
    const [newService] = await db
      .insert(services)
      .values(service)
      .returning();
    return newService;
  }

  // Booking methods
  async createBooking(booking: InsertBooking): Promise<Booking> {
    const [newBooking] = await db
      .insert(bookings)
      .values(booking)
      .returning();
    return newBooking;
  }

  async getBookingsByCustomer(customerId: number): Promise<Booking[]> {
    return await db
      .select()
      .from(bookings)
      .where(eq(bookings.customerId, customerId));
  }

  async getBookingsByHelper(helperId: number): Promise<Booking[]> {
    return await db
      .select()
      .from(bookings)
      .where(eq(bookings.helperId, helperId));
  }

  async updateBookingStatus(bookingId: number, status: string): Promise<void> {
    await db
      .update(bookings)
      .set({ status })
      .where(eq(bookings.id, bookingId));
  }

  // Review methods
  async createReview(review: InsertReview): Promise<Review> {
    const [newReview] = await db
      .insert(reviews)
      .values(review)
      .returning();
    return newReview;
  }

  async getReviewsByHelper(helperId: number): Promise<Review[]> {
    return await db
      .select()
      .from(reviews)
      .where(eq(reviews.helperId, helperId));
  }
}

export const storage = new DatabaseStorage();
