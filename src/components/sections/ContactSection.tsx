import React, { useState, useRef } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import { 
  Mail, 
  Copy, 
  Check, 
  Send, 
  ExternalLink, 
  Sparkles, 
  Linkedin, 
  Github, 
  MessageSquare, 
  MapPin, 
  CheckCircle2 
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { aboutData } from '../../data/about';

export const ContactSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start']
  });

  const leftY = useTransform(scrollYProgress, [0, 1], shouldReduceMotion ? [0, 0] : [15, -15]);
  const rightY = useTransform(scrollYProgress, [0, 1], shouldReduceMotion ? [0, 0] : [-10, 10]);

  const [copiedEmail, setCopiedEmail] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: 'UI/UX Design',
    message: '',
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(aboutData.contact.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2200);
  };

  const validate = () => {
    const errs: { [key: string]: string } = {};
    if (!formData.name.trim()) errs.name = 'Please provide your name.';
    if (!formData.email.trim()) {
      errs.email = 'Please provide your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please provide a valid email address.';
    }
    if (!formData.message.trim()) errs.message = 'Please enter a brief message.';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      try {
        confetti({
          particleCount: 90,
          spread: 70,
          origin: { y: 0.6 }
        });
      } catch (err) {
        // Safe fallback
      }
    }, 600);
  };

  return (
    <section ref={sectionRef} id="contact" className="py-16 sm:py-24 border-b border-gray-200/80 dark:border-zinc-800/80 bg-white/40 dark:bg-zinc-950/30 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-[#0D99FF]/10 text-[#0D99FF] text-xs font-mono font-medium mb-3">
            <MessageSquare size={13} />
            <span>Direct Inquiries & Collaboration</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#1E1E1E] dark:text-white leading-tight">
            Have a project in mind? Let's create something meaningful.
          </h2>
          <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mt-3 leading-relaxed">
            I'm currently open to full-time product design roles, internships, and select freelance design initiatives. Reach out via email or drop a message below.
          </p>
        </div>

        {/* 2-Column Grid: Contact Methods + Working Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          {/* Left Column: Direct Links & Cards with Parallax Float */}
          <motion.div 
            style={{ y: leftY }}
            className="lg:col-span-5 space-y-6"
          >
            
            {/* Email Direct Card */}
            <div className="bg-white dark:bg-[#202023] p-6 rounded-2xl border border-gray-200 dark:border-zinc-800 shadow-figma-card space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-gray-400 uppercase tracking-wider block">
                  Primary Contact
                </span>
                <span className="w-2 h-2 rounded-full bg-[#14AE5C]" />
              </div>

              <div>
                <a 
                  href={`mailto:${aboutData.contact.email}`}
                  className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white hover:text-[#0D99FF] dark:hover:text-[#0D99FF] transition-colors break-all flex items-center gap-2"
                >
                  <Mail size={18} className="text-[#0D99FF] flex-shrink-0" />
                  <span>{aboutData.contact.email}</span>
                </a>
                <p className="text-xs text-gray-500 mt-1">
                  Usually replies within 24 hours.
                </p>
              </div>

              <div className="flex items-center gap-2 pt-2 border-t border-gray-100 dark:border-zinc-800">
                <button
                  onClick={handleCopyEmail}
                  className="px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-gray-100 dark:bg-zinc-800 hover:bg-gray-200 dark:hover:bg-zinc-700 text-gray-800 dark:text-gray-200 flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  {copiedEmail ? <Check size={13} className="text-green-500" /> : <Copy size={13} />}
                  <span>{copiedEmail ? 'Copied to Clipboard!' : 'Copy Email Address'}</span>
                </button>
                <a
                  href={`mailto:${aboutData.contact.email}`}
                  className="px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-[#0D99FF] hover:bg-[#0085EB] text-white flex items-center gap-1.5 transition-colors"
                >
                  <span>Open Mail App</span>
                  <ExternalLink size={12} />
                </a>
              </div>
            </div>

            {/* Social & Professional Links */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {/* LinkedIn */}
              <a
                href={aboutData.contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white dark:bg-[#202023] p-4 rounded-xl border border-gray-200 dark:border-zinc-800 hover:border-[#0D99FF] hover:shadow-sm transition-all group flex flex-col justify-between"
              >
                <div className="flex items-center justify-between text-gray-400 group-hover:text-[#0D99FF]">
                  <Linkedin size={20} />
                  <ExternalLink size={12} />
                </div>
                <div className="mt-3">
                  <span className="font-bold text-xs text-gray-900 dark:text-white block">
                    LinkedIn
                  </span>
                  <span className="text-[10px] text-gray-500">Professional Profile</span>
                </div>
              </a>

              {/* Behance */}
              <a
                href={aboutData.contact.behance}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white dark:bg-[#202023] p-4 rounded-xl border border-gray-200 dark:border-zinc-800 hover:border-[#0057FF] hover:shadow-sm transition-all group flex flex-col justify-between"
              >
                <div className="flex items-center justify-between text-gray-400 group-hover:text-[#0057FF]">
                  <span className="font-black text-sm text-[#0057FF]">Bē</span>
                  <ExternalLink size={12} />
                </div>
                <div className="mt-3">
                  <span className="font-bold text-xs text-gray-900 dark:text-white block">
                    Behance
                  </span>
                  <span className="text-[10px] text-gray-500">Case Study Gallery</span>
                </div>
              </a>

              {/* GitHub */}
              <a
                href={aboutData.contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white dark:bg-[#202023] p-4 rounded-xl border border-gray-200 dark:border-zinc-800 hover:border-gray-900 dark:hover:border-white hover:shadow-sm transition-all group flex flex-col justify-between"
              >
                <div className="flex items-center justify-between text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white">
                  <Github size={20} />
                  <ExternalLink size={12} />
                </div>
                <div className="mt-3">
                  <span className="font-bold text-xs text-gray-900 dark:text-white block">
                    GitHub
                  </span>
                  <span className="text-[10px] text-gray-500">Code & Repositories</span>
                </div>
              </a>
            </div>

            {/* Availability Notice */}
            <div className="bg-gray-50 dark:bg-zinc-900/60 p-4 rounded-xl border border-gray-200/80 dark:border-zinc-800 flex items-center gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-[#14AE5C] flex-shrink-0" />
              <p className="text-xs text-gray-600 dark:text-gray-400">
                <span className="font-semibold text-gray-900 dark:text-white">Location:</span> Chennai, Tamil Nadu, India (Available for on-site & remote collaboration).
              </p>
            </div>

          </motion.div>

          {/* Right Column: Working Contact Form with Parallax */}
          <motion.div 
            style={{ y: rightY }}
            className="lg:col-span-7"
          >
            <div className="bg-white dark:bg-[#202023] p-6 sm:p-8 rounded-2xl sm:rounded-3xl border border-gray-200 dark:border-zinc-800 shadow-figma-card">
              
              {isSubmitted ? (
                <div className="text-center py-10 space-y-4 animate-in fade-in duration-300">
                  <div className="w-14 h-14 rounded-2xl bg-green-500/10 text-green-500 flex items-center justify-center mx-auto">
                    <CheckCircle2 size={32} />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                    Message Sent Successfully!
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300 max-w-md mx-auto">
                    Thanks for reaching out, {formData.name}. I've received your note and will get back to you at <span className="font-semibold text-[#0D99FF]">{formData.email}</span> shortly.
                  </p>
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({
                        name: '',
                        email: '',
                        projectType: 'UI/UX Design',
                        message: '',
                      });
                    }}
                    className="mt-4 px-5 py-2.5 rounded-xl text-xs font-semibold bg-gray-100 dark:bg-zinc-800 hover:bg-gray-200 dark:hover:bg-zinc-700 text-gray-800 dark:text-gray-200 transition-colors cursor-pointer"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="border-b border-gray-100 dark:border-zinc-800 pb-3 mb-4">
                    <h3 className="font-bold text-base text-gray-900 dark:text-white">
                      Direct Message
                    </h3>
                    <p className="text-xs text-gray-500">
                      Fill out this quick form or send an email directly.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Name */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-gray-700 dark:text-gray-300">
                        Your Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Sarah Chen"
                        className={`w-full px-3.5 py-2.5 rounded-xl bg-gray-50 dark:bg-zinc-900 border text-sm text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#0D99FF] transition-all ${
                          errors.name ? 'border-red-500' : 'border-gray-200 dark:border-zinc-800'
                        }`}
                      />
                      {errors.name && (
                        <p className="text-[11px] text-red-500">{errors.name}</p>
                      )}
                    </div>

                    {/* Email */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-gray-700 dark:text-gray-300">
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="you@company.com"
                        className={`w-full px-3.5 py-2.5 rounded-xl bg-gray-50 dark:bg-zinc-900 border text-sm text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#0D99FF] transition-all ${
                          errors.email ? 'border-red-500' : 'border-gray-200 dark:border-zinc-800'
                        }`}
                      />
                      {errors.email && (
                        <p className="text-[11px] text-red-500">{errors.email}</p>
                      )}
                    </div>
                  </div>

                  {/* Project Type */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-gray-700 dark:text-gray-300">
                      Subject / Project Scope
                    </label>
                    <select
                      value={formData.projectType}
                      onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-gray-50 dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 text-sm text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#0D99FF] transition-all"
                    >
                      <option value="UI/UX Design">UI/UX Design & Prototyping</option>
                      <option value="Design Systems">Design Systems & Tokens</option>
                      <option value="Full-Time Role">Full-Time Design Opportunity</option>
                      <option value="Freelance Web Project">Freelance Web / Mobile Project</option>
                      <option value="General Conversation">General Conversation / Coffee Chat</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-gray-700 dark:text-gray-300">
                      Your Message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell me a bit about what you're building, the timeline, or role requirements..."
                      className={`w-full px-3.5 py-2.5 rounded-xl bg-gray-50 dark:bg-zinc-900 border text-sm text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#0D99FF] transition-all resize-none ${
                        errors.message ? 'border-red-500' : 'border-gray-200 dark:border-zinc-800'
                      }`}
                    />
                    {errors.message && (
                      <p className="text-[11px] text-red-500">{errors.message}</p>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#0D99FF] hover:bg-[#0085EB] disabled:opacity-50 text-white py-3 rounded-xl font-semibold text-sm shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-95"
                  >
                    {isSubmitting ? (
                      <span>Sending Message...</span>
                    ) : (
                      <>
                        <Send size={15} />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </form>
              )}

            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};

