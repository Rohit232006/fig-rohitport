import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import { 
  ArrowUpRight, 
  ExternalLink, 
  Layers, 
  ChevronRight, 
  ShieldCheck,
  Bot,
  Truck,
  AlertTriangle,
  CheckCircle2,
  Zap,
  MapPin,
  Clock,
  ScanLine,
  Cpu,
  GitBranch,
  Search,
  Package,
} from 'lucide-react';
import { Project } from '../../types';

interface ProjectsSectionProps {
  projects: Project[];
  onOpenCaseStudy: (project: Project) => void;
}

// ─── Premium Banner Components ────────────────────────────────────────────────

const PharmaflowBanner: React.FC = () => (
  <div className="w-full h-56 sm:h-64 rounded-xl overflow-hidden relative bg-[#071822] border border-[#00BFA5]/20 flex flex-col justify-between p-4 group/preview select-none">
    {/* Subtle grid overlay */}
    <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: 'linear-gradient(#00BFA5 1px,transparent 1px),linear-gradient(90deg,#00BFA5 1px,transparent 1px)', backgroundSize: '28px 28px' }} />
    {/* Gradient vignette */}
    <div className="absolute inset-0 bg-gradient-to-t from-[#071822] via-[#071822]/40 to-transparent pointer-events-none" />
    <div className="absolute inset-0 bg-gradient-to-br from-[#00BFA5]/8 via-transparent to-transparent pointer-events-none" />

    {/* Top bar — fake app chrome */}
    <div className="relative z-10 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#00BFA5]/15 backdrop-blur-sm border border-[#00BFA5]/30 text-[#00BFA5] text-[9px] font-mono font-semibold tracking-wider">
          <ShieldCheck size={10} />
          CLINICAL POS · WCAG AAA
        </span>
      </div>
      <div className="flex items-center gap-1.5">
        <span className="w-1.5 h-1.5 rounded-full bg-[#00BFA5]" />
        <span className="text-[9px] font-mono text-[#00BFA5]/70">System Active</span>
      </div>
    </div>

    {/* Simulated dashboard rows */}
    <div className="relative z-10 flex-1 flex flex-col justify-center gap-2 my-2">
      {/* Prescription row — alert */}
      <div className="bg-[#0D1F1A]/90 backdrop-blur-sm border border-[#E53935]/30 rounded-lg px-3 py-2 flex items-center gap-3 group-hover/preview:border-[#E53935]/50 transition-colors duration-300">
        <AlertTriangle size={12} className="text-[#E53935] flex-shrink-0" />
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between gap-2">
            <span className="text-[9px] font-mono text-[#E53935] font-semibold truncate">HARD STOP · Drug Interaction</span>
            <span className="text-[8px] font-mono text-zinc-500 flex-shrink-0">NDC·0591-5571</span>
          </div>
          <div className="h-1 w-3/4 bg-[#E53935]/20 rounded mt-1"><div className="h-full w-full bg-[#E53935]/60 rounded" /></div>
        </div>
      </div>
      {/* Prescription row — OK */}
      <div className="bg-[#0D1F1A]/90 backdrop-blur-sm border border-[#00BFA5]/20 rounded-lg px-3 py-2 flex items-center gap-3">
        <CheckCircle2 size={12} className="text-[#00BFA5] flex-shrink-0" />
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between gap-2">
            <span className="text-[9px] font-mono text-[#00BFA5] font-semibold">VERIFIED · Ready to Dispense</span>
            <span className="text-[8px] font-mono text-zinc-500 flex-shrink-0">NDC·0245-0082</span>
          </div>
          <div className="h-1 w-full bg-[#00BFA5]/20 rounded mt-1"><div className="h-full w-2/3 bg-[#00BFA5]/60 rounded" /></div>
        </div>
      </div>
      {/* Barcode scan row */}
      <div className="bg-[#0D1F1A]/90 backdrop-blur-sm border border-[#FFB300]/20 rounded-lg px-3 py-2 flex items-center gap-3">
        <ScanLine size={12} className="text-[#FFB300] flex-shrink-0" />
        <div className="flex-1">
          <span className="text-[9px] font-mono text-[#FFB300] font-semibold">BARCODE SCAN · Insurance Pending</span>
          <div className="flex gap-1 mt-1">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="h-2.5 rounded-sm bg-[#FFB300]/40" style={{ width: i % 3 === 0 ? 4 : 2 }} />
            ))}
          </div>
        </div>
      </div>
    </div>

    {/* Bottom HUD chips */}
    <div className="relative z-10 grid grid-cols-3 gap-2">
      <div className="bg-[#071822]/90 backdrop-blur-sm px-2 py-1.5 rounded-lg border border-[#00BFA5]/20">
        <span className="text-[8px] text-[#00BFA5] font-mono block">3-TIER ALERT</span>
        <span className="text-[10px] font-bold text-white">Zero Fatigue</span>
      </div>
      <div className="bg-[#071822]/90 backdrop-blur-sm px-2 py-1.5 rounded-lg border border-[#00BFA5]/20">
        <span className="text-[8px] text-[#00BFA5] font-mono block">250+ Rx/SHIFT</span>
        <span className="text-[10px] font-bold text-white">High Volume</span>
      </div>
      <div className="bg-[#071822]/90 backdrop-blur-sm px-2 py-1.5 rounded-lg border border-[#00BFA5]/20">
        <span className="text-[8px] text-[#00BFA5] font-mono block">WCAG AAA</span>
        <span className="text-[10px] font-bold text-white">Accessible</span>
      </div>
    </div>
  </div>
);

