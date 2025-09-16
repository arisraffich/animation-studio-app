// Cloudflare R2 Storage Service - Migration from Firebase Storage
// ⚠️  PARALLEL IMPLEMENTATION - Firebase Storage still active for safety

import { S3Client, PutObjectCommand, GetObjectCommand, DeleteObjectCommand, ListObjectsV2Command } from '@aws-sdk/client-s3';
import { getSignedUrl } from '@aws-sdk/s3-request-presigner';

// D1 Database client
let d1Client = null;

// R2 Client configuration (server-side only)
let r2Client = null;
const BUCKET_NAME = 'animation-studio-storage';

// Initialize D1 Database client
export const initializeD1 = async (accountId, databaseId) => {
  try {
    // Create a D1 client that uses the Cloudflare API
    d1Client = {
      accountId,
      databaseId,
      apiToken: process.env.CLOUDFLARE_API_TOKEN,
      
      // D1 methods that make actual API calls
      prepare: (sql) => {
        const preparedStatement = {
          bind: (...params) => ({
            all: async () => {
              // Make API call to Cloudflare D1
              const response = await fetch(`https://api.cloudflare.com/client/v4/accounts/${accountId}/d1/database/${databaseId}/query`, {
                method: 'POST',
                headers: {
                  'Authorization': `Bearer ${process.env.CLOUDFLARE_API_TOKEN}`,
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                  sql: sql,
                  params: params
                })
              });
              
              const data = await response.json();
              return { results: data.result || [] };
            },
            first: async () => {
              const response = await fetch(`https://api.cloudflare.com/client/v4/accounts/${accountId}/d1/database/${databaseId}/query`, {
                method: 'POST',
                headers: {
                  'Authorization': `Bearer ${process.env.CLOUDFLARE_API_TOKEN}`,
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                  sql: sql,
                  params: params
                })
              });
              
              const data = await response.json();
              const results = data.result || [];
              return results[0] || null;
            },
            run: async () => {
              const response = await fetch(`https://api.cloudflare.com/client/v4/accounts/${accountId}/d1/database/${databaseId}/query`, {
                method: 'POST',
                headers: {
                  'Authorization': `Bearer ${process.env.CLOUDFLARE_API_TOKEN}`,
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                  sql: sql,
                  params: params
                })
              });
              
              const data = await response.json();
              console.log('D1 API Response:', data);
              return { success: data.success || false };
            }
          })
        };
        return preparedStatement;
      }
    };
    
    console.log('🔗 Cloudflare D1 database ready');
    return d1Client;
  } catch (error) {
    console.error('❌ D1 initialization failed:', error);
    throw error;
  }
};

// Initialize R2 client (server-side)
export const initializeR2 = (accountId, accessKeyId, secretAccessKey) => {
  r2Client = new S3Client({
    region: 'auto',
    endpoint: `https://${accountId}.r2.cloudflarestorage.com`,
    credentials: {
      accessKeyId,
      secretAccessKey,
    },
  });
  return r2Client;
};

// ====================
// IMAGE STORAGE OPERATIONS
// ====================

/**
 * Upload image to R2 Storage and return presigned URL
 */
export const uploadImage = async (projectId, sceneId, versionId, imageBlob, metadata = {}) => {
  try {
    if (!r2Client) throw new Error('R2 client not initialized');
    
    const imagePath = `projects/${projectId}/scenes/${sceneId}/versions/${versionId}.jpg`;
    
    // Convert blob to buffer for upload
    const buffer = Buffer.from(await imageBlob.arrayBuffer());
    
    const uploadCommand = new PutObjectCommand({
      Bucket: BUCKET_NAME,
      Key: imagePath,
      Body: buffer,
      ContentType: 'image/jpeg',
      Metadata: {
        projectId,
        sceneId,
        versionId,
        uploadedAt: new Date().toISOString(),
        ...metadata
      }
    });
    
    await r2Client.send(uploadCommand);
    
    // Generate presigned URL for access (valid for 1 hour)
    const getCommand = new GetObjectCommand({
      Bucket: BUCKET_NAME,
      Key: imagePath,
    });
    
    const downloadUrl = await getSignedUrl(r2Client, getCommand, { expiresIn: 3600 });
    
    return {
      url: downloadUrl,
      path: imagePath,
      size: buffer.length,
      contentType: 'image/jpeg'
    };
  } catch (error) {
    console.error('R2 image upload failed:', error);
    throw error;
  }
};

/**
 * Get presigned URL for existing image
 */
export const getImageUrl = async (imagePath, expiresIn = 3600) => {
  try {
    if (!r2Client) throw new Error('R2 client not initialized');
    
    const getCommand = new GetObjectCommand({
      Bucket: BUCKET_NAME,
      Key: imagePath,
    });
    
    return await getSignedUrl(r2Client, getCommand, { expiresIn });
  } catch (error) {
    console.error('R2 getImageUrl failed:', error);
    throw error;
  }
};

/**
 * Delete image from R2
 */
export const deleteImage = async (imagePath) => {
  try {
    if (!r2Client) throw new Error('R2 client not initialized');
    
    const deleteCommand = new DeleteObjectCommand({
      Bucket: BUCKET_NAME,
      Key: imagePath,
    });
    
    await r2Client.send(deleteCommand);
    return true;
  } catch (error) {
    console.error('R2 deleteImage failed:', error);
    throw error;
  }
};

