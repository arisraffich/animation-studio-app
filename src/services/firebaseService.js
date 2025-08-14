import { 
  collection, 
  doc, 
  getDocs, 
  getDoc, 
  addDoc, 
  updateDoc, 
  deleteDoc, 
  serverTimestamp,
  orderBy,
  query 
} from "firebase/firestore";
import { 
  ref, 
  uploadBytes, 
  getDownloadURL, 
  deleteObject,
  listAll
} from "firebase/storage";
import { db, storage } from './firebase';

// Projects Collection Reference
const PROJECTS_COLLECTION = 'projects';

// ====================
// PROJECT OPERATIONS
// ====================

export const getAllProjects = async () => {
  try {
    const q = query(collection(db, PROJECTS_COLLECTION), orderBy('createdAt', 'desc'));
    const querySnapshot = await getDocs(q);
    const projects = [];
    
    querySnapshot.forEach((doc) => {
      projects.push({
        id: doc.id,
        ...doc.data(),
        createdAt: doc.data().createdAt?.toDate?.() || new Date()
      });
    });
    
    console.log('Firebase: Retrieved', projects.length, 'projects');
    return projects;
  } catch (error) {
    console.error('Error fetching projects:', error);
    throw error;
  }
};

export const getProject = async (projectId) => {
  try {
    const docRef = doc(db, PROJECTS_COLLECTION, projectId);
    const docSnap = await getDoc(docRef);
    
    if (docSnap.exists()) {
      return {
        id: docSnap.id,
        ...docSnap.data(),
        createdAt: docSnap.data().createdAt?.toDate?.() || new Date()
      };
    } else {
      throw new Error('Project not found');
    }
  } catch (error) {
    console.error('Error fetching project:', error);
    throw error;
  }
};

export const createProject = async (projectData) => {
  try {
    const docRef = await addDoc(collection(db, PROJECTS_COLLECTION), {
      ...projectData,
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp()
    });
    
    console.log('Firebase: Created project with ID:', docRef.id);
    return docRef.id;
  } catch (error) {
    console.error('Error creating project:', error);
    throw error;
  }
};

export const updateProject = async (projectId, updates) => {
  try {
    const docRef = doc(db, PROJECTS_COLLECTION, projectId);
    await updateDoc(docRef, {
      ...updates,
      updatedAt: serverTimestamp()
    });
    
    console.log('Firebase: Updated project:', projectId);
  } catch (error) {
    console.error('Error updating project:', error);
    throw error;
  }
};

export const deleteProject = async (projectId) => {
  try {
    // Get project data first to identify images to delete
    const project = await getProject(projectId);
    
    // Delete all associated images from storage
    const imagesToDelete = [];
    
    if (project.scenes) {
      Object.values(project.scenes).forEach(scene => {
        // Collect stored images
        if (scene.storedImage) {
          // Note: We store base64 in Firestore, not Storage paths
          // So no Storage cleanup needed for storedImage
        }
        
        // Could add cleanup for other image types if we add them later
      });
    }
    
    // DISABLED: Clean up any images in the project's storage folder
    // This was causing CORS errors, disabling for safety
    /*
    try {
      const projectFolderRef = ref(storage, `images/${projectId}`);
      const listResult = await listAll(projectFolderRef);
      const deletePromises = listResult.items.map(itemRef => deleteObject(itemRef));
    */
    // DISABLED: All Storage cleanup code commented out to prevent CORS errors
    // await Promise.all(deletePromises);
    // if (listResult.items.length > 0) {
    //   console.log(`Firebase: Deleted ${listResult.items.length} images for project:`, projectId);
    // }
    // } catch (storageError) {
    //   console.warn('Warning: Could not clean up storage images:', storageError);
    // }
    
    // Delete project document from Firestore
    const docRef = doc(db, PROJECTS_COLLECTION, projectId);
    await deleteDoc(docRef);
    
    console.log('Firebase: Deleted project:', projectId);
  } catch (error) {
    console.error('Error deleting project:', error);
    throw error;
  }
};

// ====================
// IMAGE STORAGE OPERATIONS
// ====================

export const uploadImage = async (projectId, sceneId, imageFile, imageType = 'scene') => {
  try {
    // Create a reference to the image location
    const fileName = `${imageType}-${sceneId}-${Date.now()}`;
    const imageRef = ref(storage, `images/${projectId}/${fileName}`);
    
    // Upload the file
    const snapshot = await uploadBytes(imageRef, imageFile);
    
    // Get the download URL
    const downloadURL = await getDownloadURL(snapshot.ref);
    
    console.log('Firebase: Uploaded image:', fileName);
    return {
      url: downloadURL,
      path: snapshot.ref.fullPath,
      fileName
    };
  } catch (error) {
    console.error('Error uploading image:', error);
    throw error;
  }
};

export const uploadBase64Image = async (projectId, sceneId, base64Data, imageType = 'scene') => {
  try {
    // Convert base64 to blob
    const response = await fetch(`data:image/jpeg;base64,${base64Data}`);
    const blob = await response.blob();
    
    // Create a reference to the image location
    const fileName = `${imageType}-${sceneId}-${Date.now()}.jpg`;
    const imageRef = ref(storage, `images/${projectId}/${fileName}`);
    
    // Upload the blob
    const snapshot = await uploadBytes(imageRef, blob);
    
    // Get the download URL
    const downloadURL = await getDownloadURL(snapshot.ref);
    
    console.log('Firebase: Uploaded base64 image:', fileName);
    return {
      url: downloadURL,
      path: snapshot.ref.fullPath,
      fileName,
      base64Data // Keep original base64 for API calls
    };
  } catch (error) {
    console.error('Error uploading base64 image:', error);
    throw error;
  }
};

export const deleteImage = async (imagePath) => {
  try {
    const imageRef = ref(storage, imagePath);
    await deleteObject(imageRef);
    console.log('Firebase: Deleted image:', imagePath);
  } catch (error) {
    console.error('Error deleting image:', error);
    // Don't throw error for image deletion failures
  }
};

// ====================
// PROJECT DATA MIGRATION
// ====================

export const migrateLocalStorageToFirebase = async () => {
  try {
    // Get existing projects from localStorage
    const localProjects = JSON.parse(localStorage.getItem('projects') || '[]');
    
    if (localProjects.length === 0) {
      console.log('No local projects to migrate');
      return [];
    }
    
    console.log('Migrating', localProjects.length, 'projects from localStorage to Firebase...');
    
    const migratedProjects = [];
    
    for (const project of localProjects) {
      try {
        // Create project in Firebase
        const projectId = await createProject({
          name: project.name || 'Untitled Project',
          author: project.author || 'Unknown Author',
          storyText: project.storyText || '',
          totalPages: project.totalPages || 0,
          scenes: project.scenes || {},
          pageDimensions: project.pageDimensions || null
        });
        
        migratedProjects.push({ ...project, id: projectId });
        console.log('Migrated project:', project.name || 'Untitled');
      } catch (error) {
        console.error('Failed to migrate project:', project.name, error);
      }
    }
    
    console.log('Migration complete. Migrated', migratedProjects.length, 'projects');
    return migratedProjects;
  } catch (error) {
    console.error('Error during migration:', error);
    throw error;
  }
};