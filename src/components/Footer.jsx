import { ArrowUp, Github, Linkedin, Mail, Code2 } from "lucide-react";

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Resumes", href: "#resumes" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Education", href: "#education" },
    { name: "Certifications", href: "#certificates" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <footer className="relative border-t border-white/10 bg-slate-950 pt-16 pb-8 text-slate-400">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-3 items-start justify-between">
          {/* Brand Col */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img
                src="/logo.png"
                alt="Boda Rithwik Logo"
                className="h-10 w-10 rounded-xl object-contain border border-amber-400/40 bg-black/50 p-0.5 shadow-[0_0_15px_rgba(245,158,11,0.3)]"
              />
              <span className="text-xl font-black tracking-wider text-white font-outfit uppercase">
                Boda Rithwik<span className="text-cyan-400">.</span>
              </span>
            </div>
            <p className="text-sm leading-relaxed text-slate-300 max-w-sm">
              Cloud-Native Software Engineer | Full-Stack Developer specializing in scalable microservices architectures, Kubernetes, AWS, and DevOps automation.
            </p>
            <div className="flex items-center gap-2.5 pt-2">
              <a
                href="https://github.com/BODARITHWIK"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub Profile"
                className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-slate-900 text-slate-300 transition-all duration-300 hover:border-cyan-400/50 hover:bg-slate-800 hover:text-white hover:shadow-[0_0_12px_rgba(34,211,238,0.2)]"
              >
                <Github className="h-4 w-4" />
              </a>
              <a
                href="https://www.linkedin.com/in/rithwik-boda-89b744316/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn Profile"
                className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-slate-900 text-slate-300 transition-all duration-300 hover:border-cyan-400/50 hover:bg-slate-800 hover:text-white hover:shadow-[0_0_12px_rgba(34,211,238,0.2)]"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a
                href="mailto:bodarithwik416@gmail.com"
                aria-label="Email"
                className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-slate-900 text-slate-300 transition-all duration-300 hover:border-cyan-400/50 hover:bg-slate-800 hover:text-white hover:shadow-[0_0_12px_rgba(34,211,238,0.2)]"
              >
                <Mail className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-200 mb-4 font-mono">
              Quick Navigation
            </h3>
            <ul className="grid grid-cols-2 gap-2 text-sm font-medium">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      document
                        .getElementById(link.href.substring(1))
                        ?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="text-slate-400 transition-colors duration-200 hover:text-cyan-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Scroll to top action */}
          <div className="flex flex-col md:items-end justify-between space-y-4">
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-slate-200 mb-1 font-mono">
                Based In
              </p>
              <p className="text-sm font-semibold text-slate-300">
                Andhra Pradesh, India
              </p>
            </div>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-slate-900 px-4 py-2.5 text-xs font-bold text-slate-200 transition-all duration-300 hover:border-cyan-400/50 hover:bg-slate-800 hover:text-white hover:shadow-[0_0_15px_rgba(34,211,238,0.2)]"
            >
              <span>Back to Top</span>
              <ArrowUp className="h-4 w-4 text-cyan-400" />
            </button>
          </div>
        </div>

        {/* Bottom copyright line */}
        <div className="mt-12 border-t border-white/10 pt-6 text-center text-xs font-medium text-slate-500 font-mono">
          <p>© 2026 Boda Rithwik. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;