import React from 'react';
import { 
  Sliders, 
  Palette, 
  Code2, 
  Sparkles, 
  Layers 
} from 'lucide-react';

export const SkillsSection: React.FC = () => {
  const skillCategories = [
    {
      title: 'Design',
      categoryBadge: 'UI/UX & Systems',
      accentColor: '#0D99FF',
      icon: <Layers size={18} className="text-[#0D99FF]" />,
      skills: [
        'Figma',
        'Adobe Photoshop',
        'Adobe Illustrator',
        'UI/UX Design',
        'Wireframing',
        'Prototyping',
      ],
    },
    {
      title: 'Development',
      categoryBadge: 'Frontend & Logic',
      accentColor: '#14AE5C',
      icon: <Code2 size={18} className="text-[#14AE5C]" />,
      skills: [
        'HTML',
        'CSS',
        'JavaScript',
        'React',
        'Java',
        'SQL',
      ],
    },
    {
      title: 'Creative',
      categoryBadge: 'Brand & Motion',
      accentColor: '#9747FF',
      icon: <Palette size={18} className="text-[#9747FF]" />,
      skills: [
        'Graphic Design',
        'Branding',
        'Visual Design',
        'Motion Design',
      ],
    },
  ];

  return (
    <section id="skills" className="py-16 sm:py-24 border-b border-gray-200/80 dark:border-zinc-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-6 border-b border-gray-200 dark:border-zinc-800">
          <div>
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-[#0D99FF]/10 text-[#0D99FF] text-xs font-mono font-medium mb-3">
              <Sliders size={13} />
              <span>Skills & Toolkit</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#1E1E1E] dark:text-white">
              Categorized Skills & Tools
            </h2>
            <p className="text-sm sm:text-base text-gray-500 dark:text-gray-400 mt-2 max-w-2xl">
              Practical capabilities across design architecture, engineering languages, and visual branding.
            </p>
          </div>

          <div className="text-xs font-mono text-gray-400 bg-gray-100 dark:bg-zinc-800 px-3 py-1.5 rounded-lg whitespace-nowrap self-start sm:self-auto">
            <span>No arbitrary percentage bars • Real skills only</span>
          </div>
        </div>

        {/* 3 Categorized Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {skillCategories.map((cat) => (
            <div
              key={cat.title}
              className="bg-white dark:bg-[#202023] p-6 sm:p-7 rounded-2xl border border-gray-200 dark:border-zinc-800 shadow-figma-card hover:shadow-figma-floating transition-all flex flex-col justify-between space-y-6"
            >
              {/* Category Header */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-gray-100 dark:bg-zinc-800 flex items-center justify-center">
                    {cat.icon}
                  </div>
                  <span 
                    className="text-[10px] font-mono font-medium px-2 py-0.5 rounded-full"
                    style={{
                      color: cat.accentColor,
                      backgroundColor: `${cat.accentColor}15`,
                      border: `1px solid ${cat.accentColor}30`,
                    }}
                  >
                    {cat.categoryBadge}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  {cat.title}
                </h3>
              </div>

              {/* Categorized Visual Chips */}
              <div className="flex flex-wrap gap-2 pt-2">
                {cat.skills.map((skill) => (
                  <div
                    key={skill}
                    className="inline-flex items-center gap-2 px-3 py-2 rounded-xl bg-gray-50 dark:bg-zinc-900/90 border border-gray-200/80 dark:border-zinc-800 hover:border-[#0D99FF] dark:hover:border-[#0D99FF] text-xs font-semibold text-gray-800 dark:text-gray-200 transition-colors shadow-2xs group cursor-default"
                  >
                    <span 
                      className="w-2 h-2 rounded-full transition-transform group-hover:scale-125"
                      style={{ backgroundColor: cat.accentColor }} 
                    />
                    <span>{skill}</span>
                  </div>
                ))}
              </div>

              {/* Category Footer Token Tag */}
              <div className="pt-4 border-t border-gray-100 dark:border-zinc-800/80 text-[11px] font-mono text-gray-400 flex items-center justify-between">
                <span>{cat.skills.length} competencies</span>
                <span className="text-[#0D99FF]">Verified Stack</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
