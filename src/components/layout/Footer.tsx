
import { Link } from "react-router-dom";
import { Facebook, Instagram, Linkedin, Twitter, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-royal-primary text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4 font-playfair">Royal Hermitage</h3>
            <p className="mb-4 text-sm">Finding your dream luxury property is our passion. With years of experience and expertise in the real estate market, we provide exceptional service to our clients.</p>
            <div className="flex space-x-4">
              <SocialIcon icon={<Facebook size={18} />} href="https://facebook.com" />
              <SocialIcon icon={<Instagram size={18} />} href="https://instagram.com" />
              <SocialIcon icon={<Twitter size={18} />} href="https://twitter.com" />
              <SocialIcon icon={<Linkedin size={18} />} href="https://linkedin.com" />
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4 font-playfair">Quick Links</h3>
            <ul className="space-y-2">
              <FooterLink to="/">Home</FooterLink>
              <FooterLink to="/about">About Us</FooterLink>
              <FooterLink to="/properties">Properties</FooterLink>
              <FooterLink to="/services">Services</FooterLink>
              <FooterLink to="/contact">Contact</FooterLink>
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-4 font-playfair">Services</h3>
            <ul className="space-y-2">
              <FooterLink to="/services">Property Buying</FooterLink>
              <FooterLink to="/services">Property Selling</FooterLink>
              <FooterLink to="/services">Property Renting</FooterLink>
              <FooterLink to="/services">Legal Consultation</FooterLink>
              <FooterLink to="/services">Market Research</FooterLink>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4 font-playfair">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={18} className="mr-2 mt-1 text-royal-secondary" />
                <span>123 Luxury Avenue, Beverly Hills, CA 90210</span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="mr-2 text-royal-secondary" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-2 text-royal-secondary" />
                <span>info@royalhermitage.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-6 border-t border-royal-accent/30 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Royal Hermitage. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

interface FooterLinkProps {
  to: string;
  children: React.ReactNode;
}

const FooterLink = ({ to, children }: FooterLinkProps) => (
  <li>
    <Link to={to} className="text-gray-300 hover:text-royal-secondary transition-colors">
      {children}
    </Link>
  </li>
);

interface SocialIconProps {
  icon: React.ReactNode;
  href: string;
}

const SocialIcon = ({ icon, href }: SocialIconProps) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="bg-royal-accent/20 hover:bg-royal-secondary hover:text-royal-primary p-2 rounded-full transition-colors"
  >
    {icon}
  </a>
);

export default Footer;
