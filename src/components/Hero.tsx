"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import Link from "next/link";
import { useEffect, useRef, useCallback } from "react";
import { useState } from "react";

// ─── Headline Lines ────────────────────────────────────────────────────────────
const headlineLines = [
  "We Build Brands",
  "That People Notice,",
  "Remember, and Choose.",
];

// ─── Easing ───────────────────────────────────────────────────────────────────
const EXPO_EASE = [0.16, 1, 0.3, 1] as const;

// ─── Main Hero ─────────────────────────────────────────────────────────────────
export function Hero() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 40, damping: 25 });
  const springY = useSpring(mouseY, { stiffness: 40, damping: 25 });
  const glowX = useTransform(springX, (v) => `${v}px`);
  const glowY = useTransform(springY, (v) => `${v}px`);
  const heroRef = useRef<HTMLElement>(null);

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      if (!heroRef.current) return;
      const rect = heroRef.current.getBoundingClientRect();
      mouseX.set(e.clientX - rect.left - rect.width / 2);
      mouseY.set(e.clientY - rect.top - rect.height / 2);
    },
    [mouseX, mouseY]
  );

  useEffect(() => {
    const el = heroRef.current;
    if (!el) return;
    el.addEventListener("mousemove", handleMouseMove);
    return () => el.removeEventListener("mousemove", handleMouseMove);
  }, [handleMouseMove]);

  // Animation variants
  const eyebrowVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EXPO_EASE, delay: 0.2 } },
  };

  const subtitleVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EXPO_EASE, delay: 1.0 } },
  };

  const ctaVariants = {
    hidden: { opacity: 0, y: 16 },
    show: (i: number) => ({
      opacity: 1, y: 0, transition: { duration: 0.5, ease: EXPO_EASE, delay: 1.2 + i * 0.15 },
    }),
  };


  return (
    <section
      ref={heroRef}
      className="relative min-h-[80vh] flex flex-col justify-center pt-28 pb-20 px-6 md:px-12 lg:px-[80px] overflow-hidden bg-[#0A0A0A]"
      aria-label="Purnova Hero"
    >
      {/* ── Layer 2: Vignette ─────────────────────────────────── */}
      <div className="absolute inset-0 pointer-events-none z-0" style={{ background: "radial-gradient(circle at center, transparent 45%, rgba(0,0,0,0.15) 100%)" }} />

      {/* ── Layer 4: Film Grain ───────────────────────────────── */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] z-0" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }} />

      {/* ── Layer 5: Editorial Grid ───────────────────────────── */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.025] z-0 hidden md:block" style={{ 
        backgroundImage: "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)", 
        backgroundSize: "100px 100px", 
        maskImage: "radial-gradient(ellipse at center, black 15%, transparent 75%)", 
        WebkitMaskImage: "radial-gradient(ellipse at center, black 15%, transparent 75%)" 
      }} />

      {/* ── Layer 6: Star Field (Static & Twinkling) ──────────── */}
      <motion.div className="absolute inset-0 pointer-events-none z-0 hidden md:block" 
        style={{ 
          backgroundImage: `
            radial-gradient(1px 1px at 15% 25%, rgba(255,255,255,0.8), transparent),
            radial-gradient(1.5px 1.5px at 35% 65%, rgba(255,255,255,0.6), transparent),
            radial-gradient(1px 1px at 75% 15%, rgba(255,255,255,0.9), transparent),
            radial-gradient(2px 2px at 85% 75%, rgba(255,255,255,0.5), transparent),
            radial-gradient(1px 1px at 55% 85%, rgba(255,255,255,0.7), transparent),
            radial-gradient(1px 1px at 45% 15%, rgba(255,255,255,0.4), transparent)
          `
        }}
        animate={{ opacity: [0.3, 0.7, 0.3] }} 
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }} 
      />

      {/* ── Layer 3: Ambient Gold Glow ────────────────────────── */}
      <motion.div className="absolute left-[20%] top-[30%] w-[1200px] h-[800px] pointer-events-none -translate-x-1/2 -translate-y-1/2 z-0" 
        style={{ background: "radial-gradient(ellipse at center, rgba(201,168,76,0.04) 0%, transparent 60%)" }}
        animate={{ opacity: [0.7, 1, 0.7] }} 
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }} 
      />

      {/* ── Layer 7: Soft Light Falloff ───────────────────────── */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1200px] h-[500px] pointer-events-none z-0" style={{ background: "radial-gradient(ellipse at top, rgba(255,255,255,0.02) 0%, transparent 60%)" }} />

      {/* ── Vertical gold rule — right side accent ─────────────── */}
      <motion.div
        className="absolute right-[80px] top-32 bottom-32 hidden xl:block pointer-events-none"
        initial={{ scaleY: 0, opacity: 0 }}
        animate={{ scaleY: 1, opacity: 1 }}
        transition={{ duration: 1.2, ease: EXPO_EASE, delay: 0.8 }}
        style={{ transformOrigin: "top" }}
      >
        <div className="w-[1px] h-full bg-gradient-to-b from-[#C9A84C]/30 via-[#C9A84C]/10 to-transparent" />
      </motion.div>

      {/* ── Main Content ──────────────────────────────────────── */}
      <div className="relative z-10 max-w-[1280px] w-full mx-auto mt-8 md:mt-16">
        
        {/* Right Side Decorative Composition */}
        <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 w-[450px] h-[650px] pointer-events-auto z-20">
          <DashboardComposition />
        </div>

        <div className="relative z-30 max-w-2xl pointer-events-none">
          <motion.p variants={eyebrowVariants} initial="hidden" animate="show" className="font-label-caps text-[11px] md:text-[12px] tracking-[0.4em] uppercase text-[#C9A84C] mb-8 md:mb-10 opacity-80 pointer-events-auto">
            Branding That Lasts. Growth That Matters.
          </motion.p>

          <h1 className="font-serif font-bold leading-[0.95] tracking-[-0.03em] mb-8 md:mb-10 pointer-events-auto" style={{ fontSize: "clamp(48px, 7vw, 96px)" }}>
            {headlineLines.map((line, i) => (
              <span key={i} className="block overflow-hidden pb-1">
                <motion.span className="block" initial={{ y: "110%" }} animate={{ y: 0 }} transition={{ duration: 0.75, ease: EXPO_EASE, delay: 0.45 + i * 0.15 }}>
                  {i === 2 ? <><span className="text-[#C9A84C] italic">Remember,</span> and Choose.</> : line}
                </motion.span>
              </span>
            ))}
          </h1>

          <motion.p variants={subtitleVariants} initial="hidden" animate="show" className="font-sans font-light text-[15px] md:text-[17px] leading-[1.8] text-[#b0a693] max-w-xl mb-10 md:mb-12 pointer-events-auto">
            Most marketing creates noise. <span className="text-[#F5F0E8] font-normal">Purnova creates memory.</span> We combine strategic branding with performance marketing to deliver recognition today and growth that lasts.
          </motion.p>

          <div className="flex flex-col sm:flex-row gap-4 mb-4 pointer-events-auto">
            <motion.div custom={0} variants={ctaVariants} initial="hidden" animate="show">
              <Link href="/contact">
                <button className="w-full sm:w-auto font-label-caps text-[11px] tracking-[0.2em] uppercase bg-[#C9A84C] text-black px-10 py-4 md:py-5 font-bold overflow-hidden relative group">
                  <span className="relative z-10">Start Your Brand Journey</span>
                  <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full bg-white/20 skew-x-[-20deg] transition-transform duration-500" />
                </button>
              </Link>
            </motion.div>
            <motion.div custom={1} variants={ctaVariants} initial="hidden" animate="show">
              <Link href="/contact">
                <button className="w-full sm:w-auto font-label-caps text-[11px] tracking-[0.2em] uppercase text-[#C9A84C] px-10 py-4 md:py-5 font-bold border border-[#C9A84C]/40 relative overflow-hidden group">
                  <span className="absolute inset-0 scale-x-0 group-hover:scale-x-100 bg-[#C9A84C]/10 origin-left transition-transform duration-400" />
                  <span className="relative z-10 group-hover:text-[#F5F0E8] transition-colors duration-300">Schedule a Discovery Call</span>
                </button>
              </Link>
            </motion.div>
          </div>
        </div>
      </div>



      {/* ── Scroll hint ────────────────────────────────────────── */}
      <motion.div
        className="absolute bottom-8 right-8 hidden md:flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 4, duration: 0.8 }}
      >
        <span className="font-sans text-[9px] tracking-[0.3em] uppercase text-white/20 [writing-mode:vertical-rl]">Scroll</span>
        <motion.div className="w-[1px] h-12 bg-gradient-to-b from-[#C9A84C]/50 to-transparent" animate={{ scaleY: [0, 1, 0] }} transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }} style={{ transformOrigin: "top" }} />
      </motion.div>
    </section>
  );
}

