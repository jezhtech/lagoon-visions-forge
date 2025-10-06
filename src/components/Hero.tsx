import { ArrowRight, Play, ChevronDown, ShieldCheck, Sparkles, Gauge } from "lucide-react";
import { Button } from "@/components/ui/button";
import worldMap from "@/components/world.svg";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-white hero-surface">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Headline */}
          <div className="lg:col-span-7 space-y-8">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 border border-primary/30 text-black font-medium text-xs w-fit">
              BEYOND BYTES WE BUILD BONDS
            </div>
            <h1 className="text-5xl md:text-6xl font-black leading-tight">
              Turn data into decisions
              <span className="block hero-gradient">with elegant systems</span>
            </h1>
            <p className="text-lg text-black/70 max-w-2xl">
              We design and build secure, scalable products that your teams actually
              enjoy using. Clean, fast, dependable.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <Button size="lg" className="px-8 py-4 text-lg rounded-xl bg-primary text-black hover:bg-primary/90">
                Start a project
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button variant="outline" size="lg" className="px-8 py-4 text-lg rounded-xl border-black/20 text-black hover:bg-black/5">
                <Play className="mr-2 w-5 h-5" />
                See how it works
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-6">
              <div>
                <div className="text-3xl font-extrabold text-black">99.99%</div>
                <div className="text-black/60 text-sm">Platform uptime</div>
              </div>
              <div>
                <div className="text-3xl font-extrabold text-black"><span className="text-primary">~</span>3m</div>
                <div className="text-black/60 text-sm">Average deploy</div>
              </div>
              <div>
                <div className="text-3xl font-extrabold text-black">100+</div>
                <div className="text-black/60 text-sm">Enterprise modules</div>
              </div>
            </div>
          </div>

          {/* Innovative visual: provided world.svg with animated, responsive data links */}
          <div className="lg:col-span-5">
            <div className="relative aspect-[4/3] rounded-2xl bg-white overflow-hidden">
              <div className="glow-veil" />
              <img src={worldMap} alt="World map" className="absolute inset-0 w-[115%] h-[115%] -left-[7.5%] -top-[7.5%] object-contain opacity-95" />
              {/* Animated overlay */}
              <svg viewBox="0 0 800 600" className="absolute inset-0 w-full h-full pointer-events-none">
                {/* Approximate hub coords aligned to common world.svg projections */}
                <circle className="globe-node" cx="150" cy="300" r="7" />
                <circle className="globe-node" cx="360" cy="220" r="7" />
                <circle className="globe-node" cx="520" cy="280" r="7" />
                <circle className="globe-node" cx="640" cy="350" r="7" />
                <circle className="globe-node" cx="700" cy="455" r="7" />

                {/* Curved transfer paths */}
                <path id="p1" className="globe-path" d="M150,300 C250,180 430,160 520,280" />
                <path id="p2" className="globe-path" d="M360,220 C440,240 560,295 640,350" />
                <path id="p3" className="globe-path" d="M520,280 C600,322 660,380 700,455" />
                <path id="p4" className="globe-path" d="M150,300 C270,360 430,380 640,350" />
                <path id="p5" className="globe-path" d="M360,220 C320,300 220,340 150,300" />

                {/* Travelling data pulses following the paths */}
                <circle className="globe-travel">
                  <animateMotion dur="4s" repeatCount="indefinite" keyPoints="0;1" keyTimes="0;1" calcMode="linear">
                    <mpath xlinkHref="#p1" />
                  </animateMotion>
                  <animate attributeName="r" values="2;4;2" dur="1.6s" repeatCount="indefinite" />
                </circle>
                <circle className="globe-travel">
                  <animateMotion dur="5s" begin="0.5s" repeatCount="indefinite">
                    <mpath xlinkHref="#p2" />
                  </animateMotion>
                  <animate attributeName="r" values="2;4;2" dur="1.6s" repeatCount="indefinite" />
                </circle>
                <circle className="globe-travel">
                  <animateMotion dur="4.5s" begin="1s" repeatCount="indefinite">
                    <mpath xlinkHref="#p3" />
                  </animateMotion>
                  <animate attributeName="r" values="2;4;2" dur="1.6s" repeatCount="indefinite" />
                </circle>
                <circle className="globe-travel">
                  <animateMotion dur="6s" begin="0.3s" repeatCount="indefinite">
                    <mpath xlinkHref="#p4" />
                  </animateMotion>
                  <animate attributeName="r" values="2;4;2" dur="1.6s" repeatCount="indefinite" />
                </circle>
                <circle className="globe-travel">
                  <animateMotion dur="5.5s" begin="0.8s" repeatCount="indefinite">
                    <mpath xlinkHref="#p5" />
                  </animateMotion>
                  <animate attributeName="r" values="2;4;2" dur="1.6s" repeatCount="indefinite" />
                </circle>
              </svg>
            </div>
            <div className="mt-4 flex items-center gap-3 text-black/70">
              <ShieldCheck className="w-5 h-5 text-primary" />
              Enterprise security
              <Sparkles className="w-5 h-5 text-primary ml-4" />
              Human-centered design
              <Gauge className="w-5 h-5 text-primary ml-4" />
              Performance at scale
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;