import React from 'react';
import { 
  Palette, 
  Code2, 
  Sparkles, 
  Layers, 
  Wrench,
  CheckCircle2
} from 'lucide-react';
import {
  FigmaIcon,
  PhotoshopIcon,
  IllustratorIcon,
  AfterEffectsIcon,
  PremiereProIcon,
  Html5Icon,
  Css3Icon,
  JavaScriptIcon,
  ReactIcon,
  NodejsIcon,
  JavaIcon,
  PythonIcon,
  CppIcon,
  SqlIcon,
  MongoDbIcon,
  DaVinciResolveIcon,
  CapCutIcon,
  WixIcon,
} from '../icons/ToolIcons';

interface ToolItem {
  name: string;
  category: string;
  icon: React.FC<{ className?: string }>;
  tagline?: string;
}

export const SkillsSection: React.FC = () => {
  const categories = [
    {
      id: 'design',
      title: 'Design Tools',
      badge: 'UI/UX & Prototyping',
      accentColor: '#0D99FF',
      icon: <Layers size={18} className="text-[#0D99FF]" />,
      description: 'Industry standard applications for high-fidelity interface design, design systems, and vector mastery.',
      tools: [
        { name: 'Figma', category: 'design', icon: FigmaIcon },
        { name: 'Adobe Photoshop', category: 'design', icon: PhotoshopIcon },
        { name: 'Adobe Illustrator', category: 'design', icon: IllustratorIcon },
        { name: 'Adobe After Effects', category: 'design', icon: AfterEffectsIcon },
        { name: 'Adobe Premiere Pro', category: 'design', icon: PremiereProIcon },
      ],
    },
    {
      id: 'development',
      title: 'Development',
      badge: 'Frontend & Architecture',
      accentColor: '#14AE5C',
      icon: <Code2 size={18} className="text-[#14AE5C]" />,
      description: 'Languages, modern frameworks, and database architectures for translating designs into responsive code.',
      tools: [
        { name: 'HTML5', category: 'development', icon: Html5Icon },
        { name: 'CSS3', category: 'development', icon: Css3Icon },
        { name: 'JavaScript', category: 'development', icon: JavaScriptIcon },
        { name: 'React', category: 'development', icon: ReactIcon },
        { name: 'Node.js', category: 'development', icon: NodejsIcon },
        { name: 'Java', category: 'development', icon: JavaIcon },
        { name: 'Python', category: 'development', icon: PythonIcon },
        { name: 'C++', category: 'development', icon: CppIcon },
        { name: 'SQL', category: 'development', icon: SqlIcon },
        { name: 'MongoDB', category: 'development', icon: MongoDbIcon },
      ],
    },
    {
      id: 'creative',
      title: 'Creative Tools',
      badge: 'Motion & Web Publishing',
      accentColor: '#9747FF',
      icon: <Palette size={18} className="text-[#9747FF]" />,
      description: 'Color grading, video editing, and rapid web publishing suites for dynamic brand storytelling.',
      tools: [
        { name: 'DaVinci Resolve', category: 'creative', icon: DaVinciResolveIcon },
        { name: 'CapCut', category: 'creative', icon: CapCutIcon },
        { name: 'Wix', category: 'creative', icon: WixIcon },
      ],
    },
  ];

  return (
    <section id="skills" className="py-16 sm:py-24 border-b border-gray-200/80 dark:border-zinc-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-6 border-b border-gray-200 dark:border-zinc-800">
          <div>
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-[#0D99FF]/10 text-[#0D99FF] text-xs font-mono font-medium mb-3">
              <Wrench size={13} />
              <span>02 / Tools & Technologies</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#1E1E1E] dark:text-white">
              Tools & Technologies
            </h2>
            <p className="text-sm sm:text-base text-gray-500 dark:text-gray-400 mt-2 max-w-2xl">
              Recognizable application and engineering logos across interface design, code architecture, and creative multimedia.
            </p>
          </div>

          <div className="inline-flex items-center gap-2 text-xs font-mono text-gray-600 dark:text-gray-400 bg-gray-100 dark:bg-zinc-800/90 px-3 py-1.5 rounded-lg whitespace-nowrap self-start sm:self-auto border border-gray-200/60 dark:border-zinc-700/60">
            <CheckCircle2 size={13} className="text-[#14AE5C]" />
            <span>Official Brand Logos • 18 Applications</span>
          </div>
        </div>

        {/* Categories Stack */}
        <div className="space-y-10 sm:space-y-12">
          {categories.map((cat) => (
            <div 
              key={cat.id}
              className="bg-gray-50/50 dark:bg-[#18181B]/50 border border-gray-200/80 dark:border-zinc-800 rounded-2xl sm:rounded-3xl p-5 sm:p-7 space-y-5"
            >
              {/* Category Subheader */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-gray-200/60 dark:border-zinc-800/60">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-white dark:bg-zinc-800 flex items-center justify-center border border-gray-200 dark:border-zinc-700 shadow-2xs">
                    {cat.icon}
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold tracking-tight text-gray-900 dark:text-white flex items-center gap-2">
                      <span>{cat.title}</span>
                      <span 
                        className="text-[10px] font-mono font-medium px-2 py-0.5 rounded-full uppercase tracking-wider"
                        style={{
                          color: cat.accentColor,
                          backgroundColor: `${cat.accentColor}15`,
                          border: `1px solid ${cat.accentColor}30`,
                        }}
                      >
                        {cat.tools.length} Tools
                      </span>
                    </h3>
                  </div>
                </div>
                <p className="text-xs text-gray-500 dark:text-gray-400 sm:text-right max-w-md">
                  {cat.description}
                </p>
              </div>

              {/* Icon Grid: 3 mobile, 4 tablet, 5-6 desktop */}
              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-3 sm:gap-4 lg:gap-5">
                {cat.tools.map((tool) => {
                  const Icon = tool.icon;
                  return (
                    <div
                      key={tool.name}
                      title={tool.name}
                      className="group flex flex-col items-center justify-center p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-white dark:bg-[#202023] border border-gray-200/90 dark:border-zinc-800 hover:border-[#0D99FF] dark:hover:border-[#0D99FF] shadow-figma-card hover:shadow-figma-floating transition-all duration-200 cursor-default text-center relative select-none"
                    >
                      {/* App Icon Container (~64-76px on desktop) */}
                      <div className="w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center p-1.5 sm:p-2 rounded-xl bg-gray-50 dark:bg-zinc-900/80 group-hover:scale-110 group-hover:-translate-y-0.5 transition-all duration-200 ease-out">
                        <Icon className="w-8 h-8 sm:w-9 sm:h-9 object-contain filter drop-shadow-2xs" />
                      </div>

                      {/* Tool Name Always Visible Underneath */}
                      <span className="mt-2.5 text-[11px] sm:text-xs font-medium text-gray-700 dark:text-gray-300 w-full truncate px-1 group-hover:text-[#0D99FF] dark:group-hover:text-[#0D99FF] transition-colors leading-tight">
                        {tool.name}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
