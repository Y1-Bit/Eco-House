import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";

export default function ProductSpotlight() {
  const specifications = [
    "Platība: 25 m² (dzīvošanai vai ofisam)",
    "Materiāli: koka karkass, ekovate, 2 saules paneļu moduļi",
    "Uzstādīšana: 1 nedēļa",
    "Energoefektivitāte: A+ klase",
    "Cena: pēc pieprasījuma"
  ];

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth"
      });
    }
  };

  return (
    <section id="product" className="py-24 bg-primary/5">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="md:w-1/2">
            <img 
              src="https://images.unsplash.com/photo-1510798831971-661eb04b3739?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="EKO Mini moduļu māja" 
              className="rounded-lg shadow-xl w-full max-w-lg mx-auto"
            />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">EKO Mini</h2>
            <p className="text-lg mb-8 text-text/80">
              Mūsu kompaktākā un pieprasītākā māja, kas lieliski piemērota gan dzīvošanai, gan kā papildu darba vai atpūtas telpa.
            </p>
            
            <ul className="space-y-4 mb-8">
              {specifications.map((spec, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-[#8CB369] mr-3">
                    <CheckCircle className="h-5 w-5 mt-1" />
                  </span>
                  <span>{spec}</span>
                </li>
              ))}
            </ul>
            
            <Button 
              onClick={scrollToContact}
              className="bg-[#C8A27C] hover:bg-[#C8A27C]/90 text-white font-medium py-3 px-8 rounded-md transition duration-300 shadow-lg"
            >
              Pieprasīt cenu
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
