import React from 'react';
import { Project } from '../../types';
import { ArrowUpRight, Sparkles, CheckCircle2, ChevronRight, Layers, ExternalLink } from 'lucide-react';
import { aboutData } from '../../data/about';

interface LinearPortfolioViewProps {
  projects: Project[];
  onOpenCaseStudy: (project: Project) => void;
  onOpenAbout: () => void;
  onOpenContact: () => void;
}

export const LinearPortfolioView: React.FC<LinearPortfolioViewProps> = ({
  projects,
  onOpenCaseStudy,
  onOpenAbout,
  onOpenContact,
}) => {
  return (
    <div className="w-full min-h-[calc(100vh-3rem)] overflow-y-auto bg-[#F7F8FA] dark:bg-[#18181B] text-[#1E1E1E] dark:text-[#E0E0E0] p-4 sm:p-8 md:p-12 transition-colors select-text">
      <div className="max-w-5xl mx-auto space-y-16">
        
        {/* Hero Banner in Linear Mode */}
        <section className="bg-white dark:bg-[#202023] border border-[#E5E7EB] dark:border-[#2E2E2E] rounded-2xl p-6 sm:p-10 shadow-figma-card relative overflow-hidden">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-full bg-[#14AE5C] pulse-badge" />
            <span className="text-xs font-semibold text-[#14AE5C]">Open to Opportunities</span>
            <span className="text-gray-400">•</span>
            <span className="text-xs text-gray-500">UI/UX Designer & Technologist</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#1E1E1E] dark:text-white leading-tight">
            Designing Digital Experiences That Feel{' '}
            <span className="text-[#0D99FF]">Effortless.</span>
          </h1>

          <p className="text-base sm:text-lg text-[#4B5563] dark:text-[#A1A1AA] leading-relaxed max-w-2xl mt-4">
            {aboutData.bio}
          </p>

          <div className="flex flex-wrap items-center gap-3 mt-6">
            <button
              onClick={onOpenContact}
              className="bg-[#0D99FF] hover:bg-[#0085EB] text-white px-5 py-2.5 rounded-xl font-semibold text-xs shadow-sm transition-all"
            >
              Let's Talk
            </button>
            <button
              onClick={onOpenAbout}
              className="border border-[#E5E7EB] dark:border-[#383838] bg-[#F9FAFB] dark:bg-[#2A2A2A] text-[#1E1E1E] dark:text-white px-5 py-2.5 rounded-xl font-medium text-xs transition-all"
            >
              About Rohit
            </button>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="space-y-6">
          <div className="flex items-center justify-between pb-3 border-b border-gray-200 dark:border-zinc-800">
            <div>
              <h2 className="text-2xl font-bold text-[#1E1E1E] dark:text-white">
                Selected Work & Case Studies
              </h2>
              <p className="text-xs text-gray-500 mt-0.5">
                4 In-Depth Product Design & Systems Case Studies
              </p>
            </div>
            <span className="text-xs font-mono text-[#0D99FF] bg-[#0D99FF]/10 px-2.5 py-1 rounded-full">
              {projects.length} Projects
            </span>
          </div>

          <div className="grid gap-6">
            {projects.map((project) => (
              <div
                key={project.id}
                onClick={() => onOpenCaseStudy(project)}
                className="bg-white dark:bg-[#202023] border border-[#E5E7EB] dark:border-[#2E2E2E] hover:border-[#0D99FF] rounded-2xl p-6 shadow-figma-card hover:shadow-figma-floating transition-all cursor-pointer group flex flex-col md:flex-row justify-between gap-6"
              >
                <div className="space-y-3 flex-1">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono font-bold text-[#0D99FF] bg-[#0D99FF]/10 px-2 py-0.5 rounded">
                      #{project.number}
                    </span>
                    <span className="text-xs text-gray-500">{project.category}</span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-[#1E1E1E] dark:text-white group-hover:text-[#0D99FF] transition-colors flex items-center gap-2">
                    <span>{project.title}</span>
                    <ArrowUpRight size={18} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </h3>

                  {project.tagline && (
                    <p className="text-xs font-semibold text-[#0D99FF] italic">
                      “{project.tagline}”
                    </p>
                  )}

                  <p className="text-xs sm:text-sm text-[#4B5563] dark:text-[#A1A1AA] leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap items-center gap-1.5 pt-2">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="text-[10px] font-medium bg-gray-100 dark:bg-zinc-800 text-gray-600 dark:text-gray-300 px-2.5 py-1 rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="md:w-64 flex flex-col justify-between border-t md:border-t-0 md:border-l border-gray-100 dark:border-zinc-800 pt-4 md:pt-0 md:pl-6 space-y-4">
                  <div>
                    <span className="text-[10px] font-mono uppercase text-gray-400 block mb-1">
                      Deliverables
                    </span>
                    <ul className="space-y-1">
                      {project.highlights.slice(0, 4).map((h, i) => (
                        <li key={i} className="text-xs text-[#4B5563] dark:text-[#A1A1AA] flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: project.accentColor }} />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-col gap-2">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onOpenCaseStudy(project);
                      }}
                      className="w-full bg-[#0D99FF] hover:bg-[#0085EB] text-white py-2 rounded-xl text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors shadow-xs"
                    >
                      <span>Read Case Study</span>
                      <ChevronRight size={14} />
                    </button>

                    {project.behanceUrl && (
                      <a
                        href={project.behanceUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="w-full bg-[#0057FF]/10 hover:bg-[#0057FF]/20 text-[#0057FF] dark:text-[#38bdf8] border border-[#0057FF]/20 py-2 rounded-xl text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors"
                      >
                        <span className="font-bold text-[10px] bg-[#0057FF] text-white px-1 rounded-xs">Bē</span>
                        <span>View on Behance</span>
                        <ExternalLink size={13} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

