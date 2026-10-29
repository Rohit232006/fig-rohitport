import React, { useState } from 'react';
import { 
  Cloud,
  Check, 
  ChevronDown, 
  Moon, 
  Sun, 
  Share2, 
  Maximize2, 
  Sliders, 
  Sparkles, 
  MessageSquare,
  FileText,
  Menu,
  X,
  ExternalLink,
  Laptop
} from 'lucide-react';

interface TopBarProps {
  zoom: number;
  onZoomChange: (newZoom: number) => void;
  onResetView: () => void;
  isDarkMode: boolean;
  onToggleDarkMode: () => void;
  onOpenAbout: () => void;
  onOpenContact: () => void;
  onScrollToProjects: () => void;
  onScrollToHero: () => void;
  viewMode: 'canvas' | 'linear';
  onToggleViewMode: () => void;
  activeSection: string;
}

export const TopBar: React.FC<TopBarProps> = ({
  zoom,
  onZoomChange,
  onResetView,
  isDarkMode,
  onToggleDarkMode,
  onOpenAbout,
  onOpenContact,
  onScrollToProjects,
  onScrollToHero,
  viewMode,
  onToggleViewMode,
}) => {
  const [showFileMenu, setShowFileMenu] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [copiedShare, setCopiedShare] = useState(false);

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopiedShare(true);
    setTimeout(() => setCopiedShare(false), 2000);
  };

  return (
    <header className="h-12 border-b border-[#E5E7EB] dark:border-[#2E2E2E] bg-white dark:bg-[#1E1E1E] px-3 flex items-center justify-between z-30 select-none text-[#1E1E1E] dark:text-[#E0E0E0] transition-colors relative">
      {/* Left: Brand & File Name */}
      <div className="flex items-center gap-3">
        {/* Personal Logo */}
        <div 
          onClick={onScrollToHero}
          className="flex items-center gap-2 cursor-pointer group py-1"
          title="Return to origin"
        >
          <div className="w-7 h-7 rounded-lg bg-[#0D99FF] flex items-center justify-center text-white font-bold text-xs tracking-wider shadow-sm group-hover:scale-105 transition-transform">
            RM
          </div>
          <span className="font-semibold text-sm tracking-tight hidden sm:inline text-[#1E1E1E] dark:text-white">
            Rohit Muralidaran
          </span>
        </div>

        <div className="h-4 w-px bg-[#E5E7EB] dark:bg-[#2E2E2E] hidden md:block" />

        {/* File Name & Dropdown */}
        <div className="relative">
          <button
            onClick={() => setShowFileMenu(!showFileMenu)}
            className="flex items-center gap-1.5 px-2 py-1 rounded-md hover:bg-[#F3F4F6] dark:hover:bg-[#2C2C2C] text-xs font-medium text-[#4B5563] dark:text-[#A0A0A0] transition-colors"
          >
            <span className="text-[#1E1E1E] dark:text-white font-mono font-medium">Rohit — Portfolio.fig</span>
            <ChevronDown size={13} className="text-[#9CA3AF]" />
          </button>

          {/* File Menu Dropdown */}
          {showFileMenu && (
            <div className="absolute top-full left-0 mt-1 w-56 bg-white dark:bg-[#262626] border border-[#E5E7EB] dark:border-[#383838] rounded-lg shadow-lg py-1.5 z-50 text-xs">
              <div className="px-3 py-1.5 border-b border-[#F3F4F6] dark:border-[#333]">
                <p className="font-semibold text-[#1E1E1E] dark:text-white">Canvas Workspace</p>
                <p className="text-[11px] text-[#6B7280] dark:text-[#888]">Version 2.0 • Last saved just now</p>
              </div>
              <button
                onClick={() => {
                  onResetView();
                  setShowFileMenu(false);
                }}
                className="w-full text-left px-3 py-1.5 hover:bg-[#F3F4F6] dark:hover:bg-[#333] flex items-center justify-between"
              >
                <span>Zoom to 100% Fit</span>
                <span className="text-[10px] text-gray-400 font-mono">Shift + 1</span>
              </button>
              <button
                onClick={() => {
                  onScrollToProjects();
                  setShowFileMenu(false);
                }}
                className="w-full text-left px-3 py-1.5 hover:bg-[#F3F4F6] dark:hover:bg-[#333] flex items-center justify-between"
              >
                <span>Jump to Projects Frame</span>
                <span className="text-[10px] text-gray-400 font-mono">P</span>
              </button>
              <button
                onClick={() => {
                  onOpenAbout();
                  setShowFileMenu(false);
                }}
                className="w-full text-left px-3 py-1.5 hover:bg-[#F3F4F6] dark:hover:bg-[#333] flex items-center justify-between"
              >
                <span>Open About Me Frame</span>
                <span className="text-[10px] text-gray-400 font-mono">A</span>
              </button>
              <div className="h-px bg-[#F3F4F6] dark:bg-[#333] my-1" />
              <button
                onClick={() => {
                  window.open('https://github.com/Rohit232006', '_blank');
                  setShowFileMenu(false);
                }}
                className="w-full text-left px-3 py-1.5 hover:bg-[#F3F4F6] dark:hover:bg-[#333] flex items-center justify-between text-[#0D99FF]"
              >
                <span>Visit GitHub Profile</span>
                <ExternalLink size={11} />
              </button>
            </div>
          )}
        </div>

        {/* Status Indicator: "All changes saved" */}
        <div className="hidden lg:flex items-center gap-1.5 text-xs text-[#14AE5C] bg-[#14AE5C]/10 px-2.5 py-0.5 rounded-full font-medium">
          <span className="w-1.5 h-1.5 rounded-full bg-[#14AE5C] pulse-badge" />
          <span>All changes saved</span>
        </div>
      </div>

      {/* Center: Desktop Navigation Links */}
      <nav className="hidden md:flex items-center gap-1 bg-[#F7F8FA] dark:bg-[#252525] p-1 rounded-lg border border-[#E5E7EB] dark:border-[#333]">
        <button
          onClick={onScrollToHero}
          className="px-3 py-1 text-xs font-medium rounded-md hover:bg-white dark:hover:bg-[#303030] text-[#1E1E1E] dark:text-white transition-all shadow-sm"
        >
          Canvas
        </button>
        <button
          onClick={onScrollToProjects}
          className="px-3 py-1 text-xs font-medium rounded-md hover:bg-white dark:hover:bg-[#303030] text-[#4B5563] dark:text-[#A0A0A0] hover:text-[#1E1E1E] dark:hover:text-white transition-all"
        >
          Projects (4)
        </button>
        <button
          onClick={onOpenAbout}
          className="px-3 py-1 text-xs font-medium rounded-md hover:bg-white dark:hover:bg-[#303030] text-[#4B5563] dark:text-[#A0A0A0] hover:text-[#1E1E1E] dark:hover:text-white transition-all"
        >
          About
        </button>
        <button
          onClick={onOpenContact}
          className="px-3 py-1 text-xs font-medium rounded-md hover:bg-white dark:hover:bg-[#303030] text-[#4B5563] dark:text-[#A0A0A0] hover:text-[#1E1E1E] dark:hover:text-white transition-all"
        >
          Contact
        </button>
      </nav>

      {/* Right: Controls & CTAs */}
      <div className="flex items-center gap-2">
        {/* View Mode Toggle: Canvas / Linear */}
        <button
          onClick={onToggleViewMode}
          className={`flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-medium border transition-colors ${
            viewMode === 'linear'
              ? 'bg-[#0D99FF]/10 border-[#0D99FF] text-[#0D99FF]'
              : 'border-[#E5E7EB] dark:border-[#333] hover:bg-[#F3F4F6] dark:hover:bg-[#2A2A2A] text-[#4B5563] dark:text-[#A0A0A0]'
          }`}
          title={viewMode === 'canvas' ? 'Switch to Linear Case Studies View' : 'Switch to Interactive Canvas'}
        >
          {viewMode === 'canvas' ? <Laptop size={13} /> : <Sliders size={13} />}
          <span className="hidden sm:inline">{viewMode === 'canvas' ? 'Canvas Mode' : 'Linear Mode'}</span>
        </button>

        {/* Zoom Controls (only shown on canvas mode) */}
        {viewMode === 'canvas' && (
          <div className="hidden sm:flex items-center border border-[#E5E7EB] dark:border-[#333] rounded-md overflow-hidden bg-white dark:bg-[#252525]">
            <button
              onClick={() => onZoomChange(Math.max(0.25, zoom - 0.1))}
              className="px-2 py-1 text-xs hover:bg-[#F3F4F6] dark:hover:bg-[#333] transition-colors"
              title="Zoom out"
            >
              -
            </button>
            <button
              onClick={onResetView}
              className="px-2 py-1 text-xs font-mono font-medium hover:bg-[#F3F4F6] dark:hover:bg-[#333] border-x border-[#E5E7EB] dark:border-[#333] transition-colors"
              title="Reset view (100%)"
            >
              {Math.round(zoom * 100)}%
            </button>
            <button
              onClick={() => onZoomChange(Math.min(2.0, zoom + 0.1))}
              className="px-2 py-1 text-xs hover:bg-[#F3F4F6] dark:hover:bg-[#333] transition-colors"
              title="Zoom in"
            >
              +
            </button>
          </div>
        )}

        {/* Theme Toggle */}
        <button
          onClick={onToggleDarkMode}
          className="p-1.5 rounded-md text-[#4B5563] dark:text-[#A0A0A0] hover:bg-[#F3F4F6] dark:hover:bg-[#2C2C2C] transition-colors"
          title={isDarkMode ? 'Switch to light canvas' : 'Switch to dark canvas'}
        >
          {isDarkMode ? <Sun size={15} /> : <Moon size={15} />}
        </button>

        {/* Share Button */}
        <button
          onClick={handleShare}
          className="p-1.5 rounded-md text-[#4B5563] dark:text-[#A0A0A0] hover:bg-[#F3F4F6] dark:hover:bg-[#2C2C2C] transition-colors relative"
          title="Share canvas link"
        >
          <Share2 size={15} />
          {copiedShare && (
            <span className="absolute -bottom-7 right-0 bg-[#1E1E1E] text-white text-[10px] px-2 py-0.5 rounded shadow-lg whitespace-nowrap z-50">
              Copied Link!
            </span>
          )}
        </button>

        {/* Let's Talk CTA */}
        <button
          onClick={onOpenContact}
          className="bg-[#0D99FF] hover:bg-[#0085EB] text-white text-xs font-semibold px-3.5 py-1.5 rounded-lg shadow-sm hover:shadow transition-all flex items-center gap-1.5"
        >
          <Sparkles size={13} />
          <span>Let's Talk</span>
        </button>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-1.5 rounded-md text-[#4B5563] dark:text-[#A0A0A0] hover:bg-[#F3F4F6] dark:hover:bg-[#2C2C2C]"
        >
          {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="absolute top-12 left-0 right-0 bg-white dark:bg-[#1E1E1E] border-b border-[#E5E7EB] dark:border-[#2E2E2E] shadow-xl p-4 md:hidden z-50 flex flex-col gap-2">
          <div className="flex items-center justify-between pb-2 border-b border-gray-100 dark:border-[#333]">
            <span className="text-xs font-semibold text-gray-500">Navigation</span>
            <span className="text-xs text-[#14AE5C] bg-[#14AE5C]/10 px-2 py-0.5 rounded-full font-medium">All changes saved</span>
          </div>
          <button
            onClick={() => {
              onScrollToHero();
              setMobileMenuOpen(false);
            }}
            className="text-left py-2 px-3 rounded-md hover:bg-gray-100 dark:hover:bg-[#2A2A2A] text-sm font-medium"
          >
            ✦ Canvas Home
          </button>
          <button
            onClick={() => {
              onScrollToProjects();
              setMobileMenuOpen(false);
            }}
            className="text-left py-2 px-3 rounded-md hover:bg-gray-100 dark:hover:bg-[#2A2A2A] text-sm font-medium flex items-center justify-between"
          >
            <span>Projects Workspace</span>
            <span className="text-xs bg-[#0D99FF]/10 text-[#0D99FF] px-2 py-0.5 rounded-full">4</span>
          </button>
          <button
            onClick={() => {
              onOpenAbout();
              setMobileMenuOpen(false);
            }}
            className="text-left py-2 px-3 rounded-md hover:bg-gray-100 dark:hover:bg-[#2A2A2A] text-sm font-medium"
          >
            About Rohit Muralidaran
          </button>
          <button
            onClick={() => {
              onOpenContact();
              setMobileMenuOpen(false);
            }}
            className="text-left py-2 px-3 rounded-md hover:bg-gray-100 dark:hover:bg-[#2A2A2A] text-sm font-medium"
          >
            Get in Touch / Contact
          </button>
          <div className="pt-2 border-t border-gray-100 dark:border-[#333] flex items-center justify-between">
            <button
              onClick={() => {
                onToggleViewMode();
                setMobileMenuOpen(false);
              }}
              className="text-xs text-[#0D99FF] font-medium"
            >
              Toggle {viewMode === 'canvas' ? 'Linear Mode' : 'Canvas Mode'}
            </button>
            <button
              onClick={() => {
                onToggleDarkMode();
                setMobileMenuOpen(false);
              }}
              className="text-xs text-gray-500 font-medium"
            >
              {isDarkMode ? 'Light Canvas' : 'Dark Canvas'}
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
