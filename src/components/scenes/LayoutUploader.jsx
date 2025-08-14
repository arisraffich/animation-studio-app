import { useState } from 'react';
import { Loader2, UploadCloud } from '../common/Icons';
import { CoverInfoConfirmationModal } from '../common/CoverInfoModal';
import { findStoryContent, generateScene, analyzeCover } from '../../services/api';

export const LayoutUploader = ({ project, updateProject, setCurrentSceneId, setError }) => {
  const [isFileParsing, setIsFileParsing] = useState(false);
  const [loadingMessage, setLoadingMessage] = useState('');
  const [storyFile, setStoryFile] = useState(null);
  const [pendingCoverInfo, setPendingCoverInfo] = useState(null);

  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;
    setStoryFile(file);
    setIsFileParsing(true);
    setError('');

    try {
      setLoadingMessage('Extracting text from PDF...');
      let coverImageBase64 = '';
      let pageDimensions = null;
      const allPagesText = [];

      if (file.type === 'application/pdf') {
        if (!window.pdfjsLib) throw new Error("PDF parsing library not loaded.");
        const fileBuffer = await file.arrayBuffer();
        const pdf = await window.pdfjsLib.getDocument(fileBuffer).promise;
        for (let i = 1; i <= pdf.numPages; i++) {
          const page = await pdf.getPage(i);
          const textContent = await page.getTextContent();
          allPagesText.push({ pageNum: i, text: textContent.items.map(item => item.str).join(' ') });
        }
        setLoadingMessage('Extracting cover image...');
        const coverPage = await pdf.getPage(1);
        const viewport = coverPage.getViewport({ scale: 1.0 });
        const canvas = document.createElement('canvas');
        canvas.height = viewport.height;
        canvas.width = viewport.width;
        await coverPage.render({ canvasContext: canvas.getContext('2d'), viewport }).promise;
        coverImageBase64 = canvas.toDataURL('image/jpeg', 0.7).split(',')[1];
        
        // Store PDF page dimensions for consistent aspect ratios
        pageDimensions = {
          width: viewport.width,
          height: viewport.height,
          aspectRatio: viewport.width / viewport.height
        };
      } else {
        throw new Error("Unsupported file type. Please upload a PDF file.");
      }
      
      setLoadingMessage('Analyzing story content...');
      const storyContent = await findStoryContent(allPagesText, setError);
      if (!storyContent || storyContent.length === 0) {
        throw new Error("AI could not identify the main story pages in the document.");
      }

      const totalPages = storyContent.length;
      const storyText = storyContent.map(p => p.text).join('\n\n');
      const scenes = { cover: { status: 'pending' }, end: { status: 'pending' } };
      storyContent.forEach((page, index) => {
        scenes[String(index + 1)] = { status: 'pending', text: page.text };
      });
      
      // Enhanced cover analysis with GPT-5 OCR
      setLoadingMessage('Analyzing cover for title and author...');
      const coverAnalysis = await analyzeCover(coverImageBase64, setError);
      
      const initialProjectState = { 
        ...project, 
        storyText, 
        totalPages, 
        scenes,
        pageDimensions,  // Add PDF page dimensions to project
        bookTitle: coverAnalysis.title,
        bookAuthor: coverAnalysis.author
      };
      
      setLoadingMessage('Generating opening scene...');
      const newPrompt = await generateScene(initialProjectState, 'cover', coverImageBase64, '', setError);

      const aiGuessedTitle = coverAnalysis.title || newPrompt.extracted_title || file.name.replace(/\.pdf$/i, '') || 'Untitled Project';
      const aiGuessedAuthor = coverAnalysis.author || newPrompt.extracted_author || 'Unknown Author';
      
      setPendingCoverInfo({ initialProjectState, newPrompt, aiGuessedTitle, aiGuessedAuthor });

    } catch (err) {
      setError(err.message);
      setIsFileParsing(false);
    }
  };

  const handleConfirmCoverInfo = ({ confirmedTitle, confirmedAuthor }) => {
    const { initialProjectState, newPrompt } = pendingCoverInfo;

    newPrompt.extracted_title = confirmedTitle;
    newPrompt.extracted_author = confirmedAuthor;

    const finalScenes = {
      ...initialProjectState.scenes,
      cover: { status: 'completed', prompt: newPrompt }
    };

    const finalProjectState = {
      ...initialProjectState,
      scenes: finalScenes,
      name: confirmedTitle,
      author: confirmedAuthor,
    };
    
    updateProject(project.id, finalProjectState);
    setCurrentSceneId('cover');

    setPendingCoverInfo(null);
    setIsFileParsing(false);
  };

  return (
    <>
      {pendingCoverInfo && (
        <CoverInfoConfirmationModal
          initialTitle={pendingCoverInfo.aiGuessedTitle}
          initialAuthor={pendingCoverInfo.aiGuessedAuthor}
          onConfirm={handleConfirmCoverInfo}
          onCancel={() => {
            setPendingCoverInfo(null);
            setIsFileParsing(false);
          }}
        />
      )}

      <div className="bg-gray-800/50 p-6 rounded-lg">
        <h3 className="text-2xl font-bold mb-4">Upload Your Book's Layout</h3>
        <p className="text-gray-400 mb-4">Upload your book's layout as a PDF. The app will extract the text, use the first page as the cover, and automatically generate the opening scene.</p>
        <label htmlFor="story-upload" className={`flex flex-col items-center justify-center w-full h-48 border-2 border-gray-600 border-dashed rounded-lg bg-gray-800/50 transition cursor-pointer hover:bg-gray-700/50`}>
          {isFileParsing ? (
            <>
              <Loader2 className="animate-spin text-indigo-400" size={32} />
              <p className="mt-2 text-indigo-300">{loadingMessage}</p>
            </>
          ) : (
            <>
              <UploadCloud size={32} />
              <p className="mt-2">{storyFile ? storyFile.name : 'Click to upload'}</p>
              <p className="text-xs text-gray-500 mt-1">PDF file only</p>
            </>
          )}
          <input id="story-upload" type="file" className="hidden" accept=".pdf,application/pdf" onChange={handleFileChange} disabled={isFileParsing} />
        </label>
      </div>
    </>
  );
};