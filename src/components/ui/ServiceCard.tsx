
import { ReactNode } from "react";

interface ServiceCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

const ServiceCard = ({ icon, title, description }: ServiceCardProps) => {
  return (
    <div className="bg-white p-6 shadow-md rounded-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border-b-4 border-transparent hover:border-royal-primary">
      <div className="text-royal-primary mb-4 flex justify-center">
        <div className="p-3 bg-royal-light rounded-full">
          {icon}
        </div>
      </div>
      
      <h3 className="text-xl font-semibold mb-3 text-center font-playfair">{title}</h3>
      <p className="text-gray-600 text-center">{description}</p>
    </div>
  );
};

export default ServiceCard;
