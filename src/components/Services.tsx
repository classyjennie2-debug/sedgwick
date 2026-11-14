import { motion, useReducedMotion } from "framer-motion";
import { Check } from "lucide-react";
import { SERVICES } from "../data";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Services() {
  const reduce = useReducedMotion();
  return (
    <section id="services" className="relative scroll-mt-24 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="What We Do"
          title={
            <>
              Full-service construction, <span className="text-gold-500">end to end</span>
            </>
          }
          desc="Six divisions, one accountable team. Whether it's a ground-up tower or a tenant improvement, you get the same Sedgwick process — engineered schedules, transparent budgets and crews that treat your site like their own."
        />

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.08} className="h-full">
              <motion.article
                whileHover={reduce ? undefined : { y: -8 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="group flex h-full flex-col rounded-2xl border border-white/10 bg-ink-900 p-8 transition-colors duration-300 hover:border-gold-500/50 hover:bg-ink-800"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gold-500/10 text-gold-500 transition-colors duration-300 group-hover:bg-gold-500 group-hover:text-ink-950">
                  <s.icon size={26} strokeWidth={1.8} />
                </div>
                <h3 className="mt-6 text-2xl">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-steel-500">{s.desc}</p>
                <ul className="mt-6 space-y-2 border-t border-white/10 pt-6">
                  {s.points.map((p) => (
                    <li key={p} className="flex items-center gap-3 text-sm text-steel-400">
                      <Check size={14} className="shrink-0 text-gold-500" />
                      {p}
                    </li>
                  ))}
                </ul>
              </motion.article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}