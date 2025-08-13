import { Button } from '../common/Button';
import { Checkbox } from '../common/Checkbox';
import { PlusCircle, Trash2 } from '../common/Icons';

export const ProjectsDashboard = ({ 
  projects, 
  createNewProject, 
  deleteProject, 
  selectProject,
  selectionMode = false,
  selectedProjects = new Set(),
  onEnterSelectionMode,
  onExitSelectionMode,
  onToggleProjectSelection,
  onToggleSelectAll,
  onBulkDelete
}) => (
  <div className="min-h-screen bg-gray-900 text-gray-200 font-sans p-4 sm:p-6 lg:p-8">
    <div className="max-w-4xl mx-auto">
      <header className="text-center mb-8">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">Animation Studio</h1>
        <p className="mt-4 text-lg text-gray-400">Your projects are saved in your browser's local storage.</p>
      </header>
      <div className="mb-8">
        <div className="flex items-center justify-between">
          {/* Left side - New Project + Selection actions */}
          <div className="flex items-center gap-3">
            <Button onClick={createNewProject}> 
              <PlusCircle size={20} /> New Project
            </Button>
            
            {!selectionMode && projects.length > 0 && (
              <Button onClick={onEnterSelectionMode} variant="secondary">
                Select Projects
              </Button>
            )}
          </div>

          {/* Right side - Selection mode actions */}
          {selectionMode && (
            <div className="flex items-center gap-3">
              {projects.length > 0 && (
                <div className="flex items-center gap-2">
                  <Checkbox
                    checked={selectedProjects.size === projects.length && projects.length > 0}
                    onChange={onToggleSelectAll}
                  />
                  <span className="text-sm text-gray-400">
                    Select All ({selectedProjects.size}/{projects.length})
                  </span>
                </div>
              )}
              
              <Button onClick={onExitSelectionMode} variant="secondary">
                Cancel
              </Button>
              
              {selectedProjects.size > 0 && (
                <Button onClick={onBulkDelete} variant="danger">
                  Delete Selected ({selectedProjects.size})
                </Button>
              )}
            </div>
          )}
        </div>
      </div>
      <div className="space-y-4">
        {projects.length > 0 ? projects.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)).map(p => (
          <div 
            key={p.id} 
            className={`
              bg-gray-800/50 border rounded-xl p-4 flex items-center transition-all duration-200 cursor-pointer hover:bg-gray-800/70
              ${selectionMode && selectedProjects.has(p.id) 
                ? 'border-blue-500 bg-blue-500/10' 
                : 'border-gray-700 hover:border-indigo-500 hover:scale-[1.01]'
              }
            `}
            onClick={() => selectionMode ? onToggleProjectSelection(p.id) : selectProject(p.id)}
          >
            {/* Selection checkbox */}
            {selectionMode && (
              <div className="mr-4 flex-shrink-0">
                <Checkbox
                  checked={selectedProjects.has(p.id)}
                  onChange={() => onToggleProjectSelection(p.id)}
                />
              </div>
            )}

            {/* Project content */}
            <div className="flex-1">
              <h2 className="text-xl font-bold text-white">{p.name}</h2>
              <p className="text-sm text-gray-400">{`By ${p.author || 'Unknown'} | ${p.totalPages || 0} Pages | Created: ${new Date(p.createdAt).toLocaleDateString()}`}</p>
            </div>

            {/* Actions */}
            {!selectionMode && (
              <div className="flex gap-2 flex-shrink-0">
                <Button 
                  onClick={(e) => {
                    e.stopPropagation(); // Prevent card click when clicking delete
                    deleteProject(p);
                  }} 
                  variant="danger"
                >
                  <Trash2 size={16} />
                </Button>
              </div>
            )}
          </div>
        )) : (
          <div className="text-center text-gray-500 border-2 border-dashed border-gray-700 rounded-lg p-12">
            <h3 className="text-xl font-medium text-gray-300">No projects yet</h3>
            <p className="mt-2">Click "New Project" to start creating your animation!</p>
          </div>
        )}
      </div>
    </div>
  </div>
);