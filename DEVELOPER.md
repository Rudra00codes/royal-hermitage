# Royal Hermitage - Developer Documentation

This document provides detailed technical information for developers working on the Royal Hermitage luxury real estate website project. It covers code organization, component structure, state management, and development workflows.

## Code Organization

The Royal Hermitage codebase follows a structured organization to maintain clarity and separation of concerns:

### Client-Side Architecture

The frontend codebase is organized into the following key directories:

```
client/src/
├── components/       # UI components organized by feature/purpose
│   ├── common/       # Shared components used across multiple pages
│   ├── home/         # Components specific to home page
│   ├── properties/   # Property-related components
│   ├── services/     # Service-related components
│   ├── ui/           # Generic UI components (buttons, forms, etc.)
├── data/             # Static data and mock data
├── hooks/            # Custom React hooks
├── layouts/          # Layout components that structure pages
├── lib/              # Utility functions and helpers
├── pages/            # Page components mapped to routes
```

### Server-Side Architecture

The backend code is minimal and focused on API routes and data storage:

```
server/
├── index.ts          # Server entry point and configuration
├── routes.ts         # API route definitions
├── storage.ts        # Data storage implementation
├── vite.ts           # Vite integration for development
```

### Shared Code

```
shared/
├── schema.ts         # Data schemas shared between client and server
```

## Component Architecture

### Component Design Principles

1. **Single Responsibility**: Each component should have a single responsibility
2. **Composability**: Components should be designed to be easily composed
3. **Prop Typing**: All props should be typed with TypeScript interfaces
4. **Reusability**: Components should be designed for reuse where possible
5. **Consistent Styling**: Use Tailwind classes consistently

### Key Component Types

#### UI Components

Located in `client/src/components/ui/`, these are the building blocks of the UI:

- **Button**: Reusable button component with variants
- **Card**: Content container component
- **Form elements**: Input, Select, Checkbox, etc.
- **ThemeToggle**: Toggle for dark/light mode
- **LoadingAnimation**: Loading indicator
- **SectionReveal**: Animation wrapper for section transitions

Example usage:

```tsx
<Button variant="primary" onClick={handleClick}>
  Click Me
</Button>

<SectionReveal delay={200}>
  <Card>
    <h2>Card Content</h2>
    <p>Some text here...</p>
  </Card>
</SectionReveal>
```

#### Feature Components

Located in feature-specific directories, these components implement business features:

- **PropertyCard**: Displays property information
- **PropertyGrid**: Grid layout for property listings
- **ServiceCard**: Displays service information
- **ContactForm**: Handles user inquiries

Example usage:

```tsx
<PropertyGrid 
  properties={featuredProperties} 
  title="Featured Properties" 
  description="Explore our featured listings"
/>
```

#### Layout Components

Located in `client/src/layouts/` and `client/src/components/common/`, these structure the application:

- **MainLayout**: Primary layout with header and footer
- **Header**: Navigation header with menu
- **Footer**: Site footer with links and info

Example usage:

```tsx
<MainLayout>
  <Home />
</MainLayout>
```

## State Management

### Local Component State

Use React's `useState` for component-specific state:

```tsx
const [isOpen, setIsOpen] = useState(false);
```

### Context API

Used for global state like theme preferences and authentication:

```tsx
// Using the theme context
const { isDarkMode, toggleTheme } = useTheme();
```

Available contexts:

- **ThemeContext**: Manages theme preferences
- **ResponsiveContext**: Provides device type information

### Custom Hooks

Custom hooks encapsulate reusable logic:

- **useTheme**: Access and control theme
- **useResponsive**: Get responsive breakpoint information
- **useScrollSpy**: Track scroll position for navigation
- **useToast**: Display toast notifications

Example usage:

```tsx
const { isMobile, isTablet, isDesktop } = useResponsive();

if (isMobile) {
  // Render mobile-specific UI
} else if (isTablet) {
  // Render tablet-specific UI
} else {
  // Render desktop UI
}
```

## Styling System

### Tailwind CSS Integration

The project uses Tailwind CSS for styling with custom configuration:

- **Theme**: Customized in `tailwind.config.ts`
- **Dark Mode**: Implemented via the `dark:` prefix
- **Responsive Classes**: Follow the pattern `sm:`, `md:`, `lg:`, `xl:`
- **Custom Utilities**: Defined in `client/src/index.css`

### Custom Classes

Several custom utility classes are available:

