import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Github,
  ExternalLink,
  Sparkles,
  Cpu,
  Server,
  Cloud,
  CheckCircle2,
  BookOpen,
  X,
  FileText,
  ArrowUpRight,
  Boxes,
  Database,
  Briefcase
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
      id: "predictive-autoscaling",
      number: "01",
      title: "Predictive Autoscaling with Load Forecasting",
      subtitle: "Machine Learning Driven Cloud Infrastructure Optimization",
      category: "Cloud Native & AI/ML",
      description:
        "A cloud-native system that predicts future application load and automatically adjusts infrastructure capacity before traffic increases, preventing downtime and reducing cloud spending.",
      technologies: [
        "Python",
        "Machine Learning",
        "Kubernetes",
        "Docker",
        "Prometheus",
        "Grafana",
        "AWS",
      ],
      githubUrl: "https://github.com/BODARITHWIK",
      demoUrl: null,
      isResearch: false,
      icon: Cpu,
      badge: "Cloud Architecture",
    },
    {
      id: "cloud-native-logistics",
      number: "02",
      title: "Cloud Native Logistics System",
      subtitle: "Microservices & Distributed Fleet Management",
      category: "Microservices & Distributed Systems",
      description:
        "Enterprise logistics platform featuring Spring Boot microservices, Eureka service discovery, API gateway routing, real-time tracking, Redis caching, and automated EKS cluster deployments.",
      technologies: [
        "React",
        "Spring Boot Microservices",
        "Eureka",
        "API Gateway",
        "PostgreSQL",
        "Redis",
        "Docker",
        "Kubernetes",
        "GitHub Actions",
        "Prometheus",
        "Grafana",
        "AWS EKS",
      ],
      githubUrl: "https://github.com/BODARITHWIK",
      demoUrl: null,
      isResearch: false,
      icon: Boxes,
      badge: "Enterprise Full Stack",
    },
    {
      id: "bba-business-strategy",
      number: "03",
      title: "BBA Strategic Business & Digital Marketing Analytics",
      subtitle: "Business Administration & Strategy Management",
      category: "Business Administration & Strategy",
      description:
        "Strategic business administration model applying digital marketing channels, ROI analytics, consumer behavior evaluation, market positioning, financial insights, and operational management.",
      technologies: [
        "Business Administration",
        "Digital Marketing Strategy",
        "Business Analytics",
        "Strategic Management",
        "Financial Insights",
        "Market Positioning",
      ],
      githubUrl: null,
      demoUrl: null,
      isResearch: false,
      icon: Briefcase,
      badge: "BBA Dual Degree Core",
    },
  ];

  return (
    <section id="projects" className="relative py-20 lg:py-28 bg-[#070d19]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl space-y-3"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/40 bg-slate-900/90 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-cyan-300 shadow-[0_0_12px_rgba(34,211,238,0.2)] font-mono">
            <Sparkles className="h-3.5 w-3.5 text-cyan-400" />
            <span>04 // FEATURED PROJECTS</span>
          </div>
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl font-outfit">
            Featured Projects & Systems
          </h2>
          <p className="text-base leading-relaxed text-slate-300 sm:text-lg">
            A portfolio of cloud-native architecture, microservices, predictive scaling models, and software applications.
          </p>
        </motion.div>

        {/* Projects Cards List */}
        <div className="mt-14 space-y-8">
          {projects.map((project, idx) => {
            const Icon = project.icon;
            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-slate-900/70 p-7 sm:p-9 backdrop-blur-2xl transition-all duration-500 hover:border-cyan-400/50 hover:bg-slate-900/95 hover:shadow-[0_0_45px_rgba(34,211,238,0.15)]"
              >
                {/* Top Subtle Beam Highlight */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
                  
                  {/* Left Project Info */}
                  <div className="lg:col-span-8 space-y-4">
                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <span className="text-2xl sm:text-3xl font-black text-cyan-400 font-mono tracking-tighter">
                        PROJECT // {project.number}
                      </span>
                      <span className="rounded-full border border-cyan-400/30 bg-cyan-500/10 px-3 py-1 text-xs font-bold text-cyan-300 font-mono">
                        {project.badge}
                      </span>
                    </div>

                    <h3 className="text-2xl font-extrabold tracking-tight text-white sm:text-3xl group-hover:text-cyan-300 transition-colors font-outfit">
                      {project.title}
                    </h3>

                    {project.subtitle && (
                      <p className="text-xs sm:text-sm font-semibold text-cyan-300 font-mono">
                        {project.subtitle}
                      </p>
                    )}

                    <p className="text-sm sm:text-base leading-relaxed text-slate-300">
                      {project.description}
                    </p>

                    {/* Technology Badges */}
                    <div className="flex flex-wrap gap-2 pt-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-xl border border-white/10 bg-slate-950/80 px-3.5 py-1.5 text-xs font-semibold text-slate-200 backdrop-blur-md transition-colors hover:border-cyan-400/30 hover:text-cyan-200"
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
                        className="inline-flex w-full items-center justify-center gap-2.5 rounded-2xl border border-cyan-400/50 bg-gradient-to-r from-cyan-500/20 to-teal-500/15 px-5 py-3.5 text-xs font-bold text-cyan-300 shadow-[0_0_20px_rgba(34,211,238,0.25)] transition-all duration-300 hover:from-cyan-400 hover:to-teal-300 hover:text-slate-950 hover:shadow-[0_0_30px_rgba(34,211,238,0.5)] hover:scale-[1.02] min-h-[48px]"
                      >
                        <BookOpen className="h-4 w-4" />
                        <span>Read Research Paper PDF</span>
                        <ArrowUpRight className="h-4 w-4" />
                      </button>
                    ) : (
                      <>
                        <a
                          href={project.githubUrl || "https://github.com/BODARITHWIK"}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex w-full items-center justify-center gap-2.5 rounded-2xl border border-cyan-400/40 bg-slate-950/90 px-5 py-3.5 text-xs sm:text-sm font-bold text-cyan-300 transition-all duration-300 hover:border-cyan-400 hover:bg-slate-900 hover:text-white hover:shadow-[0_0_20px_rgba(34,211,238,0.3)] min-h-[48px]"
                        >
                          <Github className="h-4 w-4 text-cyan-400" />
                          <span>GitHub Repository</span>
                          <ArrowUpRight className="h-4 w-4 text-slate-400" />
                        </a>

                        {project.demoUrl ? (
                          <a
                            href={project.demoUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex w-full items-center justify-center gap-2.5 rounded-2xl border border-cyan-400/40 bg-cyan-500/10 px-5 py-3.5 text-xs sm:text-sm font-bold text-cyan-300 transition-all duration-300 hover:bg-cyan-400 hover:text-slate-950 hover:shadow-[0_0_20px_rgba(34,211,238,0.4)] min-h-[48px]"
                          >
                            <ExternalLink className="h-4 w-4" />
                            <span>Live Demo</span>
                          </a>
                        ) : null}
                      </>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>

      {/* Research Paper PDF Lightbox Modal */}
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
              className="relative max-h-[90vh] w-full max-w-4xl overflow-hidden rounded-3xl border border-cyan-400/30 bg-slate-900 shadow-2xl"
            >
              {/* Modal Header */}
              <div className="flex flex-wrap items-center justify-between border-b border-white/10 px-6 py-4 bg-slate-950/95 gap-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-cyan-400/40 bg-cyan-500/10 text-cyan-400">
                    <BookOpen className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white sm:text-lg font-outfit">
                      Digital Marketing vs Traditional Marketing
                    </h3>
                    <p className="text-xs text-cyan-300 font-medium">
                      KL University • School of Management
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <a
                    href="/bba-research-paper.pdf"
                    target="_blank"
                    rel="noreferrer"
                    download="Boda_Rithwik_BBA_Research_Paper.pdf"
                    className="inline-flex items-center gap-2 rounded-xl border border-cyan-400/40 bg-cyan-500/15 px-3.5 py-1.5 text-xs font-bold text-cyan-300 transition-all hover:bg-cyan-400 hover:text-slate-950"
                  >
                    <FileText className="h-4 w-4" />
                    <span>View 30-Page PDF</span>
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
              <div className="max-h-[calc(90vh-120px)] overflow-y-auto p-6 sm:p-8 space-y-6 text-slate-300">
                <div className="rounded-2xl border border-cyan-400/30 bg-cyan-950/20 p-5 backdrop-blur-md">
                  <div className="grid gap-3 sm:grid-cols-2 text-xs">
                    <div>
                      <p className="text-slate-400 font-semibold uppercase tracking-wider font-mono">Author:</p>
                      <p className="text-white font-bold text-sm">Boda Rithwik (ID: 23923020121)</p>
                      <p className="text-slate-300">Bachelor of Business Administration (Dual Degree)</p>
                    </div>
                    <div>
                      <p className="text-slate-400 font-semibold uppercase tracking-wider font-mono">Faculty Guide:</p>
                      <p className="text-white font-bold text-sm">Asst. Prof. Durgaprasad Navulla</p>
                      <p className="text-slate-300">KL University, School of Management</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <h4 className="text-base font-bold text-white flex items-center gap-2 font-outfit">
                    <Sparkles className="h-4 w-4 text-cyan-400" />
                    <span>Executive Abstract</span>
                  </h4>
                  <p className="text-xs sm:text-sm leading-relaxed text-slate-300">
                    Evaluating comparative cost efficiency, audience precision, consumer trust metrics, and ROI across traditional vs digital platforms.
                  </p>
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