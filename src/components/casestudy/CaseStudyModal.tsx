import React, { useEffect } from 'react';
import { 
  X, 
  ArrowLeft, 
  ArrowRight, 
  CheckCircle2, 
  Layers, 
  Sparkles, 
  Cpu, 
  Compass, 
  Share2, 
  ExternalLink,
  ChevronRight,
  BookOpen,
  Palette,
  Users,
  Target,
  AlertCircle,
  Lightbulb,
  Maximize2
} from 'lucide-react';
import { Project } from '../../types';

interface CaseStudyModalProps {
  project: Project | null;
  onClose: () => void;
  onNextProject: () => void;
  onPrevProject: () => void;
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({
  project,
  onClose,
  onNextProject,
  onPrevProject,
}) => {
  // Handle ESC key to close modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') onNextProject();
      if (e.key === 'ArrowLeft') onPrevProject();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose, onNextProject, onPrevProject]);

  if (!project) return null;
  const { caseStudy } = project;

  return (
    <div
      className="fixed inset-0 z-50 overflow-y-auto overscroll-contain bg-black/60 backdrop-blur-md select-text transition-opacity duration-200"
      onWheel={(e) => e.stopPropagation()}
    >
      <div className="min-h-full py-4 md:py-8 px-2 sm:px-4 md:px-8 flex items-start justify-center">
        {/* Container Frame */}
        <div className="w-full max-w-5xl bg-white dark:bg-[#18181B] text-[#1E1E1E] dark:text-[#E0E0E0] rounded-2xl shadow-2xl overflow-hidden flex flex-col border border-[#E5E7EB] dark:border-[#2E2E2E]">
        
        {/* Top Sticky Header */}
        <header className="sticky top-0 z-40 bg-white/95 dark:bg-[#18181B]/95 backdrop-blur-md border-b border-[#E5E7EB] dark:border-[#2E2E2E] px-4 md:px-8 py-3.5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button
              onClick={onClose}
              className="flex items-center gap-1.5 text-xs font-semibold text-[#4B5563] dark:text-[#A0A0A0] hover:text-[#0D99FF] bg-[#F3F4F6] dark:bg-[#27272A] px-3 py-1.5 rounded-lg transition-colors cursor-pointer"
            >
              <ArrowLeft size={14} />
              <span>Back to Projects</span>
            </button>
            <div className="h-4 w-px bg-gray-200 dark:bg-zinc-700 hidden sm:block" />
            <span className="text-xs text-gray-400 font-mono hidden sm:inline">
              Work / {project.title}
            </span>
          </div>

          <div className="flex items-center gap-2">
            {project.behanceUrl && (
              <a
                href={project.behanceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:flex items-center gap-1.5 text-xs font-semibold text-white bg-[#0057FF] hover:bg-[#0047D4] px-3 py-1.5 rounded-lg transition-colors shadow-xs"
                title="View original Behance project (opens in new tab)"
              >
                <span className="font-bold text-[10px] bg-white text-[#0057FF] px-1 rounded-xs">Bē</span>
                <span>View on Behance</span>
                <ExternalLink size={12} />
              </a>
            )}
            <button
              onClick={onPrevProject}
              className="p-1.5 rounded-lg text-gray-500 hover:bg-[#F3F4F6] dark:hover:bg-[#27272A] transition-colors"
              title="Previous Case Study (←)"
            >
              <ArrowLeft size={16} />
            </button>
            <button
              onClick={onNextProject}
              className="p-1.5 rounded-lg text-gray-500 hover:bg-[#F3F4F6] dark:hover:bg-[#27272A] transition-colors"
              title="Next Case Study (→)"
            >
              <ArrowRight size={16} />
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-gray-500 hover:bg-[#F3F4F6] dark:hover:bg-[#27272A] transition-colors"
              title="Close (Esc)"
            >
              <X size={18} />
            </button>
          </div>
        </header>

        {/* Scrollable Content Body */}
        <main className="p-6 md:p-12 space-y-16 max-w-4xl mx-auto w-full">
          
          {/* SECTION 1: HERO & METADATA */}
          <section className="space-y-6">
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold font-mono px-2.5 py-1 rounded-full bg-[#0D99FF]/10 text-[#0D99FF] border border-[#0D99FF]/20">
                PROJECT {project.number}
              </span>
              <span className="text-xs text-gray-500 font-medium">
                {project.category}
              </span>
            </div>

            <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-[#1E1E1E] dark:text-white leading-tight">
              {project.title}
            </h1>

            {project.tagline && (
              <p className="text-lg md:text-xl font-medium text-[#0D99FF] italic">
                “{project.tagline}”
              </p>
            )}

            {/* Behance Callout Card */}
            {project.behanceUrl && (
              <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-[#0057FF]/10 via-[#0057FF]/5 to-transparent border-2 border-[#0057FF]/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-sm">
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-[#0057FF] text-white flex items-center justify-center font-bold text-base shadow-sm flex-shrink-0">
                    Bē
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h4 className="text-sm font-bold text-[#1E1E1E] dark:text-white">
                        Full Behance Case Study Available
                      </h4>
                      <span className="text-[10px] font-mono text-[#0057FF] bg-[#0057FF]/15 px-2 py-0.5 rounded-full font-semibold">
                        Original Project
                      </span>
                    </div>
                    <p className="text-xs text-gray-600 dark:text-gray-300 mt-0.5">
                      Explore the complete high-resolution presentation, visual design system, and full UI boards directly on Behance.
                    </p>
                  </div>
                </div>

                <a
                  href={project.behanceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto bg-[#0057FF] hover:bg-[#0047D4] text-white text-xs font-semibold px-5 py-2.5 rounded-xl flex items-center justify-center gap-2 shadow-sm hover:shadow transition-all whitespace-nowrap flex-shrink-0"
                >
                  <span>View Full Case Study on Behance</span>
                  <ExternalLink size={13} />
                </a>
              </div>
            )}

            {/* Project Cover Media Banner */}
            {project.logoUrl && (
              <div className="rounded-2xl overflow-hidden border border-gray-200 dark:border-zinc-700 shadow-md bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900 p-6 flex items-center justify-center min-h-[260px] max-h-[400px]">
                {project.id === 'lastmile' ? (
                  <div className="bg-white/95 backdrop-blur-md px-10 py-6 rounded-2xl shadow-xl border border-white/20">
                    <img
                      src={project.logoUrl}
                      alt={project.title}
                      className="max-h-32 w-auto object-contain"
                    />
                  </div>
                ) : (
                  <img
                    src={project.logoUrl}
                    alt={project.title}
                    className="max-h-[300px] w-auto max-w-full object-contain drop-shadow-xl"
                  />
                )}
              </div>
            )}

            <p className="text-base md:text-lg text-[#4B5563] dark:text-[#A1A1AA] leading-relaxed">
              {caseStudy.overview}
            </p>

            {/* Meta Table */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-5 rounded-xl bg-[#F8FAFC] dark:bg-[#202023] border border-[#E2E8F0] dark:border-[#2E2E2E]">
              <div>
                <span className="text-[11px] font-mono text-gray-400 block uppercase">Role</span>
                <span className="text-xs font-semibold text-[#1E1E1E] dark:text-white mt-0.5 block">{caseStudy.role}</span>
              </div>
              <div>
                <span className="text-[11px] font-mono text-gray-400 block uppercase">Duration</span>
                <span className="text-xs font-semibold text-[#1E1E1E] dark:text-white mt-0.5 block">{caseStudy.duration}</span>
              </div>
              <div>
                <span className="text-[11px] font-mono text-gray-400 block uppercase">Team</span>
                <span className="text-xs font-semibold text-[#1E1E1E] dark:text-white mt-0.5 block">{caseStudy.team}</span>
              </div>
              <div>
                <span className="text-[11px] font-mono text-gray-400 block uppercase">Status</span>
                <span className="text-xs font-semibold text-[#14AE5C] mt-0.5 block">{project.status}</span>
              </div>
            </div>

            {/* Deliverables chips */}
            <div className="flex flex-wrap items-center gap-2 pt-2">
              <span className="text-xs text-gray-400 font-medium">Deliverables:</span>
              {caseStudy.deliverables.map((item, idx) => (
                <span key={idx} className="text-xs bg-gray-100 dark:bg-zinc-800 text-gray-700 dark:text-gray-300 px-2.5 py-1 rounded-md font-medium">
                  {item}
                </span>
              ))}
            </div>
          </section>

          {/* SECTION 2: PROBLEM STATEMENT */}
          <section className="space-y-4">
            <div className="flex items-center gap-2 text-[#F24E1E]">
              <AlertCircle size={20} />
              <h2 className="text-xl md:text-2xl font-bold text-[#1E1E1E] dark:text-white">
                02. The Problem Statement
              </h2>
            </div>
            <div className="p-6 rounded-xl bg-red-50/50 dark:bg-red-950/20 border border-red-200/60 dark:border-red-900/40 text-[#4B5563] dark:text-[#D1D5DB] text-base leading-relaxed">
              {caseStudy.problemStatement}
            </div>
          </section>

          {/* SECTION 3: GOALS & OBJECTIVES */}
          <section className="space-y-4">
            <div className="flex items-center gap-2 text-[#0D99FF]">
              <Target size={20} />
              <h2 className="text-xl md:text-2xl font-bold text-[#1E1E1E] dark:text-white">
                03. Goals & Objectives
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {caseStudy.goals.map((goal, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-[#F8FAFC] dark:bg-[#202023] border border-[#E2E8F0] dark:border-[#2E2E2E] flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#0D99FF]/10 text-[#0D99FF] flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
                    {idx + 1}
                  </div>
                  <p className="text-xs md:text-sm text-[#4B5563] dark:text-[#A1A1AA] leading-relaxed">
                    {goal}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* SECTION 4: RESEARCH & INSIGHTS */}
          <section className="space-y-6">
            <div className="flex items-center gap-2 text-[#9747FF]">
              <Lightbulb size={20} />
              <h2 className="text-xl md:text-2xl font-bold text-[#1E1E1E] dark:text-white">
                04. Research & User Insights
              </h2>
            </div>
            <div className="grid md:grid-cols-3 gap-4">
              {caseStudy.researchInsights.map((insight, idx) => (
                <div key={idx} className="p-5 rounded-xl bg-[#F8FAFC] dark:bg-[#202023] border border-[#E2E8F0] dark:border-[#2E2E2E] space-y-2">
                  {insight.stat && (
                    <span className="text-3xl font-extrabold text-[#0D99FF] block">
                      {insight.stat}
                    </span>
                  )}
                  <h4 className="text-xs font-bold text-[#1E1E1E] dark:text-white uppercase tracking-wider">
                    {insight.label}
                  </h4>
                  <p className="text-xs text-[#4B5563] dark:text-[#A1A1AA] leading-relaxed">
                    {insight.takeaway}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* SECTION 5: USER PERSONAS */}
          {caseStudy.personas && caseStudy.personas.length > 0 && (
            <section className="space-y-6">
              <div className="flex items-center gap-2 text-[#14AE5C]">
                <Users size={20} />
                <h2 className="text-xl md:text-2xl font-bold text-[#1E1E1E] dark:text-white">
                  05. User Personas
                </h2>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                {caseStudy.personas.map((persona, idx) => (
                  <div key={idx} className="p-6 rounded-xl bg-[#F8FAFC] dark:bg-[#202023] border border-[#E2E8F0] dark:border-[#2E2E2E] space-y-4">
                    <div className="flex items-center justify-between border-b border-gray-200 dark:border-zinc-700 pb-3">
                      <div>
                        <h3 className="font-bold text-base text-[#1E1E1E] dark:text-white">{persona.name}</h3>
                        <p className="text-xs text-[#0D99FF] font-medium">{persona.role}</p>
                      </div>
                      <span className="text-xs text-gray-400 font-mono">Archetype 0{idx + 1}</span>
                    </div>

                    <p className="text-xs italic text-gray-600 dark:text-gray-300 bg-white dark:bg-zinc-800 p-3 rounded-lg border border-gray-100 dark:border-zinc-700">
                      “{persona.quote}”
                    </p>

                    <div>
                      <span className="text-[11px] font-bold uppercase text-red-500 block mb-1">Pain Points</span>
                      <ul className="space-y-1">
                        {persona.painPoints.map((pp, i) => (
                          <li key={i} className="text-xs text-[#4B5563] dark:text-[#A1A1AA] flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-red-400 flex-shrink-0" />
                            <span>{pp}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <span className="text-[11px] font-bold uppercase text-green-500 block mb-1">Goals & Desires</span>
                      <ul className="space-y-1">
                        {persona.goals.map((g, i) => (
                          <li key={i} className="text-xs text-[#4B5563] dark:text-[#A1A1AA] flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-green-400 flex-shrink-0" />
                            <span>{g}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* SECTION 6: INFORMATION ARCHITECTURE */}
          <section className="space-y-6">
            <div className="flex items-center gap-2 text-[#0D99FF]">
              <Layers size={20} />
              <h2 className="text-xl md:text-2xl font-bold text-[#1E1E1E] dark:text-white">
                06. Information Architecture
              </h2>
            </div>
            <div className="grid md:grid-cols-3 gap-4">
              {caseStudy.informationArchitecture.map((tree, idx) => (
                <div key={idx} className="p-5 rounded-xl bg-[#F8FAFC] dark:bg-[#202023] border border-[#E2E8F0] dark:border-[#2E2E2E]">
                  <h3 className="font-bold text-xs uppercase tracking-wider text-[#0D99FF] mb-3 pb-2 border-b border-gray-200 dark:border-zinc-700">
                    {tree.title}
                  </h3>
                  <div className="space-y-2">
                    {tree.nodes.map((node, i) => (
                      <div key={i} className="text-xs bg-white dark:bg-zinc-800 p-2 rounded-md border border-gray-200 dark:border-zinc-700 text-[#4B5563] dark:text-[#A1A1AA]">
                        {node}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* SECTION 7: USER FLOW */}
          <section className="space-y-6">
            <div className="flex items-center gap-2 text-[#9747FF]">
              <Compass size={20} />
              <h2 className="text-xl md:text-2xl font-bold text-[#1E1E1E] dark:text-white">
                07. User Flow & Journey Steps
              </h2>
            </div>
            <div className="space-y-3">
              {caseStudy.userFlow.map((flow, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-[#F8FAFC] dark:bg-[#202023] border border-[#E2E8F0] dark:border-[#2E2E2E] flex flex-col md:flex-row md:items-center justify-between gap-3">
                  <div className="space-y-1">
                    <span className="text-xs font-bold text-[#9747FF]">{flow.step}</span>
                    <p className="text-xs md:text-sm font-medium text-[#1E1E1E] dark:text-white">{flow.action}</p>
                  </div>
                  <div className="text-xs text-[#14AE5C] bg-[#14AE5C]/10 px-3 py-1.5 rounded-lg border border-[#14AE5C]/20 max-w-sm">
                    <strong>Outcome:</strong> {flow.outcome}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* SECTION 8: WIREFRAMES */}
          <section className="space-y-6">
            <div className="flex items-center gap-2 text-gray-500">
              <BookOpen size={20} />
              <h2 className="text-xl md:text-2xl font-bold text-[#1E1E1E] dark:text-white">
                08. Wireframes & Layout Explorations
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {caseStudy.wireframes.map((wf, idx) => (
                <div key={idx} className="p-5 rounded-xl bg-[#F8FAFC] dark:bg-[#202023] border border-[#E2E8F0] dark:border-[#2E2E2E] space-y-3">
                  <h3 className="font-bold text-sm text-[#1E1E1E] dark:text-white">{wf.title}</h3>
                  <p className="text-xs text-[#4B5563] dark:text-[#A1A1AA] leading-relaxed">{wf.description}</p>
                  <div className="pt-2 border-t border-gray-200 dark:border-zinc-700">
                    <span className="text-[10px] font-mono uppercase text-gray-400 block mb-1">Key Annotations</span>
                    <div className="flex flex-wrap gap-1.5">
                      {wf.annotations.map((ann, i) => (
                        <span key={i} className="text-[11px] bg-white dark:bg-zinc-800 text-gray-600 dark:text-gray-300 px-2 py-0.5 rounded border border-gray-200 dark:border-zinc-700">
                          {ann}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* SECTION 9: VISUAL DESIGN SYSTEM */}
          <section className="space-y-6">
            <div className="flex items-center gap-2 text-[#0D99FF]">
              <Palette size={20} />
              <h2 className="text-xl md:text-2xl font-bold text-[#1E1E1E] dark:text-white">
                09. Visual Design System & Tokens
              </h2>
            </div>
            
            {/* Color Tokens Swatches */}
            <div>
              <h4 className="text-xs font-mono uppercase text-gray-400 mb-2">Core Color Palette</h4>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {caseStudy.visualDesignSystem.colorTokens.map((token, idx) => (
                  <div key={idx} className="p-3 rounded-lg bg-[#F8FAFC] dark:bg-[#202023] border border-[#E2E8F0] dark:border-[#2E2E2E] space-y-2">
                    <div className="h-10 rounded-md shadow-xs border border-black/10" style={{ backgroundColor: token.hex }} />
                    <div>
                      <span className="font-bold text-xs block text-[#1E1E1E] dark:text-white">{token.name}</span>
                      <span className="text-[10px] font-mono text-gray-400 block">{token.hex}</span>
                      <span className="text-[10px] text-gray-500 block mt-1">{token.usage}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Typography Scale */}
            <div>
              <h4 className="text-xs font-mono uppercase text-gray-400 mb-2">Typography Hierarchy</h4>
              <div className="border border-gray-200 dark:border-zinc-700 rounded-xl overflow-hidden divide-y divide-gray-200 dark:divide-zinc-700 text-xs">
                {caseStudy.visualDesignSystem.typographyScale.map((t, idx) => (
                  <div key={idx} className="p-3 flex items-center justify-between bg-white dark:bg-zinc-800">
                    <span className="font-semibold text-[#1E1E1E] dark:text-white">{t.level}</span>
                    <span className="font-mono text-gray-500">{t.spec}</span>
                    <span className="text-gray-400 hidden sm:inline">{t.usage}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* SECTION 10: FINAL INTERFACE SCREENS */}
          <section className="space-y-6">
            <div className="flex items-center gap-2 text-[#14AE5C]">
              <Sparkles size={20} />
              <h2 className="text-xl md:text-2xl font-bold text-[#1E1E1E] dark:text-white">
                10. Final Interface Screens
              </h2>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {caseStudy.finalScreens.map((screen, idx) => (
                <div key={idx} className="p-5 rounded-xl bg-[#F8FAFC] dark:bg-[#202023] border border-[#E2E8F0] dark:border-[#2E2E2E] space-y-3">
                  {screen.badge && (
                    <span className="text-[10px] font-mono font-medium px-2 py-0.5 rounded bg-[#14AE5C]/15 text-[#14AE5C] border border-[#14AE5C]/20">
                      {screen.badge}
                    </span>
                  )}
                  <h3 className="font-bold text-sm text-[#1E1E1E] dark:text-white">{screen.title}</h3>
                  <p className="text-xs text-[#4B5563] dark:text-[#A1A1AA] leading-relaxed">{screen.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* SECTION 11: INTERACTION DETAILS */}
          <section className="space-y-4">
            <h2 className="text-xl md:text-2xl font-bold text-[#1E1E1E] dark:text-white">
              11. Interaction Details & Micro-Interactions
            </h2>
            <div className="space-y-2">
              {caseStudy.interactionDetails.map((detail, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs md:text-sm text-[#4B5563] dark:text-[#A1A1AA] p-3 rounded-lg bg-[#F8FAFC] dark:bg-[#202023] border border-[#E2E8F0] dark:border-[#2E2E2E]">
                  <span className="text-[#0D99FF] font-bold">✦</span>
                  <span>{detail}</span>
                </div>
              ))}
            </div>
          </section>

          {/* SECTION 12: LEARNINGS & CONCLUSION */}
          <section className="space-y-4">
            <h2 className="text-xl md:text-2xl font-bold text-[#1E1E1E] dark:text-white">
              12. Learnings & Conclusion
            </h2>
            <div className="space-y-3">
              {caseStudy.learnings.map((learning, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-[#0D99FF]/5 dark:bg-[#0D99FF]/10 border border-[#0D99FF]/20 text-xs md:text-sm text-[#1E1E1E] dark:text-gray-200 leading-relaxed flex items-start gap-3">
                  <CheckCircle2 size={16} className="text-[#0D99FF] flex-shrink-0 mt-0.5" />
                  <span>{learning}</span>
                </div>
              ))}
            </div>
          </section>

          {/* BOTTOM NAVIGATION FOOTER */}
          <footer className="pt-8 border-t border-gray-200 dark:border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-4">
            <button
              onClick={onClose}
              className="w-full sm:w-auto bg-[#0D99FF] hover:bg-[#0085EB] text-white font-semibold text-xs px-6 py-2.5 rounded-xl shadow-sm transition-colors flex items-center justify-center gap-2 cursor-pointer"
            >
              <ArrowLeft size={14} />
              <span>Return to Projects</span>
            </button>

            <div className="flex items-center gap-3 w-full sm:w-auto">
              {project.behanceUrl && (
                <a
                  href={project.behanceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto bg-[#0057FF] hover:bg-[#0047D4] text-white font-semibold text-xs px-6 py-2.5 rounded-xl shadow-sm transition-colors flex items-center justify-center gap-2"
                >
                  <span className="font-bold text-[10px] bg-white text-[#0057FF] px-1 rounded-xs">Bē</span>
                  <span>View Full Case Study on Behance</span>
                  <ExternalLink size={14} />
                </a>
              )}

              <button
                onClick={onNextProject}
                className="w-full sm:w-auto border border-gray-200 dark:border-zinc-700 hover:bg-gray-50 dark:hover:bg-zinc-800 text-xs font-semibold px-6 py-2.5 rounded-xl transition-colors flex items-center justify-center gap-2"
              >
                <span>Next Project</span>
                <ArrowRight size={14} />
              </button>
            </div>
          </footer>
        </main>
      </div>
      </div>
    </div>
  );
};

