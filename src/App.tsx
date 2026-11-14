import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import Services from "./components/Services";
import About from "./components/About";
import Stats from "./components/Stats";
import Projects from "./components/Projects";
import Process from "./components/Process";
import Testimonials from "./components/Testimonials";
import CtaBand from "./components/CtaBand";
import Faq from "./components/Faq";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function Loader() {
  const reduce = useReducedMotion();
  const [done, setDone] = useState(Boolean(reduce));

  useEffect(() => {
    if (reduce) return;
    const t = window.setTimeout(() => setDone(true), 1300);
    return () => window.clearTimeout(t);
  }, [reduce]);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-100 flex items-center justify-center bg-ink-950"
        >
          <div className="flex flex-col items-center gap-6">
            <motion.svg
              viewBox="0 0 40 40"
              className="h-14 w-14"
              initial={{ scale: 0.6, rotate: -45, opacity: 0 }}
              animate={{ scale: 1, rotate: 0, opacity: 1 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              <rect
                x="7"
                y="7"
                width="26"
                height="26"
                rx="5"
                transform="rotate(45 20 20)"
                fill="#05090D"
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
            </motion.svg>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 0.6 }}
              className="font-display text-2xl font-bold tracking-[0.45em] text-white uppercase"
            >
              Sedgwick
            </motion.p>

            <div className="h-0.5 w-48 overflow-hidden bg-ink-700">
              <motion.div
                initial={{ x: "-100%" }}
                animate={{ x: "100%" }}
                transition={{ duration: 1.05, repeat: Infinity, ease: "easeInOut" }}
                className="h-full w-full bg-gold-500"
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <>
      <Loader />
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <Services />
        <About />
        <Stats />
        <Projects />
        <Process />
        <Testimonials />
        <CtaBand />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </>
  );
}