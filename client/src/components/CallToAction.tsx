import { Button } from "@/components/ui/button";

export default function CallToAction() {
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
    <section className="py-20 bg-primary">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            Gatavi spert nākamo soli?
          </h2>
          <p className="text-xl opacity-90 mb-8 md:px-10">
            Sazinieties ar mums, lai uzzinātu vairāk par mūsu produktiem vai pieprasītu individuālu piedāvājumu.
          </p>
          <Button 
            onClick={scrollToContact}
            className="bg-white hover:bg-white/90 text-primary font-medium py-3 px-8 rounded-md transition duration-300 shadow-lg"
          >
            Sazināties
          </Button>
        </div>
      </div>
    </section>
  );
}
