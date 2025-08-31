import { useState, useEffect } from 'react';
import { X, Check, Loader2, AlertTriangle, Play, Download } from './Icons';
import { handleDownloadMedia, getDownloadFilename } from '../../utils/downloadUtils';

export const BatchGenerationModal = ({ 
  isOpen, 
  onClose, 
  onCancel,
  totalPages, 
  currentPage, 
  completedPages, 
  failedPages,
  retryingPages = [], // Add retrying pages support
  isGenerating,
  currentPageName,
  estimatedTimeRemaining,
  error,
  project, // Add project prop to access video data
  autoDownloadedPages = new Set() // Pages that were auto-downloaded
}) => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  
  // Download function using shared utility
  const handleDownloadWrapper = async (mediaUrl, pageId, isMusic = false) => {
    const extension = isMusic ? 'mp3' : 'mp4';
    const mediaType = isMusic ? 'music' : 'video';
    const filename = getDownloadFilename(project?.name || 'untitled', pageId, 1, extension);
    
    await handleDownloadMedia(mediaUrl, filename, mediaType);
  };
  
  if (!isOpen) return null;

  const progress = totalPages > 0 ? (completedPages.length / totalPages) * 100 : 0;
  const pagesArray = ['cover', ...Array.from({ length: totalPages - 1 }, (_, i) => String(i + 1))];

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center">
      <div className="bg-gray-900 border border-gray-700 rounded-2xl p-8 max-w-2xl w-full mx-4 shadow-2xl">
        
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl font-bold text-white mb-2">Generating All Videos</h2>
            <p className="text-gray-400">
              {isGenerating ? `Currently processing: ${currentPageName}` : 'Preparing batch generation...'}
            </p>
          </div>
          <button
            onClick={onCancel}
            className="text-gray-400 hover:text-white transition-colors p-2 rounded-lg hover:bg-gray-800"
            disabled={!isGenerating}
          >
            <X size={24} />
          </button>
        </div>

        {/* Overall Progress Bar */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-3">
            <span className="text-sm font-medium text-gray-300">
              Overall Progress: {completedPages.length}/{totalPages} pages
            </span>
            {estimatedTimeRemaining && (
              <span className="text-sm text-gray-400">
                ~{estimatedTimeRemaining} remaining
              </span>
            )}
          </div>
          <div className="w-full bg-gray-700 rounded-full h-3 overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-500 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Page Status Grid */}
        <div className="max-h-64 overflow-y-auto pr-2 mb-8">
          <div className="grid grid-cols-4 gap-4">
          {pagesArray.map((pageId, index) => {
            const isCompleted = completedPages.includes(pageId);
            const isCurrent = currentPage === pageId;
            const isFailed = failedPages.includes(pageId);
            const isRetrying = retryingPages.includes(pageId);
            const pageName = pageId === 'cover' ? 'Cover' : `Page ${pageId}`;
            
            // Get video URL for completed pages - check ALL possible sources
            const pageScene = project?.scenes?.[pageId];
            
            // Check videoVersions array first (new format)
            const latestVersion = pageScene?.videoVersions?.find(v => v.isLatest && v.prompt?.video_url) 
                                || pageScene?.videoVersions?.find(v => v.prompt?.video_url);
            
            // Check legacy format (direct in scene.prompt)
            const legacyVideo = pageScene?.prompt?.video_url;
            
            // Final video URL and object
            const videoUrl = latestVersion?.prompt?.video_url || legacyVideo;
            const videoObject = latestVersion || (legacyVideo ? { prompt: { video_url: legacyVideo } } : null);
            
            // Show play button if page has any video URL
            const hasVideo = Boolean(videoUrl);
            const wasAutoDownloaded = autoDownloadedPages.has(pageId);
            

            const handlePlayVideo = () => {
              if (hasVideo && videoObject) {
                setSelectedVideo({
                  url: videoUrl,
                  title: pageName,
                  pageId
                });
                setIsVideoModalOpen(true);
              }
            };

            const handleDownloadVideo = async () => {
              if (!hasVideo || !videoUrl) return;
              await handleDownloadWrapper(videoUrl, pageId, false);
            };

            return (
              <div
                key={pageId}
                className={`
                  relative p-4 rounded-lg border-2 transition-all duration-300
                  ${isCompleted 
                    ? 'border-green-500 bg-green-500/20 text-green-300' 
                    : isCurrent 
                      ? 'border-blue-500 bg-blue-500/20 text-blue-300 animate-pulse' 
                      : isRetrying
                        ? 'border-yellow-500 bg-yellow-500/20 text-yellow-300 animate-pulse'
                      : isFailed
                        ? 'border-red-500 bg-red-500/20 text-red-300'
                        : 'border-gray-600 bg-gray-800/50 text-gray-400'
                  }
                `}
              >
                <div className="text-center">
                  <div className="mb-2 flex justify-center">
                    {isCompleted ? (
                      // Show play/download buttons instead of check mark
                      hasVideo ? (
                        <div className="flex gap-2">
                          <button
                            onClick={handlePlayVideo}
                            className="bg-green-600 hover:bg-green-700 text-white p-2 rounded-full transition-colors shadow-lg"
                            title="Preview video"
                          >
                            <Play size={16} />
                          </button>
                          <button
                            onClick={handleDownloadVideo}
                            className={`${wasAutoDownloaded 
                              ? 'bg-green-600 hover:bg-green-700' 
                              : 'bg-blue-600 hover:bg-blue-700'
                            } text-white p-2 rounded-full transition-colors shadow-lg`}
                            title={wasAutoDownloaded ? "Auto-downloaded ✓ (click to download again)" : "Download video"}
                          >
                            <Download size={16} />
                          </button>
                        </div>
                      ) : (
                        <Check size={20} className="text-green-400" />
                      )
                    ) : isCurrent ? (
                      <Loader2 size={20} className="animate-spin text-blue-400" />
                    ) : isRetrying ? (
                      <Loader2 size={20} className="animate-spin text-yellow-400" />
                    ) : isFailed ? (
                      <AlertTriangle size={20} className="text-red-400" />
                    ) : (
                      <div className="w-5 h-5 rounded-full border-2 border-gray-500" />
                    )}
                  </div>
                  <p className="text-sm font-medium">{pageName}</p>
                  {isCurrent && (
                    <p className="text-xs mt-1 opacity-75">Processing...</p>
                  )}
                  {isRetrying && (
                    <p className="text-xs mt-1 opacity-75">Retrying...</p>
                  )}
                  {isFailed && (
                    <p className="text-xs mt-1 opacity-75">Failed</p>
                  )}
                </div>
              </div>
            );
          })}
          </div>
        </div>

        {/* Error Message */}
        {error && (
          <div className="mb-6 p-4 bg-red-500/20 border border-red-500 rounded-lg">
            <div className="flex items-start gap-3">
              <AlertTriangle className="text-red-400 flex-shrink-0 mt-0.5" size={20} />
              <div>
                <h3 className="font-medium text-red-300 mb-1">Generation Error</h3>
                <p className="text-red-400 text-sm">{error}</p>
              </div>
            </div>
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex gap-3">
          {error ? (
            <>
              <button
                onClick={onClose}
                className="flex-1 bg-gray-700 hover:bg-gray-600 text-white px-6 py-3 rounded-lg font-medium transition-colors"
              >
                Close & Generate Manually
              </button>
              <button
                onClick={() => window.location.reload()}
                className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors"
              >
                Retry All
              </button>
            </>
          ) : !isGenerating && completedPages.length > 0 ? (
            <button
              onClick={onClose}
              className="w-full bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
            >
              All Videos Generated - Close
            </button>
          ) : (
            <button
              onClick={onCancel}
              disabled={!isGenerating}
              className="w-full bg-red-600 hover:bg-red-700 disabled:bg-gray-700 disabled:cursor-not-allowed text-white px-6 py-3 rounded-lg font-medium transition-colors"
            >
              {isGenerating ? 'Cancel Generation' : 'Close'}
            </button>
          )}
        </div>

        {/* Subtle animation for current page indicator */}
        {isGenerating && (
          <div className="mt-4 text-center">
            <div className="inline-flex items-center gap-2 text-sm text-gray-400">
              <div className="flex space-x-1">
                <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" />
                <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }} />
                <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
              </div>
              <span>AI is working on your videos</span>
            </div>
          </div>
        )}
      </div>
      
      {/* Video Preview Modal */}
      {isVideoModalOpen && selectedVideo && (
        <div className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center">
          <div className="relative max-w-4xl w-full mx-4 bg-gray-900 rounded-2xl overflow-hidden">
            {/* Modal Header */}
            <div className="flex items-center justify-between p-4 border-b border-gray-700">
              <h3 className="text-lg font-semibold text-white">{selectedVideo.title} - Video Preview</h3>
              <button
                onClick={() => {
                  setIsVideoModalOpen(false);
                  setSelectedVideo(null);
                }}
                className="text-gray-400 hover:text-white transition-colors p-1"
              >
                <X size={24} />
              </button>
            </div>
            
            {/* Video Player */}
            <div className="aspect-video bg-black">
              <video
                src={selectedVideo.url}
                controls
                autoPlay
                className="w-full h-full"
                onError={(e) => {
                  console.error('Video playback error:', e);
                }}
              >
                Your browser does not support video playback.
              </video>
            </div>
            
            {/* Modal Footer */}
            <div className="p-4 bg-gray-800/50">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-400">
                    Generated video for {selectedVideo.title}
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  {/* Download button */}
                  <button
                    onClick={async (e) => {
                      e.stopPropagation();
                      await handleDownloadWrapper(selectedVideo.url, selectedVideo.pageId, false);
                    }}
                    className="bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-full transition-colors duration-200"
                    title="Download video"
                  >
                    <Download size={16} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};