/**
 * Shared download utilities for handling media downloads
 */

export const handleDownloadMedia = async (url, filename, mediaType = 'video') => {
  try {
    if (!url) {
      throw new Error(`No ${mediaType} URL available`);
    }

    // Handle blob URLs (from ElevenLabs) directly
    if (url.startsWith('blob:')) {
      const a = document.createElement('a');
      a.href = url;
      a.download = filename;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      return;
    }

    // Check if it's a Firebase storage URL that needs server-side download
    if (url.includes('firebasestorage.googleapis.com')) {
      // Use server-side download proxy with the same format as before
      const type = mediaType === 'music' ? 'music' : 'video';
      const encodedUrl = encodeURIComponent(url);
      const downloadUrl = `/api/download/${type}/${filename}?url=${encodedUrl}`;
      
      const a = document.createElement('a');
      a.href = downloadUrl;
      a.download = filename;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    } else {
      // For other URLs - try fetch method first
      try {
        const response = await fetch(url);
        const blob = await response.blob();
        const downloadUrl = window.URL.createObjectURL(blob);
        
        const a = document.createElement('a');
        a.href = downloadUrl;
        a.download = filename;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        
        // Clean up the blob URL
        setTimeout(() => window.URL.revokeObjectURL(downloadUrl), 100);
      } catch (fetchError) {
        // Fallback: open URL in new tab with download hint (but remove target="_blank")
        const a = document.createElement('a');
        a.href = url;
        a.download = filename;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
      }
    }
  } catch (error) {
    console.error(`Failed to download ${mediaType}:`, error);
    throw error;
  }
};

export const getDownloadFilename = (projectName, sceneId, version, mediaType = 'mp4') => {
  const sanitizedProjectName = projectName.replace(/[^a-zA-Z0-9]/g, '_');
  const sceneDisplayName = sceneId === 'cover' ? 'cover' : 
                           sceneId === 'end' ? 'end' : 
                           sceneId === 'music' ? 'music' : 
                           `page_${sceneId}`;
  
  return `${sanitizedProjectName}_${sceneDisplayName}_v${version}.${mediaType}`;
};