
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { 
  Bed, Bath, Expand, MapPin, Calendar, Home, ArrowLeft,
  Phone, Mail, Share2, Heart, Printer
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { properties } from "@/data/properties";
import { PropertyType } from "@/components/ui/PropertyCard";

const PropertyDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const [property, setProperty] = useState<PropertyType | null>(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    // Find the property with the matching ID
    if (id) {
      const foundProperty = properties.find(p => p.id === parseInt(id));
      setProperty(foundProperty || null);
    }
    setLoading(false);
  }, [id]);
  
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-pulse text-xl">Loading property details...</div>
      </div>
    );
  }
  
  if (!property) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Property Not Found</h2>
          <p className="mb-6">The property you're looking for doesn't exist or has been removed.</p>
          <Button asChild>
            <Link to="/properties">Browse All Properties</Link>
          </Button>
        </div>
      </div>
    );
  }
  
  return (
    <div className="pt-20 pb-16">
      {/* Back Button */}
      <div className="container mx-auto px-4 mb-6">
        <Button asChild variant="outline" className="flex items-center">
          <Link to="/properties">
            <ArrowLeft size={16} className="mr-2" />
            Back to Properties
          </Link>
        </Button>
      </div>
      
      {/* Property Header */}
      <div className="container mx-auto px-4 mb-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold font-playfair text-royal-primary mb-2">
              {property.title}
            </h1>
            <div className="flex items-center text-royal-accent mb-2">
              <MapPin size={18} className="mr-1" />
              <span>{property.location}</span>
            </div>
          </div>
          <div className="mt-4 md:mt-0">
            <div className="text-2xl md:text-3xl font-bold text-royal-secondary">
              ${property.price.toLocaleString()}
              {property.type === "For Rent" && <span className="text-base font-normal">/month</span>}
            </div>
            <div className="text-royal-primary font-medium">{property.type}</div>
          </div>
        </div>
      </div>
      
      {/* Property Images */}
      <div className="container mx-auto px-4 mb-12">
        <div className="bg-gray-100 rounded-lg overflow-hidden h-96 md:h-[500px]">
          <img 
            src={property.image} 
            alt={property.title} 
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      
      {/* Property Content */}
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Key Features */}
            <div className="bg-white shadow-md rounded-lg p-6 mb-8">
              <h2 className="text-2xl font-semibold mb-6 font-playfair">Key Features</h2>
              <div className="grid grid-cols-3 gap-4">
                <div className="flex flex-col items-center p-4 bg-gray-50 rounded-lg">
                  <Bed size={24} className="text-royal-primary mb-2" />
                  <span className="font-semibold">{property.bedrooms}</span>
                  <span className="text-sm text-gray-500">Bedrooms</span>
                </div>
                <div className="flex flex-col items-center p-4 bg-gray-50 rounded-lg">
                  <Bath size={24} className="text-royal-primary mb-2" />
                  <span className="font-semibold">{property.bathrooms}</span>
                  <span className="text-sm text-gray-500">Bathrooms</span>
                </div>
                <div className="flex flex-col items-center p-4 bg-gray-50 rounded-lg">
                  <Expand size={24} className="text-royal-primary mb-2" />
                  <span className="font-semibold">{property.area}</span>
                  <span className="text-sm text-gray-500">Sq Ft</span>
                </div>
                <div className="flex flex-col items-center p-4 bg-gray-50 rounded-lg">
                  <Home size={24} className="text-royal-primary mb-2" />
                  <span className="font-semibold">1</span>
                  <span className="text-sm text-gray-500">Garage</span>
                </div>
                <div className="flex flex-col items-center p-4 bg-gray-50 rounded-lg">
                  <Calendar size={24} className="text-royal-primary mb-2" />
                  <span className="font-semibold">2020</span>
                  <span className="text-sm text-gray-500">Year Built</span>
                </div>
                <div className="flex flex-col items-center p-4 bg-gray-50 rounded-lg">
                  <MapPin size={24} className="text-royal-primary mb-2" />
                  <span className="font-semibold">Residential</span>
                  <span className="text-sm text-gray-500">Area</span>
                </div>
              </div>
            </div>
            
            {/* Description */}
            <div className="bg-white shadow-md rounded-lg p-6 mb-8">
              <h2 className="text-2xl font-semibold mb-4 font-playfair">Description</h2>
              <p className="text-gray-600 mb-4">{property.description}</p>
              <p className="text-gray-600 mb-4">
                This exceptional property offers the perfect blend of luxury and comfort. Meticulously designed with attention to detail, the home features high ceilings, premium finishes, and an open floor plan that maximizes natural light and creates a seamless flow between indoor and outdoor living spaces.
              </p>
              <p className="text-gray-600">
                The gourmet kitchen is equipped with top-of-the-line appliances, custom cabinetry, and a spacious island that's perfect for entertaining. The primary suite is a true retreat, offering a spa-like bathroom and generous closet space. Additional amenities include smart home technology, energy-efficient systems, and beautifully landscaped grounds.
              </p>
            </div>
            
            {/* Additional Features */}
            <div className="bg-white shadow-md rounded-lg p-6 mb-8">
              <h2 className="text-2xl font-semibold mb-4 font-playfair">Additional Features</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2">
                <FeatureItem text="Central Air Conditioning" />
                <FeatureItem text="Hardwood Floors" />
                <FeatureItem text="Gourmet Kitchen" />
                <FeatureItem text="Walk-in Closets" />
                <FeatureItem text="Swimming Pool" />
                <FeatureItem text="Garden" />
                <FeatureItem text="Security System" />
                <FeatureItem text="Home Office" />
                <FeatureItem text="Fireplace" />
                <FeatureItem text="Outdoor Kitchen" />
              </div>
            </div>
            
            {/* Location */}
            <div className="bg-white shadow-md rounded-lg p-6">
              <h2 className="text-2xl font-semibold mb-4 font-playfair">Location</h2>
              <div className="bg-gray-200 h-64 rounded-lg flex items-center justify-center mb-4">
                <MapPin size={32} className="text-royal-primary" />
                <span className="ml-2">Map view</span>
              </div>
              <h3 className="font-semibold mb-2">Nearby Amenities</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2">
                <FeatureItem text="Schools within 1 mile" />
                <FeatureItem text="Shopping centers nearby" />
                <FeatureItem text="Public transportation" />
                <FeatureItem text="Parks and recreation" />
              </div>
            </div>
          </div>
          
          {/* Sidebar */}
          <div>
            {/* Contact Form */}
            <div className="bg-white shadow-md rounded-lg p-6 mb-8">
              <h2 className="text-xl font-semibold mb-4 font-playfair">Interested in this property?</h2>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Your Name</label>
                  <input 
                    type="text" 
                    className="w-full h-10 px-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-royal-primary"
                    placeholder="Enter your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Email</label>
                  <input 
                    type="email" 
                    className="w-full h-10 px-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-royal-primary"
                    placeholder="Enter your email"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Phone</label>
                  <input 
                    type="tel" 
                    className="w-full h-10 px-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-royal-primary"
                    placeholder="Enter your phone"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Message</label>
                  <textarea 
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-royal-primary h-32"
                    placeholder="I'm interested in this property. Please contact me with more information."
                  ></textarea>
                </div>
                <Button className="w-full bg-royal-primary hover:bg-royal-accent">
                  Send Inquiry
                </Button>
              </form>
            </div>
            
            {/* Agent Info */}
            <div className="bg-white shadow-md rounded-lg p-6 mb-8">
              <h2 className="text-xl font-semibold mb-4 font-playfair">Listed By</h2>
              <div className="flex items-center mb-4">
                <img 
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Jonathan Sterling" 
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h3 className="font-semibold">Jonathan Sterling</h3>
                  <p className="text-royal-accent text-sm">Luxury Property Specialist</p>
                </div>
              </div>
              <div className="space-y-3">
                <a href="tel:+15551234567" className="flex items-center text-royal-primary hover:text-royal-accent transition-colors">
                  <Phone size={18} className="mr-2" />
                  +1 (555) 123-4567
                </a>
                <a href="mailto:jonathan@royalhermitage.com" className="flex items-center text-royal-primary hover:text-royal-accent transition-colors">
                  <Mail size={18} className="mr-2" />
                  jonathan@royalhermitage.com
                </a>
              </div>
            </div>
            
            {/* Share & Save */}
            <div className="bg-white shadow-md rounded-lg p-6">
              <h2 className="text-xl font-semibold mb-4 font-playfair">Actions</h2>
              <div className="flex flex-wrap gap-2">
                <Button variant="outline" className="flex items-center gap-2">
                  <Share2 size={16} />
                  Share
                </Button>
                <Button variant="outline" className="flex items-center gap-2">
                  <Heart size={16} />
                  Save
                </Button>
                <Button variant="outline" className="flex items-center gap-2">
                  <Printer size={16} />
                  Print
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

interface FeatureItemProps {
  text: string;
}

const FeatureItem = ({ text }: FeatureItemProps) => (
  <div className="flex items-center py-1">
    <div className="w-2 h-2 bg-royal-secondary rounded-full mr-3"></div>
    <span>{text}</span>
  </div>
);

export default PropertyDetailPage;
