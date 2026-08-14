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
} from "lucide-react";
import emailjs from "@emailjs/browser";

function Contact() {
  const formRef = useRef(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
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
      setValidationError("Full Name cannot be empty.");
      return false;
    }
    if (!formData.email.trim()) {
      setValidationError("Email Address cannot be empty.");
      return false;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email.trim())) {
      setValidationError("Please enter a valid email address.");
      return false;
    }
    if (!formData.message.trim()) {
      setValidationError("Message cannot be empty.");
      return false;
    }
    setValidationError("");
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // 1. Validation before starting loading state
    if (!validateForm()) {
      return;
    }

    setIsSending(true);
    setStatus("");
    setErrorMessage("");

    // Create a 12-second timeout to prevent permanent hanging on mobile networks
    const TIMEOUT_MS = 12000;
    let timeoutId;

    const timeoutPromise = new Promise((_, reject) => {
      timeoutId = setTimeout(() => {
        reject(new Error("Request timed out. Please check your internet connection and try again."));
      }, TIMEOUT_MS);
    });

    try {
      const templateParams = {
        name: formData.name.trim(),
        from_name: formData.name.trim(),
        email: formData.email.trim(),
        from_email: formData.email.trim(),
        reply_to: formData.email.trim(),
        message: formData.message.trim(),
      };

      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID || "service_pgwupzl";
      const primaryTemplateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "s5g9sr8";
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "OAifY5BpnP8W81siw";

      const candidateServiceIds = Array.from(
        new Set([serviceId, "service_pgwupzl", "service_pgwpuzl"])
      );

      const candidateTemplateIds = Array.from(
        new Set([
          primaryTemplateId,
          primaryTemplateId.startsWith("template_")
            ? primaryTemplateId.replace(/^template_/, "")
            : `template_${primaryTemplateId}`,
          "s5g9sr8",
          "template_s5g9sr8",
          "hd2cebo",
          "template_hd2cebo",
        ])
      );

      const sendPromise = (async () => {
        let lastError = null;
        let sentSuccessfully = false;

        for (const sId of candidateServiceIds) {
          for (const tId of candidateTemplateIds) {
            try {
              await emailjs.send(sId, tId, templateParams, publicKey);
              sentSuccessfully = true;
              break;
            } catch (err) {
              lastError = err;
            }
          }
          if (sentSuccessfully) break;
        }

        if (!sentSuccessfully) {
          throw lastError || new Error("Unable to send message via EmailJS.");
        }
        return true;
      })();

      // Race between send request and 12s timeout
      await Promise.race([sendPromise, timeoutPromise]);

      // Success
      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Message sending failed:", error);
      setStatus("error");
      setErrorMessage(
        error?.text || error?.message || "Unable to send your message. Please try again."
      );
    } finally {
      clearTimeout(timeoutId);
      setIsSending(false); // ALWAYS reset loading state
    }
  };

  const contactDetails = [
    {
      icon: Mail,
      title: "Email Address",
      value: "bodarithwik416@gmail.com",
      link: "mailto:bodarithwik416@gmail.com",
    },
    {
      icon: Phone,
      title: "Phone Number",
      value: "+91 6300933175",
      link: "tel:+916300933175",
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Anakapalle, Andhra Pradesh, India",
      link: null,
    },
  ];

  return (
    <section id="contact" className="relative py-20 lg:py-28">
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
            <MessageSquare className="h-3.5 w-3.5" />
            <span>07 // LET'S CONNECT</span>
          </div>
          <h2 className="text-4xl font-black tracking-tighter text-white sm:text-5xl lg:text-6xl font-outfit uppercase">
            LET'S CONNECT & WORK TOGETHER
          </h2>
          <p className="text-base leading-relaxed text-slate-300 sm:text-lg">
            Have a software engineering role, cloud project, or technical opportunity to discuss? Send a message below.
          </p>
        </motion.div>

        {/* Contact Layout */}
        <div className="mt-12 grid gap-8 lg:grid-cols-12 items-start">
          {/* Contact Details Column */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="rounded-3xl border border-white/10 bg-slate-900/60 p-7 backdrop-blur-xl space-y-6">
              <h3 className="text-xl font-bold text-white font-outfit">
                Direct Reachout
              </h3>
              <p className="text-sm leading-relaxed text-slate-300">
                Feel free to contact me via email or phone for software development roles, cloud engineering opportunities, or technical collaborations.
              </p>

              <div className="space-y-4 pt-2">
                {contactDetails.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={item.title}
                      className="flex items-center gap-4 rounded-2xl border border-white/10 bg-slate-950/70 p-4 transition-all duration-200 hover:border-cyan-400/40 hover:bg-slate-900"
                    >
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-cyan-400/30 bg-cyan-500/10 text-cyan-300">
                        <Icon className="h-5 w-5" />
                      </div>
                      <div>
                        <div className="text-xs font-semibold text-slate-400 font-mono">
                          {item.title}
                        </div>
                        {item.link ? (
                          <a
                            href={item.link}
                            className="text-sm font-bold text-white transition-colors hover:text-cyan-300"
                          >
                            {item.value}
                          </a>
                        ) : (
                          <div className="text-sm font-bold text-white">
                            {item.value}
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Social Profiles */}
              <div className="pt-4 border-t border-white/10">
                <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3 font-mono">
                  Connect Online
                </div>
                <div className="flex items-center gap-3">
                  <a
                    href="https://github.com/BODARITHWIK"
                    target="_blank"
                    rel="noreferrer"
                    className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-white/10 bg-slate-950/80 py-3 text-xs font-bold text-slate-200 transition-all duration-300 hover:border-cyan-400/50 hover:bg-slate-900 hover:text-white"
                  >
                    <Github className="h-4 w-4 text-cyan-400" />
                    <span>GitHub</span>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/rithwik-boda-89b744316/"
                    target="_blank"
                    rel="noreferrer"
                    className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-white/10 bg-slate-950/80 py-3 text-xs font-bold text-slate-200 transition-all duration-300 hover:border-cyan-400/50 hover:bg-slate-900 hover:text-white"
                  >
                    <Linkedin className="h-4 w-4 text-cyan-400" />
                    <span>LinkedIn</span>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Form Column */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="lg:col-span-7"
          >
            <div className="rounded-3xl border border-white/10 bg-slate-900/60 p-7 sm:p-8 backdrop-blur-xl">
              <h3 className="text-xl font-bold text-white font-outfit mb-6">
                Send a Message
              </h3>

              {status === "success" && (
                <div className="mb-6 flex items-start gap-3 rounded-2xl border border-emerald-500/40 bg-emerald-500/10 p-4 text-sm font-semibold text-emerald-300">
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-emerald-400 mt-0.5" />
                  <div>
                    <p className="font-bold">Message sent successfully!</p>
                    <p className="text-xs font-normal text-emerald-200/90 mt-0.5">
                      Message sent successfully! I'll get back to you soon.
                    </p>
                  </div>
                </div>
              )}

              {status === "error" && (
                <div className="mb-6 flex items-start gap-3 rounded-2xl border border-rose-500/40 bg-rose-500/10 p-4 text-sm font-semibold text-rose-300">
                  <AlertCircle className="h-5 w-5 shrink-0 text-rose-400 mt-0.5" />
                  <div>
                    <p className="font-bold">Unable to send your message</p>
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
                <div>
                  <label htmlFor="name" className="block text-xs font-bold text-slate-300 mb-2 font-mono uppercase tracking-wider">
                    Full Name <span className="text-cyan-400">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    className="w-full rounded-xl border border-white/10 bg-slate-950/80 px-4 py-3 text-sm text-white placeholder-slate-500 focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400 min-h-[48px]"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs font-bold text-slate-300 mb-2 font-mono uppercase tracking-wider">
                    Email Address <span className="text-cyan-400">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="name@example.com"
                    className="w-full rounded-xl border border-white/10 bg-slate-950/80 px-4 py-3 text-sm text-white placeholder-slate-500 focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400 min-h-[48px]"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-bold text-slate-300 mb-2 font-mono uppercase tracking-wider">
                    Your Message <span className="text-cyan-400">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="How can I help you?"
                    className="w-full rounded-xl border border-white/10 bg-slate-950/80 px-4 py-3 text-sm text-white placeholder-slate-500 focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSending}
                  className="inline-flex w-full items-center justify-center gap-2.5 rounded-xl bg-gradient-to-r from-cyan-400 to-cyan-300 px-6 py-3.5 text-sm font-bold text-slate-950 shadow-[0_0_20px_rgba(34,211,238,0.4)] transition-all duration-300 hover:from-cyan-300 hover:to-cyan-200 hover:shadow-[0_0_30px_rgba(34,211,238,0.6)] hover:scale-[1.01] disabled:opacity-50 min-h-[48px]"
                >
                  {isSending ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin text-slate-950" />
                      <span>Sending Message...</span>
                    </>
                  ) : status === "success" ? (
                    <>
                      <CheckCircle2 className="h-4 w-4 text-slate-950" />
                      <span>Message Sent ✓</span>
                    </>
                  ) : status === "error" ? (
                    <>
                      <RefreshCw className="h-4 w-4 text-slate-950" />
                      <span>Try Again</span>
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