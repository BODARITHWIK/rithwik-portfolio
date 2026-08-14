import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, ArrowRight, Code2 } from "lucide-react";

export default function IntroAnimation({ onComplete }) {
  const [step, setStep] = useState(0);
  const [skipped, setSkipped] = useState(false);

  const steps = [
    { title: "BODA RITHWIK", subtitle: "B.Tech CSIT & BBA Dual Degree Student", badge: "PORTFOLIO 2026" },
    { title: "Software Engineer", subtitle: "Building Scalable Systems & Modern Web Applications", badge: "CAREER FOCUS" },
    { title: "Cloud Native | DevOps | Full Stack", subtitle: "AWS • Kubernetes • Docker • Spring Boot • React", badge: "SPECIALIZATION" },
  ];

  useEffect(() => {
    if (skipped) return;

    const timer1 = setTimeout(() => setStep(1), 1100);
    const timer2 = setTimeout(() => setStep(2), 2200);
    const timer3 = setTimeout(() => {
      onComplete();
    }, 3500);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, [skipped, onComplete]);

  const handleSkip = () => {
    setSkipped(true);
    onComplete();
  };

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 0.98, filter: "blur(10px)" }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-[#050b14] text-white select-none overflow-hidden"
    >
      {/* Dynamic Mesh Ambient Glows */}
      <div className="absolute -top-32 -left-32 h-[450px] w-[450px] rounded-full bg-cyan-500/20 blur-[130px] animate-pulse" />
      <div className="absolute -bottom-32 -right-32 h-[450px] w-[450px] rounded-full bg-indigo-600/20 blur-[130px] animate-pulse" />
      <div className="absolute inset-0 bg-grid-pattern opacity-15" />

      {/* Skip Button */}
      <button
        onClick={handleSkip}
        className="absolute top-6 right-6 z-20 flex items-center gap-2 rounded-full border border-cyan-400/30 bg-slate-900/80 px-4 py-2 text-xs font-semibold text-cyan-300 backdrop-blur-md transition-all duration-300 hover:border-cyan-400 hover:bg-cyan-500/20 hover:text-white"
      >
        <span>Skip Intro</span>
        <ArrowRight className="h-3.5 w-3.5" />
      </button>

      {/* Center Animated Content Card */}
      <div className="relative z-10 mx-auto max-w-2xl px-6 text-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={step}
            initial={{ opacity: 0, y: 25, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -25, scale: 1.05 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-4"
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/40 bg-slate-900/90 px-3.5 py-1 text-[11px] font-bold uppercase tracking-widest text-cyan-300 shadow-[0_0_15px_rgba(34,211,238,0.25)] font-mono">
              <Sparkles className="h-3.5 w-3.5 text-cyan-400" />
              <span>{steps[step].badge}</span>
            </div>

            {/* Main Animated Title */}
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl lg:text-7xl font-outfit uppercase">
              <span className="bg-gradient-to-r from-white via-cyan-100 to-cyan-400 bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(34,211,238,0.35)]">
                {steps[step].title}
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-sm font-semibold text-slate-300 sm:text-lg font-sans max-w-lg mx-auto">
              {steps[step].subtitle}
            </p>
          </motion.div>
        </AnimatePresence>

        {/* Progress Bar */}
        <div className="mt-12 mx-auto h-1 w-48 overflow-hidden rounded-full bg-slate-800">
          <motion.div
            initial={{ width: "0%" }}
            animate={{ width: `${((step + 1) / steps.length) * 100}%` }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="h-full bg-gradient-to-r from-cyan-400 via-teal-400 to-indigo-500 shadow-[0_0_10px_rgba(34,211,238,0.8)]"
          />
        </div>
      </div>
    </motion.div>
  );
}
