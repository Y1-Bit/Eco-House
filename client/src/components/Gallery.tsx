export default function Gallery() {
  const galleryImages = [
    {
      src: "https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      alt: "Moduļu māja pie ezera"
    },
    {
      src: "https://images.unsplash.com/photo-1604014237800-1c9102c219da?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      alt: "Moderna moduļu māja"
    },
    {
      src: "https://images.unsplash.com/photo-1449844908441-8829872d2607?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      alt: "Kompakta moduļu māja mežā"
    }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-6">
          Mūsu projekti
        </h2>
        <p className="text-center text-lg max-w-3xl mx-auto mb-16 text-text/80">
          Iepazīstieties ar dažiem no mūsu nesen realizētajiem projektiem
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <div 
              key={index} 
              className="overflow-hidden rounded-lg shadow-md transition-all hover:shadow-lg"
            >
              <img 
                src={image.src}
                alt={image.alt}
                className="w-full h-64 object-cover transition-transform hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
