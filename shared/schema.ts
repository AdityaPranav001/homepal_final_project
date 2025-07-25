import { pgTable, text, serial, integer, boolean, timestamp, decimal } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";
import { relations } from "drizzle-orm";

// Users table for both customers and helpers
export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull().unique(),
  phone: text("phone").notNull(),
  password: text("password").notNull(),
  userType: text("user_type").notNull(), // 'customer' or 'helper'
  address: text("address"),
  verified: boolean("verified").default(false),
  createdAt: timestamp("created_at").defaultNow(),
});

// Helper profiles with additional information
export const helperProfiles = pgTable("helper_profiles", {
  id: serial("id").primaryKey(),
  userId: integer("user_id").references(() => users.id).notNull(),
  skills: text("skills").array(),
  experience: text("experience"),
  rating: decimal("rating", { precision: 3, scale: 2 }).default("0"),
  totalJobs: integer("total_jobs").default(0),
  available: boolean("available").default(true),
});

// Services offered by helpers
export const services = pgTable("services", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  description: text("description"),
  basePrice: decimal("base_price", { precision: 10, scale: 2 }).default("100"), // ₹100/hour default
});

// Bookings/job requests
export const bookings = pgTable("bookings", {
  id: serial("id").primaryKey(),
  customerId: integer("customer_id").references(() => users.id).notNull(),
  helperId: integer("helper_id").references(() => users.id),
  serviceId: integer("service_id").references(() => services.id).notNull(),
  date: timestamp("date").notNull(),
  duration: integer("duration").notNull(), // in hours
  totalPrice: decimal("total_price", { precision: 10, scale: 2 }),
  status: text("status").notNull().default("pending"), // pending, confirmed, completed, cancelled
  notes: text("notes"),
  createdAt: timestamp("created_at").defaultNow(),
});

// Reviews and ratings
export const reviews = pgTable("reviews", {
  id: serial("id").primaryKey(),
  bookingId: integer("booking_id").references(() => bookings.id).notNull(),
  customerId: integer("customer_id").references(() => users.id).notNull(),
  helperId: integer("helper_id").references(() => users.id).notNull(),
  rating: integer("rating").notNull(), // 1-5 stars
  comment: text("comment"),
  createdAt: timestamp("created_at").defaultNow(),
});

// Define relations
export const usersRelations = relations(users, ({ one, many }) => ({
  helperProfile: one(helperProfiles, {
    fields: [users.id],
    references: [helperProfiles.userId],
  }),
  customerBookings: many(bookings, { relationName: "customerBookings" }),
  helperBookings: many(bookings, { relationName: "helperBookings" }),
  customerReviews: many(reviews, { relationName: "customerReviews" }),
  helperReviews: many(reviews, { relationName: "helperReviews" }),
}));

export const helperProfilesRelations = relations(helperProfiles, ({ one }) => ({
  user: one(users, {
    fields: [helperProfiles.userId],
    references: [users.id],
  }),
}));

export const bookingsRelations = relations(bookings, ({ one, many }) => ({
  customer: one(users, {
    fields: [bookings.customerId],
    references: [users.id],
    relationName: "customerBookings",
  }),
  helper: one(users, {
    fields: [bookings.helperId],
    references: [users.id],
    relationName: "helperBookings",
  }),
  service: one(services, {
    fields: [bookings.serviceId],
    references: [services.id],
  }),
  review: one(reviews, {
    fields: [bookings.id],
    references: [reviews.bookingId],
  }),
}));

export const reviewsRelations = relations(reviews, ({ one }) => ({
  booking: one(bookings, {
    fields: [reviews.bookingId],
    references: [bookings.id],
  }),
  customer: one(users, {
    fields: [reviews.customerId],
    references: [users.id],
    relationName: "customerReviews",
  }),
  helper: one(users, {
    fields: [reviews.helperId],
    references: [users.id],
    relationName: "helperReviews",
  }),
}));

export const servicesRelations = relations(services, ({ many }) => ({
  bookings: many(bookings),
}));

// Zod schemas for validation
export const insertUserSchema = createInsertSchema(users).omit({
  id: true,
  createdAt: true,
  verified: true,
});

export const insertHelperProfileSchema = createInsertSchema(helperProfiles).omit({
  id: true,
  rating: true,
  totalJobs: true,
});

export const insertBookingSchema = createInsertSchema(bookings).omit({
  id: true,
  createdAt: true,
  status: true,
});

export const insertReviewSchema = createInsertSchema(reviews).omit({
  id: true,
  createdAt: true,
});

export const insertServiceSchema = createInsertSchema(services).omit({
  id: true,
});

// Types
export type User = typeof users.$inferSelect;
export type InsertUser = z.infer<typeof insertUserSchema>;
export type HelperProfile = typeof helperProfiles.$inferSelect;
export type InsertHelperProfile = z.infer<typeof insertHelperProfileSchema>;
export type Booking = typeof bookings.$inferSelect;
export type InsertBooking = z.infer<typeof insertBookingSchema>;
export type Review = typeof reviews.$inferSelect;
export type InsertReview = z.infer<typeof insertReviewSchema>;
export type Service = typeof services.$inferSelect;
export type InsertService = z.infer<typeof insertServiceSchema>;
