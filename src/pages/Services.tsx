
import { ArrowRight, Home, Building, Key, PenSquare, ShieldCheck, BadgeCheck, Clock, Ruler } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import PageHeader from "@/components/ui/PageHeader";
import SectionTitle from "@/components/ui/SectionTitle";
import ServiceCard from "@/components/ui/ServiceCard";

const ServicesPage = () => {
  return (
    <>
      <PageHeader 
        title="Our Services" 
        subtitle="Comprehensive Real Estate Solutions for Every Need" 
        backgroundImage="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
      />
      
      {/* Main Services */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <SectionTitle 
            title="What We Offer" 
            subtitle="Exceptional Real Estate Services" 
            center
          />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard 
              icon={<Home size={32} />}
              title="Property Buying"
              description="We'll help you find and secure your dream property at the best possible price, guiding you through every step of the buying process."
            />
            <ServiceCard 
              icon={<Building size={32} />}
              title="Property Selling"
              description="Maximize your property's value with our strategic marketing approach, professional staging, and skilled negotiation."
            />
            <ServiceCard 
              icon={<Key size={32} />}
              title="Property Renting"
              description="Whether you're looking to rent a property or need help managing your rental, our team provides comprehensive rental services."
            />
            <ServiceCard 
              icon={<PenSquare size={32} />}
              title="Legal Consulting"
              description="Our legal experts provide guidance on all aspects of real estate transactions, ensuring your interests are protected."
            />
            <ServiceCard 
              icon={<ShieldCheck size={32} />}
              title="Property Management"
              description="We handle the details so you can enjoy worry-free property ownership, from tenant screening to maintenance coordination."
            />
            <ServiceCard 
              icon={<Ruler size={32} />}
              title="Property Valuation"
              description="Get an accurate assessment of your property's worth with our detailed valuation services, backed by market data and expertise."
            />
          </div>
        </div>
      </section>
      
      {/* How We Work */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto">
          <SectionTitle 
            title="How We Work" 
            subtitle="Our Process" 
            center
          />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ProcessStep 
              number="01"
              title="Consultation"
              description="We begin with a detailed consultation to understand your specific needs and goals."
            />
            <ProcessStep 
              number="02"
              title="Strategy Development"
              description="Our team creates a customized strategy tailored to your unique situation."
            />
            <ProcessStep 
              number="03"
              title="Implementation"
              description="We execute the plan with meticulous attention to detail and constant communication."
            />
            <ProcessStep 
              number="04"
              title="Ongoing Support"
              description="Our relationship doesn't end at closing—we provide continued support and services."
            />
          </div>
        </div>
      </section>
      
      {/* Why Choose Us */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <SectionTitle 
                title="Why Choose Us" 
                subtitle="The Royal Hermitage Difference"
              />
              <div className="space-y-6">
                <FeatureItem 
                  icon={<BadgeCheck size={24} />}
                  title="Industry Expertise"
                  description="Our team brings decades of combined experience and deep market knowledge to every client relationship."
                />
                <FeatureItem 
                  icon={<Clock size={24} />}
                  title="Personalized Service"
                  description="We take the time to understand your unique needs and tailor our approach accordingly."
                />
                <FeatureItem 
                  icon={<ShieldCheck size={24} />}
                  title="Trusted Relationships"
                  description="Our extensive network of industry professionals ensures smooth transactions and exceptional service."
                />
                <FeatureItem 
                  icon={<Home size={24} />}
                  title="Exclusive Listings"
                  description="Access to premium properties, including off-market opportunities not available to the general public."
                />
                <FeatureItem 
                  icon={<Key size={24} />}
                  title="Comprehensive Support"
                  description="From first contact to beyond closing, we're with you every step of the way."
                />
              </div>
              
              <div className="mt-8">
                <Button asChild className="bg-royal-primary hover:bg-royal-accent text-white">
                  <Link to="/contact" className="flex items-center">
                    Contact Us Today
                    <ArrowRight size={16} className="ml-2" />
                  </Link>
                </Button>
              </div>
            </div>
            
            <div>
              <img 
                src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Team meeting" 
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-16 px-4 bg-royal-primary text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 font-playfair">Ready to Experience the Royal Hermitage Difference?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Whether you're buying, selling, or investing, our team is here to help you achieve your real estate goals.
          </p>
          <Button asChild size="lg" className="bg-white text-royal-primary hover:bg-royal-secondary">
            <Link to="/contact">Schedule a Consultation</Link>
          </Button>
        </div>
      </section>
    </>
  );
};

interface ProcessStepProps {
  number: string;
  title: string;
  description: string;
}

const ProcessStep = ({ number, title, description }: ProcessStepProps) => (
  <div className="bg-white p-6 rounded-lg shadow-md relative">
    <div className="absolute -top-5 -left-5 w-12 h-12 bg-royal-primary text-white rounded-full flex items-center justify-center font-bold text-xl">
      {number}
    </div>
    <div className="pt-6">
      <h3 className="text-xl font-semibold mb-3 font-playfair">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  </div>
);

interface FeatureItemProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureItem = ({ icon, title, description }: FeatureItemProps) => (
  <div className="flex">
    <div className="mr-4 text-royal-primary">{icon}</div>
    <div>
      <h3 className="text-lg font-semibold mb-1 font-playfair">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  </div>
);

export default ServicesPage;
