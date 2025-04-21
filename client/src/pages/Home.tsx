import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import ProductSpotlight from "@/components/ProductSpotlight";
import Gallery from "@/components/Gallery";
import AboutUs from "@/components/AboutUs";
import Testimonials from "@/components/Testimonials";
import CallToAction from "@/components/CallToAction";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="font-sans bg-background text-text">
      <Navbar />
      <Hero />
      <Features />
      <ProductSpotlight />
      <Gallery />
      <AboutUs />
      <Testimonials />
      <CallToAction />
      <Contact />
      <Footer />
    </div>
  );
}
