import React, { useRef, useState, useEffect, useCallback } from 'react';
import { HeroCanvasSection } from './HeroCanvasSection';
import { ProjectFrame } from './ProjectFrame';
import { InteractiveComments } from './InteractiveComments';
import { Project, ToolType, CanvasComment } from '../../types';
import { MousePointer2, Compass, Move, Maximize2, ZoomIn, ZoomOut, RotateCcw } from 'lucide-react';

interface InfiniteCanvasProps {
  projects: Project[];
  selectedProject: Project | null;
  onSelectProject: (project: Project | null) => void;
  onOpenCaseStudy: (project: Project) => void;
  activeTool: ToolType;
  zoom: number;
  onZoomChange: (newZoom: number) => void;
  onResetView: () => void;
  onOpenAbout: () => void;
  onOpenContact: () => void;
  comments: CanvasComment[];
  onAddComment: (comment: Omit<CanvasComment, 'id' | 'timestamp'>) => void;
  onResolveComment: (id: string) => void;
}

export const InfiniteCanvas: React.FC<InfiniteCanvasProps> = ({
  projects,
  selectedProject,
  onSelectProject,
  onOpenCaseStudy,
  activeTool,
  zoom,
  onZoomChange,
  onResetView,
  onOpenAbout,
  onOpenContact,
  comments,
  onAddComment,
  onResolveComment,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Pan state
  const [pan, setPan] = useState<{ x: number; y: number }>({ x: 60, y: 40 });
  const [isDragging, setIsDragging] = useState(false);
  const dragStartRef = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
  const panStartRef = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
  const isSpacePressedRef = useRef(false);

  // Visitor collaborative cursor simulation
  const [visitorCursor, setVisitorCursor] = useState<{ x: number; y: number } | null>(null);

  // Handle Spacebar key for panning like Figma
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.code === 'Space' && !e.repeat && document.activeElement?.tagName !== 'INPUT' && document.activeElement?.tagName !== 'TEXTAREA') {
        isSpacePressedRef.current = true;
        if (containerRef.current) {
          containerRef.current.style.cursor = 'grab';
        }
      }
    };

    const handleKeyUp = (e: KeyboardEvent) => {
      if (e.code === 'Space') {
        isSpacePressedRef.current = false;
        if (containerRef.current) {
          containerRef.current.style.cursor = activeTool === 'hand' ? 'grab' : activeTool === 'comment' ? 'crosshair' : 'default';
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, [activeTool]);

  // Handle Mouse Down on Canvas
  const handleMouseDown = (e: React.MouseEvent) => {
    // If comment tool is active, place a comment
    if (activeTool === 'comment') {
      const rect = containerRef.current?.getBoundingClientRect();
      if (!rect) return;
      const canvasX = Math.round((e.clientX - rect.left - pan.x) / zoom);
      const canvasY = Math.round((e.clientY - rect.top - pan.y) / zoom);

      const promptText = window.prompt("Add feedback note on canvas:", "Clean layout and strong visual hierarchy!");
      if (promptText && promptText.trim()) {
        onAddComment({
          author: 'Visitor (Reviewer)',
          avatarColor: '#0D99FF',
          x: canvasX,
          y: canvasY,
          text: promptText.trim(),
        });
      }
      return;
    }

    // Allow dragging if Hand tool, or Space pressed, or middle mouse, or left click on canvas background
    const isPanMode = activeTool === 'hand' || isSpacePressedRef.current || e.button === 1 || e.target === containerRef.current || (e.target as HTMLElement).classList.contains('canvas-background-plane');

    if (isPanMode) {
      setIsDragging(true);
      dragStartRef.current = { x: e.clientX, y: e.clientY };
      panStartRef.current = { ...pan };
      if (containerRef.current) {
        containerRef.current.style.cursor = 'grabbing';
      }
    }
  };

  // Handle Mouse Move on Canvas
  const handleMouseMove = (e: React.MouseEvent) => {
    // Track cursor for collaborator simulation
    const rect = containerRef.current?.getBoundingClientRect();
    if (rect) {
      setVisitorCursor({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    }

    if (!isDragging) return;
    const dx = e.clientX - dragStartRef.current.x;
    const dy = e.clientY - dragStartRef.current.y;
    setPan({
      x: panStartRef.current.x + dx,
      y: panStartRef.current.y + dy,
    });
  };

  // Handle Mouse Up
  const handleMouseUp = () => {
    if (isDragging) {
      setIsDragging(false);
      if (containerRef.current) {
        containerRef.current.style.cursor = activeTool === 'hand' ? 'grab' : activeTool === 'comment' ? 'crosshair' : 'default';
      }
    }
  };

  // Touch support for mobile canvas panning
  const touchStartRef = useRef<{ x: number; y: number } | null>(null);
  const touchPanStartRef = useRef<{ x: number; y: number }>({ x: 0, y: 0 });

  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    if (e.touches.length === 1) {
      const touch = e.touches[0];
      touchStartRef.current = { x: touch.clientX, y: touch.clientY };
      touchPanStartRef.current = { ...pan };
    }
  }, [pan]);

  const handleTouchMove = useCallback((e: React.TouchEvent) => {
    if (e.touches.length === 1 && touchStartRef.current) {
      e.preventDefault();
      const touch = e.touches[0];
      const dx = touch.clientX - touchStartRef.current.x;
      const dy = touch.clientY - touchStartRef.current.y;
      setPan({
        x: touchPanStartRef.current.x + dx,
        y: touchPanStartRef.current.y + dy,
      });
    }
  }, []);

  const handleTouchEnd = useCallback(() => {
    touchStartRef.current = null;
  }, []);

  // Refs to keep the latest zoom/pan available inside the native wheel listener
  const zoomRef = useRef(zoom);
  const panRef = useRef(pan);
  useEffect(() => { zoomRef.current = zoom; }, [zoom]);
  useEffect(() => { panRef.current = pan; }, [pan]);

  // Attach wheel handler as non-passive so preventDefault() actually works
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();

      const currentZoom = zoomRef.current;
      const currentPan = panRef.current;

      if (e.ctrlKey || e.metaKey) {
        // Zoom towards mouse pointer
        const zoomFactor = e.deltaY < 0 ? 1.08 : 0.92;
        const newZoom = Math.min(Math.max(currentZoom * zoomFactor, 0.35), 2.0);

        const rect = el.getBoundingClientRect();
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;

        const newPanX = mouseX - (mouseX - currentPan.x) * (newZoom / currentZoom);
        const newPanY = mouseY - (mouseY - currentPan.y) * (newZoom / currentZoom);

        onZoomChange(newZoom);
        setPan({ x: newPanX, y: newPanY });
      } else {
        // Regular scroll / two-finger trackpad → pan the canvas
        setPan((prev) => ({
          x: prev.x - e.deltaX * 1.2,
          y: prev.y - e.deltaY * 1.2,
        }));
      }
    };

    el.addEventListener('wheel', handleWheel, { passive: false });
    return () => el.removeEventListener('wheel', handleWheel);
  }, [onZoomChange]);

  // Programmatic pan to projects frame
  const handlePanToProjects = () => {
    setPan({ x: -850, y: 40 });
    onZoomChange(0.75);
  };

  // Programmatic reset view
  const handleResetToHero = () => {
    setPan({ x: 60, y: 40 });
    onZoomChange(1.0);
    onSelectProject(null);
  };

  return (
    <div
      ref={containerRef}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      className={`relative w-full h-[calc(100vh-3rem)] overflow-hidden figma-canvas-grid ${
        activeTool === 'hand'
          ? 'cursor-canvas-hand'
          : activeTool === 'comment'
          ? 'cursor-canvas-comment'
          : 'cursor-default'
      }`}
    >
      {/* Background click target to deselect */}
      <div
        className="canvas-background-plane absolute inset-0 z-0"
        onClick={() => onSelectProject(null)}
      />

      {/* Transformable Canvas Surface */}
      <div
        style={{
          transform: `translate(${pan.x}px, ${pan.y}px) scale(${zoom})`,
          transformOrigin: '0 0',
          transition: isDragging ? 'none' : 'transform 0.15s cubic-bezier(0.16, 1, 0.3, 1)',
        }}
        className="absolute top-0 left-0 will-change-transform z-10"
      >
        {/* Frame 00: Hero Introduction */}
        <div style={{ position: 'absolute', left: '120px', top: '140px' }}>
          <HeroCanvasSection
            onExploreProjects={handlePanToProjects}
            onOpenAbout={onOpenAbout}
            onOpenContact={onOpenContact}
          />
        </div>

        {/* Frame 01 - 05: Projects */}
        {projects.map((project) => (
          <div
            key={project.id}
            style={{
              position: 'absolute',
              left: `${project.canvasPosition.x}px`,
              top: `${project.canvasPosition.y}px`,
            }}
          >
            {/* Project Frame Coordinates & Tag */}
            <div className="flex items-center gap-2 mb-2 px-1">
              <span
                className="text-[11px] font-mono font-medium px-2 py-0.5 rounded flex items-center gap-1.5"
                style={{
                  color: project.accentColor,
                  backgroundColor: `${project.accentColor}15`,
                  border: `1px solid ${project.accentColor}30`,
                }}
              >
                <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: project.accentColor }} />
                Frame: {project.number} / {project.title} ({project.dimensions.width} × {project.dimensions.height})
              </span>
              <span className="text-[11px] text-[#9E9E9E] font-mono">
                x: {project.canvasPosition.x}, y: {project.canvasPosition.y}
              </span>
            </div>

            <ProjectFrame
              project={project}
              isSelected={selectedProject?.id === project.id}
              onSelect={onSelectProject}
              onOpenCaseStudy={onOpenCaseStudy}
            />
          </div>
        ))}

        {/* Interactive Canvas Sticky Comments */}
        <InteractiveComments
          comments={comments}
          activeTool={activeTool}
          onAddComment={onAddComment}
          onResolveComment={onResolveComment}
        />
      </div>

      {/* Floating Canvas HUD / Controls (Bottom Left) */}
      <div className="absolute left-4 bottom-4 z-20 flex items-center gap-2 select-none">
        <div className="bg-white/95 dark:bg-[#252528]/95 backdrop-blur-md border border-[#E5E7EB] dark:border-[#383838] px-3 py-1.5 rounded-xl shadow-figma-floating flex items-center gap-3 text-xs text-gray-600 dark:text-gray-300">
          <button
            onClick={handleResetToHero}
            className="flex items-center gap-1.5 hover:text-[#0D99FF] transition-colors font-medium"
            title="Reset Pan & Zoom"
          >
            <RotateCcw size={13} />
            <span className="hidden sm:inline">Reset View</span>
          </button>

          <div className="h-3 w-px bg-gray-200 dark:bg-zinc-700" />

          <button
            onClick={() => onZoomChange(Math.max(0.35, zoom - 0.15))}
            className="hover:text-[#0D99FF] transition-colors p-0.5"
            title="Zoom Out"
          >
            <ZoomOut size={14} />
          </button>

          <span className="font-mono text-[11px] font-semibold min-w-[36px] text-center">
            {Math.round(zoom * 100)}%
          </span>

          <button
            onClick={() => onZoomChange(Math.min(2.0, zoom + 0.15))}
            className="hover:text-[#0D99FF] transition-colors p-0.5"
            title="Zoom In"
          >
            <ZoomIn size={14} />
          </button>
        </div>

        {/* Quick Frame Jump Pill */}
        <div className="hidden md:flex items-center gap-1 bg-white/95 dark:bg-[#252528]/95 backdrop-blur-md border border-[#E5E7EB] dark:border-[#383838] p-1 rounded-xl shadow-figma-floating text-xs">
          <button
            onClick={handleResetToHero}
            className="px-2.5 py-1 rounded-lg hover:bg-gray-100 dark:hover:bg-[#333] text-gray-700 dark:text-gray-300 font-medium text-[11px]"
          >
            Intro
          </button>
          {projects.map((p) => (
            <button
              key={p.id}
              onClick={() => {
                setPan({
                  x: -(p.canvasPosition.x * 0.75 - 100),
                  y: -(p.canvasPosition.y * 0.75 - 100),
                });
                onZoomChange(0.75);
                onSelectProject(p);
              }}
              className={`px-2 py-1 rounded-lg font-mono text-[10px] font-medium transition-colors ${
                selectedProject?.id === p.id
                  ? 'bg-[#0D99FF] text-white'
                  : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-[#333]'
              }`}
              title={p.title}
            >
              #{p.number}
            </button>
          ))}
        </div>
      </div>

      {/* Figma-Inspired Canvas Minimap (Bottom Right) */}
      <div className="hidden lg:block absolute right-4 bottom-4 z-20 select-none">
        <div className="bg-white/95 dark:bg-[#252528]/95 backdrop-blur-md border border-[#E5E7EB] dark:border-[#383838] p-2.5 rounded-xl shadow-figma-floating w-44">
          <div className="flex items-center justify-between text-[10px] text-gray-400 font-mono mb-1.5">
            <span>CANVAS MINIMAP</span>
            <span>3800 × 1800</span>
          </div>
          {/* Mini preview zone */}
          <div className="h-24 bg-gray-100 dark:bg-zinc-900 rounded-lg relative overflow-hidden border border-gray-200 dark:border-zinc-800">
            {/* Hero frame in minimap */}
            <div className="absolute left-[3%] top-[8%] w-[26%] h-[34%] bg-[#0D99FF]/20 border border-[#0D99FF]/40 rounded-xs" />
            
            {/* Project frames in minimap */}
            <div className="absolute left-[33%] top-[8%] w-[28%] h-[32%] bg-blue-500/20 border border-blue-500/40 rounded-xs" title="01 / AgenticOS" />
            <div className="absolute left-[33%] top-[46%] w-[28%] h-[32%] bg-green-500/20 border border-green-500/40 rounded-xs" title="02 / Last Mile" />
            <div className="absolute left-[65%] top-[8%] w-[28%] h-[32%] bg-teal-500/20 border border-teal-500/40 rounded-xs" title="03 / Pharmaflow" />
            <div className="absolute left-[65%] top-[46%] w-[28%] h-[32%] bg-purple-500/20 border border-purple-500/40 rounded-xs" title="04 / FitStart" />

            {/* Current Viewport Indicator Box */}
            <div
              style={{
                left: `${Math.max(0, Math.min(75, (-pan.x / 3800) * 100))}%`,
                top: `${Math.max(0, Math.min(65, (-pan.y / 1800) * 100))}%`,
                width: `${Math.min(35, (1 / zoom) * 20)}%`,
                height: `${Math.min(35, (1 / zoom) * 20)}%`,
              }}
              className="absolute border border-[#0D99FF] bg-[#0D99FF]/15 rounded-xs pointer-events-none transition-all duration-75"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

