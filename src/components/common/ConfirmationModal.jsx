import { AlertTriangle, Loader2 } from './Icons';
import { Button } from './Button';

export const ConfirmationModal = ({ 
  project, 
  projects = [],
  onConfirm, 
  onCancel,
  isDeleting = false,
  deleteProgress = '',
  deleteError = null 
}) => {
  // Handle both single and bulk delete
  const isBulkDelete = projects.length > 0;
  const projectsToShow = isBulkDelete ? projects : (project ? [project] : []);
  
  if (projectsToShow.length === 0) return null;
  
  const isMultiple = projectsToShow.length > 1;
  
  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-gray-800 border border-gray-700 rounded-xl p-6 max-w-sm w-full mx-4 transition-all duration-300">
        
        {/* Confirmation State */}
        {!isDeleting && !deleteError && (
          <div className="text-center">
            {/* Icon and Title Row - Centered */}
            <div className="flex items-center justify-center gap-3 mb-4">
              <AlertTriangle className="h-5 w-5 text-red-400 flex-shrink-0" />
              <h3 className="text-lg font-bold text-white">
                {isMultiple ? `Delete ${projectsToShow.length} Projects` : 'Delete Project'}
              </h3>
            </div>
            
            {/* Notification Text - Centered */}
            <div className="text-center mb-6 px-4">
              <p className="text-sm text-gray-400 mb-3">
                {isMultiple 
                  ? `Are you sure you want to delete these ${projectsToShow.length} projects? This action cannot be undone.`
                  : 'Are you sure you want to delete this project? This action cannot be undone.'
                }
              </p>
              
              {/* Show project list for bulk delete */}
              {isMultiple && (
                <div className="mt-3 max-h-32 overflow-y-auto bg-gray-900 rounded p-2">
                  {projectsToShow.map((proj, index) => (
                    <div key={proj.id} className="text-xs text-gray-300 py-1">
                      • {proj.name}
                    </div>
                  ))}
                </div>
              )}
            </div>
            
            {/* Buttons Row - Centered */}
            <div className="flex justify-center gap-3">
              <Button onClick={onCancel} variant="secondary">Cancel</Button>
              <Button onClick={onConfirm} variant="danger">Delete</Button>
            </div>
          </div>
        )}

        {/* Loading State */}
        {isDeleting && !deleteError && (
          <div className="text-center">
            {/* Icon and Title Row - Centered */}
            <div className="flex items-center justify-center gap-3 mb-4">
              <Loader2 className="h-5 w-5 text-blue-400 animate-spin flex-shrink-0" />
              <h3 className="text-lg font-bold text-white">
                {isMultiple ? `Deleting ${projectsToShow.length} Projects` : 'Deleting Project'}
              </h3>
            </div>
            
            {/* Progress Text - Centered */}
            <p className="text-sm text-gray-400 text-center mb-4 px-4">
              {deleteProgress || 'Please wait while we delete your project...'}
            </p>
            
            {/* Progress Bar - Centered */}
            <div className="w-full bg-gray-700 rounded-full h-1">
              <div className="bg-blue-500 h-1 rounded-full animate-pulse w-3/4 transition-all duration-1000"></div>
            </div>
          </div>
        )}

        {/* Error State */}
        {deleteError && (
          <div className="text-center">
            {/* Icon and Title Row - Centered */}
            <div className="flex items-center justify-center gap-3 mb-4">
              <AlertTriangle className="h-5 w-5 text-red-400 flex-shrink-0" />
              <h3 className="text-lg font-bold text-white">Delete Failed</h3>
            </div>
            
            {/* Error Message - Centered */}
            <p className="text-sm text-gray-400 text-center mb-6 px-4">
              {deleteError}
            </p>
            
            {/* Buttons Row - Centered */}
            <div className="flex justify-center gap-3">
              <Button onClick={onCancel} variant="secondary">Close</Button>
              <Button onClick={onConfirm} variant="danger">Retry</Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};