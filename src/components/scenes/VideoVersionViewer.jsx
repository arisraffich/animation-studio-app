import { useState, useEffect, useRef } from 'react';
import { Play, X, Loader2, UploadCloud, Trash2, Download } from '../common/Icons';
import { Checkbox } from '../common/Checkbox';

export const VideoVersionViewer = ({ 
  sceneId, 
  sceneData, 
  project,
  showUploadCard = false, 
  onImageUpload = null,
  uploadImageBase64 = null,
  isUploading = false,
  uploadLoadingMessage = 'Generating...',
  isRegenerating = false,
  onDeleteVersion = null,
  selectionMode = false,
  selectedVersions = new Set(),
  onToggleVersionSelection = null,
  // Removed unused onBulkDelete prop
  onGenerate = null,
  hasUploadedImage = false,
  isUploadingToStorage = false,
}) => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDragOver, setIsDragOver] = useState(false);
  const fileInputRef = useRef(null);
  
  // Download video function
  const handleDownloadVideo = async (videoUrl, sceneId, version) => {
    try {
      const response = await fetch(videoUrl);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `scene_${sceneId}_v${version}.mp4`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Download failed:', error);
    }
  };
  
  // Get video versions from the scene data
  const videoVersions = sceneData?.videoVersions || [];
  
  // Check if we have stored image data for regeneration
  const storedImageData = sceneData?.storedImage;
  // Removed unused showRegenerateUI variable
  
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
  } else {
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
    if (count === 1) return 'grid-cols-1 max-w-xs';                    // max-w-xs = 320px (thumbnail size)
    if (count === 2) return 'grid-cols-2 max-w-lg gap-3';              // max-w-lg = 512px for 2 cards
    if (count <= 3) return 'grid-cols-3 max-w-2xl gap-3';              // max-w-2xl = 672px for 3 cards
    if (count <= 4) return 'grid-cols-4 max-w-4xl gap-3';              // max-w-4xl = 896px for 4 cards
    if (count <= 5) return 'grid-cols-5 max-w-5xl gap-2';              // max-w-5xl = 1024px for 5 cards
    return 'grid-cols-6 max-w-6xl gap-2';                              // max-w-6xl = 1152px for 6+ cards
  };
  
  // Render unified card system
  const renderCard = (card, index) => {
    
    const aspectRatioClass = getAspectRatioClass(card);
    
    
    // Upload card states (includes regeneration cards)
    if (card.isUploadCard || (showUploadCard && card.id === 'upload')) {
      // ALWAYS show loading animation when uploading (regardless of regeneration state)
      if (isUploading) {
        const displayMessage = uploadLoadingMessage;
        // Extract progress percentage from message
        let progressPercentage = 0;
        const progressMatch = displayMessage.match(/(\d+)%/);
        if (progressMatch) {
          progressPercentage = parseInt(progressMatch[1]);
        }
        
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
                <p className="text-white font-medium text-sm text-center leading-tight">{displayMessage}</p>
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
      
      // Regeneration button (when not uploading)
      if (isRegenerating && !isUploading) {
        // Regeneration ready state - show button before generation starts
        return (
          <div
            key={card.id}
            className={`
              relative bg-gradient-to-br from-blue-900/20 to-blue-800/10 border-2 border-blue-500/30 rounded-xl transition-all duration-300 w-full
              hover:border-blue-400/50 hover:from-blue-900/30 hover:to-blue-800/20
              ${aspectRatioClass}
            `}
            style={{ minHeight: '120px' }}
          >
            <div className="absolute inset-0 flex flex-col items-center justify-center p-6">
              {/* Generate button inside the card */}
              {onGenerate && (
                <button
                  onClick={() => {
                    console.log('Regenerate button clicked, calling onGenerate');
                    onGenerate();
                  }}
                  disabled={isUploading}
                  className="bg-blue-600 hover:bg-blue-700 disabled:bg-gray-600 disabled:cursor-not-allowed text-white px-6 py-2 rounded-lg font-medium transition-colors duration-200"
                >
                  Regenerate
                </button>
              )}
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
      
      // Show image thumbnail if uploaded, otherwise empty state
      const hasImage = uploadImageBase64 || hasUploadedImage;
      
      return (
        <div key={card.id} className="space-y-4">
          <div
            className={`
              relative bg-gray-900 rounded-xl cursor-pointer transition-all duration-300 w-full overflow-hidden
              ${hasImage 
                ? 'border-2 border-solid border-gray-600 hover:border-gray-500' 
                : `border-2 border-dashed ${isDragOver 
                    ? 'border-blue-400 bg-blue-500/10 scale-105' 
                    : 'border-gray-600 hover:border-gray-500 animate-pulse-subtle'
                  }`
              }
              ${aspectRatioClass}
            `}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
            onClick={() => !hasImage && handleClick(card)}
            style={{ minHeight: '120px' }}
          >
            {hasImage ? (
              // Show uploaded image thumbnail
              <>
                <img 
                  src={`data:image/jpeg;base64,${uploadImageBase64}`}
                  alt="Uploaded scene"
                  className="w-full h-full object-cover"
                />
                {/* Upload to Storage progress overlay */}
                {isUploadingToStorage && (
                  <div className="absolute inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center">
                    <div className="text-center text-white">
                      <Loader2 className="animate-spin mb-2 mx-auto" size={20} />
                      <p className="text-xs">Uploading...</p>
                    </div>
                  </div>
                )}
                {/* Version badge */}
                <div className="absolute top-2 left-2">
                  <span className="bg-blue-500 text-white px-2 py-1 text-xs font-medium rounded-full">
                    v{card.version}
                  </span>
                </div>
              </>
            ) : (
              // Show empty upload state
              <>
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
              </>
            )}
          </div>
          
          {/* Generate button - only show when image is uploaded AND not regenerating */}
          {hasImage && onGenerate && !isRegenerating && (
            <button
              onClick={onGenerate}
              disabled={isUploading}
              className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-gray-600 disabled:cursor-not-allowed text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200"
            >
              {isUploading ? uploadLoadingMessage : (isRegenerating ? 'Regenerate' : 'Generate')}
            </button>
          )}
        </div>
      );
    }
    
    // Completed video card
    // Use stored image as immediate thumbnail if available (Firebase Storage URL or base64)
    let thumbnailSrc = card.prompt?.cover_url || '';
    if (storedImageData?.url) {
      // Use Firebase Storage URL if available
      thumbnailSrc = storedImageData.url;
    } else if (storedImageData?.base64) {
      // Fallback to base64 for backward compatibility
      thumbnailSrc = `data:image/jpeg;base64,${storedImageData.base64}`;
    }
    
    // Debug: Check if this card is selected
    const isSelected = selectedVersions.has(card.id);
    
    return (
      <div 
        key={card.id}
        className={`bg-gray-900 rounded-xl overflow-hidden transition-all duration-200 cursor-pointer group ${aspectRatioClass} ${
          selectionMode 
            ? isSelected 
              ? 'border-2 border-blue-500 bg-blue-500/10 shadow-lg shadow-blue-500/20' 
              : 'border-2 border-gray-700 hover:border-blue-400'
            : 'border border-gray-700 hover:border-blue-500'
        }`}
        onClick={() => {
          if (selectionMode && onToggleVersionSelection) {
            onToggleVersionSelection(card.id);
          } else {
            handleClick(card);
          }
        }}
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
          
          {/* Checkbox in selection mode, otherwise version badge */}
          {selectionMode ? (
            <div 
              className="absolute top-2 left-2 z-10"
              onClick={(e) => {
                e.stopPropagation();
                onToggleVersionSelection && onToggleVersionSelection(card.id);
              }}
            >
              <Checkbox
                checked={isSelected}
                onChange={(e) => {
                  e && e.stopPropagation && e.stopPropagation();
                  onToggleVersionSelection && onToggleVersionSelection(card.id);
                }}
                className="shadow-2xl ring-2 ring-white/50"
                size="lg"
              />
            </div>
          ) : (
            <div className="absolute top-2 left-2">
              <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                card.isLatest 
                  ? 'bg-blue-500 text-white' 
                  : 'bg-gray-700 text-gray-300'
              }`}>
                v{card.version}
              </span>
            </div>
          )}

          {/* Download and Delete buttons - top right corner (hidden in selection mode) */}
          {!selectionMode && (
            <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex gap-1">
              {/* Download button */}
              <button
                onClick={(e) => {
                  e.stopPropagation(); // Prevent card click
                  handleDownloadVideo(card.prompt.video_url, sceneId, card.version);
                }}
                className="bg-blue-500/90 hover:bg-blue-500 text-white p-1.5 rounded-full transition-colors duration-200"
                aria-label={`Download version ${card.version}`}
              >
                <Download size={14} />
              </button>
              
              {/* Delete button */}
              <button
                onClick={(e) => {
                  e.stopPropagation(); // Prevent card click
                  if (onDeleteVersion) {
                    onDeleteVersion(card.id);
                  } else {
                  }
                }}
                className="bg-red-500/90 hover:bg-red-500 text-white p-1.5 rounded-full transition-colors duration-200"
                aria-label={`Delete version ${card.version}`}
              >
                <Trash2 size={14} />
              </button>
            </div>
          )}
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
                poster={storedImageData?.url 
                  ? storedImageData.url
                  : storedImageData?.base64 
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
                  <div className="flex items-center gap-2">
                    {/* Download button */}
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleDownloadVideo(selectedVideo.prompt.video_url, sceneId, selectedVideo.version);
                      }}
                      className="bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-full transition-colors duration-200"
                      aria-label={`Download version ${selectedVideo.version}`}
                    >
                      <Download size={16} />
                    </button>
                    
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
        </div>
      )}
    </>
  );
};