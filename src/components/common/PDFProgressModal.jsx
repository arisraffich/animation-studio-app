import { useState, useEffect } from 'react';
import { CheckCircle, Loader2, FileText, Search, Image, Brain, Cloud, Video } from './Icons';
import ProgressRing from './ProgressRing';

const PDFProgressModal = ({ isVisible, currentStep, subProgress, stepProgress, onCancel }) => {
  const [completedSteps, setCompletedSteps] = useState(new Set());
  const [isComplete, setIsComplete] = useState(false);

  const steps = [
    { id: 'processing', icon: FileText, label: 'Processing PDF', description: 'Extracting text and images from all pages' },
    { id: 'analyzing', icon: Brain, label: 'Analyzing content', description: 'AI story analysis and understanding' },
    { id: 'uploading', icon: Cloud, label: 'Uploading to storage', description: 'Saving images securely' },
    { id: 'generating', icon: Video, label: 'Generating scene', description: 'Creating opening scene' }
  ];

  useEffect(() => {
    if (currentStep) {
      const currentIndex = steps.findIndex(step => step.id === currentStep);
      if (currentIndex > 0) {
        // Mark all previous steps as completed
        const newCompletedSteps = new Set();
        for (let i = 0; i < currentIndex; i++) {
          newCompletedSteps.add(steps[i].id);
        }
        setCompletedSteps(newCompletedSteps);
      }
    } else if (!currentStep && isVisible) {
      // All steps completed - trigger success animation
      setIsComplete(true);
      setTimeout(() => {
        setIsComplete(false);
        setCompletedSteps(new Set());
      }, 2000);
    }
  }, [currentStep, isVisible]);

  if (!isVisible) return null;

  const getStepStatus = (stepId) => {
    if (completedSteps.has(stepId)) return 'completed';
    if (stepId === currentStep) return 'current';
    return 'pending';
  };

  const shouldShowProgressRing = (stepId) => {
    return stepId === 'processing' || stepId === 'uploading';
  };

  const getStepProgress = (stepId) => {
    if (stepId === currentStep && stepProgress !== undefined) {
      return stepProgress;
    }
    return 0;
  };

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-gray-800 border border-gray-700 rounded-xl p-8 max-w-2xl w-full mx-4">
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold text-white mb-2">Processing Your Book</h3>
          <p className="text-gray-400">Preparing your story for animation</p>
        </div>

        <div className="space-y-4">
          {steps.map((step, index) => {
            const status = getStepStatus(step.id);
            const Icon = step.icon;
            
            return (
              <div
                key={step.id}
                className={`
                  relative flex items-center p-4 rounded-lg border transition-all duration-500 ease-out
                  ${status === 'completed' 
                    ? 'bg-green-500/10 border-green-500/30 transform scale-[1.02]' 
                    : status === 'current'
                    ? 'bg-indigo-500/10 border-indigo-500/50 transform scale-[1.02] shadow-lg shadow-indigo-500/20'
                    : 'bg-gray-700/50 border-gray-600/50'
                  }
                `}
                style={{
                  transform: status === 'current' ? 'scale(1.02)' : 'scale(1)',
                  transition: 'all 0.3s ease'
                }}
              >
                {/* Step Number/Icon */}
                <div className={`
                  flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center mr-4 transition-all duration-300
                  ${status === 'completed' 
                    ? 'bg-green-500 text-white' 
                    : status === 'current'
                    ? 'bg-indigo-500 text-white'
                    : 'bg-gray-600 text-gray-400'
                  }
                `}>
                  {status === 'completed' ? (
                    <CheckCircle 
                      size={24}
                    />
                  ) : status === 'current' ? (
                    shouldShowProgressRing(step.id) ? (
                      <ProgressRing 
                        progress={getStepProgress(step.id)} 
                        size={40} 
                        strokeWidth={3}
                        className="text-white"
                      />
                    ) : (
                      <Loader2 size={20} className="animate-spin" />
                    )
                  ) : (
                    <Icon size={20} />
                  )}
                </div>

                {/* Step Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <h4 className={`
                      font-semibold transition-colors duration-300
                      ${status === 'completed' 
                        ? 'text-green-300' 
                        : status === 'current'
                        ? 'text-indigo-300'
                        : 'text-gray-400'
                      }
                    `}>
                      {step.label}
                    </h4>
                    {status === 'current' && step.id === 'extracting' && subProgress && (
                      <span className="text-sm text-indigo-400 font-mono">
                        {subProgress}
                      </span>
                    )}
                  </div>
                  <p className={`
                    text-sm mt-1 transition-colors duration-300
                    ${status === 'completed' 
                      ? 'text-green-400/80' 
                      : status === 'current'
                      ? 'text-indigo-400/80'
                      : 'text-gray-500'
                    }
                  `}>
                    {step.description}
                  </p>
                </div>

                {/* Progress Line */}
                {index < steps.length - 1 && (
                  <div className="absolute left-6 top-16 w-0.5 h-4 -mb-4">
                    <div className={`
                      w-full h-full transition-all duration-500 delay-150
                      ${completedSteps.has(step.id) 
                        ? 'bg-green-500' 
                        : 'bg-gray-600'
                      }
                    `} />
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Overall Progress Bar */}
        <div className="mt-8">
          <div className="flex justify-between text-sm text-gray-400 mb-2">
            <span>Progress</span>
            <span>{Math.round(((completedSteps.size + (currentStep ? 1 : 0)) / steps.length) * 100)}%</span>
          </div>
          <div className="w-full bg-gray-700 rounded-full h-2">
            <div 
              className="bg-indigo-500 h-2 rounded-full transition-all duration-500 ease-out"
              style={{ 
                width: `${((completedSteps.size + (currentStep ? 0.5 : 0)) / steps.length) * 100}%` 
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PDFProgressModal;