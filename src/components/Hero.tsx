import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, ChevronDown, ShieldCheck, Star } from "lucide-react";
import { COMPANY } from "../data";

export default function Hero() {
  const reduce = useReducedMotion();
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 700], [0, reduce ? 0 : 150]);
  const opacity = useTransform(scrollY, [0, 520], [1, reduce ? 1 : 0]);

  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
  };
  const item = {
    hidden: reduce ? { opacity: 0 } : { opacity: 0, y: 34 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const },
    },
  };

  return (
    <section id="home" className="relative flex min-h-[100svh] items-center overflow-hidden pt-24 pb-16">
      <motion.div style={{ y }} className="absolute inset-0 z-0">
        <img
          src="/img/hero.jpg"
          alt="Tower cranes above an active high-rise construction site"
          className="h-[110%] w-full object-cover"
          fetchPriority="high"
        />
      </motion.div>

      <div className="absolute inset-0 z-10 bg-gradient-to-r from-ink-950 via-ink-950/85 to-ink-950/30" />
      <div className="grid-lines absolute inset-0 z-10 opacity-70 [mask-image:radial-gradient(ellipse_at_center,black_25%,transparent_75%)]" />

      <div className="relative z-20 mx-auto w-full max-w-7xl px-6">
        <motion.div variants={container} initial="hidden" animate="show" className="max-w-3xl">
          <motion.p
            variants={item}
            className="inline-flex items-center gap-3 rounded-full border border-gold-500/30 bg-gold-500/10 px-4 py-2 text-xs font-semibold tracking-[0.25em] text-gold-400 uppercase"
          >
            <Star size={14} className="fill-gold-400" />
            {COMPANY.tagline}
          </motion.p>

          <motion.h1 variants={item} className="mt-6 text-5xl leading-[0.95] sm:text-7xl lg:text-8xl">
            We Build Florida&rsquo;s <span className="text-gold-500">Commercial</span> Future
          </motion.h1>

          <motion.p variants={item} className="mt-6 max-w-xl text-base leading-relaxed text-steel-400 sm:text-lg">
            From waterfront towers in Miami to distribution hubs in Lakeland, Sedgwick Construction
            delivers complex commercial, industrial and residential projects across Florida — on
            schedule, on budget, built to hurricane code.
          </motion.p>

          <motion.div variants={item} className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-full bg-gold-500 px-7 py-4 font-display text-base font-bold tracking-[0.15em] text-ink-950 uppercase transition hover:bg-gold-400 hover:shadow-[0_0_40px_-8px_#F5A01C]"
            >
              View Our Work
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 px-7 py-4 font-display text-base font-bold tracking-[0.15em] text-white uppercase transition hover:border-gold-500 hover:text-gold-500"
            >
              Get a Free Estimate
            </a>
          </motion.div>

          <motion.dl variants={item} className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-3 text-sm text-steel-500">
            <div className="flex items-center gap-2">
              <ShieldCheck size={16} className="text-gold-500" />
              Licensed & Insured — {COMPANY.license}
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck size={16} className="text-gold-500" />
              EMR 0.72 Safety Record
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck size={16} className="text-gold-500" />
              Serving Tampa, Miami, Orlando & Beyond
            </div>
          </motion.dl>
        </motion.div>
      </div>

      <motion.div style={{ opacity }} className="absolute bottom-8 left-1/2 z-20 hidden -translate-x-1/2 md:block">
        <motion.a
          href="#services"
          animate={reduce ? {} : { y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2 text-steel-500 transition-colors hover:text-gold-500"
        >
          <span className="text-[0.65rem] tracking-[0.3em] uppercase">Scroll</span>
          <ChevronDown size={18} />
        </motion.a>
      </motion.div>
    </section>
  );
}