import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import { 
  ArrowUpRight, 
  ExternalLink, 
  Sparkles, 
  ChevronRight, 
  Layers, 
  Activity, 
  ShieldCheck,
  Smartphone,
  Monitor,
  Bot,
  Truck
} from 'lucide-react';
import { Project } from '../../types';

interface ProjectsSectionProps {
  projects: Project[];
  onOpenCaseStudy: (project: Project) => void;
}

// Parallax Project Card Component
const ParallaxProjectCard: React.FC<{
  project: Project;
  index: number;
  onOpenCaseStudy: (project: Project) => void;
  renderVisualPreview: (project: Project) => React.ReactNode;
}> = ({ project, index, onOpenCaseStudy, renderVisualPreview }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ['start end', 'end start']
  });

  // Staggered column parallax offset: even columns move upward, odd columns offset downward
  const isOdd = index % 2 === 1;
  const y = useTransform(
    scrollYProgress, 
    [0, 1], 
    shouldReduceMotion ? [0, 0] : isOdd ? [20, -20] : [-15, 15]
  );

  return (
    <motion.div
      ref={cardRef}
      style={{ y }}
      onClick={() => onOpenCaseStudy(project)}
      className="bg-white dark:bg-[#202023] border border-gray-200 dark:border-zinc-800 hover:border-[#0D99FF] dark:hover:border-[#0D99FF] rounded-2xl sm:rounded-3xl p-5 sm:p-6 lg:p-7 shadow-figma-card hover:shadow-figma-floating transition-all duration-300 cursor-pointer group flex flex-col justify-between relative overflow-hidden"
    >
      {/* Figma Frame Topbar */}
      <div className="flex items-center justify-between pb-3.5 mb-4 border-b border-gray-100 dark:border-zinc-800 text-xs">
        <div className="flex items-center gap-2 overflow-hidden">
          <span 
            className="w-2.5 h-2.5 rounded-full flex-shrink-0" 
            style={{ backgroundColor: project.accentColor }} 
          />
          <span className="font-mono font-semibold text-xs text-gray-900 dark:text-white truncate">
            #{project.number} · {project.title.split('—')[0].trim()}
          </span>
        </div>

        <span className="text-[10px] font-mono text-[#0D99FF] bg-[#0D99FF]/10 px-2 py-0.5 rounded font-medium">
          {project.status}
        </span>
      </div>

      {/* Visual Preview Showcase */}
      <div className="mb-5">
        {renderVisualPreview(project)}
      </div>

      {/* Project Info & Description */}
      <div className="space-y-4 flex-1 flex flex-col justify-between">
        <div>
          <div className="flex items-center gap-2 mb-1.5">
            <span className="text-xs font-semibold text-[#0D99FF]">
              {project.category}
            </span>
          </div>

          <h3 className="text-xl sm:text-2xl font-bold text-[#1E1E1E] dark:text-white group-hover:text-[#0D99FF] transition-colors flex items-center justify-between">
            <span>{project.title}</span>
            <ArrowUpRight size={18} className="opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all text-[#0D99FF]" />
          </h3>

          {project.tagline && (
            <p className="text-xs font-semibold text-gray-600 dark:text-gray-400 italic mt-1 line-clamp-1">
              “{project.tagline}”
            </p>
          )}

          <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 leading-relaxed mt-2.5 line-clamp-2">
            {project.description}
          </p>
        </div>

        {/* Tech stack chips */}
        <div className="flex flex-wrap items-center gap-1.5 pt-2">
          {project.techStack.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="text-[10px] font-mono bg-gray-100 dark:bg-zinc-800 text-gray-700 dark:text-gray-300 px-2.5 py-1 rounded-md"
            >
              {tech}
            </span>
          ))}
          {project.techStack.length > 4 && (
            <span className="text-[10px] font-mono text-gray-400 bg-gray-50 dark:bg-zinc-900 px-2 py-1 rounded-md">
              +{project.techStack.length - 4} more
            </span>
          )}
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
            <span>Read Case Study</span>
            <ChevronRight size={14} />
          </button>

          {project.behanceUrl && (
            <a
              href={project.behanceUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="bg-gray-100 hover:bg-gray-200 dark:bg-zinc-800 dark:hover:bg-zinc-700 text-gray-700 dark:text-gray-200 border border-gray-200/80 dark:border-zinc-700 px-3.5 py-2 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-colors"
            >
              <span className="font-bold text-[10px] bg-[#0057FF] text-white px-1 rounded-xs">Bē</span>
              <span>Behance</span>
              <ExternalLink size={12} className="text-gray-400" />
            </a>
          )}
        </div>
      </div>

    </motion.div>
  );
};

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({
  projects,
  onOpenCaseStudy,
}) => {
  // Render visual project preview showcase inside each card
  const renderVisualPreview = (project: Project) => {
    switch (project.previewType) {
      case 'pharmaflow':
        return (
          <div className="w-full h-56 sm:h-64 rounded-xl overflow-hidden relative border border-teal-500/20 bg-[#081321] flex flex-col justify-between p-4 group/preview">
            {/* Background mockup image with subtle zoom */}
            {project.logoUrl && (
              <img
                src={project.logoUrl}
                alt={project.title}
                className="absolute inset-0 w-full h-full object-cover object-top opacity-75 group-hover/preview:scale-105 transition-transform duration-500"
              />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-[#081321] via-[#081321]/50 to-transparent pointer-events-none" />
            
            {/* Top pill */}
            <div className="relative z-10 flex items-center justify-between">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#00BFA5]/20 backdrop-blur-md border border-[#00BFA5]/40 text-[#00BFA5] text-[10px] font-mono font-semibold">
                <ShieldCheck size={12} />
                <span>CLINICAL POS · WCAG AAA</span>
              </span>
              <span className="text-[10px] font-mono text-teal-300/80 bg-teal-950/80 px-2 py-0.5 rounded border border-teal-800/40">
                1440 × 900
              </span>
            </div>

            {/* Bottom glanceable HUD chips */}
            <div className="relative z-10 grid grid-cols-2 gap-2">
              <div className="bg-[#081321]/90 backdrop-blur-md px-2.5 py-1.5 rounded-lg border border-teal-500/30">
                <span className="text-[9px] text-teal-400 font-mono block">3-TIER WARNINGS</span>
                <span className="text-xs font-bold text-white">Zero Modal Fatigue</span>
              </div>
              <div className="bg-[#081321]/90 backdrop-blur-md px-2.5 py-1.5 rounded-lg border border-teal-500/30">
                <span className="text-[9px] text-teal-400 font-mono block">DISPENSE QUEUE</span>
                <span className="text-xs font-bold text-white">Barcode Handshake</span>
              </div>
            </div>
          </div>
        );

      case 'fitstart':
        return (
          <div className="w-full h-56 sm:h-64 rounded-xl overflow-hidden relative border border-purple-500/20 bg-[#120D1D] flex flex-col justify-between p-4 group/preview">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-900/30 via-[#120D1D] to-[#0A0711] pointer-events-none" />

            {/* Top pill */}
            <div className="relative z-10 flex items-center justify-between">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#9747FF]/20 backdrop-blur-md border border-[#9747FF]/40 text-[#C084FC] text-[10px] font-mono font-semibold">
                <Smartphone size={12} />
                <span>RESPONSIVE WEB · MULTI-DEVICE</span>
              </span>
              <span className="text-[10px] font-mono text-purple-300/80 bg-purple-950/80 px-2 py-0.5 rounded border border-purple-800/40">
                Fluid Grid
              </span>
            </div>

            {/* Simulated Desktop & Mobile dual preview */}
            <div className="relative z-10 flex items-center justify-center gap-3 my-auto">
              {/* Desktop frame preview */}
              <div className="w-3/5 bg-zinc-900/95 border border-purple-500/30 rounded-lg p-2.5 shadow-lg group-hover/preview:scale-[1.02] transition-transform duration-300">
                <div className="flex items-center justify-between border-b border-zinc-800 pb-1 mb-1.5">
                  <div className="flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-500/70" />
                    <span className="w-1.5 h-1.5 rounded-full bg-yellow-500/70" />
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500/70" />
                  </div>
                  <span className="text-[8px] font-mono text-purple-400">Desktop View</span>
                </div>
                <div className="space-y-1">
                  <div className="h-2 w-3/4 bg-purple-400/40 rounded" />
                  <div className="h-1.5 w-1/2 bg-zinc-700 rounded" />
                </div>
              </div>

              {/* Mobile device preview */}
              <div className="w-1/4 bg-zinc-900/95 border-2 border-purple-500/40 rounded-xl p-2 shadow-xl flex flex-col items-center justify-center group-hover/preview:scale-[1.04] transition-transform duration-300">
                <div className="w-7 h-7 rounded-full border-2 border-[#9747FF] flex items-center justify-center text-[8px] font-mono text-white font-bold my-1">
                  00:45
                </div>
                <span className="text-[7px] text-purple-300 font-mono">Routine HUD</span>
              </div>
            </div>

            {/* Bottom glanceable HUD chips */}
            <div className="relative z-10 grid grid-cols-2 gap-2">
              <div className="bg-[#120D1D]/90 backdrop-blur-md px-2.5 py-1.5 rounded-lg border border-purple-500/30">
                <span className="text-[9px] text-purple-300 font-mono block">STREAK SYSTEM</span>
                <span className="text-xs font-bold text-white">Habit Mechanics</span>
              </div>
              <div className="bg-[#120D1D]/90 backdrop-blur-md px-2.5 py-1.5 rounded-lg border border-purple-500/30">
                <span className="text-[9px] text-purple-300 font-mono block">THUMB TARGETS</span>
                <span className="text-xs font-bold text-white">Gym-Floor UX</span>
              </div>
            </div>
          </div>
        );

      case 'agenticos':
        return (
          <div className="w-full h-56 sm:h-64 rounded-xl overflow-hidden relative border border-blue-500/20 bg-[#060D1A] flex flex-col justify-between p-4 group/preview">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/25 via-[#060D1A] to-[#040810] pointer-events-none" />

            {/* Logo in center with glow */}
            {project.logoUrl && (
              <img
                src={project.logoUrl}
                alt={project.title}
                className="absolute inset-0 w-full h-full object-contain p-8 opacity-80 group-hover/preview:scale-105 transition-transform duration-500"
              />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-[#060D1A] via-[#060D1A]/50 to-transparent pointer-events-none" />

            {/* Top pill */}
            <div className="relative z-10 flex items-center justify-between">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#0D99FF]/20 backdrop-blur-md border border-[#0D99FF]/40 text-[#38BDF8] text-[10px] font-mono font-semibold">
                <Bot size={12} />
                <span>AI OPERATING SYSTEM · AGENT RUNTIME</span>
              </span>
              <span className="text-[10px] font-mono text-blue-300/80 bg-blue-950/80 px-2 py-0.5 rounded border border-blue-800/40">
                Next-Gen UI
              </span>
            </div>

            {/* Bottom glanceable HUD chips */}
            <div className="relative z-10 grid grid-cols-2 gap-2">
              <div className="bg-[#060D1A]/90 backdrop-blur-md px-2.5 py-1.5 rounded-lg border border-blue-500/30">
                <span className="text-[9px] text-blue-400 font-mono block">SUPERVISED ACTIONS</span>
                <span className="text-xs font-bold text-white">Confidence Gates</span>
              </div>
              <div className="bg-[#060D1A]/90 backdrop-blur-md px-2.5 py-1.5 rounded-lg border border-blue-500/30">
                <span className="text-[9px] text-blue-400 font-mono block">LIVING CANVAS</span>
                <span className="text-xs font-bold text-white">Context Surface</span>
              </div>
            </div>
          </div>
        );

      case 'lastmile':
        return (
          <div className="w-full h-56 sm:h-64 rounded-xl overflow-hidden relative border border-emerald-500/20 bg-[#061413] flex flex-col justify-between p-4 group/preview">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-emerald-900/25 via-[#061413] to-[#040B0A] pointer-events-none" />

            {project.logoUrl && (
              <img
                src={project.logoUrl}
                alt={project.title}
                className="absolute inset-0 w-full h-full object-contain p-6 opacity-85 group-hover/preview:scale-105 transition-transform duration-500"
              />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-[#061413] via-[#061413]/50 to-transparent pointer-events-none" />

            {/* Top pill */}
            <div className="relative z-10 flex items-center justify-between">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#14AE5C]/20 backdrop-blur-md border border-[#14AE5C]/40 text-[#4ADE80] text-[10px] font-mono font-semibold">
                <Truck size={12} />
                <span>CONSUMER LOGISTICS · FINAL 100M</span>
              </span>
              <span className="text-[10px] font-mono text-emerald-300/80 bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-800/40">
                Mobile UX
              </span>
            </div>

            {/* Bottom glanceable HUD chips */}
            <div className="relative z-10 grid grid-cols-2 gap-2">
              <div className="bg-[#061413]/90 backdrop-blur-md px-2.5 py-1.5 rounded-lg border border-emerald-500/30">
                <span className="text-[9px] text-emerald-400 font-mono block">ANXIETY REDUCTION</span>
                <span className="text-xs font-bold text-white">Live Progress HUD</span>
              </div>
              <div className="bg-[#061413]/90 backdrop-blur-md px-2.5 py-1.5 rounded-lg border border-emerald-500/30">
                <span className="text-[9px] text-emerald-400 font-mono block">DOORSTEP ROUTING</span>
                <span className="text-xs font-bold text-white">Pinpoint Handshake</span>
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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 sm:space-y-12">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-6 border-b border-gray-200 dark:border-zinc-800">
          <div>
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-[#0D99FF]/10 text-[#0D99FF] text-xs font-mono font-medium mb-3">
              <Layers size={13} />
              <span>01 / Selected Works</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#1E1E1E] dark:text-white">
              Featured Case Studies & Work
            </h2>
            <p className="text-sm sm:text-base text-gray-500 dark:text-gray-400 mt-2 max-w-2xl">
              SaaS dashboard systems, responsive web interfaces, autonomous AI surfaces, and consumer logistics workflows.
            </p>
          </div>

          <div className="text-xs font-mono text-gray-500 bg-gray-100 dark:bg-zinc-800 px-3 py-1.5 rounded-lg whitespace-nowrap self-start sm:self-auto border border-gray-200/60 dark:border-zinc-700/60">
            <span>4 In-Depth Case Studies</span>
          </div>
        </div>

        {/* Balanced 2x2 Symmetrical Grid with Staggered Parallax Fitting */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-stretch">
          {projects.map((project, index) => (
            <ParallaxProjectCard
              key={project.id}
              project={project}
              index={index}
              onOpenCaseStudy={onOpenCaseStudy}
              renderVisualPreview={renderVisualPreview}
            />
          ))}
        </div>

      </div>
    </section>
  );
};
