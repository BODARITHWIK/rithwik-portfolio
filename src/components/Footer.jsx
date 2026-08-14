import { Github, Linkedin, Mail, ArrowUp, Code2, Heart, Sparkles } from "lucide-react";

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-cyan-500/20 bg-[#040812] pt-16 pb-12 text-slate-400">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        <div className="grid gap-10 md:grid-cols-12 pb-12 border-b border-white/10">
          
          {/* Brand Info (Spans 6 cols) */}
          <div className="md:col-span-6 space-y-4">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-cyan-400/40 bg-slate-900 text-cyan-300 shadow-[0_0_12px_rgba(34,211,238,0.2)]">
                <Code2 className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-xl font-extrabold tracking-wider text-white font-outfit uppercase">
                  BODA RITHWIK
                </h3>
                <p className="text-xs font-bold text-cyan-300 font-mono">
                  B.Tech Computer Science Student • Cloud Native Engineering
                </p>
              </div>
            </div>
            <p className="text-xs sm:text-sm leading-relaxed text-slate-300 max-w-md">
              Specializing in cloud-native software development, containerized microservices architectures, AWS infrastructure, and modern DevOps solutions.
            </p>
          </div>

          {/* Quick Links (3 cols) */}
          <div className="md:col-span-3 space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-white font-mono">
              Quick Navigation
            </div>
            <ul className="space-y-2 text-xs font-semibold">
              <li>
                <a href="#about" className="hover:text-cyan-300 transition-colors">About Me</a>
              </li>
              <li>
                <a href="#education" className="hover:text-cyan-300 transition-colors">Education (B.Tech Primary)</a>
              </li>
              <li>
                <a href="#skills" className="hover:text-cyan-300 transition-colors">Skills & Tech Stack</a>
              </li>
              <li>
                <a href="#projects" className="hover:text-cyan-300 transition-colors">Featured Projects</a>
              </li>
              <li>
                <a href="#certificates" className="hover:text-cyan-300 transition-colors">Certifications</a>
              </li>
              <li>
                <a href="#resumes" className="hover:text-cyan-300 transition-colors">Download Resumes</a>
              </li>
            </ul>
          </div>

          {/* Connect & Social (3 cols) */}
          <div className="md:col-span-3 space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-white font-mono">
              Connect
            </div>
            <div className="space-y-2 text-xs font-semibold">
              <a
                href="https://github.com/BODARITHWIK"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-slate-300 hover:text-cyan-300 transition-colors"
              >
                <Github className="h-4 w-4 text-cyan-400" />
                <span>GitHub</span>
              </a>
              <a
                href="https://www.linkedin.com/in/rithwik-boda-89b744316/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-slate-300 hover:text-cyan-300 transition-colors"
              >
                <Linkedin className="h-4 w-4 text-cyan-400" />
                <span>LinkedIn</span>
              </a>
              <a
                href="mailto:bodarithwik416@gmail.com"
                className="flex items-center gap-2 text-slate-300 hover:text-cyan-300 transition-colors"
              >
                <Mail className="h-4 w-4 text-cyan-400" />
                <span>bodarithwik416@gmail.com</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-semibold text-slate-400">
          <div>
            © {new Date().getFullYear()} <strong className="text-white">Boda Rithwik</strong>. All Rights Reserved.
          </div>

          <div className="flex items-center gap-4">
            <span className="text-[11px] font-mono text-cyan-300">
              B.Tech CSIT (CGPA: 8.51) • KL University
            </span>
            <button
              onClick={scrollToTop}
              aria-label="Back to Top"
              className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-slate-900 text-slate-300 transition-all duration-300 hover:border-cyan-400/40 hover:bg-cyan-500/20 hover:text-cyan-300"
            >
              <ArrowUp className="h-4 w-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}

export default Footer;