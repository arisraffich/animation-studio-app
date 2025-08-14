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
      const project = {
        id: docSnap.id,
        ...docSnap.data(),
        createdAt: docSnap.data().createdAt?.toDate?.() || new Date()
      };
      console.log('Firebase: Retrieved project:', projectId);
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
    const docRef = await addDoc(collection(db, PROJECTS_COLLECTION), {
      ...projectData,
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp()
    });
    
    console.log('Firebase: Created project:', docRef.id);
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
    // Delete Storage files first (don't wait for completion)
    const { deleteProjectImages } = await import('./storageService');
    deleteProjectImages(projectId); // Fire and forget - don't await
    
    // Delete Firestore document
    const docRef = doc(db, PROJECTS_COLLECTION, projectId);
    await deleteDoc(docRef);
    
    console.log('Firebase: Deleted project:', projectId);
    return true;
  } catch (error) {
    console.error('Error deleting project:', error);
    throw error;
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
    
    if (migratedProjects.length > 0) {
      // Clear localStorage after successful migration
      localStorage.removeItem('projects');
      console.log('Migration completed. Cleared localStorage.');
    }
    
    return migratedProjects;
  } catch (error) {
    console.error('Error during migration:', error);
    throw error;
  }
};