import React, { useState } from 'react';
import { 
  ArrowRight, 
  Sparkles, 
  Compass, 
  Layers, 
  CheckCircle2, 
  MapPin, 
  GraduationCap, 
  Sliders, 
  MousePointer2, 
  Palette,
  ExternalLink
} from 'lucide-react';
import { aboutData } from '../../data/about';

interface HeroCanvasSectionProps {
  onExploreProjects: () => void;
  onOpenAbout: () => void;
  onOpenContact: () => void;
}

export const HeroCanvasSection: React.FC<HeroCanvasSectionProps> = ({
  onExploreProjects,
  onOpenAbout,
  onOpenContact,
}) => {
  const [toggleState, setToggleState] = useState(true);
  const [activeTab, setActiveTab] = useState<'tokens' | 'spec'>('tokens');

  return (
    <div className="relative group select-none">
      {/* Figma Frame Header */}
      <div className="flex items-center gap-2 mb-2 px-1">
        <span className="text-[11px] font-mono font-medium text-[#0D99FF] bg-[#0D99FF]/10 px-2 py-0.5 rounded flex items-center gap-1.5 border border-[#0D99FF]/20">
          <span className="w-1.5 h-1.5 rounded-full bg-[#0D99FF]" />
          Frame: 00 / Workspace Introduction (1280 × 720)
        </span>
        <span className="text-[11px] text-[#9E9E9E] dark:text-[#777] font-mono">
          x: 120, y: 140
        </span>
      </div>

      {/* Frame Container */}
      <div className="w-[1180px] bg-white dark:bg-[#1E1E1E] rounded-2xl border-2 border-[#0D99FF]/40 shadow-figma-card p-10 relative overflow-hidden transition-colors">
        
        {/* Figma Corner Handles */}
        <div className="figma-handle -top-1 -left-1" />
        <div className="figma-handle -top-1 -right-1" />
        <div className="figma-handle -bottom-1 -left-1" />
        <div className="figma-handle -bottom-1 -right-1" />

        {/* Ambient Canvas Glow */}
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-[#0D99FF]/5 dark:bg-[#0D99FF]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-[#9747FF]/5 dark:bg-[#9747FF]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="grid grid-cols-12 gap-10 items-center relative z-10">
          {/* Left Column: Heading, Subtitle & CTAs */}
          <div className="col-span-7 space-y-6">
            
            {/* Availability Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#14AE5C]/10 border border-[#14AE5C]/20 text-[#14AE5C] text-xs font-medium">
              <span className="w-2 h-2 rounded-full bg-[#14AE5C] pulse-badge" />
              <span>Open to opportunities</span>
              <span className="text-[#9CA3AF]">•</span>
              <span className="text-gray-600 dark:text-gray-300">Product & UI/UX Design</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl lg:text-5xl font-extrabold tracking-tight text-[#1E1E1E] dark:text-white leading-[1.12]">
              Designing Digital Experiences That Feel{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0D99FF] via-[#9747FF] to-[#0D99FF]">
                Effortless.
              </span>
            </h1>

            {/* Supporting Copy */}
            <p className="text-base text-[#4B5563] dark:text-[#A0A0A0] leading-relaxed max-w-xl">
              I'm <strong className="text-[#1E1E1E] dark:text-white font-semibold">Rohit</strong>, a UI/UX designer and developer passionate about turning complex ideas into intuitive, meaningful digital experiences.
            </p>

            {/* Academic & Location Tags */}
            <div className="flex flex-wrap items-center gap-3 text-xs text-[#6B7280] dark:text-[#888]">
              <span className="flex items-center gap-1.5 bg-[#F7F8FA] dark:bg-[#282828] px-2.5 py-1 rounded-md border border-[#E5E7EB] dark:border-[#383838]">
                <GraduationCap size={13} className="text-[#0D99FF]" />
                <span>CS & Business Systems</span>
              </span>
              <span className="flex items-center gap-1.5 bg-[#F7F8FA] dark:bg-[#282828] px-2.5 py-1 rounded-md border border-[#E5E7EB] dark:border-[#383838]">
                <MapPin size={13} className="text-[#14AE5C]" />
                <span>Chennai, India</span>
              </span>
              <span className="flex items-center gap-1.5 bg-[#F7F8FA] dark:bg-[#282828] px-2.5 py-1 rounded-md border border-[#E5E7EB] dark:border-[#383838]">
                <Compass size={13} className="text-[#9747FF]" />
                <span>Canvas Concept 2.0</span>
              </span>
            </div>

            {/* Action CTAs */}
            <div className="flex items-center gap-3 pt-2">
              <button
                onClick={onExploreProjects}
                className="bg-[#0D99FF] hover:bg-[#0085EB] text-white px-5 py-2.5 rounded-xl font-semibold text-sm shadow-sm hover:shadow transition-all flex items-center gap-2 group"
              >
                <span>Explore My Canvas</span>
                <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={onOpenAbout}
                className="border border-[#E5E7EB] dark:border-[#383838] bg-white dark:bg-[#252525] hover:bg-[#F9FAFB] dark:hover:bg-[#2F2F2F] text-[#1E1E1E] dark:text-white px-5 py-2.5 rounded-xl font-medium text-sm transition-all"
              >
                About Me
              </button>

              <button
                onClick={onOpenContact}
                className="text-xs text-[#6B7280] dark:text-[#A0A0A0] hover:text-[#0D99FF] font-medium underline underline-offset-4 px-2"
              >
                Get in touch →
              </button>
            </div>

            {/* Canvas Instructions */}
            <div className="pt-4 border-t border-[#F3F4F6] dark:border-[#2C2C2C] flex items-center gap-2 text-xs text-[#9CA3AF] dark:text-[#666]">
              <MousePointer2 size={13} className="text-[#0D99FF]" />
              <span className="font-mono">Drag around • Select a frame • Explore my work.</span>
            </div>
          </div>

          {/* Right Column: Profile Card & Floating Design Widgets */}
          <div className="col-span-5 relative">
            
            {/* Primary Profile Card */}
            <div className="bg-[#F8FAFC] dark:bg-[#242424] border border-[#E2E8F0] dark:border-[#333] rounded-2xl p-5 shadow-figma-floating relative z-10">
              
              {/* Profile Card Header */}
              <div className="flex items-center gap-4">
                <div className="relative">
                  <img
                    src="/images/rohit-profile.jpg"
                    alt="Rohit Muralidaran"
                    className="w-18 h-18 rounded-2xl object-cover border-2 border-white dark:border-[#333] shadow-md w-[72px] h-[72px]"
                    onError={(e) => {
                      // Fallback if image path fails
                      (e.target as HTMLElement).style.display = 'none';
                    }}
                  />
                  <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-[#14AE5C] border-2 border-white dark:border-[#242424] rounded-full" />
                </div>

                <div>
                  <h3 className="font-bold text-base text-[#1E1E1E] dark:text-white">
                    Rohit Muralidaran
                  </h3>
                  <p className="text-xs text-[#0D99FF] font-medium">
                    UI/UX Designer & Technologist
                  </p>
                  <p className="text-[11px] text-gray-500 dark:text-gray-400 mt-0.5">
                    Bridging design systems with code
                  </p>
                </div>
              </div>

              {/* Designer Vitals */}
              <div className="mt-4 pt-3 border-t border-gray-200 dark:border-[#333] grid grid-cols-3 gap-2 text-center">
                <div className="bg-white dark:bg-[#1E1E1E] p-2 rounded-lg border border-gray-100 dark:border-[#2E2E2E]">
                  <span className="text-xs font-bold text-[#1E1E1E] dark:text-white">5+</span>
                  <span className="block text-[10px] text-gray-500">Case Studies</span>
                </div>
                <div className="bg-white dark:bg-[#1E1E1E] p-2 rounded-lg border border-gray-100 dark:border-[#2E2E2E]">
                  <span className="text-xs font-bold text-[#1E1E1E] dark:text-white">CSBS</span>
                  <span className="block text-[10px] text-gray-500">B.Tech Degree</span>
                </div>
                <div className="bg-white dark:bg-[#1E1E1E] p-2 rounded-lg border border-gray-100 dark:border-[#2E2E2E]">
                  <span className="text-xs font-bold text-[#1E1E1E] dark:text-white">Figma</span>
                  <span className="block text-[10px] text-gray-500">Component Spec</span>
                </div>
              </div>

              {/* Interactive Micro-Widget: Live Component State Demo */}
              <div className="mt-3 bg-white dark:bg-[#1E1E1E] p-3 rounded-xl border border-gray-100 dark:border-[#2E2E2E]">
                <div className="flex items-center justify-between text-xs font-medium mb-2">
                  <span className="text-gray-500 text-[11px] font-mono">Interactive Component:</span>
                  <span className={`text-[10px] px-1.5 py-0.5 rounded font-mono ${
                    toggleState ? 'bg-green-100 dark:bg-green-950 text-green-700 dark:text-green-300' : 'bg-gray-100 dark:bg-gray-800 text-gray-600'
                  }`}>
                    {toggleState ? 'Active' : 'Idle'}
                  </span>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-xs text-[#1E1E1E] dark:text-gray-200 font-medium">
                    Magnetic Snapping
                  </span>
                  <button
                    onClick={() => setToggleState(!toggleState)}
                    className={`w-11 h-6 flex items-center rounded-full p-1 transition-colors duration-200 ease-in-out ${
                      toggleState ? 'bg-[#0D99FF]' : 'bg-gray-300 dark:bg-gray-600'
                    }`}
                  >
                    <div
                      className={`bg-white w-4 h-4 rounded-full shadow-md transform transition-transform duration-200 ease-in-out ${
                        toggleState ? 'translate-x-5' : 'translate-x-0'
                      }`}
                    />
                  </button>
                </div>
              </div>
            </div>

            {/* Floating Mini-Window 1: Design Tokens Pill */}
            <div className="absolute -top-7 -right-4 bg-white dark:bg-[#2A2A2A] border border-[#E5E7EB] dark:border-[#383838] p-3 rounded-xl shadow-figma-card z-20 w-48 transition-all hover:scale-105">
              <div className="flex items-center justify-between mb-1.5">
                <span className="text-[10px] font-mono text-gray-400 uppercase tracking-wider">
                  Color Tokens
                </span>
                <Palette size={11} className="text-[#0D99FF]" />
              </div>
              <div className="flex items-center gap-1.5">
                <div className="w-5 h-5 rounded-md bg-[#0D99FF] shadow-xs" title="#0D99FF Primary Blue" />
                <div className="w-5 h-5 rounded-md bg-[#9747FF] shadow-xs" title="#9747FF Accent Purple" />
                <div className="w-5 h-5 rounded-md bg-[#14AE5C] shadow-xs" title="#14AE5C Transit Green" />
                <div className="w-5 h-5 rounded-md bg-[#F24E1E] shadow-xs" title="#F24E1E Coral Warning" />
                <div className="w-5 h-5 rounded-md bg-[#1E1E1E] shadow-xs" title="#1E1E1E Dark Slate" />
              </div>
              <span className="block text-[10px] font-mono text-gray-500 mt-1.5">
                rgba(13, 153, 255, 1.0)
              </span>
            </div>

            {/* Floating Mini-Window 2: Collaborative Multi-Cursor Tag */}
            <div className="absolute -bottom-6 -left-6 bg-[#9747FF] text-white text-xs px-2.5 py-1 rounded-full shadow-lg flex items-center gap-1.5 z-20">
              <MousePointer2 size={12} className="transform -rotate-12 fill-white" />
              <span className="font-medium text-[11px]">Rohit Muralidaran (Editing)</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

