import { Clock, Home, Award } from "lucide-react";

export default function AboutUs() {
  const stats = [
    {
      icon: <Clock className="h-6 w-6" />,
      title: "5+ gadi",
      description: "Pieredze ilgtspējīgā būvniecībā"
    },
    {
      icon: <Home className="h-6 w-6" />,
      title: "100+ mājas",
      description: "Uzstādītas Latvijā un Baltijā"
    },
    {
      icon: <Award className="h-6 w-6" />,
      title: "Kvalitāte",
      description: "Sertificēti materiāli un procesi"
    }
  ];

  return (
    <section id="about" className="py-24 bg-secondary/10">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">Par mums</h2>
          <p className="text-lg mb-10 leading-relaxed">
            EKO‑MĀJAS piedāvā pilnu moduļu māju ražošanas un uzstādīšanas servisu, fokusējoties uz ātrumu, kvalitāti un ilgtspējību. Mēs sadarbojamies ar privātpersonām un uzņēmumiem, lai radītu elastīgas dzīvojamās vai darba telpas.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index}>
                <div className="text-primary mb-3 flex justify-center">
                  {stat.icon}
                </div>
                <h3 className="font-heading font-semibold text-xl mb-2">{stat.title}</h3>
                <p className="text-text/80">{stat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
