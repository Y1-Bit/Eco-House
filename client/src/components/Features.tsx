import { Leaf, Truck, Zap } from "lucide-react";

export default function Features() {
  const features = [
    {
      icon: <Leaf className="h-8 w-8" />,
      title: "Ilgtspējība",
      description: "Koka karkass un ekovate izolācija minimālai oglekļa pēdai"
    },
    {
      icon: <Truck className="h-8 w-8" />,
      title: "Mobilitāte",
      description: "Ātra transportēšana un uzstādīšana jebkurā vietā"
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Energoefektivitāte",
      description: "A+ klase un saules paneļi zemiem apkures izdevumiem"
    }
  ];

  return (
    <section id="features" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-6">
          Mūsu priekšrocības
        </h2>
        <p className="text-center text-lg max-w-3xl mx-auto mb-16 text-text/80">
          Visas mūsu mājas tiek veidotas ar mērķi nodrošināt maksimālu komfortu, minimāli ietekmējot apkārtējo vidi.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg shadow-md p-8 transition-transform hover:translate-y-[-8px]"
            >
              <div className="mb-5 text-[#8CB369]">
                {feature.icon}
              </div>
              <h3 className="font-heading font-semibold text-xl mb-3">{feature.title}</h3>
              <p className="text-text/80">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
