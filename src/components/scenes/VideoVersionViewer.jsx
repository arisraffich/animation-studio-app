import { useState, useEffect, useRef } from 'react';
import { Play, Maximize, X, Loader2, UploadCloud, RefreshCw } from '../common/Icons';

export const VideoVersionViewer = ({ 
  sceneId, 
  sceneData, 
  project,
  showUploadCard = false, 
  onImageUpload = null,
  uploadImageBase64 = null,
  isUploading = false,
  uploadLoadingMessage = 'Generating...',
  isRegenerating = false
}) => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDragOver, setIsDragOver] = useState(false);
  const fileInputRef = useRef(null);
  
  // Get video versions from the scene data
  const videoVersions = sceneData?.videoVersions || [];
  
  // Check if we have stored image data for regeneration
  const storedImageData = sceneData?.storedImage;
  // Don't show the regenerate UI - we want empty card when regenerating
  const showRegenerateUI = false;
  
  // Always use videoVersions if available, regardless of legacy video
  let allVersions = videoVersions;
  
  // If no versions exist but there's a legacy video, create one version from it
  if (videoVersions.length === 0 && sceneData?.prompt?.video_url) {
    allVersions = [{
      id: 'legacy',
      version: 1,
      createdAt: sceneData.createdAt || new Date().toISOString(),
      prompt: sceneData.prompt,
      isLatest: true
    }];
  }
  
  const videosWithUrls = allVersions.filter(v => v.prompt?.video_url);
  
  // Add upload card to the list if needed
  const totalCards = [...videosWithUrls];
  if (showUploadCard) {
    totalCards.push({
      id: 'upload',
      version: allVersions.length + 1,
      isUploadCard: true
    });
  }
  
  // Upload handlers
  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragOver(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setIsDragOver(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragOver(false);
    
    const files = e.dataTransfer.files;
    if (files.length > 0 && onImageUpload) {
      const file = files[0];
      if (file.type.startsWith('image/')) {
        onImageUpload(file);
      }
    }
  };

  const handleClick = (card) => {
    if (card.isUploadCard && !uploadImageBase64 && !isUploading) {
      fileInputRef.current?.click();
    } else if (!card.isUploadCard) {
      openModal(card);
    }
  };

  const handleFileInput = (e) => {
    const file = e.target.files[0];
    if (file && onImageUpload) {
      onImageUpload(file);
    }
  };
  
  // Close modal on ESC key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isModalOpen) {
        setIsModalOpen(false);
      }
    };
    
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isModalOpen]);
  
  const openModal = (video) => {
    setSelectedVideo(video);
    setIsModalOpen(true);
  };
  
  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedVideo(null);
  };
  
  // Dynamic aspect ratio calculation based on PDF page dimensions
  const getAspectRatioClass = (card) => {
    // First priority: use PDF page dimensions if available
    if (project?.pageDimensions) {
      const { aspectRatio } = project.pageDimensions;
      console.log('Using PDF aspect ratio:', aspectRatio);
      
      // Convert aspect ratio to standard Tailwind classes (thumbnail-sized, not actual PDF dimensions)
      if (aspectRatio >= 0.9 && aspectRatio <= 1.1) {
        return 'aspect-square'; // Square (1:1)
      } else if (aspectRatio > 1.1) {
        // Landscape orientations
        if (aspectRatio >= 1.7 && aspectRatio <= 1.8) {
          return 'aspect-video'; // 16:9
        } else if (aspectRatio >= 1.3 && aspectRatio < 1.4) {
          return 'aspect-[4/3]'; // 4:3
        } else if (aspectRatio >= 1.4 && aspectRatio < 1.7) {
          return 'aspect-[3/2]'; // 3:2 (common book ratio)
        } else {
          return 'aspect-video'; // Default to 16:9 for very wide
        }
      } else {
        // Portrait orientations
        if (aspectRatio >= 0.55 && aspectRatio <= 0.57) {
          return 'aspect-[9/16]'; // 9:16
        } else if (aspectRatio >= 0.74 && aspectRatio <= 0.76) {
          return 'aspect-[3/4]'; // 3:4
        } else if (aspectRatio >= 0.65 && aspectRatio < 0.74) {
          return 'aspect-[2/3]'; // 2:3 (common book ratio)
        } else {
          return 'aspect-[3/4]'; // Default to 3:4 for very tall
        }
      }
    }
    
    // Second priority: use video aspect ratio from Seedance
    const video = card.prompt;
    if (video?.aspect_ratio) {
      switch (video.aspect_ratio) {
        case '1:1': return 'aspect-square';
        case '16:9': return 'aspect-video';
        case '9:16': return 'aspect-[9/16]';
        case '4:3': return 'aspect-[4/3]';
        case '3:4': return 'aspect-[3/4]';
        case '21:9': return 'aspect-[21/9]';
        case '9:21': return 'aspect-[9/21]';
        default: return 'aspect-video';
      }
    }
    
    // Default fallback
    return 'aspect-video';
  };
  
  // Determine grid layout classes based on card count
  const getGridClasses = (count) => {
    if (count === 1) return 'grid-cols-1 max-w-xs';        // max-w-xs = 320px (thumbnail size)
    if (count === 2) return 'grid-cols-2 max-w-lg gap-4';  // max-w-lg = 512px for 2 cards
    return 'grid-cols-3 max-w-2xl gap-4';                  // max-w-2xl = 672px for 3+ cards
  };
  
  // Render unified card system
  const renderCard = (card, index) => {
    console.log('Rendering card:', card, 'isUploadCard:', card.isUploadCard);
    const aspectRatioClass = getAspectRatioClass(card);
    
    // Upload card states
    if (card.isUploadCard) {
      // Loading state
      if (isUploading) {
        // Extract progress percentage from loading message
        const progressMatch = uploadLoadingMessage.match(/(\d+)%/);
        const progressPercentage = progressMatch ? parseInt(progressMatch[1]) : 0;
        
        return (
          <div 
            key={card.id}
            className={`bg-gray-900 border border-gray-700 rounded-xl overflow-hidden ${aspectRatioClass}`}
          >
            <div className="relative w-full h-full">
              {uploadImageBase64 && (
                <img 
                  src={`data:image/jpeg;base64,${uploadImageBase64}`} 
                  alt="Processing" 
                  className="w-full h-full object-cover opacity-50" 
                />
              )}
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/60 backdrop-blur-sm px-4">
                <Loader2 className="animate-spin mb-2 text-blue-400" size={24} />
                <p className="text-white font-medium text-sm text-center leading-tight">{uploadLoadingMessage}</p>
              </div>
              
              {/* Progress line at bottom */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-700">
                <div 
                  className="h-1 bg-gradient-to-r from-blue-500 to-blue-400 transition-all duration-1000 ease-out"
                  style={{ width: `${progressPercentage}%` }}
                />
              </div>
            </div>
          </div>
        );
      }
      
      // Uploaded image state
      if (uploadImageBase64) {
        return (
          <div 
            key={card.id}
            className={`bg-gray-900 border border-gray-700 rounded-xl overflow-hidden ${aspectRatioClass}`}
          >
            <div className="relative w-full h-full">
              <img 
                src={`data:image/jpeg;base64,${uploadImageBase64}`} 
                alt="Ready for generation" 
                className="w-full h-full object-cover" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-200">
                <div className="absolute bottom-2 left-2">
                  <span className="bg-black/50 backdrop-blur-sm px-2 py-1 rounded text-white text-xs">
                    Ready
                  </span>
                </div>
              </div>
            </div>
            
            {/* Version badge */}
            <div className="absolute top-2 left-2">
              <span className="bg-blue-500 text-white px-2 py-1 text-xs font-medium rounded-full">
                v{card.version}
              </span>
            </div>
          </div>
        );
      }
      
      // Empty upload state (or regeneration with stored image)
      console.log('Rendering upload state with aspectRatio:', aspectRatioClass, 'showRegenerateUI:', showRegenerateUI);
      
      if (showRegenerateUI) {
        // Regeneration mode: Show stored image with transparent overlay
        return (
          <div
            key={card.id}
            className={`relative rounded-xl cursor-pointer transition-all duration-300 w-full overflow-hidden ${aspectRatioClass}`}
            onClick={() => handleClick(card)}
            style={{ minHeight: '120px' }}
          >
            {/* Background image */}
            <img 
              src={`data:image/jpeg;base64,${storedImageData.base64}`} 
              alt="Scene image for regeneration" 
              className="w-full h-full object-cover" 
            />
            
            {/* Transparent black overlay with subtle pattern */}
            <div className="absolute inset-0 bg-black/40 backdrop-blur-[1px]">
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                <div className="text-center">
                  <p className="font-medium text-sm">Regenerate with</p>
                  <p className="text-xs text-gray-300 mt-1">same image</p>
                </div>
              </div>
            </div>
            
            {/* Version badge */}
            <div className="absolute top-2 left-2">
              <span className="bg-blue-500 text-white px-2 py-1 text-xs font-medium rounded-full">
                v{card.version}
              </span>
            </div>
          </div>
        );
      }
      
      // Regeneration vs First time upload: Different states
      if (isRegenerating) {
        // Regeneration ready state - no upload needed
        return (
          <div
            key={card.id}
            className={`
              relative bg-gradient-to-br from-blue-900/20 to-blue-800/10 border-2 border-blue-500/30 rounded-xl cursor-pointer transition-all duration-300 w-full
              hover:border-blue-400/50 hover:from-blue-900/30 hover:to-blue-800/20
              ${aspectRatioClass}
            `}
            onClick={() => handleClick(card)}
            style={{ minHeight: '120px' }}
          >
            <div className="absolute inset-0 flex flex-col items-center justify-center p-6">
              <div className="text-blue-400 mb-3">
                <RefreshCw size={48} className="animate-spin-slow" />
              </div>
              <p className="font-medium text-blue-300 text-center leading-tight">
                Ready to regenerate
              </p>
              <p className="text-blue-400/70 text-sm mt-1 text-center">
                with existing image
              </p>
            </div>
            
            {/* Version badge */}
            <div className="absolute top-2 left-2">
              <span className="bg-blue-500 text-white px-2 py-1 text-xs font-medium rounded-full">
                v{card.version}
              </span>
            </div>
          </div>
        );
      }
      
      // First time upload: Empty state
      return (
        <div
          key={card.id}
          className={`
            relative bg-gray-900 border-2 border-dashed rounded-xl cursor-pointer transition-all duration-300 w-full
            ${isDragOver 
              ? 'border-blue-400 bg-blue-500/10 scale-105' 
              : 'border-gray-600 hover:border-gray-500 animate-pulse-subtle'
            }
            ${aspectRatioClass}
          `}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          onClick={() => handleClick(card)}
          style={{ minHeight: '120px' }} // Thumbnail-sized minimum height
        >
          <div className="absolute inset-0 flex flex-col items-center justify-center p-6">
            <div className={`transition-all duration-300 ${isDragOver ? 'scale-110 text-blue-400' : 'text-gray-400'}`}>
              <UploadCloud size={48} className="mb-3" />
            </div>
            <p className={`font-medium transition-colors duration-300 ${
              isDragOver ? 'text-blue-400' : 'text-gray-300'
            }`}>
              {isDragOver ? 'Drop to upload' : 'Drop image here'}
            </p>
            <p className="text-gray-500 text-sm mt-1">
              or click to browse
            </p>
          </div>
          
          {/* Version badge */}
          <div className="absolute top-2 left-2">
            <span className="bg-gray-700 text-gray-300 px-2 py-1 text-xs font-medium rounded-full">
              v{card.version}
            </span>
          </div>
        </div>
      );
    }
    
    // Completed video card
    // Use stored image as immediate thumbnail if available
    const thumbnailSrc = storedImageData?.base64 
      ? `data:image/jpeg;base64,${storedImageData.base64}` 
      : card.prompt?.cover_url || '';
    
    return (
      <div 
        key={card.id}
        className={`bg-gray-900 border border-gray-700 rounded-xl overflow-hidden hover:border-blue-500 transition-all duration-200 cursor-pointer group ${aspectRatioClass}`}
        onClick={() => handleClick(card)}
      >
        <div className="relative w-full h-full">
          {/* Use image as thumbnail instead of video element */}
          <img
            className="w-full h-full bg-gray-800 object-cover"
            src={thumbnailSrc}
            alt="Video thumbnail"
          />
          
          {/* Hidden video for modal playback */}
          <video
            className="hidden"
            muted
            preload="metadata"
          >
            <source src={card.prompt.video_url} type="video/mp4" />
          </video>
          
          {/* Play button overlay - always visible but subtle */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-black/30 backdrop-blur-sm rounded-full p-2 opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all duration-200">
              <Play size={20} className="text-white fill-current ml-0.5" />
            </div>
          </div>
          
          {/* Hover overlay */}
          <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
          
          {/* Version badge */}
          <div className="absolute top-2 left-2">
            <span className={`px-2 py-1 text-xs font-medium rounded-full ${
              card.isLatest 
                ? 'bg-blue-500 text-white' 
                : 'bg-gray-700 text-gray-300'
            }`}>
              v{card.version}
            </span>
          </div>
        </div>
        
        {/* Video info */}
        <div className="p-3">
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-400">
              Version {card.version}
            </span>
            <span className="text-xs text-gray-500">
              {new Date(card.createdAt).toLocaleDateString()}
            </span>
          </div>
        </div>
      </div>
    );
  };

  // Debug logging
  console.log('VideoVersionViewer Debug:', {
    sceneId,
    showUploadCard,
    videosWithUrls: videosWithUrls.length,
    totalCards: totalCards.length,
    totalCardsContent: totalCards
  });

  return (
    <>
      <div className={`grid gap-4 ${getGridClasses(totalCards.length)}`}>
        {totalCards.map((card, index) => renderCard(card, index))}
      </div>
      
      <input
        ref={fileInputRef}
        type="file"
        className="hidden"
        accept="image/*"
        onChange={handleFileInput}
      />
      
      {/* Fullscreen Modal */}
      {isModalOpen && selectedVideo && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="relative w-full max-w-4xl mx-auto">
            {/* Close button */}
            <button
              onClick={closeModal}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors duration-200 z-10"
              aria-label="Close video"
            >
              <X size={32} />
            </button>
            
            {/* Video player */}
            <div className="bg-gray-900 rounded-xl overflow-hidden shadow-2xl">
              <video
                className="w-full h-auto max-h-[70vh] bg-black"
                controls
                autoPlay
                poster={storedImageData?.base64 
                  ? `data:image/jpeg;base64,${storedImageData.base64}` 
                  : selectedVideo.prompt?.cover_url || ''}
              >
                <source src={selectedVideo.prompt.video_url} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              
              {/* Video info bar */}
              <div className="p-4 bg-gray-800 border-t border-gray-700">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-white font-medium">
                      {sceneId === 'cover' ? 'Cover' : sceneId === 'end' ? 'End Scene' : `Page ${sceneId}`} - Version {selectedVideo.version}
                    </h4>
                    <p className="text-gray-400 text-sm mt-1">
                      Created {new Date(selectedVideo.createdAt).toLocaleString()}
                    </p>
                  </div>
                  {selectedVideo.isLatest && (
                    <span className="bg-blue-500 text-white px-2 py-1 text-xs font-medium rounded-full">
                      Latest
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};