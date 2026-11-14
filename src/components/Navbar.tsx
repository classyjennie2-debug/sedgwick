import { useEffect, useState } from "react";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion";
import { ArrowUpRight, Menu, Phone, X } from "lucide-react";
import { COMPANY, NAV_LINKS } from "../data";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <a href="#home" className={`flex items-center gap-3 ${className}`} aria-label="Sedgwick Construction — home">
      <svg viewBox="0 0 40 40" className="h-9 w-9 shrink-0" aria-hidden="true">
        <rect
          x="7"
          y="7"
          width="26"
          height="26"
          rx="5"
          transform="rotate(45 20 20)"
          fill="#0A1118"
          stroke="#F5A01C"
          strokeWidth="2.5"
        />
        <text
          x="20"
          y="26.5"
          textAnchor="middle"
          fontFamily="'Barlow Condensed', sans-serif"
          fontSize="15"
          fontWeight="700"
          fill="#F5A01C"
        >
          S
        </text>
      </svg>
      <span className="font-display text-xl leading-none font-bold tracking-[0.2em] text-white uppercase">
        Sedgwick
        <span className="block text-[0.6rem] font-medium tracking-[0.35em] text-gold-500">Construction</span>
      </span>
    </a>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (v) => setScrolled(v > 32));

  useEffect(() => {
    const ids = ["home", ...NAV_LINKS.map((l) => l.href.slice(1))];
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: "-35% 0px -55% 0px", threshold: [0.05, 0.3, 0.6] }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "border-b border-white/10 bg-ink-950/85 backdrop-blur-xl" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        <Logo />

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
          {NAV_LINKS.map((link) => {
            const isActive = active === link.href.slice(1);
            return (
              <a
                key={link.href}
                href={link.href}
                className={`relative font-display text-sm font-semibold tracking-[0.15em] uppercase transition-colors ${
                  isActive ? "text-gold-500" : "text-steel-400 hover:text-white"
                }`}
              >
                {link.label}
                {isActive && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute -bottom-1.5 left-0 h-0.5 w-full bg-gold-500"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </a>
            );
          })}
        </nav>

        <div className="hidden items-center gap-5 lg:flex">
          <a
            href={COMPANY.phoneHref}
            className="flex items-center gap-2 text-sm font-medium text-white transition-colors hover:text-gold-500"
          >
            <Phone size={16} />
            {COMPANY.phone}
          </a>
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 rounded-full bg-gold-500 px-5 py-2.5 font-display text-sm font-bold tracking-[0.15em] text-ink-950 uppercase transition hover:bg-gold-400"
          >
            Get a Quote
            <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>

        <button
          onClick={() => setOpen(true)}
          className="text-white transition-colors hover:text-gold-500 lg:hidden"
          aria-label="Open menu"
        >
          <Menu size={28} />
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 bg-ink-950/97 backdrop-blur-lg lg:hidden"
          >
            <div className="flex h-20 items-center justify-between px-6">
              <Logo />
              <button
                onClick={() => setOpen(false)}
                className="text-white transition-colors hover:text-gold-500"
                aria-label="Close menu"
              >
                <X size={28} />
              </button>
            </div>

            <motion.nav
              initial="hidden"
              animate="show"
              className="flex flex-col px-6 pt-8"
              variants={{
                hidden: {},
                show: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
              }}
              aria-label="Mobile"
            >
              {NAV_LINKS.map((link) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  variants={{
                    hidden: { opacity: 0, x: -28 },
                    show: { opacity: 1, x: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
                  }}
                  className="border-b border-white/10 py-4 font-display text-3xl font-semibold tracking-wide text-white uppercase"
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.a
                href={COMPANY.phoneHref}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
                }}
                className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-gold-500 px-6 py-4 font-display text-lg font-bold tracking-[0.15em] text-ink-950 uppercase"
              >
                <Phone size={18} />
                {COMPANY.phone}
              </motion.a>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}