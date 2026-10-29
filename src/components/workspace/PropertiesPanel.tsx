import React, { useState } from 'react';
import { 
  X, 
  ChevronRight, 
  ChevronLeft, 
  ExternalLink, 
  Layers, 
  Eye, 
  Lock, 
  Copy, 
  Check, 
  Maximize2, 
  Palette, 
  Sliders, 
  Sparkles,
  Info
} from 'lucide-react';
import { Project } from '../../types';

interface PropertiesPanelProps {
  selectedProject: Project | null;
  onClose: () => void;
  onOpenCaseStudy: (project: Project) => void;
  isCollapsed: boolean;
  onToggleCollapse: () => void;
  allProjects: Project[];
  onSelectProject: (project: Project) => void;
  zoom: number;
}

export const PropertiesPanel: React.FC<PropertiesPanelProps> = ({
  selectedProject,
  onClose,
  onOpenCaseStudy,
  isCollapsed,
  onToggleCollapse,
  allProjects,
  onSelectProject,
  zoom,
}) => {
  const [activeTab, setActiveTab] = useState<'design' | 'prototype' | 'inspect'>('design');
  const [copiedLink, setCopiedLink] = useState(false);

  const handleCopySpec = () => {
    if (!selectedProject) return;
    const spec = `${selectedProject.title} | ${selectedProject.category}\nDimensions: ${selectedProject.dimensions.width}x${selectedProject.dimensions.height}px\nStack: ${selectedProject.techStack.join(', ')}`;
    navigator.clipboard.writeText(spec);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  if (isCollapsed) {
    return (
      <div className="absolute right-4 top-16 z-20">
        <button
          onClick={onToggleCollapse}
          className="bg-white/95 dark:bg-[#252525]/95 backdrop-blur-md border border-[#E5E7EB] dark:border-[#383838] p-2 rounded-xl shadow-figma-floating text-[#4B5563] dark:text-[#A0A0A0] hover:text-[#0D99FF] transition-all flex items-center gap-1.5 text-xs font-medium"
          title="Expand Properties Panel"
        >
          <ChevronLeft size={16} />
          <span className="hidden sm:inline">Inspect</span>
        </button>
      </div>
    );
  }

  return (
    <aside 
      onWheel={(e) => e.stopPropagation()}
      className="absolute right-4 top-16 w-80 max-w-[calc(100vw-2rem)] bg-white/95 dark:bg-[#252525]/95 backdrop-blur-md border border-[#E5E7EB] dark:border-[#383838] rounded-xl shadow-figma-floating z-20 flex flex-col text-xs text-[#1E1E1E] dark:text-[#E0E0E0] overflow-hidden max-h-[calc(100vh-5.5rem)] transition-all"
    >
      {/* Header Bar */}
      <div className="p-3 border-b border-[#E5E7EB] dark:border-[#383838] flex items-center justify-between bg-white dark:bg-[#252525] flex-shrink-0">
        <div className="flex items-center gap-2 overflow-hidden">
          <div className="w-2.5 h-2.5 rounded-sm bg-[#0D99FF]" />
          <span className="font-semibold truncate text-[13px]">
            {selectedProject ? selectedProject.title : 'Canvas Properties'}
          </span>
        </div>
        <div className="flex items-center gap-1">
          <button
            onClick={onToggleCollapse}
            className="p-1 rounded hover:bg-[#F3F4F6] dark:hover:bg-[#333] text-gray-500 transition-colors"
            title="Collapse panel"
          >
            <ChevronRight size={15} />
          </button>
        </div>
      </div>

      {/* Design / Prototype / Inspect Tabs */}
      <div className="flex items-center border-b border-[#E5E7EB] dark:border-[#383838] bg-[#FAFAFA] dark:bg-[#1E1E1E] px-2 py-1 flex-shrink-0">
        <button
          onClick={() => setActiveTab('design')}
          className={`flex-1 py-1 text-center rounded font-medium transition-colors ${
            activeTab === 'design'
              ? 'bg-white dark:bg-[#2C2C2C] text-[#0D99FF] shadow-xs'
              : 'text-gray-500 hover:text-gray-800 dark:hover:text-gray-300'
          }`}
        >
          Design
        </button>
        <button
          onClick={() => setActiveTab('prototype')}
          className={`flex-1 py-1 text-center rounded font-medium transition-colors ${
            activeTab === 'prototype'
              ? 'bg-white dark:bg-[#2C2C2C] text-[#0D99FF] shadow-xs'
              : 'text-gray-500 hover:text-gray-800 dark:hover:text-gray-300'
          }`}
        >
          Prototype
        </button>
        <button
          onClick={() => setActiveTab('inspect')}
          className={`flex-1 py-1 text-center rounded font-medium transition-colors ${
            activeTab === 'inspect'
              ? 'bg-white dark:bg-[#2C2C2C] text-[#0D99FF] shadow-xs'
              : 'text-gray-500 hover:text-gray-800 dark:hover:text-gray-300'
          }`}
        >
          Inspect
        </button>
      </div>

      {/* Content Area */}
      <div className="flex-1 min-h-0 p-3 overflow-y-auto overscroll-contain space-y-4 select-text">
        {selectedProject ? (
          <>
            {/* Meta Pill */}
            <div className="flex items-center justify-between">
              <span className="px-2 py-0.5 rounded-full bg-[#0D99FF]/10 text-[#0D99FF] font-medium text-[11px]">
                Frame #{selectedProject.number}
              </span>
              <span className="text-[11px] text-[#14AE5C] bg-[#14AE5C]/10 px-2 py-0.5 rounded-full font-medium">
                {selectedProject.status}
              </span>
            </div>

            {/* Title & Category */}
            <div>
              <h3 className="font-bold text-sm text-[#1E1E1E] dark:text-white leading-tight">
                {selectedProject.title}
              </h3>
              <p className="text-[#6B7280] dark:text-[#999] text-[11px] mt-0.5">
                {selectedProject.category}
              </p>
            </div>

            {/* Geometry Inspector */}
            <div className="border border-[#E5E7EB] dark:border-[#383838] rounded-lg p-2.5 bg-[#FAFAFA] dark:bg-[#1E1E1E] space-y-1.5">
              <span className="text-[10px] font-semibold tracking-wider uppercase text-gray-400">
                Frame Geometry
              </span>
              <div className="grid grid-cols-2 gap-2 text-[11px] font-mono">
                <div className="flex items-center justify-between bg-white dark:bg-[#2A2A2A] px-2 py-1 rounded border border-[#E5E7EB] dark:border-[#333]">
                  <span className="text-gray-400">W</span>
                  <span className="font-medium">{selectedProject.dimensions.width} px</span>
                </div>
                <div className="flex items-center justify-between bg-white dark:bg-[#2A2A2A] px-2 py-1 rounded border border-[#E5E7EB] dark:border-[#333]">
                  <span className="text-gray-400">H</span>
                  <span className="font-medium">{selectedProject.dimensions.height} px</span>
                </div>
                <div className="flex items-center justify-between bg-white dark:bg-[#2A2A2A] px-2 py-1 rounded border border-[#E5E7EB] dark:border-[#333]">
                  <span className="text-gray-400">X</span>
                  <span className="font-medium">{selectedProject.canvasPosition.x}</span>
                </div>
                <div className="flex items-center justify-between bg-white dark:bg-[#2A2A2A] px-2 py-1 rounded border border-[#E5E7EB] dark:border-[#333]">
                  <span className="text-gray-400">Y</span>
                  <span className="font-medium">{selectedProject.canvasPosition.y}</span>
                </div>
              </div>
            </div>

            {/* Description */}
            <div>
              <span className="text-[10px] font-semibold tracking-wider uppercase text-gray-400">
                Brief
              </span>
              <p className="text-[#4B5563] dark:text-[#B0B0B0] text-[11px] mt-1 leading-relaxed">
                {selectedProject.description}
              </p>
            </div>

            {/* Tech Stack / Design Tools */}
            <div>
              <span className="text-[10px] font-semibold tracking-wider uppercase text-gray-400">
                Tools & Technologies
              </span>
              <div className="flex flex-wrap gap-1 mt-1.5">
                {selectedProject.techStack.map((tool) => (
                  <span
                    key={tool}
                    className="px-2 py-0.5 rounded bg-[#F3F4F6] dark:bg-[#333] text-[#374151] dark:text-[#D1D5DB] text-[10px] font-medium"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            {/* Key Deliverables */}
            <div>
              <span className="text-[10px] font-semibold tracking-wider uppercase text-gray-400">
                Key Highlights
              </span>
              <ul className="mt-1 space-y-1">
                {selectedProject.highlights.map((h, i) => (
                  <li key={i} className="flex items-center gap-1.5 text-[11px] text-[#4B5563] dark:text-[#B0B0B0]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#0D99FF]" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Primary Action Button */}
            <div className="pt-2 border-t border-[#E5E7EB] dark:border-[#383838] flex flex-col gap-2">
              <button
                onClick={() => onOpenCaseStudy(selectedProject)}
                className="w-full bg-[#0D99FF] hover:bg-[#0085EB] text-white py-2 rounded-lg font-semibold text-xs transition-colors flex items-center justify-center gap-2 shadow-sm"
              >
                <span>Open Full Case Study</span>
                <ChevronRight size={14} />
              </button>

              {selectedProject.behanceUrl && (
                <a
                  href={selectedProject.behanceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-[#0057FF] hover:bg-[#0047D4] text-white py-2 rounded-lg font-semibold text-xs transition-colors flex items-center justify-center gap-2 shadow-xs"
                >
                  <span className="font-bold text-[10px] bg-white text-[#0057FF] px-1 rounded-xs">Bē</span>
                  <span>View Full Case Study on Behance</span>
                  <ExternalLink size={13} />
                </a>
              )}

              <button
                onClick={handleCopySpec}
                className="w-full border border-[#E5E7EB] dark:border-[#383838] hover:bg-[#F3F4F6] dark:hover:bg-[#333] py-1.5 rounded-lg text-xs font-medium transition-colors flex items-center justify-center gap-1.5 text-[#4B5563] dark:text-[#A0A0A0]"
              >
                {copiedLink ? <Check size={13} className="text-green-500" /> : <Copy size={13} />}
                <span>{copiedLink ? 'Spec Copied' : 'Copy Frame Spec'}</span>
              </button>
            </div>
          </>
        ) : (
          /* When Nothing is Selected: Canvas Workspace Summary */
          <div className="space-y-4">
            <div>
              <span className="text-[10px] font-semibold tracking-wider uppercase text-gray-400">
                Canvas Overview
              </span>
              <p className="text-[#4B5563] dark:text-[#B0B0B0] text-[11px] mt-1 leading-relaxed">
                Click any project frame on the workspace canvas to inspect design specs, tokens, and access full case studies.
              </p>
            </div>

            {/* Quick Canvas Stats */}
            <div className="grid grid-cols-2 gap-2 text-[11px] font-mono">
              <div className="bg-[#FAFAFA] dark:bg-[#1E1E1E] p-2 rounded border border-[#E5E7EB] dark:border-[#383838]">
                <span className="text-gray-400 block text-[10px]">ZOOM</span>
                <span className="font-semibold text-xs">{Math.round(zoom * 100)}%</span>
              </div>
              <div className="bg-[#FAFAFA] dark:bg-[#1E1E1E] p-2 rounded border border-[#E5E7EB] dark:border-[#383838]">
                <span className="text-gray-400 block text-[10px]">FRAMES</span>
                <span className="font-semibold text-xs">{allProjects.length} Projects</span>
              </div>
            </div>

            {/* Project Quick Jump List */}
            <div>
              <span className="text-[10px] font-semibold tracking-wider uppercase text-gray-400">
                Project Layers
              </span>
              <div className="mt-1.5 space-y-1">
                {allProjects.map((p) => (
                  <button
                    key={p.id}
                    onClick={() => onSelectProject(p)}
                    className="w-full text-left p-2 rounded-lg hover:bg-[#F3F4F6] dark:hover:bg-[#333] transition-colors flex items-center justify-between group border border-transparent hover:border-[#E5E7EB] dark:hover:border-[#383838]"
                  >
                    <div className="flex items-center gap-2 overflow-hidden">
                      <div className="w-2 h-2 rounded-full" style={{ backgroundColor: p.accentColor }} />
                      <span className="font-medium truncate text-[11px] text-[#1E1E1E] dark:text-white">
                        {p.title}
                      </span>
                    </div>
                    <span className="text-[10px] text-gray-400 font-mono">#{p.number}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Workspace Tip */}
            <div className="p-2.5 rounded-lg bg-[#0D99FF]/5 border border-[#0D99FF]/20 flex items-start gap-2 text-[11px] text-[#0D99FF]">
              <Info size={14} className="flex-shrink-0 mt-0.5" />
              <span>Tip: Double-click any frame to jump straight into its detailed case study.</span>
            </div>
          </div>
        )}
      </div>
    </aside>
  );
};

