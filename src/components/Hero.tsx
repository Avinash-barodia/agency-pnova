"use client";

import { motion, Variants, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

export function Hero() {
  const [hoveredWord, setHoveredWord] = useState<'campaigns' | 'brands' | null>(null);
  const container: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const } },
  };

  return (
    <section className="relative flex items-center justify-center pt-24 pb-12 md:pt-32 md:pb-16 px-6 md:px-12 lg:px-[80px] overflow-hidden transition-colors duration-500">
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: "radial-gradient(rgb(242, 202, 80) 0.5px, transparent 0.5px)", backgroundSize: "24px 24px" }}></div>
      
      <AnimatePresence>
        {hoveredWord === 'campaigns' && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="absolute inset-0 z-0 pointer-events-none"
            style={{ background: "radial-gradient(circle at 50% 40%, rgba(20, 60, 120, 0.4) 0%, transparent 60%)" }}
          />
        )}
        {hoveredWord === 'brands' && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="absolute inset-0 z-0 pointer-events-none"
            style={{ background: "radial-gradient(circle at 50% 60%, rgba(212, 175, 55, 0.15) 0%, transparent 60%)" }}
          />
        )}
      </AnimatePresence>
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="max-w-4xl text-center z-10"
      >
        <motion.span variants={item} className="font-sans text-[12px] font-bold text-[var(--color-primary)] tracking-[0.3em] block mb-6 uppercase">A DIFFERENT APPROACH TO DIGITAL MARKETING</motion.span>
        <motion.h1 variants={item} className="font-serif text-[32px] sm:text-[40px] md:text-[48px] lg:text-[56px] xl:text-[64px] mb-8 leading-[1.15] font-bold tracking-[-0.02em]">
          We Don't Just Run{" "}
          <span 
            className="cursor-pointer relative z-20 transition-all duration-300 hover:text-[var(--color-primary)] hover:drop-shadow-[0_0_15px_rgba(212,175,55,0.6)]"
            onMouseEnter={() => setHoveredWord('campaigns')}
            onMouseLeave={() => setHoveredWord(null)}
          >
            Campaigns.
          </span>
          <br className="hidden md:block" />
          <span className="text-[var(--color-primary)] italic">We Build{" "}
            <span 
              className="cursor-pointer border-b-2 border-[var(--color-primary)] relative z-20 transition-all duration-300 hover:text-white hover:drop-shadow-[0_0_15px_rgba(255,255,255,0.6)]"
              onMouseEnter={() => setHoveredWord('brands')}
              onMouseLeave={() => setHoveredWord(null)}
            >
              Brands.
            </span>
          </span>
        </motion.h1>
        <motion.div variants={item} className="mb-12 max-w-2xl mx-auto flex flex-col gap-3">
          <span className="font-sans font-bold text-[var(--color-primary)] tracking-[0.2em] text-[13px] md:text-[15px] uppercase">
            FOR THOSE WHO EXPECT MORE FROM MARKETING.
          </span>
          <p className="font-sans text-[16px] md:text-[20px] text-[var(--color-on-surface-variant)] leading-[26px] md:leading-[32px]">
            Helping businesses grow through strategy, content, creativity, and performance marketing.
          </p>
        </motion.div>
        <motion.div variants={item} className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <Link href="/case-studies" className="inline-block w-full sm:w-auto bg-[var(--color-primary)] text-[var(--color-on-primary-fixed)] font-sans text-[12px] py-5 px-12 font-bold uppercase tracking-[0.15em] hover:bg-[var(--color-primary-fixed-dim)] transition-all duration-300 text-center">
            SEE OUR WORK
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}
