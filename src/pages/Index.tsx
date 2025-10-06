import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import WhyChooseUs from "@/components/WhyChooseUs";
import ClientsMarquee from "@/components/ClientsMarquee";
import ProductShowcase from "@/components/ProductShowcase";
import FeaturesCTA from "@/components/FeaturesCTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <ClientsMarquee />
      <WhyChooseUs />
      <ProductShowcase />
      <FeaturesCTA />
      <Footer />
    </div>
  );
};

export default Index;
