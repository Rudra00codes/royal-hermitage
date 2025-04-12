
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);
  
  return (
    <header className={`w-full fixed top-0 left-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'backdrop-blur-md bg-white/70 shadow-md py-3' 
        : 'backdrop-blur-sm bg-white/30 py-5'
    }`}>
      <div className="container mx-auto flex justify-between items-center px-4 md:px-6">
        <Link to="/" className="flex items-center space-x-2">
          <span className="text-2xl font-bold text-royal-primary font-playfair">Royal Hermitage</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/properties">Properties</NavLink>
          <NavLink to="/services">Services</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </nav>

        <div className="hidden md:block">
          <Button asChild className="bg-royal-primary hover:bg-royal-accent text-white">
            <Link to="/contact">Contact Us</Link>
          </Button>
        </div>

        {/* Mobile Navigation Button */}
        <button 
          className="md:hidden text-royal-primary" 
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden backdrop-blur-md bg-white/90 w-full absolute top-full left-0 shadow-md animate-slide-in">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <MobileNavLink to="/" onClick={toggleMenu}>Home</MobileNavLink>
            <MobileNavLink to="/about" onClick={toggleMenu}>About</MobileNavLink>
            <MobileNavLink to="/properties" onClick={toggleMenu}>Properties</MobileNavLink>
            <MobileNavLink to="/services" onClick={toggleMenu}>Services</MobileNavLink>
            <MobileNavLink to="/contact" onClick={toggleMenu}>Contact</MobileNavLink>
            <Button asChild className="bg-royal-primary hover:bg-royal-accent text-white w-full">
              <Link to="/contact" onClick={toggleMenu}>Contact Us</Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

interface NavLinkProps {
  to: string;
  children: React.ReactNode;
}

const NavLink = ({ to, children }: NavLinkProps) => (
  <Link 
    to={to} 
    className="relative font-medium text-royal-dark hover:text-royal-primary transition-colors after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-royal-primary after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left"
  >
    {children}
  </Link>
);

interface MobileNavLinkProps extends NavLinkProps {
  onClick: () => void;
}

const MobileNavLink = ({ to, onClick, children }: MobileNavLinkProps) => (
  <Link 
    to={to} 
    className="text-royal-dark hover:text-royal-primary transition-colors py-2 border-b border-gray-100 w-full block"
    onClick={onClick}
  >
    {children}
  </Link>
);

export default Navbar;
