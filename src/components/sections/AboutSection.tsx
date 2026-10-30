import React from 'react';
import { 
  User, 
  Briefcase, 
  GraduationCap, 
  Sparkles, 
  Palette, 
  Code2, 
  Layout, 
  CheckCircle2, 
  Calendar 
} from 'lucide-react';
import { aboutData } from '../../data/about';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-16 sm:py-24 border-b border-gray-200/80 dark:border-zinc-800/80 bg-white/50 dark:bg-zinc-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="pb-6 border-b border-gray-200 dark:border-zinc-800">
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-[#0D99FF]/10 text-[#0D99FF] text-xs font-mono font-medium mb-3">
            <User size={13} />
            <span>Profile & Background</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#1E1E1E] dark:text-white">
            About Rohit Muralidaran
          </h2>
          <p className="text-sm sm:text-base text-gray-500 dark:text-gray-400 mt-2 max-w-2xl">
            Connecting user empathy, visual storytelling, and software systems to build intuitive products.
          </p>
        </div>

        {/* Editorial Layout: 2 Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          {/* Left Column: Comprehensive Story & Disciplines */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Core Philosophy */}
            <div className="bg-white dark:bg-[#202023] p-6 sm:p-8 rounded-2xl border border-gray-200 dark:border-zinc-800 shadow-figma-card space-y-4">
              <div className="flex items-center gap-2 text-xs font-semibold text-[#0D99FF] uppercase tracking-wider font-mono">
                <Sparkles size={14} />
                <span>Philosophy & Approach</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white leading-snug">
                “Good design is invisible when it works, and empowering when you feel it.”
              </h3>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed">
                {aboutData.bio}
              </p>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed">
                {aboutData.extendedBio}
              </p>
            </div>

            {/* 3 Pillars of Experience */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {/* UI/UX Design */}
              <div className="bg-white dark:bg-[#202023] p-5 rounded-xl border border-gray-200 dark:border-zinc-800 space-y-2">
                <div className="w-8 h-8 rounded-lg bg-[#0D99FF]/10 text-[#0D99FF] flex items-center justify-center">
                  <Layout size={16} />
                </div>
                <h4 className="font-bold text-sm text-gray-900 dark:text-white">UI/UX Design</h4>
                <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">
                  Deep user research, cognitive heuristics, wireframing, high-density dashboard ergonomics, and multi-device design systems.
                </p>
              </div>

              {/* Graphic Design */}
              <div className="bg-white dark:bg-[#202023] p-5 rounded-xl border border-gray-200 dark:border-zinc-800 space-y-2">
                <div className="w-8 h-8 rounded-lg bg-[#9747FF]/10 text-[#9747FF] flex items-center justify-center">
                  <Palette size={16} />
                </div>
                <h4 className="font-bold text-sm text-gray-900 dark:text-white">Graphic & Brand</h4>
                <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">
                  Brand identities, typographic systems, digital collaterals, vector illustrations, and visual event branding.
                </p>
              </div>

              {/* Frontend & Tech */}
              <div className="bg-white dark:bg-[#202023] p-5 rounded-xl border border-gray-200 dark:border-zinc-800 space-y-2">
                <div className="w-8 h-8 rounded-lg bg-[#14AE5C]/10 text-[#14AE5C] flex items-center justify-center">
                  <Code2 size={16} />
                </div>
                <h4 className="font-bold text-sm text-gray-900 dark:text-white">Frontend Logic</h4>
                <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">
                  Translating design tokens into production React, TypeScript, and responsive CSS, grounded in CS fundamentals.
                </p>
              </div>
            </div>

          </div>

          {/* Right Column: Academic & Leadership Highlights */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="bg-white dark:bg-[#202023] p-6 rounded-2xl border border-gray-200 dark:border-zinc-800 shadow-figma-card space-y-5">
              <div className="flex items-center gap-2 pb-3 border-b border-gray-100 dark:border-zinc-800 text-xs font-semibold text-gray-700 dark:text-gray-200">
                <Briefcase size={14} className="text-[#0D99FF]" />
                <span>Experience & Leadership</span>
              </div>

              <div className="space-y-6">
                {aboutData.experiences.map((exp, idx) => (
                  <div key={idx} className="relative pl-6 before:absolute before:left-2 before:top-2 before:bottom-0 before:w-px before:bg-gray-200 dark:before:bg-zinc-800 last:before:hidden">
                    <div className="absolute left-0 top-1.5 w-4 h-4 rounded-full border-2 border-[#0D99FF] bg-white dark:bg-zinc-900 flex items-center justify-center">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#0D99FF]" />
                    </div>

                    <div className="space-y-1">
                      <span className="text-[10px] font-mono text-gray-400 block">
                        {exp.period}
                      </span>
                      <h4 className="font-bold text-sm text-gray-900 dark:text-white">
                        {exp.role}
                      </h4>
                      <p className="text-xs font-semibold text-[#0D99FF]">
                        {exp.organization}
                      </p>
                      <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed pt-1">
                        {exp.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Academic Credential Card */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50/50 dark:from-zinc-900 dark:to-zinc-900/80 p-5 rounded-2xl border border-blue-100 dark:border-zinc-800 flex items-start gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center flex-shrink-0">
                <GraduationCap size={20} />
              </div>
              <div className="space-y-1">
                <span className="text-[10px] font-mono uppercase text-blue-600 dark:text-blue-400 font-semibold block">
                  Degree in Progress (2022 — 2026)
                </span>
                <h4 className="font-bold text-sm text-gray-900 dark:text-white">
                  B.Tech in Computer Science and Business Systems
                </h4>
                <p className="text-xs text-gray-600 dark:text-gray-400">
                  Chennai, India • Fostering analytical rigor, systems architecture, and business intuition.
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