const AgenticOSBanner: React.FC = () => (
  <div className="w-full h-56 sm:h-64 rounded-xl overflow-hidden relative bg-[#05080F] border border-[#0D99FF]/20 flex flex-col justify-between p-4 group/preview select-none">
    {/* Animated grid dots */}
    <div className="absolute inset-0 opacity-[0.06]" style={{ backgroundImage: 'radial-gradient(#0D99FF 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
    <div className="absolute inset-0 bg-gradient-to-t from-[#05080F] via-[#05080F]/30 to-transparent pointer-events-none" />
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-32 bg-[#0D99FF]/6 blur-3xl rounded-full pointer-events-none" />

    {/* Top bar — Command palette */}
    <div className="relative z-10 flex items-center justify-between">
      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#0D99FF]/15 backdrop-blur-sm border border-[#0D99FF]/30 text-[#38BDF8] text-[9px] font-mono font-semibold tracking-wider">
        <Bot size={10} />
        AI OPERATING SYSTEM · AGENT RUNTIME
      </span>
      <div className="flex items-center gap-1.5">
        <span className="w-1.5 h-1.5 rounded-full bg-[#14AE5C] animate-pulse" />
        <span className="text-[9px] font-mono text-[#14AE5C]/80">3 Agents Running</span>
      </div>
    </div>

    {/* Simulated canvas workspace */}
    <div className="relative z-10 flex-1 flex flex-col justify-center gap-2 my-2">
      {/* Cmd bar */}
      <div className="bg-[#0D1420]/95 backdrop-blur-sm border border-[#0D99FF]/30 rounded-lg px-3 py-2 flex items-center gap-2 group-hover/preview:border-[#0D99FF]/50 transition-colors duration-300">
        <Search size={10} className="text-[#0D99FF]" />
        <span className="text-[9px] font-mono text-zinc-400">Summarize Q4 Product Review...</span>
        <div className="ml-auto flex items-center gap-1">
          <span className="text-[8px] font-mono text-[#0D99FF]/60 bg-[#0D99FF]/10 px-1.5 py-0.5 rounded">⌘K</span>
        </div>
      </div>
      {/* Agent action cards */}
      <div className="grid grid-cols-2 gap-2">
        <div className="bg-[#0D1420]/95 backdrop-blur-sm border border-[#14AE5C]/25 rounded-lg px-2.5 py-2">
          <div className="flex items-center gap-1.5 mb-1">
            <CheckCircle2 size={9} className="text-[#14AE5C]" />
            <span className="text-[8px] font-mono text-[#14AE5C] font-semibold">APPROVED</span>
            <span className="ml-auto text-[8px] font-mono text-[#14AE5C]/60 bg-[#14AE5C]/10 px-1 rounded">94%</span>
          </div>
          <div className="flex items-center gap-1">
            <GitBranch size={8} className="text-zinc-500" />
            <span className="text-[8px] font-mono text-zinc-400">Draft PRD updated</span>
          </div>
        </div>
        <div className="bg-[#0D1420]/95 backdrop-blur-sm border border-[#FFAB00]/25 rounded-lg px-2.5 py-2">
          <div className="flex items-center gap-1.5 mb-1">
            <Clock size={9} className="text-[#FFAB00]" />
            <span className="text-[8px] font-mono text-[#FFAB00] font-semibold">PENDING</span>
            <span className="ml-auto text-[8px] font-mono text-[#FFAB00]/60 bg-[#FFAB00]/10 px-1 rounded">Rev.</span>
          </div>
          <div className="flex items-center gap-1">
            <Cpu size={8} className="text-zinc-500" />
            <span className="text-[8px] font-mono text-zinc-400">Calendar sync</span>
          </div>
        </div>
      </div>
      {/* Audit timeline mini */}
      <div className="bg-[#0D1420]/95 backdrop-blur-sm border border-zinc-800 rounded-lg px-3 py-2 flex items-center gap-3">
        <div className="flex flex-col gap-0.5">
          {[{ c:'#14AE5C', w:'w-16' },{ c:'#0D99FF', w:'w-10' },{ c:'#FFAB00', w:'w-12' }].map((b,i)=>(
            <div key={i} className={`h-1 ${b.w} rounded`} style={{ backgroundColor: b.c, opacity: 0.5 }} />
          ))}
        </div>
        <span className="text-[8px] font-mono text-zinc-500">Audit Timeline · 24h</span>
        <div className="ml-auto text-[8px] font-mono text-[#0D99FF]/70">+12 actions</div>
      </div>
    </div>

    {/* Bottom HUD chips */}
    <div className="relative z-10 grid grid-cols-3 gap-2">
      <div className="bg-[#05080F]/90 backdrop-blur-sm px-2 py-1.5 rounded-lg border border-[#0D99FF]/20">
        <span className="text-[8px] text-[#0D99FF] font-mono block">SUPERVISED</span>
        <span className="text-[10px] font-bold text-white">Conf. Gates</span>
      </div>
      <div className="bg-[#05080F]/90 backdrop-blur-sm px-2 py-1.5 rounded-lg border border-[#0D99FF]/20">
        <span className="text-[8px] text-[#0D99FF] font-mono block">3.2× FASTER</span>
        <span className="text-[10px] font-bold text-white">Workflow</span>
      </div>
      <div className="bg-[#05080F]/90 backdrop-blur-sm px-2 py-1.5 rounded-lg border border-[#0D99FF]/20">
        <span className="text-[8px] text-[#0D99FF] font-mono block">SPATIAL UI</span>
        <span className="text-[10px] font-bold text-white">∞ Canvas</span>
      </div>
    </div>
  </div>
);

const LastMileBanner: React.FC = () => (
  <div className="w-full h-56 sm:h-64 rounded-xl overflow-hidden relative bg-[#051209] border border-[#14AE5C]/20 flex flex-col justify-between p-4 group/preview select-none">
    <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: 'linear-gradient(#14AE5C 1px,transparent 1px),linear-gradient(90deg,#14AE5C 1px,transparent 1px)', backgroundSize: '28px 28px' }} />
    <div className="absolute inset-0 bg-gradient-to-t from-[#051209] via-[#051209]/40 to-transparent pointer-events-none" />
    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-72 h-24 bg-[#14AE5C]/8 blur-3xl rounded-full pointer-events-none" />

    {/* Top bar */}
    <div className="relative z-10 flex items-center justify-between">
      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#14AE5C]/15 backdrop-blur-sm border border-[#14AE5C]/30 text-[#4ADE80] text-[9px] font-mono font-semibold tracking-wider">
        <Truck size={10} />
        CONSUMER LOGISTICS · FINAL 100M
      </span>
      <div className="flex items-center gap-1.5">
        <span className="w-1.5 h-1.5 rounded-full bg-[#14AE5C] animate-pulse" />
        <span className="text-[9px] font-mono text-[#14AE5C]/80">Driver En Route</span>
      </div>
    </div>

    {/* Simulated mobile tracking UI */}
    <div className="relative z-10 flex-1 flex gap-3 items-center my-2">
      {/* Phone mockup */}
      <div className="w-24 flex-shrink-0 bg-[#0A1F11]/95 border-2 border-[#14AE5C]/30 rounded-2xl p-2.5 flex flex-col gap-1.5 group-hover/preview:border-[#14AE5C]/50 transition-colors duration-300">
        <div className="w-6 h-1 bg-zinc-700 rounded-full mx-auto mb-1" />
        {/* ETA ring */}
        <div className="flex items-center justify-center">
          <div className="relative w-10 h-10">
            <svg viewBox="0 0 36 36" className="w-10 h-10 -rotate-90">
              <circle cx="18" cy="18" r="15" fill="none" stroke="#14AE5C20" strokeWidth="3" />
              <circle cx="18" cy="18" r="15" fill="none" stroke="#14AE5C" strokeWidth="3" strokeDasharray="68 94" strokeLinecap="round" />
            </svg>
            <span className="absolute inset-0 flex items-center justify-center text-[8px] font-mono font-bold text-[#14AE5C]">3m</span>
          </div>
        </div>
        <span className="text-[7px] font-mono text-[#14AE5C]/70 text-center">ETA Arrival</span>
        <div className="bg-[#14AE5C]/15 rounded-lg p-1 text-center">
          <span className="text-[6px] font-mono text-[#14AE5C]">Tower B · East Gate</span>
        </div>
      </div>

      {/* Info cards */}
      <div className="flex-1 flex flex-col gap-2">
        {/* Live tracking row */}
        <div className="bg-[#0A1F11]/95 backdrop-blur-sm border border-[#14AE5C]/20 rounded-lg px-2.5 py-2 flex items-center gap-2">
          <MapPin size={10} className="text-[#14AE5C] flex-shrink-0" />
          <div className="flex-1 min-w-0">
            <span className="text-[8px] font-mono text-[#14AE5C] font-semibold block">COURIER LOCATION</span>
            <div className="flex items-center gap-1 mt-0.5">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className={`h-1.5 w-1.5 rounded-sm ${i < 4 ? 'bg-[#14AE5C]/70' : 'bg-zinc-700'}`} />
                ))}
              </div>
              <span className="text-[7px] font-mono text-zinc-500">500m away</span>
            </div>
          </div>
        </div>
        {/* Pinpoint drop */}
        <div className="bg-[#0A1F11]/95 backdrop-blur-sm border border-[#F59E0B]/20 rounded-lg px-2.5 py-2 flex items-center gap-2">
          <Package size={10} className="text-[#F59E0B] flex-shrink-0" />
          <div className="flex-1">
            <span className="text-[8px] font-mono text-[#F59E0B] font-semibold block">PINPOINT DROP</span>
            <span className="text-[7px] font-mono text-zinc-500">Gate code sent ✓</span>
          </div>
          <Zap size={9} className="text-[#F59E0B]/60" />
        </div>
        {/* Silent alert */}
        <div className="bg-[#0A1F11]/95 backdrop-blur-sm border border-[#14AE5C]/20 rounded-lg px-2.5 py-2 flex items-center gap-2">
          <CheckCircle2 size={10} className="text-[#14AE5C] flex-shrink-0" />
          <span className="text-[8px] font-mono text-zinc-400">Silent doorstep drop confirmed</span>
        </div>
      </div>
    </div>

    {/* Bottom HUD chips */}
    <div className="relative z-10 grid grid-cols-3 gap-2">
      <div className="bg-[#051209]/90 backdrop-blur-sm px-2 py-1.5 rounded-lg border border-[#14AE5C]/20">
        <span className="text-[8px] text-[#14AE5C] font-mono block">-60% CALLS</span>
        <span className="text-[10px] font-bold text-white">Friction</span>
      </div>
      <div className="bg-[#051209]/90 backdrop-blur-sm px-2 py-1.5 rounded-lg border border-[#14AE5C]/20">
        <span className="text-[8px] text-[#14AE5C] font-mono block">4.8/5 SCORE</span>
        <span className="text-[10px] font-bold text-white">Usability</span>
      </div>
      <div className="bg-[#051209]/90 backdrop-blur-sm px-2 py-1.5 rounded-lg border border-[#14AE5C]/20">
        <span className="text-[8px] text-[#14AE5C] font-mono block">FINAL 100M</span>
        <span className="text-[10px] font-bold text-white">Precision</span>
      </div>
    </div>
  </div>
);

