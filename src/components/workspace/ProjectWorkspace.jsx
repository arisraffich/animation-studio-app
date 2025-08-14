import { useState, useEffect } from 'react';
import { PageNavigation } from './PageNavigation';
import { SceneGenerator } from './SceneGenerator';
import { AlertTriangle } from '../common/Icons';

export const ProjectWorkspace = ({ project, updateProject, goToDashboard, libraryError }) => {
  const [currentSceneId, setCurrentSceneId] = useState('cover');
  const [error, setError] = useState('');
  
  useEffect(() => {
    if (project.storyText) {
      const navItems = ['cover', ...Array.from({ length: project.totalPages }, (_, i) => String(i + 1)), 'end'];
      // Consider both 'completed' and 'in_progress' scenes as non-pending to activate next page
      const firstPendingScene = navItems.find(id => {
        const scene = project.scenes[id];
        return !scene || (scene.status !== 'completed' && scene.status !== 'in_progress');
      });
      setCurrentSceneId(firstPendingScene || 'end');
    } else {
      setCurrentSceneId('cover');
    }
  }, [project.id]);

  return (
    <div className="min-h-screen bg-gray-900 text-gray-200 font-sans flex flex-col md:flex-row">
      <PageNavigation project={project} currentSceneId={currentSceneId} setCurrentSceneId={setCurrentSceneId} goToDashboard={goToDashboard} />
      <main className="flex-1 p-4 sm:p-6 lg:p-8 overflow-y-auto" style={{maxHeight: '100vh'}}>
        {error && (
          <div className="w-full bg-red-500/20 border border-red-500 text-red-300 p-4 rounded-lg mb-4 flex gap-2">
            <AlertTriangle className="flex-shrink-0" />
            <p><span className="font-bold">Error: </span>{error}</p>
          </div>
        )}
        {libraryError && (
          <div className="w-full bg-red-500/20 border border-red-500 text-red-300 p-4 rounded-lg mb-4 flex gap-2">
            <AlertTriangle className="flex-shrink-0" />
            <p><span className="font-bold">Library Error: </span>{libraryError}</p>
          </div>
        )}
        <SceneGenerator project={project} updateProject={updateProject} currentSceneId={currentSceneId} setCurrentSceneId={setCurrentSceneId} setError={setError} />
      </main>
    </div>
  );
};