import { useState } from 'react';
import { Button } from './Button';

export const CoverInfoConfirmationModal = ({ initialTitle, initialAuthor, onConfirm, onCancel }) => {
  const [title, setTitle] = useState(initialTitle);
  const [author, setAuthor] = useState(initialAuthor);

  const handleConfirm = () => {
    onConfirm({ confirmedTitle: title, confirmedAuthor: author });
  };
  
  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-gray-800 border border-gray-700 rounded-xl p-6 max-w-md w-full mx-4">
        <h3 className="text-xl font-bold text-white mb-2">Review and Confirm</h3>
        <p className="text-sm text-gray-400 mb-6">Please correct the extracted Title and Author before creating the project.</p>
        
        <div className="space-y-4">
          <div>
            <label htmlFor="title" className="block mb-2 text-sm font-medium text-gray-300">Book Title</label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full p-2 bg-gray-900 border border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none transition"
            />
          </div>
          <div>
            <label htmlFor="author" className="block mb-2 text-sm font-medium text-gray-300">Author Name</label>
            <input
              type="text"
              id="author"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              className="w-full p-2 bg-gray-900 border border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none transition"
            />
          </div>
        </div>

        <div className="flex justify-end gap-3 mt-8">
          <Button onClick={onCancel} variant="secondary">Cancel</Button>
          <Button onClick={handleConfirm} variant="primary">Confirm and Create Project</Button>
        </div>
      </div>
    </div>
  );
};