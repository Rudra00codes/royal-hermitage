# Royal Hermitage - Technical Architecture

This document provides a comprehensive overview of the Royal Hermitage luxury real estate website's technical architecture, explaining design decisions, patterns, and implementation details.

## System Architecture Overview

Royal Hermitage follows a client-server architecture with a clear separation between frontend and backend components:

```
┌─────────────────┐      ┌─────────────────┐
│                 │      │                 │
│  React Frontend │◄────►│ Express Backend │
│                 │      │                 │
└────────┬────────┘      └────────┬────────┘
         │                        │
         │                        │
         ▼                        ▼
┌─────────────────┐      ┌─────────────────┐
│                 │      │                 │
│  Browser/Client │      │  Data Storage   │
│                 │      │                 │
└─────────────────┘      └─────────────────┘
```

### Key Architecture Components

1. **Client-Side Application**: React-based SPA with TypeScript
2. **API Layer**: Express.js backend providing RESTful endpoints
3. **Data Layer**: In-memory storage with TypeScript interfaces
4. **Shared Types**: Common type definitions used by both frontend and backend

## Frontend Architecture

The frontend follows a component-based architecture with clear separation of concerns:

```
┌─────────────────────────────────────────┐
│              Application                │
└───────────────────┬─────────────────────┘
                    │
        ┌───────────┴───────────┐
        │                       │
┌───────▼──────┐      ┌─────────▼────────┐
│              │      │                  │
│    Pages     │      │   Components     │
│              │      │                  │
└───────┬──────┘      └─────────┬────────┘
        │                       │
        │             ┌─────────┼─────────┐
        │             │         │         │
┌───────▼──────┐    ┌─▼───┐   ┌─▼───┐   ┌─▼───┐
│              │    │     │   │     │   │     │
│  Layouts     │    │ UI  │   │ Page │   │Feature│
│              │    │     │   │     │   │     │
└──────────────┘    └─────┘   └─────┘   └─────┘
```

### Component Hierarchy

The component structure follows a hierarchical pattern:

1. **App Root**: Provides global providers (theme, query client)
2. **Router**: Handles route definitions and navigation
3. **Layouts**: Define page structure and common elements
4. **Pages**: Map to routes and compose feature components
5. **Feature Components**: Implement specific business functionality
6. **UI Components**: Reusable building blocks (buttons, forms, etc.)

### Data Flow

Data flows through the application in a predictable pattern:

```
┌──────────────┐    ┌──────────────┐    ┌──────────────┐
│              │    │              │    │              │
│  API/Storage ├───►│  React Query ├───►│  Components  │
│              │    │              │    │              │
└──────┬───────┘    └──────────────┘    └──────┬───────┘
       │                                       │
       │                                       │
       │            ┌──────────────┐           │
       │            │              │           │
       └───────────►│   Context    │◄──────────┘
                    │              │
                    └──────────────┘
```

1. Data is fetched from APIs via React Query
2. Global state is managed via Context API
3. Component-specific state is managed with useState/useReducer
4. Data flows down through props
5. Events/Actions flow up through callbacks

## Backend Architecture

The backend follows a simple, modular structure:

```
┌─────────────────────────────────────────┐
│              Express Server             │
└───────────────────┬─────────────────────┘
                    │
        ┌───────────┴───────────┐
        │                       │
┌───────▼──────┐      ┌─────────▼────────┐
│              │      │                  │
│   Routes     │      │     Storage      │
│              │      │                  │
└──────────────┘      └──────────────────┘
```

### API Design

The API follows RESTful principles with these key endpoints:

- **`GET /api/properties`**: Retrieve property listings
- **`GET /api/properties/:id`**: Retrieve a specific property
- **`GET /api/services`**: Retrieve service information
- **`POST /api/contact`**: Submit contact form

### Data Storage

For development purposes, data is stored in-memory using TypeScript classes that implement the storage interface. This could easily be replaced with a database implementation.

## State Management Strategy

Royal Hermitage employs a multi-level state management strategy:

### 1. Server State

Managed with React Query for all data fetched from the backend:

```tsx
// Example of React Query usage
const { data, isLoading, error } = useQuery({
  queryKey: ['properties'],
  queryFn: () => apiRequest('/api/properties')
});
```

Benefits:
- Automatic caching
- Loading and error states
- Refetching and invalidation
- Pagination support

### 2. Global UI State

Managed with React Context for application-wide UI state:

```tsx
// Theme context example
export const ThemeProvider = ({ children, defaultTheme = 'light' }) => {
  const [theme, setTheme] = useState(defaultTheme);
  
  // Theme logic...
  
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, isDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
};
```

Global state includes:
- Theme preferences (dark/light mode)
- Device/responsive information
- Authentication state (future)
- Toast notifications

### 3. Local Component State

Managed with `useState` and `useReducer` for component-specific state:

