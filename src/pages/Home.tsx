import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, MapPin, Home as HomeIcon, Phone, Shield, BarChart4, Award, ChevronDown, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import SectionTitle from "@/components/ui/SectionTitle";
import PropertyCard from "@/components/ui/PropertyCard";
import TestimonialCard from "@/components/ui/TestimonialCard";
import { properties } from "@/data/properties";
import { testimonials } from "@/data/testimonials";

const HomePage = () => {
  // Featured properties (show only 3)
  const featuredProperties = properties.slice(0, 3);

  // State for property search
  const [propertyType, setPropertyType] = useState("");
  const [location, setLocation] = useState("");
  const [price, setPrice] = useState("");
  const [rooms, setRooms] = useState("2 Bed rooms");
  return <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center">
        <div className="absolute inset-0 bg-black/40 z-10"></div>
        <div className="absolute inset-0 bg-cover bg-center" style={{
        backgroundImage: 'url(https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80)'
      }}></div>
        
        <div className="container mx-auto px-4 relative z-20">
          <div className="max-w-full animate-fade-in">
            {/* Property Type Pills */}
            <div className="flex gap-3 mb-8">
              <PropertyTypePill type="House" active={propertyType === "House"} onClick={() => setPropertyType("House")} />
              <PropertyTypePill type="Apartment" active={propertyType === "Apartment"} onClick={() => setPropertyType("Apartment")} />
              <PropertyTypePill type="Residential" active={propertyType === "Residential"} onClick={() => setPropertyType("Residential")} />
            </div>
            
            <h1 className="text-5xl lg:text-7xl text-white mb-6 font-playfair leading-tight md:text-6xl font-bold">
              Build Your Future, One<br />Property at a Time.
            </h1>
            
            <div className="hidden md:block w-1/2 ml-auto text-white/80 text-right mb-12">
              <p className="text-lg leading-relaxed">
                Own Your World, One Property at a Time. Own Your world, One Property at a Time. Own Your World, One Property at a Time. Own Your World, One Property at a Time.
              </p>
            </div>
            
            {/* Property Search Panel */}
            <div className="p-6 md:p-8 mt-12 w-full max-w-6xl mx-auto backdrop-blur-md bg-white/70 rounded-2xl shadow-lg border border-white/20 transition-all duration-300 hover:shadow-xl">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">Find the best place</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="space-y-2">
                  <label className="block text-gray-700 font-medium">Looking for</label>
                  <Input type="text" placeholder="Enter type" className="w-full" />
                </div>
                <div className="space-y-2">
                  <label className="block text-gray-700 font-medium">Price</label>
                  <div className="relative">
                    <Input type="text" value={price} onChange={e => setPrice(e.target.value)} placeholder="Price" className="w-full pr-10" />
                    <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500" size={16} />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="block text-gray-700 font-medium">Locations</label>
                  <div className="relative">
                    <Input type="text" value={location} onChange={e => setLocation(e.target.value)} placeholder="Location" className="w-full pr-10" />
                    <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500" size={16} />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="block text-gray-700 font-medium">Number of rooms</label>
                  <div className="relative">
                    <Input type="text" value={rooms} onChange={e => setRooms(e.target.value)} placeholder="Rooms" className="w-full pr-10" />
                    <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500" size={16} />
                  </div>
                </div>
              </div>
              
              <div className="mt-6">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="text-gray-700 font-medium">Filter:</span>
                  <FilterPill label="City" />
                  <FilterPill label="House" />
                  <FilterPill label="Residential" />
                  <FilterPill label="Apartment" />
                  <div className="ml-auto">
                    <Button className="bg-black hover:bg-black/80 text-white rounded-full px-8">
                      <Search size={18} className="mr-2" />
                      Search Properties
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Property of the Week Banner */}
      <section className="py-8 text-white bg-neutral-950">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-playfair font-bold">Property Of The Week</h2>
              <p className="text-white/80">Discover our exceptional featured property</p>
            </div>
            <Button asChild className="mt-4 md:mt-0 bg-royal-secondary hover:bg-royal-secondary/90">
              <Link to="/property-of-the-week" className="flex items-center gap-2">
                View Featured Property
                <ArrowRight size={16} />
              </Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* About Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img src="https://images.unsplash.com/photo-1515263487990-61b07816b324?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Luxury home interior" className="rounded-lg shadow-lg" />
            </div>
            <div>
              <SectionTitle title="Welcome to Royal Hermitage" subtitle="Exceptional Homes, Exceptional Service" />
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
      <section className="py-20 px-4 bg-gray-300">
        <div className="container mx-auto">
          <SectionTitle title="Featured Properties" subtitle="Discover Our Exclusive Listings" center />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProperties.map(property => <PropertyCard key={property.id} property={property} />)}
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
      <section className="py-20 px-4 bg-gray-200">
        <div className="container mx-auto">
          <SectionTitle title="Our Services" subtitle="Comprehensive Real Estate Solutions" center />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 bg-gray-200">
            <ServiceBox icon={<HomeIcon size={24} />} title="Property Buying" description="We'll help you find and secure your dream property at the best possible price." />
            <ServiceBox icon={<BarChart4 size={24} />} title="Property Selling" description="Maximize your property's value with our strategic marketing approach." />
            <ServiceBox icon={<Shield size={24} />} title="Property Management" description="We handle the details so you can enjoy worry-free property ownership." />
            <ServiceBox icon={<Award size={24} />} title="Legal Consultation" description="Our experts provide guidance on all legal aspects of real estate transactions." />
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
          <SectionTitle title="Client Testimonials" subtitle="What Our Clients Say About Us" center />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map(testimonial => <TestimonialCard key={testimonial.id} testimonial={testimonial} />)}
          </div>
        </div>
      </section>
    </>;
};

// Property Type Pill Component
interface PropertyTypePillProps {
  type: string;
  active?: boolean;
  onClick?: () => void;
}
const PropertyTypePill = ({
  type,
  active = false,
  onClick
}: PropertyTypePillProps) => <button onClick={onClick} className={`px-5 py-2.5 rounded-full text-sm font-medium transition-colors ${active ? 'bg-white text-black' : 'bg-white/20 text-white hover:bg-white/30'}`}>
    {type}
  </button>;

// Filter Pill Component
interface FilterPillProps {
  label: string;
  active?: boolean;
}
const FilterPill = ({
  label,
  active = false
}: FilterPillProps) => <span className={`px-4 py-1.5 rounded-full text-sm font-medium ${active ? 'bg-gray-800 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}>
    {label}
  </span>;

interface ServiceBoxProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}
const ServiceBox = ({
  icon,
  title,
  description
}: ServiceBoxProps) => <div className="bg-white p-6 rounded-lg shadow-md text-center transition-transform duration-300 hover:-translate-y-2">
    <div className="bg-royal-light rounded-full p-4 inline-flex mb-4 text-royal-primary">
      {icon}
    </div>
    <h3 className="text-xl font-semibold mb-3 font-playfair">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>;

export default HomePage;
