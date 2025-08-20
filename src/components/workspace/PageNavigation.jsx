import { Button } from '../common/Button';
import { Home } from '../common/Icons';

export const PageNavigation = ({ project, currentSceneId, setCurrentSceneId, goToDashboard }) => {
  const navItems = project.totalPages > 0 ? ['cover', ...Array.from({ length: project.totalPages }, (_, i) => String(i + 1)), 'end', 'music'] : [];
  
  // Allow flexible navigation to any page

  return (
    <nav className="w-full md:w-48 bg-gray-950/70 backdrop-blur-sm border-r border-gray-800/50 flex flex-col h-screen">
      <div className="p-4 flex-shrink-0">
        <button 
          onClick={goToDashboard}
          className="flex items-center gap-3 text-red-300/80 hover:text-red-200 hover:bg-red-500/10 transition-all duration-200 text-base font-semibold mb-0 px-3 py-2 rounded-lg border border-red-500/20 hover:border-red-400/30"
        >
          <Home size={24} />
          Dashboard
        </button>
      </div>
      
      <div className="flex-1 overflow-y-auto px-2 -mt-1">
        <div className="space-y-0 pt-4 pb-6">
          {navItems.map((id, index) => {
          const isCurrent = id === currentSceneId;
          const isDisabled = false;
          const sceneStatus = project.scenes[id]?.status;

          let label = '';
          let icon = '';
          if (id === 'cover') {
            label = 'Cover';
            icon = '📖';
          } else if (id === 'end') {
            label = 'End';
            icon = '🎬';
          } else if (id === 'music') {
            label = 'Music';
            icon = '🎵';
          } else {
            label = `Page ${id}`;
            icon = '📄';
          }

          return (
            <button
              key={id}
              onClick={() => !isDisabled && setCurrentSceneId(id)}
              disabled={isDisabled}
              className={`
                w-full flex items-center gap-1.5 px-2 py-1 rounded-lg text-sm font-medium transition-all duration-200
                ${isCurrent 
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/25' 
                  : 'text-gray-400 hover:text-gray-200 hover:bg-gray-800/50'
                }
                ${isDisabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
              `}
            >
              <span className="text-base">{icon}</span>
              <div className="flex-1 text-left">
                <div className={`${isCurrent ? 'text-white' : 'text-gray-300'}`}>
                  {label}
                </div>
              </div>
              <div className="flex items-center">
                {sceneStatus === 'in_progress' && (
                  <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
                )}
                {sceneStatus === 'completed' && (
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                )}
              </div>
            </button>
          );
          })}
        </div>
      </div>
    </nav>
  );
};