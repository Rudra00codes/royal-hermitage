
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import SectionTitle from "@/components/ui/SectionTitle";

const AboutSection = () => {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="https://images.unsplash.com/photo-1515263487990-61b07816b324?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="Luxury home interior"
              className="rounded-lg shadow-lg"
            />
          </div>
          <div>
            <SectionTitle
              title="Welcome to Royal Hermitage"
              subtitle="Exceptional Homes, Exceptional Service"
            />
            <p className="text-gray-600 mb-6">
              At Royal Hermitage, we understand that a home is more than just a
              property—it's where life happens. For over two decades, we've been
              connecting discerning clients with exceptional properties that meet
              their unique lifestyle needs.
            </p>
            <p className="text-gray-600 mb-6">
              Our team of experienced professionals is dedicated to providing
              personalized service, market expertise, and a seamless experience
              from start to finish. Whether you're looking to buy, sell, or rent,
              we're here to help you navigate the luxury real estate market with
              confidence.
            </p>
            <Button
              asChild
              className="bg-royal-primary hover:bg-royal-accent text-white"
            >
              <Link to="/about">Learn More About Us</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
