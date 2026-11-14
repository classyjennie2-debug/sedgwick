import type { ReactNode } from "react";
import Reveal from "./Reveal";

type Props = {
  eyebrow: string;
  title: ReactNode;
  desc?: string;
  align?: "left" | "center";
};

export default function SectionHeading({ eyebrow, title, desc, align = "left" }: Props) {
  return (
    <Reveal className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      <span
        className={
          align === "center"
            ? "inline-flex items-center gap-3 text-xs font-semibold tracking-[0.3em] text-gold-500 uppercase"
            : "inline-flex items-center gap-3 text-xs font-semibold tracking-[0.3em] text-gold-500 uppercase"
        }
      >
        <span className="h-px w-8 bg-gold-500" />
        {eyebrow}
      </span>
      <h2 className="mt-4 text-4xl leading-[0.95] sm:text-5xl lg:text-6xl">{title}</h2>
      {desc && <p className="mt-5 text-base leading-relaxed text-steel-500 sm:text-lg">{desc}</p>}
    </Reveal>
  );
}