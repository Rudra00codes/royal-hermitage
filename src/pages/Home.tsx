
import { Link } from "react-router-dom";
import { ArrowRight, MapPin, Home as HomeIcon, Phone, Shield, BarChart4, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import SectionTitle from "@/components/ui/SectionTitle";
import PropertyCard from "@/components/ui/PropertyCard";
import TestimonialCard from "@/components/ui/TestimonialCard";
import { properties } from "@/data/properties";
import { testimonials } from "@/data/testimonials";

const HomePage = () => {
  // Featured properties (show only 3)
  const featuredProperties = properties.slice(0, 3);
  
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center">
        <div className="absolute inset-0 bg-black/40 z-10"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: 'url(https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80)'
          }}
        ></div>
        
        <div className="container mx-auto px-4 relative z-20">
          <div className="max-w-3xl animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-playfair">
              Transforming the future of home living
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Start your journey towards homeownership today!
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="bg-royal-primary hover:bg-royal-accent text-white">
                <Link to="/properties">Explore Properties</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-white/10 text-white hover:bg-white/20 backdrop-blur-sm border-white/30">
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
            
            <div className="flex gap-4 mt-12">
              <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-white">Modern Home</span>
              <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-white">Luxury</span>
              <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-white">Eco Friendly</span>
            </div>
          </div>
        </div>
      </section>
      
      {/* About Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1515263487990-61b07816b324?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Luxury home interior" 
                className="rounded-lg shadow-lg"
              />
            </div>
            <div>
              <SectionTitle 
                title="Welcome to Royal Hermitage" 
                subtitle="Exceptional Homes, Exceptional Service"
              />
              <p className="text-gray-600 mb-6">
                At Royal Hermitage, we understand that a home is more than just a property—it's where life happens. For over two decades, we've been connecting discerning clients with exceptional properties that meet their unique lifestyle needs.
              </p>
              <p className="text-gray-600 mb-6">
                Our team of experienced professionals is dedicated to providing personalized service, market expertise, and a seamless experience from start to finish. Whether you're looking to buy, sell, or rent, we're here to help you navigate the luxury real estate market with confidence.
              </p>
              <Button asChild className="bg-royal-primary hover:bg-royal-accent text-white">
                <Link to="/about">Learn More About Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Featured Properties */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto">
          <SectionTitle 
            title="Featured Properties" 
            subtitle="Discover Our Exclusive Listings" 
            center
          />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProperties.map(property => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button asChild className="bg-royal-primary hover:bg-royal-accent text-white">
              <Link to="/properties" className="flex items-center">
                View All Properties
                <ArrowRight size={16} className="ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* Services Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <SectionTitle 
            title="Our Services" 
            subtitle="Comprehensive Real Estate Solutions" 
            center
          />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ServiceBox 
              icon={<HomeIcon size={24} />} 
              title="Property Buying"
              description="We'll help you find and secure your dream property at the best possible price."
            />
            <ServiceBox 
              icon={<BarChart4 size={24} />} 
              title="Property Selling"
              description="Maximize your property's value with our strategic marketing approach."
            />
            <ServiceBox 
              icon={<Shield size={24} />} 
              title="Property Management"
              description="We handle the details so you can enjoy worry-free property ownership."
            />
            <ServiceBox 
              icon={<Award size={24} />} 
              title="Legal Consultation"
              description="Our experts provide guidance on all legal aspects of real estate transactions."
            />
          </div>
          
          <div className="text-center mt-12">
            <Button asChild className="bg-royal-primary hover:bg-royal-accent text-white">
              <Link to="/services">Explore All Services</Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-20 px-4 bg-royal-primary text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 font-playfair">Ready to Find Your Dream Home?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contact us today to schedule a consultation with one of our experienced real estate professionals.
          </p>
          <Button asChild size="lg" className="bg-white text-royal-primary hover:bg-royal-secondary">
            <Link to="/contact" className="flex items-center">
              <Phone size={18} className="mr-2" />
              Contact Us Now
            </Link>
          </Button>
        </div>
      </section>
      
      {/* Testimonials */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto">
          <SectionTitle 
            title="Client Testimonials" 
            subtitle="What Our Clients Say About Us" 
            center
          />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map(testimonial => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

interface ServiceBoxProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ServiceBox = ({ icon, title, description }: ServiceBoxProps) => (
  <div className="bg-white p-6 rounded-lg shadow-md text-center transition-transform duration-300 hover:-translate-y-2">
    <div className="bg-royal-light rounded-full p-4 inline-flex mb-4 text-royal-primary">
      {icon}
    </div>
    <h3 className="text-xl font-semibold mb-3 font-playfair">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

export default HomePage;
