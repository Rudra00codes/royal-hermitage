
import { Button } from "@/components/ui/button";
import PropertySearchPanel from "./PropertySearchPanel";
import PropertyTypePill from "./PropertyTypePill";
import { useState } from "react";

const HeroSection = () => {
  const [propertyType, setPropertyType] = useState("");

  return (
    <section className="relative min-h-screen flex items-center">
      <div className="absolute inset-0 bg-black/40 z-10"></div>
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            'url(https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80)',
        }}
      ></div>

      <div className="container mx-auto px-4 relative z-20">
        <div className="max-w-full animate-fade-in">
          <div className="flex gap-3 mb-8">
            <PropertyTypePill
              type="House"
              active={propertyType === "House"}
              onClick={() => setPropertyType("House")}
            />
            <PropertyTypePill
              type="Apartment"
              active={propertyType === "Apartment"}
              onClick={() => setPropertyType("Apartment")}
            />
            <PropertyTypePill
              type="Residential"
              active={propertyType === "Residential"}
              onClick={() => setPropertyType("Residential")}
            />
          </div>

          <h1 className="text-5xl lg:text-7xl text-white mb-6 font-playfair leading-tight md:text-6xl font-bold">
            Build Your Future, One<br />Property at a Time.
          </h1>

          <div className="hidden md:block w-1/2 ml-auto text-white/80 text-right mb-12">
            <p className="text-lg leading-relaxed">
              Own Your World, One Property at a Time. Own Your world, One Property
              at a Time. Own Your World, One Property at a Time. Own Your World,
              One Property at a Time.
            </p>
          </div>

          <PropertySearchPanel />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
