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
  Sparkles,
  Zap,
  Activity
} from 'lucide-react';
import { Project } from '../../types';

interface ProjectsSectionProps {
  projects: Project[];
  onOpenCaseStudy: (project: Project) => void;
}

// ─── Bento Box Visual Preview 1: Agentic OS (Wide Spatial Canvas) ────────────

const AgenticOSBentoPreview: React.FC = () => (
  <div className="w-full h-64 sm:h-72 lg:h-80 rounded-2xl overflow-hidden relative bg-[#040811] border border-[#0D99FF]/25 flex flex-col justify-between p-4 sm:p-5 group/preview select-none transition-all duration-300 shadow-inner">
    {/* Grid texture & lighting */}
    <div 
      className="absolute inset-0 opacity-[0.06]" 
      style={{ 
        backgroundImage: 'radial-gradient(#0D99FF 1px, transparent 1px)', 
        backgroundSize: '20px 20px' 
      }} 
    />
    <div className="absolute inset-0 bg-gradient-to-t from-[#040811] via-[#040811]/30 to-transparent pointer-events-none" />
    <div className="absolute top-0 right-1/4 w-80 h-36 bg-[#0D99FF]/10 blur-3xl rounded-full pointer-events-none" />

    {/* Topbar: Live Agent Runtime Header */}
    <div className="relative z-10 flex items-center justify-between gap-2">
      <div className="flex items-center gap-2">
        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#0D99FF]/15 backdrop-blur-sm border border-[#0D99FF]/30 text-[#38BDF8] text-[10px] font-mono font-semibold tracking-wider">
          <Bot size={11} />
          AGENT RUNTIME · SPATIAL CANVAS
        </span>
        <span className="hidden sm:inline-flex items-center gap-1 px-2 py-0.5 rounded bg-blue-950/60 border border-blue-800/40 text-[9px] font-mono text-blue-300">
          <Activity size={10} className="text-[#0D99FF]" />
          <span>v2.4 Active</span>
        </span>
      </div>

      <div className="flex items-center gap-2">
        <span className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-[#14AE5C]/10 border border-[#14AE5C]/20 text-[9px] font-mono text-[#14AE5C] font-medium">
          <span className="w-1.5 h-1.5 rounded-full bg-[#14AE5C] animate-pulse" />
          <span>3 Agents Online</span>
        </span>
      </div>
    </div>

    {/* Center: Command Palette & Agent Cards Workspace */}
    <div className="relative z-10 flex-1 flex flex-col justify-center gap-2.5 my-3">
      {/* Omni-Command Palette */}
      <div className="bg-[#0B1324]/95 backdrop-blur-md border border-[#0D99FF]/35 rounded-xl px-3.5 py-2.5 flex items-center gap-2.5 shadow-lg group-hover/preview:border-[#0D99FF]/60 transition-colors duration-300">
        <Search size={12} className="text-[#0D99FF] flex-shrink-0" />
        <span className="text-[10px] sm:text-xs font-mono text-zinc-300 truncate flex-1">
          Summarize Q4 architecture reviews &amp; dispatch Linear tickets...
        </span>
        <div className="flex items-center gap-1.5 flex-shrink-0">
          <span className="text-[9px] font-mono text-[#0D99FF] bg-[#0D99FF]/15 px-1.5 py-0.5 rounded font-semibold border border-[#0D99FF]/30">⌘K</span>
        </div>
      </div>

      {/* Side-by-Side Agent Staged Actions */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
        {/* Approved Action */}
        <div className="bg-[#0B1324]/90 backdrop-blur-sm border border-[#14AE5C]/35 rounded-xl p-2.5 sm:p-3">
          <div className="flex items-center justify-between mb-1.5">
            <div className="flex items-center gap-1.5">
              <CheckCircle2 size={11} className="text-[#14AE5C]" />
              <span className="text-[9px] font-mono text-[#14AE5C] font-bold">APPROVED ACTION</span>
            </div>
            <span className="text-[8.5px] font-mono text-[#14AE5C] bg-[#14AE5C]/15 px-1.5 py-0.5 rounded font-semibold">94% Confidence</span>
          </div>
          <p className="text-[10px] font-mono text-zinc-300 truncate">
            PRD draft verified · 4 citations attached
          </p>
          <div className="flex items-center gap-1.5 mt-1 text-[8.5px] font-mono text-zinc-500">
            <GitBranch size={9} />
            <span>diff: +148 lines / -12 lines</span>
          </div>
        </div>

        {/* Pending Action Review */}
        <div className="bg-[#0B1324]/90 backdrop-blur-sm border border-[#FFAB00]/35 rounded-xl p-2.5 sm:p-3">
          <div className="flex items-center justify-between mb-1.5">
            <div className="flex items-center gap-1.5">
              <Clock size={11} className="text-[#FFAB00]" />
              <span className="text-[9px] font-mono text-[#FFAB00] font-bold">AWAITING REVIEW</span>
            </div>
            <span className="text-[8.5px] font-mono text-[#FFAB00] bg-[#FFAB00]/15 px-1.5 py-0.5 rounded font-semibold">Diff Gate</span>
          </div>
          <p className="text-[10px] font-mono text-zinc-300 truncate">
            Sync stakeholder calendar invite
          </p>
          <div className="flex items-center gap-1.5 mt-1 text-[8.5px] font-mono text-zinc-500">
            <Cpu size={9} />
            <span>Staged via Google Workspace API</span>
          </div>
        </div>
      </div>

      {/* Audit Timeline Strip */}
      <div className="hidden sm:flex items-center justify-between bg-[#0B1324]/90 backdrop-blur-sm border border-zinc-800 rounded-lg px-3 py-1.5 text-[9px] font-mono text-zinc-400">
        <div className="flex items-center gap-2">
          <div className="flex gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-[#14AE5C]" />
            <span className="w-1.5 h-1.5 rounded-full bg-[#0D99FF]" />
            <span className="w-1.5 h-1.5 rounded-full bg-[#FFAB00]" />
          </div>
          <span>Audit Stream: Zero black-box mutations</span>
        </div>
        <span className="text-[#0D99FF] font-semibold">100% Audited</span>
      </div>
    </div>

    {/* Bottom: HUD Metrics */}
    <div className="relative z-10 grid grid-cols-3 gap-2 pt-2 border-t border-zinc-800/80">
      <div className="bg-[#040811]/90 backdrop-blur-sm px-2.5 py-1.5 rounded-lg border border-[#0D99FF]/20 text-center">
        <span className="text-[8px] sm:text-[9px] text-[#0D99FF] font-mono block">VELOCITY</span>
        <span className="text-[11px] sm:text-xs font-bold text-white">3.2× Faster</span>
      </div>
      <div className="bg-[#040811]/90 backdrop-blur-sm px-2.5 py-1.5 rounded-lg border border-[#0D99FF]/20 text-center">
        <span className="text-[8px] sm:text-[9px] text-[#0D99FF] font-mono block">SAFETY GATES</span>
        <span className="text-[11px] sm:text-xs font-bold text-white">94% Confidence</span>
      </div>
      <div className="bg-[#040811]/90 backdrop-blur-sm px-2.5 py-1.5 rounded-lg border border-[#0D99FF]/20 text-center">
        <span className="text-[8px] sm:text-[9px] text-[#0D99FF] font-mono block">SURFACE</span>
        <span className="text-[11px] sm:text-xs font-bold text-white">Spatial Canvas</span>
      </div>
    </div>
  </div>
);

// ─── Bento Box Visual Preview 2: Last Mile (Mobile Logistics Telemetry) ──────

const LastMileBentoPreview: React.FC = () => (
  <div className="w-full h-52 sm:h-56 rounded-2xl overflow-hidden relative bg-[#051209] border border-[#14AE5C]/25 flex flex-col justify-between p-4 group/preview select-none transition-all duration-300 shadow-inner">
    <div 
      className="absolute inset-0 opacity-[0.05]" 
      style={{ 
        backgroundImage: 'linear-gradient(#14AE5C 1px, transparent 1px), linear-gradient(90deg, #14AE5C 1px, transparent 1px)', 
        backgroundSize: '24px 24px' 
      }} 
    />
    <div className="absolute inset-0 bg-gradient-to-t from-[#051209] via-[#051209]/40 to-transparent pointer-events-none" />
    <div className="absolute bottom-0 right-0 w-48 h-28 bg-[#14AE5C]/10 blur-3xl rounded-full pointer-events-none" />

    {/* Topbar: Logistics status */}
    <div className="relative z-10 flex items-center justify-between">
      <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-[#14AE5C]/15 backdrop-blur-sm border border-[#14AE5C]/30 text-[#4ADE80] text-[9px] font-mono font-semibold tracking-wider">
        <Truck size={10} />
        CONSUMER LOGISTICS · FINAL 100M
      </span>
      <div className="flex items-center gap-1.5 text-[8.5px] font-mono text-[#14AE5C]">
        <span className="w-1.5 h-1.5 rounded-full bg-[#14AE5C] animate-pulse" />
        <span>Driver En Route</span>
      </div>
    </div>

    {/* Center: Device Telemetry & Waypoints */}
    <div className="relative z-10 flex-1 flex gap-3 items-center my-2">
      {/* Mobile Device Frame */}
      <div className="w-22 sm:w-24 flex-shrink-0 bg-[#0A1F11]/95 border-2 border-[#14AE5C]/30 rounded-xl p-2 flex flex-col gap-1 group-hover/preview:border-[#14AE5C]/60 transition-colors duration-200 shadow-md">
        <div className="w-5 h-0.5 bg-zinc-700 rounded-full mx-auto" />
        <div className="flex items-center justify-center my-1">
          <div className="relative w-9 h-9">
            <svg viewBox="0 0 36 36" className="w-9 h-9 -rotate-90">
              <circle cx="18" cy="18" r="15" fill="none" stroke="#14AE5C20" strokeWidth="3" />
              <circle cx="18" cy="18" r="15" fill="none" stroke="#14AE5C" strokeWidth="3" strokeDasharray="68 94" strokeLinecap="round" />
            </svg>
            <span className="absolute inset-0 flex items-center justify-center text-[8px] font-mono font-bold text-[#14AE5C]">3m</span>
          </div>
        </div>
        <span className="text-[7px] font-mono text-[#14AE5C]/80 text-center">ETA Arrival</span>
        <div className="bg-[#14AE5C]/15 rounded p-0.5 text-center">
          <span className="text-[6.5px] font-mono text-[#14AE5C] truncate block">Tower B · Gate</span>
        </div>
      </div>

      {/* Telemetry waypoint rows */}
      <div className="flex-1 min-w-0 flex flex-col gap-1.5">
        <div className="bg-[#0A1F11]/95 backdrop-blur-sm border border-[#14AE5C]/20 rounded-lg px-2.5 py-1.5 flex items-center gap-1.5">
          <MapPin size={10} className="text-[#14AE5C] flex-shrink-0" />
          <div className="flex-1 min-w-0">
            <span className="text-[8px] font-mono text-[#14AE5C] font-semibold block truncate">COURIER TELEMETRY</span>
            <div className="flex items-center gap-1 mt-0.5">
              <div className="flex gap-0.5">
                {[1, 2, 3, 4, 5].map((i) => (
                  <span key={i} className={`h-1 w-1 rounded-xs ${i < 4 ? 'bg-[#14AE5C]' : 'bg-zinc-700'}`} />
                ))}
              </div>
              <span className="text-[7px] font-mono text-zinc-400">300m away · Gated</span>
            </div>
          </div>
        </div>

        <div className="bg-[#0A1F11]/95 backdrop-blur-sm border border-[#F59E0B]/25 rounded-lg px-2.5 py-1.5 flex items-center gap-1.5">
          <Package size={10} className="text-[#F59E0B] flex-shrink-0" />
          <div className="flex-1 min-w-0">
            <span className="text-[8px] font-mono text-[#F59E0B] font-semibold block truncate">PINPOINT DROP</span>
            <span className="text-[7px] font-mono text-zinc-400 truncate block">Gate Code #4491 Shared ✓</span>
          </div>
        </div>

        <div className="bg-[#0A1F11]/95 backdrop-blur-sm border border-[#14AE5C]/20 rounded-lg px-2.5 py-1 flex items-center gap-1.5">
          <CheckCircle2 size={9.5} className="text-[#14AE5C] flex-shrink-0" />
          <span className="text-[7.5px] font-mono text-zinc-300 truncate">Silent doorstep drop confirmed</span>
        </div>
      </div>
    </div>

    {/* Bottom: HUD Metrics */}
    <div className="relative z-10 grid grid-cols-3 gap-1.5 pt-2 border-t border-zinc-800/80">
      <div className="bg-[#051209]/90 backdrop-blur-sm px-2 py-1 rounded-lg border border-[#14AE5C]/20 text-center">
        <span className="text-[7.5px] text-[#14AE5C] font-mono block">FRICTION</span>
        <span className="text-[10px] font-bold text-white">-60% Calls</span>
      </div>
      <div className="bg-[#051209]/90 backdrop-blur-sm px-2 py-1 rounded-lg border border-[#14AE5C]/20 text-center">
        <span className="text-[7.5px] text-[#14AE5C] font-mono block">USABILITY</span>
        <span className="text-[10px] font-bold text-white">4.8/5 Score</span>
      </div>
      <div className="bg-[#051209]/90 backdrop-blur-sm px-2 py-1 rounded-lg border border-[#14AE5C]/20 text-center">
        <span className="text-[7.5px] text-[#14AE5C] font-mono block">PRECISION</span>
        <span className="text-[10px] font-bold text-white">Sub-Meter</span>
      </div>
    </div>
  </div>
);

// ─── Bento Box Visual Preview 3: Pharmaflow (Clinical Safety POS) ───────────

const PharmaflowBentoPreview: React.FC = () => (
  <div className="w-full h-52 sm:h-56 rounded-2xl overflow-hidden relative bg-[#071822] border border-[#00BFA5]/25 flex flex-col justify-between p-4 group/preview select-none transition-all duration-300 shadow-inner">
    <div 
      className="absolute inset-0 opacity-[0.05]" 
      style={{ 
        backgroundImage: 'linear-gradient(#00BFA5 1px, transparent 1px), linear-gradient(90deg, #00BFA5 1px, transparent 1px)', 
        backgroundSize: '24px 24px' 
      }} 
    />
    <div className="absolute inset-0 bg-gradient-to-t from-[#071822] via-[#071822]/40 to-transparent pointer-events-none" />
    <div className="absolute top-0 right-0 w-48 h-28 bg-[#00BFA5]/10 blur-3xl rounded-full pointer-events-none" />

    {/* Topbar: Clinical status */}
    <div className="relative z-10 flex items-center justify-between">
      <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-[#00BFA5]/15 backdrop-blur-sm border border-[#00BFA5]/30 text-[#00BFA5] text-[9px] font-mono font-semibold tracking-wider">
        <ShieldCheck size={10} />
        CLINICAL POS · WCAG AAA
      </span>
      <div className="flex items-center gap-1.5 text-[8.5px] font-mono text-[#00BFA5]">
        <span className="w-1.5 h-1.5 rounded-full bg-[#00BFA5] animate-pulse" />
        <span>Dispensing Active</span>
      </div>
    </div>

    {/* Center: Clinical Alert Cards */}
    <div className="relative z-10 flex-1 flex flex-col justify-center gap-1.5 my-2">
      {/* Critical Hard Stop Banner */}
      <div className="bg-[#0D1F1A]/95 backdrop-blur-sm border border-[#E53935]/35 rounded-lg px-2.5 py-1.5 flex items-center gap-2 group-hover/preview:border-[#E53935]/60 transition-colors duration-200">
        <AlertTriangle size={11} className="text-[#E53935] flex-shrink-0" />
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between gap-1">
            <span className="text-[8px] font-mono text-[#E53935] font-semibold truncate">HARD STOP · Drug Interaction</span>
            <span className="text-[7px] font-mono text-zinc-500 flex-shrink-0">NDC·0591-5571</span>
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
            <span className="text-[7px] font-mono text-zinc-500 flex-shrink-0">NDC·0245-0082</span>
          </div>
          <div className="h-1 w-full bg-[#00BFA5]/20 rounded mt-0.5">
            <div className="h-full w-3/4 bg-[#00BFA5]/70 rounded" />
          </div>
        </div>
      </div>

      {/* Barcode scan */}
      <div className="bg-[#0D1F1A]/95 backdrop-blur-sm border border-[#FFB300]/25 rounded-lg px-2.5 py-1.5 flex items-center gap-2">
        <ScanLine size={11} className="text-[#FFB300] flex-shrink-0" />
        <div className="flex-1 min-w-0 flex items-center justify-between">
          <span className="text-[8px] font-mono text-[#FFB300] font-semibold truncate">BARCODE SCAN · Co-Pay Verified</span>
          <div className="flex gap-0.5 flex-shrink-0">
            {[3, 1, 2, 4, 1, 3, 2, 1].map((w, i) => (
              <span key={i} className="h-2 bg-[#FFB300]/50 rounded-xs" style={{ width: `${w}px` }} />
            ))}
          </div>
        </div>
      </div>
    </div>

    {/* Bottom: HUD Metrics */}
    <div className="relative z-10 grid grid-cols-3 gap-1.5 pt-2 border-t border-zinc-800/80">
      <div className="bg-[#071822]/90 backdrop-blur-sm px-2 py-1 rounded-lg border border-[#00BFA5]/20 text-center">
        <span className="text-[7.5px] text-[#00BFA5] font-mono block">SAFETY</span>
        <span className="text-[10px] font-bold text-white">3-Tier Alerts</span>
      </div>
      <div className="bg-[#071822]/90 backdrop-blur-sm px-2 py-1 rounded-lg border border-[#00BFA5]/20 text-center">
        <span className="text-[7.5px] text-[#00BFA5] font-mono block">VOLUME</span>
        <span className="text-[10px] font-bold text-white">250+ Rx/day</span>
      </div>
      <div className="bg-[#071822]/90 backdrop-blur-sm px-2 py-1 rounded-lg border border-[#00BFA5]/20 text-center">
        <span className="text-[7.5px] text-[#00BFA5] font-mono block">STANDARD</span>
        <span className="text-[10px] font-bold text-white">WCAG AAA</span>
      </div>
    </div>
  </div>
);

// ─── Bento Box Hero Card (Agentic OS — 12 Column Flagship) ───────────────────

const BentoHeroCard: React.FC<{
  project: Project;
  onOpenCaseStudy: (project: Project) => void;
}> = ({ project, onOpenCaseStudy }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ['start end', 'end start']
  });

  const y = useTransform(
    scrollYProgress,
    [0, 1],
    shouldReduceMotion ? [0, 0] : [-8, 8]
  );

  const handleCardClick = () => {
    if (project.behanceUrl) {
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
      className="col-span-1 lg:col-span-12 bg-white dark:bg-[#202023] border-2 border-gray-200 dark:border-zinc-800 hover:border-[#0D99FF] dark:hover:border-[#0D99FF] rounded-3xl p-6 sm:p-8 lg:p-9 shadow-figma-card hover:shadow-figma-floating transition-all duration-300 cursor-pointer group relative overflow-hidden"
    >
      {/* Background glow accent */}
      <div className="absolute top-0 right-0 w-[500px] h-[300px] bg-gradient-to-bl from-[#0D99FF]/5 via-transparent to-transparent pointer-events-none" />

      {/* Bento Top Header */}
      <div className="flex flex-wrap items-center justify-between pb-4 mb-6 border-b border-gray-100 dark:border-zinc-800 text-xs gap-2">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-[#0D99FF]" />
          <span className="font-mono font-bold text-xs text-[#0D99FF]">
            #01 · Agentic OS
          </span>
          <span className="text-gray-300 dark:text-zinc-700">/</span>
          <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-[#0D99FF]/10 text-[10px] font-mono text-[#0D99FF] font-semibold">
            <Sparkles size={11} />
            <span>Featured Case Study</span>
          </span>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-[10px] font-mono text-gray-400 bg-gray-100 dark:bg-zinc-800 px-2 py-0.5 rounded">
            1440 × 820
          </span>
          <span className="text-[10px] font-mono text-[#0D99FF] bg-[#0D99FF]/10 px-2 py-0.5 rounded font-semibold">
            {project.status}
          </span>
        </div>
      </div>

      {/* Main Grid: Visual Canvas Preview (7 cols) + Editorial Specs (5 cols) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
        {/* Left: Cinematic Spatial Canvas Interface Preview */}
        <div className="lg:col-span-7 w-full">
          <AgenticOSBentoPreview />
        </div>

        {/* Right: Editorial Information & Direct Interaction */}
        <div className="lg:col-span-5 flex flex-col justify-between space-y-5">
          <div className="space-y-3">
            <span className="text-xs font-semibold text-[#0D99FF] uppercase tracking-wider font-mono block">
              {project.category}
            </span>

            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#1E1E1E] dark:text-white group-hover:text-[#0D99FF] transition-colors leading-tight flex items-start justify-between gap-3">
              <span>{project.title}</span>
              <ArrowUpRight size={22} className="opacity-0 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all text-[#0D99FF] flex-shrink-0 mt-1" />
            </h3>

            {project.tagline && (
              <p className="text-xs sm:text-sm font-semibold text-gray-600 dark:text-gray-300 italic">
                "{project.tagline}"
              </p>
            )}

            <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Bento Micro-Stats Strip */}
          <div className="grid grid-cols-3 gap-2.5 py-3 border-y border-gray-100 dark:border-zinc-800">
            <div>
              <span className="text-lg sm:text-xl font-bold font-mono text-[#0D99FF] block">3.2×</span>
              <span className="text-[10px] text-gray-500 font-mono">Workflow Speed</span>
            </div>
            <div>
              <span className="text-lg sm:text-xl font-bold font-mono text-[#14AE5C] block">94%</span>
              <span className="text-[10px] text-gray-500 font-mono">Safety Gate</span>
            </div>
            <div>
              <span className="text-lg sm:text-xl font-bold font-mono text-zinc-900 dark:text-white block">100%</span>
              <span className="text-[10px] text-gray-500 font-mono">Audit History</span>
            </div>
          </div>

          {/* Tech Stack Chips */}
          <div className="space-y-1.5">
            <span className="text-[10px] font-mono text-gray-400 uppercase tracking-wider block">Stack &amp; Frameworks</span>
            <div className="flex flex-wrap items-center gap-1.5">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="text-[11px] font-mono bg-gray-100 dark:bg-zinc-800 text-gray-700 dark:text-gray-300 px-2.5 py-1 rounded-md font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Dual Action CTAs */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <button
              onClick={(e) => {
                e.stopPropagation();
                onOpenCaseStudy(project);
              }}
              className="bg-[#0D99FF] hover:bg-[#0085EB] text-white px-5 py-2.5 rounded-xl text-xs font-semibold flex items-center gap-2 transition-all shadow-sm cursor-pointer active:scale-95"
            >
              <span>Explore 12-Part Case Study</span>
              <ChevronRight size={14} />
            </button>

            {project.behanceUrl && (
              <a
                href={project.behanceUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="bg-gray-100 hover:bg-gray-200 dark:bg-zinc-800 dark:hover:bg-zinc-700 text-gray-800 dark:text-gray-200 border border-gray-200/80 dark:border-zinc-700 px-4 py-2.5 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-colors"
              >
                <span className="font-bold text-[10px] bg-[#0057FF] text-white px-1.5 py-0.5 rounded">Bē</span>
                <span>Open on Behance</span>
                <ExternalLink size={12} className="text-gray-400 ml-0.5" />
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

// ─── Bento Box Supporting Card (Last Mile & Pharmaflow — 6 Columns) ─────────

const BentoStandardCard: React.FC<{
  project: Project;
  preview: React.ReactNode;
  index: number;
  onOpenCaseStudy: (project: Project) => void;
}> = ({ project, preview, index, onOpenCaseStudy }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ['start end', 'end start']
  });

  const yOffset = index === 1 ? 10 : -10;
  const y = useTransform(
    scrollYProgress,
    [0, 1],
    shouldReduceMotion ? [0, 0] : [yOffset, -yOffset]
  );

  return (
    <motion.div
      ref={cardRef}
      style={{ y }}
      onClick={() => onOpenCaseStudy(project)}
      className="col-span-1 lg:col-span-6 bg-white dark:bg-[#202023] border border-gray-200 dark:border-zinc-800 hover:border-[#0D99FF] dark:hover:border-[#0D99FF] rounded-3xl p-6 sm:p-7 shadow-figma-card hover:shadow-figma-floating transition-all duration-300 cursor-pointer group flex flex-col justify-between relative overflow-hidden h-full"
    >
      <div>
        {/* Bento Top Header */}
        <div className="flex items-center justify-between pb-3.5 mb-4 border-b border-gray-100 dark:border-zinc-800 text-xs">
          <div className="flex items-center gap-2 overflow-hidden">
            <span
              className="w-2.5 h-2.5 rounded-full flex-shrink-0"
              style={{ backgroundColor: project.accentColor }}
            />
            <span className="font-mono font-bold text-xs text-gray-900 dark:text-white truncate">
              #{project.number} · {project.title.split(/[—–-]/)[0].trim()}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-[10px] font-mono text-gray-400 bg-gray-100 dark:bg-zinc-800 px-2 py-0.5 rounded">
              {project.dimensions.width} × {project.dimensions.height}
            </span>
            <span className="text-[10px] font-mono text-[#0D99FF] bg-[#0D99FF]/10 px-2 py-0.5 rounded font-semibold">
              {project.status}
            </span>
          </div>
        </div>

        {/* Visual Preview */}
        <div className="mb-4">
          {preview}
        </div>

        {/* Content */}
        <div className="space-y-3">
          <div>
            <span className="text-[11px] font-semibold text-[#0D99FF] uppercase tracking-wider font-mono block mb-1">
              {project.category}
            </span>

            <h3 className="text-xl font-bold text-[#1E1E1E] dark:text-white group-hover:text-[#0D99FF] transition-colors leading-snug min-h-[3.25rem] flex items-start justify-between gap-2">
              <span className="line-clamp-2">{project.title}</span>
              <ArrowUpRight size={18} className="opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all text-[#0D99FF] flex-shrink-0 mt-0.5" />
            </h3>

            {project.tagline && (
              <p className="text-xs font-semibold text-gray-600 dark:text-gray-400 italic mt-1 line-clamp-1">
                "{project.tagline}"
              </p>
            )}

            <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 leading-relaxed mt-2 line-clamp-2 min-h-[2.5rem]">
              {project.description}
            </p>
          </div>

          {/* Tech Stack Chips */}
          <div className="flex flex-wrap items-center gap-1.5 pt-1">
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
                +{project.techStack.length - 4}
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Actions Bar */}
      <div className="flex flex-wrap items-center gap-3 pt-4 mt-4 border-t border-gray-100 dark:border-zinc-800/80">
        <button
          onClick={(e) => {
            e.stopPropagation();
            onOpenCaseStudy(project);
          }}
          className="bg-[#0D99FF] hover:bg-[#0085EB] text-white px-4 py-2 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-colors shadow-sm cursor-pointer active:scale-95 flex-1 justify-center"
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
    </motion.div>
  );
};

// ─── Bento Box Projects Section ─────────────────────────────────────────────

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({
  projects,
  onOpenCaseStudy,
}) => {
  // Ensure strict order: 1. Agentic OS, 2. Last Mile, 3. Pharmaflow
  const agenticProject = projects.find((p) => p.id === 'agenticos') || projects[0];
  const lastmileProject = projects.find((p) => p.id === 'lastmile') || projects[1];
  const pharmaflowProject = projects.find((p) => p.id === 'pharmaflow') || projects[2];

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
              An editorial Bento Box portfolio showcasing autonomous AI platforms, consumer logistics, and healthcare POS systems.
            </p>
          </div>

          <div className="inline-flex items-center gap-2 text-xs font-mono text-gray-600 dark:text-gray-400 bg-gray-100 dark:bg-zinc-800 px-3 py-1.5 rounded-lg whitespace-nowrap self-start sm:self-auto border border-gray-200/60 dark:border-zinc-700/60">
            <Sparkles size={12} className="text-[#0D99FF]" />
            <span>3 Bento Case Studies</span>
          </div>
        </div>

        {/* ── The Bento Box Grid ─────────────────────────────────────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
          
          {/* Bento Box 1: Flagship Featured Hero (Agentic OS — 12 Columns) */}
          {agenticProject && (
            <BentoHeroCard
              project={agenticProject}
              onOpenCaseStudy={onOpenCaseStudy}
            />
          )}

          {/* Bento Box 2: Consumer Logistics (Last Mile — 6 Columns) */}
          {lastmileProject && (
            <BentoStandardCard
              project={lastmileProject}
              preview={<LastMileBentoPreview />}
              index={1}
              onOpenCaseStudy={onOpenCaseStudy}
            />
          )}

          {/* Bento Box 3: Healthcare POS (Pharmaflow — 6 Columns) */}
          {pharmaflowProject && (
            <BentoStandardCard
              project={pharmaflowProject}
              preview={<PharmaflowBentoPreview />}
              index={2}
              onOpenCaseStudy={onOpenCaseStudy}
            />
          )}

        </div>

      </div>
    </section>
  );
};
