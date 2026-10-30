import React from 'react';
import { 
  ArrowUpRight, 
  ExternalLink, 
  Sparkles, 
  CheckCircle2, 
  ChevronRight, 
  Layers, 
  Truck, 
  Dumbbell, 
  Activity, 
  Maximize2 
} from 'lucide-react';
import { Project } from '../../types';

interface ProjectsSectionProps {
  projects: Project[];
  onOpenCaseStudy: (project: Project) => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({
  projects,
  onOpenCaseStudy,
}) => {
  // Render visual project preview inside the card
  const renderVisualPreview = (project: Project) => {
    switch (project.previewType) {
      case 'pharmaflow':
        return (
          <div className="w-full h-56 sm:h-72 rounded-xl overflow-hidden relative border border-teal-900/40 bg-[#0A192F] group/img flex flex-col justify-end p-4">
            {project.logoUrl && (
              <img
                src={project.logoUrl}
                alt={project.title}
                className="absolute inset-0 w-full h-full object-cover object-top opacity-85 group-hover/img:scale-105 transition-transform duration-500"
              />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A192F] via-[#0A192F]/60 to-transparent" />
            
            <div className="relative z-10 grid grid-cols-3 gap-2">
              <div className="bg-[#0A192F]/90 backdrop-blur-md p-2 rounded border border-teal-500/30">
                <span className="text-[10px] text-teal-400 block font-mono">DISPENSE QUEUE</span>
                <span className="text-xs font-bold text-white">Active Dossier #204</span>
                <p className="text-[9px] text-gray-400 mt-0.5">Barcode Handshake Ready</p>
              </div>
              <div className="bg-[#0A192F]/90 backdrop-blur-md p-2 rounded border border-teal-500/30">
                <span className="text-[10px] text-amber-400 block font-mono">TIERED WARNINGS</span>
                <span className="text-xs font-bold text-white">3-Tier Clinical Hierarchy</span>
                <p className="text-[9px] text-gray-400 mt-0.5">Zero Modal Fatigue</p>
              </div>
              <div className="bg-[#0A192F]/90 backdrop-blur-md p-2 rounded border border-teal-500/30">
                <span className="text-[10px] text-teal-400 block font-mono">TOKEN SPEC</span>
                <span className="text-xs font-bold text-white">WCAG AAA Certified</span>
                <p className="text-[9px] text-gray-400 mt-0.5">Tokens Studio System</p>
              </div>
            </div>
          </div>
        );

      case 'fitstart':
        return (
          <div className="w-full h-56 sm:h-72 rounded-xl bg-zinc-950 p-3 sm:p-5 border border-purple-900/40 flex items-center justify-center gap-3 sm:gap-4 relative overflow-hidden group/img">
            {/* Desktop Preview Frame */}
            <div className="w-3/5 h-full bg-zinc-900 rounded-lg border border-zinc-800 p-3 flex flex-col justify-between shadow-sm">
              <div className="flex items-center justify-between border-b border-zinc-800 pb-1.5">
                <span className="text-[10px] font-mono text-[#9747FF]">Desktop (1440px)</span>
                <span className="text-[9px] bg-[#9747FF]/15 text-[#9747FF] px-1.5 py-0.5 rounded font-mono">12-Col</span>
              </div>
              <div className="space-y-1.5 py-1">
                <p className="text-xs font-bold text-white">Full-Body Strength Program</p>
                <p className="text-[10px] text-zinc-400 line-clamp-2">Personalized routine discovery & fluid equipment filters</p>
              </div>
              <div className="flex items-center justify-between pt-1 border-t border-zinc-800 text-[9px] text-zinc-400">
                <span>32 Mins • Intermediate</span>
                <span className="text-[#9747FF] font-semibold">Start Routine →</span>
              </div>
            </div>

            {/* Mobile Preview Frame */}
            <div className="w-2/5 h-full bg-zinc-900 rounded-xl border-2 border-purple-500/30 p-2.5 flex flex-col justify-between shadow-md">
              <div className="flex items-center justify-between border-b border-zinc-800 pb-1">
                <span className="text-[9px] font-mono text-zinc-400">Phone (375px)</span>
                <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
              </div>
              <div className="flex flex-col items-center justify-center py-1">
                <div className="w-9 h-9 rounded-full border-2 border-[#9747FF] border-t-transparent flex items-center justify-center text-[10px] font-mono font-bold text-white">
                  00:45
                </div>
                <span className="text-[8px] text-zinc-400 mt-1">Rest Timer</span>
              </div>
              <div className="bg-[#9747FF] text-white text-[9px] font-semibold text-center py-1 rounded">
                One-Tap Log
              </div>
            </div>
          </div>
        );

      case 'agenticos':
        return (
          <div className="w-full h-56 sm:h-72 rounded-xl overflow-hidden relative border border-blue-900/40 bg-slate-950 flex flex-col justify-end p-4 group/img">
            <div className="absolute inset-0 flex items-center justify-center p-6 bg-gradient-to-b from-[#050B14] via-[#091528] to-[#0A1220]">
              <div className="absolute w-64 h-48 rounded-full bg-[#0D99FF]/20 blur-3xl pointer-events-none" />
              {project.logoUrl && (
                <img
                  src={project.logoUrl}
                  alt={project.title}
                  className="max-h-40 w-auto object-contain z-0 drop-shadow-[0_15px_35px_rgba(13,153,255,0.4)] group-hover/img:scale-105 transition-transform duration-500"
                />
              )}
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-[#070D18] via-[#070D18]/70 to-transparent pointer-events-none" />

            <div className="relative z-10 grid grid-cols-3 gap-2">
              <div className="bg-[#070D18]/90 backdrop-blur-md p-2 rounded border border-blue-500/30">
                <span className="text-[10px] text-blue-400 block font-mono">AGENT RUNTIME</span>
                <span className="text-xs font-bold text-white">Supervised Actions</span>
              </div>
              <div className="bg-[#070D18]/90 backdrop-blur-md p-2 rounded border border-blue-500/30">
                <span className="text-[10px] text-cyan-400 block font-mono">CONTEXT ENGINE</span>
                <span className="text-xs font-bold text-white">Living Canvas Surface</span>
              </div>
              <div className="bg-[#070D18]/90 backdrop-blur-md p-2 rounded border border-blue-500/30">
                <span className="text-[10px] text-indigo-400 block font-mono">CONFIDENCE GATES</span>
                <span className="text-xs font-bold text-white">1-Click Approvals</span>
              </div>
            </div>
          </div>
        );

      case 'lastmile':
        return (
          <div className="w-full h-56 sm:h-72 rounded-xl overflow-hidden relative border border-emerald-900/40 bg-slate-950 flex flex-col justify-end p-4 group/img">
            <div className="absolute inset-0 flex items-center justify-center p-6 bg-gradient-to-b from-[#061214] via-[#091D1E] to-[#081517]">
              <div className="absolute w-64 h-48 rounded-full bg-[#14AE5C]/20 blur-3xl pointer-events-none" />
              {project.logoUrl && (
                <img
                  src={project.logoUrl}
                  alt={project.title}
                  className="absolute inset-0 w-full h-full object-contain object-center opacity-90 group-hover/img:scale-105 transition-transform duration-500 p-6"
                />
              )}
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A141A] via-[#0A141A]/70 to-transparent pointer-events-none" />

            <div className="relative z-10 grid grid-cols-3 gap-2">
              <div className="bg-[#0A141A]/90 backdrop-blur-md p-2 rounded border border-emerald-500/30">
                <span className="text-[10px] text-emerald-400 block font-mono">WAITING PSYCHOLOGY</span>
                <span className="text-xs font-bold text-white">Live Progress HUD</span>
              </div>
              <div className="bg-[#0A141A]/90 backdrop-blur-md p-2 rounded border border-emerald-500/30">
                <span className="text-[10px] text-green-400 block font-mono">DOORSTEP PINPOINT</span>
                <span className="text-xs font-bold text-white">Final 100m Routing</span>
              </div>
              <div className="bg-[#0A141A]/90 backdrop-blur-md p-2 rounded border border-emerald-500/30">
                <span className="text-[10px] text-teal-400 block font-mono">ANXIETY REDUCTION</span>
                <span className="text-xs font-bold text-white">Silent Delivery Flow</span>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <section id="work" className="py-16 sm:py-24 border-b border-gray-200/80 dark:border-zinc-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-6 border-b border-gray-200 dark:border-zinc-800">
          <div>
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-[#0D99FF]/10 text-[#0D99FF] text-xs font-mono font-medium mb-3">
              <Layers size={13} />
              <span>01 — 04 / Selected Projects</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#1E1E1E] dark:text-white">
              Featured Case Studies & Work
            </h2>
            <p className="text-sm sm:text-base text-gray-500 dark:text-gray-400 mt-2 max-w-2xl">
              Exploring SaaS product design, responsive web experiences, autonomous AI interfaces, and consumer logistics flows.
            </p>
          </div>

          <div className="text-xs font-mono text-gray-500 bg-gray-100 dark:bg-zinc-800 px-3 py-1.5 rounded-lg whitespace-nowrap self-start sm:self-auto">
            <span>4 In-Depth Projects</span>
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => {
            const isFullWidth = index === 0; // First project (Pharmaflow) spans full width as flagship
            return (
              <div
                key={project.id}
                onClick={() => onOpenCaseStudy(project)}
                className={`bg-white dark:bg-[#202023] border border-[#E5E7EB] dark:border-[#2E2E2E] hover:border-[#0D99FF] rounded-2xl sm:rounded-3xl p-5 sm:p-7 shadow-figma-card hover:shadow-figma-floating transition-all duration-300 cursor-pointer group flex flex-col justify-between relative overflow-hidden select-text ${
                  isFullWidth ? 'lg:col-span-2' : ''
                }`}
              >
                {/* Figma Frame Topbar */}
                <div className="flex items-center justify-between pb-3.5 mb-4 border-b border-gray-100 dark:border-zinc-800 text-xs">
                  <div className="flex items-center gap-2.5 overflow-hidden">
                    <span 
                      className="w-3 h-3 rounded-xs flex-shrink-0" 
                      style={{ backgroundColor: project.accentColor }} 
                    />
                    <span className="font-mono font-bold text-xs text-gray-900 dark:text-white truncate">
                      #{project.number} / {project.title}
                    </span>
                  </div>

                  <div className="flex items-center gap-2 flex-shrink-0">
                    <span className="text-[10px] font-mono text-gray-400 bg-gray-100 dark:bg-zinc-800 px-2 py-0.5 rounded">
                      1440 × 900
                    </span>
                    <span className="text-[10px] font-medium text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-zinc-800 px-2 py-0.5 rounded hidden sm:inline">
                      {project.status}
                    </span>
                  </div>
                </div>

                {/* Large Visual Preview Showcase */}
                <div className="mb-5">
                  {renderVisualPreview(project)}
                </div>

                {/* Project Info & Description */}
                <div className="space-y-3 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 mb-1.5">
                      <span className="text-xs font-semibold text-[#0D99FF]">
                        {project.category}
                      </span>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-bold text-[#1E1E1E] dark:text-white group-hover:text-[#0D99FF] transition-colors flex items-center justify-between">
                      <span>{project.title}</span>
                      <ArrowUpRight size={18} className="opacity-0 group-hover:opacity-100 transition-opacity text-[#0D99FF]" />
                    </h3>

                    {project.tagline && (
                      <p className="text-xs font-semibold text-gray-600 dark:text-gray-400 italic mt-1">
                        “{project.tagline}”
                      </p>
                    )}

                    <p className="text-xs sm:text-sm text-[#4B5563] dark:text-[#A1A1AA] leading-relaxed mt-2.5">
                      {project.description}
                    </p>
                  </div>

                  {/* Tech stack chips */}
                  <div className="flex flex-wrap items-center gap-1.5 pt-3">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="text-[10px] font-medium bg-gray-100 dark:bg-zinc-800 text-gray-700 dark:text-gray-300 px-2.5 py-1 rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Actions Bar */}
                  <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-gray-100 dark:border-zinc-800/80">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onOpenCaseStudy(project);
                      }}
                      className="bg-[#0D99FF] hover:bg-[#0085EB] text-white px-4 py-2 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-colors shadow-xs cursor-pointer active:scale-95"
                    >
                      <span>View Case Study</span>
                      <ChevronRight size={14} />
                    </button>

                    {project.behanceUrl && (
                      <a
                        href={project.behanceUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="bg-[#0057FF]/10 hover:bg-[#0057FF]/20 text-[#0057FF] dark:text-[#38bdf8] border border-[#0057FF]/30 px-4 py-2 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-colors"
                      >
                        <span className="font-bold text-[10px] bg-[#0057FF] text-white px-1 rounded-xs">Bē</span>
                        <span>View Full Case Study on Behance</span>
                        <ExternalLink size={12} />
                      </a>
                    )}
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

