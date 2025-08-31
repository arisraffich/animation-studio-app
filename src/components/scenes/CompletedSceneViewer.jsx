import { useState, useRef } from 'react';
import { Button } from '../common/Button';
import { RefreshCw, ArrowRight, Play } from '../common/Icons';
import { ProgressiveVideoGrid } from './ProgressiveVideoGrid';
import { BatchGenerationModal } from '../common/BatchGenerationModal';
import { handleDownloadMedia, getDownloadFilename } from '../../utils/downloadUtils';

export const CompletedSceneViewer = ({ sceneId, project, updateProject, setCurrentSceneId, setError }) => {
  const sceneData = project.scenes[sceneId];
  const [isRegenerating, setIsRegenerating] = useState(false);
  
  // Selection mode state
  const [selectionMode, setSelectionMode] = useState(false);
  const [selectedVersions, setSelectedVersions] = useState(new Set());
  
  // Batch generation state
  const [batchModalOpen, setBatchModalOpen] = useState(false);
  const [batchGenerating, setBatchGenerating] = useState(false);
  const [currentBatchPage, setCurrentBatchPage] = useState('');
  const [completedBatchPages, setCompletedBatchPages] = useState([]);
  const [failedBatchPages, setFailedBatchPages] = useState([]);
  const [retryingBatchPages, setRetryingBatchPages] = useState([]);
  const [batchError, setBatchError] = useState('');
  const [estimatedTime, setEstimatedTime] = useState('');
  const batchCancelledRef = useRef(false);
  const batchAbortControllerRef = useRef(null);
  const [autoDownloadedPages, setAutoDownloadedPages] = useState(new Set());
  
  // Auto-download function using shared utility
  const autoDownloadVideo = async (videoUrl, pageId) => {
    try {
      const filename = getDownloadFilename(project.name || 'untitled', pageId, 1, 'mp4');
      await handleDownloadMedia(videoUrl, filename, 'video');
      setAutoDownloadedPages(prev => new Set([...prev, pageId]));
      return true;
    } catch (error) {
      console.error(`Auto-download failed for page ${pageId}:`, error);
      return false;
    }
  };

  // Check if there are existing videos
  const videoVersions = sceneData?.videoVersions || [];
  const videosWithUrls = videoVersions.filter(v => v.prompt?.video_url);
  const hasExistingVideos = videosWithUrls.length > 0;
  const legacyVideo = sceneData?.prompt?.video_url && videoVersions.length === 0;

  
  const getNextScene = () => {
    const navItems = ['cover', ...Array.from({ length: project.totalPages }, (_, i) => String(i + 1)), 'end'];
    const currentIndex = navItems.findIndex(id => id === sceneId);
    return navItems[currentIndex + 1];
  };

  const nextSceneId = getNextScene();
  
  // Check if all pages have stored images (for showing batch generation button)
  const allPagesHaveStoredImages = () => {
    const storyPages = ['cover', ...Array.from({ length: project.totalPages || 0 }, (_, i) => String(i + 1))];
    return storyPages.every(pageId => project.scenes[pageId]?.storedImage?.url);
  };
  
  // Batch generation functions
  const startBatchGeneration = async () => {
    setBatchModalOpen(true);
    setBatchGenerating(true);
    batchCancelledRef.current = false;
    setBatchError('');
    setCompletedBatchPages([]);
    setFailedBatchPages([]);
    setRetryingBatchPages([]);
    setAutoDownloadedPages(new Set());
    
    // Create new AbortController for this batch
    batchAbortControllerRef.current = new AbortController();
    
    const storyPages = ['cover', ...Array.from({ length: project.totalPages || 0 }, (_, i) => String(i + 1))];
    const totalPages = storyPages.length;
    setEstimatedTime(`${totalPages * 2} minutes`);
    
    let consecutiveFailures = 0;
    
    for (let i = 0; i < storyPages.length; i++) {
      // Check if batch was cancelled
      if (batchCancelledRef.current) {
        console.log('Batch generation cancelled by user');
        setBatchGenerating(false);
        return;
      }
      
      const pageId = storyPages[i];
      setCurrentBatchPage(pageId);
      
      // Skip if page already has videos
      const pageScene = project.scenes[pageId];
      const hasExistingVideo = pageScene?.videoVersions?.some(v => v.prompt?.video_url) || pageScene?.prompt?.video_url;
      
      if (hasExistingVideo) {
        setCompletedBatchPages(prev => [...prev, pageId]);
        consecutiveFailures = 0;
        continue;
      }
      
      try {
        // Check cancellation before starting generation
        if (batchCancelledRef.current) {
          console.log('Batch generation cancelled before starting page', pageId);
          setBatchGenerating(false);
          return;
        }
        
        const result = await generateVideoForPage(pageId);
        
        // Check cancellation after generation
        if (batchCancelledRef.current) {
          console.log('Batch generation cancelled after completing page', pageId);
          setBatchGenerating(false);
          return;
        }
        
        // Auto-download the generated video immediately
        if (result?.video_url) {
          console.log(`🎬 Auto-downloading video for page ${pageId}...`);
          const downloadSuccess = await autoDownloadVideo(result.video_url, pageId);
          if (downloadSuccess) {
            console.log(`✅ Auto-download completed for page ${pageId}`);
          } else {
            console.log(`⚠️ Auto-download failed for page ${pageId} - manual download still available`);
          }
        }
        
        setCompletedBatchPages(prev => [...prev, pageId]);
        consecutiveFailures = 0;
      } catch (error) {
        // Check cancellation before retry
        if (batchCancelledRef.current) {
          console.log('Batch generation cancelled during error handling');
          setBatchGenerating(false);
          return;
        }
        
        console.error(`Failed to generate video for page ${pageId}:`, error);
        
        // Show retry state
        setRetryingBatchPages(prev => [...prev, pageId]);
        
        // Try once more for this page (reusing same abort controller)
        try {
          const retryResult = await generateVideoForPage(pageId);
          
          // Check cancellation after retry
          if (batchCancelledRef.current) {
            console.log('Batch generation cancelled after retry');
            setBatchGenerating(false);
            return;
          }
          
          // Auto-download retry success video too
          if (retryResult?.video_url) {
            console.log(`🎬 Auto-downloading retry video for page ${pageId}...`);
            const downloadSuccess = await autoDownloadVideo(retryResult.video_url, pageId);
            if (downloadSuccess) {
              console.log(`✅ Auto-download completed for retry page ${pageId}`);
            }
          }
          
          // Remove from retrying and add to completed
          setRetryingBatchPages(prev => prev.filter(p => p !== pageId));
          setCompletedBatchPages(prev => [...prev, pageId]);
          consecutiveFailures = 0;
        } catch (retryError) {
          // Remove from retrying and add to failed
          setRetryingBatchPages(prev => prev.filter(p => p !== pageId));
          setFailedBatchPages(prev => [...prev, pageId]);
          consecutiveFailures++;
          
          // If 2 consecutive failures, stop the process
          if (consecutiveFailures >= 2) {
            setBatchError(`Failed to generate videos for multiple pages. Please generate the remaining videos manually.`);
            setBatchGenerating(false);
            return;
          }
        }
      }
      
      // Update estimated time remaining
      const remaining = storyPages.length - (i + 1);
      setEstimatedTime(remaining > 0 ? `${remaining * 2} minutes` : '');
    }
    
    setBatchGenerating(false);
    setCurrentBatchPage('');
  };
  
  const generateVideoForPage = async (pageId) => {
    const scene = project.scenes[pageId];
    
    if (!scene?.storedImage?.url) {
      throw new Error(`No stored image found for page ${pageId}`);
    }
    
    // Import API functions
    const { generateVideoWithSeedance, generateScene, generateSeedancePrompt } = await import('../../services/api');
    
    try {
      // Fetch image from Firebase Storage and convert to base64
      const imageResponse = await fetch('/api/firebase-image', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ imageUrl: scene.storedImage.url })
      });
      
      if (!imageResponse.ok) {
        throw new Error(`Failed to fetch stored image: ${imageResponse.status}`);
      }
      
      const { base64: imageBase64 } = await imageResponse.json();
      const imageToUse = imageBase64;
      const dimensionsToUse = scene.storedImage.dimensions;
      
      // Get the scene text
      const textData = scene.text || '';
      
      // Create project with edited text for this scene
      const projectWithEditedText = {
        ...project,
        scenes: {
          ...project.scenes,
          [pageId]: {
            ...scene,
            text: textData
          }
        }
      };
      
      // Generate video using the same logic as ProgressiveVideoGrid with abort signal
      const result = await generateVideoWithSeedance(
        projectWithEditedText, 
        pageId, 
        imageToUse, 
        '', // No feedback
        (error) => console.error('Batch generation error:', error), 
        (message) => console.log('Batch generation message:', message), 
        { 
          imageDimensions: dimensionsToUse, 
          textData,
          generationId: `batch_${pageId}_${Date.now()}`,
          websocketCallback: () => {}, // No websocket callback for batch
          abortSignal: batchAbortControllerRef.current?.signal
        }
      );
      
      // Update the project with the new video - properly manage video versions
      const existingVersions = project.scenes[pageId].videoVersions || [];
      const newVersionNumber = existingVersions.length + 1;
      
      // Mark all existing versions as not latest
      const updatedExistingVersions = existingVersions.map(v => ({ ...v, isLatest: false }));
      
      const updatedScenes = {
        ...project.scenes,
        [pageId]: {
          ...project.scenes[pageId],
          status: 'completed',
          // Keep legacy prompt for backwards compatibility, but use latest video
          prompt: result,
          videoVersions: [
            ...updatedExistingVersions,
            {
              id: `v${newVersionNumber}`,
              version: newVersionNumber,
              createdAt: new Date().toISOString(),
              prompt: result,
              isLatest: true
            }
          ]
        }
      };
      
      // Fetch latest project data to avoid race condition
      const { getProject } = await import('../../services/firebaseService');
      const latestProject = await getProject(project.id);
      
      // Update project state with latest data
      updateProject(project.id, {
        ...latestProject,
        scenes: {
          ...latestProject.scenes,
          [pageId]: updatedScenes[pageId]
        }
      });
      
      return result;
      
    } catch (error) {
      // If video generation fails, fall back to JSON only
      console.error(`Video generation failed for page ${pageId}:`, error.message);
      
      // Fetch image for fallback too
      const imageResponse = await fetch('/api/firebase-image', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ imageUrl: scene.storedImage.url })
      });
      
      const { base64: imageBase64 } = imageResponse.ok ? await imageResponse.json() : { base64: null };
      
      const { generateScene } = await import('../../services/api');
      const fallbackPrompt = await generateScene(project, pageId, imageBase64 || '', '', (error) => console.error('Fallback error:', error), scene.text || '', batchAbortControllerRef.current?.signal);
      fallbackPrompt.video_generation_failed = true;
      
      // Still update the project with the fallback prompt - use proper version management
      const existingVersions = project.scenes[pageId].videoVersions || [];
      const newVersionNumber = existingVersions.length + 1;
      
      // Mark all existing versions as not latest
      const updatedExistingVersions = existingVersions.map(v => ({ ...v, isLatest: false }));
      
      const updatedScenes = {
        ...project.scenes,
        [pageId]: {
          ...project.scenes[pageId],
          status: 'completed',
          prompt: fallbackPrompt,
          videoVersions: [
            ...updatedExistingVersions,
            {
              id: `v${newVersionNumber}`,
              version: newVersionNumber,
              createdAt: new Date().toISOString(),
              prompt: fallbackPrompt,
              isLatest: true
            }
          ]
        }
      };
      
      // Fetch latest project data to avoid race condition  
      const { getProject } = await import('../../services/firebaseService');
      const latestProject = await getProject(project.id);
      
      updateProject(project.id, {
        ...latestProject,
        scenes: {
          ...latestProject.scenes,
          [pageId]: updatedScenes[pageId]
        }
      });
      
      throw error; // Re-throw for retry logic
    }
  };
  
  const cancelBatchGeneration = () => {
    console.log('🛑 FORCE STOPPING batch generation...');
    batchCancelledRef.current = true; // Signal cancellation
    
    // Abort all ongoing HTTP requests
    if (batchAbortControllerRef.current) {
      console.log('🛑 Aborting HTTP requests...');
      batchAbortControllerRef.current.abort();
      batchAbortControllerRef.current = null;
    }
    
    setBatchGenerating(false);
    setBatchModalOpen(false);
    setCurrentBatchPage('');
    setCompletedBatchPages([]);
    setFailedBatchPages([]);
    setRetryingBatchPages([]);
    setBatchError('');
    
    // Force immediate stop - this will be checked at multiple points
    setTimeout(() => {
      console.log('🛑 Batch generation should be stopped now');
    }, 100);
  };

  return (
    <div className="bg-gray-800/50 p-6 rounded-lg">
      
      <div className="flex flex-wrap gap-4 items-center mb-4 pb-4 border-b border-gray-700">
        <Button onClick={() => {
          if (window.openRegenerationModal) {
            window.openRegenerationModal();
          }
        }} variant="warning">
          <RefreshCw size={16} /> {isRegenerating ? 'Cancel' : 'Regenerate'}
        </Button>
        
        {/* Generate All Videos button - only show on cover page when all pages have stored images */}
        {sceneId === 'cover' && allPagesHaveStoredImages() && (
          <Button onClick={startBatchGeneration} variant="primary" className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
            <Play size={16} /> Generate All Videos
          </Button>
        )}
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
          onOpenRegenerationModal={(openModalFn) => {
            // Store the modal open function from ProgressiveVideoGrid
            window.openRegenerationModal = openModalFn;
          }}
          selectionMode={selectionMode}
          selectedVersions={selectedVersions}
          setSelectedVersions={setSelectedVersions}
          onExitSelectionMode={() => setSelectionMode(false)}
        />
      </div>
      
      {/* Batch Generation Modal */}
      <BatchGenerationModal
        isOpen={batchModalOpen}
        onClose={cancelBatchGeneration}
        onCancel={cancelBatchGeneration}
        totalPages={['cover', ...Array.from({ length: project.totalPages || 0 }, (_, i) => String(i + 1))].length}
        currentPage={currentBatchPage}
        completedPages={completedBatchPages}
        failedPages={failedBatchPages}
        retryingPages={retryingBatchPages}
        isGenerating={batchGenerating}
        currentPageName={currentBatchPage === 'cover' ? 'Cover' : `Page ${currentBatchPage}`}
        estimatedTimeRemaining={estimatedTime}
        error={batchError}
        project={project}
        autoDownloadedPages={autoDownloadedPages}
        key={JSON.stringify(completedBatchPages)} // Force re-render when completedPages changes
      />
    </div>
  );
};