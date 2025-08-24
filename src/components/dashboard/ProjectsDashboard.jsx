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
      </header>
      <div className="mb-8">
        {/* All Buttons on Same Line */}
        <div className="flex justify-center items-center gap-4">
          {!selectionMode && (
            <Button onClick={createNewProject}> 
              <PlusCircle size={20} /> New Project
            </Button>
          )}
          
          {!selectionMode && (
            <Button 
              onClick={projects.length > 0 ? onEnterSelectionMode : undefined} 
              variant="secondary"
              disabled={projects.length === 0}
              className={projects.length === 0 ? "opacity-50 cursor-not-allowed" : ""}
            >
              Select Projects
            </Button>
          )}
          
          {/* Selection mode controls - on same line */}
          {selectionMode && (
            <>
              {projects.length > 0 && (
                <div 
                  className="flex items-center gap-2 cursor-pointer hover:text-gray-300 transition-colors"
                  onClick={onToggleSelectAll}
                >
                  <Checkbox
                    checked={selectedProjects.size === projects.length && projects.length > 0}
                    indeterminate={selectedProjects.size > 0 && selectedProjects.size < projects.length}
                    onChange={() => {}} // Empty function since we handle it in the div onClick
                  />
                  <span className="text-sm text-gray-400 select-none">
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
            </>
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
            onClick={() => {
              if (selectionMode) {
                console.log(`Card clicked for project ${p.id}`);
                onToggleProjectSelection(p.id);
              } else {
                selectProject(p.id);
              }
            }}
          >
            {/* Selection checkbox */}
            {selectionMode && (
              <div 
                className="mr-4 flex-shrink-0"
                onClick={(e) => {
                  e.stopPropagation(); // Prevent card click when clicking checkbox
                  console.log(`Checkbox clicked for project ${p.id}, currently checked: ${selectedProjects.has(p.id)}`);
                  onToggleProjectSelection(p.id);
                }}
              >
                <Checkbox
                  checked={selectedProjects.has(p.id)}
                  onChange={() => {}} // Empty function since we handle it in the div onClick
                />
              </div>
            )}

            {/* Project content */}
            <div className="flex-1">
              <h2 className="text-xl font-bold text-white">{p.name}</h2>
              <p className="text-sm text-gray-400">{`By ${p.author || 'Unknown'} | ${p.totalPages || 0} Pages | Created: ${p.createdAt ? new Date(p.createdAt).toLocaleDateString() + ' ' + new Date(p.createdAt).toLocaleTimeString([], {hour12: false, hour: '2-digit', minute:'2-digit'}) : 'Unknown date'}`}</p>
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