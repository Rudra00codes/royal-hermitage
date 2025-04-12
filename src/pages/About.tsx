
import { CheckCircle2 } from "lucide-react";
import PageHeader from "@/components/ui/PageHeader";
import SectionTitle from "@/components/ui/SectionTitle";
import TeamMemberCard from "@/components/ui/TeamMemberCard";
import { teamMembers } from "@/data/team";

const AboutPage = () => {
  return (
    <>
      <PageHeader 
        title="About Us" 
        subtitle="Learn more about Royal Hermitage and our commitment to excellence" 
        backgroundImage="https://images.unsplash.com/photo-1582407947304-fd86f028f716?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
      />
      
      <section className="py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <SectionTitle 
                title="Our Story" 
                subtitle="Established in 2005"
              />
              <p className="text-gray-600 mb-6">
                Royal Hermitage was founded with a vision to redefine the luxury real estate experience. What began as a small boutique agency has grown into one of the most respected names in high-end real estate, while maintaining our commitment to personalized service and attention to detail.
              </p>
              <p className="text-gray-600 mb-6">
                Our founder, Jonathan Sterling, recognized a gap in the market for a truly client-focused approach to luxury real estate. Drawing on his extensive experience in the industry, he assembled a team of like-minded professionals who shared his passion for exceptional service and deep market knowledge.
              </p>
              <p className="text-gray-600">
                Today, Royal Hermitage represents some of the most extraordinary properties and discerning clients worldwide. While we've grown, our core values remain unchanged: integrity, expertise, discretion, and an unwavering commitment to exceeding our clients' expectations.
              </p>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Royal Hermitage office" 
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Mission & Vision */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-4 text-royal-primary font-playfair">Our Mission</h3>
              <p className="text-gray-600 mb-4">
                Our mission is to provide unparalleled real estate services to our clients, connecting exceptional people with exceptional properties. We are committed to:
              </p>
              <ul className="space-y-3">
                {[
                  "Delivering personalized service tailored to each client's unique needs",
                  "Providing expert market knowledge and insights",
                  "Maintaining the highest standards of professionalism and integrity",
                  "Creating seamless, stress-free real estate experiences"
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle2 size={20} className="text-royal-secondary mr-2 mt-1 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-4 text-royal-primary font-playfair">Our Vision</h3>
              <p className="text-gray-600 mb-4">
                We aspire to be the most trusted and respected name in luxury real estate, known for:
              </p>
              <ul className="space-y-3">
                {[
                  "Setting the standard for exceptional client service in the industry",
                  "Representing the most extraordinary properties in our markets",
                  "Building lasting relationships based on trust and results",
                  "Embracing innovation while honoring traditional values",
                  "Making a positive impact in the communities we serve"
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle2 size={20} className="text-royal-secondary mr-2 mt-1 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      {/* Team Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <SectionTitle 
            title="Meet Our Team" 
            subtitle="The Experts Behind Royal Hermitage" 
            center
          />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map(member => (
              <TeamMemberCard key={member.id} member={member} />
            ))}
          </div>
        </div>
      </section>
      
      {/* Certifications */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto">
          <SectionTitle 
            title="Our Certifications" 
            subtitle="Professional Excellence & Recognition" 
            center
          />
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-8">
            <CertificationCard 
              title="Certified Luxury Home Marketing Specialist" 
              year="Since 2010"
            />
            <CertificationCard 
              title="International Real Estate Specialist" 
              year="Since 2012"
            />
            <CertificationCard 
              title="Real Estate Board - Gold Status" 
              year="Since 2015"
            />
            <CertificationCard 
              title="Sustainable Property Certification" 
              year="Since 2018"
            />
          </div>
        </div>
      </section>
    </>
  );
};

interface CertificationCardProps {
  title: string;
  year: string;
}

const CertificationCard = ({ title, year }: CertificationCardProps) => (
  <div className="bg-white p-6 rounded-lg shadow-md text-center">
    <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
      <img 
        src="https://via.placeholder.com/64/1c3879/FFFFFF?text=C" 
        alt="Certification" 
        className="w-full"
      />
    </div>
    <h3 className="text-lg font-semibold mb-2 font-playfair text-royal-primary">{title}</h3>
    <p className="text-royal-accent text-sm">{year}</p>
  </div>
);

export default AboutPage;