```css
/* Button hover effects */
.btn-hover-effect {
  @apply transition-all duration-300 hover:shadow-md hover:translate-y-[-2px];
}

/* Card hover effects */
.card-hover {
  @apply transition-all duration-300 hover:shadow-lg hover:translate-y-[-5px];
}

/* Section transitions */
.section-fade-in {
  @apply opacity-0 translate-y-5 transition-all duration-700;
}

.section-fade-in.appear {
  @apply opacity-100 translate-y-0;
}

/* Responsive grid layouts */
.grid-responsive {
  @apply grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6;
}

/* Tablet-specific layouts */
.tablet-layout {
  @apply md:max-w-3xl mx-auto px-4 sm:px-6 md:px-8;
}
```

### Dark Mode Implementation

Dark mode is implemented using Tailwind's dark mode feature. The theme is stored in localStorage and applied via a class on the root element:

```tsx
// Toggle theme
const toggleTheme = () => {
  setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
};

// Apply theme class to document
useEffect(() => {
  if (theme === 'dark') {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
}, [theme]);
```

## Routing

Routing is handled by Wouter, a lightweight routing library:

```tsx
function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/properties" component={Properties} />
      <Route path="/services" component={Services} />
      <Route path="/contact" component={Contact} />
      <Route component={NotFound} />
    </Switch>
  );
}
```

## Data Fetching

### React Query

Data fetching is handled with React Query (`@tanstack/react-query`):

```tsx
// Query example
const { data, isLoading, error } = useQuery({
  queryKey: ['properties'],
  queryFn: () => apiRequest('/api/properties')
});

// Mutation example
const mutation = useMutation({
  mutationFn: (newProperty) => apiRequest('/api/properties', { 
    method: 'POST', 
    body: JSON.stringify(newProperty) 
  }),
  onSuccess: () => {
    queryClient.invalidateQueries({ queryKey: ['properties'] });
    toast.success('Property added successfully');
  }
});
```

## Form Handling

Forms are implemented using React Hook Form with Zod validation:

```tsx
// Form definition
const formSchema = z.object({
  name: z.string().min(2, 'Name is required'),
  email: z.string().email('Invalid email address'),
  message: z.string().min(10, 'Message is too short')
});

// Form usage
const form = useForm<z.infer<typeof formSchema>>({
  resolver: zodResolver(formSchema),
  defaultValues: {
    name: '',
    email: '',
    message: ''
  }
});

const onSubmit = (data: z.infer<typeof formSchema>) => {
  // Handle form submission
};
```

## Animation System

Animations are implemented using:

1. **CSS Transitions**: For simple hover and state changes
2. **Framer Motion**: For more complex animations
3. **Intersection Observer**: For scroll-triggered animations via `SectionReveal`

Example with Framer Motion:

```tsx
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
>
  Content to animate
</motion.div>
```

## Responsive Design Implementation

The site is built with a mobile-first approach and implements device-specific optimizations:

### Device Detection

Device type is detected using the `useResponsive` hook:

```tsx
const { isMobile, isTablet, isDesktop, deviceType } = useResponsive();
```

### Tablet-Specific Navigation

The header implements a special compact navigation for tablets:

```tsx
{/* Tablet Navigation - Compact version */}
<nav className="hidden md:flex lg:hidden items-center space-x-2">
  {/* Icon-based navigation links */}
</nav>
```

## Error Handling

### API Errors

API errors are handled consistently:

```tsx
try {
  const response = await apiRequest('/api/endpoint');
  // Handle success
} catch (error) {
  // Handle error with proper UI feedback
  toast.error('Something went wrong. Please try again.');
  console.error('API Error:', error);
}
```

### Form Validation Errors

Form errors are displayed inline:

```tsx
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

## Development Workflow

### Running the Application

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

### Folder Structure Guidelines

When adding new features:

1. Page components go in `client/src/pages/`
2. Feature components go in appropriate subdirectory of `client/src/components/`
3. Reusable UI components go in `client/src/components/ui/`
4. Custom hooks go in `client/src/hooks/`
5. Data models and schemas go in `shared/schema.ts`

### Code Style Guidelines

1. Use TypeScript for all components and functions
2. Define interfaces for component props
3. Use functional components with hooks
4. Add proper JSDoc comments for complex functions
5. Follow the established naming conventions

### Best Practices

1. **Performance**: Use React.memo for expensive components
2. **Accessibility**: Ensure all interactive elements are keyboard accessible
3. **Rendering**: Avoid unnecessary re-renders by proper dependency management
4. **Loading States**: Always handle loading and error states
5. **Responsive Design**: Test all components across different screen sizes

## Deployment

The application is configured for deployment on Replit and can be deployed with a single click using the Replit Deployments feature.

---

For further questions or assistance, please contact the development team.