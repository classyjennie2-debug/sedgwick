import { ArrowRight } from "lucide-react";
import { ADVANTAGES, COMPANY } from "../data";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function About() {
  return (
    <section id="about" className="relative scroll-mt-24 overflow-hidden py-24 lg:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2 lg:gap-20">
        <Reveal className="relative">
          <img
            src="/img/workers.jpg"
            alt="Sedgwick Construction ironworkers welding structural steel on site"
            className="aspect-4/5 w-full rounded-2xl border border-white/10 object-cover"
            loading="lazy"
          />

          <img
            src="/img/florida.jpg"
            alt="Florida coastal skyline at sunrise"
            className="absolute -top-8 -left-8 hidden w-44 rotate-[-6deg] rounded-xl border-4 border-ink-950 object-cover shadow-2xl lg:block"
            loading="lazy"
          />

          <div className="animate-float absolute -right-4 bottom-8 hidden rounded-2xl border border-gold-500/30 bg-ink-900/95 p-6 shadow-2xl backdrop-blur sm:block">
            <p className="font-display text-5xl font-bold text-gold-500">
              {new Date().getFullYear() - COMPANY.founded}
            </p>
            <p className="mt-1 text-xs leading-relaxed tracking-[0.2em] text-steel-400 uppercase">
              Years building
              <br />
              Florida
            </p>
          </div>
        </Reveal>

        <div>
          <SectionHeading
            eyebrow="Who We Are"
            title={
              <>
                Family-owned since 1998. <span className="text-gold-500">Florida-built.</span>
              </>
            }
            desc={`${COMPANY.name} started with one truck, one crew and a simple promise: do the job right, document everything, and treat every client's budget like our own. Twenty-seven years later we're one of Florida's most trusted commercial contractors — still family-run, still on site.`}
          />

          <Reveal delay={0.15}>
            <p className="mt-6 leading-relaxed text-steel-500">
              Our self-performing concrete and steel crews, in-house BIM team and full-time
              superintendents let us control quality, schedule and cost without finger-pointing. We
              hold ourselves to a 0.72 EMR and a 3-year workmanship warranty on every project.
            </p>

            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {ADVANTAGES.map((a) => (
                <li key={a} className="flex items-start gap-3 rounded-xl border border-white/10 bg-ink-900 p-4 text-sm text-steel-400">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gold-500/15 text-[0.7rem] font-bold text-gold-500">
                    ✓
                  </span>
                  {a}
                </li>
              ))}
            </ul>

            <div className="mt-10 flex flex-wrap items-center gap-6">
              <a
                href="#contact"
                className="group inline-flex items-center gap-2 font-display text-lg font-bold tracking-[0.15em] text-gold-500 uppercase"
              >
                Start your project
                <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
              </a>
              <span className="text-sm text-steel-600">{COMPANY.license} · Bonded & Insured</span>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}