import React, { useState, useEffect } from 'react';
import { TopBar } from './components/workspace/TopBar';
import { HeroSection } from './components/sections/HeroSection';
import { ProjectsSection } from './components/sections/ProjectsSection';
import { AboutSection } from './components/sections/AboutSection';
import { SkillsSection } from './components/sections/SkillsSection';
import { ContactSection } from './components/sections/ContactSection';
import { Footer } from './components/sections/Footer';
import { CaseStudyModal } from './components/casestudy/CaseStudyModal';
import { projectsData } from './data/projects';
import { Project } from './types';

export const App: React.FC = () => {
  // Theme state
  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme');
      if (savedTheme) return savedTheme === 'dark';
      return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });

  // Apply dark mode class to html element
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);

  // Selected project for Case Study Modal
  const [caseStudyProject, setCaseStudyProject] = useState<Project | null>(null);

  // Smooth scroll helper
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const topOffset = el.getBoundingClientRect().top + window.scrollY - 70;
      window.scrollTo({
        top: topOffset,
        behavior: 'smooth'
      });
    }
  };

  // Next / Previous Project in Case Study Modal
  const handleNextProject = () => {
    if (!caseStudyProject) return;
    const currentIndex = projectsData.findIndex((p) => p.id === caseStudyProject.id);
    const nextIndex = (currentIndex + 1) % projectsData.length;
    setCaseStudyProject(projectsData[nextIndex]);
  };

  const handlePrevProject = () => {
    if (!caseStudyProject) return;
    const currentIndex = projectsData.findIndex((p) => p.id === caseStudyProject.id);
    const prevIndex = (currentIndex - 1 + projectsData.length) % projectsData.length;
    setCaseStudyProject(projectsData[prevIndex]);
  };

  // Global ESC key listener for modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setCaseStudyProject(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="w-full min-h-screen bg-[#F7F8FA] dark:bg-[#18181B] text-[#1E1E1E] dark:text-[#E0E0E0] font-sans antialiased selection:bg-[#0D99FF]/20 selection:text-[#0D99FF] flex flex-col transition-colors duration-150">
      
      {/* 1. Minimal Sticky Navigation */}
      <TopBar
        isDarkMode={isDarkMode}
        onToggleDarkMode={() => setIsDarkMode(!isDarkMode)}
      />

      {/* Main Single-Page Content Flow */}
      <main className="flex-1 w-full">
        {/* 2. Hero Section */}
        <HeroSection
          onExploreWork={() => scrollToSection('work')}
          onContactClick={() => scrollToSection('contact')}
        />

        {/* 3. Selected Projects Section */}
        <ProjectsSection
          projects={projectsData}
          onOpenCaseStudy={(proj) => setCaseStudyProject(proj)}
        />

        {/* 4. About Section */}
        <AboutSection />

        {/* 5. Categorized Skills Section */}
        <SkillsSection />

        {/* 6. Contact Section */}
        <ContactSection />
      </main>

      {/* 7. Footer */}
      <Footer />

      {/* 8. Detailed 12-Section Case Study Modal */}
      <CaseStudyModal
        project={caseStudyProject}
        onClose={() => setCaseStudyProject(null)}
        onNextProject={handleNextProject}
        onPrevProject={handlePrevProject}
      />

    </div>
  );
};

export default App;
