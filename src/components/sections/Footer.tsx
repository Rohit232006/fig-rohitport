import React from 'react';
import { ArrowUp, Heart, Sparkles, Layers } from 'lucide-react';
import { aboutData } from '../../data/about';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="py-12 border-t border-gray-200 dark:border-zinc-800 bg-white dark:bg-[#18181B] text-gray-600 dark:text-gray-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pb-8 border-b border-gray-100 dark:border-zinc-800/80">
          {/* Logo & Signature */}
          <div className="flex items-center gap-3">
            <div className="w-7 h-7 rounded-lg bg-[#0D99FF] flex items-center justify-center text-white font-extrabold text-xs shadow-xs">
              RM
            </div>
            <div>
              <p className="font-bold text-sm text-gray-900 dark:text-white">
                Rohit Muralidaran
              </p>
              <p className="text-[11px] text-gray-500">
                UI/UX Designer & Creative Technologist
              </p>
            </div>
          </div>

          {/* Figma Status Pill */}
          <div className="flex items-center gap-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gray-100 dark:bg-zinc-800 text-[11px] font-mono text-gray-600 dark:text-gray-300">
              <span className="w-2 h-2 rounded-full bg-[#14AE5C]" />
              <span>All changes saved • Portfolio.fig</span>
            </div>

            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-gray-100 dark:bg-zinc-800 hover:bg-[#0D99FF] hover:text-white dark:hover:bg-[#0D99FF] transition-colors cursor-pointer"
              title="Back to top"
              aria-label="Back to top"
            >
              <ArrowUp size={15} />
            </button>
          </div>
        </div>

        {/* Bottom row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-gray-500">
          <p>
            © {new Date().getFullYear()} Rohit Muralidaran. All rights reserved.
          </p>

          <p className="flex items-center gap-1.5">
            <span>Designed with Figma inspiration • Built with React & Tailwind</span>
          </p>
        </div>

      </div>
    </footer>
  );
};

