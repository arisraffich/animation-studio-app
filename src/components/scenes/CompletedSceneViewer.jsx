import { useState } from 'react';
import { Button } from '../common/Button';
import { Clipboard, RefreshCw, ArrowRight } from '../common/Icons';
import { ProgressiveVideoGrid } from './ProgressiveVideoGrid';

export const CompletedSceneViewer = ({ sceneId, project, updateProject, setCurrentSceneId, setError }) => {
  const sceneData = project.scenes[sceneId];
  const [isRegenerating, setIsRegenerating] = useState(false);
  const [copySuccess, setCopySuccess] = useState('');
  
  // Selection mode state
  const [selectionMode, setSelectionMode] = useState(false);
  const [selectedVersions, setSelectedVersions] = useState(new Set());

  // Check if there are existing videos
  const videoVersions = sceneData?.videoVersions || [];
  const videosWithUrls = videoVersions.filter(v => v.prompt?.video_url);
  const hasExistingVideos = videosWithUrls.length > 0;
  const legacyVideo = sceneData?.prompt?.video_url && videoVersions.length === 0;

  const copyToClipboard = async () => {
    if (!sceneData?.prompt) return;
    const jsonString = JSON.stringify(sceneData.prompt, null, 2);
    
    try {
      // Use modern Clipboard API if available
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(jsonString);
        setCopySuccess('Copied!');
      } else {
        // Fallback for older browsers
        const textArea = document.createElement('textarea');
        textArea.value = jsonString;
        textArea.style.position = 'fixed'; 
        textArea.style.opacity = '0';

        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
        setCopySuccess('Copied!');
      }
    } catch (err) {
      setCopySuccess('Failed!');
      console.error('Unable to copy to clipboard:', err);
    }

    setTimeout(() => setCopySuccess(''), 2000);
  };
  
  const getNextScene = () => {
    const navItems = ['cover', ...Array.from({ length: project.totalPages }, (_, i) => String(i + 1)), 'end'];
    const currentIndex = navItems.findIndex(id => id === sceneId);
    return navItems[currentIndex + 1];
  };

  const nextSceneId = getNextScene();

  return (
    <div className="bg-gray-800/50 p-6 rounded-lg">
      
      <div className="flex flex-wrap gap-4 items-center mb-4 pb-4 border-b border-gray-700">
        <Button onClick={copyToClipboard} variant="primary">
          <Clipboard size={16} /> {copySuccess || 'Copy Prompt'}
        </Button>
        <Button onClick={() => setIsRegenerating(prev => !prev)} variant="warning">
          <RefreshCw size={16} /> {isRegenerating ? 'Cancel' : 'Regenerate'}
        </Button>
        {(hasExistingVideos || legacyVideo) && (
          <button
            onClick={() => setSelectionMode(!selectionMode)} 
            className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
              selectionMode 
                ? 'bg-orange-600/20 text-orange-300 border border-orange-500/30 hover:bg-orange-600/30' 
                : 'bg-gray-700/50 text-gray-300 border border-gray-600/50 hover:bg-gray-600/50 hover:text-white hover:border-gray-500'
            }`}
          >
            {selectionMode ? (
              <>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M6 18L18 6M6 6l12 12" strokeWidth="2"/>
                </svg>
                Exit Selection
              </>
            ) : (
              <>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <rect x="3" y="3" width="18" height="18" rx="2" strokeWidth="2"/>
                  <path d="M9 12l2 2 4-4" strokeWidth="2"/>
                </svg>
                Select Videos
              </>
            )}
          </button>
        )}
        {nextSceneId && (
          <Button onClick={() => setCurrentSceneId(nextSceneId)} variant="secondary">
            Go to Next Scene <ArrowRight size={16} />
          </Button>
        )}
      </div>

      <div>
        <ProgressiveVideoGrid
          sceneId={sceneId}
          project={project}
          updateProject={updateProject}
          setError={setError}
          isRegenerating={isRegenerating}
          onCancelRegeneration={() => setIsRegenerating(false)}
          selectionMode={selectionMode}
          selectedVersions={selectedVersions}
          setSelectedVersions={setSelectedVersions}
          onExitSelectionMode={() => setSelectionMode(false)}
        />
      </div>
    </div>
  );
};