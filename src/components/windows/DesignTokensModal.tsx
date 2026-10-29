import React, { useState } from 'react';
import { X, Copy, Check, Palette, Type, Sliders, Layers } from 'lucide-react';

interface DesignTokensModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialTab?: 'tokens' | 'typography';
}

export const DesignTokensModal: React.FC<DesignTokensModalProps> = ({
  isOpen,
  onClose,
  initialTab = 'tokens',
}) => {
  const [activeTab, setActiveTab] = useState<'tokens' | 'typography'>(initialTab);
  const [copiedValue, setCopiedValue] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleCopy = (val: string) => {
    navigator.clipboard.writeText(val);
    setCopiedValue(val);
    setTimeout(() => setCopiedValue(null), 1800);
  };

  const tokens = [
    { name: 'Canvas Background', hex: '#F7F8FA', desc: 'Soft luminous base' },
    { name: 'Canvas Surface', hex: '#FFFFFF', desc: 'Primary frame panels' },
    { name: 'Figma Electric Blue', hex: '#0D99FF', desc: 'Primary brand & selection rings' },
    { name: 'Obsidian Dark', hex: '#1E1E1E', desc: 'Deep typography & dark frames' },
    { name: 'Secondary Slate', hex: '#757575', desc: 'Subtle captions & labels' },
    { name: 'Border Subtle', hex: '#E5E7EB', desc: '1px hairline dividers' },
    { name: 'Accent Purple', hex: '#9747FF', desc: 'Creative highlights & badges' },
    { name: 'Accent Green', hex: '#14AE5C', desc: 'Verification & active tracking' },
    { name: 'Accent Coral', hex: '#F24E1E', desc: 'Heuristics & urgent indicators' },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-xs select-text animate-in fade-in duration-150">
      <div 
        onWheel={(e) => e.stopPropagation()}
        className="w-full max-w-lg bg-white dark:bg-[#1E1E1E] text-[#1E1E1E] dark:text-[#E0E0E0] rounded-2xl shadow-figma-floating border border-[#E5E7EB] dark:border-[#383838] overflow-hidden flex flex-col max-h-[85vh]"
      >
        {/* Titlebar */}
        <div className="px-4 py-3 bg-[#FAFAFA] dark:bg-[#252525] border-b border-[#E5E7EB] dark:border-[#383838] flex items-center justify-between select-none flex-shrink-0">
          <div className="flex items-center gap-2">
            <Palette size={15} className="text-[#0D99FF]" />
            <span className="text-xs font-mono font-medium text-gray-700 dark:text-gray-300">
              Design_System_Spec.tokens
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded hover:bg-gray-200 dark:hover:bg-[#333] text-gray-400"
          >
            <X size={15} />
          </button>
        </div>

        {/* Tab Switcher */}
        <div className="flex border-b border-gray-100 dark:border-[#333] px-3 pt-2 text-xs font-medium flex-shrink-0">
          <button
            onClick={() => setActiveTab('tokens')}
            className={`px-4 py-2 border-b-2 transition-colors ${
              activeTab === 'tokens'
                ? 'border-[#0D99FF] text-[#0D99FF]'
                : 'border-transparent text-gray-500 hover:text-gray-800'
            }`}
          >
            Color Palette & Tokens
          </button>
          <button
            onClick={() => setActiveTab('typography')}
            className={`px-4 py-2 border-b-2 transition-colors ${
              activeTab === 'typography'
                ? 'border-[#0D99FF] text-[#0D99FF]'
                : 'border-transparent text-gray-500 hover:text-gray-800'
            }`}
          >
            Typography Scale (Inter)
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 min-h-0 p-5 overflow-y-auto overscroll-contain space-y-3">
          {activeTab === 'tokens' ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {tokens.map((t) => (
                <div
                  key={t.hex}
                  onClick={() => handleCopy(t.hex)}
                  className="p-2.5 rounded-xl border border-gray-100 dark:border-zinc-800 bg-[#F9FAFB] dark:bg-[#252528] hover:border-[#0D99FF] cursor-pointer flex items-center justify-between group transition-all"
                >
                  <div className="flex items-center gap-2.5">
                    <div
                      className="w-7 h-7 rounded-lg shadow-xs border border-black/10 flex-shrink-0"
                      style={{ backgroundColor: t.hex }}
                    />
                    <div className="overflow-hidden">
                      <span className="text-xs font-semibold block text-[#1E1E1E] dark:text-white truncate">
                        {t.name}
                      </span>
                      <span className="text-[10px] font-mono text-gray-400 block">
                        {t.hex}
                      </span>
                    </div>
                  </div>
                  <div className="text-gray-400 group-hover:text-[#0D99FF]">
                    {copiedValue === t.hex ? <Check size={13} className="text-green-500" /> : <Copy size={13} />}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="space-y-4">
              <div className="p-3 bg-[#F9FAFB] dark:bg-[#252528] rounded-xl border border-gray-100 dark:border-zinc-800">
                <span className="text-[10px] font-mono text-gray-400 uppercase">Hero Display</span>
                <p className="text-2xl font-extrabold text-[#1E1E1E] dark:text-white mt-1">
                  Designing Digital Experiences
                </p>
                <span className="text-[10px] font-mono text-[#0D99FF] block mt-1">Inter • 64-96px / -0.03em tracking</span>
              </div>

              <div className="p-3 bg-[#F9FAFB] dark:bg-[#252528] rounded-xl border border-gray-100 dark:border-zinc-800">
                <span className="text-[10px] font-mono text-gray-400 uppercase">Section Headings</span>
                <p className="text-lg font-bold text-[#1E1E1E] dark:text-white mt-1">
                  Information Architecture & Flows
                </p>
                <span className="text-[10px] font-mono text-[#0D99FF] block mt-1">Inter • 24px / SemiBold</span>
              </div>

              <div className="p-3 bg-[#F9FAFB] dark:bg-[#252528] rounded-xl border border-gray-100 dark:border-zinc-800">
                <span className="text-[10px] font-mono text-gray-400 uppercase">Code / Spec Monospace</span>
                <p className="text-xs font-mono text-gray-700 dark:text-gray-300 mt-1">
                  const system = {`{`} canvas: "infinite", zoom: 1.0, figma: true {`}`};
                </p>
                <span className="text-[10px] font-mono text-[#0D99FF] block mt-1">JetBrains Mono • 12px / Medium</span>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-3 bg-[#FAFAFA] dark:bg-[#252525] border-t border-[#E5E7EB] dark:border-[#383838] flex items-center justify-between text-xs">
          <span className="text-[11px] text-gray-500">
            Click any swatch to copy value to clipboard
          </span>
          <button
            onClick={onClose}
            className="px-3 py-1 bg-gray-200 dark:bg-zinc-700 rounded-md font-medium text-xs hover:bg-gray-300"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

