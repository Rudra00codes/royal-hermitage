
import { useState } from "react";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import PageHeader from "@/components/ui/PageHeader";
import SectionTitle from "@/components/ui/SectionTitle";

const ContactPage = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });
  const [loading, setLoading] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate form submission
    setTimeout(() => {
      setLoading(false);
      toast({
        title: "Message Sent",
        description: "Thank you for your message. We'll get back to you shortly.",
      });
      
      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: ""
      });
    }, 1500);
  };
  
  return (
    <>
      <PageHeader 
        title="Contact Us" 
        subtitle="We're Here to Help You with All Your Real Estate Needs" 
        backgroundImage="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
      />
      
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Contact Form */}
            <div>
              <SectionTitle 
                title="Get in Touch" 
                subtitle="Send Us a Message"
              />
              
              <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-sm font-medium mb-1">Your Name*</label>
                    <input 
                      type="text" 
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full h-12 px-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-royal-primary"
                      placeholder="Enter your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Email Address*</label>
                    <input 
                      type="email" 
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full h-12 px-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-royal-primary"
                      placeholder="Enter your email"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Phone Number</label>
                    <input 
                      type="tel" 
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full h-12 px-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-royal-primary"
                      placeholder="Enter your phone"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Subject*</label>
                    <select 
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full h-12 px-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-royal-primary"
                    >
                      <option value="">Select a subject</option>
                      <option value="Property Inquiry">Property Inquiry</option>
                      <option value="Selling My Property">Selling My Property</option>
                      <option value="Renting/Leasing">Renting/Leasing</option>
                      <option value="General Inquiry">General Inquiry</option>
                    </select>
                  </div>
                </div>
                
                <div className="mb-6">
                  <label className="block text-sm font-medium mb-1">Your Message*</label>
                  <textarea 
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full h-40 p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-royal-primary"
                    placeholder="Enter your message"
                  ></textarea>
                </div>
                
                <Button 
                  type="submit" 
                  disabled={loading}
                  className="w-full bg-royal-primary hover:bg-royal-accent text-white flex items-center justify-center"
                >
                  {loading ? (
                    <span>Sending...</span>
                  ) : (
                    <>
                      <Send size={18} className="mr-2" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </div>
            
            {/* Contact Information */}
            <div>
              <SectionTitle 
                title="Contact Information" 
                subtitle="Ways to Reach Us"
              />
              
              <div className="bg-white p-6 rounded-lg shadow-md mb-8">
                <div className="space-y-6">
                  <ContactInfo 
                    icon={<MapPin size={24} />}
                    title="Our Office"
                    content={<p>123 Luxury Avenue<br />Beverly Hills, CA 90210<br />United States</p>}
                  />
                  <ContactInfo 
                    icon={<Phone size={24} />}
                    title="Phone"
                    content={<p><a href="tel:+15551234567" className="hover:text-royal-primary">+1 (555) 123-4567</a></p>}
                  />
                  <ContactInfo 
                    icon={<Mail size={24} />}
                    title="Email"
                    content={<p><a href="mailto:info@royalhermitage.com" className="hover:text-royal-primary">info@royalhermitage.com</a></p>}
                  />
                  <ContactInfo 
                    icon={<Clock size={24} />}
                    title="Working Hours"
                    content={<p>Monday - Friday: 9:00 AM - 6:00 PM<br />Saturday: 10:00 AM - 4:00 PM<br />Sunday: Closed</p>}
                  />
                </div>
              </div>
              
              {/* Google Map */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4 font-playfair">Find Us on the Map</h3>
                <div className="bg-gray-200 h-80 rounded-lg flex items-center justify-center mb-4">
                  <MapPin size={32} className="text-royal-primary" />
                  <span className="ml-2">Google Map will be embedded here</span>
                </div>
                <p className="text-gray-600 text-sm">
                  Our office is conveniently located in the heart of Beverly Hills, with easy access to major highways and public transportation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

interface ContactInfoProps {
  icon: React.ReactNode;
  title: string;
  content: React.ReactNode;
}

const ContactInfo = ({ icon, title, content }: ContactInfoProps) => (
  <div className="flex">
    <div className="mr-4 text-royal-primary">{icon}</div>
    <div>
      <h3 className="font-semibold mb-1">{title}</h3>
      <div className="text-gray-600">{content}</div>
    </div>
  </div>
);

export default ContactPage;
