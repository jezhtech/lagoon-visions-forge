import { useEffect, useRef } from "react";

const logos = [
  { name: "Optiv", text: "OPTIV" },
  { name: "MOBIA", text: "MOBIA" },
  { name: "Evanssion", text: "evanssion" },
  { name: "Inspira", text: "inspira" },
  { name: "KPMG", text: "KPMG" },
  { name: "EY", text: "EY" },
  { name: "Guidepoint", text: "GUIDEPOINT" },
  { name: "ESI", text: "ESI" },
  { name: "La Esfera", text: "la esfera" },
];

const ClientsMarquee = () => {
  const trackRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    let offset = 0;
    let raf = 0;
    const step = () => {
      offset -= 0.5; // speed
      track.style.transform = `translateX(${offset}px)`;
      if (Math.abs(offset) > track.scrollWidth / 2) {
        offset = 0;
      }
      raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm text-black/60 mb-6">
          Trusted by the world's most ambitious companies and partners
        </p>
        <div className="relative overflow-hidden">
          <div className="flex gap-6 will-change-transform" ref={trackRef}>
            {[...logos, ...logos].map((logo, idx) => (
              <div
                key={`${logo.name}-${idx}`}
                className="shrink-0 h-16 w-40 rounded-xl border border-black/10 bg-white flex items-center justify-center text-black/70"
              >
                {logo.text}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientsMarquee;


