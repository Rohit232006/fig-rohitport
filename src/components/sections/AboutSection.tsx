import React from 'react';
import { 
  User, 
  Briefcase, 
  GraduationCap, 
  Sparkles, 
  Layout, 
  Code2, 
  BarChart3, 
  MapPin, 
  Calendar, 
  ArrowUpRight, 
  CheckCircle2,
  FileText
} from 'lucide-react';
import { aboutData } from '../../data/about';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-16 sm:py-24 border-b border-gray-200/80 dark:border-zinc-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 sm:space-y-12">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-6 border-b border-gray-200 dark:border-zinc-800">
          <div>
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-[#0D99FF]/10 text-[#0D99FF] text-xs font-mono font-medium mb-3">
              <User size={13} />
              <span>03 / Profile & Philosophy</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#1E1E1E] dark:text-white">
              About Rohit Muralidaran
            </h2>
            <p className="text-sm sm:text-base text-gray-500 dark:text-gray-400 mt-2 max-w-2xl">
              UI/UX designer and Computer Science student crafting intuitive, accessible, and high-performance digital products.
            </p>
          </div>

          <div className="inline-flex items-center gap-2 text-xs font-mono text-[#0D99FF] bg-[#0D99FF]/10 px-3 py-1.5 rounded-lg whitespace-nowrap self-start sm:self-auto border border-[#0D99FF]/20 font-medium">
            <span className="w-2 h-2 rounded-full bg-[#14AE5C] animate-pulse" />
            <span>Open for Design Opportunities</span>
          </div>
        </div>

        {/* Bento Grid: Clean, Uncongested, High Visual Hierarchy */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
          
          {/* Left Column (7 cols): Concise Bio + 3 Focus Pillars */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
            
            {/* Bio Card */}
            <div className="bg-white dark:bg-[#202023] p-6 sm:p-7 rounded-2xl sm:rounded-3xl border border-gray-200 dark:border-zinc-800 shadow-figma-card relative overflow-hidden space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="text-xs font-mono text-[#0D99FF] uppercase tracking-wider font-semibold flex items-center gap-1.5">
                  <Sparkles size={14} />
                  <span>Product Designer & CSBS Scholar</span>
                </span>
                <span className="inline-flex items-center gap-1 text-[11px] font-mono text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-zinc-800 px-2.5 py-1 rounded-md">
                  <MapPin size={12} className="text-[#0D99FF]" />
                  <span>Chennai, India</span>
                </span>
              </div>

              <p className="text-sm sm:text-base text-gray-700 dark:text-gray-200 leading-relaxed font-medium">
                I combine user-centered design psychology with computer science fundamentals. My work bridges complex product requirements and effortless user interfaces—specializing in high-density SaaS tools, accessible design systems, and responsive web products.
              </p>

              {/* Quick Meta Badges */}
              <div className="flex flex-wrap gap-2 pt-1 border-t border-gray-100 dark:border-zinc-800/80">
                <span className="text-xs font-medium text-gray-600 dark:text-gray-300 bg-gray-50 dark:bg-zinc-900 px-3 py-1 rounded-lg border border-gray-200/60 dark:border-zinc-800">
                  🎯 User Research & IA
                </span>
                <span className="text-xs font-medium text-gray-600 dark:text-gray-300 bg-gray-50 dark:bg-zinc-900 px-3 py-1 rounded-lg border border-gray-200/60 dark:border-zinc-800">
                  ⚡ Figma Design Systems
                </span>
                <span className="text-xs font-medium text-gray-600 dark:text-gray-300 bg-gray-50 dark:bg-zinc-900 px-3 py-1 rounded-lg border border-gray-200/60 dark:border-zinc-800">
                  💻 Frontend Engineering
                </span>
              </div>
            </div>

            {/* 3 Core Competency Cards (Compact & Visual) */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              
              <div className="bg-white dark:bg-[#202023] p-4 sm:p-5 rounded-2xl border border-gray-200 dark:border-zinc-800 shadow-2xs space-y-2">
                <div className="w-8 h-8 rounded-lg bg-[#0D99FF]/10 text-[#0D99FF] flex items-center justify-center">
                  <Layout size={16} />
                </div>
                <h4 className="font-bold text-sm text-gray-900 dark:text-white">Product & UI/UX</h4>
                <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">
                  High-density dashboards, design tokens, micro-interactions, and WCAG accessibility.
                </p>
              </div>

              <div className="bg-white dark:bg-[#202023] p-4 sm:p-5 rounded-2xl border border-gray-200 dark:border-zinc-800 shadow-2xs space-y-2">
                <div className="w-8 h-8 rounded-lg bg-[#FF6F00]/10 text-[#FF6F00] flex items-center justify-center">
                  <BarChart3 size={16} />
                </div>
                <h4 className="font-bold text-sm text-gray-900 dark:text-white">UX Analytics</h4>
                <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">
                  Behavioral funnels (GA4), session heatmaps (Hotjar), and usability evaluations.
                </p>
              </div>

              <div className="bg-white dark:bg-[#202023] p-4 sm:p-5 rounded-2xl border border-gray-200 dark:border-zinc-800 shadow-2xs space-y-2">
                <div className="w-8 h-8 rounded-lg bg-[#14AE5C]/10 text-[#14AE5C] flex items-center justify-center">
                  <Code2 size={16} />
                </div>
                <h4 className="font-bold text-sm text-gray-900 dark:text-white">Frontend Logic</h4>
                <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">
                  Responsive CSS, React, and modular components grounded in clean code principles.
                </p>
              </div>

            </div>

          </div>

          {/* Right Column (5 cols): Concise Experience & Education */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            
            {/* Experience Card */}
            <div className="bg-white dark:bg-[#202023] p-6 rounded-2xl sm:rounded-3xl border border-gray-200 dark:border-zinc-800 shadow-figma-card flex-1 flex flex-col justify-between space-y-5">
              <div className="flex items-center justify-between pb-3 border-b border-gray-100 dark:border-zinc-800">
                <div className="flex items-center gap-2 text-xs font-semibold text-gray-900 dark:text-white font-mono">
                  <Briefcase size={14} className="text-[#0D99FF]" />
                  <span>Experience & Leadership</span>
                </div>
                <span className="text-[10px] font-mono text-gray-400 bg-gray-100 dark:bg-zinc-800 px-2 py-0.5 rounded">
                  2023 — Present
                </span>
              </div>

              <div className="space-y-4">
                {/* Role 1 */}
                <div className="border-l-2 border-[#0D99FF] pl-3.5 space-y-0.5">
                  <div className="flex items-center justify-between">
                    <h4 className="font-bold text-sm text-gray-900 dark:text-white">
                      Lead UI/UX & Creative Designer
                    </h4>
                    <span className="text-[10px] font-mono text-[#0D99FF] font-semibold">2023 — Present</span>
                  </div>
                  <p className="text-xs font-medium text-[#0D99FF]">PixelLoom & Freelance</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400 pt-0.5">
                    End-to-end design systems, responsive client websites, and brand assets.
                  </p>
                </div>

                {/* Role 2 */}
                <div className="border-l-2 border-[#14AE5C] pl-3.5 space-y-0.5">
                  <div className="flex items-center justify-between">
                    <h4 className="font-bold text-sm text-gray-900 dark:text-white">
                      Design & Tech Coordinator
                    </h4>
                    <span className="text-[10px] font-mono text-gray-400">2024 — 2025</span>
                  </div>
                  <p className="text-xs font-medium text-[#14AE5C]">CSBS Department Symposium</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400 pt-0.5">
                    Directed event branding, participant interfaces, and presentation decks.
                  </p>
                </div>
              </div>

              {/* Academic Card Embedded Cleanly */}
              <div className="pt-3 border-t border-gray-100 dark:border-zinc-800/80">
                <div className="flex items-center gap-3 p-3 rounded-xl bg-gray-50 dark:bg-zinc-900/80 border border-gray-200/60 dark:border-zinc-800">
                  <div className="w-8 h-8 rounded-lg bg-blue-600 text-white flex items-center justify-center flex-shrink-0">
                    <GraduationCap size={16} />
                  </div>
                  <div className="min-w-0">
                    <div className="flex items-center gap-1.5">
                      <span className="text-[10px] font-mono text-blue-600 dark:text-blue-400 font-semibold">B.Tech CSBS</span>
                      <span className="text-[10px] text-gray-400">• Class of 2026 (Graduating)</span>
                    </div>
                    <p className="text-xs font-medium text-gray-800 dark:text-gray-200 truncate">
                      Computer Science & Business Systems
                    </p>
                  </div>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
