import { useState } from 'react';
import { Button } from '../common/Button';
import { Clipboard, RefreshCw, ArrowRight } from '../common/Icons';
import { ProgressiveVideoGrid } from './ProgressiveVideoGrid';

export const CompletedSceneViewer = ({ sceneId, project, updateProject, setCurrentSceneId, setError }) => {
  const sceneData = project.scenes[sceneId];
  const [isRegenerating, setIsRegenerating] = useState(false);
  const [copySuccess, setCopySuccess] = useState('');

  const copyToClipboard = () => {
    if (!sceneData?.prompt) return;
    const jsonString = JSON.stringify(sceneData.prompt, null, 2);
    
    const textArea = document.createElement('textarea');
    textArea.value = jsonString;
    textArea.style.position = 'fixed'; 
    textArea.style.opacity = '0';

    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();

    try {
      document.execCommand('copy');
      setCopySuccess('Copied!');
    } catch (err) {
      setCopySuccess('Failed!');
      console.error('Fallback: Oops, unable to copy', err);
    }

    document.body.removeChild(textArea);
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
        />
      </div>
    </div>
  );
};