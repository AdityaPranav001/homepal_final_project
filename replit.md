# Homepal - Home Services Platform

## Overview

Homepal is a full-stack web application that connects customers with verified helpers for various household services. Built with a modern tech stack featuring React frontend, Express backend, and PostgreSQL database, the platform enables users to book services like cleaning, cooking, plumbing, and more at affordable rates.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

The application follows a monorepo structure with clear separation between client, server, and shared components:

- **Frontend**: React with TypeScript, using Vite for build tooling
- **Backend**: Express.js server with TypeScript
- **Database**: PostgreSQL with Drizzle ORM
- **UI Framework**: Tailwind CSS with shadcn/ui components
- **State Management**: TanStack Query for server state
- **Routing**: Wouter for client-side routing

## Key Components

### Frontend Architecture
- **Client Directory**: Contains all React components, pages, and frontend logic
- **Component Structure**: Well-organized with separate directories for UI components, layout, and sections
- **Styling**: Tailwind CSS with custom design tokens and HSL color system
- **Type Safety**: Full TypeScript implementation with strict configuration

### Backend Architecture
- **Express Server**: RESTful API with middleware for logging and error handling
- **Storage Layer**: PostgreSQL database with Drizzle ORM and comprehensive storage interface
- **Route Organization**: Centralized route registration with API prefix structure
- **Development Tools**: Vite integration for development with HMR support
- **Authentication**: User registration and login endpoints for customers and helpers

### Database Schema
- **User Management**: Comprehensive user schema supporting both customers and helpers
- **Helper Profiles**: Extended profiles for helpers with skills, ratings, and availability
- **Service Management**: Service catalog with pricing and descriptions
- **Booking System**: Complete booking lifecycle from request to completion
- **Review System**: Rating and review system for quality assurance
- **Type Safety**: Drizzle-zod integration for runtime validation
- **Migration Support**: Configured for PostgreSQL with Neon serverless adapter

## Data Flow

1. **Client Requests**: React components make API calls using TanStack Query
2. **Server Processing**: Express routes handle requests and interact with storage layer
3. **Database Operations**: PostgreSQL database with Drizzle ORM for type-safe queries
4. **Data Persistence**: Comprehensive storage interface with user management, bookings, and reviews
5. **Response Handling**: JSON responses with consistent error handling
6. **State Updates**: Client state updates trigger UI re-renders

## External Dependencies

### Core Framework Dependencies
- **React Ecosystem**: React 18 with TypeScript, TanStack Query for data fetching
- **UI Components**: Comprehensive Radix UI primitives with shadcn/ui styling
- **Styling**: Tailwind CSS with PostCSS processing
- **Database**: Drizzle ORM with Neon serverless PostgreSQL adapter

### Development Tools
- **Build Tools**: Vite for frontend, esbuild for backend bundling
- **Type Checking**: TypeScript with strict configuration
- **Code Quality**: Configured for modern ES modules and bundler resolution

### Third-Party Integrations
- **Replit Integration**: Custom plugins for development environment
- **Form Handling**: React Hook Form with resolvers
- **Validation**: Zod for schema validation

## Deployment Strategy

### Development Environment
- **Hot Reloading**: Vite dev server with middleware integration
- **Unified Server**: Express serves both API and frontend in development
- **Environment Variables**: Database URL configuration through environment

### Production Build
- **Frontend**: Vite builds optimized React bundle to `dist/public`
- **Backend**: esbuild bundles Express server to `dist/index.js`
- **Static Serving**: Express serves built frontend files in production
- **Database**: PostgreSQL connection via environment variable

### Configuration Management
- **TypeScript Paths**: Configured aliases for clean imports
- **Asset Handling**: Vite handles static assets and provides development server
- **Error Handling**: Comprehensive error boundaries and middleware

The architecture prioritizes developer experience with hot reloading, type safety, and modern tooling while maintaining a clear separation of concerns between frontend and backend components.