import { useState } from 'react';
import { Loader2, UploadCloud } from '../common/Icons';
import { CoverInfoConfirmationModal } from '../common/CoverInfoModal';
import { findStoryContent, generateScene, analyzeCover, generateSeedancePrompt } from '../../services/api';
import { uploadImageFromBase64 } from '../../services/storageService';

// Generate end scene text from story elements
const generateEndSceneText = (endSceneElements) => {
  if (!endSceneElements) {
    return '[Static locked shot] A peaceful school setting holds still as "The End" text gracefully fades in at center screen, with no other text visible. Rendered in children\'s book illustration style with hand-drawn animation and gentle 2D animated illustration movement.';
  }
  
  const { main_setting, key_objects, mood, color_palette } = endSceneElements;
  const objectsText = key_objects && key_objects.length > 0 ? key_objects.join(', ') : 'story elements';
  
  // Create Seedance Pro 1 optimized prompt with rich story details
  const seedancePrompt = `[Static locked shot] ${main_setting} bathed in ${color_palette} lighting with warm atmospheric glow. ${objectsText} rest peacefully throughout the scene, creating a ${mood} atmosphere. Only "The End" text appears with sophisticated fade-in animation at center screen - no other text or words visible. Rendered in children's book illustration style with hand-drawn animation and gentle 2D animated illustration movement.`;
  
  return seedancePrompt;
};

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
      const startTime = performance.now();
      setLoadingMessage('Extracting text from PDF...');
      let coverImageBase64 = '';
      let pageDimensions = null;
      let coverStorageData = null;
      const allPagesText = [];

      if (file.type === 'application/pdf') {
        if (!window.pdfjsLib) throw new Error("PDF parsing library not loaded.");
        const fileBuffer = await file.arrayBuffer();
        const pdf = await window.pdfjsLib.getDocument(fileBuffer).promise;
        
        // OPTIMIZATION: Extract text and cover image in parallel
        setLoadingMessage('Processing PDF pages...');
        const textExtractionPromise = (async () => {
          // OPTIMIZATION: Extract text from multiple pages in parallel (chunks of 10)
          const pages = [];
          const chunkSize = 10; // Process 10 pages at a time for faster processing
          
          for (let i = 1; i <= pdf.numPages; i += chunkSize) {
            const chunkPromises = [];
            const endIndex = Math.min(i + chunkSize - 1, pdf.numPages);
            
            for (let pageNum = i; pageNum <= endIndex; pageNum++) {
              chunkPromises.push(
                (async () => {
                  const page = await pdf.getPage(pageNum);
                  const textContent = await page.getTextContent();
                  return { pageNum, text: textContent.items.map(item => item.str).join(' ') };
                })()
              );
            }
            
            const chunkResults = await Promise.all(chunkPromises);
            pages.push(...chunkResults);
          }
          
          // Sort pages by page number to maintain order
          return pages.sort((a, b) => a.pageNum - b.pageNum);
        })();
        
        const coverExtractionPromise = (async () => {
          const coverPage = await pdf.getPage(1);
          const viewport = coverPage.getViewport({ scale: 1.0 });
          const canvas = document.createElement('canvas');
          canvas.height = viewport.height;
          canvas.width = viewport.width;
          await coverPage.render({ canvasContext: canvas.getContext('2d'), viewport }).promise;
          return {
            base64: canvas.toDataURL('image/jpeg', 0.7).split(',')[1],
            dimensions: {
              width: viewport.width,
              height: viewport.height,
              aspectRatio: viewport.width / viewport.height
            }
          };
        })();
        
        // Wait for both operations to complete
        const pdfStartTime = performance.now();
        const [extractedPages, coverData] = await Promise.all([textExtractionPromise, coverExtractionPromise]);
        const pdfEndTime = performance.now();
        
        allPagesText.push(...extractedPages);
        coverImageBase64 = coverData.base64;
        pageDimensions = coverData.dimensions;
      } else {
        throw new Error("Unsupported file type. Please upload a PDF file.");
      }
      
      // OPTIMIZATION: Run all three operations in parallel for maximum speed
      setLoadingMessage('Analyzing content and uploading cover...');
      const aiStartTime = performance.now();
      const [storyContent, coverAnalysis, storageUpload] = await Promise.all([
        findStoryContent(allPagesText, setError),
        analyzeCover(coverImageBase64, setError),
        (async () => {
          const tempProjectId = project.id || `temp_${Date.now()}`;
          return await uploadImageFromBase64(
            tempProjectId,
            'cover', 
            'v1',
            coverImageBase64
          );
        })()
      ]);
      const aiEndTime = performance.now();
      
      coverStorageData = storageUpload;
      
      if (!storyContent || !storyContent.story_pages || storyContent.story_pages.length === 0) {
        throw new Error("AI could not identify the main story pages in the document.");
      }

      const totalPages = storyContent.story_pages.length;
      const storyText = storyContent.story_pages.map(p => p.text).join('\n\n');
      const endSceneElements = storyContent.end_scene_elements;
      const backgroundMusicPrompt = storyContent.background_music_prompt;
      const scenes = { 
        cover: { 
          status: 'pending', 
          text: `Cover page illustration featuring "${coverAnalysis.title}" by ${coverAnalysis.author}. Advanced GPT-5 prompt generation will analyze the cover art to create sophisticated character-focused animation with environmental storytelling elements.`,
          storedImage: {
            url: coverStorageData.url,
            path: coverStorageData.path,
            dimensions: pageDimensions,
            uploadedAt: new Date().toISOString()
          }
        }, 
        end: { 
          status: 'pending',
          text: generateEndSceneText(endSceneElements),
          endSceneElements: endSceneElements
        },
        music: {
          status: 'pending',
          text: backgroundMusicPrompt,
          type: 'music' // Identify this as a music scene
        }
      };
      storyContent.story_pages.forEach((page, index) => {
        scenes[String(index + 1)] = { status: 'pending', text: page.text };
      });
      
      const initialProjectState = { 
        ...project, 
        storyText, 
        totalPages, 
        scenes,
        pageDimensions,  // Add PDF page dimensions to project
        bookTitle: coverAnalysis.title,
        bookAuthor: coverAnalysis.author
      };
      
      // OPTIMIZATION: Skip cover scene generation until user confirms info (saves ~5 seconds)
      const aiGuessedTitle = coverAnalysis.title || file.name.replace(/\.pdf$/i, '') || 'Untitled Project';
      const aiGuessedAuthor = coverAnalysis.author || 'Unknown Author';
      
      const totalTime = performance.now() - startTime;
      setPendingCoverInfo({ initialProjectState, coverStorageData, aiGuessedTitle, aiGuessedAuthor });

    } catch (err) {
      setError(err.message);
      setIsFileParsing(false);
    }
  };

  const handleConfirmCoverInfo = async ({ confirmedTitle, confirmedAuthor }) => {
    const { initialProjectState, coverStorageData } = pendingCoverInfo;
    const originalPendingInfo = pendingCoverInfo; // Save for error recovery

    try {
      // OPTIMIZATION: Generate cover scene only when user confirms (lazy loading)
      // Keep loading state active and dismiss modal immediately for better UX
      setPendingCoverInfo(null);
      setIsFileParsing(true);
      setLoadingMessage('Generating opening scene...');
      
      const projectWithConfirmedInfo = {
        ...initialProjectState,
        name: confirmedTitle,
        author: confirmedAuthor
      };
      
      
      // Create a local error handler to ensure proper context
      const handleGenerationError = (errorMessage) => {
        setError(errorMessage);
      };
      
      // Fetch image from Firebase Storage for GPT-5 analysis
      const imageResponse = await fetch('/api/firebase-image', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ imageUrl: coverStorageData.url })
      });
      
      if (!imageResponse.ok) {
        throw new Error(`Failed to fetch cover image: ${imageResponse.status}`);
      }
      
      const { base64: coverImageBase64 } = await imageResponse.json();
      // Generate sophisticated Seedance prompt using GPT-5's advanced cover analysis
      const seedancePrompt = await generateSeedancePrompt(projectWithConfirmedInfo, 'cover', coverImageBase64, '', handleGenerationError);
      
      // Also generate structured prompt for completeness
      const newPrompt = await generateScene(projectWithConfirmedInfo, 'cover', coverImageBase64, '', handleGenerationError);
      newPrompt.extracted_title = confirmedTitle;
      newPrompt.extracted_author = confirmedAuthor;
      newPrompt.seedance_prompt = seedancePrompt; // Store the sophisticated prompt

      const finalScenes = {
        ...initialProjectState.scenes,
        cover: { 
          status: 'completed', 
          prompt: newPrompt,
          text: seedancePrompt, // Use the GPT-5 generated sophisticated prompt as text
          storedImage: {
            url: coverStorageData.url,
            path: coverStorageData.path,
            dimensions: initialProjectState.pageDimensions,
            uploadedAt: new Date().toISOString()
          }
        }
      };

      const finalProjectState = {
        ...initialProjectState,
        scenes: finalScenes,
        name: confirmedTitle,
        author: confirmedAuthor,
      };
      
      updateProject(project.id, finalProjectState);
      setCurrentSceneId('cover');
      setIsFileParsing(false);
      
    } catch (err) {
      setError(`Cover generation failed: ${err.message}`);
      setIsFileParsing(false);
      // On error, show the confirmation modal again so user can retry
      setPendingCoverInfo(originalPendingInfo);
    }
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