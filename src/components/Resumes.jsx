import { motion } from "framer-motion";
import { FileText, ExternalLink, Download, Sparkles, Code2, Briefcase, Star } from "lucide-react";

function Resumes() {
  return (
    <section id="resumes" className="relative py-20 lg:py-28">
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
            <span>06 // MY RESUMES</span>
          </div>
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl font-outfit">
            My Resumes
          </h2>
          <p className="text-base leading-relaxed text-slate-300 sm:text-lg">
            Download my resumes to learn more about my education, technical skills, projects, and business administration background.
          </p>
        </motion.div>

        {/* Resumes Grid */}
        <div className="mt-12 grid gap-8 md:grid-cols-12 lg:gap-8 items-stretch">
          
          {/* CARD 1: B.Tech Resume (⭐ Primary - Spans 7 columns on desktop for prominent visual weight) */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="md:col-span-7 group relative flex flex-col justify-between overflow-hidden rounded-3xl border-2 border-cyan-400/60 bg-gradient-to-b from-slate-900/90 via-slate-900/80 to-slate-950/90 p-7 sm:p-8 backdrop-blur-2xl shadow-[0_0_35px_rgba(34,211,238,0.2)] transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400 hover:shadow-[0_0_45px_rgba(34,211,238,0.35)]"
          >
            {/* Top Cyan Highlight Beam */}
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-cyan-500 via-cyan-300 to-blue-500" />

            <div>
              {/* Header Badges */}
              <div className="flex flex-wrap items-center justify-between gap-2 mb-5">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-cyan-400/50 bg-cyan-500/20 px-3.5 py-1 text-xs font-extrabold text-cyan-300 shadow-[0_0_12px_rgba(34,211,238,0.3)] font-mono">
                  <Star className="h-3.5 w-3.5 fill-cyan-300 text-cyan-300" />
                  <span>PRIMARY QUALIFICATION</span>
                </span>
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-400/40 bg-cyan-500/15 text-cyan-300 shadow-[0_0_15px_rgba(34,211,238,0.2)]">
                  <Code2 className="h-6 w-6" />
                </div>
              </div>

              {/* Title & Subtitle */}
              <h3 className="text-2xl font-extrabold tracking-tight text-white sm:text-3xl group-hover:text-cyan-300 transition-colors font-outfit">
                B.Tech Resume
              </h3>
              <p className="text-sm font-bold text-cyan-400 mt-1 font-outfit">
                Computer Science & Information Technology (CSIT) / Cloud Native Engineering
              </p>

              {/* Description */}
              <p className="mt-4 text-sm sm:text-base leading-relaxed text-slate-200">
                B.Tech Resume - Computer Science & Information Technology (CSIT) / Cloud Native Software Engineering profile.
              </p>

              {/* Highlights Pill Stack */}
              <div className="mt-6 flex flex-wrap gap-2">
                {[
                  "CSIT (Computer Science)",
                  "Full Stack Development",
                  "Cloud Native & Microservices",
                  "React.js & Node.js",
                  "Spring Boot",
                  "AWS & Kubernetes",
                  "DevOps & GitHub Actions",
                  "DSA & REST APIs",
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
                className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-400 to-cyan-300 px-5 py-3.5 text-xs sm:text-sm font-bold text-slate-950 shadow-[0_0_20px_rgba(34,211,238,0.4)] transition-all duration-300 hover:from-cyan-300 hover:to-cyan-200 hover:shadow-[0_0_30px_rgba(34,211,238,0.6)] hover:scale-[1.02]"
              >
                <ExternalLink className="h-4 w-4" />
                <span>View Resume</span>
              </a>

              <a
                href="/B.Tech-Resume.pdf"
                download="B.Tech-Resume.pdf"
                className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl border border-cyan-400/40 bg-slate-950/90 px-5 py-3.5 text-xs sm:text-sm font-bold text-cyan-300 transition-all duration-300 hover:border-cyan-400 hover:bg-cyan-500/20 hover:shadow-[0_0_15px_rgba(34,211,238,0.2)]"
              >
                <Download className="h-4 w-4 text-cyan-400" />
                <span>Download Resume</span>
              </a>
            </div>
          </motion.div>

          {/* CARD 2: BBA Resume (Secondary - Spans 5 columns on desktop) */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="md:col-span-5 group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-white/10 bg-slate-900/60 p-7 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400/40 hover:bg-slate-900/90 hover:shadow-2xl hover:shadow-cyan-950/30"
          >
            <div>
              {/* Header Badge & Icon */}
              <div className="flex items-center justify-between mb-4">
                <span className="rounded-full border border-white/10 bg-slate-950/80 px-3.5 py-1 text-xs font-semibold text-slate-400 font-mono">
                  Secondary Profile
                </span>
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-slate-950/80 text-slate-400">
                  <Briefcase className="h-5 w-5" />
                </div>
              </div>

              {/* Title & Subtitle */}
              <h3 className="text-xl font-bold tracking-tight text-white group-hover:text-cyan-300 transition-colors font-outfit">
                BBA Resume
              </h3>
              <p className="text-xs font-semibold text-slate-400 mt-1 font-outfit">
                Business Administration
              </p>

              {/* Description */}
              <p className="mt-4 text-sm leading-relaxed text-slate-300">
                BBA Resume - Business Administration profile.
              </p>

              {/* Skills Pills */}
              <div className="mt-6 flex flex-wrap gap-2">
                {[
                  "Digital Marketing",
                  "Content Strategy",
                  "Customer Relationship Management",
                  "Advertising & Sales Promotion",
                ].map((pill) => (
                  <span
                    key={pill}
                    className="rounded-xl border border-white/10 bg-slate-950/70 px-3 py-1 text-xs font-medium text-slate-300"
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
                className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl border border-cyan-400/40 bg-cyan-500/10 px-4 py-3 text-xs font-bold text-cyan-300 transition-all duration-300 hover:bg-cyan-400 hover:text-slate-950 hover:shadow-[0_0_20px_rgba(34,211,238,0.4)]"
              >
                <ExternalLink className="h-4 w-4" />
                <span>View Resume</span>
              </a>

              <a
                href="/BBA-Resume.pdf"
                download="BBA-Resume.pdf"
                className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl border border-white/15 bg-slate-950/80 px-4 py-3 text-xs font-bold text-slate-200 transition-all duration-300 hover:border-cyan-400/50 hover:bg-slate-900 hover:text-white hover:shadow-[0_0_15px_rgba(34,211,238,0.2)]"
              >
                <Download className="h-4 w-4 text-cyan-400" />
                <span>Download Resume</span>
              </a>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

export default Resumes;
