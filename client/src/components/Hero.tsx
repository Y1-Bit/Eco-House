import { Button } from "@/components/ui/button";

export default function Hero() {
  const scrollToFeatures = () => {
    const element = document.getElementById("features");
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth"
      });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center pt-20">
      <div 
        className="absolute inset-0 bg-cover bg-center z-0" 
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1518780664697-55e3ad937233?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')" 
        }}
      >
        <div className="absolute inset-0 bg-primary/40 backdrop-blur-sm"></div>
      </div>
      
      <div className="container mx-auto px-6 z-10 relative">
        <div className="max-w-3xl text-white">
          <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl leading-tight mb-4">
            Videi draudzīgas moduļu mājas tūlītējai dzīvošanai
          </h1>
          <p className="text-xl md:text-2xl font-light mb-8 opacity-90">
            Ilgtspējīgi risinājumi, kas pieejami jau šodien
          </p>
          <Button 
            onClick={scrollToFeatures}
            className="bg-[#8CB369] hover:bg-[#8CB369]/90 text-white font-medium py-3 px-8 rounded-md transition duration-300 shadow-lg text-base"
          >
            Uzzināt vairāk
          </Button>
        </div>
      </div>
    </section>
  );
}