// ─── Parallax Project Card ────────────────────────────────────────────────────

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

  const isOdd = index % 2 === 1;
  const y = useTransform(
    scrollYProgress,
    [0, 1],
    shouldReduceMotion ? [0, 0] : isOdd ? [20, -20] : [-15, 15]
  );

  const handleCardClick = () => {
    if (project.id === 'agenticos' && project.behanceUrl) {
      window.open(project.behanceUrl, '_blank', 'noopener,noreferrer');
    } else {
      onOpenCaseStudy(project);
    }
  };

  return (
    <motion.div
      ref={cardRef}
      style={{ y }}
      onClick={handleCardClick}
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
            #{project.number} · {project.title.split(/[—–-]/)[0].trim()}
          </span>
        </div>
        <span className="text-[10px] font-mono text-[#0D99FF] bg-[#0D99FF]/10 px-2 py-0.5 rounded font-medium flex-shrink-0">
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
              "{project.tagline}"
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
            className="bg-[#0D99FF] hover:bg-[#0085EB] text-white px-4 py-2 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-colors shadow-sm cursor-pointer active:scale-95"
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
              <span className="font-bold text-[10px] bg-[#0057FF] text-white px-1.5 py-0.5 rounded">Bē</span>
              <span>Behance</span>
              <ExternalLink size={12} className="text-gray-400" />
            </a>
          )}
        </div>
      </div>

    </motion.div>
  );
};

// ─── Projects Section ─────────────────────────────────────────────────────────

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({
  projects,
  onOpenCaseStudy,
}) => {
  const renderVisualPreview = (project: Project) => {
    switch (project.previewType) {
      case 'pharmaflow':  return <PharmaflowBanner />;
      case 'agenticos':   return <AgenticOSBanner />;
      case 'lastmile':    return <LastMileBanner />;
      default:            return null;
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
              Featured Case Studies &amp; Work
            </h2>
            <p className="text-sm sm:text-base text-gray-500 dark:text-gray-400 mt-2 max-w-2xl">
              SaaS dashboard systems, autonomous AI productivity platforms, and consumer logistics workflows.
            </p>
          </div>

          <div className="text-xs font-mono text-gray-500 bg-gray-100 dark:bg-zinc-800 px-3 py-1.5 rounded-lg whitespace-nowrap self-start sm:self-auto border border-gray-200/60 dark:border-zinc-700/60">
            <span>3 In-Depth Case Studies</span>
          </div>
        </div>

        {/* 2-col grid */}
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