```tsx
// Component local state example
const [isOpen, setIsOpen] = useState(false);
const [selectedItem, setSelectedItem] = useState(null);
```

## TypeScript Type System

The application leverages TypeScript's type system for robust code:

### Key Types

1. **Data Models**: Defined in `shared/schema.ts`
   ```ts
   export interface Property {
     id: number;
     title: string;
     price: string;
     location: string;
     description: string;
     size: string;
     beds: number;
     baths: number;
     image: string;
     status: "For Sale" | "For Rent";
   }
   ```

2. **Component Props**: Defined alongside components
   ```ts
   interface PropertyCardProps {
     property: Property;
     onClick?: (id: number) => void;
   }
   ```

3. **API Responses**: Defined for type-safe data fetching
   ```ts
   type ApiResponse<T> = {
     data: T;
     status: 'success' | 'error';
     message?: string;
   };
   ```

4. **Form Schemas**: Defined using Zod
   ```ts
   const contactFormSchema = z.object({
     name: z.string().min(2, 'Name is required'),
     email: z.string().email('Invalid email address'),
     message: z.string().min(10, 'Message is too short')
   });
   
   type ContactFormValues = z.infer<typeof contactFormSchema>;
   ```

## Styling Architecture

The styling system follows a utility-first approach with Tailwind CSS:

### Core Design System

The design system is defined in `tailwind.config.ts`:

```ts
theme: {
  extend: {
    colors: {
      primary: {...},
      secondary: {...},
      // Additional color scales
    },
    fontFamily: {
      sans: ['Inter', 'ui-sans-serif', 'system-ui'],
      poppins: ['Poppins', 'sans-serif'],
    },
    // Other theme extensions
  }
}
```

### CSS Organization

CSS is organized in a layered approach:

1. **Tailwind Base**: Core utilities and reset
2. **Component Styles**: Specific component styling
3. **Custom Utilities**: Defined in `index.css`
4. **Dark Mode Variants**: Applied via `dark:` prefix

### Styling Patterns

Several styling patterns are employed:

1. **Utility Composition**: Primary styling method
   ```tsx
   <div className="p-4 mt-6 bg-white rounded-lg shadow-md dark:bg-gray-800">
   ```

2. **Conditional Classes**: For dynamic styling
   ```tsx
   <button className={`btn ${isActive ? 'bg-primary' : 'bg-gray-200'}`}>
   ```

3. **Component Abstractions**: For complex, repeated patterns
   ```tsx
   <Card variant="primary" isHoverable>
     Card content
   </Card>
   ```

## Responsive Design Architecture

The responsive system uses a mobile-first approach with multiple breakpoints:

### Breakpoint System

```
┌───────────┐ ┌───────────┐ ┌───────────┐ ┌───────────┐
│           │ │           │ │           │ │           │
│  Mobile   │ │  Tablet   │ │  Desktop  │ │   Wide    │
│  < 640px  │ │640px-1024px│ │1024-1280px│ │  >1280px  │
│           │ │           │ │           │ │           │
└───────────┘ └───────────┘ └───────────┘ └───────────┘
```

### Responsive Implementation Strategies

1. **Tailwind Responsive Prefixes**: Primary method
   ```html
   <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
   ```

2. **Responsive Hook**: For complex logic
   ```tsx
   const { isMobile, isTablet, isDesktop } = useResponsive();
   
   return isTablet ? <TabletLayout /> : <DefaultLayout />;
   ```

3. **Component Adaptations**: Different component variants
   ```tsx
   {/* Desktop Navigation */}
   <nav className="hidden lg:flex">...</nav>
   
   {/* Tablet Navigation */}
   <nav className="hidden md:flex lg:hidden">...</nav>
   
   {/* Mobile Navigation */}
   <nav className="flex md:hidden">...</nav>
   ```

## Animations and Transitions

The animation system is built on several technologies:

### 1. CSS Transitions

Used for simple state changes:

```css
.btn-hover-effect {
  @apply transition-all duration-300 hover:shadow-md hover:translate-y-[-2px];
}
```

### 2. Framer Motion

Used for more complex animations:

```tsx
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
>
  Content to animate
</motion.div>
```

### 3. Scroll-Triggered Animations

Implemented via the `SectionReveal` component using Intersection Observer:

```tsx
<SectionReveal delay={200} className="py-12">
  <h2>Section Title</h2>
  <p>This content will animate in when scrolled into view</p>
</SectionReveal>
```

## Performance Optimization

Several strategies are employed to optimize performance:

### 1. Code Splitting

Pages and large components are code-split to reduce initial bundle size:

```tsx
// Router with code splitting
function Router() {
  return (
    <Switch>
      <Route path="/" component={React.lazy(() => import('./pages/Home'))} />
      <Route path="/about" component={React.lazy(() => import('./pages/About'))} />
      {/* Additional routes */}
    </Switch>
  );
}
```

