import { Diamond } from "lucide-react";
import { MARQUEE_ITEMS } from "../data";

export default function Marquee() {
  return (
    <div className="overflow-hidden border-y border-white/10 bg-ink-900 py-5">
      <div className="flex w-max animate-marquee">
        {[0, 1].map((dup) => (
          <div key={dup} className="flex items-center" aria-hidden={dup === 1 ? "true" : undefined}>
            {MARQUEE_ITEMS.map((item) => (
              <span
                key={`${dup}-${item}`}
                className="flex items-center gap-8 px-8 font-display text-lg font-semibold tracking-[0.2em] text-steel-500 uppercase"
              >
                {item}
                <Diamond size={9} className="text-gold-500" />
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}