// ─── Decorative Dashboard Composition ──────────────────────────────────────
const dashboardNodes = [
  { id: "strategy", label: "Strategy", image: "/images/strategy.png", x: 75, y: 10 },
  { id: "branding", label: "Branding", image: "/images/branding.png", x: 25, y: 23 },
  { id: "content", label: "Content", image: "/images/content.png", x: 75, y: 36 },
  { id: "social", label: "Social Media", image: "/images/social media.png", x: 25, y: 50 },
  { id: "advertising", label: "Advertising", image: "/images/ads.png", x: 75, y: 63 },
  { id: "marketing", label: "Marketing", image: "/images/marketing.png", x: 25, y: 76 },
  { id: "trust", label: "Trust", image: "/images/trust.png", x: 75, y: 90 },
];

// Smooth spline curve between staggered nodes
const pathD = "M 75 10 C 75 16.5, 25 16.5, 25 23 C 25 29.5, 75 29.5, 75 36 C 75 43, 25 43, 25 50 C 25 56.5, 75 56.5, 75 63 C 75 69.5, 25 69.5, 25 76 C 25 83, 75 83, 75 90";

function DashboardComposition() {
  return (
    <div className="relative w-full h-full">
      {/* Background ambient glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(201,168,76,0.03)_0%,_transparent_60%)] pointer-events-none" />
      
      {/* SVG Path Connections */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="none">
        <defs>
          <linearGradient id="lineGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="rgba(201,168,76,0)" />
            <stop offset="20%" stopColor="rgba(201,168,76,0.25)" />
            <stop offset="80%" stopColor="rgba(201,168,76,0.25)" />
            <stop offset="100%" stopColor="rgba(201,168,76,0)" />
          </linearGradient>
        </defs>

        {/* Base Track */}
        <motion.path 
          d={pathD} 
          fill="none" 
          stroke="url(#lineGradient)" 
          strokeWidth="0.3" 
          vectorEffect="non-scaling-stroke"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2.5, ease: EXPO_EASE, delay: 0.5 }}
        />
        
        {/* Moving Particles (Simulated via dash offset) */}
        <motion.path 
          d={pathD} 
          fill="none" 
          stroke="#C9A84C" 
          strokeWidth="0.6" 
          strokeDasharray="1.5 20"
          vectorEffect="non-scaling-stroke"
          animate={{ strokeDashoffset: [21.5, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          style={{ filter: "drop-shadow(0 0 3px rgba(201,168,76,0.8))" }}
          className="opacity-70"
        />
      </svg>

      {/* Nodes */}
      {dashboardNodes.map((node, i) => (
        <DashboardNode key={node.id} node={node} index={i} />
      ))}
    </div>
  );
}

function DashboardNode({ node, index }: { node: typeof dashboardNodes[0], index: number }) {
  return (
    <motion.div
      className="absolute flex flex-col items-center justify-center group z-10"
      style={{ left: `${node.x}%`, top: `${node.y}%`, x: "-50%", y: "-50%" }}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay: 1 + index * 0.15, ease: EXPO_EASE }}
    >
      <motion.div
        animate={{ scale: [1, 1.03, 1] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: index * 0.4 }}
        whileHover={{ scale: 1.05, y: -6, rotate: 2 }}
        className="relative flex items-center justify-center cursor-pointer transition-all duration-300 group-hover:drop-shadow-[0_0_25px_rgba(201,168,76,0.4)]"
      >
        <img src={node.image} alt={node.label} className="h-[88px] md:h-[110px] w-auto object-contain opacity-85 group-hover:opacity-100 transition-opacity" loading="lazy" />
      </motion.div>
    </motion.div>
  );
}
