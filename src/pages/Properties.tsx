
import { useState } from "react";
import { Search, SlidersHorizontal, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";
import PageHeader from "@/components/ui/PageHeader";
import PropertyCard, { PropertyType } from "@/components/ui/PropertyCard";
import { properties } from "@/data/properties";

const PropertiesPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterOpen, setFilterOpen] = useState(false);
  const [filters, setFilters] = useState({
    type: "all",
    minPrice: "",
    maxPrice: "",
    bedrooms: "any",
  });
  
  // Handle filter change
  const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
    const { name, value } = e.target;
    setFilters(prev => ({ ...prev, [name]: value }));
  };
  
  // Reset filters
  const resetFilters = () => {
    setFilters({
      type: "all",
      minPrice: "",
      maxPrice: "",
      bedrooms: "any",
    });
    setSearchTerm("");
  };
  
  // Filter properties
  const filteredProperties = properties.filter(property => {
    // Search term
    if (
      searchTerm &&
      !property.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
      !property.location.toLowerCase().includes(searchTerm.toLowerCase())
    ) {
      return false;
    }
    
    // Property type
    if (filters.type !== "all" && property.type !== filters.type) {
      return false;
    }
    
    // Min price
    if (filters.minPrice && property.price < parseInt(filters.minPrice)) {
      return false;
    }
    
    // Max price
    if (filters.maxPrice && property.price > parseInt(filters.maxPrice)) {
      return false;
    }
    
    // Bedrooms
    if (
      filters.bedrooms !== "any" &&
      property.bedrooms < parseInt(filters.bedrooms)
    ) {
      return false;
    }
    
    return true;
  });
  
  return (
    <>
      <PageHeader 
        title="Properties" 
        subtitle="Discover Your Perfect Home" 
        backgroundImage="https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
      />
      
      <section className="py-12 px-4">
        <div className="container mx-auto">
          {/* Search & Filter Bar */}
          <div className="bg-white rounded-lg shadow-md p-4 mb-8">
            <div className="flex flex-col lg:flex-row gap-4">
              <div className="relative flex-grow">
                <Search size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <Input
                  type="text"
                  placeholder="Search by location or property name"
                  className="pl-10"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              
              <Button 
                onClick={() => setFilterOpen(!filterOpen)}
                variant="outline"
                className="flex items-center gap-2 border-royal-primary text-royal-primary"
              >
                <SlidersHorizontal size={18} />
                {filterOpen ? "Hide Filters" : "Show Filters"}
              </Button>
              
              <Button 
                onClick={resetFilters}
                variant="outline"
                className="flex items-center gap-2"
              >
                <X size={18} />
                Reset
              </Button>
            </div>
            
            {/* Expanded Filters */}
            {filterOpen && (
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-4 pt-4 border-t">
                <div>
                  <label className="block text-sm font-medium mb-1">Property Type</label>
                  <select
                    name="type"
                    value={filters.type}
                    onChange={handleFilterChange}
                    className="w-full h-10 px-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-royal-primary"
                  >
                    <option value="all">All Types</option>
                    <option value="For Sale">For Sale</option>
                    <option value="For Rent">For Rent</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-1">Min Price</label>
                  <input
                    type="number"
                    name="minPrice"
                    placeholder="Min Price"
                    value={filters.minPrice}
                    onChange={handleFilterChange}
                    className="w-full h-10 px-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-royal-primary"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-1">Max Price</label>
                  <input
                    type="number"
                    name="maxPrice"
                    placeholder="Max Price"
                    value={filters.maxPrice}
                    onChange={handleFilterChange}
                    className="w-full h-10 px-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-royal-primary"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-1">Bedrooms</label>
                  <select
                    name="bedrooms"
                    value={filters.bedrooms}
                    onChange={handleFilterChange}
                    className="w-full h-10 px-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-royal-primary"
                  >
                    <option value="any">Any</option>
                    <option value="1">1+</option>
                    <option value="2">2+</option>
                    <option value="3">3+</option>
                    <option value="4">4+</option>
                    <option value="5">5+</option>
                  </select>
                </div>
              </div>
            )}
          </div>
          
          {/* Property Results */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 font-playfair">
              {filteredProperties.length} {filteredProperties.length === 1 ? "Property" : "Properties"} Found
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProperties.length > 0 ? (
                filteredProperties.map(property => (
                  <PropertyCard key={property.id} property={property} />
                ))
              ) : (
                <div className="col-span-3 py-16 text-center">
                  <h3 className="text-xl font-semibold mb-2">No properties match your search criteria</h3>
                  <p className="text-gray-600 mb-4">Try adjusting your filters or search term</p>
                  <Button onClick={resetFilters}>Reset Filters</Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PropertiesPage;
