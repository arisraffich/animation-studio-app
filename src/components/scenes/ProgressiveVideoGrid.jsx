import { useState, useEffect } from 'react';
import { VideoVersionViewer } from './VideoVersionViewer';
import { ConfirmationModal } from '../common/ConfirmationModal';
import { generateScene, generateVideoWithSeedance } from '../../services/api';
import { uploadImageFromBase64, deleteVersionImage } from '../../services/storageService';
import { websocketService } from '../../services/websocketService';

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
  const [uploadedImageData, setUploadedImageData] = useState(null); // Firebase Storage data
  const [isUploading, setIsUploading] = useState(false);
  const [isUploadingToStorage, setIsUploadingToStorage] = useState(false);
  const [generationId, setGenerationId] = useState(null); // WebSocket generation tracking
  const [loadingMessage, setLoadingMessage] = useState('Generating...');
  const [editableSceneText, setEditableSceneText] = useState(project.scenes[sceneId]?.text || '');
  
  // Comment system state
  const [selectedComments, setSelectedComments] = useState(new Set());
  const [newCommentText, setNewCommentText] = useState('');
  
  // Get available comments from previous versions
  const getAvailableComments = () => {
    const existingVersions = sceneData?.videoVersions || [];
    const comments = [];
    
    existingVersions.forEach(version => {
      if (version.commentText && version.commentText.trim()) {
        comments.push({
          id: version.id,
          text: version.commentText,
          version: version.version,
          createdAt: version.createdAt
        });
      }
    });
    
    return comments;
  };
  
  // Calculate final text for generation
  const calculateFinalText = () => {
    const originalText = sceneData?.videoVersions?.[0]?.originalText || editableSceneText;
    const comments = getAvailableComments();
    const selectedCommentTexts = comments
      .filter(comment => selectedComments.has(comment.id))
      .map(comment => comment.text);
    
    if (newCommentText.trim()) {
      selectedCommentTexts.push(newCommentText.trim());
    }
    
    return {
      originalText,
      animationNotes: selectedCommentTexts.join('. '),
      finalText: selectedCommentTexts.length > 0 
        ? `${originalText}. ${selectedCommentTexts.join('. ')}`
        : originalText
    };
  };
  
  // Bulk selection state
  const [selectionMode, setSelectionMode] = useState(false);
  const [selectedVersions, setSelectedVersions] = useState(new Set());
  
  // Confirmation modal state
  const [versionsToDelete, setVersionsToDelete] = useState([]);
  const [isDeletingVersions, setIsDeletingVersions] = useState(false);
  const [deleteProgress, setDeleteProgress] = useState('');
  const [deleteError, setDeleteError] = useState(null);
  
  // Sync editableSceneText when project data changes
  useEffect(() => {
    const currentText = project.scenes[sceneId]?.text || '';
    setEditableSceneText(currentText);
  }, [project.scenes[sceneId]?.text, sceneId]);
  
  useEffect(() => {
    websocketService.connect().catch(error => {
      console.log('WebSocket connection failed, will use fallback progress:', error);
    });
  }, []);
  
  // Cleanup WebSocket subscriptions when generationId changes
  useEffect(() => {
    return () => {
      if (generationId) {
        websocketService.unsubscribe(generationId);
      }
    };
  }, [generationId]);
  
  // Clear local UI state when switching scenes
  useEffect(() => {
    // Clear local state when switching scenes to prevent cross-contamination
    setIsUploading(false);
    setLoadingMessage('');
    setGenerationId(null);
    setUploadImageBase64('');
    setImageDimensions(null);
    setUploadedImageData(null);
    setIsUploadingToStorage(false);
  }, [sceneId]);

  const sceneData = project.scenes[sceneId];
  const videoVersions = sceneData?.videoVersions || [];
  
  // Check if there are any videos with URLs
  const videosWithUrls = videoVersions.filter(v => v.prompt?.video_url);
  const hasExistingVideos = videosWithUrls.length > 0;

  // Handle backward compatibility
  const legacyVideo = sceneData?.prompt?.video_url && videoVersions.length === 0;
  
  // Check if we have a stored image for this scene (for regeneration)
  const storedImageData = sceneData?.storedImage;
  const hasStoredImage = (storedImageData?.base64 || storedImageData?.url) && storedImageData?.dimensions;
  
  // Removed unused useStoredImageForGeneration state


  const handleImageUpload = async (file) => {
    const reader = new FileReader();
    reader.onloadend = async () => {
      const img = new Image();
      img.onload = async () => {
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
        
        const base64String = canvas.toDataURL('image/jpeg', 0.8).split(',')[1];
        setUploadImageBase64(base64String);
        
        const currentScene = project.scenes[sceneId] || {};
        if (!currentScene.storedImage) {
          setIsUploadingToStorage(true);
          try {
            const existingVersions = currentScene.videoVersions || [];
            const versionId = `v${existingVersions.length + 1}`;
            const storageData = await uploadImageFromBase64(
              project.id,
              sceneId,
              versionId,
              base64String
            );
            setUploadedImageData(storageData);
          } catch (error) {
            console.error('Immediate upload failed:', error);
            // Continue without failing - fallback to base64 during generation
          }
          setIsUploadingToStorage(false);
        }
      };
      img.src = reader.result;
    };
    reader.readAsDataURL(file);
  };

  const handleGenerate = async () => {
    // Prevent double execution
    if (isUploading) {
      console.log('Generation already in progress, ignoring duplicate call');
      return;
    }

    console.log('REGENERATION DEBUG:', {
      isRegenerating,
      uploadImageBase64: !!uploadImageBase64,
      hasStoredImage,
      storedImageData: storedImageData ? {
        hasBase64: !!storedImageData.base64,
        hasDimensions: !!storedImageData.dimensions,
        hasUrl: !!storedImageData.url,
        base64Length: storedImageData.base64?.length || 0
      } : null,
      calculatedHasStoredImage: storedImageData?.base64 && storedImageData?.dimensions
    });

    // Determine which image to use for generation
    let imageToUse = uploadImageBase64;
    let dimensionsToUse = imageDimensions;
    
    // For cover scene, use PDF page dimensions instead of image dimensions
    if (sceneId === 'cover' && project.pageDimensions) {
      dimensionsToUse = {
        width: project.pageDimensions.width,
        height: project.pageDimensions.height
      };
    }
    
    // If regenerating and no new image uploaded, use stored image  
    if (isRegenerating && !uploadImageBase64 && hasStoredImage) {
      if (storedImageData.base64) {
        // Use base64 data directly (preferred)
        imageToUse = storedImageData.base64;
        dimensionsToUse = storedImageData.dimensions;
        
        // Set for display
        setUploadImageBase64(storedImageData.base64);
        setImageDimensions(storedImageData.dimensions);
        
        console.log('Using stored base64 image:', imageToUse.length);
      } else if (storedImageData.url) {
        // Need to fetch from Firebase URL - but show loading first
        imageToUse = 'FETCH_REQUIRED';
        dimensionsToUse = storedImageData.dimensions;
        console.log('Will fetch Firebase image after showing loading');
      }
    }

    console.log('Final imageToUse:', !!imageToUse);

    if (sceneId !== 'end' && sceneId !== 'cover' && !imageToUse) {
      console.log('ERROR: No image available for generation');
      setError('Please upload an image first.');
      return;
    }

    setIsUploading(true);
    setLoadingMessage('Starting generation... 15%');
    setError('');
    
    // Handle Firebase URL fetch AFTER showing loading state (eliminates delay)
    if (imageToUse === 'FETCH_REQUIRED') {
      setLoadingMessage('Loading stored image...');
      try {
        const response = await fetch('/api/firebase-image', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ imageUrl: storedImageData.url })
        });
        
        if (!response.ok) {
          throw new Error(`Server fetch failed: ${response.status}`);
        }
        
        const { base64 } = await response.json();
        imageToUse = base64;
        
        // Set for display
        setUploadImageBase64(base64);
        setImageDimensions(storedImageData.dimensions);
        
        console.log('Fetched Firebase image:', base64.length);
      } catch (error) {
        console.error('Failed to fetch Firebase image:', error);
        setError('Failed to load stored image for regeneration.');
        setIsUploading(false);
        return;
      }
    }
    
    const currentGenerationId = `gen_${project.id}_${sceneId}_${Date.now()}`;
    setGenerationId(currentGenerationId);
    
    // Track generation locally only
    console.log('Starting generation with ID:', currentGenerationId);
    
    // REMOVED: This was causing Firebase updates that reset isRegenerating state
    // const updatedScenesForProgress = {
    //   ...project.scenes,
    //   [sceneId]: {
    //     ...project.scenes[sceneId],
    //     status: 'in_progress',
    //     text: editableSceneText
    //   }
    // };
    // updateProject(project.id, { scenes: updatedScenesForProgress });
    console.log('Scene will be marked as completed when generation finishes');
    
    // Setup WebSocket progress callback
    const handleWebSocketProgress = (progressData) => {
      if (progressData.generationId === currentGenerationId || !progressData.generationId) {
        const message = progressData.message || 'Processing...';
        const progress = progressData.progress || 0;
        setLoadingMessage(`${message} ${progress}%`);
        
        // Local progress tracking only
      }
    };
    
    // Subscribe to WebSocket progress updates
    websocketService.subscribe(currentGenerationId, handleWebSocketProgress);
    
    let progressTimer = null;
    let currentProgress = 15;
    
    const updateProgress = () => {
      currentProgress += Math.random() * 6 + 2;
      if (currentProgress > 45) {
        clearInterval(progressTimer);
        return;
      }
      const message = `Starting generation... ${Math.round(currentProgress)}%`;
      setLoadingMessage(message);
      
      // Local fallback progress tracking only
    };
    
    // Start fallback progress immediately (WebSocket will override if it works)
    progressTimer = setInterval(updateProgress, 700);
    console.log('Started fallback progress timer');

    try {
      let finalUploadedImageData = uploadedImageData;
      
      // Get scene data early for use throughout the function
      const existingScene = project.scenes[sceneId] || {};
      const existingVersions = existingScene.videoVersions || [];
      
      // Calculate final text using comment system
      const textData = calculateFinalText();
      
      // Create modified project with final combined text
      const projectWithEditedText = {
        ...project,
        scenes: {
          ...project.scenes,
          [sceneId]: {
            ...project.scenes[sceneId],
            text: textData.finalText
          }
        }
      };
      
      let uploadPromise = Promise.resolve(finalUploadedImageData);
      let promptPromise;
      
      // Start both operations in parallel
      setLoadingMessage('Processing in parallel...');
      
      // If we still need to upload, do it in parallel
      if (imageToUse && !existingScene.storedImage && !uploadedImageData) {
        uploadPromise = (async () => {
          try {
            const versionId = `v${existingVersions.length + 1}`;
            const result = await uploadImageFromBase64(
              project.id, 
              sceneId, 
              versionId, 
              imageToUse
            );
            return result;
          } catch (error) {
            console.error('Parallel upload failed:', error);
            return null;
          }
        })();
      }
      
      // Start prompt generation immediately
      if (sceneId !== 'end') {
        promptPromise = (async () => {
          try {
            if (sceneId === 'cover') {
              // Skip video generation for covers - just return text prompt
              setLoadingMessage('Cover completed!');
              return {
                prompt: editableSceneText,
                model: 'text-only',
                no_video: true
              };
            } else {
              // Use Seedance for story scenes
              return await generateVideoWithSeedance(
                projectWithEditedText, 
                sceneId, 
                imageToUse, 
                '', // No feedback
                setError, 
                setLoadingMessage, 
                { 
                  imageDimensions: dimensionsToUse, 
                  textData,
                  generationId: currentGenerationId,
                  websocketCallback: handleWebSocketProgress
                }
              );
            }
          } catch (error) {
            // If video generation fails, fall back to JSON only
            console.log('Seedance video generation failed, using JSON only:', error.message);
            setError(`Video generation failed: ${error.message}. Generated prompt without video.`);
            setLoadingMessage('Creating scene data...');
            const fallbackPrompt = await generateScene(projectWithEditedText, sceneId, imageToUse, '', setError, textData);
            fallbackPrompt.video_generation_failed = true;
            return fallbackPrompt;
          }
        })();
      } else {
        promptPromise = generateScene(projectWithEditedText, sceneId, imageToUse, '', setError, textData);
      }
      
      // Wait for both operations to complete
      const [parallelUploadResult, newPrompt] = await Promise.all([uploadPromise, promptPromise]);
      
      // Use the parallel upload result if it succeeded
      if (parallelUploadResult && !finalUploadedImageData) {
        finalUploadedImageData = parallelUploadResult;
      }
      
      
      // Handle video versioning (variables already declared above)
      
      if (uploadedImageData) {
        setLoadingMessage('Starting generation with pre-uploaded image...');
      }

      // Create new version entry with comment system support
      const newVersion = {
        id: Date.now(), // Simple timestamp ID
        version: existingVersions.length + 1,
        createdAt: new Date().toISOString(),
        prompt: newPrompt,
        isLatest: true,
        // Comment system fields
        originalText: existingVersions.length === 0 ? textData.originalText : existingVersions[0].originalText,
        commentText: newCommentText.trim(), // Store the new comment for this version
        finalText: textData.finalText
      };
      
      // Mark previous versions as not latest
      const updatedVersions = existingVersions.map(v => ({ ...v, isLatest: false }));
      updatedVersions.push(newVersion);

      const updatedScenes = {
        ...project.scenes,
        [sceneId]: {
          ...existingScene,
          status: 'completed', // CRITICAL: Ensure status is set to completed
          prompt: newPrompt, // Keep for backward compatibility
          text: editableSceneText,
          videoVersions: updatedVersions,
          // Store image data for future regenerations (first time only)
          storedImage: existingScene.storedImage || (finalUploadedImageData ? {
            url: finalUploadedImageData.url,
            path: finalUploadedImageData.path,
            dimensions: dimensionsToUse,
            uploadedAt: new Date().toISOString()
          } : imageToUse ? {
            // Fallback to base64 if Storage upload failed
            base64: imageToUse,
            dimensions: dimensionsToUse,
            uploadedAt: new Date().toISOString()
          } : null)
        }
      };
      
      console.log('CRITICAL: Updating scene', sceneId, 'to completed status');
      
      let projectUpdates = { scenes: updatedScenes };
      if (sceneId === 'cover' && newPrompt.extracted_title) {
        projectUpdates.name = newPrompt.extracted_title;
        projectUpdates.author = newPrompt.extracted_author || 'Unknown Author';
      }

      updateProject(project.id, projectUpdates);
      
      // Reset upload state and comment system
      setUploadImageBase64('');
      setImageDimensions(null);
      setSelectedComments(new Set());
      setNewCommentText('');
      
      websocketService.unsubscribe(currentGenerationId);
      setGenerationId(null);
      console.log('Generation completed:', currentGenerationId);
      
      onCancelRegeneration(); // Close regeneration mode

    } catch (err) {
      setError(`Operation failed: ${err.message}.`);
      if (progressTimer) clearInterval(progressTimer);
      
      // Clean up WebSocket on error
      websocketService.unsubscribe(currentGenerationId);
      setGenerationId(null);
      console.log('Generation failed:', currentGenerationId, err.message);
    } finally {
      setIsUploading(false);
      if (progressTimer) clearInterval(progressTimer);
    }
  };

  // Handle individual video version deletion
  const handleDeleteVersion = async (versionId) => {
    try {
      const existingScene = project.scenes[sceneId] || {};
      const existingVersions = existingScene.videoVersions || [];
      
      // Find the version being deleted to get version number for Storage cleanup
      const versionToDelete = existingVersions.find(v => v.id === versionId);
      if (versionToDelete) {
        // Delete Storage file (fire and forget - don't await)
        deleteVersionImage(project.id, sceneId, `v${versionToDelete.version}`);
      }
      
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

  // Show confirmation modal for bulk delete
  const bulkDeleteVersions = () => {
    if (selectedVersions.size === 0) return;
    
    const existingScene = project.scenes[sceneId] || {};
    const existingVersions = existingScene.videoVersions || [];
    const versionsToDelete = existingVersions.filter(v => selectedVersions.has(v.id));
    
    setVersionsToDelete(versionsToDelete);
  };

  // Actual bulk deletion after confirmation
  const confirmBulkDelete = async () => {
    try {
      setIsDeletingVersions(true);
      setDeleteError(null);
      
      const isMultiple = versionsToDelete.length > 1;
      const versionText = isMultiple ? `${versionsToDelete.length} video versions` : 'video version';
      
      setDeleteProgress(`Preparing to delete ${versionText}...`);
      await new Promise(resolve => setTimeout(resolve, 500));
      
      setDeleteProgress('Removing video files...');
      
      // Delete Storage files for selected versions (fire and forget)
      const existingScene = project.scenes[sceneId] || {};
      const existingVersions = existingScene.videoVersions || [];
      const versionsToDeleteFromStorage = existingVersions.filter(v => selectedVersions.has(v.id));
      
      versionsToDeleteFromStorage.forEach(version => {
        deleteVersionImage(project.id, sceneId, `v${version.version}`);
      });
      
      await new Promise(resolve => setTimeout(resolve, 800));
      
      setDeleteProgress(`Deleting ${versionText}...`);
      
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
      
      setDeleteProgress('Cleaning up...');
      
      // Close modal and exit selection mode
      setVersionsToDelete([]);
      setIsDeletingVersions(false);
      setDeleteProgress('');
      exitSelectionMode();
      
    } catch (error) {
      console.error('Error bulk deleting versions:', error);
      setIsDeletingVersions(false);
      setDeleteProgress('');
      setDeleteError(`Failed to delete video versions: ${error.message}`);
    }
  };

  const cancelDelete = () => {
    setVersionsToDelete([]);
    setIsDeletingVersions(false);
    setDeleteProgress('');
    setDeleteError(null);
  };
  
  return (
    <>
      <ConfirmationModal 
        projects={versionsToDelete.map(v => ({ 
          id: v.id, 
          name: `Version ${v.version}` 
        }))}
        onConfirm={confirmBulkDelete} 
        onCancel={cancelDelete}
        isDeleting={isDeletingVersions}
        deleteProgress={deleteProgress}
        deleteError={deleteError}
      />
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
          showUploadCard={isRegenerating || (sceneId !== 'cover' && !hasExistingVideos)}
          onImageUpload={handleImageUpload}
          uploadImageBase64={uploadImageBase64}
          isUploading={isUploading}
          uploadLoadingMessage={loadingMessage}
          isRegenerating={isRegenerating}
          onDeleteVersion={handleDeleteVersion}
          selectionMode={selectionMode}
          selectedVersions={selectedVersions}
          onToggleVersionSelection={toggleVersionSelection}
          onGenerate={handleGenerate}
          hasUploadedImage={!!uploadImageBase64}
          isUploadingToStorage={isUploadingToStorage}
        />
      </div>

      {/* Comment System UI when regenerating or first time */}
      {(isRegenerating || (!hasExistingVideos && !legacyVideo)) && (
        <div className="space-y-6">
          {/* First time generation - Scene Text input */}
          {!isRegenerating && (
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
          )}

          {/* Regeneration - Comment System */}
          {isRegenerating && (
            <div className="space-y-4">
              {/* New Comment Input */}
              <div>
                <label htmlFor="new-comment" className="block mb-3 font-medium text-gray-300">
                  New Animation Notes
                </label>
                <textarea
                  id="new-comment"
                  value={newCommentText}
                  onChange={(e) => setNewCommentText(e.target.value)}
                  placeholder="Add specific animation directions..."
                  className="w-full h-20 p-4 bg-gray-900 border border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-none transition text-gray-300 resize-none"
                />
              </div>

              {/* Live Preview */}
              <div>
                <label className="block mb-3 font-medium text-gray-300">
                  Generation Preview
                </label>
                <div className="p-4 bg-gray-800 rounded-xl border border-gray-600">
                  <div className="text-sm text-gray-400 mb-2">Scene text:</div>
                  <div className="text-gray-300 mb-3">"{calculateFinalText().originalText}"</div>
                  
                  {calculateFinalText().animationNotes && (
                    <>
                      <div className="text-sm text-gray-400 mb-2">Animation notes:</div>
                      <div className="text-blue-300">{calculateFinalText().animationNotes}</div>
                    </>
                  )}
                </div>
              </div>

              {/* Available Comments */}
              {getAvailableComments().length > 0 && (
                <div>
                  <label className="block mb-3 font-medium text-gray-300">
                    Previous Animation Notes
                  </label>
                  <div className="space-y-2">
                    {getAvailableComments().map((comment) => (
                      <label
                        key={comment.id}
                        className="flex items-start gap-3 p-3 bg-gray-800 rounded-lg hover:bg-gray-750 transition-colors cursor-pointer"
                      >
                        <input
                          type="checkbox"
                          checked={selectedComments.has(comment.id)}
                          onChange={(e) => {
                            const newSelected = new Set(selectedComments);
                            if (e.target.checked) {
                              newSelected.add(comment.id);
                            } else {
                              newSelected.delete(comment.id);
                            }
                            setSelectedComments(newSelected);
                          }}
                          className="mt-1 rounded border-gray-600 bg-gray-700 text-blue-500 focus:ring-2 focus:ring-blue-500"
                        />
                        <div className="flex-1">
                          <div className="text-gray-300 text-sm">{comment.text}</div>
                          <div className="text-gray-500 text-xs mt-1">
                            From v{comment.version}
                          </div>
                        </div>
                      </label>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {isRegenerating && (
            <div className="flex justify-between">
              <button
                onClick={handleGenerate}
                disabled={isUploading}
                className="bg-blue-600 hover:bg-blue-700 disabled:bg-gray-600 disabled:cursor-not-allowed text-white px-6 py-2 rounded-lg font-medium transition-colors duration-200"
              >
                Generate Video
              </button>
              <button
                onClick={onCancelRegeneration}
                className="text-gray-400 hover:text-gray-300 text-sm underline transition-colors"
              >
                Cancel
              </button>
            </div>
          )}
        </div>
      )}
      </div>
    </>
  );
};