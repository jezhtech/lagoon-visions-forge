import { ArrowRight, Play, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Clean background with floating blobs - enyard style */}
      <div className="absolute inset-0 z-0">
        {/* Floating colorful blobs */}
        <div className="floating-blob floating-blob-1" />
        <div className="floating-blob floating-blob-2" />
        <div className="floating-blob floating-blob-3" />
      </div>

      {/* Main content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="text-center space-y-12">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary font-medium text-sm">
            <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse" />
            Where Innovation Meets Intelligence
          </div>

          {/* Main heading - enyard style with gradient */}
          <div className="space-y-4">
            <h1 className="hero-text max-w-5xl mx-auto">
              Elevate Your Business
            </h1>
            <h1 className="hero-text hero-gradient max-w-5xl mx-auto">
              Beyond Imagination
            </h1>
          </div>

          {/* Subheading */}
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Revolutionizes business operations with intelligent applications that think, learn, and evolve. 
            Transform your enterprise from reactive to predictive, from manual to autonomous, from today to tomorrow.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8">
            <Button 
              size="lg" 
              className="px-8 py-4 text-lg bg-foreground text-background hover:bg-foreground/90 rounded-xl font-semibold"
            >
              Begin Your Transformation
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            
            <Button 
              variant="ghost" 
              size="lg" 
              className="px-8 py-4 text-lg text-muted-foreground hover:text-foreground rounded-xl"
            >
              <Play className="mr-2 w-5 h-5" />
              Witness the Revolution
            </Button>
          </div>

          {/* Scroll indicator */}
          <div className="pt-20">
            <div className="scroll-indicator">
              <p className="text-sm text-muted-foreground mb-2">Scroll to explore</p>
              <ChevronDown className="w-6 h-6 text-muted-foreground mx-auto" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;