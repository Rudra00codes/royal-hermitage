
import { Link } from "react-router-dom";
import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import HeroSection from "@/components/home/HeroSection";
import AboutSection from "@/components/home/AboutSection";
import FeaturedProperties from "@/components/home/FeaturedProperties";
import ServiceSection from "@/components/home/ServiceSection";
import MortgageCalculator from "@/components/home/MortgageCalculator";
import { testimonials } from "@/data/testimonials";
import TestimonialCard from "@/components/ui/TestimonialCard";
import SectionTitle from "@/components/ui/SectionTitle";

const HomePage = () => {
  return (
    <>
      <HeroSection />
      
      {/* Property of the Week Banner */}
      <section className="py-8 text-white bg-neutral-950">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-playfair font-bold">
                Property Of The Week
              </h2>
              <p className="text-white/80">
                Discover our exceptional featured property
              </p>
            </div>
            <Button
              asChild
              className="mt-4 md:mt-0 bg-royal-secondary hover:bg-royal-secondary/90"
            >
              <Link to="/property-of-the-week">View Featured Property</Link>
            </Button>
          </div>
        </div>
      </section>

      <AboutSection />
      <FeaturedProperties />
      <ServiceSection />
      <MortgageCalculator />

      {/* Call to Action */}
      <section className="py-20 px-4 bg-royal-primary text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 font-playfair">
            Ready to Find Your Dream Home?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contact us today to schedule a consultation with one of our experienced
            real estate professionals.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-white text-royal-primary hover:bg-royal-secondary"
          >
            <Link to="/contact" className="flex items-center">
              <Phone size={18} className="mr-2" />
              Contact Us Now
            </Link>
          </Button>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto">
          <SectionTitle
            title="Client Testimonials"
            subtitle="What Our Clients Say About Us"
            center
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
