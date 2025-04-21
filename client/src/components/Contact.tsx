import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, PhoneCall, MapPin, Clock } from "lucide-react";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  const onSubmit = (data: any) => {
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Ziņojums nosūtīts!",
        description: "Mēs ar jums sazināsimies tuvākajā laikā.",
      });
      reset();
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <section id="contact" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-6">
          Kontakti
        </h2>
        <p className="text-center text-lg max-w-3xl mx-auto mb-16 text-text/80">
          Esam gatavi atbildēt uz jūsu jautājumiem un palīdzēt izvēlēties piemērotāko risinājumu
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <div>
            <div className="space-y-8">
              <div className="flex items-start">
                <div className="text-primary mr-4 mt-1">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-lg mb-1">E-pasts</h3>
                  <a href="mailto:info@eko-majas.lv" className="text-text/80 hover:text-primary">
                    info@eko-majas.lv
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="text-primary mr-4 mt-1">
                  <PhoneCall className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-lg mb-1">Telefons</h3>
                  <a href="tel:+37112345678" className="text-text/80 hover:text-primary">
                    +371 1234 5678
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="text-primary mr-4 mt-1">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-lg mb-1">Adrese</h3>
                  <p className="text-text/80">Rīgas iela 10, Rīga, Latvija</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="text-primary mr-4 mt-1">
                  <Clock className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-lg mb-1">Darba laiks</h3>
                  <p className="text-text/80">Pirmdiena - Piektdiena: 9:00 - 18:00</p>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <form 
              onSubmit={handleSubmit(onSubmit)}
              className="bg-white rounded-lg shadow-md p-8"
            >
              <div className="mb-6">
                <label htmlFor="name" className="block text-text font-medium mb-2">
                  Vārds, uzvārds
                </label>
                <Input 
                  id="name"
                  placeholder="Jānis Bērziņš"
                  {...register("name", { required: "Šis lauks ir obligāts" })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50"
                />
                {errors.name && (
                  <p className="text-red-500 text-sm mt-1">{`${errors.name.message}`}</p>
                )}
              </div>
              
              <div className="mb-6">
                <label htmlFor="email" className="block text-text font-medium mb-2">
                  E-pasts
                </label>
                <Input 
                  id="email"
                  type="email"
                  placeholder="janis@example.com"
                  {...register("email", { 
                    required: "Šis lauks ir obligāts",
                    pattern: {
                      value: /\S+@\S+\.\S+/,
                      message: "Lūdzu ievadiet derīgu e-pasta adresi"
                    }
                  })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">{`${errors.email.message}`}</p>
                )}
              </div>
              
              <div className="mb-6">
                <label htmlFor="phone" className="block text-text font-medium mb-2">
                  Telefons
                </label>
                <Input 
                  id="phone"
                  type="tel"
                  placeholder="+371 2345 6789"
                  {...register("phone")}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50"
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-text font-medium mb-2">
                  Ziņojums
                </label>
                <Textarea 
                  id="message"
                  rows={4}
                  placeholder="Jūsu ziņojums..."
                  {...register("message", { required: "Šis lauks ir obligāts" })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50"
                />
                {errors.message && (
                  <p className="text-red-500 text-sm mt-1">{`${errors.message.message}`}</p>
                )}
              </div>
              
              <Button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full bg-primary hover:bg-primary/90 text-white font-medium py-3 px-6 rounded-md transition duration-300 shadow-md"
              >
                {isSubmitting ? "Nosūta..." : "Nosūtīt ziņojumu"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
