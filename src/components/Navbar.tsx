
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80, // Adjust for navbar height
        behavior: 'smooth'
      });
    }
    setIsOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-tradesmate-purple">TradesMate</h1>
          </div>
          
          <div className="hidden md:flex space-x-8 items-center">
            <button 
              onClick={() => scrollToSection('features')}
              className="text-gray-700 hover:text-tradesmate-purple transition-colors"
            >
              Features
            </button>
            <button 
              onClick={() => scrollToSection('industries')}
              className="text-gray-700 hover:text-tradesmate-purple transition-colors"
            >
              Industries
            </button>
            <button 
              onClick={() => scrollToSection('testimonials')}
              className="text-gray-700 hover:text-tradesmate-purple transition-colors"
            >
              Testimonials
            </button>
            <Button 
              onClick={() => window.open('#', '_blank')}
              variant="outline" 
              className="border-tradesmate-purple text-tradesmate-purple hover:bg-tradesmate-purple/10"
            >
              Login
            </Button>
            <Button 
              onClick={() => scrollToSection('cta')}
              className="bg-gradient-to-r from-tradesmate-purple to-tradesmate-purple-dark hover:opacity-90 transition-opacity"
            >
              Start Free Trial
            </Button>
          </div>
          
          <button className="md:hidden" onClick={toggleMenu}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg absolute w-full">
          <div className="flex flex-col p-4 space-y-4">
            <button 
              onClick={() => scrollToSection('features')}
              className="py-2 text-gray-700 hover:text-tradesmate-purple transition-colors"
            >
              Features
            </button>
            <button 
              onClick={() => scrollToSection('industries')}
              className="py-2 text-gray-700 hover:text-tradesmate-purple transition-colors"
            >
              Industries
            </button>
            <button 
              onClick={() => scrollToSection('testimonials')}
              className="py-2 text-gray-700 hover:text-tradesmate-purple transition-colors"
            >
              Testimonials
            </button>
            <Button 
              onClick={() => window.open('#', '_blank')}
              variant="outline" 
              className="border-tradesmate-purple text-tradesmate-purple hover:bg-tradesmate-purple/10 w-full"
            >
              Login
            </Button>
            <Button 
              onClick={() => scrollToSection('cta')}
              className="bg-gradient-to-r from-tradesmate-purple to-tradesmate-purple-dark hover:opacity-90 transition-opacity w-full"
            >
              Start Free Trial
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
