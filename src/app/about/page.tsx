"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { NavBar } from "@/components/NavBar";
import { Footer } from "@/components/Footer";

const EXPO_EASE = [0.16, 1, 0.3, 1] as const;

export default function AboutPage() {
  return (
    <main className="flex min-h-screen flex-col bg-[#0A0A0A] text-white selection:bg-[#C9A84C] selection:text-black">
      <NavBar />

      {/* ── 1. Hero (Introduction) ────────────────────────────────────────────── */}
      <header className="relative pt-32 pb-24 md:pt-48 md:pb-32 px-6 md:px-12 lg:px-[80px] max-w-[1440px] mx-auto w-full flex flex-col justify-center min-h-[70vh]">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: EXPO_EASE }}
          className="font-sans text-[11px] md:text-[12px] font-bold uppercase tracking-[0.4em] text-[#C9A84C] mb-8"
        >
          Who We Are
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: EXPO_EASE }}
          className="font-serif font-bold text-[clamp(48px,7vw,96px)] leading-[1.08] tracking-[-0.03em] mb-12"
        >
          About Purnova
        </motion.h1>

        <div className="max-w-3xl space-y-8 font-sans font-light text-[17px] md:text-[19px] leading-[2] text-[#b0a693]">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: EXPO_EASE }}
            className="text-white text-2xl md:text-3xl font-serif font-semibold"
          >
            Purnova was founded on a simple yet powerful belief:
            <br />
            <span className="text-[#C9A84C] italic font-normal">Great brands are not built through noise, but through intention.</span>
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: EXPO_EASE }}
          >
            In a digital landscape overflowing with short-term tactics and disposable campaigns, we chose a different path — one rooted in timeless branding principles and strategic excellence.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: EXPO_EASE }}
          >
            We are not another digital marketing agency. We are brand architects who understand that true success lies in creating identities so strong and memorable that they become part of your audience&apos;s consciousness.
          </motion.p>
        </div>
      </header>

      {/* ── 2. Our Purpose (Manifesto Quote Block) ─────────────────────────────── */}
      <section className="py-24 md:py-32 bg-[#050505] px-6 md:px-12 lg:px-[80px] text-center border-y border-white/5">
        <div className="max-w-5xl mx-auto flex flex-col items-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: EXPO_EASE }}
            className="font-sans text-[11px] font-bold uppercase tracking-[0.4em] text-[#C9A84C] mb-12 block"
          >
            Our Purpose
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, delay: 0.1, ease: EXPO_EASE }}
            className="font-serif italic text-[36px] md:text-[48px] lg:text-[56px] leading-[1.2] text-white mb-12 max-w-4xl"
          >
            &ldquo;To transform ambitious brands into distinguished names that endure.&rdquo;
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: EXPO_EASE }}
            className="font-sans font-light text-[15px] md:text-[17px] leading-[2] text-[#b0a693] max-w-3xl mx-auto"
          >
            We help our clients move beyond being &quot;just another option&quot; to becoming the preferred choice — not through aggressive promotion alone, but through deep, meaningful brand positioning that creates lasting emotional connections.
          </motion.p>
        </div>
      </section>

      {/* ── 3. Why Purnova (Editorial 2-Column) ─────────────────────────────────── */}
      <section className="py-24 md:py-32 px-6 md:px-12 lg:px-[80px] max-w-[1440px] mx-auto w-full relative">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          <div className="lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: EXPO_EASE }}
              className="lg:sticky lg:top-32"
            >
              <h2 className="font-serif text-[40px] md:text-[56px] lg:text-[72px] font-semibold leading-[1.1] tracking-tighter">
                Why <span className="text-transparent bg-clip-text bg-gradient-to-br from-white via-white to-white/40">Purnova?</span>
              </h2>
            </motion.div>
          </div>
          <div className="lg:w-1/2 flex flex-col gap-8 font-sans font-light text-[15px] md:text-[17px] leading-[2] text-[#b0a693]">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.1, ease: EXPO_EASE }}
            >
              While the industry obsesses over immediate deliverables and vanity metrics, we focus on what truly matters:
            </motion.p>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.2, ease: EXPO_EASE }}
              className="border-l border-[#C9A84C] pl-6 md:pl-8 py-2"
            >
              <p className="font-serif italic text-2xl md:text-3xl text-white">
                Brand equity that compounds over time.
              </p>
            </motion.div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.3, ease: EXPO_EASE }}
              className="text-[#F5F0E8]"
            >
              We seamlessly integrate sophisticated branding strategies with high-performance marketing. This balanced approach ensures your brand doesn&apos;t just generate results today — it builds a foundation for sustainable success tomorrow.
            </motion.p>
          </div>
        </div>
      </section>

      {/* ── 4. Our Core Principles (3 Cards) ────────────────────────────────────── */}
      <section className="py-24 md:py-32 bg-[#050505] border-y border-white/5 relative overflow-hidden">
        {/* Subtle background glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-[radial-gradient(circle,_rgba(201,168,76,0.05)_0%,_transparent_70%)] pointer-events-none" />
        
        <div className="px-6 md:px-12 lg:px-[80px] max-w-[1440px] mx-auto relative z-10">
          <div className="text-center mb-16 md:mb-24">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: EXPO_EASE }}
              className="font-serif text-[40px] md:text-[56px] font-semibold tracking-tighter"
            >
              Our Core Principles
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-12">
            {[
              { title: "Clarity", desc: "Understanding your vision and audience with precision." },
              { title: "Elegance", desc: "Creating refined, memorable brand experiences." },
              { title: "Longevity", desc: "Building identities designed to thrive for years, not months." }
            ].map((principle, index) => (
              <motion.div
                key={principle.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: index * 0.15, ease: EXPO_EASE }}
                className="group relative bg-[#0A0A0A] border border-white/5 p-10 md:p-12 min-h-[300px] flex flex-col justify-end overflow-hidden"
              >
                {/* Hover top glow */}
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#C9A84C]/0 to-transparent group-hover:via-[#C9A84C]/50 transition-all duration-700" />
                
                <span className="font-sans text-[11px] font-bold text-white/20 mb-auto">0{index + 1}</span>
                <h3 className="font-serif text-[32px] font-semibold text-white mb-4 group-hover:text-[#C9A84C] transition-colors duration-500">
                  {principle.title}
                </h3>
                <p className="font-sans font-light text-[15px] leading-relaxed text-white/50 group-hover:text-white/80 transition-colors duration-500">
                  {principle.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. Our Commitment (Highlight Panel) ─────────────────────────────────── */}
      <section className="py-24 md:py-40 px-6 md:px-12 lg:px-[80px] bg-[#0A0A0A]">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, ease: EXPO_EASE }}
          className="max-w-4xl mx-auto p-12 md:p-20 border border-white/10 relative overflow-hidden bg-[#050505]"
        >
          {/* Subtle gold line accent */}
          <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#C9A84C]/40 to-transparent" />
          
          <div className="flex flex-col items-center text-center space-y-8 md:space-y-10">
            <span className="font-sans text-[11px] font-bold uppercase tracking-[0.4em] text-[#C9A84C]">
              Our Commitment
            </span>
            
            <p className="font-serif text-2xl md:text-3xl text-white leading-relaxed">
              When you partner with Purnova, you gain more than a service provider.
            </p>
            <p className="font-sans font-light text-[17px] leading-[2] text-[#F5F0E8] max-w-2xl">
              You gain a dedicated brand partner committed to making your name noticeable, memorable, and respected.
            </p>
            
            <div className="w-12 h-[1px] bg-white/20 my-4" />
            
            <div className="font-serif text-[32px] md:text-[40px] font-bold leading-tight">
              We don&apos;t just market your business.<br/>
              <span className="text-[#C9A84C] italic">We help shape its legacy.</span>
            </div>
          </div>
        </motion.div>
      </section>

      {/* ── 6. Final CTA ──────────────────────────────────────────────────────── */}
      <section className="py-24 border-t border-white/5 bg-[#050505] text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, ease: EXPO_EASE }}
        >
          <Link href="/contact">
            <button className="font-label-caps text-[11px] tracking-[0.2em] uppercase bg-[#C9A84C] text-black px-12 py-5 font-bold relative group overflow-hidden">
              <span className="relative z-10">Start Your Brand Journey</span>
              <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full bg-white/20 skew-x-[-20deg] transition-transform duration-500" />
            </button>
          </Link>
        </motion.div>
      </section>

      <Footer />
    </main>
  );
}
