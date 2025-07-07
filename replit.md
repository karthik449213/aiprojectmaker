# ProjectWizard - AI Project Generator

## Overview

ProjectWizard is an AI-powered SaaS application designed to help students generate academic project content including titles, abstracts, objectives, and references. This is an MVP implementation featuring a React frontend with Express backend, using mock AI responses for demonstration purposes.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter (lightweight React router)
- **Styling**: Tailwind CSS with shadcn/ui component library
- **State Management**: React Query (@tanstack/react-query) for server state
- **Forms**: React Hook Form with Zod validation
- **Theme**: Dark/light mode toggle with theme persistence

### Backend Architecture
- **Framework**: Express.js with TypeScript
- **Runtime**: Node.js with ES modules
- **Build System**: Vite for frontend, esbuild for backend
- **Development**: Hot reload with Vite integration

### Database Architecture
- **ORM**: Drizzle ORM configured for PostgreSQL
- **Schema**: Basic user management setup in shared/schema.ts
- **Storage**: In-memory storage implementation for development (MemStorage class)
- **Configuration**: Drizzle config points to PostgreSQL with migrations support

## Key Components

### Core Pages
1. **Home Page** (`/`) - Landing page with hero section, features, and call-to-action
2. **Project Helper** (`/project-helper`) - Main generator tool with form input and AI output
3. **About Page** (`/about`) - Information about the platform and target audience
4. **Contact Page** (`/contact`) - Contact form with validation

### UI Components
- Comprehensive shadcn/ui component library implementation
- Custom theme provider with CSS variables
- Responsive navigation with mobile hamburger menu
- Toast notifications for user feedback
- Form components with validation

### Mock AI System
- Mock project data stored in `client/src/lib/mockData.ts`
- Simulated AI processing delay using setTimeout
- Category-based responses (Engineering, Management, Science, etc.)
- Project history storage in localStorage

## Data Flow

1. **User Input**: Form submission with project topic and category selection
2. **Mock Processing**: Simulated AI delay (2-3 seconds) with loading animation
3. **Response Generation**: Static mock data retrieved based on category
4. **Local Storage**: Project history saved for recent projects display
5. **UI Updates**: Generated content displayed with copy functionality

## External Dependencies

### Frontend Dependencies
- React ecosystem (React, React DOM, React Query)
- UI Components (Radix UI primitives, Lucide icons)
- Form handling (React Hook Form, Zod validation)
- Styling (Tailwind CSS, class-variance-authority)
- Routing (Wouter)

### Backend Dependencies
- Express.js framework
- Database (Drizzle ORM, @neondatabase/serverless)
- Development tools (tsx, esbuild, Vite)

### Development Tools
- TypeScript for type safety
- Vite for development server and building
- PostCSS with Tailwind for styling
- ESLint configuration through shadcn setup

## Deployment Strategy

### Build Process
- Frontend: Vite builds React app to `dist/public`
- Backend: esbuild bundles Express server to `dist/index.js`
- Single deployment artifact with both frontend and backend

### Environment Configuration
- Development: `npm run dev` starts both frontend and backend
- Production: `npm run build` then `npm start`
- Database URL required via `DATABASE_URL` environment variable

### Hosting Considerations
- Designed for platforms supporting Node.js (Replit, Vercel, etc.)
- Static assets served from Express in production
- Database connection configured for Neon PostgreSQL

## Changelog
```
Changelog:
- July 07, 2025. Initial setup
```

## User Preferences
```
Preferred communication style: Simple, everyday language.
```