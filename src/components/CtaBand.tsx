import { ArrowRight, Phone } from "lucide-react";
import { COMPANY } from "../data";
import Reveal from "./Reveal";

export default function CtaBand() {
  return (
    <section className="relative overflow-hidden">
      <img
        src="/img/florida.jpg"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-ink-950 via-ink-950/85 to-ink-950/60" />

      <div className="relative mx-auto max-w-7xl px-6 py-24 lg:py-28">
        <Reveal className="max-w-2xl">
          <p className="inline-flex items-center gap-3 text-xs font-semibold tracking-[0.3em] text-gold-500 uppercase">
            <span className="h-px w-8 bg-gold-500" />
            Ready When You Are
          </p>
          <h2 className="mt-4 text-4xl leading-[0.95] sm:text-5xl lg:text-6xl">
            Let&rsquo;s build something <span className="text-gold-500">that lasts</span>
          </h2>
          <p className="mt-5 text-base leading-relaxed text-steel-400 sm:text-lg">
            Tell us about your project and get a straight answer on feasibility, budget range and
            timeline — usually within two business days.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-full bg-gold-500 px-7 py-4 font-display text-base font-bold tracking-[0.15em] text-ink-950 uppercase transition hover:bg-gold-400 hover:shadow-[0_0_40px_-8px_#F5A01C]"
            >
              Get a Free Estimate
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href={COMPANY.phoneHref}
              className="inline-flex items-center gap-2 rounded-full border border-white/25 px-7 py-4 font-display text-base font-bold tracking-[0.15em] text-white uppercase transition hover:border-gold-500 hover:text-gold-500"
            >
              <Phone size={16} />
              {COMPANY.phone}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}