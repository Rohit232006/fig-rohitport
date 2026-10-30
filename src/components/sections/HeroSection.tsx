import React from 'react';
import { 
  ArrowDown, 
  FileText, 
  MapPin, 
  Sparkles, 
  Layers, 
  Code2, 
  ExternalLink 
} from 'lucide-react';
import { aboutData } from '../../data/about';

interface HeroSectionProps {
  onExploreWork: () => void;
  onOpenResume?: () => void;
  onContactClick: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onExploreWork,
  onOpenResume,
  onContactClick,
}) => {
  return (
    <section 
      id="home" 
      className="relative pt-8 sm:pt-16 pb-16 sm:pb-24 border-b border-gray-200/80 dark:border-zinc-800/80 overflow-hidden figma-canvas-grid"
    >
      {/* Ambient background glow accents */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#0D99FF]/10 dark:bg-[#0D99FF]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[400px] h-[300px] bg-[#9747FF]/10 dark:bg-[#9747FF]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Figma Workspace Frame Meta Tag */}
        <div className="flex items-center justify-between mb-6">
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-white dark:bg-[#202023] border border-gray-200 dark:border-zinc-800 shadow-2xs text-[11px] font-mono text-gray-500">
            <span className="w-2 h-2 rounded-full bg-[#0D99FF]" />
            <span className="text-[#0D99FF] font-semibold">Frame: 00</span>
            <span>/</span>
            <span>Introduction (1440 × 800)</span>
          </div>

          <div className="hidden sm:inline-flex items-center gap-1.5 px-2 py-0.5 rounded bg-gray-100 dark:bg-zinc-800/80 text-[10px] font-mono text-gray-400">
            <span>x: 0</span>
            <span>y: 0</span>
          </div>
        </div>

        {/* Hero Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Heading, Bio & Actions */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Status Pills */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#14AE5C]/10 border border-[#14AE5C]/25 text-xs font-semibold text-[#14AE5C]">
                <span className="w-2 h-2 rounded-full bg-[#14AE5C] pulse-badge" />
                <span>Open to opportunities</span>
              </span>

              <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-gray-100 dark:bg-zinc-800 text-xs font-medium text-gray-600 dark:text-gray-300">
                <MapPin size={12} className="text-[#0D99FF]" />
                <span>Chennai, India</span>
              </span>

              <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-950/40 text-xs font-medium text-blue-600 dark:text-blue-400 border border-blue-100 dark:border-blue-900/50">
                <span>CS & Business Systems</span>
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#1E1E1E] dark:text-white leading-[1.12]">
              Designing Digital Experiences That Feel{' '}
              <span className="text-[#0D99FF] relative inline-block">
                Effortless.
                <svg className="absolute -bottom-1.5 left-0 w-full h-2 text-[#0D99FF]/30" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0,5 Q50,0 100,5" stroke="currentColor" strokeWidth="3" fill="none" />
                </svg>
              </span>
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 leading-relaxed max-w-2xl">
              I'm Rohit Muralidaran, a UI/UX designer passionate about transforming complex ideas into intuitive digital experiences through thoughtful design and technology.
            </p>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={onExploreWork}
                className="bg-[#0D99FF] hover:bg-[#0085EB] text-white px-5 sm:px-6 py-3 rounded-xl font-semibold text-sm shadow-md hover:shadow-lg transition-all flex items-center gap-2 cursor-pointer active:scale-95"
              >
                <span>Explore My Work</span>
                <ArrowDown size={15} />
              </button>

              <a
                href={aboutData.contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="border border-gray-200 dark:border-zinc-700 bg-white dark:bg-[#202023] hover:border-[#0D99FF] text-gray-800 dark:text-gray-200 px-5 sm:px-6 py-3 rounded-xl font-semibold text-sm transition-all flex items-center gap-2 shadow-2xs hover:shadow-sm"
              >
                <FileText size={15} className="text-[#0D99FF]" />
                <span>View LinkedIn & Resume</span>
                <ExternalLink size={12} className="text-gray-400" />
              </a>

              <button
                onClick={onContactClick}
                className="text-gray-600 dark:text-gray-400 hover:text-[#0D99FF] dark:hover:text-[#0D99FF] px-4 py-3 text-sm font-semibold transition-colors cursor-pointer"
              >
                Let's Talk →
              </button>
            </div>

            {/* Quick Micro-Highlight Tokens */}
            <div className="pt-4 border-t border-gray-200/60 dark:border-zinc-800/60 grid grid-cols-3 gap-3 max-w-xl">
              <div>
                <span className="text-xl sm:text-2xl font-bold font-mono text-[#1E1E1E] dark:text-white block">
                  04
                </span>
                <span className="text-xs text-gray-500">Selected Case Studies</span>
              </div>
              <div>
                <span className="text-xl sm:text-2xl font-bold font-mono text-[#0D99FF] block">
                  100%
                </span>
                <span className="text-xs text-gray-500">Mobile-First Quality</span>
              </div>
              <div>
                <span className="text-xl sm:text-2xl font-bold font-mono text-[#14AE5C] block">
                  2026
                </span>
                <span className="text-xs text-gray-500">CSBS Graduating</span>
              </div>
            </div>

          </div>

          {/* Right Column: Figma-Styled Profile Frame */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[360px] sm:max-w-[400px]">
              
              {/* Profile Card Container with Figma styling */}
              <div className="relative bg-white dark:bg-[#202023] rounded-3xl p-4 sm:p-5 border-2 border-gray-200 dark:border-zinc-700 shadow-figma-card">
                
                {/* Figma Selection Handles */}
                <div className="figma-handle -top-1.5 -left-1.5" />
                <div className="figma-handle -top-1.5 -right-1.5" />
                <div className="figma-handle -bottom-1.5 -left-1.5" />
                <div className="figma-handle -bottom-1.5 -right-1.5" />

                {/* Dimension Tag */}
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#0D99FF] text-white text-[10px] font-mono px-2 py-0.5 rounded shadow-xs whitespace-nowrap z-20">
                  380 × 460
                </div>

                {/* Card Titlebar */}
                <div className="flex items-center justify-between pb-3 mb-3 border-b border-gray-100 dark:border-zinc-800 text-xs">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#0D99FF]" />
                    <span className="font-semibold text-[#1E1E1E] dark:text-white font-mono text-[11px]">
                      Rohit_Profile.component
                    </span>
                  </div>
                  <span className="text-[10px] bg-green-500/10 text-green-500 px-2 py-0.5 rounded font-mono font-medium">
                    Verified
                  </span>
                </div>

                {/* Profile Image with subtle framing */}
                <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-gray-100 dark:bg-zinc-800 border border-gray-200/80 dark:border-zinc-700">
                  <img
                    src={aboutData.avatarUrl}
                    alt="Rohit Muralidaran — UI/UX Designer"
                    className="w-full h-full object-cover object-center filter saturate-[1.05]"
                  />
                  
                  {/* Subtle Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                  {/* Badges on image */}
                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <p className="font-bold text-sm tracking-tight drop-shadow-sm">
                      Rohit Muralidaran
                    </p>
                    <p className="text-[11px] text-white/80 font-medium">
                      UI/UX Designer & Technologist
                    </p>
                  </div>
                </div>

                {/* Bottom Frame Details */}
                <div className="mt-3 pt-3 border-t border-gray-100 dark:border-zinc-800 flex items-center justify-between text-[11px] text-gray-500">
                  <span className="flex items-center gap-1.5">
                    <Layers size={13} className="text-[#0D99FF]" />
                    <span>Design Systems & Tokens</span>
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Code2 size={13} className="text-[#14AE5C]" />
                    <span>React • TypeScript</span>
                  </span>
                </div>

              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

