import { Quote } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      quote: "Mūsu EKO Mini māja pārspēja visas cerības. Uzstādīšana bija ātra un efektīva, un tagad mums ir brīnišķīga darba telpa dārzā.",
      name: "Laura K.",
      location: "Rīga",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100&q=80"
    },
    {
      quote: "Lieliska pieredze no pirmās konsultācijas līdz atslēgas nodošanai. Saules paneļi ir nozīmīgi samazinājuši mūsu elektrības rēķinus.",
      name: "Jānis B.",
      location: "Sigulda",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100&q=80"
    }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-6">
          Ko saka mūsu klienti
        </h2>
        <p className="text-center text-lg max-w-3xl mx-auto mb-16 text-text/80">
          Iepazīstieties ar citu klientu pieredzi
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-8">
              <div className="text-[#8CB369] mb-4">
                <Quote className="h-6 w-6" />
              </div>
              <p className="italic mb-6">
                {testimonial.quote}
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                  <img 
                    src={testimonial.image}
                    alt={`${testimonial.name} bilde`}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-semibold">{testimonial.name}</h4>
                  <p className="text-sm text-text/70">{testimonial.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
