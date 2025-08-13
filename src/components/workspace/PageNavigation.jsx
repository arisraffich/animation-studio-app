import { Button } from '../common/Button';
import { Home } from '../common/Icons';

export const PageNavigation = ({ project, currentSceneId, setCurrentSceneId, goToDashboard }) => {
  const navItems = project.totalPages > 0 ? ['cover', ...Array.from({ length: project.totalPages }, (_, i) => String(i + 1)), 'end'] : [];
  
  const firstPendingSceneIndex = navItems.findIndex(id => !project.scenes[id] || project.scenes[id].status !== 'completed');

  return (
    <nav className="w-full md:w-64 bg-gray-900/50 border-b md:border-b-0 md:border-r border-gray-800 p-4 flex flex-col">
      <Button onClick={goToDashboard} variant="secondary" className="mb-6"><Home size={16} /> Dashboard</Button>
      {navItems.length > 0 && <h3 className="text-lg font-semibold text-white mb-4">Project Pages</h3>}
      <ul className="space-y-2">
        {navItems.map((id, index) => {
          const isCurrent = id === currentSceneId;
          const isDisabled = firstPendingSceneIndex !== -1 && index > firstPendingSceneIndex;

          let label = '';
          if (id === 'cover') label = 'Cover';
          else if (id === 'end') label = 'End Scene';
          else label = `Page ${id}`;

          return (
            <li key={id}>
              <button
                onClick={() => !isDisabled && setCurrentSceneId(id)}
                disabled={isDisabled}
                className={`w-full text-left px-3 py-2 rounded-md text-sm transition-colors ${
                  isCurrent ? 'bg-indigo-600 text-white' : 'text-gray-300 hover:bg-gray-700'
                } ${isDisabled ? 'opacity-50 cursor-not-allowed' : ''}`}
              >
                {label}
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};