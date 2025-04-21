import { Mail, Phone, MapPin } from "lucide-react";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  const scrollToSection = (sectionId: string) => {
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
    <footer className="bg-primary text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-heading font-bold mb-4">EKO-MĀJAS</h3>
            <p className="mb-6 opacity-80">
              Ilgtspējīgi moduļu māju risinājumi ar uzsvaru uz kvalitāti, ātrumu un videi draudzīgu būvniecību.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-[#8CB369] transition">
                <FaFacebookF className="h-5 w-5" />
              </a>
              <a href="#" className="text-white hover:text-[#8CB369] transition">
                <FaInstagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-white hover:text-[#8CB369] transition">
                <FaLinkedinIn className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-heading font-semibold text-lg mb-4">Ātrie saiti</h4>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => scrollToSection("features")} 
                  className="opacity-80 hover:opacity-100 transition"
                >
                  Priekšrocības
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("product")} 
                  className="opacity-80 hover:opacity-100 transition"
                >
                  Produkti
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("about")} 
                  className="opacity-80 hover:opacity-100 transition"
                >
                  Par mums
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("contact")} 
                  className="opacity-80 hover:opacity-100 transition"
                >
                  Kontakti
                </button>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-heading font-semibold text-lg mb-4">Kontaktinformācija</h4>
            <ul className="space-y-2">
              <li className="flex items-center opacity-80">
                <Mail className="h-4 w-4 mr-2" />
                <a href="mailto:info@eko-majas.lv" className="hover:opacity-100 transition">
                  info@eko-majas.lv
                </a>
              </li>
              <li className="flex items-center opacity-80">
                <Phone className="h-4 w-4 mr-2" />
                <a href="tel:+37112345678" className="hover:opacity-100 transition">
                  +371 1234 5678
                </a>
              </li>
              <li className="flex items-center opacity-80">
                <MapPin className="h-4 w-4 mr-2" />
                <span>Rīgas iela 10, Rīga, Latvija</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/20 mt-10 pt-6 text-center">
          <p className="text-sm opacity-70">
            © {currentYear} EKO-MĀJAS. Visas tiesības aizsargātas.
          </p>
        </div>
      </div>
    </footer>
  );
}
