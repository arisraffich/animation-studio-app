import { storage } from './firebase';

/**
 * SIMPLE PROJECT DELETION - Just delete the entire project folder
 */
export const deleteProjectFolder = async (projectId) => {
  try {
    
    // Import Firebase Storage functions
    const { listAll, ref, deleteObject } = await import('firebase/storage');
    
    // Function to recursively delete all files and folders
    const deleteRecursively = async (folderRef, path) => {
      
      try {
        const listResult = await listAll(folderRef);
        
        
        // Delete all files in current folder
        if (listResult.items.length > 0) {
          const deletePromises = listResult.items.map(async (itemRef) => {
            await deleteObject(itemRef);
          });
          
          await Promise.all(deletePromises);
        }
        
        // Recursively delete all subfolders
        if (listResult.prefixes.length > 0) {
          const folderPromises = listResult.prefixes.map(async (prefixRef) => {
            await deleteRecursively(prefixRef, prefixRef.fullPath);
          });
          
          await Promise.all(folderPromises);
        }
        
      } catch (error) {
        if (error.code === 'storage/object-not-found') {
        } else {
          console.error(`❌ SIMPLE: Error deleting folder ${path}:`, error.message);
          throw error;
        }
      }
    };
    
    // Start recursive deletion from project root
    const projectFolderRef = ref(storage, `projects/${projectId}`);
    await deleteRecursively(projectFolderRef, `projects/${projectId}`);
    
    return true;
    
  } catch (error) {
    console.error(`❌ SIMPLE: Failed to delete project ${projectId}:`, error.message);
    throw error;
  }
};