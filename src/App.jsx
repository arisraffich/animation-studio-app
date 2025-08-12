import { useState, useEffect, useCallback } from 'react';
import { useLocalStorage } from './hooks/useLocalStorage';
import { ProjectsDashboard } from './components/dashboard/ProjectsDashboard';
import { ProjectWorkspace } from './components/workspace/ProjectWorkspace';
import { ConfirmationModal } from './components/common/ConfirmationModal';
import { Loader2, AlertTriangle } from './components/common/Icons';

function App() {
  const [projects, setProjects] = useLocalStorage('animation-projects', []);
  const [currentProjectId, setCurrentProjectId] = useState(null);
  const [librariesLoaded, setLibrariesLoaded] = useState(false);
  const [libraryError, setLibraryError] = useState('');
  const [projectToDelete, setProjectToDelete] = useState(null);

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

  const createNewProject = () => {
    const newProject = {
      id: `proj_${Date.now()}`,
      name: 'Untitled Project',
      author: 'Unknown Author',
      storyText: '',
      totalPages: 0,
      scenes: {},
      createdAt: new Date().toISOString(),
    };
    setProjects(prev => [...prev, newProject]);
    setCurrentProjectId(newProject.id);
  };

  const confirmDeleteProject = () => {
    if (projectToDelete) {
      setProjects(prev => prev.filter(p => p.id !== projectToDelete.id));
      setProjectToDelete(null);
      if (currentProjectId === projectToDelete.id) {
        setCurrentProjectId(null);
      }
    }
  };
  
  const updateProject = useCallback((projectId, updatedData) => {
    setProjects(prev => prev.map(p => p.id === projectId ? { ...p, ...updatedData } : p));
  }, [setProjects]);

  const currentProject = projects.find(p => p.id === currentProjectId);

  if (!librariesLoaded) {
    return <div className="min-h-screen bg-gray-900 text-gray-200 flex items-center justify-center"><Loader2 className="animate-spin mr-2" />Loading Libraries...</div>;
  }
  
  if (libraryError) {
    return <div className="min-h-screen bg-gray-900 text-red-400 flex items-center justify-center p-4 text-center"><AlertTriangle className="mr-2" />{libraryError}</div>;
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
        onConfirm={confirmDeleteProject} 
        onCancel={() => setProjectToDelete(null)} 
      />
      <ProjectsDashboard
        projects={projects}
        createNewProject={createNewProject}
        deleteProject={(project) => setProjectToDelete(project)}
        selectProject={setCurrentProjectId}
      />
    </>
  );
}

export default App;