import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import { TESTIMONIALS } from "../data";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const variants = {
  enter: (dir: number) => ({ opacity: 0, x: dir > 0 ? 60 : -60 }),
  center: { opacity: 1, x: 0 },
  exit: (dir: number) => ({ opacity: 0, x: dir > 0 ? -60 : 60 }),
};

export default function Testimonials() {
  const reduce = useReducedMotion();
  const [index, setIndex] = useState(0);
  const [dir, setDir] = useState(1);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const t = window.setInterval(() => {
      setDir(1);
      setIndex((i) => (i + 1) % TESTIMONIALS.length);
    }, 6500);
    return () => window.clearInterval(t);
  }, [paused]);

  const go = (d: number) => {
    setDir(d);
    setIndex((i) => (i + d + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  return (
    <section id="reviews" className="scroll-mt-24 border-t border-white/10 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="Client Reviews"
          title={
            <>
              Trusted by the Southeast&rsquo;s <span className="text-gold-500">builders of record</span>
            </>
          }
          align="center"
        />

        <Reveal delay={0.1}>
          <div
            className="relative mx-auto mt-14 max-w-3xl text-center"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          >
            <Quote size={44} className="mx-auto text-gold-500/40" strokeWidth={1.5} />

            <div className="relative mt-6 min-h-60 sm:min-h-52">
              <AnimatePresence mode="wait" custom={dir}>
                <motion.figure
                  key={index}
                  custom={dir}
                  variants={variants}
                  initial={reduce ? { opacity: 0 } : "enter"}
                  animate="center"
                  exit={reduce ? { opacity: 0 } : "exit"}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute inset-0"
                >
                  <div className="flex justify-center gap-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} size={16} className="fill-gold-500 text-gold-500" />
                    ))}
                  </div>
                  <blockquote className="mt-6 font-display text-2xl leading-snug text-white sm:text-3xl">
                    &ldquo;{TESTIMONIALS[index].quote}&rdquo;
                  </blockquote>
                  <figcaption className="mt-8">
                    <span className="block font-semibold text-gold-500">{TESTIMONIALS[index].name}</span>
                    <span className="mt-1 block text-sm text-steel-500">
                      {TESTIMONIALS[index].role} · {TESTIMONIALS[index].company}
                    </span>
                  </figcaption>
                </motion.figure>
              </AnimatePresence>
            </div>

            <div className="mt-8 flex items-center justify-center gap-6">
              <button
                type="button"
                onClick={() => go(-1)}
                aria-label="Previous review"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-steel-400 transition hover:border-gold-500 hover:text-gold-500"
              >
                <ChevronLeft size={20} />
              </button>

              <div className="flex gap-2.5">
                {TESTIMONIALS.map((t, i) => (
                  <button
                    key={t.name}
                    type="button"
                    onClick={() => {
                      setDir(i > index ? 1 : -1);
                      setIndex(i);
                    }}
                    aria-label={`Go to review ${i + 1}`}
                    className={`h-2.5 rounded-full transition-all duration-300 ${
                      i === index ? "w-7 bg-gold-500" : "w-2.5 bg-ink-600 hover:bg-steel-600"
                    }`}
                  />
                ))}
              </div>

              <button
                type="button"
                onClick={() => go(1)}
                aria-label="Next review"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-steel-400 transition hover:border-gold-500 hover:text-gold-500"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}