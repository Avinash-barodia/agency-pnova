"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const comparisonData = [
  { traditional: "Campaign-focused", purnova: "Brand-first approach" },
  { traditional: "Short-term metrics", purnova: "Long-term brand equity" },
  { traditional: "Temporary attention", purnova: "Lasting recognition" },
  { traditional: "Isolated marketing efforts", purnova: "Unified brand strategy" },
  { traditional: "One-time growth", purnova: "Sustainable business growth" },
];

export function OurDifference() {
  const containerRef = useRef<HTMLElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    if (containerRef.current) {
      observer.observe(containerRef.current);
    }
    return () => {
      observer.disconnect();
    };
  }, []);

  const EXPO_EASE = [0.16, 1, 0.3, 1] as const;

  return (
    <section ref={containerRef} className="py-24 md:py-32 px-6 md:px-12 lg:px-[80px] bg-[#0A0A0A] relative border-t border-white/5">
      <div className="max-w-[1280px] mx-auto">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
          
          {/* Left Text Column */}
          <div className="lg:w-1/2 flex flex-col gap-8">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, ease: EXPO_EASE }}
              className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
            >
              Most agencies chase short-term results. <br/>
              <span className="text-[#C9A84C] italic block mt-2">We build long-term brand value.</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2, ease: EXPO_EASE }}
              className="font-sans font-light text-[15px] md:text-[17px] leading-[2] text-[#b0a693]"
            >
              Many agencies focus on clicks, impressions, and quick wins. While these metrics matter, they rarely create a brand people remember.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3, ease: EXPO_EASE }}
              className="font-sans font-light text-[15px] md:text-[17px] leading-[2] text-[#F5F0E8]"
            >
              At Purnova, we believe branding is the foundation of sustainable growth. We combine strategic branding with performance marketing to build businesses that earn recognition, trust, and long-term customer loyalty.
            </motion.p>
          </div>

          {/* Right Comparison Column */}
          <div className="lg:w-1/2 w-full">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: 0.4, ease: EXPO_EASE }}
              className="border border-white/10 bg-[#050505] relative overflow-hidden"
            >
              {/* Subtle gold glow at top */}
              <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#C9A84C]/60 to-transparent" />

              <div className="p-8 md:p-12">
                <motion.h3 
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : {}}
                  transition={{ duration: 1, delay: 0.8, ease: EXPO_EASE }}
                  className="font-serif text-xl md:text-2xl text-center mb-10 text-white/80"
                >
                  Where Others See Campaigns, <br/>
                  <span className="text-[#C9A84C] font-bold tracking-wide block mt-1">We See Legacies.</span>
                </motion.h3>

                <div className="flex flex-col">
                  {/* Table Headers */}
                  <div className="flex border-b border-white/10 pb-5 mb-5">
                    <div className="flex-1 text-[10px] md:text-[11px] font-label-caps uppercase tracking-[0.2em] text-white/40">Most Agencies</div>
                    <div className="flex-1 text-[10px] md:text-[11px] font-label-caps uppercase tracking-[0.2em] text-[#C9A84C] pl-6 md:pl-10 border-l border-white/10">Purnova</div>
                  </div>

                  {/* Rows */}
                  {comparisonData.map((row, i) => (
                    <motion.div 
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.6, delay: 1.0 + (i * 0.1), ease: EXPO_EASE }}
                      className="flex py-6 group"
                    >
                      <div className="flex-1 pr-4 md:pr-6 font-sans font-light text-[13px] md:text-[15px] text-white/50 group-hover:text-white/70 transition-colors duration-300">
                        {row.traditional}
                      </div>
                      <div className="flex-1 pl-6 md:pl-10 font-sans font-light text-[13px] md:text-[15px] text-[#F5F0E8] border-l border-white/10 relative transition-colors duration-300">
                        {/* Hover indicator for the right side */}
                        <div className="absolute left-[-1px] top-1/2 -translate-y-1/2 w-[2px] h-0 bg-[#C9A84C] group-hover:h-full transition-all duration-300 opacity-0 group-hover:opacity-100" />
                        <span className="relative z-10 group-hover:text-[#C9A84C] transition-colors duration-300">{row.purnova}</span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
