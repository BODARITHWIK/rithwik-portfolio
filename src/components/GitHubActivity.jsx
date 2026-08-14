import { motion } from "framer-motion";
import { Github, ExternalLink, GitCommit, Star, GitFork, Sparkles } from "lucide-react";

function GitHubActivity() {
  const username = "BODARITHWIK";
  const profileUrl = `https://github.com/${username}`;

  return (
    <section id="github-activity" className="relative py-20 lg:py-28">
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
            <Github className="h-3.5 w-3.5" />
            <span>08 // OPEN SOURCE IMPACT</span>
          </div>
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl font-outfit">
            GitHub Activity & Contributions
          </h2>
          <p className="text-base leading-relaxed text-slate-300 sm:text-lg">
            An overview of my active open source work, codebase repositories, commits, and technical contributions.
          </p>
        </motion.div>

        {/* GitHub Stats Card Grid */}
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          <motion.a
            href={profileUrl}
            target="_blank"
            rel="noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="group relative overflow-hidden rounded-3xl border border-white/10 bg-slate-900/60 p-6 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400/50 hover:bg-slate-900/90 hover:shadow-2xl hover:shadow-cyan-950/40"
          >
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-bold uppercase tracking-wider text-cyan-300 font-mono">
                Developer Profile
              </span>
              <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-cyan-400/30 bg-cyan-500/10 text-cyan-300">
                <Github className="h-5 w-5" />
              </div>
            </div>
            <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors font-outfit">
              @{username}
            </h3>
            <p className="text-xs font-medium text-slate-400 mt-1">
              Building cloud-native microservices & full-stack apps
            </p>
            <div className="mt-6 flex items-center gap-1 text-xs font-bold text-cyan-300 pt-3 border-t border-white/10">
              <span>Visit GitHub Profile</span>
              <ExternalLink className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
            </div>
          </motion.a>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="group relative overflow-hidden rounded-3xl border border-white/10 bg-slate-900/60 p-6 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400/50 hover:bg-slate-900/90 hover:shadow-2xl hover:shadow-cyan-950/40"
          >
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-bold uppercase tracking-wider text-blue-300 font-mono">
                Featured Repo
              </span>
              <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-blue-400/30 bg-blue-500/10 text-blue-300">
                <GitCommit className="h-5 w-5" />
              </div>
            </div>
            <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors font-outfit">
              Student Management
            </h3>
            <p className="text-xs font-medium text-slate-400 mt-1">
              Cloud-Native Kubernetes & Spring Boot Microservices
            </p>
            <div className="mt-6 flex items-center gap-2 text-xs font-bold text-blue-300 pt-3 border-t border-white/10">
              <span className="rounded-full border border-blue-400/30 bg-blue-500/10 px-2 py-0.5">Java</span>
              <span className="rounded-full border border-blue-400/30 bg-blue-500/10 px-2 py-0.5">K8s</span>
              <span className="rounded-full border border-blue-400/30 bg-blue-500/10 px-2 py-0.5">AWS</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="group relative overflow-hidden rounded-3xl border border-white/10 bg-slate-900/60 p-6 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400/50 hover:bg-slate-900/90 hover:shadow-2xl hover:shadow-cyan-950/40"
          >
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-300 font-mono">
                Full-Stack Repo
              </span>
              <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-emerald-400/30 bg-emerald-500/10 text-emerald-300">
                <Star className="h-5 w-5" />
              </div>
            </div>
            <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors font-outfit">
              Car Rental System
            </h3>
            <p className="text-xs font-medium text-slate-400 mt-1">
              Role-Based Fleet Booking Platform
            </p>
            <div className="mt-6 flex items-center gap-2 text-xs font-bold text-emerald-300 pt-3 border-t border-white/10">
              <span className="rounded-full border border-emerald-400/30 bg-emerald-500/10 px-2 py-0.5">React</span>
              <span className="rounded-full border border-emerald-400/30 bg-emerald-500/10 px-2 py-0.5">Node.js</span>
              <span className="rounded-full border border-emerald-400/30 bg-emerald-500/10 px-2 py-0.5">MySQL</span>
            </div>
          </motion.div>
        </div>

        {/* GitHub Calendar Container */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-8 overflow-hidden rounded-3xl border border-white/10 bg-slate-900/60 p-6 backdrop-blur-xl"
        >
          <div className="flex items-center justify-between mb-4 pb-3 border-b border-white/10">
            <div className="flex items-center gap-2">
              <GitCommit className="h-4 w-4 text-cyan-400" />
              <span className="text-xs font-bold uppercase tracking-wider text-white font-mono">
                Contribution Chart
              </span>
            </div>
            <a
              href={profileUrl}
              target="_blank"
              rel="noreferrer"
              className="text-xs font-bold text-cyan-300 hover:underline flex items-center gap-1"
            >
              <span>View github.com/BODARITHWIK</span>
              <ExternalLink className="h-3 w-3" />
            </a>
          </div>

          {/* GitHub Activity Chart Image / Responsive Embed */}
          <div className="overflow-x-auto py-2 flex justify-center">
            <img
              src={`https://ghchart.rshah.org/22d3ee/${username}`}
              alt="Boda Rithwik's GitHub Contribution Chart"
              className="min-w-[650px] w-full max-w-4xl opacity-90 transition-opacity hover:opacity-100 filter drop-shadow-[0_0_15px_rgba(34,211,238,0.25)]"
              onError={(e) => {
                e.currentTarget.onerror = null;
                e.currentTarget.style.display = "none";
              }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default GitHubActivity;