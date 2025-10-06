import { CheckCircle2, Shield, Sparkles, Gauge } from "lucide-react";
import { Button } from "@/components/ui/button";

const highlights = [
  { icon: Sparkles, title: "AI-Augmented", desc: "Insights and automation across your stack" },
  { icon: Shield, title: "Enterprise Secure", desc: "Privacy-first, audited, and compliant" },
  { icon: Gauge, title: "Built for Scale", desc: "Cloud-native and globally performant" },
];

const FeaturesCTA = () => {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 space-y-6">
            <h2 className="text-h2 font-bold">
              Build smarter with Lagoon
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Unified data, secure foundations, and elegant experiences. Launch faster with
              a platform designed to turn complexity into clarity.
            </p>
            <div className="grid sm:grid-cols-3 gap-4 pt-2">
              {highlights.map((h) => {
                const Icon = h.icon;
                return (
                  <div key={h.title} className="p-4 rounded-xl border border-border bg-white">
                    <div className="flex items-start gap-3">
                      <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                        <Icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <div className="font-semibold">{h.title}</div>
                        <div className="text-sm text-muted-foreground">{h.desc}</div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button size="lg" className="rounded-xl">
                Start your project
                <CheckCircle2 className="ml-2 w-5 h-5" />
              </Button>
              <Button variant="outline" size="lg" className="rounded-xl">
                Talk to an expert
              </Button>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative rounded-2xl glass-card p-6 float-card">
              <div className="h-48 rounded-xl bg-gradient-hero opacity-20" />
              <div className="grid grid-cols-2 gap-3 mt-4">
                <div className="h-24 rounded-xl bg-primary/10 border border-primary/20" />
                <div className="h-24 rounded-xl bg-muted" />
                <div className="h-24 rounded-xl bg-emerald-50" />
                <div className="h-24 rounded-xl bg-primary/5" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesCTA;




