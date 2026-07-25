"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { NavBar } from "@/components/NavBar";
import { Footer } from "@/components/Footer";

const EXPO_EASE = [0.16, 1, 0.3, 1] as const;

// Cleaned data extracted from previous JSX implementation
const servicesData = [
  {
    id: "brand-strategy",
    title: "Brand Strategy",
    copy: "A great brand isn't just seen. It's remembered.",
    details: [
      { title: "01 Brand Positioning", eyebrow: "Find what makes your brand different.", desc: "Together, we'll define what sets your business apart, giving your customers a clear reason to choose you over everyone else." },
      { title: "02 Audience Research", eyebrow: "Know who you're talking to.", desc: "We uncover your audience's needs, challenges, and motivations so every decision speaks directly to the people you want to reach." },
      { title: "03 Competitor Analysis", eyebrow: "Learn from the market. Stand apart from it.", desc: "We study your competitors to identify opportunities, uncover gaps, and position your brand where it can truly stand out." },
      { title: "04 Brand Messaging", eyebrow: "Say the right thing to the right people.", desc: "From your brand story to your key messages, we create communication that is clear, consistent, and memorable across every platform." },
      { title: "05 Voice & Tone", eyebrow: "Give your brand a personality people recognize.", desc: "Whether your brand is bold, playful, premium, or approachable, we define a voice that stays consistent across every interaction." },
      { title: "06 Visual Identity", eyebrow: "Design with purpose.", desc: "We create a visual direction that reflects your values, builds trust, and makes your brand instantly recognizable." },
      { title: "07 Customer Experience", eyebrow: "Every interaction shapes your brand.", desc: "From the first click to the final conversation, we help create experiences that feel seamless, memorable, and worth coming back to." },
      { title: "08 Growth Strategy", eyebrow: "Build for today. Plan for tomorrow.", desc: "We develop practical strategies that help your brand grow with clarity, adapt to change, and achieve long term success." }
    ]
  },
  {
    id: "performance-marketing",
    title: "Performance Marketing",
    copy: "Strategic campaigns that help you reach the right audience, generate quality leads, and grow your business.",
    details: [
      { title: "01 Multi Platform Campaigns", eyebrow: "Reach your audience wherever they are.", desc: "We create connected campaigns across Google, Meta, LinkedIn, YouTube, and more, so every platform works together to build awareness, generate leads, and drive consistent growth." },
      { title: "02 Landing Pages That Convert", eyebrow: "Don't just attract visitors. Turn them into customers.", desc: "We design and optimize landing pages that make it easy for people to take action, improving conversions and getting more value from every marketing campaign." },
      { title: "03 Smarter Growth Strategies", eyebrow: "Grow today without losing tomorrow.", desc: "We focus on attracting customers who bring long term value, helping your business grow sustainably instead of chasing short term wins." }
    ]
  },
  {
    id: "social-media",
    title: "Social Media",
    copy: "Social media strategies that build trust, spark engagement, and turn followers into loyal customers.",
    details: [
      { title: "01 Content Strategy & Creation", eyebrow: "Content with purpose, not just presence.", desc: "We create content that reflects your brand, captures attention, and gives your audience a reason to engage. Every post is planned with strategy, creativity, and consistency." },
      { title: "02 Community Management", eyebrow: "Conversations build stronger brands.", desc: "We help you build genuine relationships with your audience through meaningful interactions, active engagement, and a community that keeps coming back." },
      { title: "03 Creator Collaborations", eyebrow: "Partner with voices your audience already trusts.", desc: "We connect your brand with creators who genuinely align with your values, helping you reach new audiences through authentic and impactful collaborations." }
    ]
  },
  {
    id: "content-creation",
    title: "Content Creation",
    copy: "Content that tells your story, builds trust, and gives people a reason to choose your brand.",
    details: [
      { title: "01 Visual Storytelling", eyebrow: "Show, don't just tell.", desc: "We produce high-quality visual content that captures your brand's essence and communicates your value instantly." },
      { title: "02 Video Production", eyebrow: "Motion that moves people.", desc: "From brand films to short-form social videos, we create motion content designed for engagement and impact." },
      { title: "03 Copywriting", eyebrow: "Words that work.", desc: "We write compelling copy that speaks directly to your audience's needs while maintaining your unique brand voice." }
    ]
  },
  {
    id: "seo",
    title: "SEO",
    copy: "SEO strategies that increase visibility, drive qualified traffic, and deliver long term growth.",
    details: [
      { title: "01 Technical SEO", eyebrow: "Build a website Google loves.", desc: "We optimize your website's speed, structure, and technical foundation so search engines can understand it better and customers can find it more easily." },
      { title: "02 SEO Content Strategy", eyebrow: "Create content that keeps working for you.", desc: "We build SEO focused content that answers real customer questions, attracts qualified traffic, and helps your business grow organically over time." },
      { title: "03 Content That Builds Authority", eyebrow: "Become the trusted voice in your industry.", desc: "We create valuable articles, guides, and resources that answer customer questions, build trust, and improve your visibility on search engines." }
    ]
  },
  {
    id: "web-development",
    title: "Web Development",
    copy: "Fast, modern websites designed to look great, perform flawlessly, and grow with your business.",
    details: [
      { title: "01 Conversion Focused Design", eyebrow: "Designed with your customers in mind.", desc: "Every page is crafted to guide visitors naturally, making it easier for them to explore, engage, and take action. Beautiful design means little if it doesn't deliver results." },
      { title: "02 Fast & Scalable Development", eyebrow: "Built for speed today and growth tomorrow.", desc: "We build fast, secure, and flexible websites that load quickly, perform reliably, and are ready to grow alongside your business." },
      { title: "03 Interactive Experiences", eyebrow: "Small details. Big impact.", desc: "Thoughtful animations and subtle interactions make your website feel more engaging, intuitive, and memorable while creating a smoother experience for every visitor." }
    ]
  }
];

