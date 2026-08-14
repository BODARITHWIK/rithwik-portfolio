import { motion } from "framer-motion";
import { FileText, ExternalLink, Download, Sparkles, Code2, Briefcase, Star, CheckCircle2 } from "lucide-react";

function Resumes() {
  return (
    <section id="resumes" className="relative py-20 lg:py-28 bg-[#070d19]">
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
            <FileText className="h-3.5 w-3.5 text-cyan-400" />
            <span>07 // RESUMES</span>
          </div>
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl font-outfit">
            Professional Resumes
          </h2>
          <p className="text-base leading-relaxed text-slate-300 sm:text-lg">
            Review and download my specialized resumes for software engineering and business management positions.
          </p>
        </motion.div>

        {/* Resumes Grid */}
        <div className="mt-12 grid gap-8 md:grid-cols-12 items-stretch">
          
          {/* CARD 01: B.Tech Resume (⭐ PRIMARY - Large featured 7 cols card) */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="md:col-span-7 group relative flex flex-col justify-between overflow-hidden rounded-3xl border-2 border-cyan-400/60 bg-gradient-to-b from-slate-900/95 via-slate-900/85 to-slate-950/95 p-7 sm:p-9 backdrop-blur-2xl shadow-[0_0_40px_rgba(34,211,238,0.2)] transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400 hover:shadow-[0_0_55px_rgba(34,211,238,0.35)]"
          >
            {/* Top Cyan Highlight Beam */}
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-cyan-400 via-teal-300 to-indigo-500" />

            <div>
              {/* Header Badges */}
              <div className="flex flex-wrap items-center justify-between gap-2 mb-5">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-cyan-400/50 bg-cyan-500/20 px-3.5 py-1 text-xs font-extrabold text-cyan-300 shadow-[0_0_12px_rgba(34,211,238,0.3)] font-mono">
                  <Star className="h-3.5 w-3.5 fill-cyan-300 text-cyan-300" />
                  <span>01 — B.TECH RESUME — PRIMARY</span>
                </span>
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-400/40 bg-cyan-500/15 text-cyan-300 shadow-[0_0_15px_rgba(34,211,238,0.2)]">
                  <Code2 className="h-6 w-6" />
                </div>
              </div>

              {/* Title & Subtitle */}
              <h3 className="text-2xl font-extrabold tracking-tight text-white sm:text-3xl group-hover:text-cyan-300 transition-colors font-outfit">
                B.Tech CSIT Resume
              </h3>
              <p className="text-sm font-bold text-cyan-400 mt-1 font-mono">
                Computer Science & Information Technology (CSIT) / Cloud Native Engineering
              </p>

              {/* Description */}
              <p className="mt-4 text-sm sm:text-base leading-relaxed text-slate-200">
                Primary engineering resume emphasizing full-stack software development, containerized microservices architectures, AWS cloud infrastructure, Kubernetes, and Data Structures & Algorithms.
              </p>

              {/* Highlights Pills */}
              <div className="mt-6 flex flex-wrap gap-2">
                {[
                  "B.Tech CSIT (CGPA: 8.51)",
                  "Cloud Native & Microservices",
                  "Java & Spring Boot",
                  "React.js & Full Stack",
                  "AWS & Kubernetes",
                  "Docker & CI/CD",
                  "RESTful APIs & MySQL",
                ].map((pill) => (
                  <span
                    key={pill}
                    className="rounded-xl border border-cyan-400/30 bg-slate-950/80 px-3 py-1 text-xs font-semibold text-cyan-200 shadow-[0_0_8px_rgba(34,211,238,0.1)]"
                  >
                    {pill}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-3 pt-6 border-t border-white/10">
              <a
                href="/B.Tech-Resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="inline-flex flex-1 items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-cyan-400 to-teal-400 px-5 py-3.5 text-xs sm:text-sm font-black text-slate-950 shadow-[0_0_20px_rgba(34,211,238,0.4)] transition-all duration-300 hover:from-cyan-300 hover:to-teal-300 hover:shadow-[0_0_30px_rgba(34,211,238,0.6)] hover:scale-[1.02] min-h-[48px]"
              >
                <ExternalLink className="h-4 w-4" />
                <span>View B.Tech Resume</span>
              </a>

              <a
                href="/B.Tech-Resume.pdf"
                download="B.Tech-Resume.pdf"
                className="inline-flex flex-1 items-center justify-center gap-2 rounded-2xl border border-cyan-400/40 bg-slate-950/90 px-5 py-3.5 text-xs sm:text-sm font-bold text-cyan-300 transition-all duration-300 hover:border-cyan-400 hover:bg-cyan-500/20 hover:shadow-[0_0_15px_rgba(34,211,238,0.2)] min-h-[48px]"
              >
                <Download className="h-4 w-4 text-cyan-400" />
                <span>Download B.Tech Resume</span>
              </a>
            </div>
          </motion.div>

          {/* CARD 02: BBA Resume (Secondary - 5 cols card) */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.12 }}
            className="md:col-span-5 group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-white/10 bg-slate-900/60 p-7 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400/40 hover:bg-slate-900/90 hover:shadow-2xl hover:shadow-cyan-950/30"
          >
            <div>
              {/* Header Badge */}
              <div className="flex items-center justify-between mb-5">
                <span className="rounded-full border border-purple-400/50 bg-purple-500/20 px-3.5 py-1 text-xs font-bold text-purple-300 font-mono">
                  02 — BBA RESUME — DUAL DEGREE
                </span>
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-purple-400/30 bg-purple-500/15 text-purple-300">
                  <Briefcase className="h-5 w-5" />
                </div>
              </div>

              {/* Title & Subtitle */}
              <h3 className="text-xl font-extrabold tracking-tight text-white group-hover:text-purple-300 transition-colors font-outfit">
                BBA Business Resume
              </h3>
              <p className="text-xs font-bold text-purple-300 mt-1 font-mono">
                Bachelor of Business Administration (Dual Degree)
              </p>

              {/* Description */}
              <p className="mt-4 text-sm leading-relaxed text-slate-300">
                Professional business administration resume highlighting strategic management, digital marketing campaigns, business analytics, financial decision-making, and organizational leadership.
              </p>

              {/* Pills */}
              <div className="mt-6 flex flex-wrap gap-2">
                {[
                  "BBA Degree (CGPA: 8.68)",
                  "Business Administration",
                  "Digital Marketing Strategy",
                  "Business Analytics",
                  "Strategic Leadership",
                  "Financial Insights",
                ].map((pill) => (
                  <span
                    key={pill}
                    className="rounded-xl border border-purple-400/30 bg-slate-950/70 px-3 py-1 text-xs font-semibold text-purple-200"
                  >
                    {pill}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-3 pt-5 border-t border-white/10">
              <a
                href="/BBA-Resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="inline-flex flex-1 items-center justify-center gap-2 rounded-2xl border border-white/20 bg-slate-950/80 px-4 py-3 text-xs font-bold text-slate-200 transition-all duration-300 hover:border-cyan-400/50 hover:bg-slate-900 hover:text-cyan-300 min-h-[44px]"
              >
                <ExternalLink className="h-4 w-4" />
                <span>View BBA Resume</span>
              </a>

              <a
                href="/BBA-Resume.pdf"
                download="BBA-Resume.pdf"
                className="inline-flex flex-1 items-center justify-center gap-2 rounded-2xl border border-white/15 bg-slate-950/80 px-4 py-3 text-xs font-bold text-slate-300 transition-all duration-300 hover:border-cyan-400/50 hover:bg-slate-900 hover:text-white min-h-[44px]"
              >
                <Download className="h-4 w-4 text-slate-400" />
                <span>Download BBA Resume</span>
              </a>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

export default Resumes;
