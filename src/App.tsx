import React, { useState, useEffect } from 'react';
import { TopBar } from './components/workspace/TopBar';
import { LeftToolbar } from './components/workspace/LeftToolbar';
import { PropertiesPanel } from './components/workspace/PropertiesPanel';
import { InfiniteCanvas } from './components/canvas/InfiniteCanvas';
import { CaseStudyModal } from './components/casestudy/CaseStudyModal';
import { AboutWindow } from './components/windows/AboutWindow';
import { ContactWindow } from './components/windows/ContactWindow';
import { DesignTokensModal } from './components/windows/DesignTokensModal';
import { LinearPortfolioView } from './components/views/LinearPortfolioView';
import { projectsData } from './data/projects';
import { Project, ToolType, CanvasComment } from './types';

export const App: React.FC = () => {
  // Theme state
  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  // Apply dark mode class to html element
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  // View mode: 'canvas' or 'linear'
  const [viewMode, setViewMode] = useState<'canvas' | 'linear'>('canvas');

  // Selected project
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Active Tool
  const [activeTool, setActiveTool] = useState<ToolType>('move');

  // Zoom level (0.35 to 2.0)
  const [zoom, setZoom] = useState<number>(1.0);

  // Properties panel collapsed state
  const [isPropertiesCollapsed, setIsPropertiesCollapsed] = useState<boolean>(false);

  // Windows / Modals state
  const [caseStudyProject, setCaseStudyProject] = useState<Project | null>(null);
  const [isAboutOpen, setIsAboutOpen] = useState<boolean>(false);
  const [isContactOpen, setIsContactOpen] = useState<boolean>(false);
  const [isTokensOpen, setIsTokensOpen] = useState<boolean>(false);
  const [tokensInitialTab, setTokensInitialTab] = useState<'tokens' | 'typography'>('tokens');

  // Interactive Comments on Canvas
  const [comments, setComments] = useState<CanvasComment[]>([
    {
      id: 'c1',
      author: 'Design Lead (Acme Corp)',
      avatarColor: '#0D99FF',
      x: 1540,
      y: 60,
      text: 'Outstanding information architecture on AgenticOS! Clean distinction between human review and autonomous agent loops.',
      timestamp: '2 hours ago',
    },
    {
      id: 'c2',
      author: 'Senior UX Researcher',
      avatarColor: '#14AE5C',
      x: 1540,
      y: 720,
      text: 'The 100-meter doorstep dropoff breakdown in Last Mile solves a massive real-world pain point.',
      timestamp: 'Yesterday',
    },
    {
      id: 'c3',
      author: 'Clinical Informatics Lead',
      avatarColor: '#00BFA5',
      x: 2540,
      y: 60,
      text: 'The 3-tier clinical warning hierarchy in Pharmaflow eliminates modal fatigue brilliantly.',
      timestamp: '3 days ago',
    },
  ]);

  // Handle adding a new comment
  const handleAddComment = (newComment: Omit<CanvasComment, 'id' | 'timestamp'>) => {
    const commentWithMeta: CanvasComment = {
      ...newComment,
      id: `c_${Date.now()}`,
      timestamp: 'Just now',
    };
    setComments((prev) => [...prev, commentWithMeta]);
  };

  // Handle resolving a comment
  const handleResolveComment = (id: string) => {
    setComments((prev) => prev.filter((c) => c.id !== id));
  };

  // Tool selection handler
  const handleSelectTool = (tool: ToolType) => {
    setActiveTool(tool);
    if (tool === 'shape') {
      setTokensInitialTab('tokens');
      setIsTokensOpen(true);
    } else if (tool === 'text') {
      setTokensInitialTab('typography');
      setIsTokensOpen(true);
    }
  };

  // Global Keyboard Shortcuts (Figma-inspired)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Don't intercept if user is typing in form inputs
      if (['INPUT', 'TEXTAREA', 'SELECT'].includes((e.target as HTMLElement)?.tagName)) {
        return;
      }

      switch (e.key.toLowerCase()) {
        case 'v':
          setActiveTool('move');
          break;
        case 'h':
          setActiveTool('hand');
          break;
        case 'f':
          setActiveTool('frame');
          // Select first project or open quick jump
          if (projectsData.length > 0) {
            setSelectedProject(projectsData[0]);
          }
          break;
        case 'r':
          setTokensInitialTab('tokens');
          setIsTokensOpen((prev) => !prev);
          break;
        case 't':
          setTokensInitialTab('typography');
          setIsTokensOpen((prev) => !prev);
          break;
        case 'c':
          setActiveTool((prev) => (prev === 'comment' ? 'move' : 'comment'));
          break;
        case 'a':
          setIsAboutOpen((prev) => !prev);
          break;
        case 'escape':
          if (caseStudyProject) setCaseStudyProject(null);
          else if (isAboutOpen) setIsAboutOpen(false);
          else if (isContactOpen) setIsContactOpen(false);
          else if (isTokensOpen) setIsTokensOpen(false);
          else setSelectedProject(null);
          break;
        default:
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [caseStudyProject, isAboutOpen, isContactOpen, isTokensOpen]);

  // Next / Previous Project in Case Study
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

  return (
    <div className="w-screen h-screen overflow-hidden flex flex-col bg-[#F7F8FA] dark:bg-[#18181B] text-[#1E1E1E] dark:text-[#E0E0E0] select-none font-sans">
      
      {/* Top Application Bar */}
      <TopBar
        zoom={zoom}
        onZoomChange={setZoom}
        onResetView={() => setZoom(1.0)}
        isDarkMode={isDarkMode}
        onToggleDarkMode={() => setIsDarkMode(!isDarkMode)}
        onOpenAbout={() => setIsAboutOpen(true)}
        onOpenContact={() => setIsContactOpen(true)}
        onScrollToProjects={() => {
          setViewMode('canvas');
          if (projectsData.length > 0) {
            setSelectedProject(projectsData[0]);
          }
        }}
        onScrollToHero={() => {
          setViewMode('canvas');
          setSelectedProject(null);
        }}
        viewMode={viewMode}
        onToggleViewMode={() => setViewMode(viewMode === 'canvas' ? 'linear' : 'canvas')}
        activeSection={selectedProject ? selectedProject.title : 'Canvas'}
      />

      {/* Main Workspace Body */}
      <div className="flex-1 relative overflow-hidden">
        {viewMode === 'canvas' ? (
          <>
            {/* Floating Left Toolbar */}
            <LeftToolbar
              activeTool={activeTool}
              onSelectTool={handleSelectTool}
              commentCount={comments.length}
            />

            {/* Central Infinite Canvas */}
            <InfiniteCanvas
              projects={projectsData}
              selectedProject={selectedProject}
              onSelectProject={setSelectedProject}
              onOpenCaseStudy={(proj) => setCaseStudyProject(proj)}
              activeTool={activeTool}
              zoom={zoom}
              onZoomChange={setZoom}
              onResetView={() => setZoom(1.0)}
              onOpenAbout={() => setIsAboutOpen(true)}
              onOpenContact={() => setIsContactOpen(true)}
              comments={comments}
              onAddComment={handleAddComment}
              onResolveComment={handleResolveComment}
            />

            {/* Floating Right Properties Panel */}
            <PropertiesPanel
              selectedProject={selectedProject}
              onClose={() => setSelectedProject(null)}
              onOpenCaseStudy={(proj) => setCaseStudyProject(proj)}
              isCollapsed={isPropertiesCollapsed}
              onToggleCollapse={() => setIsPropertiesCollapsed(!isPropertiesCollapsed)}
              allProjects={projectsData}
              onSelectProject={(proj) => setSelectedProject(proj)}
              zoom={zoom}
            />
          </>
        ) : (
          /* Linear / Mobile-Friendly Presentation View */
          <LinearPortfolioView
            projects={projectsData}
            onOpenCaseStudy={(proj) => setCaseStudyProject(proj)}
            onOpenAbout={() => setIsAboutOpen(true)}
            onOpenContact={() => setIsContactOpen(true)}
          />
        )}
      </div>

      {/* MODALS & FLOATING EXPERIENCES */}
      
      {/* 1. Case Study Detailed Modal */}
      <CaseStudyModal
        project={caseStudyProject}
        onClose={() => setCaseStudyProject(null)}
        onNextProject={handleNextProject}
        onPrevProject={handlePrevProject}
      />

      {/* 2. About Me Window */}
      <AboutWindow
        isOpen={isAboutOpen}
        onClose={() => setIsAboutOpen(false)}
        onOpenContact={() => setIsContactOpen(true)}
      />

      {/* 3. Contact Window */}
      <ContactWindow
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />

      {/* 4. Design Tokens & Typography Inspector */}
      <DesignTokensModal
        isOpen={isTokensOpen}
        onClose={() => setIsTokensOpen(false)}
        initialTab={tokensInitialTab}
      />
    </div>
  );
};

export default App;