export default function ServicesPage() {
  return (
    <main className="flex min-h-screen flex-col bg-[#0A0A0A] text-white selection:bg-[#C9A84C] selection:text-black">
      <NavBar />

      {/* ── 1. Hero ───────────────────────────────────────────────────────────── */}
      <header className="relative pt-32 pb-24 md:pt-48 md:pb-32 px-6 md:px-12 lg:px-[80px] max-w-[1440px] mx-auto w-full flex flex-col justify-center min-h-[60vh] md:min-h-[70vh]">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: EXPO_EASE }}
          className="font-sans text-[11px] md:text-[12px] font-bold uppercase tracking-[0.4em] text-[#C9A84C] mb-8"
        >
          Our Services
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: EXPO_EASE }}
          className="font-serif font-bold text-[clamp(48px,7vw,96px)] leading-[1.08] tracking-[-0.03em] mb-12 max-w-4xl"
        >
          Everything Works Together.
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: EXPO_EASE }}
          className="max-w-2xl"
        >
          <p className="font-sans font-light text-[17px] md:text-[19px] leading-[2] text-[#b0a693]">
            We architect scalable systems designed for elite performance. Every detail is meticulously crafted to ensure your brand stands out in the most competitive markets.
          </p>
        </motion.div>
      </header>

      {/* ── 2. Services List (Editorial 2-Column Deep Dives) ───────────────────── */}
      <div className="w-full bg-[#050505] border-t border-white/5 relative">
        {servicesData.map((service, index) => (
          <section key={service.id} className="py-24 md:py-32 px-6 md:px-12 lg:px-[80px] max-w-[1440px] mx-auto w-full border-b border-white/5 last:border-0 relative">
            <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
              
              {/* Left Column: Sticky Title & Core Copy */}
              <div className="lg:w-1/3">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, ease: EXPO_EASE }}
                  className="lg:sticky lg:top-32"
                >
                  <span className="font-sans text-[11px] font-bold text-white/20 mb-6 block">0{index + 1}</span>
                  <h2 className="font-serif text-[40px] md:text-[56px] font-semibold leading-[1.1] tracking-tighter mb-8">
                    {service.title}
                  </h2>
                  <p className="font-sans font-light text-[17px] leading-[2] text-[#C9A84C] max-w-md">
                    {service.copy}
                  </p>
                </motion.div>
              </div>

              {/* Right Column: Detailed Capabilities */}
              <div className="lg:w-2/3">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
                  {service.details.map((detail, dIndex) => (
                    <motion.div
                      key={dIndex}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 0.8, delay: (dIndex % 2) * 0.1, ease: EXPO_EASE }}
                      className="group"
                    >
                      <h3 className="font-serif text-[24px] text-white font-semibold mb-3 group-hover:text-[#C9A84C] transition-colors duration-500">
                        {detail.title}
                      </h3>
                      <span className="font-sans text-[10px] font-bold uppercase tracking-[0.2em] text-[#C9A84C]/60 mb-4 block">
                        &quot;{detail.eyebrow}&quot;
                      </span>
                      <p className="font-sans font-light text-[15px] leading-[1.8] text-[#b0a693]">
                        {detail.desc}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>

            </div>
          </section>
        ))}
      </div>

      {/* ── 3. Final CTA ──────────────────────────────────────────────────────── */}
      <section className="py-24 border-t border-white/5 bg-[#0A0A0A] text-center px-6 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[radial-gradient(circle,_rgba(201,168,76,0.05)_0%,_transparent_70%)] pointer-events-none" />
        
        <div className="max-w-3xl mx-auto flex flex-col items-center relative z-10">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: EXPO_EASE }}
            className="font-sans text-[11px] font-bold uppercase tracking-[0.4em] text-[#C9A84C] mb-8"
          >
            Ready To Start?
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: 0.1, ease: EXPO_EASE }}
            className="font-serif text-[40px] md:text-[56px] font-semibold mb-12 tracking-tighter"
          >
            Build Your Growth System
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: EXPO_EASE }}
          >
            <Link href="/contact">
              <button className="font-label-caps text-[11px] tracking-[0.2em] uppercase bg-[#C9A84C] text-black px-12 py-5 font-bold relative group overflow-hidden">
                <span className="relative z-10">Book A Call</span>
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
