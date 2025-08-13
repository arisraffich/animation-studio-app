import { ProgressiveVideoGrid } from './ProgressiveVideoGrid';

export const SceneGeneratorUI = ({ sceneId, project, updateProject, setError }) => {
  return (
    <div className="bg-gray-800/50 p-6 rounded-lg">
      
      <div>
        <ProgressiveVideoGrid
          sceneId={sceneId}
          project={project}
          updateProject={updateProject}
          setError={setError}
          isRegenerating={false}
          onCancelRegeneration={() => {}}
        />
      </div>
    </div>
  );
};