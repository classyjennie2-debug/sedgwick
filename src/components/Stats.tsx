import { STATS } from "../data";
import CountUp from "./CountUp";
import Reveal from "./Reveal";

export default function Stats() {
  return (
    <section id="stats" className="scroll-mt-24 border-y border-white/10 bg-ink-900 py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-2 gap-y-10 lg:grid-cols-4">
          {STATS.map((s, i) => (
            <Reveal
              key={s.label}
              delay={i * 0.1}
              className="px-4 text-center"
            >
              <p className="font-display text-5xl font-bold text-gold-500 lg:text-6xl">
                <CountUp value={s.value} decimals={s.decimals ?? 0} suffix={s.suffix} />
              </p>
              <p className="mt-3 text-xs leading-relaxed tracking-[0.2em] text-steel-500 uppercase">
                {s.label}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}