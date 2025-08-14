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
    
    console.log('Storage: Uploading image to', imagePath);
    
    // Upload image bytes with metadata
    const snapshot = await uploadBytes(imageRef, imageBlob, uploadMetadata);
    
    // Get download URL
    const downloadURL = await getDownloadURL(snapshot.ref);
    
    console.log('Storage: Image uploaded successfully, URL:', downloadURL);
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
    console.log('Storage: Image deleted:', imagePath);
  } catch (error) {
    console.error('Storage: Delete failed:', error);
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
 * Delete all images for a specific project
 */
export const deleteProjectImages = async (projectId) => {
  try {
    console.log('Storage: Deleting all images for project:', projectId);
    
    // List all files in the project folder
    const { listAll, ref } = await import('firebase/storage');
    const projectRef = ref(storage, `projects/${projectId}`);
    
    const result = await listAll(projectRef);
    const deletePromises = result.items.map(itemRef => {
      console.log('Storage: Deleting file:', itemRef.fullPath);
      return deleteObject(itemRef);
    });
    
    // Delete all files in parallel
    await Promise.all(deletePromises);
    console.log(`Storage: Deleted ${deletePromises.length} files for project ${projectId}`);
  } catch (error) {
    console.error('Storage: Project cleanup failed:', error);
    // Don't throw error - allow project deletion to continue
  }
};

/**
 * Delete image for a specific video version
 */
export const deleteVersionImage = async (projectId, sceneId, versionId) => {
  try {
    const imagePath = `projects/${projectId}/scenes/${sceneId}/versions/${versionId}.jpg`;
    await deleteImage(imagePath);
    console.log(`Storage: Deleted image for version ${versionId}`);
  } catch (error) {
    console.error('Storage: Version image cleanup failed:', error);
    // Don't throw error - allow version deletion to continue
  }
};