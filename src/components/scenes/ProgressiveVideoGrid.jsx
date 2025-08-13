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
    sceneData,
    videoVersions,
    hasExistingVideos,
    legacyVideo,
    hasStoredImage,
    showUploadCard: isRegenerating || (!hasExistingVideos && !legacyVideo)
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
  
  return (
    <div className="space-y-6">
      {/* Show existing videos with upload card if regenerating */}
      <div>
        {hasExistingVideos || legacyVideo ? (
          <h4 className="text-lg font-semibold text-gray-200 mb-4">Generated Videos</h4>
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