// Use Cloudflare R2 storage instead of Firebase
import { deleteProjectFolder as deleteR2ProjectFolder } from './storageService.js';

/**
 * SIMPLE PROJECT DELETION - Just delete the entire project folder
 * Now uses Cloudflare R2 instead of Firebase Storage
 */
export const deleteProjectFolder = async (projectId) => {
  try {
    // Use the R2 implementation from storageService
    return await deleteR2ProjectFolder(projectId);
  } catch (error) {
    console.error(`❌ SIMPLE: Failed to delete project ${projectId}:`, error.message);
    throw error;
  }
};