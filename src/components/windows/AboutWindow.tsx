import React, { useState } from 'react';
import { 
  X, 
  Minus, 
  Download, 
  ExternalLink, 
  GraduationCap, 
  Briefcase, 
  Award, 
  FileText, 
  Sparkles, 
  CheckCircle2, 
  Compass,
  Code2,
  Palette,
  Layout,
  Terminal
} from 'lucide-react';
import { aboutData } from '../../data/about';

interface AboutWindowProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenContact: () => void;
}

export const AboutWindow: React.FC<AboutWindowProps> = ({
  isOpen,
  onClose,
  onOpenContact,
}) => {
  const [activeTab, setActiveTab] = useState<'skills' | 'experience' | 'philosophy'>('skills');

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-xs select-text animate-in fade-in duration-150">
      <div 
        onWheel={(e) => e.stopPropagation()}
        className="w-full max-w-2xl bg-white dark:bg-[#1E1E1E] text-[#1E1E1E] dark:text-[#E0E0E0] rounded-2xl shadow-figma-floating border border-[#E5E7EB] dark:border-[#383838] overflow-hidden flex flex-col max-h-[90vh]"
      >
        
        {/* Figma Window Titlebar */}
        <div className="px-4 py-3 bg-[#FAFAFA] dark:bg-[#252525] border-b border-[#E5E7EB] dark:border-[#383838] flex items-center justify-between select-none flex-shrink-0">
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded-full bg-[#FF5F56] border border-[#E0443E] inline-block cursor-pointer" onClick={onClose} />
              <span className="w-3 h-3 rounded-full bg-[#FFBD2E] border border-[#DEA123] inline-block cursor-pointer" onClick={onClose} />
              <span className="w-3 h-3 rounded-full bg-[#27C93F] border border-[#1AAB29] inline-block" />
            </div>
            <span className="text-xs font-mono font-medium text-gray-500 ml-2">
              Rohit_Muralidaran.component
            </span>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-[10px] font-mono text-[#0D99FF] bg-[#0D99FF]/10 px-2 py-0.5 rounded">
              Designer & Developer
            </span>
            <button
              onClick={onClose}
              className="p-1 rounded hover:bg-gray-200 dark:hover:bg-[#333] text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 transition-colors"
            >
              <X size={15} />
            </button>
          </div>
        </div>

        {/* Content Body */}
        <div className="flex-1 min-h-0 p-6 overflow-y-auto overscroll-contain space-y-6">
          
          {/* Profile Header */}
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 pb-4 border-b border-gray-100 dark:border-[#2C2C2C]">
            <img
              src={aboutData.avatarUrl}
              alt={aboutData.name}
              className="w-20 h-20 rounded-2xl object-cover border-2 border-[#0D99FF]/30 shadow-md"
              onError={(e) => {
                (e.target as HTMLElement).style.display = 'none';
              }}
            />
            <div className="text-center sm:text-left space-y-1">
              <div className="flex items-center justify-center sm:justify-start gap-2">
                <h2 className="text-xl font-bold text-[#1E1E1E] dark:text-white">
                  {aboutData.name}
                </h2>
                <span className="text-xs font-medium text-[#14AE5C] bg-[#14AE5C]/10 px-2 py-0.5 rounded-full">
                  {aboutData.status}
                </span>
              </div>
              <p className="text-xs text-[#0D99FF] font-medium">
                {aboutData.education} • {aboutData.location}
              </p>
              <p className="text-xs text-gray-600 dark:text-gray-300 leading-relaxed max-w-lg mt-1">
                {aboutData.bio}
              </p>
            </div>
          </div>

          {/* Navigation Sub-Tabs */}
          <div className="flex items-center gap-2 border-b border-gray-100 dark:border-[#2C2C2C] pb-2 text-xs font-medium">
            <button
              onClick={() => setActiveTab('skills')}
              className={`px-3 py-1.5 rounded-lg transition-colors ${
                activeTab === 'skills'
                  ? 'bg-[#0D99FF] text-white shadow-xs'
                  : 'text-gray-500 hover:bg-gray-100 dark:hover:bg-[#2C2C2C]'
              }`}
            >
              Skills & Tools
            </button>
            <button
              onClick={() => setActiveTab('experience')}
              className={`px-3 py-1.5 rounded-lg transition-colors ${
                activeTab === 'experience'
                  ? 'bg-[#0D99FF] text-white shadow-xs'
                  : 'text-gray-500 hover:bg-gray-100 dark:hover:bg-[#2C2C2C]'
              }`}
            >
              Academic & Leadership
            </button>
            <button
              onClick={() => setActiveTab('philosophy')}
              className={`px-3 py-1.5 rounded-lg transition-colors ${
                activeTab === 'philosophy'
                  ? 'bg-[#0D99FF] text-white shadow-xs'
                  : 'text-gray-500 hover:bg-gray-100 dark:hover:bg-[#2C2C2C]'
              }`}
            >
              Design Philosophy
            </button>
          </div>

          {/* Tab 1: Skills as Visual Chips (No percentage bars!) */}
          {activeTab === 'skills' && (
            <div className="space-y-4">
              {aboutData.skillGroups.map((group, idx) => (
                <div key={idx} className="space-y-2">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-gray-400 block">
                    {group.category}
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {group.skills.map((skill, i) => (
                      <span
                        key={i}
                        className="inline-flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-lg bg-[#F8FAFC] dark:bg-[#27272A] border border-[#E2E8F0] dark:border-[#383838] text-gray-700 dark:text-gray-200 font-medium hover:border-[#0D99FF] transition-colors"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-[#0D99FF]" />
                        <span>{skill.name}</span>
                        {skill.tag && (
                          <span className="text-[9px] font-mono text-[#0D99FF] bg-[#0D99FF]/10 px-1 rounded">
                            {skill.tag}
                          </span>
                        )}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Tab 2: Experience & Academic */}
          {activeTab === 'experience' && (
            <div className="space-y-4">
              {aboutData.experiences.map((exp, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-[#F8FAFC] dark:bg-[#252528] border border-[#E2E8F0] dark:border-[#333] space-y-1">
                  <div className="flex items-center justify-between">
                    <h4 className="font-bold text-xs text-[#1E1E1E] dark:text-white">
                      {exp.role}
                    </h4>
                    <span className="text-[10px] font-mono text-gray-400">
                      {exp.period}
                    </span>
                  </div>
                  <p className="text-xs font-medium text-[#0D99FF]">
                    {exp.organization}
                  </p>
                  <p className="text-xs text-gray-600 dark:text-gray-300 leading-relaxed pt-1">
                    {exp.description}
                  </p>
                </div>
              ))}
            </div>
          )}

          {/* Tab 3: Design Philosophy */}
          {activeTab === 'philosophy' && (
            <div className="space-y-3">
              {aboutData.designPhilosophy.map((p, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-[#F8FAFC] dark:bg-[#252528] border border-[#E2E8F0] dark:border-[#333] space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono font-bold text-[#0D99FF]">{p.number}.</span>
                    <h4 className="font-bold text-xs text-[#1E1E1E] dark:text-white">{p.title}</h4>
                  </div>
                  <p className="text-xs text-gray-600 dark:text-gray-300 leading-relaxed pl-5">
                    {p.description}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer Actions */}
        <div className="p-4 bg-[#FAFAFA] dark:bg-[#252525] border-t border-[#E5E7EB] dark:border-[#383838] flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <button
              onClick={() => {
                // Resume download trigger
                const link = document.createElement('a');
                link.href = 'mailto:rohitmuralidaran@gmail.com?subject=Rohit%20Muralidaran%20Resume%20Request';
                link.click();
              }}
              className="bg-[#1E1E1E] dark:bg-white text-white dark:text-[#1E1E1E] hover:opacity-90 px-3.5 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all shadow-sm"
            >
              <Download size={13} />
              <span>Request / Download Resume</span>
            </button>
          </div>

          <button
            onClick={() => {
              onClose();
              onOpenContact();
            }}
            className="text-xs font-semibold text-[#0D99FF] hover:underline"
          >
            Have a project in mind? Let's talk →
          </button>
        </div>
      </div>
    </div>
  );
};

