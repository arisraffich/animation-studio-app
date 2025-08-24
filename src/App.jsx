import React, { useState, useEffect, useCallback } from 'react';
import { ProjectsDashboard } from './components/dashboard/ProjectsDashboard';
import { ProjectWorkspace } from './components/workspace/ProjectWorkspace';
import { ConfirmationModal } from './components/common/ConfirmationModal';
import { Loader2, AlertTriangle } from './components/common/Icons';
import { 
  getAllProjects, 
  createProject, 
  updateProject as updateFirebaseProject, 
  deleteProject as deleteFirebaseProject,
  migrateLocalStorageToFirebase
} from './services/firebaseService';

function App() {
  const [projects, setProjects] = useState([]);
  const [currentProjectId, setCurrentProjectId] = useState(null);
  const [librariesLoaded, setLibrariesLoaded] = useState(false);
  const [libraryError, setLibraryError] = useState('');
  const [projectToDelete, setProjectToDelete] = useState(null);
  const [isLoadingProjects, setIsLoadingProjects] = useState(false);
  const [isDeletingProject, setIsDeletingProject] = useState(false);
  const [deleteProgress, setDeleteProgress] = useState('');
  const [deleteError, setDeleteError] = useState(null);
  const [selectionMode, setSelectionMode] = useState(false);
  const [selectedProjects, setSelectedProjects] = useState(new Set());
  const [projectsToDelete, setProjectsToDelete] = useState([]);

  useEffect(() => {
    const loadScript = (url) => {
      return new Promise((resolve, reject) => {
        const existingScript = document.querySelector(`script[src="${url}"]`);
        if (existingScript) {
          resolve();
          return;
        }
        const script = document.createElement('script');
        script.src = url;
        script.async = true;
        script.onload = resolve;
        script.onerror = () => reject(new Error(`Failed to load script: ${url}`));
        document.body.appendChild(script);
      });
    };

    loadScript('https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.16.105/pdf.min.js')
    .then(() => {
      if (window.pdfjsLib) {
        window.pdfjsLib.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.16.105/pdf.worker.min.js`;
      }
      setLibrariesLoaded(true);
    }).catch(error => {
      console.error(error);
      setLibraryError('Failed to load necessary libraries. Please refresh the page.');
    });
  }, []);

  // Load projects from Firebase
  useEffect(() => {
    const loadProjects = async () => {
      if (!librariesLoaded) return;
      
      try {
        setIsLoadingProjects(true);
        
        // Check if there are projects in localStorage to migrate
        const localProjects = JSON.parse(localStorage.getItem('projects') || '[]');
        if (localProjects.length > 0) {
          // Migrating local projects to Firebase
          await migrateLocalStorageToFirebase();
          localStorage.removeItem('projects'); // Clear localStorage after migration
        }
        
        // Load all projects from Firebase
        const firebaseProjects = await getAllProjects();
        setProjects(firebaseProjects);
        // Projects loaded successfully
        
        // Successfully loaded projects from Firebase
      } catch (error) {
        console.error('Error loading projects:', error);
        setLibraryError('Failed to load projects. Please refresh the page.');
      } finally {
        setIsLoadingProjects(false);
      }
    };

    loadProjects();
  }, [librariesLoaded]);

  const createNewProject = async () => {
    try {
      const projectId = await createProject({
        name: 'Untitled Project',
        author: 'Unknown Author',
        storyText: '',
        totalPages: 0,
        scenes: {},
        pageDimensions: null
      });

      // Refresh projects list
      const updatedProjects = await getAllProjects();
      setProjects(updatedProjects);
      setCurrentProjectId(projectId);
    } catch (error) {
      console.error('Error creating project:', error);
      setLibraryError('Failed to create project. Please try again.');
    }
  };

  const confirmDeleteProject = async () => {
    const projectsToProcess = projectsToDelete.length > 0 ? projectsToDelete : (projectToDelete ? [projectToDelete] : []);
    
    if (projectsToProcess.length === 0) return;
    
    try {
      setIsDeletingProject(true);
      setDeleteError(null);
      
      const isMultiple = projectsToProcess.length > 1;
      const projectText = isMultiple ? `${projectsToProcess.length} projects` : 'project';
      
      setDeleteProgress(`Preparing to delete ${projectText}...`);
      await new Promise(resolve => setTimeout(resolve, 500));
      
      setDeleteProgress('Cleaning up project files...');
      await new Promise(resolve => setTimeout(resolve, 800));
      
      setDeleteProgress(`Removing ${projectText}...`);
      
      // Delete projects sequentially to avoid overwhelming Firebase
      for (const project of projectsToProcess) {
        await deleteFirebaseProject(project.id);
        if (currentProjectId === project.id) {
          setCurrentProjectId(null);
        }
      }
      
      setDeleteProgress('Refreshing project list...');
      // Refresh projects list
      const updatedProjects = await getAllProjects();
      setProjects(updatedProjects);
      
      // Close modal and reset states
      setProjectToDelete(null);
      setProjectsToDelete([]);
      setIsDeletingProject(false);
      setDeleteProgress('');
      
      // Exit selection mode if we were in selection mode (bulk delete)
      if (projectsToDelete.length > 0) {
        exitSelectionMode();
      }
      
    } catch (error) {
      console.error('Error deleting projects:', error);
      setIsDeletingProject(false);
      setDeleteProgress('');
      setDeleteError('Failed to delete projects. Please try again.');
    }
  };

  const cancelDelete = () => {
    setProjectToDelete(null);
    setProjectsToDelete([]);
    setIsDeletingProject(false);
    setDeleteProgress('');
    setDeleteError(null);
  };

  // Bulk selection functions
  const enterSelectionMode = () => {
    setSelectionMode(true);
    setSelectedProjects(new Set());
  };

  const exitSelectionMode = () => {
    setSelectionMode(false);
    setSelectedProjects(new Set());
  };

  const toggleProjectSelection = (projectId) => {
    setSelectedProjects(prev => {
      const newSet = new Set(prev);
      if (newSet.has(projectId)) {
        console.log(`Deselecting project: ${projectId}`);
        newSet.delete(projectId);
      } else {
        console.log(`Selecting project: ${projectId}`);
        newSet.add(projectId);
      }
      console.log(`Selected projects:`, Array.from(newSet));
      return newSet;
    });
  };

  const toggleSelectAll = () => {
    console.log(`Current selection: ${selectedProjects.size}/${projects.length}`);
    if (selectedProjects.size === projects.length) {
      // If all are selected, deselect all
      console.log('Deselecting all projects');
      setSelectedProjects(new Set());
    } else {
      // If none or some are selected, select all
      console.log('Selecting all projects');
      setSelectedProjects(new Set(projects.map(p => p.id)));
    }
  };

  const bulkDeleteProjects = () => {
    const projectsToDeleteArray = projects.filter(p => selectedProjects.has(p.id));
    setProjectsToDelete(projectsToDeleteArray);
  };
  
  const updateProject = useCallback(async (projectId, updatedData) => {
    try {
      await updateFirebaseProject(projectId, updatedData);
      
      // Update local state immediately for better UX
      setProjects(prev => prev.map(p => 
        p.id === projectId ? { ...p, ...updatedData } : p
      ));
    } catch (error) {
      console.error('Error updating project:', error);
      // Optionally show error to user
    }
  }, []);

  const currentProject = projects.find(p => p.id === currentProjectId);

  if (!librariesLoaded || isLoadingProjects) {
    return (
      <div className="min-h-screen bg-gray-900 text-gray-200 flex items-center justify-center">
        <Loader2 className="animate-spin mr-2" />
        {!librariesLoaded ? 'Loading Libraries...' : 'Loading Projects...'}
      </div>
    );
  }
  
  if (libraryError) {
    return (
      <div className="min-h-screen bg-gray-900 text-red-400 flex items-center justify-center p-4 text-center">
        <AlertTriangle className="mr-2" />
        {libraryError}
      </div>
    );
  }

  if (currentProjectId && currentProject) {
    return (
      <ProjectWorkspace
        project={currentProject}
        updateProject={updateProject}
        goToDashboard={() => setCurrentProjectId(null)}
        libraryError={libraryError}
      />
    );
  }

  return (
    <>
      <ConfirmationModal 
        project={projectToDelete} 
        projects={projectsToDelete}
        onConfirm={confirmDeleteProject} 
        onCancel={cancelDelete}
        isDeleting={isDeletingProject}
        deleteProgress={deleteProgress}
        deleteError={deleteError}
      />
      <ProjectsDashboard
        projects={projects}
        createNewProject={createNewProject}
        deleteProject={(project) => setProjectToDelete(project)}
        selectProject={setCurrentProjectId}
        selectionMode={selectionMode}
        selectedProjects={selectedProjects}
        onEnterSelectionMode={enterSelectionMode}
        onExitSelectionMode={exitSelectionMode}
        onToggleProjectSelection={toggleProjectSelection}
        onToggleSelectAll={toggleSelectAll}
        onBulkDelete={bulkDeleteProjects}
      />
    </>
  );
}

export default App;