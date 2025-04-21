import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (sectionId: string) => {
    setIsMenuOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth"
      });
    }
  };

  return (
    <header className="fixed w-full bg-background/90 backdrop-blur-sm z-50 shadow-sm">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <a 
            href="#" 
            className="text-primary font-heading font-bold text-2xl"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            EKO-MĀJAS
          </a>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <button 
              onClick={() => scrollToSection("features")} 
              className="text-text hover:text-primary transition font-medium"
            >
              Priekšrocības
            </button>
            <button 
              onClick={() => scrollToSection("product")} 
              className="text-text hover:text-primary transition font-medium"
            >
              Produkti
            </button>
            <button 
              onClick={() => scrollToSection("about")} 
              className="text-text hover:text-primary transition font-medium"
            >
              Par mums
            </button>
            <button 
              onClick={() => scrollToSection("contact")} 
              className="text-text hover:text-primary transition font-medium"
            >
              Kontakti
            </button>
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            onClick={toggleMenu} 
            className="md:hidden text-text focus:outline-none"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
        
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden pt-4 pb-2">
            <div className="flex flex-col space-y-3">
              <button 
                onClick={() => scrollToSection("features")} 
                className="text-text hover:text-primary transition font-medium py-2 text-left"
              >
                Priekšrocības
              </button>
              <button 
                onClick={() => scrollToSection("product")} 
                className="text-text hover:text-primary transition font-medium py-2 text-left"
              >
                Produkti
              </button>
              <button 
                onClick={() => scrollToSection("about")} 
                className="text-text hover:text-primary transition font-medium py-2 text-left"
              >
                Par mums
              </button>
              <button 
                onClick={() => scrollToSection("contact")} 
                className="text-text hover:text-primary transition font-medium py-2 text-left"
              >
                Kontakti
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
