import { LayoutUploader } from '../scenes/LayoutUploader';
import { CompletedSceneViewer } from '../scenes/CompletedSceneViewer';
import { SceneGeneratorUI } from '../scenes/SceneGeneratorUI';

export const SceneGenerator = ({ project, updateProject, currentSceneId, setCurrentSceneId, setError }) => {
  const currentSceneData = project.scenes[currentSceneId];

  if (!project.storyText) {
    return <LayoutUploader {...{ project, updateProject, setCurrentSceneId, setError }} />;
  }

  if (currentSceneData && currentSceneData.status === 'completed') {
    return <CompletedSceneViewer {...{ sceneId: currentSceneId, project, updateProject, setCurrentSceneId, setError }} />;
  }
  
  return <SceneGeneratorUI {...{ sceneId: currentSceneId, project, updateProject, setError }} />;
};