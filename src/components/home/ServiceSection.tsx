
import { Link } from "react-router-dom";
import { HomeIcon, BarChart4, Shield, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import SectionTitle from "@/components/ui/SectionTitle";

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

const ServiceSection = () => {
  return (
    <section className="py-20 px-4 bg-gray-200">
      <div className="container mx-auto">
        <SectionTitle
          title="Our Services"
          subtitle="Comprehensive Real Estate Solutions"
          center
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 bg-gray-200">
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
          <Button
            asChild
            className="bg-royal-primary hover:bg-royal-accent text-white"
          >
            <Link to="/services">Explore All Services</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
