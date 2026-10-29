import React from 'react';
import { 
  ArrowUpRight, 
  ExternalLink, 
  Maximize2, 
  Truck, 
  Dumbbell
} from 'lucide-react';
import { Project } from '../../types';

interface ProjectFrameProps {
  project: Project;
  isSelected: boolean;
  onSelect: (project: Project) => void;
  onOpenCaseStudy: (project: Project) => void;
}

export const ProjectFrame: React.FC<ProjectFrameProps> = ({
  project,
  isSelected,
  onSelect,
  onOpenCaseStudy,
}) => {
  // Render high-fidelity preview representations based on project type
  const renderPreviewContent = () => {
    switch (project.previewType) {
      case 'agenticos':
        return (
          <div className="h-full bg-[#070D18] text-white p-4 rounded-xl flex flex-col justify-between font-sans border border-blue-900/60 relative overflow-hidden group/img">
            {/* Header */}
            <div className="flex items-center justify-between border-b border-blue-900/60 pb-2 z-10 bg-[#070D18]/90 backdrop-blur-xs">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#0D99FF]" />
                <span className="text-xs font-semibold text-blue-200">AgenticOS — AI Productivity Platform</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] bg-[#0D99FF]/20 text-[#0D99FF] px-2 py-0.5 rounded-full font-medium">
                  Autonomous Operating System
                </span>
                <span className="text-[10px] bg-slate-800 text-slate-300 px-2 py-0.5 rounded-full font-mono">
                  Supervised Mode
                </span>
              </div>
            </div>

            {/* Middle: Actual cover image with interactive agent telemetry stats overlay */}
            <div className="my-2 flex-1 rounded-lg overflow-hidden relative border border-blue-900/40 bg-slate-950 flex flex-col justify-end p-4">
              <div className="absolute inset-0 flex items-center justify-center p-6 bg-gradient-to-b from-[#050B14] via-[#091528] to-[#0A1220]">
                {/* Glow effect */}
                <div className="absolute w-64 h-48 rounded-full bg-[#0D99FF]/25 blur-3xl pointer-events-none" />
                {project.logoUrl && (
                  <img
                    src={project.logoUrl}
                    alt={project.title}
                    className="max-h-48 w-auto object-contain z-0 drop-shadow-[0_15px_35px_rgba(13,153,255,0.4)] group-hover/img:scale-105 transition-transform duration-500"
                  />
                )}
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#070D18] via-[#070D18]/70 to-transparent pointer-events-none" />

              <div className="relative z-10 grid grid-cols-3 gap-2">
                <div className="bg-[#070D18]/90 backdrop-blur-md p-2 rounded border border-blue-500/30">
                  <span className="text-[10px] text-blue-400 block font-mono">AGENT RUNTIME</span>
                  <span className="text-xs font-bold text-white">Supervised Actions</span>
                  <p className="text-[9px] text-gray-400 mt-0.5">Transparent Action Feeds</p>
                </div>
                <div className="bg-[#070D18]/90 backdrop-blur-md p-2 rounded border border-blue-500/30">
                  <span className="text-[10px] text-cyan-400 block font-mono">CONTEXT ENGINE</span>
                  <span className="text-xs font-bold text-white">Living Canvas Surface</span>
                  <p className="text-[9px] text-gray-400 mt-0.5">Bi-directional Diff Review</p>
                </div>
                <div className="bg-[#070D18]/90 backdrop-blur-md p-2 rounded border border-blue-500/30">
                  <span className="text-[10px] text-indigo-400 block font-mono">CONFIDENCE GATES</span>
                  <span className="text-xs font-bold text-white">1-Click Approvals</span>
                  <p className="text-[9px] text-gray-400 mt-0.5">Full Audit & Rollback Log</p>
                </div>
              </div>
            </div>

            {/* Bottom */}
            <div className="flex items-center justify-between pt-2 border-t border-blue-900/60 text-[11px] text-blue-300 z-10">
              <span className="truncate max-w-[65%]">Simplifying autonomous AI workflows with inspectable agent diffs.</span>
              <span className="text-xs font-semibold text-blue-400 flex items-center gap-1 font-mono">
                <span>React • Next.js • TS</span>
              </span>
            </div>
          </div>
        );

      case 'lastmile':
        return (
          <div className="h-full bg-[#0A141A] text-white p-4 rounded-xl flex flex-col justify-between font-sans border border-emerald-900/60 relative overflow-hidden group/img">
            {/* Header */}
            <div className="flex items-center justify-between border-b border-emerald-900/60 pb-2 z-10 bg-[#0A141A]/90 backdrop-blur-xs">
              <div className="flex items-center gap-2">
                <Truck size={15} className="text-[#14AE5C]" />
                <span className="text-xs font-semibold text-emerald-200">Last Mile — Logistics & Delivery Experience</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] bg-[#14AE5C]/20 text-[#14AE5C] px-2 py-0.5 rounded-full font-medium">
                  Consumer Delivery UX
                </span>
                <span className="text-[10px] bg-emerald-900/40 text-emerald-300 px-2 py-0.5 rounded-full font-mono">
                  Live Courier HUD
                </span>
              </div>
            </div>

            {/* Middle: Actual cover image with interactive delivery telemetry stats overlay */}
            <div className="my-2 flex-1 rounded-lg overflow-hidden relative border border-emerald-900/40 bg-slate-950 flex flex-col justify-end p-4">
              <div className="absolute inset-0 flex items-center justify-center p-6 bg-gradient-to-b from-[#061214] via-[#091D1E] to-[#081517]">
                {/* Glow effect */}
                <div className="absolute w-64 h-48 rounded-full bg-[#14AE5C]/20 blur-3xl pointer-events-none" />
                <div className="bg-white/95 backdrop-blur-md px-8 py-5 rounded-2xl shadow-2xl border border-white/20 group-hover/img:scale-105 transition-transform duration-500 flex items-center justify-center z-0">
                  {project.logoUrl && (
                    <img
                      src={project.logoUrl}
                      alt={project.title}
                      className="h-24 w-auto object-contain"
                    />
                  )}
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A141A] via-[#0A141A]/70 to-transparent pointer-events-none" />

              <div className="relative z-10 grid grid-cols-3 gap-2">
                <div className="bg-[#0A141A]/90 backdrop-blur-md p-2 rounded border border-emerald-500/30">
                  <span className="text-[10px] text-emerald-400 block font-mono">WAITING PSYCHOLOGY</span>
                  <span className="text-xs font-bold text-white">Live Progress HUD</span>
                  <p className="text-[9px] text-gray-400 mt-0.5">Micro-Milestone Telemetry</p>
                </div>
                <div className="bg-[#0A141A]/90 backdrop-blur-md p-2 rounded border border-emerald-500/30">
                  <span className="text-[10px] text-green-400 block font-mono">DOORSTEP PINPOINT</span>
                  <span className="text-xs font-bold text-white">Final 100m Routing</span>
                  <p className="text-[9px] text-gray-400 mt-0.5">East Gate Intercom Safe-Box</p>
                </div>
                <div className="bg-[#0A141A]/90 backdrop-blur-md p-2 rounded border border-emerald-500/30">
                  <span className="text-[10px] text-teal-400 block font-mono">ANXIETY REDUCTION</span>
                  <span className="text-xs font-bold text-white">Silent Delivery Flow</span>
                  <p className="text-[9px] text-gray-400 mt-0.5">60% Fewer Driver Calls</p>
                </div>
              </div>
            </div>

            {/* Bottom */}
            <div className="flex items-center justify-between pt-2 border-t border-emerald-900/60 text-[11px] text-emerald-300 z-10">
              <span className="truncate max-w-[65%] font-medium text-emerald-400">“Making Waiting Feel Shorter.”</span>
              <span className="text-xs font-medium text-gray-400">
                User Research • Journey Mapping • Mobile UX
              </span>
            </div>
          </div>
        );

      case 'pharmaflow':
        return (
          <div className="h-full bg-[#0A192F] text-white p-4 rounded-xl flex flex-col justify-between font-sans border border-teal-900/60 relative overflow-hidden group/img">
            {/* Header */}
            <div className="flex items-center justify-between border-b border-teal-900/60 pb-2 z-10 bg-[#0A192F]/90 backdrop-blur-xs">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#00BFA5]" />
                <span className="text-xs font-semibold text-teal-200">Pharmaflow — Pharmacy POS (SaaS Design)</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] bg-[#00BFA5]/20 text-[#00BFA5] px-2 py-0.5 rounded-full font-medium">
                  SaaS Dashboard
                </span>
                {project.behanceUrl && (
                  <span className="text-[10px] bg-blue-500/20 text-blue-400 px-2 py-0.5 rounded-full font-mono flex items-center gap-1">
                    <span>Behance Project</span>
                    <ExternalLink size={10} />
                  </span>
                )}
              </div>
            </div>

            {/* Middle: Actual cover image with interactive clinical dashboard stats overlay */}
            <div className="my-2 flex-1 rounded-lg overflow-hidden relative border border-teal-900/40 bg-slate-950 flex flex-col justify-end p-4">
              {project.logoUrl && (
                <img
                  src={project.logoUrl}
                  alt={project.title}
                  className="absolute inset-0 w-full h-full object-cover object-top opacity-75 group-hover/img:scale-105 transition-transform duration-500"
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

            {/* Bottom */}
            <div className="flex items-center justify-between pt-2 border-t border-teal-900/60 text-[11px] text-teal-300 z-10">
              <span className="truncate max-w-[65%]">Simplifying pharmacy operations through clinical safety & rapid checkout.</span>
              {project.behanceUrl && (
                <a
                  href={project.behanceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="text-xs font-semibold text-teal-300 hover:text-white flex items-center gap-1 underline underline-offset-2"
                >
                  <span>View on Behance</span>
                  <ExternalLink size={12} />
                </a>
              )}
            </div>
          </div>
        );

      case 'fitstart':
        return (
          <div className="h-full bg-[#18181B] text-white p-4 rounded-xl flex flex-col justify-between font-sans border border-purple-900/50 relative overflow-hidden group/fit">
            {/* Header */}
            <div className="flex items-center justify-between border-b border-purple-900/40 pb-2">
              <div className="flex items-center gap-2">
                <Dumbbell size={15} className="text-[#9747FF]" />
                <span className="text-xs font-semibold text-zinc-200">FitStart — Responsive Fitness App Website</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] bg-[#9747FF]/20 text-[#9747FF] px-2 py-0.5 rounded-full font-medium">
                  Responsive Web Design
                </span>
                {project.behanceUrl && (
                  <span className="text-[10px] bg-blue-500/20 text-blue-400 px-2 py-0.5 rounded-full font-mono flex items-center gap-1">
                    <span>Behance Project</span>
                    <ExternalLink size={10} />
                  </span>
                )}
              </div>
            </div>

            {/* Middle: Responsive Breakpoints Representation */}
            <div className="my-2 flex-1 rounded-lg bg-zinc-950 p-4 border border-zinc-800/80 flex items-center justify-center gap-4 relative overflow-hidden">
              {/* Desktop Preview Card */}
              <div className="w-1/2 h-full bg-zinc-900 rounded-lg border border-zinc-800 p-3 flex flex-col justify-between shadow-sm">
                <div className="flex items-center justify-between border-b border-zinc-800 pb-1.5">
                  <span className="text-[10px] font-mono text-[#9747FF]">Desktop (1440px)</span>
                  <span className="text-[9px] bg-[#9747FF]/15 text-[#9747FF] px-1.5 py-0.5 rounded font-mono">12-Col</span>
                </div>
                <div className="space-y-1.5 py-1">
                  <p className="text-xs font-bold text-white">Full-Body Strength Program</p>
                  <p className="text-[10px] text-zinc-400">Personalized routine discovery & fluid equipment filters</p>
                </div>
                <div className="flex items-center justify-between pt-1 border-t border-zinc-800 text-[9px] text-zinc-400">
                  <span>32 Mins • Intermediate</span>
                  <span className="text-[#9747FF] font-semibold">Start Routine →</span>
                </div>
              </div>

              {/* Mobile Preview Frame */}
              <div className="w-1/3 h-full bg-zinc-900 rounded-xl border-2 border-purple-500/30 p-2.5 flex flex-col justify-between shadow-md">
                <div className="flex items-center justify-between border-b border-zinc-800 pb-1">
                  <span className="text-[9px] font-mono text-zinc-400">Phone (375px)</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
                </div>
                <div className="flex flex-col items-center justify-center py-1">
                  <div className="w-10 h-10 rounded-full border-2 border-[#9747FF] border-t-transparent flex items-center justify-center text-[10px] font-mono font-bold">
                    00:45
                  </div>
                  <span className="text-[9px] text-zinc-400 mt-1">Rest Interval HUD</span>
                </div>
                <div className="bg-[#9747FF] text-white text-[9px] font-semibold text-center py-1 rounded">
                  One-Tap Log
                </div>
              </div>
            </div>

            {/* Bottom */}
            <div className="flex items-center justify-between pt-2 border-t border-purple-900/40 text-[11px] text-zinc-400">
              <span className="truncate max-w-[65%]">Delivering an engaging, accessible, and seamless fitness experience across devices.</span>
              {project.behanceUrl && (
                <a
                  href={project.behanceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="text-xs font-semibold text-[#9747FF] hover:text-white flex items-center gap-1 underline underline-offset-2"
                >
                  <span>View on Behance</span>
                  <ExternalLink size={12} />
                </a>
              )}
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div
      onClick={(e) => {
        e.stopPropagation();
        onSelect(project);
      }}
      onDoubleClick={(e) => {
        e.stopPropagation();
        onOpenCaseStudy(project);
      }}
      style={{
        width: `${project.dimensions.width}px`,
        height: `${project.dimensions.height}px`,
      }}
      className={`relative rounded-2xl transition-all duration-200 cursor-pointer group flex flex-col justify-between ${
        isSelected
          ? 'ring-2 ring-[#0D99FF] shadow-figma-selected'
          : 'border border-[#E5E7EB] dark:border-[#383838] hover:border-[#0D99FF]/60 hover:shadow-figma-card'
      } bg-white dark:bg-[#1E1E1E] p-4 select-none`}
    >
      {/* Figma Selection Handles */}
      {isSelected && (
        <>
          <div className="figma-handle -top-1 -left-1" />
          <div className="figma-handle -top-1 -right-1" />
          <div className="figma-handle -bottom-1 -left-1" />
          <div className="figma-handle -bottom-1 -right-1" />
          
          {/* Dimension Tag */}
          <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-[#0D99FF] text-white text-[10px] font-mono px-2 py-0.5 rounded shadow-sm whitespace-nowrap z-20">
            {project.dimensions.width} × {project.dimensions.height}
          </div>
        </>
      )}

      {/* Frame Header Bar */}
      <div className="flex items-center justify-between pb-3 border-b border-gray-100 dark:border-[#2C2C2C]">
        <div className="flex items-center gap-2 overflow-hidden">
          <div
            className="w-3 h-3 rounded-sm flex-shrink-0"
            style={{ backgroundColor: project.accentColor }}
          />
          <span className="font-semibold text-xs tracking-tight text-[#1E1E1E] dark:text-white truncate">
            {project.number} / {project.title}
          </span>
          <span className="text-[11px] text-gray-400 font-normal hidden sm:inline truncate">
            — {project.category}
          </span>
        </div>

        <div className="flex items-center gap-2 flex-shrink-0">
          <span className="text-[10px] font-mono text-gray-400 bg-gray-100 dark:bg-[#2A2A2A] px-2 py-0.5 rounded">
            {project.dimensions.width} × {project.dimensions.height}
          </span>

          {project.behanceUrl && (
            <a
              href={project.behanceUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="text-xs font-semibold text-[#0057FF] dark:text-[#38bdf8] bg-[#0057FF]/10 hover:bg-[#0057FF]/20 px-2.5 py-1 rounded-md transition-colors flex items-center gap-1.5 border border-[#0057FF]/20"
              title="View on Behance (opens in new tab)"
            >
              <span className="font-bold text-[10px] bg-[#0057FF] text-white px-1 rounded-xs">Bē</span>
              <span>Behance</span>
              <ExternalLink size={11} />
            </a>
          )}

          <button
            onClick={(e) => {
              e.stopPropagation();
              onOpenCaseStudy(project);
            }}
            className="text-xs font-semibold text-[#0D99FF] hover:bg-[#0D99FF]/10 px-2.5 py-1 rounded-md transition-colors flex items-center gap-1"
          >
            <span>Detail View</span>
            <ArrowUpRight size={13} />
          </button>
        </div>
      </div>

      {/* Main Interactive Screen Showcase */}
      <div className="flex-1 my-3 relative overflow-hidden rounded-xl">
        {renderPreviewContent()}
      </div>

      {/* Frame Footer Bar */}
      <div className="flex items-center justify-between pt-3 border-t border-gray-100 dark:border-[#2C2C2C] text-xs">
        <div className="flex items-center gap-1.5 flex-wrap">
          {project.techStack.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="text-[10px] font-medium bg-gray-100 dark:bg-[#2A2A2A] text-gray-600 dark:text-gray-300 px-2 py-0.5 rounded"
            >
              {tech}
            </span>
          ))}
          {project.techStack.length > 4 && (
            <span className="text-[10px] text-gray-400">+{project.techStack.length - 4}</span>
          )}
        </div>

        <div className="flex items-center gap-2">
          <span className="text-[11px] text-gray-400 group-hover:text-[#0D99FF] transition-colors flex items-center gap-1">
            <span>Double-click to expand</span>
            <Maximize2 size={11} />
          </span>
        </div>
      </div>
    </div>
  );
};

