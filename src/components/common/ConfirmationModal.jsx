import { AlertTriangle } from './Icons';
import { Button } from './Button';

export const ConfirmationModal = ({ project, onConfirm, onCancel }) => {
  if (!project) return null;
  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-gray-800 border border-gray-700 rounded-xl p-6 max-w-sm w-full mx-4">
        <div className="flex items-center gap-4 mb-4">
          <div className="flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-500/20">
            <AlertTriangle className="h-6 w-6 text-red-400" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-white">Delete Project</h3>
            <p className="text-sm text-gray-400">{`Are you sure you want to delete "${project.name}"? This action cannot be undone.`}</p>
          </div>
        </div>
        <div className="flex justify-end gap-3 mt-6">
          <Button onClick={onCancel} variant="secondary">Cancel</Button>
          <Button onClick={onConfirm} variant="danger">Delete</Button>
        </div>
      </div>
    </div>
  );
};