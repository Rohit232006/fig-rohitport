import React, { useState } from 'react';
import { MessageSquare, X, Send, Check } from 'lucide-react';
import { CanvasComment } from '../../types';

interface InteractiveCommentsProps {
  comments: CanvasComment[];
  activeTool: string;
  onAddComment: (comment: Omit<CanvasComment, 'id' | 'timestamp'>) => void;
  onResolveComment: (id: string) => void;
}

export const InteractiveComments: React.FC<InteractiveCommentsProps> = ({
  comments,
  activeTool,
  onAddComment,
  onResolveComment,
}) => {
  const [activePinId, setActivePinId] = useState<string | null>(null);

  return (
    <>
      {comments.map((comment) => {
        const isOpen = activePinId === comment.id;

        return (
          <div
            key={comment.id}
            style={{
              position: 'absolute',
              left: `${comment.x}px`,
              top: `${comment.y}px`,
              zIndex: 35,
            }}
            className="select-none"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Pin Marker */}
            <button
              onClick={() => setActivePinId(isOpen ? null : comment.id)}
              className="w-8 h-8 rounded-full rounded-bl-none shadow-figma-floating flex items-center justify-center text-white text-xs font-bold transition-transform hover:scale-110 border-2 border-white"
              style={{ backgroundColor: comment.avatarColor }}
              title={`Comment by ${comment.author}`}
            >
              <MessageSquare size={14} className="fill-white" />
            </button>

            {/* Expanded Comment Card */}
            {isOpen && (
              <div className="absolute left-6 top-6 w-64 bg-white dark:bg-[#252528] rounded-xl shadow-figma-card border border-[#E5E7EB] dark:border-[#383838] p-3 text-xs z-50 animate-in fade-in zoom-in-95 duration-150">
                <div className="flex items-center justify-between pb-2 border-b border-gray-100 dark:border-[#333]">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full" style={{ backgroundColor: comment.avatarColor }} />
                    <span className="font-semibold text-[#1E1E1E] dark:text-white">{comment.author}</span>
                  </div>
                  <button
                    onClick={() => setActivePinId(null)}
                    className="p-1 text-gray-400 hover:text-gray-600 rounded"
                  >
                    <X size={12} />
                  </button>
                </div>

                <p className="py-2 text-[#4B5563] dark:text-[#A0A0A0] leading-relaxed">
                  {comment.text}
                </p>

                <div className="flex items-center justify-between pt-1 border-t border-gray-100 dark:border-[#333] text-[10px] text-gray-400">
                  <span>{comment.timestamp}</span>
                  <button
                    onClick={() => {
                      onResolveComment(comment.id);
                      setActivePinId(null);
                    }}
                    className="text-[#0D99FF] hover:underline flex items-center gap-1 font-medium"
                  >
                    <Check size={11} />
                    <span>Resolve</span>
                  </button>
                </div>
              </div>
            )}
          </div>
        );
      })}
    </>
  );
};

