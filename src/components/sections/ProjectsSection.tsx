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
  Package,
  MapPin,
  Clock,
  ScanLine,
  Cpu,
  GitBranch,
  Search,
  Sparkles
} from 'lucide-react';
import { Project } from '../../types';

interface ProjectsSectionProps {
  projects: Project[];
  onOpenCaseStudy: (project: Project) => void;
}

// ─── Premium 3-Column Optimized Banner Previews ─────────────────────────────

const PharmaflowBanner: React.FC = () => (
  <div className="w-full h-48 sm:h-52 rounded-xl overflow-hidden relative bg-[#071822] border border-[#00BFA5]/25 flex flex-col justify-between p-3.5 group/preview select-none transition-all duration-300">
    {/* Ambient grid */}
    <div 
      className="absolute inset-0 opacity-[0.05]" 
      style={{ 
        backgroundImage: 'linear-gradient(#00BFA5 1px, transparent 1px), linear-gradient(90deg, #00BFA5 1px, transparent 1px)', 
        backgroundSize: '24px 24px' 
      }} 
    />
    <div className="absolute inset-0 bg-gradient-to-t from-[#071822] via-[#071822]/40 to-transparent pointer-events-none" />
    <div className="absolute top-0 right-0 w-44 h-24 bg-[#00BFA5]/10 blur-2xl rounded-full pointer-events-none" />

    {/* Top bar — Clinical status */}
    <div className="relative z-10 flex items-center justify-between">
      <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-md bg-[#00BFA5]/15 backdrop-blur-sm border border-[#00BFA5]/30 text-[#00BFA5] text-[9px] font-mono font-semibold tracking-wider">
        <ShieldCheck size={10} />
        CLINICAL POS · AAA
      </span>
      <div className="flex items-center gap-1.5 text-[8.5px] font-mono text-[#00BFA5]/80">
        <span className="w-1.5 h-1.5 rounded-full bg-[#00BFA5] animate-pulse" />
        <span>Active</span>
      </div>
    </div>

    {/* Simulated clinical feed */}
    <div className="relative z-10 flex-1 flex flex-col justify-center gap-1.5 my-1.5">
      {/* Contraindication Alert */}
      <div className="bg-[#0D1F1A]/95 backdrop-blur-sm border border-[#E53935]/35 rounded-lg px-2.5 py-1.5 flex items-center gap-2 group-hover/preview:border-[#E53935]/60 transition-colors duration-200">
        <AlertTriangle size={11} className="text-[#E53935] flex-shrink-0" />
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between gap-1">
            <span className="text-[8px] font-mono text-[#E53935] font-semibold truncate">HARD STOP · Interaction</span>
            <span className="text-[7px] font-mono text-zinc-500 flex-shrink-0">NDC·0591</span>
          </div>
          <div className="h-1 w-full bg-[#E53935]/20 rounded mt-0.5">
            <div className="h-full w-full bg-[#E53935]/70 rounded" />
          </div>
        </div>
      </div>

      {/* Verified Script */}
      <div className="bg-[#0D1F1A]/95 backdrop-blur-sm border border-[#00BFA5]/20 rounded-lg px-2.5 py-1.5 flex items-center gap-2">
        <CheckCircle2 size={11} className="text-[#00BFA5] flex-shrink-0" />
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between gap-1">
            <span className="text-[8px] font-mono text-[#00BFA5] font-semibold truncate">VERIFIED · Dispense Ready</span>
            <span className="text-[7px] font-mono text-zinc-500 flex-shrink-0">NDC·0245</span>
          </div>
          <div className="h-1 w-full bg-[#00BFA5]/20 rounded mt-0.5">
            <div className="h-full w-3/4 bg-[#00BFA5]/70 rounded" />
          </div>
        </div>
      </div>

      {/* Barcode validation */}
      <div className="bg-[#0D1F1A]/95 backdrop-blur-sm border border-[#FFB300]/25 rounded-lg px-2.5 py-1.5 flex items-center gap-2">
        <ScanLine size={11} className="text-[#FFB300] flex-shrink-0" />
        <div className="flex-1 min-w-0 flex items-center justify-between">
          <span className="text-[8px] font-mono text-[#FFB300] font-semibold truncate">BARCODE SCAN</span>
          <div className="flex gap-0.5 flex-shrink-0">
            {[3, 1, 2, 4, 1, 3, 2, 1].map((w, i) => (
              <span key={i} className="h-2 bg-[#FFB300]/50 rounded-xs" style={{ width: `${w}px` }} />
            ))}
          </div>
        </div>
      </div>
    </div>

    {/* Bottom HUD tokens */}
    <div className="relative z-10 grid grid-cols-3 gap-1.5">
      <div className="bg-[#071822]/90 backdrop-blur-sm px-2 py-1 rounded-lg border border-[#00BFA5]/20 text-center">
        <span className="text-[7.5px] text-[#00BFA5] font-mono block">3-TIER ALERTS</span>
        <span className="text-[9.5px] font-bold text-white">Zero Fatigue</span>
      </div>
      <div className="bg-[#071822]/90 backdrop-blur-sm px-2 py-1 rounded-lg border border-[#00BFA5]/20 text-center">
        <span className="text-[7.5px] text-[#00BFA5] font-mono block">VOLUME</span>
        <span className="text-[9.5px] font-bold text-white">250+ Rx/day</span>
      </div>
      <div className="bg-[#071822]/90 backdrop-blur-sm px-2 py-1 rounded-lg border border-[#00BFA5]/20 text-center">
        <span className="text-[7.5px] text-[#00BFA5] font-mono block">COMPLIANCE</span>
        <span className="text-[9.5px] font-bold text-white">WCAG AAA</span>
      </div>
    </div>
  </div>
);

const AgenticOSBanner: React.FC = () => (
  <div className="w-full h-48 sm:h-52 rounded-xl overflow-hidden relative bg-[#05080F] border border-[#0D99FF]/25 flex flex-col justify-between p-3.5 group/preview select-none transition-all duration-300">
    <div 
      className="absolute inset-0 opacity-[0.06]" 
      style={{ 
        backgroundImage: 'radial-gradient(#0D99FF 1px, transparent 1px)', 
        backgroundSize: '18px 18px' 
      }} 
    />
    <div className="absolute inset-0 bg-gradient-to-t from-[#05080F] via-[#05080F]/40 to-transparent pointer-events-none" />
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-24 bg-[#0D99FF]/10 blur-2xl rounded-full pointer-events-none" />

    {/* Top bar — AI status */}
    <div className="relative z-10 flex items-center justify-between">
      <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-md bg-[#0D99FF]/15 backdrop-blur-sm border border-[#0D99FF]/30 text-[#38BDF8] text-[9px] font-mono font-semibold tracking-wider">
        <Bot size={10} />
        AGENT RUNTIME · SPATIAL
      </span>
      <div className="flex items-center gap-1.5 text-[8.5px] font-mono text-[#14AE5C]">
        <span className="w-1.5 h-1.5 rounded-full bg-[#14AE5C] animate-pulse" />
        <span>3 Live Agents</span>
      </div>
    </div>

    {/* Simulated agent workspace */}
    <div className="relative z-10 flex-1 flex flex-col justify-center gap-1.5 my-1.5">
      {/* Omni command bar */}
      <div className="bg-[#0D1420]/95 backdrop-blur-sm border border-[#0D99FF]/35 rounded-lg px-2.5 py-1.5 flex items-center gap-2 group-hover/preview:border-[#0D99FF]/60 transition-colors duration-200">
        <Search size={10} className="text-[#0D99FF] flex-shrink-0" />
        <span className="text-[8px] font-mono text-zinc-300 truncate flex-1">Summarize Q4 PRD updates...</span>
        <span className="text-[7px] font-mono text-[#0D99FF] bg-[#0D99FF]/15 px-1 py-0.5 rounded flex-shrink-0">⌘K</span>
      </div>

      {/* Dual action cards */}
      <div className="grid grid-cols-2 gap-1.5">
        <div className="bg-[#0D1420]/95 backdrop-blur-sm border border-[#14AE5C]/30 rounded-lg p-1.5 min-w-0">
          <div className="flex items-center gap-1 mb-0.5">
            <CheckCircle2 size={8.5} className="text-[#14AE5C] flex-shrink-0" />
            <span className="text-[7.5px] font-mono text-[#14AE5C] font-semibold truncate">APPROVED</span>
            <span className="ml-auto text-[7px] font-mono text-[#14AE5C]/80">94%</span>
          </div>
          <div className="flex items-center gap-1">
            <GitBranch size={8} className="text-zinc-500 flex-shrink-0" />
            <span className="text-[7px] font-mono text-zinc-400 truncate">PRD draft staged</span>
          </div>
        </div>

        <div className="bg-[#0D1420]/95 backdrop-blur-sm border border-[#FFAB00]/30 rounded-lg p-1.5 min-w-0">
          <div className="flex items-center gap-1 mb-0.5">
            <Clock size={8.5} className="text-[#FFAB00] flex-shrink-0" />
            <span className="text-[7.5px] font-mono text-[#FFAB00] font-semibold truncate">PENDING</span>
            <span className="ml-auto text-[7px] font-mono text-[#FFAB00]/80">Review</span>
          </div>
          <div className="flex items-center gap-1">
            <Cpu size={8} className="text-zinc-500 flex-shrink-0" />
            <span className="text-[7px] font-mono text-zinc-400 truncate">Calendar audit</span>
          </div>
        </div>
      </div>

      {/* Audit trail */}
      <div className="bg-[#0D1420]/95 backdrop-blur-sm border border-zinc-800 rounded-lg px-2.5 py-1 flex items-center gap-2">
        <div className="flex flex-col gap-0.5 flex-shrink-0">
          {[{ c:'#14AE5C', w:'w-8' },{ c:'#0D99FF', w:'w-5' },{ c:'#FFAB00', w:'w-7' }].map((b,i)=>(
            <div key={i} className={`h-0.5 ${b.w} rounded`} style={{ backgroundColor: b.c, opacity: 0.7 }} />
          ))}
        </div>
        <span className="text-[7.5px] font-mono text-zinc-400 truncate flex-1">Audit Stream · 24h</span>
        <span className="text-[7px] font-mono text-[#0D99FF] flex-shrink-0">+12 ops</span>
      </div>
    </div>

    {/* Bottom HUD tokens */}
    <div className="relative z-10 grid grid-cols-3 gap-1.5">
      <div className="bg-[#05080F]/90 backdrop-blur-sm px-2 py-1 rounded-lg border border-[#0D99FF]/20 text-center">
        <span className="text-[7.5px] text-[#0D99FF] font-mono block">SUPERVISED</span>
        <span className="text-[9.5px] font-bold text-white">Diff Reviews</span>
      </div>
      <div className="bg-[#05080F]/90 backdrop-blur-sm px-2 py-1 rounded-lg border border-[#0D99FF]/20 text-center">
        <span className="text-[7.5px] text-[#0D99FF] font-mono block">EFFICIENCY</span>
        <span className="text-[9.5px] font-bold text-white">3.2× Faster</span>
      </div>
      <div className="bg-[#05080F]/90 backdrop-blur-sm px-2 py-1 rounded-lg border border-[#0D99FF]/20 text-center">
        <span className="text-[7.5px] text-[#0D99FF] font-mono block">WORKBENCH</span>
        <span className="text-[9.5px] font-bold text-white">Spatial Canvas</span>
      </div>
    </div>
  </div>
);

const LastMileBanner: React.FC = () => (
  <div className="w-full h-48 sm:h-52 rounded-xl overflow-hidden relative bg-[#051209] border border-[#14AE5C]/25 flex flex-col justify-between p-3.5 group/preview select-none transition-all duration-300">
    <div 
      className="absolute inset-0 opacity-[0.05]" 
      style={{ 
        backgroundImage: 'linear-gradient(#14AE5C 1px, transparent 1px), linear-gradient(90deg, #14AE5C 1px, transparent 1px)', 
        backgroundSize: '24px 24px' 
      }} 
    />
    <div className="absolute inset-0 bg-gradient-to-t from-[#051209] via-[#051209]/40 to-transparent pointer-events-none" />
    <div className="absolute bottom-0 right-0 w-44 h-24 bg-[#14AE5C]/10 blur-2xl rounded-full pointer-events-none" />

    {/* Top bar — Logistics status */}
    <div className="relative z-10 flex items-center justify-between">
      <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-md bg-[#14AE5C]/15 backdrop-blur-sm border border-[#14AE5C]/30 text-[#4ADE80] text-[9px] font-mono font-semibold tracking-wider">
        <Truck size={10} />
        CONSUMER LOGISTICS · 100M
      </span>
      <div className="flex items-center gap-1.5 text-[8.5px] font-mono text-[#14AE5C]">
        <span className="w-1.5 h-1.5 rounded-full bg-[#14AE5C] animate-pulse" />
        <span>En Route</span>
      </div>
    </div>

    {/* Simulated delivery HUD */}
    <div className="relative z-10 flex-1 flex gap-2.5 items-center my-1.5">
      {/* Phone tracking device */}
      <div className="w-20 flex-shrink-0 bg-[#0A1F11]/95 border-2 border-[#14AE5C]/30 rounded-xl p-2 flex flex-col gap-1 group-hover/preview:border-[#14AE5C]/60 transition-colors duration-200">
        <div className="w-5 h-0.5 bg-zinc-700 rounded-full mx-auto" />
        <div className="flex items-center justify-center my-0.5">
          <div className="relative w-8 h-8">
            <svg viewBox="0 0 36 36" className="w-8 h-8 -rotate-90">
              <circle cx="18" cy="18" r="15" fill="none" stroke="#14AE5C20" strokeWidth="3" />
              <circle cx="18" cy="18" r="15" fill="none" stroke="#14AE5C" strokeWidth="3" strokeDasharray="68 94" strokeLinecap="round" />
            </svg>
            <span className="absolute inset-0 flex items-center justify-center text-[7.5px] font-mono font-bold text-[#14AE5C]">3m</span>
          </div>
        </div>
        <span className="text-[6.5px] font-mono text-[#14AE5C]/80 text-center">ETA Arrival</span>
        <div className="bg-[#14AE5C]/15 rounded p-0.5 text-center">
          <span className="text-[6px] font-mono text-[#14AE5C] truncate block">Gate Code Sent</span>
        </div>
      </div>

      {/* Live tracking cards */}
      <div className="flex-1 min-w-0 flex flex-col gap-1.5">
        <div className="bg-[#0A1F11]/95 backdrop-blur-sm border border-[#14AE5C]/20 rounded-lg px-2 py-1 flex items-center gap-1.5">
          <MapPin size={9.5} className="text-[#14AE5C] flex-shrink-0" />
          <div className="flex-1 min-w-0">
            <span className="text-[7.5px] font-mono text-[#14AE5C] font-semibold block truncate">COURIER LOCATION</span>
            <div className="flex items-center gap-1 mt-0.5">
              <div className="flex gap-0.5">
                {[1, 2, 3, 4, 5].map((i) => (
                  <span key={i} className={`h-1 w-1 rounded-xs ${i < 4 ? 'bg-[#14AE5C]' : 'bg-zinc-700'}`} />
                ))}
              </div>
              <span className="text-[6.5px] font-mono text-zinc-400">300m away</span>
            </div>
          </div>
        </div>

        <div className="bg-[#0A1F11]/95 backdrop-blur-sm border border-[#F59E0B]/25 rounded-lg px-2 py-1 flex items-center gap-1.5">
          <Package size={9.5} className="text-[#F59E0B] flex-shrink-0" />
          <div className="flex-1 min-w-0">
            <span className="text-[7.5px] font-mono text-[#F59E0B] font-semibold block truncate">PINPOINT ENTRANCE</span>
            <span className="text-[6.5px] font-mono text-zinc-400 truncate block">Tower B · East Gate</span>
          </div>
        </div>

        <div className="bg-[#0A1F11]/95 backdrop-blur-sm border border-[#14AE5C]/20 rounded-lg px-2 py-1 flex items-center gap-1.5">
          <CheckCircle2 size={9} className="text-[#14AE5C] flex-shrink-0" />
          <span className="text-[7px] font-mono text-zinc-300 truncate">Silent doorstep drop confirmed</span>
        </div>
      </div>
    </div>

    {/* Bottom HUD tokens */}
    <div className="relative z-10 grid grid-cols-3 gap-1.5">
      <div className="bg-[#051209]/90 backdrop-blur-sm px-2 py-1 rounded-lg border border-[#14AE5C]/20 text-center">
        <span className="text-[7.5px] text-[#14AE5C] font-mono block">FRICTION</span>
        <span className="text-[9.5px] font-bold text-white">-60% Calls</span>
      </div>
      <div className="bg-[#051209]/90 backdrop-blur-sm px-2 py-1 rounded-lg border border-[#14AE5C]/20 text-center">
        <span className="text-[7.5px] text-[#14AE5C] font-mono block">USABILITY</span>
        <span className="text-[9.5px] font-bold text-white">4.8/5 Rating</span>
      </div>
      <div className="bg-[#051209]/90 backdrop-blur-sm px-2 py-1 rounded-lg border border-[#14AE5C]/20 text-center">
        <span className="text-[7.5px] text-[#14AE5C] font-mono block">PRECISION</span>
        <span className="text-[9.5px] font-bold text-white">Sub-Meter</span>
      </div>
    </div>
  </div>
);

// ─── Balanced Parallax Project Card ──────────────────────────────────────────

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

  // Balanced 3-column wave parallax: outer cards float up, center card gently dips
  const yOffset = index === 1 ? 14 : -12;
  const y = useTransform(
    scrollYProgress,
    [0, 1],
    shouldReduceMotion ? [0, 0] : [yOffset, -yOffset]
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
      className="bg-white dark:bg-[#202023] border border-gray-200 dark:border-zinc-800 hover:border-[#0D99FF] dark:hover:border-[#0D99FF] rounded-2xl sm:rounded-3xl p-5 sm:p-6 shadow-figma-card hover:shadow-figma-floating transition-all duration-300 cursor-pointer group flex flex-col justify-between relative overflow-hidden h-full"
    >
      <div>
        {/* Figma Frame Topbar */}
        <div className="flex items-center justify-between pb-3 mb-4 border-b border-gray-100 dark:border-zinc-800 text-xs">
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
        <div className="mb-4">
          {renderVisualPreview(project)}
        </div>

        {/* Project Info & Description */}
        <div className="space-y-3">
          <div>
            <span className="text-[11px] font-semibold text-[#0D99FF] uppercase tracking-wider block mb-1">
              {project.category}
            </span>

            <h3 className="text-lg font-bold text-[#1E1E1E] dark:text-white group-hover:text-[#0D99FF] transition-colors leading-snug min-h-[3rem] flex items-start justify-between gap-2">
              <span className="line-clamp-2">{project.title}</span>
              <ArrowUpRight size={17} className="opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all text-[#0D99FF] flex-shrink-0 mt-0.5" />
            </h3>

            {project.tagline && (
              <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 italic mt-1 line-clamp-1">
                "{project.tagline}"
              </p>
            )}

            <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed mt-2 line-clamp-2 min-h-[2.5rem]">
              {project.description}
            </p>
          </div>

          {/* Tech stack chips */}
          <div className="flex flex-wrap items-center gap-1.5 pt-1">
            {project.techStack.slice(0, 4).map((tech) => (
              <span
                key={tech}
                className="text-[10px] font-mono bg-gray-100 dark:bg-zinc-800 text-gray-700 dark:text-gray-300 px-2 py-0.5 rounded-md"
              >
                {tech}
              </span>
            ))}
            {project.techStack.length > 4 && (
              <span className="text-[10px] font-mono text-gray-400 bg-gray-50 dark:bg-zinc-900 px-1.5 py-0.5 rounded-md">
                +{project.techStack.length - 4}
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Actions Bar — fixed at bottom */}
      <div className="flex flex-wrap items-center gap-2 pt-4 mt-4 border-t border-gray-100 dark:border-zinc-800/80">
        <button
          onClick={(e) => {
            e.stopPropagation();
            onOpenCaseStudy(project);
          }}
          className="bg-[#0D99FF] hover:bg-[#0085EB] text-white px-3.5 py-1.5 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-colors shadow-sm cursor-pointer active:scale-95 flex-1 justify-center"
        >
          <span>Case Study</span>
          <ChevronRight size={13} />
        </button>

        {project.behanceUrl && (
          <a
            href={project.behanceUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="bg-gray-100 hover:bg-gray-200 dark:bg-zinc-800 dark:hover:bg-zinc-700 text-gray-700 dark:text-gray-200 border border-gray-200/80 dark:border-zinc-700 px-3 py-1.5 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-colors"
          >
            <span className="font-bold text-[10px] bg-[#0057FF] text-white px-1.5 py-0.5 rounded">Bē</span>
            <span>Behance</span>
            <ExternalLink size={11} className="text-gray-400" />
          </a>
        )}
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

          <div className="inline-flex items-center gap-2 text-xs font-mono text-gray-600 dark:text-gray-400 bg-gray-100 dark:bg-zinc-800 px-3 py-1.5 rounded-lg whitespace-nowrap self-start sm:self-auto border border-gray-200/60 dark:border-zinc-700/60">
            <Sparkles size={12} className="text-[#0D99FF]" />
            <span>3 In-Depth Case Studies</span>
          </div>
        </div>

        {/* Balanced 3-Column Symmetrical Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7 items-stretch">
          {projects.map((project, index) => {
            // On tablet (2 cols), card 3 spans across both columns centered
            const tabletSpanClass = index === 2 
              ? 'md:col-span-2 lg:col-span-1 md:max-w-md md:mx-auto md:w-full lg:max-w-none' 
              : '';

            return (
              <div key={project.id} className={`flex flex-col h-full ${tabletSpanClass}`}>
                <ParallaxProjectCard
                  project={project}
                  index={index}
                  onOpenCaseStudy={onOpenCaseStudy}
                  renderVisualPreview={renderVisualPreview}
                />
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
