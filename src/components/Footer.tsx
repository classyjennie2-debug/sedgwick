import { ArrowUp, Facebook, Instagram, Linkedin } from "lucide-react";
import { COMPANY, SERVICES } from "../data";
import { Logo } from "./Navbar";

const SOCIALS = [
  { icon: Facebook, label: "Facebook", href: "#" },
  { icon: Instagram, label: "Instagram", href: "#" },
  { icon: Linkedin, label: "LinkedIn", href: "#" },
];

const COMPANY_LINKS = [
  { label: "About Us", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Our Process", href: "#process" },
  { label: "Reviews", href: "#reviews" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-ink-900">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Logo />
            <p className="mt-6 max-w-xs text-sm leading-relaxed text-steel-500">
              A Tampa-based general contractor building commercial, industrial, healthcare and
              residential projects across the Southeast since {COMPANY.founded}.
            </p>
            <div className="mt-6 flex gap-3">
              {SOCIALS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-steel-400 transition hover:border-gold-500 hover:text-gold-500"
                >
                  <s.icon size={17} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-sm tracking-[0.25em] text-white">Services</h4>
            <ul className="mt-6 space-y-3">
              {SERVICES.map((s) => (
                <li key={s.title}>
                  <a href="#services" className="text-sm text-steel-500 transition-colors hover:text-gold-500">
                    {s.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm tracking-[0.25em] text-white">Company</h4>
            <ul className="mt-6 space-y-3">
              {COMPANY_LINKS.map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="text-sm text-steel-500 transition-colors hover:text-gold-500">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm tracking-[0.25em] text-white">Contact</h4>
            <ul className="mt-6 space-y-3 text-sm text-steel-500">
              <li>
                <a href={COMPANY.phoneHref} className="transition-colors hover:text-gold-500">
                  {COMPANY.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${COMPANY.email}`} className="transition-colors hover:text-gold-500">
                  {COMPANY.email}
                </a>
              </li>
              <li>
                {COMPANY.address}
                <br />
                {COMPANY.city}, {COMPANY.state} {COMPANY.zip}
              </li>
              <li className="pt-2 text-steel-600">{COMPANY.hours}</li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-6 border-t border-white/10 pt-8 sm:flex-row">
          <p className="text-xs text-steel-600">
            © {year} {COMPANY.legalName}. {COMPANY.license}. All rights reserved.
          </p>
          <a
            href="#home"
            className="group inline-flex items-center gap-2 text-xs tracking-[0.2em] text-steel-500 uppercase transition-colors hover:text-gold-500"
          >
            Back to top
            <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 transition-colors group-hover:border-gold-500">
              <ArrowUp size={15} />
            </span>
          </a>
        </div>
      </div>
    </footer>
  );
}