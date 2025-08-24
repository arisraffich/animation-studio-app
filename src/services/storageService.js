import { 
  ref, 
  uploadBytes, 
  getDownloadURL,
  deleteObject 
} from "firebase/storage";
import { storage } from './firebase';

// ====================
// IMAGE STORAGE OPERATIONS
// ====================

/**
 * Upload image to Firebase Storage and return download URL
 * Following Firebase documentation best practices
 */
export const uploadImage = async (projectId, sceneId, versionId, imageBlob, metadata = {}) => {
  try {
    // Create storage reference with proper path structure
    const imagePath = `projects/${projectId}/scenes/${sceneId}/versions/${versionId}.jpg`;
    const imageRef = ref(storage, imagePath);
    
    // Set metadata following Firebase docs
    const uploadMetadata = {
      contentType: 'image/jpeg',
      cacheControl: 'public,max-age=3600', // 1 hour cache
      ...metadata
    };
    
    // Upload image bytes with metadata
    const snapshot = await uploadBytes(imageRef, imageBlob, uploadMetadata);
    
    // Get download URL
    const downloadURL = await getDownloadURL(snapshot.ref);
    return {
      url: downloadURL,
      path: imagePath,
      size: snapshot.metadata.size
    };
  } catch (error) {
    console.error('Storage: Upload failed:', error);
    throw new Error(`Image upload failed: ${error.message}`);
  }
};

/**
 * Convert base64 string to Blob for Firebase Storage upload
 */
export const base64ToBlob = (base64String, mimeType = 'image/jpeg') => {
  try {
    // Remove data URL prefix if present
    const base64Data = base64String.replace(/^data:image\/[a-z]+;base64,/, '');
    
    // Convert base64 to binary
    const binaryString = atob(base64Data);
    const bytes = new Uint8Array(binaryString.length);
    
    for (let i = 0; i < binaryString.length; i++) {
      bytes[i] = binaryString.charCodeAt(i);
    }
    
    return new Blob([bytes], { type: mimeType });
  } catch (error) {
    console.error('Storage: Base64 to Blob conversion failed:', error);
    throw new Error(`Base64 conversion failed: ${error.message}`);
  }
};

/**
 * Delete image from Firebase Storage
 */
export const deleteImage = async (imagePath) => {
  try {
    const imageRef = ref(storage, imagePath);
    await deleteObject(imageRef);
  } catch (error) {
    if (error.code === 'storage/object-not-found') {
    } else {
      console.error('Storage: Delete failed:', error);
    }
    // Don't throw error - missing files are acceptable
  }
};

/**
 * Upload image from base64 string (convenience method)
 */
export const uploadImageFromBase64 = async (projectId, sceneId, versionId, base64String, metadata = {}) => {
  try {
    // Convert base64 to blob
    const imageBlob = base64ToBlob(base64String);
    
    // Upload blob to storage
    return await uploadImage(projectId, sceneId, versionId, imageBlob, metadata);
  } catch (error) {
    console.error('Storage: Base64 upload failed:', error);
    throw error;
  }
};


/**
 * Delete image for a specific video version
 */
export const deleteVersionImage = async (projectId, sceneId, versionId) => {
  try {
    const imagePath = `projects/${projectId}/scenes/${sceneId}/versions/${versionId}.jpg`;
    await deleteImage(imagePath);
  } catch (error) {
    // Don't throw error - allow version deletion to continue
  }
};

// ====================
// MUSIC FILE STORAGE OPERATIONS
// ====================

/**
 * Upload music from blob (for ElevenLabs direct response)
 */
export const uploadMusicFromBlob = async (projectId, sceneId, versionId, musicBlob, metadata = {}) => {
  try {
    
    // Create storage reference with proper path structure
    const musicPath = `projects/${projectId}/scenes/${sceneId}/versions/${versionId}.mp3`;
    const musicRef = ref(storage, musicPath);
    
    // Set metadata following Firebase docs
    const uploadMetadata = {
      contentType: 'audio/mpeg',
      cacheControl: 'public,max-age=3600', // 1 hour cache
      customMetadata: {
        uploadType: 'music-blob',
        originalSize: musicBlob.size.toString(),
        ...metadata
      }
    };
    
    
    // Upload music file with metadata
    const uploadTask = await uploadBytes(musicRef, musicBlob, uploadMetadata);
    
    // Get download URL
    const downloadURL = await getDownloadURL(uploadTask.ref);
    
    return {
      url: downloadURL,
      path: musicPath,
      size: musicBlob.size,
      uploadedAt: new Date().toISOString(),
      metadata
    };
  } catch (error) {
    console.error('Storage: Error uploading music blob:', error);
    throw new Error(`Failed to upload music: ${error.message}`);
  }
};


/**
 * Delete music file for a specific version
 */
export const deleteVersionMusic = async (projectId, sceneId, versionId) => {
  try {
    const musicPath = `projects/${projectId}/scenes/${sceneId}/versions/${versionId}.mp3`;
    await deleteObject(ref(storage, musicPath));
  } catch (error) {
    console.error('Storage: Version music cleanup failed:', error);
    // Don't throw error - allow version deletion to continue
  }
};