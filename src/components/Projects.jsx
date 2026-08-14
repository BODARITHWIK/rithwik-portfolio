import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Github,
  ExternalLink,
  Sparkles,
  Cpu,
  Car,
  FileText,
  BookOpen,
  X,
  CheckCircle2,
  GraduationCap,
  ArrowUpRight,
} from "lucide-react";

function Projects() {
  const [selectedResearch, setSelectedResearch] = useState(false);

  // Close modal on ESC key press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setSelectedResearch(false);
      }
    };
    if (selectedResearch) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "auto";
    };
  }, [selectedResearch]);

  const projects = [
    {
      id: "digital-marketing-research",
      number: "01",
      title: "Digital Marketing vs Traditional Marketing",
      subtitle: "A Comparative Study of Marketing Strategies in the Modern Business Environment",
      category: "Academic Research & Strategy",
      description:
        "Comprehensive 30-page independent research paper examining comparative cost efficiency, audience reach, consumer behavior impact, SWOT analysis, and integrated marketing models.",
      institution: "KL University – School of Management",
      facultyGuide: "Guided by Asst. Prof. Durgaprasad Navulla",
      technologies: [
        "Digital Marketing",
        "Market Research",
        "SWOT Analysis",
        "Consumer Behavior",
        "Content Strategy",
        "Academic Paper (IJSTM)",
      ],
      githubUrl: null,
      demoUrl: null,
      isResearch: true,
      icon: Sparkles,
      accent: "from-cyan-500/25 to-blue-500/15 border-cyan-500/40 text-cyan-300 shadow-[0_0_15px_rgba(34,211,238,0.2)]",
    },
    {
      id: "student-management",
      number: "02",
      title: "Cloud-Native Student Management System",
      subtitle: "Microservices & Kubernetes Architecture",
      category: "Cloud Engineering & DevOps",
      description:
        "Engineered a cloud-native platform using Kubernetes and microservices architecture on AWS with automated CI/CD deployment pipelines configured via GitHub Actions.",
      technologies: [
        "Kubernetes",
        "Microservices",
        "AWS",
        "Docker",
        "GitHub Actions",
        "CI/CD Pipelines",
      ],
      githubUrl: "https://github.com/BODARITHWIK",
      demoUrl: null,
      isResearch: false,
      icon: Cpu,
      accent: "from-blue-500/25 to-indigo-500/15 border-blue-500/40 text-blue-300 shadow-[0_0_15px_rgba(59,130,246,0.2)]",
    },
    {
      id: "car-rental",
      number: "03",
      title: "Car Rental System – Full Stack Application",
      subtitle: "Role-Based Fleet Booking Platform",
      category: "Full-Stack Web App",
      description:
        "Built a full-stack car rental booking application featuring role-based authentication (admin/customer), real-time vehicle availability tracking, and responsive UI.",
      technologies: [
        "React",
        "Node.js / Spring Boot",
        "HTML5 / CSS3",
        "JavaScript",
        "MySQL",
        "RESTful APIs",
      ],
      githubUrl: "https://github.com/BODARITHWIK",
      demoUrl: null,
      isResearch: false,
      icon: Car,
      accent: "from-emerald-500/25 to-teal-500/15 border-emerald-500/40 text-emerald-300 shadow-[0_0_15px_rgba(16,185,129,0.2)]",
    },
  ];

  return (
    <section id="projects" className="relative py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl space-y-3"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/40 bg-gradient-to-r from-cyan-500/15 to-blue-500/10 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-cyan-300 shadow-[0_0_12px_rgba(34,211,238,0.2)] font-mono">
            <Sparkles className="h-3.5 w-3.5" />
            <span>03 // FEATURED WORK</span>
          </div>
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl font-outfit">
            Featured Projects & Academic Research
          </h2>
          <p className="text-base leading-relaxed text-slate-300 sm:text-lg">
            A combination of academic marketing research papers, cloud-native architecture,
            and full-stack software applications.
          </p>
        </motion.div>

        {/* Editorial Project Panels Layout */}
        <div className="mt-14 space-y-8">
          {projects.map((project, idx) => {
            const Icon = project.icon;
            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.12 }}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-slate-900/60 p-7 sm:p-9 backdrop-blur-2xl transition-all duration-500 hover:border-cyan-400/50 hover:bg-slate-900/90 hover:shadow-[0_0_45px_rgba(34,211,238,0.15)]"
              >
                {/* Top Subtle Glow Beam */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
                  {/* Left Number & Info Side */}
                  <div className="lg:col-span-8 space-y-4">
                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <span className="text-3xl sm:text-4xl font-black text-cyan-400/80 font-mono tracking-tighter">
                        {project.number} / PROJECT
                      </span>
                      <span className="rounded-full border border-cyan-400/30 bg-cyan-500/10 px-3.5 py-1 text-xs font-bold text-cyan-300 font-mono shadow-[0_0_10px_rgba(34,211,238,0.15)]">
                        {project.category}
                      </span>
                    </div>

                    <h3 className="text-2xl font-extrabold tracking-tight text-white sm:text-3xl group-hover:text-cyan-300 transition-colors font-outfit">
                      {project.title}
                    </h3>
                    {project.subtitle && (
                      <p className="text-sm font-semibold text-cyan-400/90">
                        {project.subtitle}
                      </p>
                    )}

                    <p className="text-sm sm:text-base leading-relaxed text-slate-300">
                      {project.description}
                    </p>

                    {/* Tech Pills */}
                    <div className="flex flex-wrap gap-2 pt-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-xl border border-white/10 bg-slate-950/80 px-3.5 py-1.5 text-xs font-semibold text-slate-300 backdrop-blur-md transition-colors hover:border-cyan-400/30 hover:text-cyan-200"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Right Action Side */}
                  <div className="lg:col-span-4 flex flex-col justify-center gap-3 pt-4 lg:pt-0 border-t lg:border-t-0 lg:border-l border-white/10 lg:pl-8">
                    {project.isResearch ? (
                      <button
                        onClick={() => setSelectedResearch(true)}
                        className="inline-flex w-full items-center justify-center gap-2.5 rounded-xl border border-cyan-400/40 bg-gradient-to-r from-cyan-500/15 to-blue-500/10 px-5 py-4 text-xs font-bold text-cyan-300 shadow-[0_0_20px_rgba(34,211,238,0.25)] transition-all duration-300 hover:from-cyan-400 hover:to-cyan-300 hover:text-slate-950 hover:shadow-[0_0_30px_rgba(34,211,238,0.5)] hover:scale-[1.02]"
                      >
                        <BookOpen className="h-4 w-4" />
                        <span>Read Research Paper</span>
                        <ArrowUpRight className="h-4 w-4" />
                      </button>
                    ) : (
                      <>
                        {project.githubUrl && (
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex w-full items-center justify-center gap-2.5 rounded-xl border border-white/15 bg-slate-950/80 px-5 py-3.5 text-xs sm:text-sm font-bold text-slate-200 transition-all duration-300 hover:border-cyan-400/50 hover:bg-slate-900 hover:text-white hover:shadow-[0_0_18px_rgba(34,211,238,0.25)]"
                          >
                            <Github className="h-4 w-4 text-cyan-400" />
                            <span>Code Repository</span>
                            <ArrowUpRight className="h-4 w-4 text-slate-400" />
                          </a>
                        )}

                        {project.demoUrl && (
                          <a
                            href={project.demoUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex w-full items-center justify-center gap-2.5 rounded-xl border border-cyan-400/40 bg-cyan-500/10 px-5 py-3.5 text-xs sm:text-sm font-bold text-cyan-300 transition-all duration-300 hover:bg-cyan-400 hover:text-slate-950 hover:shadow-[0_0_20px_rgba(34,211,238,0.4)]"
                          >
                            <ExternalLink className="h-4 w-4" />
                            <span>Live Demo</span>
                          </a>
                        )}
                      </>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Research Paper Modal Lightbox */}
      <AnimatePresence>
        {selectedResearch && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedResearch(false)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/90 p-4 backdrop-blur-2xl"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-h-[90vh] w-full max-w-4xl overflow-hidden rounded-3xl border border-white/20 bg-slate-900 shadow-2xl"
            >
              {/* Modal Header */}
              <div className="flex flex-wrap items-center justify-between border-b border-white/10 px-6 py-4 bg-slate-950/90 gap-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-cyan-400/40 bg-cyan-500/10 text-cyan-400">
                    <BookOpen className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white sm:text-lg font-outfit">
                      Digital Marketing vs Traditional Marketing
                    </h3>
                    <p className="text-xs text-cyan-300 font-medium">
                      Koneru Lakshmaiah Education Foundation • School of Management
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <a
                    href="/bba-research-paper.pdf"
                    target="_blank"
                    rel="noreferrer"
                    download="Boda_Rithwik_BBA_Research_Paper.pdf"
                    className="inline-flex items-center gap-2 rounded-xl border border-cyan-400/40 bg-cyan-500/15 px-3.5 py-1.5 text-xs font-bold text-cyan-300 transition-all hover:bg-cyan-400 hover:text-slate-950 hover:shadow-[0_0_15px_rgba(34,211,238,0.3)]"
                  >
                    <FileText className="h-4 w-4" />
                    <span>View Full 30-Page PDF</span>
                  </a>
                  <button
                    onClick={() => setSelectedResearch(false)}
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-slate-800 text-slate-300 transition-colors hover:bg-cyan-400 hover:text-slate-950"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>
              </div>

              {/* Modal Body */}
              <div className="max-h-[calc(90vh-120px)] overflow-y-auto p-6 sm:p-8 space-y-8 text-slate-300">
                {/* Meta info block */}
                <div className="rounded-2xl border border-cyan-400/30 bg-cyan-950/20 p-5 backdrop-blur-md">
                  <div className="grid gap-3 sm:grid-cols-2 text-xs">
                    <div>
                      <p className="text-slate-400 font-semibold uppercase tracking-wider font-mono">Author:</p>
                      <p className="text-white font-bold text-sm">Boda Rithwik (ID: 23923020121)</p>
                      <p className="text-slate-300">Bachelor of Business Administration (BBA Dual Degree)</p>
                      <p className="text-slate-400">Guntur, Andhra Pradesh, India</p>
                    </div>
                    <div>
                      <p className="text-slate-400 font-semibold uppercase tracking-wider font-mono">Faculty Guide:</p>
                      <p className="text-white font-bold text-sm">Durgaprasad Navulla</p>
                      <p className="text-slate-300">Asst. Professor, School of Management</p>
                      <p className="text-slate-400">KL University, Andhra Pradesh, India</p>
                    </div>
                  </div>
                </div>

                {/* Abstract */}
                <div className="space-y-3">
                  <h4 className="text-lg font-bold text-white flex items-center gap-2 font-outfit">
                    <Sparkles className="h-4 w-4 text-cyan-400" />
                    <span>Executive Abstract</span>
                  </h4>
                  <p className="text-sm leading-relaxed text-slate-300">
                    This research paper presents an in-depth comparative study between Digital Marketing and Traditional Marketing strategies in contemporary business environments. As consumer interactions shift toward digital platforms, traditional channels like broadcast, print, and direct mail face evolving ROI expectations. The study evaluates cost efficiency, measurable analytics, target audience precision, real-time engagement, and multi-channel campaign architectures.
                  </p>
                </div>

                {/* Highlights */}
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-2xl border border-white/10 bg-slate-950/60 p-4">
                    <h5 className="text-xs font-bold uppercase tracking-wider text-cyan-300 mb-2 font-mono">
                      Key Research Pillars
                    </h5>
                    <ul className="space-y-1.5 text-xs text-slate-300">
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="h-3.5 w-3.5 text-cyan-400" />
                        <span>SWOT Analysis of Digital vs. Traditional Channels</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="h-3.5 w-3.5 text-cyan-400" />
                        <span>Cost-per-acquisition (CPA) & ROI benchmarks</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="h-3.5 w-3.5 text-cyan-400" />
                        <span>Consumer trust metrics across generational cohorts</span>
                      </li>
                    </ul>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-slate-950/60 p-4">
                    <h5 className="text-xs font-bold uppercase tracking-wider text-cyan-300 mb-2 font-mono">
                      Academic Context
                    </h5>
                    <ul className="space-y-1.5 text-xs text-slate-300">
                      <li className="flex items-center gap-2">
                        <GraduationCap className="h-3.5 w-3.5 text-cyan-400" />
                        <span>Independent BBA Dual Degree Capstone</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <GraduationCap className="h-3.5 w-3.5 text-cyan-400" />
                        <span>Formatted for International Academic Journals</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <GraduationCap className="h-3.5 w-3.5 text-cyan-400" />
                        <span>KL University Department of Management</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

export default Projects;