"use client";

import { useEffect } from "react";
import Image from "next/image";
import { NavBar } from "@/components/NavBar";
import { Footer } from "@/components/Footer";
import WebGLBackground from "@/components/WebGLBackground";
import { motion } from "framer-motion";

export default function AboutPage() {
  useEffect(() => {
    const revealCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
        }
      });
    };

    const revealObserver = new IntersectionObserver(revealCallback, {
      threshold: 0.1,
    });

    // We still keep the observer for the rest of the page elements, but not the hero
    document.querySelectorAll("section .reveal, section .reveal-group").forEach((el) => {
      revealObserver.observe(el);
    });

    return () => {
      revealObserver.disconnect();
    };
  }, []);

  return (
    <main className="flex min-h-screen flex-col bg-[var(--color-background)]">
      <NavBar />
      
      {/* Hero Section */}
      <header className="relative w-full min-h-screen flex flex-col justify-center items-center overflow-hidden pt-24 md:pt-32 pb-12 md:pb-16">
        <div className="absolute inset-0 w-full h-full pointer-events-none opacity-50 block">
          <WebGLBackground />
        </div>
        
        <div className="relative z-10 text-center px-[var(--spacing-margin-mobile)] md:px-[var(--spacing-margin-desktop)] max-w-7xl w-full">
          <motion.span 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="block font-label-caps text-label-caps font-bold uppercase tracking-[0.15em] text-[var(--color-primary-container)] mb-6"
          >
            ABOUT PURNOVA
          </motion.span>
          <h1 className="font-display-lg text-[36px] sm:text-[48px] md:text-[72px] leading-[1.1] md:leading-[80px] tracking-[-0.02em] font-bold text-white mb-6 md:mb-8">
            <span className="block overflow-hidden pb-2">
              <motion.span 
                initial={{ y: "-110%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
                className="block"
              >
                SOME BRANDS ARE SEEN.
              </motion.span>
            </span>
            <span className="block overflow-hidden pb-2">
              <motion.span 
                initial={{ y: "-110%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                className="block"
              >
                GREAT BRANDS ARE
              </motion.span>
            </span>
            <span className="block overflow-hidden pb-2">
              <motion.span 
                initial={{ y: "-110%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
                className="block italic font-normal"
              >
                REMEMBERED.
              </motion.span>
            </span>
          </h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
            className="font-body-lg text-lg md:text-body-lg text-[var(--color-on-surface-variant)] mb-8 md:mb-12 max-w-2xl mx-auto"
          >
            We help businesses build brands people trust, remember, and choose. Through strategy, creativity, and marketing, we turn ambitious ideas into lasting growth.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}
            className="px-4 sm:px-0"
          >
            <button className="bg-[var(--color-primary)] w-full sm:w-auto px-8 sm:px-12 py-4 sm:py-5 font-label-caps text-label-caps font-bold uppercase tracking-[0.15em] text-[var(--color-on-primary)] hover:bg-[var(--color-primary-container)] transition-colors duration-300">
              Explore Our Work
            </button>
          </motion.div>
        </div>
        <div className="scroll-line"></div>
      </header>

      {/* Section 2: OUR STORY */}
      <section className="py-20 md:py-32 px-[var(--spacing-margin-mobile)] md:px-[var(--spacing-margin-desktop)] max-w-[var(--spacing-container-max)] mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-[var(--spacing-gutter)]">
          <div className="md:col-span-5 reveal">
            <h2 className="font-headline-lg text-4xl md:text-headline-lg font-semibold text-[var(--color-primary)] leading-tight">OUR <br className="hidden md:block" /> STORY</h2>
          </div>
          <div className="md:col-span-7 reveal" style={{ transitionDelay: '200ms' }}>
            <div className="font-body-lg text-lg md:text-body-lg text-[var(--color-on-surface-variant)] space-y-6 md:space-y-8 whitespace-pre-line">
              <p>{`Look up.
Every star you see tonight was born long before you ever noticed it.
Not in silence.
But in chaos.
In unimaginable pressure.
In violent collisions.
In the darkness where nothing seemed possible.

Only then... did it become light.

Brands are born the same way.
Not from a logo.
Not from a campaign.
Not from a viral post.

They are forged in difficult decisions.
Late nights.
Risk.
Reinvention.
And the relentless belief that ordinary was never the destination.

The brands people remember aren't always the biggest.
They're the clearest.
The bravest.
The ones that know exactly who they are, even when the world doesn't.

That's where Purnova begins.

We find the gravity hidden inside ambitious businesses.
We shape their identity.
Give their story a voice.
Build experiences that people don't just notice...
they remember.

Because attention fades.
Algorithms change.
Trends disappear.

But brands built on clarity, purpose, and trust become impossible to ignore.
Like the brightest stars,
they don't ask for attention.
They become impossible not to see.`}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: WHO WE ARE */}
      <section className="py-20 md:py-32 bg-[var(--color-surface-container-lowest)] w-full">
        <div className="px-[var(--spacing-margin-mobile)] md:px-[var(--spacing-margin-desktop)] max-w-[var(--spacing-container-max)] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-[var(--spacing-gutter)] items-center">
            <div className="md:col-span-12 reveal mb-8 md:mb-16">
              <h2 className="font-headline-lg text-3xl md:text-headline-lg font-semibold text-white leading-tight">WHERE AMBITIOUS BRANDS BECOME UNFORGETTABLE</h2>
              <div className="h-1 w-16 md:w-24 bg-[var(--color-primary)] mt-6 md:mt-8"></div>
            </div>
            <div className="md:col-span-12 reveal">
              <p className="font-body-lg text-lg md:text-body-lg text-[var(--color-on-surface-variant)] max-w-4xl">
                At PURNOVA, we believe every ambitious business already has something worth remembering. Our job is to uncover it, shape it, and help the world see it. Through strategy, branding, marketing, and digital experiences, we turn bold ideas into brands people trust, remember, and choose. Because growth isn't about being louder. It's about becoming unforgettable.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: OUR BELIEF */}
      <section className="py-24 md:py-48 bg-[var(--color-surface)] w-full">
        <div className="px-[var(--spacing-margin-mobile)] md:px-[var(--spacing-margin-desktop)] max-w-[var(--spacing-container-max)] mx-auto text-center reveal">
          <h2 className="font-display-lg text-3xl sm:text-headline-lg md:text-display-lg font-bold text-white mb-6 md:mb-8 leading-tight md:leading-[80px]">
            CREATIVITY WITHOUT PURPOSE IS NOISE.<br className="hidden sm:block"/>
            STRATEGY WITHOUT EXECUTION IS THEORY.
          </h2>
          <p className="font-body-lg text-lg md:text-body-lg text-[var(--color-on-surface-variant)] max-w-2xl mx-auto">
            Great brands are built where vision, creativity, and performance meet. That is where PURNOVA operates.
          </p>
        </div>
      </section>

      {/* Section 5: WHAT WE DO (5 Premium Cards) */}
      <section className="py-20 md:py-32 w-full">
        <div className="px-[var(--spacing-margin-mobile)] md:px-[var(--spacing-margin-desktop)] max-w-[var(--spacing-container-max)] mx-auto">
          <h2 className="font-label-caps text-label-caps font-bold text-[var(--color-primary)] text-center mb-12 md:mb-20 tracking-widest uppercase">WHAT WE DO</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {/* Card 01 */}
            <div className="reveal h-full">
              <div className="p-8 bg-[var(--color-surface)] border border-[var(--color-outline-variant)] gold-glow transition-all duration-500 floating-vertical flex flex-col h-full" style={{ animationDelay: '0s' }}>
                <span className="font-label-caps text-headline-md font-bold text-[var(--color-primary)] opacity-30 block mb-6">01</span>
                <h3 className="font-label-caps text-label-caps text-white font-bold mb-4">Brand Strategy</h3>
                <p className="font-body-md text-body-md text-[var(--color-on-surface-variant)] flex-grow">We define the position your audience remembers.</p>
              </div>
            </div>
            {/* Card 02 */}
            <div className="reveal h-full" style={{ transitionDelay: '100ms' }}>
              <div className="p-8 bg-[var(--color-surface)] border border-[var(--color-outline-variant)] gold-glow transition-all duration-500 floating-vertical flex flex-col h-full" style={{ animationDelay: '-1.2s' }}>
                <span className="font-label-caps text-headline-md font-bold text-[var(--color-primary)] opacity-30 block mb-6">02</span>
                <h3 className="font-label-caps text-label-caps text-white font-bold mb-4">Visual Identity</h3>
                <p className="font-body-md text-body-md text-[var(--color-on-surface-variant)] flex-grow">We create brands that are instantly recognizable.</p>
              </div>
            </div>
            {/* Card 03 */}
            <div className="reveal h-full" style={{ transitionDelay: '200ms' }}>
              <div className="p-8 bg-[var(--color-surface)] border border-[var(--color-outline-variant)] gold-glow transition-all duration-500 floating-vertical flex flex-col h-full" style={{ animationDelay: '-2.4s' }}>
                <span className="font-label-caps text-headline-md font-bold text-[var(--color-primary)] opacity-30 block mb-6">03</span>
                <h3 className="font-label-caps text-label-caps text-white font-bold mb-4">Content Architecture</h3>
                <p className="font-body-md text-body-md text-[var(--color-on-surface-variant)] flex-grow">We turn attention into engagement.</p>
              </div>
            </div>
            {/* Card 04 */}
            <div className="reveal h-full" style={{ transitionDelay: '300ms' }}>
              <div className="p-8 bg-[var(--color-surface)] border border-[var(--color-outline-variant)] gold-glow transition-all duration-500 floating-vertical flex flex-col h-full" style={{ animationDelay: '-3.6s' }}>
                <span className="font-label-caps text-headline-md font-bold text-[var(--color-primary)] opacity-30 block mb-6">04</span>
                <h3 className="font-label-caps text-label-caps text-white font-bold mb-4">Digital Experiences</h3>
                <p className="font-body-md text-body-md text-[var(--color-on-surface-variant)] flex-grow">We build websites that move people to action.</p>
              </div>
            </div>
            {/* Card 05 */}
            <div className="reveal h-full" style={{ transitionDelay: '400ms' }}>
              <div className="p-8 bg-[var(--color-surface)] border border-[var(--color-outline-variant)] gold-glow transition-all duration-500 floating-vertical flex flex-col h-full" style={{ animationDelay: '-4.8s' }}>
                <span className="font-label-caps text-headline-md font-bold text-[var(--color-primary)] opacity-30 block mb-6">05</span>
                <h3 className="font-label-caps text-label-caps text-white font-bold mb-4">Performance Marketing</h3>
                <p className="font-body-md text-body-md text-[var(--color-on-surface-variant)] flex-grow">We transform visibility into measurable growth.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Closing Manifesto */}
      <section className="relative py-24 md:py-48 overflow-hidden bg-[var(--color-background)] w-full">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-background)] via-transparent to-[var(--color-background)] z-10"></div>
          <div 
            className="w-full h-full bg-cover bg-center opacity-40" 
            style={{ backgroundImage: "url('/about_manifesto_bg.png')" }}
          ></div>
        </div>
        <div className="relative z-20 px-[var(--spacing-margin-mobile)] md:px-[var(--spacing-margin-desktop)] max-w-5xl mx-auto text-center">
          <h2 className="font-display-lg text-4xl md:text-display-lg font-bold text-white mb-6 reveal italic">"STOP CHASING THE MARKET. BECOME THE STANDARD."</h2>
          <p className="font-body-lg text-lg md:text-body-lg text-[var(--color-on-surface-variant)] mb-8 md:mb-12 reveal" style={{ transitionDelay: '150ms' }}>
            The era of merely competing is over. The future belongs to brands brave enough to build something unforgettable.
          </p>
          <div className="reveal px-4 sm:px-0" style={{ transitionDelay: '300ms' }}>
            <button className="bg-[var(--color-primary)] w-full sm:w-auto px-8 sm:px-16 py-4 sm:py-6 font-label-caps text-label-caps font-bold uppercase tracking-[0.15em] text-[var(--color-on-primary)] hover:bg-[var(--color-primary-container)] transition-all duration-300 text-lg">
              Start Your Brand Journey
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
