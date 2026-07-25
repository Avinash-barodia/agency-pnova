"use client";

import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { NavBar } from "@/components/NavBar";
import { Footer } from "@/components/Footer";

const EXPO_EASE = [0.16, 1, 0.3, 1] as const;

export default function ApproachPage() {
  const containerRef = useRef(null);
  
  // Methodology timeline animation
  const timelineRef = useRef(null);
  const { scrollYProgress: timelineProgress } = useScroll({
    target: timelineRef,
    offset: ["start center", "end center"]
  });
  
  const timelineHeight = useTransform(timelineProgress, [0, 1], ["0%", "100%"]);

  return (
    <main className="flex min-h-screen flex-col bg-[#0A0A0A] text-white selection:bg-[#C9A84C] selection:text-black">
      <NavBar />

      {/* ── 1. Hero (Introduction) ────────────────────────────────────────────── */}
      <header className="relative pt-32 pb-24 md:pt-48 md:pb-32 px-6 md:px-12 lg:px-[80px] max-w-[1440px] mx-auto w-full flex flex-col justify-center min-h-[80vh]">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: EXPO_EASE }}
          className="font-sans text-[11px] md:text-[12px] font-bold uppercase tracking-[0.4em] text-[#C9A84C] mb-8"
        >
          Our Approach
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: EXPO_EASE }}
          className="font-serif font-bold text-[clamp(40px,6vw,80px)] leading-[1.08] tracking-[-0.03em] mb-12 max-w-5xl"
        >
          Building Brands Before Building Campaigns
        </motion.h1>

        <div className="max-w-3xl space-y-8 font-sans font-light text-[17px] md:text-[19px] leading-[2] text-[#b0a693]">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: EXPO_EASE }}
            className="text-white text-2xl md:text-3xl font-serif font-semibold"
          >
            Every successful brand is built on clear thinking before creative execution.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: EXPO_EASE }}
          >
            At Purnova, strategy is never an afterthought. It shapes every decision—from positioning and identity to content and performance marketing. Our approach ensures that every action contributes to a stronger, more recognizable brand.
          </motion.p>
        </div>
      </header>

      {/* ── 2. Our Philosophy (Editorial Manifesto Block) ──────────────────────── */}
      <section className="py-24 md:py-32 bg-[#050505] px-6 md:px-12 lg:px-[80px] text-center border-y border-white/5 relative overflow-hidden">
        {/* Subtle background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[radial-gradient(circle,_rgba(201,168,76,0.03)_0%,_transparent_70%)] pointer-events-none" />
        
        <div className="max-w-4xl mx-auto flex flex-col items-center relative z-10">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: EXPO_EASE }}
            className="font-sans text-[11px] font-bold uppercase tracking-[0.4em] text-[#C9A84C] mb-12 block"
          >
            Our Philosophy
          </motion.span>
          
          <div className="font-serif italic text-[32px] md:text-[48px] leading-[1.3] text-white mb-16">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, ease: EXPO_EASE, delay: 0.1 }}>Marketing changes.</motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, ease: EXPO_EASE, delay: 0.2 }}>Algorithms evolve.</motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, ease: EXPO_EASE, delay: 0.3 }}>Platforms come and go.</motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, ease: EXPO_EASE, delay: 0.4 }}>Consumer behavior shifts.</motion.div>
          </div>

          <div className="space-y-8 font-sans font-light text-[15px] md:text-[17px] leading-[2] text-[#b0a693] max-w-3xl">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.5, ease: EXPO_EASE }}
              className="text-white text-xl font-serif font-semibold"
            >
              Strong brands continue to earn trust because they are built on principles rather than trends.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.6, ease: EXPO_EASE }}
            >
              At Purnova, we believe branding is the foundation of sustainable growth. Performance marketing, content, design, and campaigns are most effective when they reinforce a clear and meaningful brand.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.7, ease: EXPO_EASE }}
            >
              Our work is guided by long-term thinking, strategic clarity, and consistent execution.
            </motion.p>
          </div>
        </div>
      </section>

      {/* ── 3. Why Branding First (Sticky Context Panel) ───────────────────────── */}
      <section className="py-24 md:py-40 px-6 md:px-12 lg:px-[80px] max-w-[1440px] mx-auto w-full relative">
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
                Why Branding <span className="text-transparent bg-clip-text bg-gradient-to-br from-white via-white to-white/40">First</span>
              </h2>
            </motion.div>
          </div>
          <div className="lg:w-1/2 flex flex-col gap-10 font-sans font-light text-[15px] md:text-[17px] leading-[2] text-[#b0a693]">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.1, ease: EXPO_EASE }}
            >
              Many businesses invest heavily in marketing before defining who they are.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.2, ease: EXPO_EASE }}
            >
              The result is often inconsistent messaging, fragmented customer experiences, and campaigns that generate attention without building recognition.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.3, ease: EXPO_EASE }}
              className="border-l border-[#C9A84C] pl-6 md:pl-8 py-2 text-white text-xl font-serif"
            >
              We believe branding should come first because every customer interaction shapes perception.
            </motion.div>
            
            <div className="space-y-4">
              <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.8, delay: 0.4, ease: EXPO_EASE }}>
                When your positioning is clear, your communication becomes consistent.
              </motion.p>
              <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.8, delay: 0.5, ease: EXPO_EASE }}>
                When your communication is consistent, trust grows.
              </motion.p>
              <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.8, delay: 0.6, ease: EXPO_EASE }}>
                When trust grows, marketing performs better.
              </motion.p>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.7, ease: EXPO_EASE }}
              className="text-white font-serif italic text-2xl"
            >
              Branding is not separate from growth.<br />
              <span className="text-[#C9A84C] not-italic font-bold">It is what gives growth direction.</span>
            </motion.p>
          </div>
        </div>
      </section>

      {/* ── 4. Our Methodology (Timeline Process Flow) ─────────────────────────── */}
      <section className="py-24 md:py-40 bg-[#050505] px-6 md:px-12 lg:px-[80px] border-y border-white/5 relative">
        <div className="max-w-[1000px] mx-auto">
          <div className="text-center mb-20 md:mb-32">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: EXPO_EASE }}
              className="font-sans text-[11px] font-bold uppercase tracking-[0.4em] text-[#C9A84C] mb-8 block"
            >
              Our Methodology
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.1, ease: EXPO_EASE }}
              className="font-serif text-[32px] md:text-[48px] font-semibold tracking-tighter mb-8"
            >
              Every project follows a structured process designed to create clarity before execution.
            </motion.h2>
          </div>

          <div ref={timelineRef} className="relative">
            {/* Background Line */}
            <div className="absolute top-0 bottom-0 left-[24px] md:left-1/2 md:-translate-x-1/2 w-[1px] bg-white/10" />
            
            {/* Animated Fill Line */}
            <motion.div 
              className="absolute top-0 left-[24px] md:left-1/2 md:-translate-x-1/2 w-[1px] bg-[#C9A84C] origin-top"
              style={{ height: timelineHeight }}
            />

            {[
              { phase: "Discover", desc: "We begin by understanding your business, market, audience, and objectives." },
              { phase: "Define", desc: "We establish your positioning, messaging, brand strategy, and competitive direction." },
              { phase: "Design", desc: "We develop a visual identity and communication system that reflects your strategy consistently across every touchpoint." },
              { phase: "Execute", desc: "We implement branding, content, organic growth, and performance marketing with measurable business objectives." },
              { phase: "Refine", desc: "We continuously evaluate results, identify opportunities, and improve every stage of the brand experience." }
            ].map((step, index) => (
              <div key={step.phase} className={`relative flex items-center mb-16 md:mb-24 last:mb-0 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                
                {/* Timeline Node */}
                <div className="absolute left-[24px] md:left-1/2 -translate-x-1/2 w-3 h-3 bg-[#0A0A0A] border-2 border-[#C9A84C] rounded-full z-10" />

                {/* Content Panel */}
                <div className="w-full pl-[60px] md:pl-0 md:w-1/2">
                  <motion.div
                    initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-150px" }}
                    transition={{ duration: 0.8, ease: EXPO_EASE }}
                    className={`bg-[#0A0A0A] border border-white/5 p-8 md:p-10 ${index % 2 === 0 ? 'md:mr-16' : 'md:ml-16'}`}
                  >
                    <span className="font-sans text-[11px] font-bold text-white/20 mb-4 block">PHASE 0{index + 1}</span>
                    <h3 className="font-serif text-[28px] md:text-[32px] font-semibold text-white mb-4">
                      {step.phase}
                    </h3>
                    <p className="font-sans font-light text-[15px] leading-[1.8] text-[#b0a693]">
                      {step.desc}
                    </p>
                  </motion.div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-20 md:mt-32">
             <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, ease: EXPO_EASE }}
              className="text-[#C9A84C] font-sans font-bold uppercase tracking-[0.2em] text-[12px]"
            >
              Building a brand is an ongoing process—not a one-time project.
            </motion.p>
          </div>
        </div>
      </section>

      {/* ── 5. How We Build Brands (2-Column Deep Dive) ────────────────────────── */}
      <section className="py-24 md:py-32 px-6 md:px-12 lg:px-[80px] max-w-[1440px] mx-auto w-full relative">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          <div className="lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: EXPO_EASE }}
            >
              <h2 className="font-serif text-[40px] md:text-[56px] lg:text-[72px] font-semibold leading-[1.1] tracking-tighter mb-8">
                How We Build Brands
              </h2>
              <p className="font-sans font-light text-[15px] md:text-[17px] leading-[2] text-white">
                Our approach balances strategic thinking with practical execution.
              </p>
            </motion.div>
          </div>
          <div className="lg:w-1/2 flex flex-col gap-8 font-sans font-light text-[15px] md:text-[17px] leading-[2] text-[#b0a693]">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.1, ease: EXPO_EASE }}
            >
              Every recommendation is measured against three questions:
            </motion.p>
            
            <motion.ul 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.2, ease: EXPO_EASE }}
              className="space-y-4 text-white font-serif italic text-2xl border-l border-white/10 pl-6"
            >
              <li>Does it strengthen the brand?</li>
              <li>Does it improve the customer experience?</li>
              <li>Does it support long-term business growth?</li>
            </motion.ul>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.3, ease: EXPO_EASE }}
              className="text-[#C9A84C] font-semibold uppercase text-sm tracking-widest mt-4"
            >
              If the answer is no, we don&apos;t recommend it.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.4, ease: EXPO_EASE }}
            >
              This principle helps us make decisions that remain valuable long after individual campaigns have ended.
            </motion.p>
          </div>
        </div>
      </section>

      {/* ── 6. Long-Term Impact (Typography Feature) ───────────────────────────── */}
      <section className="py-32 md:py-48 px-6 md:px-12 lg:px-[80px] bg-[#050505] relative overflow-hidden flex items-center justify-center min-h-[70vh]">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
          <span className="font-serif font-bold text-[30vw] text-white/[0.02] tracking-tighter leading-none whitespace-nowrap translate-y-8">
            IMPACT
          </span>
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: EXPO_EASE }}
            className="font-serif text-[28px] md:text-[40px] leading-[1.3] text-white mb-12"
          >
            The strongest brands are not remembered because they advertise the most. <br/><br/>
            <span className="text-[#C9A84C] italic">They are remembered because they communicate consistently, create meaningful experiences, and earn trust over time.</span>
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: EXPO_EASE }}
            className="font-sans font-light text-[17px] leading-[2] text-[#b0a693] max-w-2xl mx-auto space-y-6"
          >
            <p>Our goal is not simply to generate visibility.</p>
            <p className="text-white">It is to help businesses become recognizable, respected, and preferred within their market.</p>
            <p className="font-bold uppercase tracking-[0.2em] text-[11px] text-[#C9A84C] pt-8">
              That is the difference between marketing activity and lasting brand equity.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── 7. Final CTA ──────────────────────────────────────────────────────── */}
      <section className="py-24 border-t border-white/5 bg-[#0A0A0A] text-center px-6">
        <div className="max-w-3xl mx-auto flex flex-col items-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: EXPO_EASE }}
            className="font-serif text-[40px] md:text-[56px] font-semibold mb-8 tracking-tighter"
          >
            Build a Brand That Endures
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: 0.1, ease: EXPO_EASE }}
            className="font-sans font-light text-[15px] md:text-[17px] leading-[2] text-[#b0a693] mb-12"
          >
            If you&apos;re looking for a partner who values long-term brand growth as much as measurable business results, we&apos;d love to start the conversation.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: EXPO_EASE }}
          >
            <Link href="/contact">
              <button className="font-label-caps text-[11px] tracking-[0.2em] uppercase bg-[#C9A84C] text-black px-12 py-5 font-bold relative group overflow-hidden">
                <span className="relative z-10">Start Your Brand Journey</span>
                <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full bg-white/20 skew-x-[-20deg] transition-transform duration-500" />
              </button>
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
