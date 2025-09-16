// Cloudflare Database Service - Frontend API Client
// Communicates with server-side D1 database via API endpoints

// ====================
// PROJECT OPERATIONS
// ====================

export const getAllProjects = async () => {
  try {
    const apiUrl = import.meta.env.VITE_API_URL || '/api';
    const response = await fetch(`${apiUrl}/api/projects`);
    if (!response.ok) {
      throw new Error(`API error: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching projects:', error);
    throw error;
  }
};

export const getProject = async (projectId) => {
  try {
    const apiUrl = import.meta.env.VITE_API_URL || '/api';
    const response = await fetch(`${apiUrl}/api/projects/${projectId}`);
    if (!response.ok) {
      throw new Error(`API error: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching project:', error);
    throw error;
  }
};

export const createProject = async (projectData) => {
  try {
    const apiUrl = import.meta.env.VITE_API_URL || '/api';
    const response = await fetch(`${apiUrl}/api/projects`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(projectData)
    });
    
    if (!response.ok) {
      throw new Error(`API error: ${response.status}`);
    }
    
    const result = await response.json();
    return result.id;
  } catch (error) {
    console.error('Error creating project:', error);
    throw error;
  }
};

export const updateProject = async (projectId, updates) => {
  try {
    const apiUrl = import.meta.env.VITE_API_URL || '/api';
    const response = await fetch(`${apiUrl}/api/projects/${projectId}`, {
      method: 'PUT', 
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updates)
    });
    
    if (!response.ok) {
      throw new Error(`API error: ${response.status}`);
    }
    
    return await response.json();
  } catch (error) {
    console.error('Error updating project:', error);
    throw error;
  }
};

export const deleteProject = async (projectId) => {
  try {
    // Delete from database
    const apiUrl = import.meta.env.VITE_API_URL || '/api';
    const response = await fetch(`${apiUrl}/api/projects/${projectId}`, {
      method: 'DELETE'
    });
    
    if (!response.ok) {
      throw new Error(`API error: ${response.status}`);
    }
    
    // Delete project files from R2 storage
    const { deleteProjectFolder } = await import('./simpleStorageDeletion');
    try {
      await deleteProjectFolder(projectId);
    } catch (storageError) {
      console.warn('Storage deletion failed:', storageError);
      // Continue - database deletion succeeded
    }
    
    return await response.json();
  } catch (error) {
    console.error('Error deleting project:', error);
    throw error;
  }
};

// ====================
// MIGRATION UTILITIES
// ====================

export const migrateLocalStorageToFirebase = async () => {
  // For Cloudflare: Handle localStorage migration via API
  try {
    const localProjects = JSON.parse(localStorage.getItem('projects') || '[]');
    
    if (localProjects.length === 0) {
      console.log('No local projects to migrate');
      return true;
    }
    
    console.log(`🔄 Migrating ${localProjects.length} local projects to Cloudflare D1...`);
    
    for (const project of localProjects) {
      await createProject({
        name: project.name || 'Migrated Project',
        author: project.author || 'Unknown Author',
        storyText: project.storyText || '',
        totalPages: project.totalPages || 0,
        scenes: project.scenes || {},
        pageDimensions: project.pageDimensions || null
      });
    }
    
    console.log('✅ localStorage migration to Cloudflare D1 completed successfully');
    return true;
  } catch (error) {
    console.error('❌ localStorage migration failed:', error);
    throw error;
  }
};