/**
 * Upload image from base64 data
 */
export const uploadImageFromBase64 = async (projectId, sceneId, versionId, base64String, metadata = {}) => {
  try {
    const apiUrl = import.meta.env.VITE_API_URL || '/api';
    const fileName = `${sceneId}/${versionId}.png`;
    
    const response = await fetch(`${apiUrl}/api/r2-upload`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        projectId,
        imageData: base64String,
        fileName
      })
    });
    
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(`R2 upload failed: ${errorData.error || response.statusText}`);
    }
    
    const result = await response.json();
    console.log('✅ R2 image uploaded successfully:', result.imageUrl);
    
    return {
      imageUrl: result.imageUrl,
      key: result.key,
      success: true
    };
  } catch (error) {
    console.error('R2 uploadImageFromBase64 failed:', error);
    throw error;
  }
};

/**
 * Delete version image
 */
export const deleteVersionImage = async (projectId, sceneId, versionId) => {
  const imagePath = `projects/${projectId}/scenes/${sceneId}/versions/${versionId}.jpg`;
  await deleteImage(imagePath);
};

// ====================
// MUSIC STORAGE OPERATIONS
// ====================

/**
 * Upload music file to R2
 */
export const uploadMusicFromBlob = async (projectId, sceneId, versionId, musicBlob, metadata = {}) => {
  try {
    if (!r2Client) throw new Error('R2 client not initialized');
    
    const musicPath = `projects/${projectId}/scenes/music/versions/${versionId}.mp3`;
    
    const buffer = Buffer.from(await musicBlob.arrayBuffer());
    
    const uploadCommand = new PutObjectCommand({
      Bucket: BUCKET_NAME,
      Key: musicPath,
      Body: buffer,
      ContentType: 'audio/mpeg',
      Metadata: {
        projectId,
        sceneId,
        versionId,
        uploadedAt: new Date().toISOString(),
        ...metadata
      }
    });
    
    await r2Client.send(uploadCommand);
    
    // Generate presigned URL
    const getCommand = new GetObjectCommand({
      Bucket: BUCKET_NAME,
      Key: musicPath,
    });
    
    const downloadUrl = await getSignedUrl(r2Client, getCommand, { expiresIn: 3600 });
    
    return {
      url: downloadUrl,
      path: musicPath,
      size: buffer.length,
      contentType: 'audio/mpeg'
    };
  } catch (error) {
    console.error('R2 music upload failed:', error);
    throw error;
  }
};

/**
 * Delete version music
 */
export const deleteVersionMusic = async (projectId, sceneId, versionId) => {
  const musicPath = `projects/${projectId}/scenes/music/versions/${versionId}.mp3`;
  await deleteImage(musicPath); // Reuse delete function
};

// ====================
// PROJECT FOLDER OPERATIONS
// ====================

/**
 * Delete entire project folder recursively (R2 equivalent of Firebase deleteProjectFolder)
 */
export const deleteProjectFolder = async (projectId) => {
  try {
    if (!r2Client) throw new Error('R2 client not initialized');
    
    const projectPrefix = `projects/${projectId}/`;
    
    // List all objects in project folder
    const listCommand = new ListObjectsV2Command({
      Bucket: BUCKET_NAME,
      Prefix: projectPrefix,
    });
    
    const listResult = await r2Client.send(listCommand);
    
    if (!listResult.Contents || listResult.Contents.length === 0) {
      console.log(`No files found for project ${projectId}`);
      return true;
    }
    
    // Delete all objects in batches (R2 supports up to 1000 per batch)
    const deletePromises = listResult.Contents.map(object => {
      const deleteCommand = new DeleteObjectCommand({
        Bucket: BUCKET_NAME,
        Key: object.Key,
      });
      return r2Client.send(deleteCommand);
    });
    
    await Promise.all(deletePromises);
    
    console.log(`✅ Deleted ${listResult.Contents.length} files for project ${projectId}`);
    return true;
  } catch (error) {
    console.error(`❌ Failed to delete project folder ${projectId}:`, error);
    throw error;
  }
};

// ====================
// UTILITY FUNCTIONS
// ====================

/**
 * Helper to convert base64 to blob
 */
export const base64ToBlob = (base64String, mimeType = 'image/jpeg') => {
  const byteCharacters = atob(base64String);
  const byteNumbers = new Array(byteCharacters.length);
  for (let i = 0; i < byteCharacters.length; i++) {
    byteNumbers[i] = byteCharacters.charCodeAt(i);
  }
  const byteArray = new Uint8Array(byteNumbers);
  return new Blob([byteArray], { type: mimeType });
};

/**
 * Test R2 connection
 */
export const testR2Connection = async () => {
  try {
    if (!r2Client) throw new Error('R2 client not initialized');
    
    // Try to list bucket contents (should work even if empty)
    const listCommand = new ListObjectsV2Command({
      Bucket: BUCKET_NAME,
      MaxKeys: 1,
    });
    
    await r2Client.send(listCommand);
    return true;
  } catch (error) {
    console.error('R2 connection test failed:', error);
    return false;
  }
};