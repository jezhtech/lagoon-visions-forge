import { Zap, Shield, Rocket, Clock } from "lucide-react";

const WhyChooseUs = () => {
  const features = [
    {
      icon: Zap,
      title: "Intelligent Business Automation",
      description: "Transform complex business processes into intelligent workflows. Our platform learns your operations and automates everything from data entry to decision-making, saving thousands of hours annually."
    },
    {
      icon: Shield,
      title: "Enterprise-Grade Infrastructure", 
      description: "Scale without limits on our bulletproof cloud platform. 99.99% uptime, global distribution, and enterprise security that keeps your data safe while enabling seamless growth."
    },
    {
      icon: Rocket,
      title: "Future-Ready Applications",
      description: "Build applications that evolve with your business. Our intelligent development platform creates solutions that learn, adapt, and grow alongside your venture needs."
    },
    {
      icon: Clock,
      title: "Lightning-Fast Performance",
      description: "Experience venture speed at its finest. Microsecond response times, instant deployments, and real-time analytics that keep your business running at peak efficiency."
    }
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background elements tuned to Lagoon */}
      <div className="absolute inset-0">
        <div className="floating-blob w-80 h-80 bg-gradient-to-r from-lime-400 to-emerald-300 top-20 right-10" />
        <div className="floating-blob w-64 h-64 bg-gradient-to-r from-lime-300 to-emerald-300 bottom-20 left-20" style={{ animationDelay: '3s' }} />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-block text-sm font-medium text-primary mb-4">
            Why Choose Lagoon Technologies
          </div>
          <h2 className="text-h2 font-bold text-foreground mb-6">
            Built for clarity,
            <br />
            <span className="hero-gradient">security, and speed</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We combine data engineering excellence with thoughtful design to deliver
            reliable, scalable platforms your teams love to use.
          </p>
        </div>

        {/* Features grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div 
                key={index}
                className="glass-card p-8 rounded-2xl group hover:scale-105 transition-all duration-500"
              >
                <div className="w-14 h-14 bg-black text-white rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <IconComponent className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;