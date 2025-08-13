import { useState, useEffect } from 'react';
import { VideoVersionViewer } from './VideoVersionViewer';
import { generateScene, generateVideoWithSeedance } from '../../services/api';

export const ProgressiveVideoGrid = ({ 
  sceneId, 
  project, 
  updateProject, 
  setError, 
  isRegenerating,
  onCancelRegeneration 
}) => {
  const [uploadImageBase64, setUploadImageBase64] = useState('');
  const [imageDimensions, setImageDimensions] = useState(null);
  const [isUploading, setIsUploading] = useState(false);
  const [loadingMessage, setLoadingMessage] = useState('Generating...');
  const [editableSceneText, setEditableSceneText] = useState(project.scenes[sceneId]?.text || '');
  
  // Bulk selection state
  const [selectionMode, setSelectionMode] = useState(false);
  const [selectedVersions, setSelectedVersions] = useState(new Set());
  
  // Sync editableSceneText when project data changes
  useEffect(() => {
    const currentText = project.scenes[sceneId]?.text || '';
    setEditableSceneText(currentText);
  }, [project.scenes[sceneId]?.text, sceneId]);

  const sceneData = project.scenes[sceneId];
  const videoVersions = sceneData?.videoVersions || [];
  
  // Check if there are any videos with URLs
  const videosWithUrls = videoVersions.filter(v => v.prompt?.video_url);
  const hasExistingVideos = videosWithUrls.length > 0;

  // Handle backward compatibility
  const legacyVideo = sceneData?.prompt?.video_url && videoVersions.length === 0;
  
  // Check if we have a stored image for this scene (for regeneration)
  const storedImageData = sceneData?.storedImage;
  const hasStoredImage = storedImageData?.base64 && storedImageData?.dimensions;
  
  // Initialize with stored image only when actually generating (not when just regenerating)
  const [useStoredImageForGeneration, setUseStoredImageForGeneration] = useState(false);

  // Debug logging
  console.log('ProgressiveVideoGrid Debug:', {
    sceneId,
    selectionMode,
    selectedVersions: selectedVersions.size,
    videoVersions: videoVersions.length,
    hasExistingVideos,
    legacyVideo
  });

  const handleImageUpload = (file) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      const img = new Image();
      img.onload = () => {
        // Store original dimensions before resizing
        const originalDimensions = {
          width: img.width,
          height: img.height
        };
        setImageDimensions(originalDimensions);
        
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        
        const maxWidth = 1024;
        const maxHeight = 1024;
        let width = img.width;
        let height = img.height;
        
        if (width > height) {
          if (width > maxWidth) {
            height *= maxWidth / width;
            width = maxWidth;
          }
        } else {
          if (height > maxHeight) {
            width *= maxHeight / height;
            height = maxHeight;
          }
        }
        
        canvas.width = width;
        canvas.height = height;
        ctx.drawImage(img, 0, 0, width, height);
        
        setUploadImageBase64(canvas.toDataURL('image/jpeg', 0.8).split(',')[1]);
        console.log(`Image uploaded - dimensions: ${originalDimensions.width}x${originalDimensions.height}`);
      };
      img.src = reader.result;
    };
    reader.readAsDataURL(file);
  };

  const handleGenerate = async () => {
    // Determine which image to use for generation
    let imageToUse = uploadImageBase64;
    let dimensionsToUse = imageDimensions;
    
    // If regenerating and no new image uploaded, use stored image
    if (isRegenerating && !uploadImageBase64 && hasStoredImage) {
      imageToUse = storedImageData.base64;
      dimensionsToUse = storedImageData.dimensions;
      
      // Set the stored image for display during generation
      setUploadImageBase64(storedImageData.base64);
      setImageDimensions(storedImageData.dimensions);
      setUseStoredImageForGeneration(true);
    }

    if (sceneId !== 'end' && !imageToUse) {
      setError('Please upload an image first.');
      return;
    }

    setIsUploading(true);
    setLoadingMessage('Preparing...');
    setError('');

    try {
      let newPrompt;
      
      // Create modified project with edited scene text
      const projectWithEditedText = {
        ...project,
        scenes: {
          ...project.scenes,
          [sceneId]: {
            ...project.scenes[sceneId],
            text: editableSceneText
          }
        }
      };
      
      // For pages 1,2,3... try video generation with Seedance, for cover/end use JSON only
      if (sceneId !== 'cover' && sceneId !== 'end') {
        try {
          newPrompt = await generateVideoWithSeedance(
            projectWithEditedText, 
            sceneId, 
            imageToUse, 
            '', // No feedback
            setError, 
            setLoadingMessage, 
            { imageDimensions: dimensionsToUse }
          );
        } catch (error) {
          // If video generation fails, fall back to JSON only
          console.log('Seedance video generation failed, using JSON only:', error.message);
          setError(`Video generation failed: ${error.message}. Generated prompt without video.`);
          setLoadingMessage('Creating scene data...');
          newPrompt = await generateScene(projectWithEditedText, sceneId, imageToUse, '', setError);
          // Mark that video generation failed
          newPrompt.video_generation_failed = true;
        }
      } else {
        newPrompt = await generateScene(projectWithEditedText, sceneId, imageToUse, '', setError);
      }
      
      // Handle video versioning
      const existingScene = project.scenes[sceneId] || {};
      const existingVersions = existingScene.videoVersions || [];
      
      // Create new version entry
      const newVersion = {
        id: Date.now(), // Simple timestamp ID
        version: existingVersions.length + 1,
        createdAt: new Date().toISOString(),
        prompt: newPrompt,
        isLatest: true
      };
      
      // Mark previous versions as not latest
      const updatedVersions = existingVersions.map(v => ({ ...v, isLatest: false }));
      updatedVersions.push(newVersion);

      const updatedScenes = {
        ...project.scenes,
        [sceneId]: {
          ...existingScene,
          status: 'completed',
          prompt: newPrompt, // Keep for backward compatibility
          text: editableSceneText,
          videoVersions: updatedVersions,
          // Store image data for future regenerations (first time only)
          storedImage: existingScene.storedImage || (imageToUse ? {
            base64: imageToUse,
            dimensions: dimensionsToUse,
            uploadedAt: new Date().toISOString()
          } : null)
        }
      };
      
      let projectUpdates = { scenes: updatedScenes };
      if (sceneId === 'cover' && newPrompt.extracted_title) {
        projectUpdates.name = newPrompt.extracted_title;
        projectUpdates.author = newPrompt.extracted_author || 'Unknown Author';
      }

      updateProject(project.id, projectUpdates);
      
      // Reset upload state
      setUploadImageBase64('');
      setImageDimensions(null);
      onCancelRegeneration(); // Close regeneration mode

    } catch (err) {
      setError(`Operation failed: ${err.message}.`);
    } finally {
      setIsUploading(false);
    }
  };

  // Handle individual video version deletion
  const handleDeleteVersion = async (versionId) => {
    try {
      const existingScene = project.scenes[sceneId] || {};
      const existingVersions = existingScene.videoVersions || [];
      
      // Filter out the deleted version
      const remainingVersions = existingVersions.filter(v => v.id !== versionId);
      
      if (remainingVersions.length === 0) {
        // Complete scene reset - delete everything
        const updatedScenes = {
          ...project.scenes,
          [sceneId]: {
            text: '',
            status: 'pending'
            // Clear: prompt, videoVersions, storedImage - everything
          }
        };
        await updateProject(project.id, { scenes: updatedScenes });
      } else {
        // Just remove this version, update latest flag
        const updatedVersions = remainingVersions.map(v => ({
          ...v,
          isLatest: false
        }));
        
        // Make highest version number the new "latest"
        if (updatedVersions.length > 0) {
          const maxVersion = Math.max(...updatedVersions.map(v => v.version));
          const latestVersion = updatedVersions.find(v => v.version === maxVersion);
          if (latestVersion) {
            latestVersion.isLatest = true;
          }
        }

        const updatedScenes = {
          ...project.scenes,
          [sceneId]: {
            ...existingScene,
            videoVersions: updatedVersions,
            prompt: updatedVersions.find(v => v.isLatest)?.prompt || existingScene.prompt
          }
        };
        
        await updateProject(project.id, { scenes: updatedScenes });
      }
    } catch (error) {
      console.error('Error deleting video version:', error);
      setError(`Failed to delete video version: ${error.message}`);
    }
  };

  // Bulk selection functions
  const toggleVersionSelection = (versionId) => {
    setSelectedVersions(prev => {
      const newSet = new Set(prev);
      if (newSet.has(versionId)) {
        newSet.delete(versionId);
      } else {
        newSet.add(versionId);
      }
      return newSet;
    });
  };

  const toggleSelectAll = () => {
    const allVersions = videoVersions.filter(v => v.prompt?.video_url);
    if (selectedVersions.size === allVersions.length) {
      // Deselect all
      setSelectedVersions(new Set());
    } else {
      // Select all
      setSelectedVersions(new Set(allVersions.map(v => v.id)));
    }
  };

  const enterSelectionMode = () => {
    setSelectionMode(true);
    setSelectedVersions(new Set());
  };

  const exitSelectionMode = () => {
    setSelectionMode(false);
    setSelectedVersions(new Set());
  };

  const bulkDeleteVersions = async () => {
    if (selectedVersions.size === 0) return;
    
    try {
      const existingScene = project.scenes[sceneId] || {};
      const existingVersions = existingScene.videoVersions || [];
      
      // Filter out deleted versions
      const remainingVersions = existingVersions.filter(v => !selectedVersions.has(v.id));
      
      if (remainingVersions.length === 0) {
        // Complete scene reset
        const updatedScenes = {
          ...project.scenes,
          [sceneId]: {
            text: '',
            status: 'pending'
          }
        };
        await updateProject(project.id, { scenes: updatedScenes });
      } else {
        // Update remaining versions
        const updatedVersions = remainingVersions.map(v => ({
          ...v,
          isLatest: false
        }));
        
        // Make highest version the latest
        if (updatedVersions.length > 0) {
          const maxVersion = Math.max(...updatedVersions.map(v => v.version));
          const latestVersion = updatedVersions.find(v => v.version === maxVersion);
          if (latestVersion) {
            latestVersion.isLatest = true;
          }
        }

        const updatedScenes = {
          ...project.scenes,
          [sceneId]: {
            ...existingScene,
            videoVersions: updatedVersions,
            prompt: updatedVersions.find(v => v.isLatest)?.prompt || existingScene.prompt
          }
        };
        
        await updateProject(project.id, { scenes: updatedScenes });
      }
      
      // Exit selection mode
      exitSelectionMode();
    } catch (error) {
      console.error('Error bulk deleting versions:', error);
      setError(`Failed to delete video versions: ${error.message}`);
    }
  };
  
  return (
    <div className="space-y-6">
      {/* Show existing videos with upload card if regenerating */}
      <div>
        {hasExistingVideos || legacyVideo ? (
          <div className="flex items-center gap-3 mb-4">
            {!selectionMode ? (
              <button
                onClick={enterSelectionMode}
                className="flex items-center gap-2 text-sm bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-white px-3 py-2 rounded-lg border border-gray-600 hover:border-gray-500 transition-all duration-200"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <rect x="3" y="3" width="18" height="18" rx="2" strokeWidth="2"/>
                  <path d="m9 12 2 2 4-4" strokeWidth="2"/>
                </svg>
                Select Videos
              </button>
            ) : (
              <div className="flex items-center gap-2">
                <button
                  onClick={toggleSelectAll}
                  className="flex items-center gap-2 text-sm bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 rounded-lg transition-colors duration-200"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <rect x="3" y="3" width="18" height="18" rx="2" strokeWidth="2"/>
                    {selectedVersions.size === videoVersions.filter(v => v.prompt?.video_url).length ? (
                      <path d="m9 12 2 2 4-4" strokeWidth="2"/>
                    ) : (
                      <path d="M12 8v8M8 12h8" strokeWidth="2"/>
                    )}
                  </svg>
                  {selectedVersions.size === videoVersions.filter(v => v.prompt?.video_url).length ? 'Deselect All' : 'Select All'}
                </button>
                
                {selectedVersions.size > 0 && (
                  <button
                    onClick={bulkDeleteVersions}
                    className="flex items-center gap-2 text-sm bg-red-600 hover:bg-red-700 text-white px-3 py-2 rounded-lg transition-colors duration-200"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path d="M3 6h18M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2m3 0v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6h0M10 11v6M14 11v6" strokeWidth="2"/>
                    </svg>
                    Delete ({selectedVersions.size})
                  </button>
                )}
                
                <button
                  onClick={exitSelectionMode}
                  className="flex items-center gap-2 text-sm bg-gray-600 hover:bg-gray-700 text-white px-3 py-2 rounded-lg transition-colors duration-200"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path d="M6 18L18 6M6 6l12 12" strokeWidth="2"/>
                  </svg>
                  Cancel
                </button>
              </div>
            )}
          </div>
        ) : null}
        
        <VideoVersionViewer 
          sceneId={sceneId} 
          sceneData={sceneData}
          project={project}
          showUploadCard={isRegenerating || (!hasExistingVideos && !legacyVideo)}
          onImageUpload={handleImageUpload}
          uploadImageBase64={uploadImageBase64}
          isUploading={isUploading}
          uploadLoadingMessage={loadingMessage}
          isRegenerating={isRegenerating}
          onDeleteVersion={handleDeleteVersion}
          selectionMode={selectionMode}
          selectedVersions={selectedVersions}
          onToggleVersionSelection={toggleVersionSelection}
        />
      </div>

      {/* Scene Text and Generate Button when regenerating or first time */}
      {(isRegenerating || (!hasExistingVideos && !legacyVideo)) && (
        <div className="space-y-4">
          <div>
            <label htmlFor="scene-text" className="block mb-3 font-medium text-gray-300">
              Scene Text
            </label>
            <textarea
              id="scene-text"
              value={editableSceneText}
              onChange={(e) => setEditableSceneText(e.target.value)}
              placeholder="Enter the scene text for video generation..."
              className="w-full h-24 p-4 bg-gray-900 border border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-none transition text-gray-300 resize-none"
            />
          </div>

          <div className="flex items-center justify-between">
            <button
              onClick={handleGenerate}
              disabled={isUploading || (!uploadImageBase64 && !(isRegenerating && hasStoredImage))}
              className="bg-blue-600 hover:bg-blue-700 disabled:bg-gray-600 disabled:cursor-not-allowed text-white px-6 py-3 rounded-lg font-medium transition-colors"
            >
              {isUploading ? 'Generating...' : 'Generate Scene'}
            </button>

            {isRegenerating && (
              <button
                onClick={onCancelRegeneration}
                className="text-gray-400 hover:text-gray-300 text-sm underline transition-colors"
              >
                Cancel
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
};