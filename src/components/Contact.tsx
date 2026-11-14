import { useState } from "react";
import type { ChangeEvent, FormEvent } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CheckCircle2, Clock, Mail, MapPin, Phone } from "lucide-react";
import { COMPANY, SERVICE_AREAS } from "../data";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

type FormState = {
  name: string;
  email: string;
  phone: string;
  type: string;
  message: string;
};

const INITIAL: FormState = {
  name: "",
  email: "",
  phone: "",
  type: "Commercial Construction",
  message: "",
};

const PROJECT_TYPES = [
  "Commercial Construction",
  "Design-Build",
  "Residential / Custom Home",
  "Industrial & Logistics",
  "Renovation / Tenant Improvement",
  "Construction Management",
  "Other",
];

const FIELD =
  "w-full rounded-xl border border-white/15 bg-ink-900 px-4 py-3 text-sm text-white placeholder:text-steel-600 outline-none transition focus:border-gold-500 focus:ring-1 focus:ring-gold-500";

export default function Contact() {
  const [form, setForm] = useState<FormState>(INITIAL);
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  const set =
    (key: keyof FormState) => (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
      setForm((prev) => ({ ...prev, [key]: e.target.value }));

  const submit = (e: FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    window.setTimeout(() => setStatus("sent"), 900);
  };

  return (
    <section id="contact" className="scroll-mt-24 border-t border-white/10 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-14 lg:grid-cols-2 lg:gap-20">
          <div>
            <SectionHeading
              eyebrow="Get in Touch"
              title={
                <>
                  Start your <span className="text-gold-500">build</span>
                </>
              }
              desc="Send us the details and a Sedgwick principal will respond personally — typically within two business days."
            />

            <Reveal delay={0.15}>
              <ul className="mt-10 space-y-6">
                <li className="flex items-start gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gold-500/10 text-gold-500">
                    <Phone size={18} />
                  </span>
                  <div>
                    <p className="text-xs tracking-[0.2em] text-steel-600 uppercase">Call the office</p>
                    <a href={COMPANY.phoneHref} className="font-display text-xl font-semibold text-white hover:text-gold-500">
                      {COMPANY.phone}
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gold-500/10 text-gold-500">
                    <Mail size={18} />
                  </span>
                  <div>
                    <p className="text-xs tracking-[0.2em] text-steel-600 uppercase">Email</p>
                    <a href={`mailto:${COMPANY.email}`} className="font-display text-xl font-semibold text-white hover:text-gold-500">
                      {COMPANY.email}
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gold-500/10 text-gold-500">
                    <MapPin size={18} />
                  </span>
                  <div>
                    <p className="text-xs tracking-[0.2em] text-steel-600 uppercase">Headquarters</p>
                    <p className="font-display text-xl font-semibold text-white">
                      {COMPANY.address}, {COMPANY.city}, {COMPANY.state} {COMPANY.zip}
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gold-500/10 text-gold-500">
                    <Clock size={18} />
                  </span>
                  <div>
                    <p className="text-xs tracking-[0.2em] text-steel-600 uppercase">Office hours</p>
                    <p className="font-display text-xl font-semibold text-white">{COMPANY.hours}</p>
                    <p className="text-sm text-steel-600">{COMPANY.emergency}</p>
                  </div>
                </li>
              </ul>

              <div className="mt-10">
                <p className="text-xs tracking-[0.2em] text-steel-600 uppercase">Service areas</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {SERVICE_AREAS.map((area) => (
                    <span
                      key={area}
                      className="rounded-full border border-white/10 bg-ink-900 px-3 py-1.5 text-xs text-steel-400"
                    >
                      {area}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.1}>
            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-ink-900 p-8 shadow-2xl sm:p-10">
              <div className="pointer-events-none absolute -top-24 -right-24 h-64 w-64 rounded-full bg-gold-500/10 blur-3xl" />

              <AnimatePresence mode="wait">
                {status === "sent" ? (
                  <motion.div
                    key="sent"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    className="flex min-h-90 flex-col items-center justify-center text-center"
                  >
                    <motion.span
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.15, type: "spring", stiffness: 260, damping: 16 }}
                      className="flex h-16 w-16 items-center justify-center rounded-full bg-gold-500/15 text-gold-500"
                    >
                      <CheckCircle2 size={34} />
                    </motion.span>
                    <h3 className="mt-6 text-3xl">Request received</h3>
                    <p className="mt-3 max-w-sm text-sm leading-relaxed text-steel-500">
                      Thanks, {form.name || "friend"} — a Sedgwick principal will review your
                      project and respond within two business days. For urgent matters, call{" "}
                      <a href={COMPANY.phoneHref} className="text-gold-500 hover:underline">
                        {COMPANY.phone}
                      </a>
                      .
                    </p>
                    <button
                      type="button"
                      onClick={() => {
                        setForm(INITIAL);
                        setStatus("idle");
                      }}
                      className="mt-8 inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 font-display text-sm font-bold tracking-[0.15em] text-white uppercase transition hover:border-gold-500 hover:text-gold-500"
                    >
                      Send another request
                    </button>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    onSubmit={submit}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.35 }}
                    className="relative"
                  >
                    <h3 className="text-3xl">Request an estimate</h3>
                    <p className="mt-2 text-sm text-steel-500">
                      No obligation. No sales pressure. Just a straight assessment of your project.
                    </p>

                    <div className="mt-8 grid gap-5 sm:grid-cols-2">
                      <div className="sm:col-span-1">
                        <label htmlFor="name" className="mb-2 block text-xs tracking-[0.2em] text-steel-600 uppercase">
                          Full name
                        </label>
                        <input id="name" required value={form.name} onChange={set("name")} placeholder="Jane Smith" className={FIELD} />
                      </div>
                      <div className="sm:col-span-1">
                        <label htmlFor="email" className="mb-2 block text-xs tracking-[0.2em] text-steel-600 uppercase">
                          Email
                        </label>
                        <input id="email" type="email" required value={form.email} onChange={set("email")} placeholder="jane@company.com" className={FIELD} />
                      </div>
                      <div>
                        <label htmlFor="phone" className="mb-2 block text-xs tracking-[0.2em] text-steel-600 uppercase">
                          Phone
                        </label>
                        <input id="phone" type="tel" value={form.phone} onChange={set("phone")} placeholder="(813) 555-0100" className={FIELD} />
                      </div>
                      <div>
                        <label htmlFor="type" className="mb-2 block text-xs tracking-[0.2em] text-steel-600 uppercase">
                          Project type
                        </label>
                        <select id="type" value={form.type} onChange={set("type")} className={FIELD}>
                          {PROJECT_TYPES.map((t) => (
                            <option key={t} value={t}>
                              {t}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div className="sm:col-span-2">
                        <label htmlFor="message" className="mb-2 block text-xs tracking-[0.2em] text-steel-600 uppercase">
                          Project details
                        </label>
                        <textarea
                          id="message"
                          required
                          rows={5}
                          value={form.message}
                          onChange={set("message")}
                          placeholder="Scope, location, target timeline and budget range…"
                          className={`${FIELD} resize-none`}
                        />
                      </div>
                    </div>

                    <motion.button
                      type="submit"
                      disabled={status === "sending"}
                      whileTap={{ scale: 0.97 }}
                      className="mt-8 flex w-full items-center justify-center gap-3 rounded-full bg-gold-500 px-8 py-4 font-display text-base font-bold tracking-[0.15em] text-ink-950 uppercase transition hover:bg-gold-400 disabled:cursor-wait disabled:opacity-70"
                    >
                      {status === "sending" ? (
                        <>
                          <motion.span
                            animate={{ rotate: 360 }}
                            transition={{ duration: 0.9, repeat: Infinity, ease: "linear" }}
                            className="block h-4 w-4 rounded-full border-2 border-ink-950 border-t-transparent"
                          />
                          Sending…
                        </>
                      ) : (
                        "Send request"
                      )}
                    </motion.button>

                    <p className="mt-4 text-center text-xs text-steel-600">
                      By submitting you agree to be contacted about your project. {COMPANY.license}
                    </p>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}