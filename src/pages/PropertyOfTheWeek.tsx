
import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, MapPin, Bed, Bath, Expand, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";
import Layout from "@/components/layout/Layout";

// Featured property of the week
const featuredProperty = {
  id: 7,
  title: "Villa One Hyde Park",
  price: 1200000,
  image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
  location: "2050 Bloomingdale Ave",
  description: "Stunning contemporary villa with panoramic views, featuring premium finishes and smart home technology throughout.",
  bedrooms: 4,
  bathrooms: 2,
  area: 350,
  type: "For Sale",
  images: [
    "https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1560184897-67f4a3f9a7fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1560185127-6ed189bf02f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
  ]
};

// Additional properties to showcase
const additionalProperties = [
  {
    id: 8,
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 9,
    image: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  }
];

const PropertyOfTheWeekPage = () => {
  const [activeTab, setActiveTab] = useState<"sale" | "rent">("sale");
  const totalProperties = 280;

  return (
    <Layout>
      <div className="py-16 px-4 bg-gray-900 text-white">
        <div className="container mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-10 font-playfair">Property Of The Week</h1>
          
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
            {/* Left side grid */}
            <div className="lg:col-span-3 grid grid-rows-[3fr_2fr] gap-6">
              {/* Main image with carousel */}
              <div className="relative overflow-hidden rounded-xl">
                <Carousel className="w-full">
                  <CarouselContent>
                    {featuredProperty.images.map((image, index) => (
                      <CarouselItem key={index}>
                        <div className="relative h-[400px]">
                          <img 
                            src={image} 
                            alt={`${featuredProperty.title} view ${index + 1}`} 
                            className="w-full h-full object-cover rounded-xl"
                          />
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious className="absolute left-4 bg-black/30 hover:bg-black/50 border-none text-white" />
                  <CarouselNext className="absolute right-4 bg-black/30 hover:bg-black/50 border-none text-white" />
                </Carousel>
              </div>
              
              {/* Bottom grid */}
              <div className="grid grid-cols-2 gap-6">
                {/* Stats box */}
                <div className="bg-gray-800 rounded-xl p-8">
                  <h3 className="text-4xl font-bold mb-2">{totalProperties}+</h3>
                  <p className="text-xl mb-3">Properties</p>
                  <p className="text-gray-300 mb-4">
                    Explore our wide variety of properties to find your dream home today
                  </p>
                  <Button asChild variant="outline" className="gap-2 bg-transparent border-royal-secondary text-royal-secondary hover:bg-royal-secondary/20">
                    <Link to="/properties">
                      More
                      <ArrowRight size={16} />
                    </Link>
                  </Button>
                </div>
                
                {/* Additional property image */}
                <div className="relative rounded-xl overflow-hidden">
                  <img 
                    src={additionalProperties[1].image} 
                    alt="Interior design showcase" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
            
            {/* Right side - feature property details */}
            <div className="lg:col-span-2 relative rounded-xl overflow-hidden">
              <img 
                src={featuredProperty.image} 
                alt={featuredProperty.title} 
                className="w-full h-full object-cover"
              />
              
              {/* Property type tabs */}
              <div className="absolute top-4 left-4 flex space-x-2">
                <Button 
                  className={`rounded-full ${activeTab === "sale" ? 'bg-royal-secondary text-white' : 'bg-white/70 text-gray-800'}`}
                  onClick={() => setActiveTab("sale")}
                >
                  For Sale
                </Button>
                <Button 
                  className={`rounded-full ${activeTab === "rent" ? 'bg-royal-secondary text-white' : 'bg-white/70 text-gray-800'}`}
                  onClick={() => setActiveTab("rent")}
                >
                  For Rent
                </Button>
              </div>
              
              {/* Property details overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                <h2 className="text-2xl font-bold mb-2 font-playfair">{featuredProperty.title}</h2>
                <div className="flex items-center mb-3">
                  <MapPin size={18} className="mr-1 text-royal-secondary" />
                  <span>{featuredProperty.location}</span>
                </div>
                <div className="flex justify-between items-center">
                  <div className="text-2xl font-bold text-royal-secondary">
                    ${featuredProperty.price.toLocaleString()}
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center">
                      <Bed size={18} className="mr-1" />
                      <span>{featuredProperty.bedrooms}</span>
                    </div>
                    <div className="flex items-center">
                      <Bath size={18} className="mr-1" />
                      <span>{featuredProperty.bathrooms}</span>
                    </div>
                    <div className="flex items-center">
                      <Expand size={18} className="mr-1" />
                      <span>{featuredProperty.area}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Call to action */}
          <div className="mt-10 text-center">
            <Button asChild size="lg" className="bg-royal-secondary hover:bg-royal-secondary/90 text-white">
              <Link to={`/properties/${featuredProperty.id}`}>
                View Property Details
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default PropertyOfTheWeekPage;
