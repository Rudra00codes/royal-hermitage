# Royal Hermitage - Luxury Real Estate Website

## Table of Contents
- [Overview](#overview)
- [Features](#features)
- [Architecture](#architecture)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Pages and Components](#pages-and-components)
- [Design Patterns](#design-patterns)
- [Responsive Design](#responsive-design)
- [Accessibility](#accessibility)
- [Getting Started](#getting-started)
- [Future Enhancements](#future-enhancements)

## Overview

Royal Hermitage is a sophisticated, responsive luxury real estate website designed to showcase high-end properties and provide personalized real estate services. The application features an elegant, professional design with smooth transitions and immersive property showcases, creating an exceptional user experience across all device types.

The website consists of five core pages (Home, About, Properties, Services, Contact) that provide a comprehensive view of our luxury real estate offerings. With a focus on visual aesthetics and user experience, the site incorporates subtle animations, a refined dark mode, and responsive layouts optimized for all devices.

## Features

### Core Functionality
- **Property Listings**: Showcase luxury properties with detailed information including price, location, amenities, and virtual tours
- **Advanced Property Search**: Filter properties by type, location, price range, and exclusive features
- **Premium Services**: Detailed pages for specialized real estate services
- **Contact Concierge**: Direct communication channel with our luxury real estate experts
- **Company Profile**: Comprehensive about section highlighting our legacy and team of experts

### User Experience Enhancements
- **Elegant Dark Mode**: User-controlled theme switching with refined transitions
- **Responsive Design**: Optimized layouts for all devices with special attention to tablet interfaces
- **Loading States**: Polished loading animations and transitions
- **Section Animations**: Subtle content reveal animations for enhanced engagement
- **Interactive Elements**: Thoughtful hover effects and state changes
- **Navigation Aids**: Convenient scroll-to-top functionality
- **Error Handling**: Elegant error pages with helpful navigation options

## Architecture

Royal Hermitage follows a modern frontend architecture with a lightweight backend for data persistence. The application is built as a single-page application (SPA) using React, with routing handled by Wouter.

### Frontend Architecture
- **Component-Based Structure**: Modular components for reusability and maintainability
- **Context API**: Used for state management (theme, responsive queries)
- **Custom Hooks**: Encapsulate complex logic and provide reusable functionality
- **CSS-in-JS**: Tailwind for styling with custom utility classes
- **Responsive Design System**: Mobile-first approach with breakpoints for different device sizes

### Backend Architecture
- **Express Server**: Lightweight Node.js server to handle API requests
- **In-Memory Storage**: Simple data persistence for development
- **RESTful API**: Clean API endpoints for data operations

## Tech Stack

### Frontend
- **React**: UI library for building component-based interfaces
- **TypeScript**: Static typing for improved code quality and developer experience
- **Tailwind CSS**: Utility-first CSS framework for styling
- **Wouter**: Lightweight routing library for React
- **Framer Motion**: Animation library for smooth UI transitions
- **Lucide React**: Icon library for UI elements
- **React Hook Form**: Form handling with validation
- **Zod**: Schema validation for forms and data
- **React Query**: Data fetching and caching
- **Shadcn UI**: Component library built on Radix UI primitives

### Backend
- **Express**: Web server framework for Node.js
- **Drizzle ORM**: SQL toolkit with TypeScript support
- **Drizzle Zod**: Schema validation integration

### Development Tools
- **Vite**: Next-generation frontend build tooling
- **ESBuild**: Fast JavaScript bundler
- **TypeScript**: Static typing for improved code quality

## Project Structure

The project follows a clear separation of concerns with dedicated folders for different aspects of the application:

```
├── client/                 # Frontend code
│   ├── src/
│   │   ├── components/     # UI components
│   │   │   ├── common/     # Shared components (Header, Footer)
│   │   │   ├── home/       # Home page components
│   │   │   ├── properties/ # Property-related components
│   │   │   ├── services/   # Service-related components
│   │   │   ├── ui/         # Core UI components
│   │   ├── data/           # Static data and models
│   │   ├── hooks/          # Custom React hooks
│   │   ├── layouts/        # Layout components
│   │   ├── lib/            # Utility functions and libraries
│   │   ├── pages/          # Page components
│   ├── index.html          # HTML entry point
├── server/                 # Backend code
│   ├── index.ts            # Server entry point
│   ├── routes.ts           # API routes
│   ├── storage.ts          # Data storage
├── shared/                 # Shared code between client and server
│   ├── schema.ts           # Data schemas
```

## Pages and Components

### Pages
- **Home**: Landing page with property highlights, services overview, and testimonials
- **About**: Company information, team members, and mission statement
- **Properties**: Comprehensive property listings with filtering
- **Services**: Detailed information about real estate services
- **Contact**: Contact form and location information
- **404 (Not Found)**: Custom error page with navigation options

### Key Components

#### Layout Components
- **Header**: Navigation and brand identity with responsive menu
- **Footer**: Site links, contact information, and copyright
- **MainLayout**: Structure for consistent page layout

#### UI Components
- **PropertyCard**: Display individual property information
- **PropertyGrid**: Responsive grid layout for property listings
- **ServiceCard**: Display individual service information
- **LoadingAnimation**: Visual feedback during page loading
- **ThemeToggle**: Switch between light and dark modes
- **SectionReveal**: Animate content as it enters viewport
- **ScrollToTop**: Button to navigate to the top of the page

#### Utility Components
- **Container**: Consistent content width and padding
- **Button**: Styled button with variants
- **Card**: Content container with consistent styling
- **Form**: Form components with validation

## Design Patterns

### Component Composition
Components are designed to be modular and composable, following a hierarchy that promotes reusability. Smaller, atomic components are combined to create more complex features.

### Context Provider Pattern
The application uses React Context API for state management across components:
- **ThemeProvider**: Manages light/dark mode preferences
- **QueryClientProvider**: Handles data fetching and caching

### Custom Hooks
Custom hooks encapsulate complex logic and provide reusable functionality:
- **useTheme**: Access and manipulate theme settings
- **useResponsive**: Detect device type and screen size
- **useScrollSpy**: Track scroll position for navigation highlighting
- **useToast**: Display toast notifications

### Render Props
Used in select components to allow for flexible rendering of child content.

## Responsive Design

The website implements a comprehensive responsive design system that adapts to different screen sizes and devices:

### Breakpoints
- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

### Responsive Strategies
- **Mobile-first approach**: Base styles for mobile with progressive enhancement
- **Fluid typography**: Text scales appropriately across screen sizes
- **Grid layouts**: Responsive grid system for content organization
- **Flexible images**: Images scale and maintain aspect ratios
- **Component adaptation**: Components change layout and functionality based on screen size
- **Tablet-specific optimizations**: Special attention to tablet layout with icon-based navigation

### Dark Mode
The site implements a complete dark mode theme with seamless transitions between light and dark themes. The theme respects user preference and persists across sessions.

## Accessibility

The website is built with accessibility in mind:

- **Semantic HTML**: Proper use of HTML5 elements for clear document structure
- **ARIA attributes**: Enhanced screen reader support
- **Keyboard navigation**: All interactive elements are accessible via keyboard
- **Color contrast**: Meets WCAG guidelines for readability
- **Focus management**: Clear visual indicators for focused elements
- **Alt text**: Descriptive text for images
- **Responsive design**: Accessible on various screen sizes and devices

## Getting Started

### Prerequisites
- Node.js (v14.0 or higher)
- npm or yarn

### Installation
1. Clone the repository
   ```
   git clone https://github.com/yourusername/estate-haven.git
   cd estate-haven
   ```

2. Install dependencies
   ```
   npm install
   ```

3. Start the development server
   ```
   npm run dev
   ```

4. Open your browser to http://localhost:5000

## Future Enhancements

- User authentication and personalized property recommendations
- Property comparison feature
- Advanced property search with more filters
- Real-time notifications for new listings
- Interactive property maps with neighborhood information
- Virtual property tours and 3D visualizations
- Integration with mortgage calculators
- Accessibility improvements and WCAG compliance audit
- Performance optimizations for larger data sets
- Internationalization and multi-language support