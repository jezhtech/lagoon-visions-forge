import { ArrowRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroOffice from "@/assets/hero-office.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent-green/5 z-10" />
        <img
          src={heroOffice}
          alt="Modern office environment"
          className="w-full h-full object-cover opacity-20"
        />
      </div>

      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-hero rounded-full opacity-20 animate-float" />
      <div className="absolute bottom-32 right-16 w-16 h-16 bg-gradient-accent rounded-full opacity-30 animate-pulse-slow" />
      <div className="absolute top-1/3 right-20 w-12 h-12 bg-primary/20 rounded-full animate-float" style={{ animationDelay: '1s' }} />

      {/* Main content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        <div className="text-center space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary font-medium">
            <span className="w-2 h-2 bg-accent-green rounded-full mr-2 animate-pulse" />
            Leading Software Development in UAE
          </div>

          {/* Main heading */}
          <h1 className="hero-text max-w-4xl mx-auto">
            Innovative Software Solutions Built for the Future
          </h1>

          {/* Subheading */}
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            From concept to code, we build powerful enterprise software that transforms businesses. 
            Discover our comprehensive suite of innovative solutions including coreX ERP, Time Tick, 
            and safeX365 - designed specifically for Middle East enterprises.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Button variant="hero" size="lg" className="px-8 py-4 text-lg">
              Explore Our Solutions
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            
            <Button variant="glass" size="lg" className="px-8 py-4 text-lg">
              <Play className="mr-2 w-5 h-5" />
              Watch Demo
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-16 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="stats-number">150+</div>
              <p className="text-muted-foreground font-medium">In-House Specialists</p>
            </div>
            <div className="text-center">
              <div className="stats-number">1000+</div>
              <p className="text-muted-foreground font-medium">Projects Completed</p>
            </div>
            <div className="text-center">
              <div className="stats-number">25+</div>
              <p className="text-muted-foreground font-medium">Years Experience</p>
            </div>
            <div className="text-center">
              <div className="stats-number">100%</div>
              <p className="text-muted-foreground font-medium">Client Satisfaction</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-subtle" />
    </section>
  );
};

export default Hero;