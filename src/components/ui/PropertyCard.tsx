
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { MapPin, Home, Bed, Bath, Expand } from "lucide-react";

export interface PropertyType {
  id: number;
  title: string;
  price: number;
  image: string;
  location: string;
  description: string;
  bedrooms: number;
  bathrooms: number;
  area: number;
  type: string;
}

interface PropertyCardProps {
  property: PropertyType;
}

const PropertyCard = ({ property }: PropertyCardProps) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl">
      <div className="relative overflow-hidden h-64">
        <img 
          src={property.image} 
          alt={property.title} 
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
        <div className="absolute top-4 left-4 bg-royal-primary text-white px-3 py-1 rounded-full text-sm">
          {property.type}
        </div>
      </div>
      
      <div className="p-5">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-bold truncate font-playfair text-royal-dark">{property.title}</h3>
          <p className="font-semibold text-royal-secondary whitespace-nowrap">
            ${property.price.toLocaleString()}
          </p>
        </div>
        
        <div className="flex items-center text-royal-accent mb-3">
          <MapPin size={16} className="mr-1" />
          <p className="text-sm truncate">{property.location}</p>
        </div>
        
        <p className="text-gray-600 mb-4 line-clamp-2">{property.description}</p>
        
        <div className="flex justify-between mb-4 text-sm">
          <div className="flex items-center">
            <Bed size={16} className="mr-1 text-royal-accent" />
            <span>{property.bedrooms} Beds</span>
          </div>
          <div className="flex items-center">
            <Bath size={16} className="mr-1 text-royal-accent" />
            <span>{property.bathrooms} Baths</span>
          </div>
          <div className="flex items-center">
            <Expand size={16} className="mr-1 text-royal-accent" />
            <span>{property.area} sqft</span>
          </div>
        </div>
        
        <Button asChild className="w-full bg-royal-primary hover:bg-royal-accent">
          <Link to={`/properties/${property.id}`}>View Details</Link>
        </Button>
      </div>
    </div>
  );
};

export default PropertyCard;
