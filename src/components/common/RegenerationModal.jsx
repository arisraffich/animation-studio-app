import { useEffect } from 'react';
import { X } from './Icons';

export const RegenerationModal = ({ 
  isOpen, 
  onClose, 
  sceneId, 
  children,
  onGenerate,
  onCancel,
  isGenerating = false,
  generateButtonText = "Generate Video"
}) => {
  // Handle ESC key to close modal
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const getSceneDisplayName = () => {
    if (sceneId === 'cover') return 'Cover Scene';
    if (sceneId === 'end') return 'End Scene';
    if (sceneId === 'music') return 'Music Scene';
    return `Page ${sceneId}`;
  };

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-gray-800 border border-gray-700 rounded-xl w-full max-w-4xl max-h-[90vh] overflow-hidden shadow-2xl">
        
        {/* Modal Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-700">
          <div>
            <h2 className="text-xl font-bold text-white">Regenerate {getSceneDisplayName()}</h2>
            <p className="text-sm text-gray-400 mt-1">Customize your generation settings</p>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white transition-colors p-2 rounded-lg hover:bg-gray-700"
            aria-label="Close modal"
          >
            <X size={20} />
          </button>
        </div>

        {/* Modal Content */}
        <div id="regeneration-modal-content" className="p-6 overflow-y-auto max-h-[60vh]">
          {children}
        </div>

        {/* Modal Footer with Action Buttons */}
        <div className="flex justify-end gap-4 p-6 border-t border-gray-700 bg-gray-800/50">
          <button
            onClick={onCancel}
            className="text-gray-400 hover:text-gray-300 border border-gray-600 hover:border-gray-500 px-6 py-3 rounded-lg transition-colors duration-200"
          >
            Cancel
          </button>
          <button
            onClick={onGenerate}
            disabled={isGenerating}
            className="bg-blue-600 hover:bg-blue-700 disabled:bg-gray-600 disabled:cursor-not-allowed text-white px-8 py-3 rounded-lg font-medium transition-colors duration-200"
          >
            {generateButtonText}
          </button>
        </div>
      </div>
    </div>
  );
};