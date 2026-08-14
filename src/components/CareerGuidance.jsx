import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Compass,
  Award,
  BookOpen,
  Eye,
  ExternalLink,
  Download,
  X,
  ZoomIn,
  ZoomOut,
  RotateCcw,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Layers,
  Cloud,
  Server,
  Terminal,
  Cpu
} from "lucide-react";

function CareerGuidance() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [zoomLevel, setZoomLevel] = useState(1);

  const certPath = "/certificates/scaler-masterclass-career-guidance.png";
  const altText =
    "Boda Rithwik Scaler Masterclass Certificate of Participation for DevOps vs. SRE vs. Cloud Engineer vs. Platform Engineer";

  // Topic tags
  const tags = [
    "DevOps",
    "SRE",
    "Cloud Engineer",
    "Platform Engineer",
    "Cloud Native",
    "Career Guidance",
    "Industry Masterclass"
  ];

  // Learning bullet points
  const learningPoints = [
    "Understanding the differences between DevOps, SRE, Cloud Engineering and Platform Engineering.",
    "Learning how different engineering roles contribute to modern software organizations.",
    "Understanding career paths in cloud-native engineering.",
    "Learning about responsibilities, skills and career opportunities across these roles.",
    "Understanding how DevOps practices, reliability engineering, cloud infrastructure and platform engineering work together."
  ];

  // Visual career path steps
  const careerSteps = [
    { title: "Software Engineering", desc: "Core Fundamentals & CS", icon: Terminal },
    { title: "Cloud & DevOps", desc: "CI/CD & Infrastructure", icon: Cloud },
    { title: "Cloud Engineer", desc: "Architecture & Ops", icon: Server },
    { title: "SRE / Platform", desc: "Reliability & Developer Portals", icon: Layers },
    { title: "Cloud Native", desc: "Kubernetes & Scalable Systems", icon: Cpu }
  ];

  // Modal ESC key handler and body scroll lock
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        closeModal();
      }
    };

    if (isModalOpen) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "auto";
    };
  }, [isModalOpen]);

  const openModal = () => {
    setZoomLevel(1);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setZoomLevel(1);
  };

  const handleZoomIn = (e) => {
    e.stopPropagation();
    setZoomLevel((prev) => Math.min(prev + 0.25, 2.5));
  };

  const handleZoomOut = (e) => {
    e.stopPropagation();
    setZoomLevel((prev) => Math.max(prev - 0.25, 0.75));
  };

  const handleZoomReset = (e) => {
    e.stopPropagation();
    setZoomLevel(1);
  };

  return (
    <section id="career-guidance" className="relative py-20 lg:py-28 bg-[#050b14]">
      {/* Background ambient glow effect */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 h-[500px] w-[800px] rounded-full bg-cyan-500/10 blur-[140px]" />
        <div className="absolute top-1/2 right-0 h-[400px] w-[400px] rounded-full bg-teal-500/5 blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl space-y-4"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/40 bg-slate-900/90 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-cyan-300 shadow-[0_0_12px_rgba(34,211,238,0.2)] font-mono">
            <Compass className="h-3.5 w-3.5 text-cyan-400" />
            <span>05 // CAREER GUIDANCE</span>
          </div>

          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl font-outfit">
            Career Guidance & Industry Masterclass
          </h2>

          <p className="text-base leading-relaxed text-slate-300 sm:text-lg">
            Learning from industry experts and exploring career paths in Cloud, DevOps, SRE and Platform Engineering.
          </p>
        </motion.div>

        {/* Featured Career Guidance Certificate Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-12 overflow-hidden rounded-3xl border border-cyan-500/30 bg-slate-900/80 backdrop-blur-2xl shadow-[0_0_35px_rgba(34,211,238,0.1)] transition-all duration-300 hover:border-cyan-400/50 hover:shadow-[0_0_45px_rgba(34,211,238,0.18)]"
        >
          {/* Card Main Body */}
          <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
            {/* Desktop Left / Mobile Top: Certificate Preview */}
            <div className="lg:col-span-6 relative group overflow-hidden bg-slate-950 flex items-center justify-center p-6 border-b lg:border-b-0 lg:border-r border-white/10">
              <div className="relative w-full overflow-hidden rounded-2xl border border-cyan-500/20 bg-slate-900 shadow-xl">
                <img
                  src={certPath}
                  alt={altText}
                  className="w-full h-auto object-contain transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />

                {/* Hover overlay with quick view button */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex items-center justify-center p-4">
                  <button
                    onClick={openModal}
                    className="inline-flex items-center gap-2 rounded-xl bg-cyan-400 px-5 py-2.5 text-xs font-black uppercase tracking-wider text-slate-950 shadow-[0_0_20px_rgba(34,211,238,0.6)] transition-transform hover:scale-105"
                    aria-label="View Certificate in Modal"
                  >
                    <Eye className="h-4 w-4" />
                    <span>View Full Certificate</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Desktop Right / Mobile Middle: Certificate Info */}
            <div className="lg:col-span-6 p-6 sm:p-8 flex flex-col justify-between space-y-6">
              <div>
                {/* Header Metadata Badges */}
                <div className="flex flex-wrap items-center gap-2 mb-4">
                  <span className="rounded-full border border-cyan-400/40 bg-cyan-500/15 px-3 py-1 text-xs font-bold text-cyan-300 font-mono flex items-center gap-1.5">
                    <Sparkles className="h-3 w-3 text-cyan-400" />
                    Industry Masterclass
                  </span>

                  <span className="rounded-full border border-teal-400/40 bg-teal-500/15 px-3 py-1 text-xs font-bold text-teal-300 font-mono">
                    Certificate of Participation
                  </span>

                  <span className="text-xs font-semibold text-slate-400 font-mono ml-auto">
                    13 August 2026
                  </span>
                </div>

                {/* Masterclass Title */}
                <h3 className="text-xl sm:text-2xl font-black text-white font-outfit leading-tight">
                  DevOps vs. SRE vs. Cloud Engineer vs. Platform Engineer
                </h3>

                {/* Organization & Candidate Details */}
                <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-mono">
                  <div className="rounded-xl border border-white/10 bg-slate-950/70 p-3">
                    <span className="text-slate-400 block text-[10px] uppercase font-bold">Organization</span>
                    <span className="text-cyan-300 font-extrabold text-sm mt-0.5 block">Scaler Masterclass</span>
                  </div>
                  <div className="rounded-xl border border-white/10 bg-slate-950/70 p-3">
                    <span className="text-slate-400 block text-[10px] uppercase font-bold">Participant</span>
                    <span className="text-white font-extrabold text-sm mt-0.5 block">BODA RITHWIK</span>
                  </div>
                </div>

                {/* Category & Focus Summary */}
                <p className="mt-4 text-xs sm:text-sm text-slate-300 leading-relaxed">
                  An official participation certificate awarded by <strong className="text-white">Scaler Masterclass</strong> for actively completing the industry session analyzing core engineering disciplines: Cloud Engineering, DevOps, Site Reliability Engineering (SRE), and Platform Engineering.
                </p>

                {/* Topic Tags */}
                <div className="mt-5 flex flex-wrap gap-1.5">
                  {tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-lg border border-white/10 bg-slate-950/80 px-2.5 py-1 text-[11px] font-semibold text-slate-300 font-mono hover:border-cyan-400/40 hover:text-cyan-300 transition-colors"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-white/10 grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                {/* View Certificate Modal Button */}
                <button
                  onClick={openModal}
                  className="flex items-center justify-center gap-2 rounded-xl border border-cyan-400/50 bg-gradient-to-r from-cyan-500/20 to-teal-500/20 px-4 py-2.5 text-xs font-bold text-cyan-300 shadow-[0_0_15px_rgba(34,211,238,0.2)] transition-all duration-200 hover:bg-cyan-400 hover:text-slate-950 hover:shadow-[0_0_25px_rgba(34,211,238,0.45)]"
                  aria-label="View Certificate in Modal"
                >
                  <Eye className="h-4 w-4" />
                  <span>View Certificate</span>
                </button>

                {/* Open Certificate New Tab */}
                <a
                  href={certPath}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-slate-950 px-4 py-2.5 text-xs font-bold text-slate-200 transition-all duration-200 hover:border-cyan-400/50 hover:bg-slate-800 hover:text-cyan-300"
                  aria-label="Open Certificate in New Tab"
                >
                  <ExternalLink className="h-4 w-4" />
                  <span>Open Certificate</span>
                </a>

                {/* Download Certificate */}
                <a
                  href={certPath}
                  download="scaler-masterclass-career-guidance.png"
                  className="flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-slate-950 px-4 py-2.5 text-xs font-bold text-slate-200 transition-all duration-200 hover:border-cyan-400/50 hover:bg-slate-800 hover:text-cyan-300"
                  aria-label="Download Certificate Image"
                >
                  <Download className="h-4 w-4" />
                  <span>Download</span>
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Section: What I Learned */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-12 rounded-3xl border border-white/10 bg-slate-900/60 p-6 sm:p-8 backdrop-blur-xl"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-cyan-400/40 bg-cyan-500/10 text-cyan-400">
              <BookOpen className="h-5 w-5" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white font-outfit">What I Learned</h3>
              <p className="text-xs text-cyan-300 font-mono">
                Key Insights & takeaways from the Scaler Masterclass
              </p>
            </div>
          </div>

          <ul className="space-y-3.5">
            {learningPoints.map((point, index) => (
              <li key={index} className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-cyan-400 shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
                  {point}
                </span>
              </li>
            ))}
          </ul>

          <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-slate-400 font-mono">
            <span className="flex items-center gap-1.5">
              <Award className="h-4 w-4 text-cyan-400" />
              <span>Status: Verified Certificate of Participation</span>
            </span>
            <span className="text-slate-400 hidden sm:inline">Scaler Masterclass • Aug 2026</span>
          </div>
        </motion.div>

        {/* Visual Career Path Component */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 rounded-3xl border border-cyan-500/20 bg-slate-900/70 p-6 sm:p-8 backdrop-blur-xl"
        >
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-8">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-cyan-400/40 bg-cyan-500/10 text-cyan-400">
                <Compass className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white font-outfit">
                  Career Exploration Roadmap
                </h3>
                <p className="text-xs text-cyan-300 font-mono">
                  Cloud Native Engineering Learning Trajectory
                </p>
              </div>
            </div>
            <span className="text-[11px] font-mono text-slate-400 bg-slate-950 px-3 py-1 rounded-full border border-white/10 w-fit">
              Exploration & Guidance
            </span>
          </div>

          {/* Stepper Grid / Flow */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-3 relative">
            {careerSteps.map((step, idx) => {
              const IconComp = step.icon;
              return (
                <div key={step.title} className="relative group">
                  <div className="flex flex-col h-full items-center text-center p-4 rounded-2xl border border-white/10 bg-slate-950/80 transition-all duration-300 group-hover:border-cyan-400/50 group-hover:bg-slate-900 group-hover:shadow-[0_0_20px_rgba(34,211,238,0.15)]">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-cyan-400/30 bg-cyan-500/10 text-cyan-300 mb-3 group-hover:scale-110 transition-transform">
                      <IconComp className="h-5 w-5" />
                    </div>
                    <span className="text-xs font-mono font-bold text-cyan-400 mb-1">
                      0{idx + 1}
                    </span>
                    <h4 className="text-xs font-bold text-white font-outfit mb-1">
                      {step.title}
                    </h4>
                    <p className="text-[10px] text-slate-400 font-mono">
                      {step.desc}
                    </p>
                  </div>

                  {/* Horizontal Arrow for Desktop */}
                  {idx < careerSteps.length - 1 && (
                    <div className="hidden md:flex absolute -right-3 top-1/2 -translate-y-1/2 z-10 text-cyan-400/60 pointer-events-none">
                      <ArrowRight className="h-4 w-4" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <p className="mt-6 text-[11px] text-center text-slate-400 font-mono italic">
            * Note: Visual represents career exploration, skill roadmap, and industry learning trajectory.
          </p>
        </motion.div>
      </div>

      {/* Interactive Lightbox Modal Viewer */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
            className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/95 p-3 sm:p-6 backdrop-blur-2xl"
            role="dialog"
            aria-modal="true"
            aria-label="Scaler Masterclass Certificate Modal"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-h-[92vh] w-full max-w-5xl overflow-hidden rounded-3xl border border-cyan-400/30 bg-slate-900 shadow-2xl flex flex-col"
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between border-b border-white/10 px-4 sm:px-6 py-3.5 bg-slate-950/95 shrink-0">
                <div className="flex items-center gap-3 overflow-hidden">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-cyan-400/40 bg-cyan-500/10 text-cyan-400">
                    <Award className="h-5 w-5" />
                  </div>
                  <div className="truncate">
                    <h3 className="text-sm sm:text-base font-bold text-white font-outfit truncate">
                      Scaler Masterclass Certificate of Participation
                    </h3>
                    <p className="text-[11px] text-cyan-300 font-mono truncate">
                      BODA RITHWIK • 13th August 2026
                    </p>
                  </div>
                </div>

                {/* Toolbar Controls */}
                <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
                  <button
                    onClick={handleZoomOut}
                    className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white"
                    title="Zoom Out"
                    aria-label="Zoom Out"
                  >
                    <ZoomOut className="h-4 w-4" />
                  </button>

                  <span className="text-[11px] font-mono text-cyan-300 min-w-[40px] text-center hidden sm:inline">
                    {Math.round(zoomLevel * 100)}%
                  </span>

                  <button
                    onClick={handleZoomIn}
                    className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white"
                    title="Zoom In"
                    aria-label="Zoom In"
                  >
                    <ZoomIn className="h-4 w-4" />
                  </button>

                  <button
                    onClick={handleZoomReset}
                    className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white hidden sm:flex"
                    title="Reset Zoom"
                    aria-label="Reset Zoom"
                  >
                    <RotateCcw className="h-3.5 w-3.5" />
                  </button>

                  <a
                    href={certPath}
                    target="_blank"
                    rel="noreferrer"
                    className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white"
                    title="Open in New Tab"
                    aria-label="Open in New Tab"
                  >
                    <ExternalLink className="h-4 w-4" />
                  </a>

                  <button
                    onClick={closeModal}
                    className="flex h-8 w-8 items-center justify-center rounded-lg border border-cyan-400/40 bg-cyan-500/20 text-cyan-300 hover:bg-cyan-400 hover:text-slate-950 transition-colors ml-1"
                    title="Close (Esc)"
                    aria-label="Close modal"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>
              </div>

              {/* Modal Image Body with Pinch/Scroll Zoom */}
              <div className="flex-1 overflow-auto p-4 sm:p-6 flex items-center justify-center bg-slate-950 min-h-[300px]">
                <div
                  className="transition-transform duration-200 ease-out origin-center max-w-full"
                  style={{ transform: `scale(${zoomLevel})` }}
                >
                  <img
                    src={certPath}
                    alt={altText}
                    className="max-h-[75vh] w-auto max-w-full rounded-xl object-contain shadow-2xl border border-white/10"
                  />
                </div>
              </div>

              {/* Modal Footer Controls */}
              <div className="border-t border-white/10 px-4 sm:px-6 py-3 bg-slate-950/95 flex flex-wrap items-center justify-between text-xs font-mono text-slate-400 gap-2 shrink-0">
                <span className="truncate">
                  DevOps vs. SRE vs. Cloud Engineer vs. Platform Engineer
                </span>

                <div className="flex items-center gap-3">
                  <a
                    href={certPath}
                    download="scaler-masterclass-career-guidance.png"
                    className="inline-flex items-center gap-1.5 text-cyan-300 hover:underline font-bold"
                  >
                    <Download className="h-3.5 w-3.5" />
                    <span>Download Original</span>
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

export default CareerGuidance;
