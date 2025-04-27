
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

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
    <header className={cn(
      "w-full fixed top-0 left-0 z-50 transition-all duration-500",
      isScrolled 
        ? "backdrop-blur-md bg-white/80 shadow-md py-3" 
        : "backdrop-blur-sm bg-white/30 py-5"
    )}>
      <div className="container mx-auto flex justify-between items-center px-4 md:px-6">
        <Link 
          to="/" 
          className="flex items-center space-x-2 transition-transform duration-300 hover:scale-105"
        >
          <span className="text-2xl font-bold text-royal-primary font-playfair">Royal Hermitage</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <NavLink to="/" active={location.pathname === "/"}>Home</NavLink>
          <NavLink to="/about" active={location.pathname === "/about"}>About</NavLink>
          <NavLink to="/properties" active={location.pathname === "/properties"}>Properties</NavLink>
          <NavLink to="/services" active={location.pathname === "/services"}>Services</NavLink>
          <NavLink to="/contact" active={location.pathname === "/contact"}>Contact</NavLink>
        </nav>

        <div className="hidden md:block">
          <Button 
            asChild 
            className="bg-royal-primary hover:bg-royal-accent text-white transition-all duration-300 hover:scale-105 hover:shadow-lg"
          >
            <Link to="/contact">Contact Us</Link>
          </Button>
        </div>

        {/* Mobile Navigation Button */}
        <button 
          className={cn(
            "md:hidden text-royal-primary p-2 rounded-full transition-all duration-300",
            isOpen ? "bg-royal-primary/10" : "hover:bg-royal-primary/5"
          )}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      <div className={cn(
        "md:hidden backdrop-blur-md bg-white/90 w-full absolute top-full left-0 shadow-md transform transition-all duration-300",
        isOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
      )}>
        <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
          <MobileNavLink to="/" onClick={toggleMenu} active={location.pathname === "/"}>Home</MobileNavLink>
          <MobileNavLink to="/about" onClick={toggleMenu} active={location.pathname === "/about"}>About</MobileNavLink>
          <MobileNavLink to="/properties" onClick={toggleMenu} active={location.pathname === "/properties"}>Properties</MobileNavLink>
          <MobileNavLink to="/services" onClick={toggleMenu} active={location.pathname === "/services"}>Services</MobileNavLink>
          <MobileNavLink to="/contact" onClick={toggleMenu} active={location.pathname === "/contact"}>Contact</MobileNavLink>
          <Button 
            asChild 
            className="bg-royal-primary hover:bg-royal-accent text-white w-full transition-all duration-300 hover:scale-[1.02]"
          >
            <Link to="/contact" onClick={toggleMenu}>Contact Us</Link>
          </Button>
        </div>
      </div>
    </header>
  );
};

interface NavLinkProps {
  to: string;
  children: React.ReactNode;
  active?: boolean;
}

const NavLink = ({ to, children, active }: NavLinkProps) => (
  <Link 
    to={to} 
    className={cn(
      "relative font-medium transition-all duration-300",
      active 
        ? "text-royal-primary" 
        : "text-royal-dark hover:text-royal-primary",
      "after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-royal-primary after:origin-bottom-right after:transition-transform after:duration-300",
      "hover:after:scale-x-100 hover:after:origin-bottom-left"
    )}
  >
    {children}
  </Link>
);

interface MobileNavLinkProps extends NavLinkProps {
  onClick: () => void;
}

const MobileNavLink = ({ to, onClick, children, active }: MobileNavLinkProps) => (
  <Link 
    to={to} 
    className={cn(
      "transition-all duration-300 py-2 border-b border-gray-100 w-full block",
      active 
        ? "text-royal-primary translate-x-2" 
        : "text-royal-dark hover:text-royal-primary hover:translate-x-2"
    )}
    onClick={onClick}
  >
    {children}
  </Link>
);

export default Navbar;
