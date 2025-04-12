
import { Star } from "lucide-react";

export interface TestimonialType {
  id: number;
  name: string;
  position?: string;
  image: string;
  content: string;
  rating: number;
}

interface TestimonialCardProps {
  testimonial: TestimonialType;
}

const TestimonialCard = ({ testimonial }: TestimonialCardProps) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex items-center mb-4">
        <img 
          src={testimonial.image} 
          alt={testimonial.name} 
          className="w-16 h-16 rounded-full object-cover mr-4"
        />
        <div>
          <h4 className="font-semibold text-royal-primary">{testimonial.name}</h4>
          {testimonial.position && (
            <p className="text-royal-accent text-sm">{testimonial.position}</p>
          )}
        </div>
      </div>
      
      <div className="flex mb-3">
        {[...Array(5)].map((_, i) => (
          <Star 
            key={i} 
            size={16} 
            className={i < testimonial.rating ? "text-royal-secondary fill-royal-secondary" : "text-gray-300"} 
          />
        ))}
      </div>
      
      <p className="text-gray-600 italic">"{testimonial.content}"</p>
    </div>
  );
};

export default TestimonialCard;
