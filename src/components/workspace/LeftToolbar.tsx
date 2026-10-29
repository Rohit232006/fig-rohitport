import React, { useState } from 'react';
import { 
  MousePointer2, 
  Hand, 
  Frame, 
  Square, 
  Type, 
  MessageSquare,
  Sparkles,
  Layers,
  HelpCircle
} from 'lucide-react';
import { ToolType } from '../../types';

interface LeftToolbarProps {
  activeTool: ToolType;
  onSelectTool: (tool: ToolType) => void;
  commentCount: number;
  onToggleLayers?: () => void;
  showLayers?: boolean;
}

interface ToolDefinition {
  id: ToolType;
  name: string;
  shortcut: string;
  icon: React.ReactNode;
  description: string;
}

export const LeftToolbar: React.FC<LeftToolbarProps> = ({
  activeTool,
  onSelectTool,
  commentCount,
  onToggleLayers,
  showLayers,
}) => {
  const [hoveredTool, setHoveredTool] = useState<ToolType | null>(null);

  const tools: ToolDefinition[] = [
    {
      id: 'move',
      name: 'Move Tool',
      shortcut: 'V',
      icon: <MousePointer2 size={18} className="transform -rotate-12" />,
      description: 'Select project frames and inspect properties'
    },
    {
      id: 'hand',
      name: 'Hand Tool',
      shortcut: 'H',
      icon: <Hand size={18} />,
      description: 'Pan around the infinite design canvas'
    },
    {
      id: 'frame',
      name: 'Frame Tool',
      shortcut: 'F',
      icon: <Frame size={18} />,
      description: 'Inspect frame dimensions & jump to layout zones'
    },
    {
      id: 'shape',
      name: 'Design Tokens',
      shortcut: 'R',
      icon: <Square size={18} />,
      description: 'Inspect color tokens & UI component primitives'
    },
    {
      id: 'text',
      name: 'Typography Tool',
      shortcut: 'T',
      icon: <Type size={18} />,
      description: 'Inspect typography scale & font hierarchies'
    },
    {
      id: 'comment',
      name: 'Comment Tool',
      shortcut: 'C',
      icon: <MessageSquare size={18} />,
      description: 'Click anywhere on canvas to drop a feedback pin'
    }
  ];

  return (
    <aside className="absolute left-4 top-16 z-20 flex flex-col gap-1.5 select-none">
      {/* Main Tools Container */}
      <div className="bg-white/95 dark:bg-[#252525]/95 backdrop-blur-md border border-[#E5E7EB] dark:border-[#383838] p-1.5 rounded-xl shadow-figma-floating flex flex-col gap-1">
        {tools.map((tool) => {
          const isActive = activeTool === tool.id;
          const isHovered = hoveredTool === tool.id;

          return (
            <div key={tool.id} className="relative group">
              <button
                onClick={() => onSelectTool(tool.id)}
                onMouseEnter={() => setHoveredTool(tool.id)}
                onMouseLeave={() => setHoveredTool(null)}
                aria-label={`${tool.name} (${tool.shortcut})`}
                className={`w-9 h-9 rounded-lg flex items-center justify-center transition-all relative ${
                  isActive
                    ? 'bg-[#0D99FF] text-white shadow-sm'
                    : 'text-[#4B5563] dark:text-[#A0A0A0] hover:text-[#1E1E1E] dark:hover:text-white hover:bg-[#F3F4F6] dark:hover:bg-[#333]'
                }`}
              >
                {tool.icon}

                {/* Comment badge count */}
                {tool.id === 'comment' && commentCount > 0 && (
                  <span className={`absolute -top-1 -right-1 text-[9px] font-bold rounded-full w-4 h-4 flex items-center justify-center ${
                    isActive ? 'bg-white text-[#0D99FF]' : 'bg-[#0D99FF] text-white'
                  }`}>
                    {commentCount}
                  </span>
                )}
              </button>

              {/* Tooltip */}
              {isHovered && (
                <div className="absolute left-full ml-3 top-1/2 -translate-y-1/2 bg-[#1E1E1E] text-white text-xs px-2.5 py-1.5 rounded-lg shadow-xl whitespace-nowrap z-50 figma-tooltip pointer-events-none">
                  <div className="flex items-center gap-2">
                    <span className="font-medium">{tool.name}</span>
                    <span className="text-[10px] bg-white/20 px-1.5 py-0.5 rounded font-mono text-gray-200">
                      {tool.shortcut}
                    </span>
                  </div>
                  <p className="text-[11px] text-gray-300 font-normal mt-0.5 max-w-[200px] whitespace-normal">
                    {tool.description}
                  </p>
                </div>
              )}
            </div>
          );
        })}

        {/* Separator */}
        <div className="h-px bg-[#E5E7EB] dark:bg-[#383838] my-1" />

        {/* Layers toggle button */}
        {onToggleLayers && (
          <div className="relative group">
            <button
              onClick={onToggleLayers}
              aria-label="Toggle Layers List"
              className={`w-9 h-9 rounded-lg flex items-center justify-center transition-all ${
                showLayers
                  ? 'bg-[#0D99FF]/15 text-[#0D99FF]'
                  : 'text-[#4B5563] dark:text-[#A0A0A0] hover:text-[#1E1E1E] dark:hover:text-white hover:bg-[#F3F4F6] dark:hover:bg-[#333]'
              }`}
              title="Toggle Layers"
            >
              <Layers size={18} />
            </button>
          </div>
        )}
      </div>

      {/* Helpful Hint Pill */}
      <div className="hidden lg:flex items-center gap-1.5 bg-white/90 dark:bg-[#252525]/90 backdrop-blur-sm border border-[#E5E7EB] dark:border-[#383838] px-2.5 py-1.5 rounded-lg shadow-sm text-[11px] text-[#6B7280] dark:text-[#999] max-w-[140px]">
        <HelpCircle size={13} className="text-[#0D99FF] flex-shrink-0" />
        <span>Space + Drag to pan canvas</span>
      </div>
    </aside>
  );
};

