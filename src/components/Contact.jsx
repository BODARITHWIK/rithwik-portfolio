import { useState, useRef } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Github,
  Send,
  CheckCircle2,
  MessageSquare,
  AlertCircle,
  Loader2,
  RefreshCw,
  Sparkles
} from "lucide-react";
import emailjs from "@emailjs/browser";

function Contact() {
  const formRef = useRef(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState(""); // "success" | "error" | ""
  const [errorMessage, setErrorMessage] = useState("");
  const [validationError, setValidationError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (validationError) setValidationError("");
    if (status) setStatus("");
    if (errorMessage) setErrorMessage("");
  };

  const validateForm = () => {
    if (!formData.name.trim()) {
      setValidationError("Please enter your full name.");
      return false;
    }
    if (!formData.email.trim()) {
      setValidationError("Please enter your email address.");
      return false;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email.trim())) {
      setValidationError("Please enter a valid email address.");
      return false;
    }
    if (!formData.subject.trim()) {
      setValidationError("Please enter a subject.");
      return false;
    }
    if (!formData.message.trim()) {
      setValidationError("Please write your message.");
      return false;
    }
    setValidationError("");
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSending(true);
    setStatus("");
    setErrorMessage("");

    // 12-second timeout protection so form never stays stuck
    const TIMEOUT_MS = 12000;
    let timeoutId;

    const timeoutPromise = new Promise((_, reject) => {
      timeoutId = setTimeout(() => {
        reject(new Error("Request timed out. Please check your network connection and try again."));
      }, TIMEOUT_MS);
    });

    try {
      const templateParams = {
        name: formData.name.trim(),
        from_name: formData.name.trim(),
        email: formData.email.trim(),
        from_email: formData.email.trim(),
        reply_to: formData.email.trim(),
        subject: formData.subject.trim(),
        message: formData.message.trim(),
      };

      // Environmental credentials with fallback to current workspace keys
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID || "service_pgwpuzl";
      const primaryTemplateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "template_hd2cebo";
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "OAifY5BpnP8W81siw";

      const candidateServices = Array.from(
        new Set([serviceId, "service_pgwpuzl", "service_pgwupzl"])
      );

      const candidateTemplates = Array.from(
        new Set([
          primaryTemplateId,
          primaryTemplateId.startsWith("template_")
            ? primaryTemplateId.replace(/^template_/, "")
            : `template_${primaryTemplateId}`,
          "template_hd2cebo",
          "hd2cebo",
          "template_s5g9sr8",
          "s5g9sr8",
        ])
      );

      const sendPromise = (async () => {
        let lastErr = null;
        let sentOk = false;

        for (const sId of candidateServices) {
          for (const tId of candidateTemplates) {
            try {
              await emailjs.send(sId, tId, templateParams, publicKey);
              sentOk = true;
              break;
            } catch (err) {
              lastErr = err;
            }
          }
          if (sentOk) break;
        }

        if (!sentOk) {
          throw lastErr || new Error("Failed to send message through EmailJS.");
        }
        return true;
      })();

      await Promise.race([sendPromise, timeoutPromise]);

      setStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (err) {
      console.error("Contact Form Error:", err);
      setStatus("error");
      setErrorMessage(
        err?.text || err?.message || "Unable to send your message. Please try again."
      );
    } finally {
      clearTimeout(timeoutId);
      setIsSending(false); // ALWAYS reset loading state
    }
  };

  const contactItems = [
    {
      icon: Mail,
      title: "Email Address",
      value: "bodarithwik416@gmail.com",
      href: "mailto:bodarithwik416@gmail.com",
    },
    {
      icon: Phone,
      title: "Phone Number",
      value: "+91 6300933175",
      href: "tel:+916300933175",
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Vijayawada / Anakapalle, Andhra Pradesh, India",
      href: null,
    },
  ];

  return (
    <section id="contact" className="relative py-20 lg:py-28 bg-[#070d19]">
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
            <MessageSquare className="h-3.5 w-3.5 text-cyan-400" />
            <span>09 // CONTACT & REACHOUT</span>
          </div>
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl font-outfit">
            Let's Connect
          </h2>
          <p className="text-base leading-relaxed text-slate-300 sm:text-lg">
            Looking for a Software Engineer, Cloud Native Developer, or DevOps Engineer? Send a message below.
          </p>
        </motion.div>

        {/* Main Contact Grid */}
        <div className="mt-12 grid gap-8 lg:grid-cols-12 items-start">
          
          {/* Direct Details (5 Cols) */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="rounded-3xl border border-white/10 bg-slate-900/70 p-7 backdrop-blur-xl space-y-6">
              <h3 className="text-xl font-bold text-white font-outfit">
                Direct Contact Information
              </h3>

              <div className="space-y-4">
                {contactItems.map((item) => {
                  const Icon = item.icon;
                  const CardComponent = item.href ? "a" : "div";
                  return (
                    <CardComponent
                      key={item.title}
                      {...(item.href ? { href: item.href } : {})}
                      className="flex items-center gap-4 rounded-2xl border border-white/10 bg-slate-950/80 p-4 transition-all duration-200 hover:border-cyan-400/40 hover:bg-slate-900 group"
                    >
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-cyan-400/30 bg-cyan-500/10 text-cyan-300 group-hover:scale-105 transition-transform">
                        <Icon className="h-5 w-5" />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-slate-400 font-mono">
                          {item.title}
                        </div>
                        <div className="text-sm font-bold text-white mt-0.5 group-hover:text-cyan-300 transition-colors">
                          {item.value}
                        </div>
                      </div>
                    </CardComponent>
                  );
                })}
              </div>

              {/* Profiles Row */}
              <div className="pt-4 border-t border-white/10">
                <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3 font-mono">
                  Online Presence
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <a
                    href="https://github.com/BODARITHWIK"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-slate-950/80 py-3 text-xs font-bold text-slate-200 transition-all duration-300 hover:border-cyan-400/50 hover:bg-slate-900 hover:text-cyan-300"
                  >
                    <Github className="h-4 w-4 text-cyan-400" />
                    <span>GitHub Profile</span>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/rithwik-boda-89b744316/"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-slate-950/80 py-3 text-xs font-bold text-slate-200 transition-all duration-300 hover:border-cyan-400/50 hover:bg-slate-900 hover:text-cyan-300"
                  >
                    <Linkedin className="h-4 w-4 text-cyan-400" />
                    <span>LinkedIn Profile</span>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Form Column (7 Cols) */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-7"
          >
            <div className="rounded-3xl border border-cyan-400/30 bg-slate-900/80 p-7 sm:p-9 backdrop-blur-2xl shadow-xl">
              <h3 className="text-xl font-bold text-white font-outfit mb-6">
                Send Me a Message
              </h3>

              {status === "success" && (
                <div className="mb-6 flex items-start gap-3 rounded-2xl border border-emerald-500/40 bg-emerald-500/10 p-4 text-sm font-semibold text-emerald-300">
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-emerald-400 mt-0.5" />
                  <div>
                    <p className="font-bold">Message sent successfully!</p>
                    <p className="text-xs font-normal text-emerald-200/90 mt-0.5">
                      Thank you for reaching out. I will respond to your message shortly.
                    </p>
                  </div>
                </div>
              )}

              {status === "error" && (
                <div className="mb-6 flex items-start gap-3 rounded-2xl border border-rose-500/40 bg-rose-500/10 p-4 text-sm font-semibold text-rose-300">
                  <AlertCircle className="h-5 w-5 shrink-0 text-rose-400 mt-0.5" />
                  <div>
                    <p className="font-bold">Unable to send message</p>
                    <p className="text-xs font-normal text-rose-200/90 mt-0.5">
                      {errorMessage || "Unable to send your message. Please try again."}
                    </p>
                  </div>
                </div>
              )}

              {validationError && (
                <div className="mb-6 flex items-center gap-2 rounded-xl border border-amber-500/40 bg-amber-500/10 p-3 text-xs font-bold text-amber-300">
                  <AlertCircle className="h-4 w-4 shrink-0 text-amber-400" />
                  <span>{validationError}</span>
                </div>
              )}

              <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="block text-xs font-bold text-slate-300 mb-2 font-mono uppercase tracking-wider">
                      Your Name <span className="text-cyan-400">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. John Doe"
                      className="w-full rounded-2xl border border-white/10 bg-slate-950/80 px-4 py-3 text-sm text-white placeholder-slate-500 focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400 min-h-[48px]"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-xs font-bold text-slate-300 mb-2 font-mono uppercase tracking-wider">
                      Your Email <span className="text-cyan-400">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="name@example.com"
                      className="w-full rounded-2xl border border-white/10 bg-slate-950/80 px-4 py-3 text-sm text-white placeholder-slate-500 focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400 min-h-[48px]"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-xs font-bold text-slate-300 mb-2 font-mono uppercase tracking-wider">
                    Subject <span className="text-cyan-400">*</span>
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="e.g. Software Engineering Opportunity"
                    className="w-full rounded-2xl border border-white/10 bg-slate-950/80 px-4 py-3 text-sm text-white placeholder-slate-500 focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400 min-h-[48px]"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-bold text-slate-300 mb-2 font-mono uppercase tracking-wider">
                    Message <span className="text-cyan-400">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Describe your opportunity or inquiry..."
                    className="w-full rounded-2xl border border-white/10 bg-slate-950/80 px-4 py-3 text-sm text-white placeholder-slate-500 focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSending}
                  className="inline-flex w-full items-center justify-center gap-2.5 rounded-2xl bg-gradient-to-r from-cyan-400 to-teal-400 px-6 py-4 text-sm font-black text-slate-950 shadow-[0_0_25px_rgba(34,211,238,0.4)] transition-all duration-300 hover:from-cyan-300 hover:to-teal-300 hover:shadow-[0_0_35px_rgba(34,211,238,0.6)] hover:scale-[1.01] disabled:opacity-50 min-h-[50px]"
                >
                  {isSending ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin text-slate-950" />
                      <span>Sending Message...</span>
                    </>
                  ) : status === "success" ? (
                    <>
                      <CheckCircle2 className="h-4 w-4 text-slate-950" />
                      <span>Message Sent Successfully ✓</span>
                    </>
                  ) : status === "error" ? (
                    <>
                      <RefreshCw className="h-4 w-4 text-slate-950" />
                      <span>Try Sending Again</span>
                    </>
                  ) : (
                    <>
                      <Send className="h-4 w-4 text-slate-950" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

export default Contact;