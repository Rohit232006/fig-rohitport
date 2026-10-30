import React, { useState, useEffect } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { 
  Sparkles, 
  Menu, 
  X, 
  Moon, 
  Sun
} from 'lucide-react';

interface TopBarProps {
  isDarkMode: boolean;
  onToggleDarkMode: () => void;
  activeSection?: string;
}

export const TopBar: React.FC<TopBarProps> = ({
  isDarkMode,
  onToggleDarkMode,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('home');

  // Smooth scroll progress spring for header indicator
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Track scroll position to update active section in nav
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'work', 'about', 'contact'];
      const scrollY = window.scrollY;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop - 120;
          const height = el.offsetHeight;
          if (scrollY >= top && scrollY < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const topOffset = element.getBoundingClientRect().top + window.scrollY - 70;
      window.scrollTo({
        top: topOffset,
        behavior: 'smooth'
      });
    }
  };

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'work', label: 'Work' },
    { id: 'about', label: 'About' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-md bg-white/90 dark:bg-[#18181B]/90 border-b border-[#E5E7EB] dark:border-[#2E2E2E] transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-14 sm:h-16 flex items-center justify-between">
        
        {/* Left: RM Personal Logo */}
        <div className="flex items-center gap-3">
          <button 
            onClick={() => scrollToSection('home')}
            className="flex items-center gap-2.5 group text-left cursor-pointer"
            aria-label="Rohit Muralidaran Home"
          >
            <div className="w-8 h-8 rounded-lg bg-[#0D99FF] flex items-center justify-center text-white font-extrabold text-xs tracking-wider shadow-sm group-hover:scale-105 transition-transform">
              RM
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-sm tracking-tight text-[#1E1E1E] dark:text-white flex items-center gap-1.5">
                Rohit Muralidaran
                <span className="hidden md:inline-block font-mono text-[10px] text-gray-400 bg-gray-100 dark:bg-[#2A2A2A] px-1.5 py-0.5 rounded">
                  .fig
                </span>
              </span>
              <span className="text-[10px] text-gray-500 dark:text-gray-400 hidden sm:inline">
                UI/UX Designer
              </span>
            </div>
          </button>
        </div>

        {/* Center: Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 bg-gray-100/80 dark:bg-[#252528]/80 p-1 rounded-xl border border-gray-200/60 dark:border-zinc-800">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                activeSection === link.id
                  ? 'bg-white dark:bg-[#1E1E1E] text-[#0D99FF] shadow-xs'
                  : 'text-gray-600 dark:text-gray-300 hover:text-[#0D99FF] dark:hover:text-[#0D99FF]'
              }`}
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* Right: Available Indicator + CTA + Theme Toggle */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Availability Status (hidden on smallest screens) */}
          <div className="hidden lg:flex items-center gap-2 px-2.5 py-1 rounded-full bg-[#14AE5C]/10 border border-[#14AE5C]/20 text-[11px] font-medium text-[#14AE5C]">
            <span className="w-2 h-2 rounded-full bg-[#14AE5C] pulse-badge" />
            <span>Open to opportunities</span>
          </div>

          {/* Theme Toggle */}
          <button
            onClick={onToggleDarkMode}
            className="p-2 rounded-lg text-gray-500 hover:text-[#0D99FF] hover:bg-gray-100 dark:hover:bg-[#28282B] transition-colors"
            title={isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            aria-label="Toggle theme"
          >
            {isDarkMode ? <Sun size={17} className="text-amber-400" /> : <Moon size={17} />}
          </button>

          {/* Primary "Let's Talk" CTA */}
          <button
            onClick={() => scrollToSection('contact')}
            className="bg-[#0D99FF] hover:bg-[#0085EB] text-white text-xs font-semibold px-3.5 sm:px-4 py-2 rounded-xl shadow-xs hover:shadow transition-all flex items-center gap-1.5 cursor-pointer active:scale-95"
          >
            <Sparkles size={13} />
            <span>Let's Talk</span>
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-[#28282B] transition-colors cursor-pointer"
            aria-label="Toggle mobile menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Accessible Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-[#E5E7EB] dark:border-[#2E2E2E] bg-white dark:bg-[#18181B] px-4 py-4 space-y-3 shadow-xl animate-in slide-in-from-top-2 duration-150">
          <div className="flex items-center justify-between pb-2 border-b border-gray-100 dark:border-zinc-800">
            <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider font-mono">
              Menu Navigation
            </span>
            <div className="flex items-center gap-1.5 text-[10px] text-[#14AE5C] bg-[#14AE5C]/10 px-2 py-0.5 rounded-full font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-[#14AE5C]" />
              <span>Available</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-2">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={`text-left px-3.5 py-2.5 rounded-xl text-sm font-semibold transition-colors flex items-center justify-between ${
                  activeSection === link.id
                    ? 'bg-[#0D99FF]/10 text-[#0D99FF] border border-[#0D99FF]/20'
                    : 'bg-gray-50 dark:bg-[#202023] text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-[#27272B]'
                }`}
              >
                <span>{link.label}</span>
                {activeSection === link.id && (
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0D99FF]" />
                )}
              </button>
            ))}
          </div>

          <div className="pt-2 border-t border-gray-100 dark:border-zinc-800 flex items-center justify-between">
            <span className="text-xs text-gray-500">Theme</span>
            <button
              onClick={onToggleDarkMode}
              className="text-xs font-medium px-3 py-1.5 rounded-lg bg-gray-100 dark:bg-zinc-800 text-gray-700 dark:text-gray-200 flex items-center gap-1.5"
            >
              {isDarkMode ? <Sun size={13} className="text-amber-400" /> : <Moon size={13} />}
              <span>{isDarkMode ? 'Light Mode' : 'Dark Mode'}</span>
            </button>
          </div>
        </div>
      )}

      {/* Smooth Parallax Scroll Reading Indicator */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#0D99FF] via-[#9747FF] to-[#14AE5C] origin-left pointer-events-none"
        style={{ scaleX }}
      />
    </header>
  );
};
