import { ArrowRight, Clock, Shield, BarChart3 } from "lucide-react";
import { Button } from "@/components/ui/button";
import corexDashboard from "@/assets/corex-dashboard.jpg";
import timetickMobile from "@/assets/timetick-mobile.jpg";
import safexSafety from "@/assets/safex-safety.jpg";

const ProductShowcase = () => {
  const products = [
    {
      id: "corex",
      title: "coreX ERP",
      description: "Complete enterprise resource planning solution designed for modern businesses in the UAE",
      icon: BarChart3,
      image: corexDashboard,
      features: ["Financial Management", "Supply Chain", "HR Integration", "Real-time Analytics"],
      color: "from-blue-500 to-cyan-500",
    },
    {
      id: "timetick", 
      title: "Time Tick",
      description: "AI-powered GPS-enabled attendance system for seamless workforce management",
      icon: Clock,
      image: timetickMobile,
      features: ["GPS Tracking", "Biometric Auth", "Mobile First", "Real-time Reports"],
      color: "from-green-500 to-emerald-500",
    },
    {
      id: "safex365",
      title: "safeX365",
      description: "Comprehensive safety management system ensuring workplace compliance and protection",
      icon: Shield,
      image: safexSafety,
      features: ["Incident Tracking", "Risk Assessment", "Compliance", "Emergency Response"],
      color: "from-red-500 to-orange-500",
    },
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background floating elements */}
      <div className="absolute inset-0">
        <div className="floating-blob w-96 h-96 bg-gradient-to-r from-lime-400 to-emerald-400 top-10 right-0" style={{ animationDelay: '1s' }} />
        <div className="floating-blob w-72 h-72 bg-gradient-to-r from-lime-300 to-emerald-300 bottom-0 left-10" style={{ animationDelay: '4s' }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block text-sm font-medium text-primary mb-4">
            Our Products
          </div>
          <h2 className="text-h2 font-bold text-foreground mb-6">
            Purpose-built
            <br />
            <span className="hero-gradient">enterprise platforms</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From ERP to workforce and safety, Lagoon products help teams move faster
            with dependable foundations and clean interfaces.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {products.map((product, index) => {
            const IconComponent = product.icon;
            return (
              <div key={product.id} className="p-6 rounded-2xl border border-black/10 bg-white hover:shadow-float transition-all duration-500">
                {/* Product Image */}
                <div className="relative h-48 overflow-hidden rounded-xl mb-6">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <div className={`w-12 h-12 rounded-xl bg-black/90 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {product.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {product.description}
                  </p>

                  {/* Features */}
                  <div className="grid grid-cols-2 gap-2">
                    {product.features.map((feature) => (
                      <div key={feature} className="flex items-center text-sm text-black/70">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2" />
                        {feature}
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <Button variant="outline" className="w-full mt-6 border-black/20 text-black hover:border-primary hover:text-primary transition-all rounded-xl">
                    Learn More
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-6 text-lg">
            Ready to transform your business with our innovative solutions?
          </p>
          <Button 
            size="lg" 
            className="px-8 py-4 bg-foreground text-background hover:bg-foreground/90 rounded-xl"
          >
            Schedule a Demo
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;