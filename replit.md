# Project Overview

This is a modern full-stack web application built with a React frontend and Express.js backend, designed as a personal portfolio/resume website. The application features a clean, professional design with smooth animations and responsive layout.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Bundler**: Vite for fast development and optimized builds
- **UI Framework**: shadcn/ui components built on Radix UI primitives
- **Styling**: Tailwind CSS with custom design system
- **Animations**: Framer Motion for smooth transitions
- **State Management**: TanStack Query for server state
- **Routing**: Wouter for lightweight client-side routing

### Backend Architecture
- **Framework**: Express.js with TypeScript
- **Runtime**: Node.js with ES modules
- **Database ORM**: Drizzle ORM with PostgreSQL support
- **Database Provider**: Neon Database (serverless PostgreSQL)
- **Session Storage**: PostgreSQL-backed sessions with connect-pg-simple
- **Development**: Hot reload with tsx

### Key Components

#### Frontend Structure
- **Pages**: Home page with portfolio sections, 404 error page
- **Components**: Comprehensive UI component library from shadcn/ui
- **Hooks**: Custom hooks for mobile detection and toast notifications
- **Styling**: Dark theme with navy color palette, responsive design
- **Download Features**: Resume and project source code download buttons

#### Backend Structure
- **API Routes**: Resume download endpoint, project zip download endpoint
- **Storage Layer**: Abstract storage interface with in-memory implementation
- **Database Schema**: User management with Drizzle ORM
- **Middleware**: Request logging, JSON parsing, error handling
- **File Services**: Archiver for creating downloadable project zip files

#### UI/UX Features
- **Responsive Design**: Mobile-first approach with breakpoint-based layouts
- **Animations**: Smooth page transitions and component animations
- **Dark Theme**: Professional navy-based color scheme
- **Component Library**: Comprehensive set of accessible UI components

### Data Flow

1. **Client Requests**: React frontend makes API calls using TanStack Query
2. **Server Processing**: Express.js handles requests with middleware pipeline
3. **Data Storage**: Drizzle ORM manages database operations
4. **Response Handling**: JSON responses with proper error handling
5. **State Management**: TanStack Query caches and synchronizes server state

### External Dependencies

#### Frontend Dependencies
- **UI Components**: Radix UI primitives for accessibility
- **Styling**: Tailwind CSS for utility-first styling
- **Forms**: React Hook Form with Zod validation
- **Animations**: Framer Motion for smooth transitions
- **Icons**: Lucide React for consistent iconography

#### Backend Dependencies
- **Database**: Neon Database (serverless PostgreSQL)
- **ORM**: Drizzle ORM for type-safe database operations
- **Validation**: Zod schemas for runtime type checking
- **Sessions**: PostgreSQL-backed session storage
- **File Processing**: Archiver for zip file creation and download

### Deployment Strategy

#### Build Process
- **Frontend**: Vite builds optimized static assets
- **Backend**: esbuild bundles server code for production
- **Database**: Drizzle migrations handle schema changes

#### Development Environment
- **Hot Reload**: Vite dev server with HMR for frontend
- **Server Reload**: tsx for TypeScript execution with hot reload
- **Database**: Drizzle Kit for schema management and migrations

#### Production Considerations
- **Static Assets**: Frontend builds to `dist/public` directory
- **Server Bundle**: Backend bundles to `dist/index.js`
- **Environment**: Expects `DATABASE_URL` and `NODE_ENV` variables
- **Session Security**: Requires session secret configuration

#### Architecture Benefits
- **Type Safety**: Full TypeScript coverage from database to UI
- **Performance**: Optimized builds with tree shaking and code splitting
- **Developer Experience**: Hot reload, type checking, and modern tooling
- **Scalability**: Serverless database with connection pooling
- **Maintainability**: Clean separation of concerns and modular structure