### 2. Image Optimization

Images are optimized for different screen sizes and lazy-loaded:

```tsx
<img 
  src={property.image} 
  alt={property.title}
  loading="lazy"
  className="w-full h-full object-cover"
/>
```

### 3. React Query Optimizations

Data fetching is optimized with caching and prefetching:

```tsx
// Prefetch data for common navigation paths
queryClient.prefetchQuery({
  queryKey: ['properties'],
  queryFn: () => apiRequest('/api/properties')
});
```

### 4. Memoization

Expensive components are memoized to prevent unnecessary re-renders:

```tsx
const MemoizedPropertyCard = React.memo(PropertyCard);
```

## Accessibility Architecture

Accessibility is built into the component architecture:

### 1. Semantic HTML

All components use proper semantic HTML:

```tsx
<article className="property-card">
  <header>
    <h3>{property.title}</h3>
  </header>
  <div className="content">
    {/* Property details */}
  </div>
  <footer>
    {/* Call to action */}
  </footer>
</article>
```

### 2. ARIA Attributes

ARIA attributes enhance screen reader experience:

```tsx
<button 
  aria-expanded={isOpen} 
  aria-controls="menu-content"
  onClick={toggleMenu}
>
  Menu
</button>
<div 
  id="menu-content" 
  aria-hidden={!isOpen}
>
  {/* Menu content */}
</div>
```

### 3. Keyboard Navigation

All interactive elements are keyboard accessible:

```tsx
<div 
  role="button"
  tabIndex={0}
  onClick={handleClick}
  onKeyDown={(e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      handleClick();
    }
  }}
>
  Interactive Element
</div>
```

## Error Handling Architecture

A comprehensive error handling strategy is implemented:

### 1. API Error Handling

```tsx
// Global error boundary for API calls
function apiRequest(url, options) {
  return fetch(url, options)
    .then(response => {
      if (!response.ok) {
        throw new Error(`API error: ${response.status}`);
      }
      return response.json();
    })
    .catch(error => {
      // Log error
      console.error('API Error:', error);
      
      // Show user-friendly message
      toast.error('Something went wrong. Please try again.');
      
      // Rethrow for component handling
      throw error;
    });
}
```

### 2. Component Error Boundaries

```tsx
class ErrorBoundary extends React.Component {
  state = { hasError: false };
  
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  
  componentDidCatch(error, info) {
    console.error('Component Error:', error, info);
  }
  
  render() {
    if (this.state.hasError) {
      return <ErrorFallback />;
    }
    
    return this.props.children;
  }
}
```

### 3. Form Validation Errors

```tsx
// Zod validation with helpful error messages
const formSchema = z.object({
  email: z.string()
    .email('Please enter a valid email address')
    .min(1, 'Email is required'),
  // Additional fields
});

// Display validation errors in the UI
<FormField
  control={form.control}
  name="email"
  render={({ field }) => (
    <FormItem>
      <FormLabel>Email</FormLabel>
      <FormControl>
        <Input {...field} />
      </FormControl>
      <FormMessage />
    </FormItem>
  )}
/>
```

## Security Considerations

Several security patterns are implemented:

### 1. Form Validation

All user inputs are validated:
- Client-side validation with Zod
- Server-side validation for API endpoints

### 2. XSS Prevention

React's built-in XSS protection plus additional measures:
- No use of `dangerouslySetInnerHTML`
- Content sanitization for user-generated content

### 3. CSRF Protection

For future authentication features:
- Token-based authentication
- Proper CORS configuration

## Testing Strategy

The application is designed for testability:

### 1. Component Testing

Components are designed for easy testing:
- Clear separation of concerns
- Props-based configuration
- Side-effect isolation

### 2. API Testing

API endpoints are testable in isolation:
- Clear input/output contracts
- Error handling

### 3. E2E Testing

The application supports end-to-end testing:
- Semantic HTML with testable attributes
- Consistent UI patterns

## Deployment Architecture

The application is designed for easy deployment:

### 1. Build Process

```
┌─────────────┐    ┌─────────────┐    ┌─────────────┐
│             │    │             │    │             │
│  Source     ├───►│  Vite Build ├───►│  Static     │
│  Code       │    │  Process    │    │  Assets     │
│             │    │             │    │             │
└─────────────┘    └─────────────┘    └─────┬───────┘
                                            │
                                            │
                                            ▼
                                      ┌─────────────┐
                                      │             │
                                      │  Express    │
                                      │  Server     │
                                      │             │
                                      └─────────────┘
```

### 2. Environment Configuration

The application uses environment variables for configuration:
- API endpoints
- Feature flags
- External service keys

---

This architecture document provides a comprehensive overview of the Royal Hermitage application's technical design. It serves as a guide for understanding the system's structure and the reasoning behind key technical decisions.