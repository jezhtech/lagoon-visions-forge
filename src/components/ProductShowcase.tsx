import { ArrowRight, Clock, Shield, BarChart3 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
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
    <section className="py-24 bg-gradient-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary font-medium mb-6">
            Our Innovation Suite
          </div>
          <h2 className="text-h2 font-bold text-foreground mb-4">
            Powerful Software Solutions
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover our comprehensive range of enterprise-grade software solutions, 
            each designed to address specific business challenges with cutting-edge technology.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {products.map((product, index) => {
            const IconComponent = product.icon;
            return (
              <Card key={product.id} className="gradient-card float-card group overflow-hidden">
                {/* Product Image */}
                <div className="relative h-48 overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-br ${product.color} opacity-20`} />
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${product.color} flex items-center justify-center shadow-lg`}>
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                  </div>
                </div>

                <CardHeader>
                  <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {product.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {product.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="space-y-6">
                  {/* Features */}
                  <div className="grid grid-cols-2 gap-2">
                    {product.features.map((feature) => (
                      <div key={feature} className="flex items-center text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2" />
                        {feature}
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <Button variant="outline" className="w-full group-hover:border-primary group-hover:text-primary transition-all">
                    Learn More
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-6">
            Ready to transform your business with our innovative solutions?
          </p>
          <Button variant="hero" size="lg" className="px-8 py-4">
            Schedule a Demo
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;