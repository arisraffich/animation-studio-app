import { useState, useEffect } from 'react';
import { VideoVersionViewer } from './VideoVersionViewer';
import { ConfirmationModal } from '../common/ConfirmationModal';
import { generateScene, generateVideoWithSeedance, generateSeedancePrompt, createSeedanceTask, pollSeedanceTask, generateMusicWithElevenLabs } from '../../services/api';
import { uploadImageFromBase64, deleteVersionImage, uploadMusicFromBlob, deleteVersionMusic } from '../../services/storageService';
import { websocketService } from '../../services/websocketService';
import { getProject } from '../../services/firebaseService';
import { doc, updateDoc } from 'firebase/firestore';
import { db } from '../../services/firebase';

export const ProgressiveVideoGrid = ({ 
  sceneId, 
  project, 
  updateProject, 
  setError, 
  isRegenerating,
  onCancelRegeneration,
  selectionMode = false,
  selectedVersions = new Set(),
  setSelectedVersions = () => {},
  onExitSelectionMode = () => {}
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
  
  // Bulk selection functions use props instead of local state
  
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
      // WebSocket connection failed, will use fallback progress
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
  const hasStoredImage = storedImageData?.url && storedImageData?.dimensions;
  


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
      return;
    }


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
      // Always fetch from Firebase Storage URL
      imageToUse = 'FETCH_REQUIRED';
      dimensionsToUse = storedImageData.dimensions;
    }
    
    // If cover has stored image but no upload, use it for generation
    if (sceneId === 'cover' && !uploadImageBase64 && hasStoredImage && !isRegenerating) {
      imageToUse = 'FETCH_REQUIRED';
      dimensionsToUse = storedImageData.dimensions;
    }


    if (sceneId !== 'end' && sceneId !== 'cover' && sceneId !== 'music' && !imageToUse) {
      setError('Please upload an image first.');
      return;
    }
    
    // For cover scenes, we can proceed without image upload if cover already exists in PDF
    if (sceneId === 'cover' && !imageToUse && !hasStoredImage) {
      setError('Cover image is required. Please upload your PDF with cover page or upload cover image manually.');
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
        
      } catch (error) {
        setError('Failed to load stored image for regeneration.');
        setIsUploading(false);
        return;
      }
    }
    
    const currentGenerationId = `gen_${project.id}_${sceneId}_${Date.now()}`;
    setGenerationId(currentGenerationId);
    
    // Track generation locally only
    
    // IMMEDIATE UI UPDATE: Create loading video card
    const existingScene = project.scenes[sceneId] || {};
    const existingVersions = sceneId === 'music' ? (existingScene.musicVersions || []) : (existingScene.videoVersions || []);
    const nextVersionNumber = existingVersions.length + 1;
    
    // Create temporary loading version for immediate UI feedback
    const loadingVersion = {
      id: currentGenerationId, // Use generation ID as temporary ID
      version: nextVersionNumber,
      isLatest: true,
      isLoading: true, // Special flag for loading state
      prompt: {
        loading: true,
        generationId: currentGenerationId
      },
      uploadedAt: new Date().toISOString()
    };
    
    // Add loading version to existing versions
    const versionsWithLoading = existingVersions.map(v => ({ ...v, isLatest: false }));
    versionsWithLoading.push(loadingVersion);
    
    // Update project state immediately to show loading card
    const versionField = sceneId === 'music' ? 'musicVersions' : 'videoVersions';
    const updatedScenes = {
      ...project.scenes,
      [sceneId]: {
        ...existingScene,
        status: 'in_progress',
        [versionField]: versionsWithLoading
      }
    };
    
    updateProject(project.id, { scenes: updatedScenes });
    
    // const updatedScenesForProgress = {
    //   ...project.scenes,
    //   [sceneId]: {
    //     ...project.scenes[sceneId],
    //     status: 'in_progress',
    //     text: editableSceneText
    //   }
    // };
    // updateProject(project.id, { scenes: updatedScenesForProgress });
    
    // Enhanced WebSocket progress callback with unified progression
    let lastProgress = 15;
    const handleWebSocketProgress = (progressData) => {
      if (progressData.generationId === currentGenerationId || !progressData.generationId) {
        let progress = progressData.progress || 0;
        
        // Always maintain forward progression - use the higher of current or new
        progress = Math.max(lastProgress, Math.round(progress));
        lastProgress = progress;
        
        // Unified message regardless of backend stage
        const isMusic = sceneId === 'music';
        const message = progress >= 100 
          ? (isMusic ? 'Music generation complete!' : 'Video generation complete!')
          : (isMusic ? 'Generating music...' : 'Generating video...');
        
        setLoadingMessage(`${message} ${progress}%`);
        
        // Clear fallback timer when WebSocket takes over
        if (progressTimer) {
          clearInterval(progressTimer);
          progressTimer = null;
        }
      }
    };
    
    // Subscribe to WebSocket progress updates
    websocketService.subscribe(currentGenerationId, handleWebSocketProgress);
    
    let progressTimer = null;
    let currentProgress = 15;
    
    const updateProgress = () => {
      // Use clean integer increments instead of random decimals
      const increment = currentProgress < 30 ? 2 : 
                       currentProgress < 50 ? 1 : 
                       currentProgress < 70 ? 1 : 0;
      
      currentProgress += increment;
      
      // Cap fallback progress at 90% to leave room for WebSocket updates
      if (currentProgress >= 90) {
        currentProgress = 90;
        clearInterval(progressTimer);
        return;
      }
      
      // Keep unified message throughout
      const message = 'Generating video...';
      
      setLoadingMessage(`${message} ${Math.round(currentProgress)}%`);
      lastProgress = Math.max(lastProgress, Math.round(currentProgress));
    };
    
    // Start fallback progress immediately (WebSocket will override if it works)
    progressTimer = setInterval(updateProgress, 500); // Faster updates - every 500ms

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
      // Let unified progress system handle messages
      
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
            return null;
          }
        })();
      }
      
      // Start prompt generation immediately
      if (sceneId !== 'end' && sceneId !== 'music') {
        promptPromise = (async () => {
          try {
            // Use Seedance for all scenes including cover
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
          } catch (error) {
            // If video generation fails, fall back to JSON only
            setError(`Video generation failed: ${error.message}. Generated prompt without video.`);
            // Creating scene data - let unified system handle
            const fallbackPrompt = await generateScene(projectWithEditedText, sceneId, imageToUse, '', setError, textData);
            fallbackPrompt.video_generation_failed = true;
            return fallbackPrompt;
          }
        })();
      } else if (sceneId === 'end') {
        // End scene - text-to-video generation using story elements
        promptPromise = (async () => {
          try {
            console.log('🎬 End Scene Generation - Starting...');
            console.log('🎬 Project:', projectWithEditedText.name);
            console.log('🎬 Scene ID:', sceneId);
            console.log('🎬 Text Data:', textData);
            
            // Generate sophisticated end scene prompt using GPT-5
            const endScenePrompt = await generateSeedancePrompt(projectWithEditedText, sceneId, null, '', setError, textData);
            console.log('🎬 Generated Seedance prompt:', endScenePrompt);
            
            // Create text-to-video generation (no image input)
            console.log('🎬 Creating Seedance task...');
            const predictionId = await createSeedanceTask(
              null, // No image for end scene
              endScenePrompt,
              project.pageDimensions || { width: 1920, height: 1080 }, // Use book dimensions or default
              setError,
              currentGenerationId,
              5 // 5 second duration
            );
            console.log('🎬 Seedance task created, prediction ID:', predictionId);
            
            // Poll for completion with progress updates
            let attempts = 0;
            const maxAttempts = 60; // 10 minutes max
            console.log('🎬 Starting polling for end scene generation...');
            
            while (attempts < maxAttempts) {
              const prediction = await pollSeedanceTask(predictionId, setError, currentGenerationId);
              console.log(`🎬 Poll attempt ${attempts + 1}, status:`, prediction.status);
              
              if (prediction.status === 'succeeded' && prediction.output) {
                console.log('🎬 End scene video generated successfully!', prediction.output);
                return {
                  prompt: endScenePrompt,
                  video_url: prediction.output,
                  prediction_id: predictionId,
                  model: 'seedance-end-scene',
                  aspect_ratio: project.pageDimensions ? 
                    `${project.pageDimensions.width}:${project.pageDimensions.height}` : '16:9',
                  resolution: '1080p',
                  duration: 5
                };
              } else if (prediction.status === 'failed') {
                console.error('🎬 End scene generation failed:', prediction.error);
                throw new Error(`End scene generation failed: ${prediction.error || 'Unknown error'}`);
              } else if (prediction.status === 'canceled') {
                console.error('🎬 End scene generation canceled');
                throw new Error('End scene generation was canceled');
              }
              
              // Update progress for end scene
              const progress = Math.min(90, 30 + (attempts * 2)); // Start at 30%, progress to 90%
              setLoadingMessage(`Creating end scene... ${progress}%`);
              
              await new Promise(resolve => setTimeout(resolve, 10000)); // Wait 10 seconds
              attempts++;
            }
            
            console.error('🎬 End scene generation timed out after 10 minutes');
            throw new Error('End scene generation timed out after 10 minutes');
          } catch (error) {
            console.error('🎬 End scene generation error:', error);
            // Fallback to simple JSON scene if video generation fails
            setError(`End scene video generation failed: ${error.message}. Generated prompt without video.`);
            const fallbackPrompt = await generateScene(projectWithEditedText, sceneId, null, '', setError, textData);
            fallbackPrompt.video_generation_failed = true;
            return fallbackPrompt;
          }
        })();
      } else if (sceneId === 'music') {
        // Music scene - text-to-audio generation using background music prompt
        promptPromise = (async () => {
          try {
            
            // Use the music prompt from the scene text
            const musicPrompt = textData.finalText;
            
            // Generate music with ElevenLabs
            const musicResult = await generateMusicWithElevenLabs(
              musicPrompt,
              setError,
              setLoadingMessage,
              { 
                generationId: currentGenerationId,
                websocketCallback: handleWebSocketProgress
              }
            );
            
            return {
              prompt: musicPrompt,
              audio_url: musicResult.audio_url, // Temporary blob URL for immediate playback
              audio_blob: musicResult.audio_blob, // Blob for Firebase Storage upload
              model: musicResult.model,
              format: musicResult.format,
              duration: musicResult.duration
            };
          } catch (error) {
            setError(`Music generation failed: ${error.message}. Generated prompt without audio.`);
            
            // Fallback - return just the prompt without audio
            return {
              prompt: textData.finalText,
              music_generation_failed: true,
              model: 'elevenlabs-fallback',
              format: 'mp3',
              duration: 30
            };
          }
        })();
      }
      
      // Wait for both operations to complete
      const [parallelUploadResult, newPrompt] = await Promise.all([uploadPromise, promptPromise]);
      
      // Use the parallel upload result if it succeeded
      if (parallelUploadResult && !finalUploadedImageData) {
        finalUploadedImageData = parallelUploadResult;
      }
      
      // Handle music file storage for music scenes
      let finalMusicFileData = null;
      if (sceneId === 'music' && newPrompt && newPrompt.audio_blob && !newPrompt.music_generation_failed) {
        try {
          setLoadingMessage('Storing music file...');
          const versionId = `v${existingVersions.length + 1}`;
          finalMusicFileData = await uploadMusicFromBlob(
            project.id,
            sceneId,
            versionId,
            newPrompt.audio_blob
          );
          
          // Clean up the temporary blob URL to free memory
          if (newPrompt.audio_url && newPrompt.audio_url.startsWith('blob:')) {
            URL.revokeObjectURL(newPrompt.audio_url);
          }
        } catch (error) {
          // Don't fail the whole generation - just log the error
          setError(`Music generated successfully but file storage failed: ${error.message}`);
        }
      }
      
      
      // Handle video versioning (variables already declared above)
      
      // Using pre-uploaded image - let unified system handle

      // Create new version entry with comment system support
      const newVersion = {
        id: Date.now(), // Simple timestamp ID
        version: existingVersions.length + 1,
        createdAt: new Date().toISOString(),
        prompt: sceneId === 'music' && finalMusicFileData ? {
          ...newPrompt,
          audio_url: finalMusicFileData.url // Replace blob URL with Firebase Storage URL
        } : newPrompt,
        isLatest: true,
        // Comment system fields
        originalText: existingVersions.length === 0 ? textData.originalText : existingVersions[0].originalText,
        commentText: newCommentText.trim(), // Store the new comment for this version
        finalText: textData.finalText,
        // Music file data for music scenes
        ...(sceneId === 'music' && finalMusicFileData ? {
          musicFile: {
            url: finalMusicFileData.url,
            path: finalMusicFileData.path,
            size: finalMusicFileData.size,
            uploadedAt: new Date().toISOString()
          }
        } : {})
      };
      
      // Mark previous versions as not latest
      const updatedVersions = existingVersions.map(v => ({ ...v, isLatest: false }));
      updatedVersions.push(newVersion);
      

      // Determine status based on whether video was actually generated
      const hasVideo = newPrompt && (newPrompt.video_url || newPrompt.audio_url);
      const newStatus = hasVideo ? 'completed' : 'in_progress';

      const updatedScenes = {
        ...project.scenes,
        [sceneId]: {
          ...existingScene,
          status: newStatus, // completed only when video/audio is ready, otherwise in_progress
          prompt: sceneId === 'music' && finalMusicFileData ? {
            ...newPrompt,
            audio_url: finalMusicFileData.url // Replace blob URL with Firebase Storage URL
          } : newPrompt, // Keep for backward compatibility
          text: editableSceneText,
          videoVersions: updatedVersions,
          // Store image data for future regenerations (first time only)
          storedImage: existingScene.storedImage || (finalUploadedImageData ? {
            url: finalUploadedImageData.url,
            path: finalUploadedImageData.path,
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
      
      // Reset upload state and comment system
      setUploadImageBase64('');
      setImageDimensions(null);
      setSelectedComments(new Set());
      setNewCommentText('');
      
      websocketService.unsubscribe(currentGenerationId);
      setGenerationId(null);
      
      onCancelRegeneration(); // Close regeneration mode

    } catch (err) {
      setError(`Operation failed: ${err.message}.`);
      if (progressTimer) clearInterval(progressTimer);
      
      // Clean up WebSocket on error
      websocketService.unsubscribe(currentGenerationId);
      setGenerationId(null);
    } finally {
      setIsUploading(false);
      if (progressTimer) clearInterval(progressTimer);
    }
  };

  // Handle individual version deletion (video or music)
  const handleDeleteVersion = async (versionId) => {
    try {
      
      const existingScene = project.scenes[sceneId] || {};
      
      // Handle music scene deletion - CLEAN SIMPLE LOGIC
      if (sceneId === 'music') {
        const existingVersions = existingScene.musicVersions || [];
        
        // Find the version being deleted to get version number for Storage cleanup
        const versionToDelete = existingVersions.find(v => v.id === versionId);
        if (versionToDelete) {
          // Delete Storage file (fire and forget - don't await)
          deleteVersionMusic(project.id, sceneId, `v${versionToDelete.version}`);
        }
        
        // Filter out the deleted version
        const remainingVersions = existingVersions.filter(v => v.id !== versionId);
        
        if (remainingVersions.length === 0) {
          // Complete scene reset - delete everything except preserve original text
          const updatedScenes = {
            ...project.scenes,
            [sceneId]: {
              text: existingScene.text || '', // Preserve original scene text
              status: 'pending'
              // Clear: prompt, musicVersions, musicFile - everything else
            }
          };
          const projectRef = doc(db, 'projects', project.id);
          await updateDoc(projectRef, { scenes: updatedScenes });
          
          // IMMEDIATE UI UPDATE: Refresh parent component state
          updateProject(project.id, { scenes: updatedScenes });
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
              musicVersions: updatedVersions,
              prompt: updatedVersions.find(v => v.isLatest)?.prompt || existingScene.prompt
            }
          };
          
          const projectRef = doc(db, 'projects', project.id);
          await updateDoc(projectRef, { scenes: updatedScenes });
          
          // IMMEDIATE UI UPDATE: Refresh parent component state
          updateProject(project.id, { scenes: updatedScenes });
        }
      } else {
        // Handle video version deletion - EXACT ORIGINAL LOGIC
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
          // Complete scene reset - delete everything except preserve original text  
          const updatedScenes = {
            ...project.scenes,
            [sceneId]: {
              text: existingScene.text || '', // Preserve original scene text
              status: 'pending'
              // Clear: prompt, videoVersions, storedImage - everything else
            }
          };
          const projectRef = doc(db, 'projects', project.id);
          await updateDoc(projectRef, { scenes: updatedScenes });
          
          // IMMEDIATE UI UPDATE: Refresh parent component state
          updateProject(project.id, { scenes: updatedScenes });
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
          
          const projectRef = doc(db, 'projects', project.id);
          await updateDoc(projectRef, { scenes: updatedScenes });
          
          // IMMEDIATE UI UPDATE: Refresh parent component state
          updateProject(project.id, { scenes: updatedScenes });
        }
      }
    } catch (error) {
      setError(`Failed to delete version: ${error.message}. Please try again.`);
    }
  };

  // Bulk selection functions
  const toggleVersionSelection = (versionId) => {
    const newSet = new Set(selectedVersions);
    if (newSet.has(versionId)) {
      newSet.delete(versionId);
    } else {
      newSet.add(versionId);
    }
    setSelectedVersions(newSet);
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
        // Complete scene reset - preserve original scene text
        const existingScene = project.scenes[sceneId] || {};
        const updatedScenes = {
          ...project.scenes,
          [sceneId]: {
            text: existingScene.text || '', // Preserve original scene text
            status: 'pending'
          }
        };
        const projectRef = doc(db, 'projects', project.id);
        await updateDoc(projectRef, { scenes: updatedScenes });
        
        // IMMEDIATE UI UPDATE: Refresh parent component state
        updateProject(project.id, { scenes: updatedScenes });
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
        
        const projectRef = doc(db, 'projects', project.id);
        await updateDoc(projectRef, { scenes: updatedScenes });
        
        // IMMEDIATE UI UPDATE: Refresh parent component state
        updateProject(project.id, { scenes: updatedScenes });
      }
      
      setDeleteProgress('Cleaning up...');
      
      // Close modal and exit selection mode
      setVersionsToDelete([]);
      setIsDeletingVersions(false);
      setDeleteProgress('');
      setSelectedVersions(new Set());
      onExitSelectionMode();
      
    } catch (error) {
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
      {/* Selection mode controls - only show when in selection mode */}
      {selectionMode && (hasExistingVideos || legacyVideo) && (
        <div className="flex items-center gap-2 mb-3">
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
        </div>
      )}

      <div className="space-y-4">
      {/* Show existing videos with upload card if regenerating */}
      <div>
        
        <VideoVersionViewer 
          sceneId={sceneId} 
          sceneData={sceneData}
          project={project}
          showUploadCard={!hasExistingVideos && !isUploading && !generationId && sceneId !== 'end' && sceneId !== 'music' && sceneId !== 'cover'}
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

      {/* Always show page label and scene text */}
      <div className="space-y-4">
        {/* Page label - always visible */}
        <div className="flex items-center gap-3">
          <span className="text-sm font-semibold text-blue-400 bg-blue-400/10 px-3 py-1 rounded-full border border-blue-400/20">
            {sceneId === 'cover' ? 'Cover' : sceneId === 'end' ? 'End Scene' : sceneId === 'music' ? 'Music' : `Page ${sceneId}`}
          </span>
          <span className="font-medium text-gray-300">{sceneId === 'music' ? 'Music Prompt' : 'Scene Text'}</span>
        </div>
        
        {/* Scene text - always visible */}
        <div>
          <textarea
            id="scene-text"
            value={editableSceneText}
            onChange={(e) => setEditableSceneText(e.target.value)}
            placeholder="Enter the scene text for video generation..."
            className="w-full h-24 p-4 bg-gray-900 border border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-none transition text-gray-300 resize-none"
            readOnly={!isRegenerating && hasExistingVideos}
          />
        </div>
      </div>

      {/* Comment System UI when regenerating or first time */}
      {(isRegenerating || (!hasExistingVideos && !legacyVideo)) && (
        <div className="space-y-6">
          {/* Generate button for first time */}
          {!isRegenerating && (
            <div className="pt-2">
              <button
                onClick={handleGenerate}
                disabled={isUploading || (sceneId !== 'end' && sceneId !== 'music' && !uploadImageBase64 && !hasStoredImage)}
                className="bg-blue-600 hover:bg-blue-700 disabled:bg-gray-600 disabled:cursor-not-allowed text-white px-6 py-2 rounded-lg font-medium transition-colors duration-200"
              >
                {sceneId === 'music' ? 'Generate Music' : 'Generate Video'}
              </button>
            </div>
          )}

          {/* Regeneration - Comment System */}
          {isRegenerating && (
            <div className="space-y-4">
              {/* Animation Notes section header */}
              <div className="pt-2">
                <span className="font-medium text-gray-300">Animation Notes</span>
              </div>
              
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
                {sceneId === 'music' ? 'Generate Music' : 'Generate Video'}
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