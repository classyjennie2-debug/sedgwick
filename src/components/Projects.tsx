import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { PROJECTS, PROJECT_FILTERS } from "../data";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Projects() {
  const [filter, setFilter] = useState("All");
  const visible = filter === "All" ? PROJECTS : PROJECTS.filter((p) => p.category === filter);

  return (
    <section id="projects" className="scroll-mt-24 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="Selected Work"
          title={
            <>
              Projects that <span className="text-gold-500">raise the skyline</span>
            </>
          }
          desc="Commercial towers, coastal communities and industrial facilities delivered across the Southeast. A representative sample of the 480+ projects we've completed since 1998."
        />

        <motion.div layout className="mt-12 flex flex-wrap gap-3">
          {PROJECT_FILTERS.map((f) => (
            <button
              key={f}
              type="button"
              onClick={() => setFilter(f)}
              aria-pressed={filter === f}
              className={`relative rounded-full px-5 py-2 text-xs font-semibold tracking-[0.2em] uppercase transition-colors duration-300 ${
                filter === f ? "text-ink-950" : "border border-white/15 text-steel-400 hover:border-gold-500/50 hover:text-white"
              }`}
            >
              {filter === f && (
                <motion.span
                  layoutId="filter-pill"
                  className="absolute inset-0 rounded-full bg-gold-500"
                  transition={{ type: "spring", stiffness: 400, damping: 35 }}
                />
              )}
              <span className="relative">{f}</span>
            </button>
          ))}
        </motion.div>

        <motion.div layout className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {visible.map((p) => (
              <motion.article
                key={p.title}
                layout
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.92 }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-ink-900"
              >
                <img
                  src={p.image}
                  alt={`${p.title} — ${p.location}`}
                  className="h-80 w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/40 to-transparent" />

                <span className="absolute top-4 left-4 rounded-full bg-gold-500 px-3 py-1 text-[0.65rem] font-bold tracking-[0.2em] text-ink-950 uppercase">
                  {p.category}
                </span>

                <div className="absolute inset-x-0 bottom-0 p-6">
                  <p className="text-xs tracking-[0.2em] text-gold-500 uppercase">
                    {p.location} · {p.year}
                  </p>
                  <h3 className="mt-2 flex items-center gap-2 text-2xl">
                    {p.title}
                    <ArrowUpRight
                      size={18}
                      className="text-gold-500 opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100"
                    />
                  </h3>
                  <p className="mt-2 max-h-0 overflow-hidden text-sm leading-relaxed text-steel-400 opacity-0 transition-all duration-500 group-hover:max-h-28 group-hover:opacity-100">
                    {p.desc}
                  </p>
                  <p className="mt-3 text-xs tracking-wide text-steel-600">{p.scope}</p>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>

        <Reveal delay={0.2} className="mt-14 text-center">
          <p className="text-steel-500">
            Want to see how these were built?{" "}
            <a href="#contact" className="font-semibold text-gold-500 underline-offset-4 hover:underline">
              Request our full project portfolio
            </a>
            .
          </p>
        </Reveal>
      </div>
    </section>
  );
}