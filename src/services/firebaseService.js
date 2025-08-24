import { 
  collection, 
  doc, 
  getDocs, 
  getDoc, 
  addDoc, 
  updateDoc, 
  deleteDoc, 
  deleteField,
  serverTimestamp,
  orderBy,
  query 
} from "firebase/firestore";
import { db } from './firebase';

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
      const data = doc.data();
      projects.push({
        id: doc.id,
        ...data,
        createdAt: data.createdAt?.toDate ? data.createdAt.toDate() : data.createdAt,
        updatedAt: data.updatedAt?.toDate ? data.updatedAt.toDate() : data.updatedAt
      });
    });
    
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
      const data = docSnap.data();
      const project = {
        id: docSnap.id,
        ...data,
        createdAt: data.createdAt?.toDate ? data.createdAt.toDate() : data.createdAt,
        updatedAt: data.updatedAt?.toDate ? data.updatedAt.toDate() : data.updatedAt
      };
      return project;
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
    const now = new Date();
    const docRef = await addDoc(collection(db, PROJECTS_COLLECTION), {
      ...projectData,
      createdAt: now,
      updatedAt: now
    });
    
    return docRef.id;
  } catch (error) {
    console.error('Error creating project:', error);
    throw error;
  }
};

// Helper function to remove undefined values from objects
const cleanUndefinedValues = (obj) => {
  if (obj === null || obj === undefined) {
    return null;
  }
  
  if (Array.isArray(obj)) {
    return obj.map(cleanUndefinedValues).filter(item => item !== undefined);
  }
  
  if (typeof obj === 'object') {
    const cleaned = {};
    Object.keys(obj).forEach(key => {
      const value = obj[key];
      if (value !== undefined) {
        cleaned[key] = cleanUndefinedValues(value);
      }
    });
    return cleaned;
  }
  
  return obj;
};

export const updateProject = async (projectId, updates) => {
  try {
    // Clean undefined values before sending to Firebase
    const cleanedUpdates = cleanUndefinedValues(updates);
    
    const docRef = doc(db, PROJECTS_COLLECTION, projectId);
    await updateDoc(docRef, {
      ...cleanedUpdates,
      updatedAt: new Date()
    });
    
  } catch (error) {
    console.error('Error updating project:', error);
    throw error;
  }
};

export const deleteProject = async (projectId) => {
  try {
    
    // Step 1: Delete Storage files first (with simple direct approach)
    const { deleteProjectFolder } = await import('./simpleStorageDeletion');
    
    try {
      await deleteProjectFolder(projectId);
    } catch (storageError) {
      console.warn('⚠️ Storage deletion failed:', storageError.message);
      // Continue with database deletion - don't let storage issues block user
      // Storage files will be orphaned but user can still work
    }
    
    // Step 2: Delete Firestore document
    const docRef = doc(db, PROJECTS_COLLECTION, projectId);
    await deleteDoc(docRef);
    
    return true;
  } catch (error) {
    console.error('❌ Project deletion failed:', error);
    throw error;
  }
};

// ====================
// PROJECT DATA MIGRATION
// ====================

// Export deleteField for use in other components
export { deleteField };

export const migrateLocalStorageToFirebase = async () => {
  try {
    // Get existing projects from localStorage
    const localProjects = JSON.parse(localStorage.getItem('projects') || '[]');
    
    if (localProjects.length === 0) {
      return [];
    }
    
    
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
      } catch (error) {
        console.error('Failed to migrate project:', project.name, error);
      }
    }
    
    if (migratedProjects.length > 0) {
      // Clear localStorage after successful migration
      localStorage.removeItem('projects');
    }
    
    return migratedProjects;
  } catch (error) {
    console.error('Error during migration:', error);
    throw error;
  }
};