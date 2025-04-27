
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import SectionTitle from "@/components/ui/SectionTitle";
import PropertyCard from "@/components/ui/PropertyCard";
import { properties } from "@/data/properties";

const FeaturedProperties = () => {
  const featuredProperties = properties.slice(0, 3);

  return (
    <section className="py-20 px-4 bg-gray-300">
      <div className="container mx-auto">
        <SectionTitle
          title="Featured Properties"
          subtitle="Discover Our Exclusive Listings"
          center
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProperties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            asChild
            className="bg-royal-primary hover:bg-royal-accent text-white"
          >
            <Link to="/properties" className="flex items-center">
              View All Properties
              <ArrowRight size={16} className="ml-2" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProperties;
