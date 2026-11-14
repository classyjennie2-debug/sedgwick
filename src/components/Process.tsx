import { motion } from "framer-motion";
import { PROCESS } from "../data";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Process() {
  return (
    <section id="process" className="scroll-mt-24 border-t border-white/10 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="How We Work"
          title={
            <>
              A process that <span className="text-gold-500">removes surprises</span>
            </>
          }
          desc="Every Sedgwick project runs on the same four-phase system — designed to keep you informed and in control from first walk-through to final warranty."
          align="center"
        />

        <div className="relative mt-16 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="absolute top-7 left-0 hidden h-px w-full origin-left bg-gradient-to-r from-gold-500/60 via-gold-500/20 to-transparent lg:block"
          />

          {PROCESS.map((p, i) => (
            <Reveal key={p.step} delay={i * 0.12}>
              <div className="relative">
                <div className="flex h-14 w-14 items-center justify-center rounded-full border-2 border-gold-500 bg-ink-950 font-display text-lg font-bold text-gold-500">
                  {p.step}
                </div>
                <h3 className="mt-6 text-2xl">{p.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-steel-500">{p.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}