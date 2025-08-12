import { useState } from 'react';
import { Button } from '../common/Button';
import { UploadCloud, Loader2, Wand2 } from '../common/Icons';
import { generateScene } from '../../services/api';

export const SceneGeneratorUI = ({ sceneId, project, updateProject, setError, isRegenerating = false }) => {
  const [imageFile, setImageFile] = useState(null);
  const [imageBase64, setImageBase64] = useState('');
  const [feedback, setFeedback] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [loadingMessage, setLoadingMessage] = useState('Generating...');

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImageFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        const img = new Image();
        img.onload = () => {
          const canvas = document.createElement('canvas');
          const ctx = canvas.getContext('2d');
          
          const maxWidth = 1024;
          const maxHeight = 1024;
          let width = img.width;
          let height = img.height;
          
          if (width > height) {
            if (width > maxWidth) {
              height *= maxWidth / width;
              width = maxWidth;
            }
          } else {
            if (height > maxHeight) {
              width *= maxHeight / height;
              height = maxHeight;
            }
          }
          
          canvas.width = width;
          canvas.height = height;
          ctx.drawImage(img, 0, 0, width, height);
          
          setImageBase64(canvas.toDataURL('image/jpeg', 0.8).split(',')[1]);
        };
        img.src = reader.result;
      };
      reader.readAsDataURL(file);
    }
  };
  
  const handleGenerate = async () => {
    if (sceneId !== 'end' && !imageBase64 && !isRegenerating) {
      setError('Please upload an illustration for this page.');
      return;
    }
    setIsLoading(true);
    setLoadingMessage('Generating JSON prompt...');
    setError('');

    try {
      const newPrompt = await generateScene(project, sceneId, imageBase64, feedback, setError);
      
      const updatedScenes = {
        ...project.scenes,
        [sceneId]: {
          ...project.scenes[sceneId],
          status: 'completed',
          prompt: newPrompt,
        }
      };
      
      let projectUpdates = { scenes: updatedScenes };
      if (sceneId === 'cover' && newPrompt.extracted_title) {
        projectUpdates.name = newPrompt.extracted_title;
        projectUpdates.author = newPrompt.extracted_author || 'Unknown Author';
      }

      updateProject(project.id, projectUpdates);

    } catch (err) {
      setError(`Operation failed: ${err.message}.`);
    } finally {
      setIsLoading(false);
    }
  };

  const sceneText = project.scenes[sceneId]?.text;

  let headerText = '';
  if (sceneId === 'cover') headerText = 'Generate Cover Animation';
  else if (sceneId === 'end') headerText = 'Generate End Scene';
  else headerText = `Generate Animation for Page ${sceneId}`;
  if (isRegenerating) headerText = `Regenerate: ${headerText.split(' ')[1]} Scene`;

  return (
    <div className="bg-gray-800/50 p-6 rounded-lg">
      <h3 className="text-2xl font-bold mb-4">{headerText}</h3>
      
      {sceneId !== 'end' && (
        <div className="mb-4">
          <label className="block mb-2 font-semibold text-gray-300">
            {`Illustration for Page ${sceneId}`}
          </label>
          <label htmlFor="scene-image-upload" className="flex flex-col items-center justify-center w-full h-48 border-2 border-gray-600 border-dashed rounded-lg cursor-pointer hover:bg-gray-700/50">
            {imageBase64 ? <img src={`data:image/jpeg;base64,${imageBase64}`} alt="Preview" className="max-h-full max-w-full object-contain rounded-md" /> : <><UploadCloud /> <p>{imageFile ? imageFile.name : 'Click to upload'}</p></>}
            <input id="scene-image-upload" type="file" className="hidden" accept="image/*" onChange={handleImageChange} />
          </label>
        </div>
      )}

      {sceneText && (
        <div className="mb-4">
          <label className="block mb-2 font-semibold text-gray-300">Scene Text</label>
          <p className="text-gray-400 bg-gray-900 p-4 rounded-md">{sceneText}</p>
        </div>
      )}
      
      {isRegenerating && (
        <div className="mb-4">
          <label htmlFor="feedback-text" className="block mb-2 font-semibold text-gray-300">What would you like to change?</label>
          <textarea
            id="feedback-text"
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            placeholder="e.g., Make the character's smile bigger. Change the camera to a slow zoom in."
            className="w-full h-24 p-3 bg-gray-900 border border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none transition"
          />
        </div>
      )}
      
      {sceneId === 'end' && (
        <p className="text-gray-300 mb-4">All pages are complete. The end scene will be generated using the context of the entire story.</p>
      )}

      <Button onClick={handleGenerate} disabled={isLoading}>
        {isLoading ? <><Loader2 className="animate-spin" /> {loadingMessage}</> : <><Wand2 /> Generate Scene</>}
      </Button>
    </div>
  );
};