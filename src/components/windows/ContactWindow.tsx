import React, { useState } from 'react';
import { 
  X, 
  Mail, 
  Copy, 
  Check, 
  Send, 
  ExternalLink, 
  Sparkles, 
  MessageSquare,
  Linkedin,
  Github
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { aboutData } from '../../data/about';

interface ContactWindowProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactWindow: React.FC<ContactWindowProps> = ({
  isOpen,
  onClose,
}) => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: 'UI/UX Design',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(aboutData.contact.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2200);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      // Fire confetti celebration
      try {
        confetti({
          particleCount: 80,
          spread: 60,
          origin: { y: 0.6 }
        });
      } catch (err) {
        // Safe fallback
      }
    }, 600);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-xs select-text animate-in fade-in duration-150">
      <div 
        onWheel={(e) => e.stopPropagation()}
        className="w-full max-w-xl bg-white dark:bg-[#1E1E1E] text-[#1E1E1E] dark:text-[#E0E0E0] rounded-2xl shadow-figma-floating border border-[#E5E7EB] dark:border-[#383838] overflow-hidden flex flex-col max-h-[90vh]"
      >
        
        {/* Figma Window Titlebar */}
        <div className="px-4 py-3 bg-[#FAFAFA] dark:bg-[#252525] border-b border-[#E5E7EB] dark:border-[#383838] flex items-center justify-between select-none flex-shrink-0">
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded-full bg-[#FF5F56] border border-[#E0443E] inline-block cursor-pointer" onClick={onClose} />
              <span className="w-3 h-3 rounded-full bg-[#FFBD2E] border border-[#DEA123] inline-block cursor-pointer" onClick={onClose} />
              <span className="w-3 h-3 rounded-full bg-[#27C93F] border border-[#1AAB29] inline-block" />
            </div>
            <span className="text-xs font-mono font-medium text-gray-500 ml-2">
              Contact_Rohit.modal
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-1 rounded hover:bg-gray-200 dark:hover:bg-[#333] text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 transition-colors"
          >
            <X size={15} />
          </button>
        </div>

        {/* Content Body */}
        <div className="flex-1 min-h-0 p-6 overflow-y-auto overscroll-contain space-y-6">
          {/* Header */}
          <div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#0D99FF]/10 text-[#0D99FF] text-xs font-medium mb-2">
              <Sparkles size={12} />
              <span>Let's collaborate</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-[#1E1E1E] dark:text-white">
              Have an idea? Let's create something meaningful.
            </h2>
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
              Whether you have an upcoming product design role, need a design system consultant, or want to discuss interaction architecture.
            </p>
          </div>

          {/* Quick Copy Email Box */}
          <div className="p-3.5 rounded-xl bg-[#F8FAFC] dark:bg-[#252528] border border-[#E2E8F0] dark:border-[#383838] flex items-center justify-between gap-3">
            <div className="flex items-center gap-2.5 overflow-hidden">
              <div className="w-8 h-8 rounded-lg bg-[#0D99FF]/10 text-[#0D99FF] flex items-center justify-center flex-shrink-0">
                <Mail size={16} />
              </div>
              <div className="overflow-hidden">
                <span className="text-[10px] uppercase font-mono text-gray-400 block">Direct Email</span>
                <span className="text-xs font-semibold text-[#1E1E1E] dark:text-white truncate block">
                  {aboutData.contact.email}
                </span>
              </div>
            </div>

            <button
              onClick={handleCopyEmail}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium flex items-center gap-1.5 transition-all ${
                copiedEmail
                  ? 'bg-green-600 text-white'
                  : 'bg-white dark:bg-[#303030] text-gray-700 dark:text-gray-200 border border-gray-200 dark:border-zinc-700 hover:bg-gray-50'
              }`}
            >
              {copiedEmail ? <Check size={13} /> : <Copy size={13} />}
              <span>{copiedEmail ? 'Copied!' : 'Copy Email'}</span>
            </button>
          </div>

          {/* Social Profiles Grid */}
          <div className="grid grid-cols-3 gap-2">
            <a
              href={aboutData.contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-[#F8FAFC] dark:bg-[#252528] border border-[#E2E8F0] dark:border-[#383838] hover:border-[#0D99FF] transition-all flex items-center justify-between group"
            >
              <div className="flex items-center gap-2">
                <Linkedin size={15} className="text-[#0D99FF]" />
                <span className="text-xs font-medium text-gray-700 dark:text-gray-300">LinkedIn</span>
              </div>
              <ExternalLink size={12} className="text-gray-400 group-hover:text-[#0D99FF] transition-colors" />
            </a>

            <a
              href={aboutData.contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-[#F8FAFC] dark:bg-[#252528] border border-[#E2E8F0] dark:border-[#383838] hover:border-[#0D99FF] transition-all flex items-center justify-between group"
            >
              <div className="flex items-center gap-2">
                <Github size={15} className="text-gray-700 dark:text-gray-300" />
                <span className="text-xs font-medium text-gray-700 dark:text-gray-300">GitHub</span>
              </div>
              <ExternalLink size={12} className="text-gray-400 group-hover:text-[#0D99FF] transition-colors" />
            </a>

            <a
              href={aboutData.contact.behance}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-[#F8FAFC] dark:bg-[#252528] border border-[#E2E8F0] dark:border-[#383838] hover:border-[#0D99FF] transition-all flex items-center justify-between group"
            >
              <div className="flex items-center gap-2">
                <div className="w-3.5 h-3.5 rounded bg-[#0D99FF] text-white flex items-center justify-center font-bold text-[9px]">Bē</div>
                <span className="text-xs font-medium text-gray-700 dark:text-gray-300">Behance</span>
              </div>
              <ExternalLink size={12} className="text-gray-400 group-hover:text-[#0D99FF] transition-colors" />
            </a>
          </div>

          {/* Contact Form */}
          {isSubmitted ? (
            <div className="p-6 rounded-xl bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-900/40 text-center space-y-2">
              <div className="w-10 h-10 rounded-full bg-green-500 text-white flex items-center justify-center mx-auto shadow-sm">
                <Check size={20} />
              </div>
              <h4 className="font-bold text-sm text-green-900 dark:text-green-300">
                Message Sent Successfully!
              </h4>
              <p className="text-xs text-green-700 dark:text-green-400 max-w-sm mx-auto">
                Thank you for reaching out. Rohit will get back to you within 24 hours.
              </p>
              <button
                onClick={() => {
                  setIsSubmitted(false);
                  setFormData({ name: '', email: '', projectType: 'UI/UX Design', message: '' });
                }}
                className="mt-2 text-xs font-medium text-green-800 dark:text-green-300 underline"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-3.5">
              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="text-[11px] font-medium text-gray-600 dark:text-gray-400 block">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Alex Johnson"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3 py-2 text-xs rounded-lg border border-[#E5E7EB] dark:border-[#383838] bg-white dark:bg-[#252528] focus:outline-none focus:border-[#0D99FF] transition-colors"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-[11px] font-medium text-gray-600 dark:text-gray-400 block">
                    Your Email
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="alex@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3 py-2 text-xs rounded-lg border border-[#E5E7EB] dark:border-[#383838] bg-white dark:bg-[#252528] focus:outline-none focus:border-[#0D99FF] transition-colors"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-[11px] font-medium text-gray-600 dark:text-gray-400 block">
                  Project Scope
                </label>
                <select
                  value={formData.projectType}
                  onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                  className="w-full px-3 py-2 text-xs rounded-lg border border-[#E5E7EB] dark:border-[#383838] bg-white dark:bg-[#252528] focus:outline-none focus:border-[#0D99FF] transition-colors text-gray-700 dark:text-gray-200"
                >
                  <option value="UI/UX Design">UI/UX Design & Prototyping</option>
                  <option value="Design System">Design System Architecture</option>
                  <option value="Frontend Development">Frontend Development (React / Tailwind)</option>
                  <option value="Full-Time Role">Full-Time / Internship Opportunity</option>
                  <option value="Just Saying Hi">General Inquiry / Coffee Chat</option>
                </select>
              </div>

              <div className="space-y-1">
                <label className="text-[11px] font-medium text-gray-600 dark:text-gray-400 block">
                  Message
                </label>
                <textarea
                  required
                  rows={3}
                  placeholder="Tell me a bit about what you're working on..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-3 py-2 text-xs rounded-lg border border-[#E5E7EB] dark:border-[#383838] bg-white dark:bg-[#252528] focus:outline-none focus:border-[#0D99FF] transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#0D99FF] hover:bg-[#0085EB] disabled:opacity-60 text-white py-2.5 rounded-lg text-xs font-semibold flex items-center justify-center gap-2 shadow-sm transition-all"
              >
                <Send size={13} />
                <span>{isSubmitting ? 'Sending Message...' : 'Send Message'}</span>
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

