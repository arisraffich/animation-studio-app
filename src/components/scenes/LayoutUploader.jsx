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
        
        // OPTIMIZATION: Extract text and cover image in parallel
        setLoadingMessage('Processing PDF pages...');
        const textExtractionPromise = (async () => {
          // OPTIMIZATION: Extract text from multiple pages in parallel (chunks of 5)
          const pages = [];
          const chunkSize = 5; // Process 5 pages at a time to avoid overwhelming the browser
          
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
        const [extractedPages, coverData] = await Promise.all([textExtractionPromise, coverExtractionPromise]);
        allPagesText.push(...extractedPages);
        coverImageBase64 = coverData.base64;
        pageDimensions = coverData.dimensions;
        
        console.log('OPTIMIZATION: PDF processing completed in parallel');
      } else {
        throw new Error("Unsupported file type. Please upload a PDF file.");
      }
      
      // OPTIMIZATION: Run story analysis and cover analysis in parallel
      setLoadingMessage('Analyzing content with AI...');
      const [storyContent, coverAnalysis] = await Promise.all([
        findStoryContent(allPagesText, setError),
        analyzeCover(coverImageBase64, setError)
      ]);
      
      console.log('OPTIMIZATION: AI analysis completed in parallel');
      
      if (!storyContent || storyContent.length === 0) {
        throw new Error("AI could not identify the main story pages in the document.");
      }

      const totalPages = storyContent.length;
      const storyText = storyContent.map(p => p.text).join('\n\n');
      const scenes = { 
        cover: { status: 'pending', text: `Text animation: "${coverAnalysis.title}" title slides in from left, glowing and growing larger. "${coverAnalysis.author}" author name fades in below with golden shimmer effect. Text pulses with energy and morphs with fluid motion. Cinematic title sequence with floating letters, color transitions, and dynamic typography movement. Text-only kinetic animation.` }, 
        end: { status: 'pending' } 
      };
      storyContent.forEach((page, index) => {
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
      
      console.log('OPTIMIZATION: Skipping cover generation for faster initial load');
      setPendingCoverInfo({ initialProjectState, coverImageBase64, aiGuessedTitle, aiGuessedAuthor });

    } catch (err) {
      setError(err.message);
      setIsFileParsing(false);
    }
  };

  const handleConfirmCoverInfo = async ({ confirmedTitle, confirmedAuthor }) => {
    const { initialProjectState, coverImageBase64 } = pendingCoverInfo;
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
      
      console.log('Calling generateScene with:', { 
        projectName: projectWithConfirmedInfo.name,
        sceneId: 'cover',
        hasImage: !!coverImageBase64,
        imageLength: coverImageBase64?.length 
      });
      
      // Create a local error handler to ensure proper context
      const handleGenerationError = (errorMessage) => {
        console.error('Generation error from API:', errorMessage);
        setError(errorMessage);
      };
      
      const newPrompt = await generateScene(projectWithConfirmedInfo, 'cover', coverImageBase64, '', handleGenerationError);
      newPrompt.extracted_title = confirmedTitle;
      newPrompt.extracted_author = confirmedAuthor;

      const finalScenes = {
        ...initialProjectState.scenes,
        cover: { 
          status: 'completed', 
          prompt: newPrompt,
          text: `Text animation: "${confirmedTitle}" title slides in from left, glowing and growing larger. "${confirmedAuthor}" author name fades in below with golden shimmer effect. Text pulses with energy and morphs with fluid motion. Cinematic title sequence with floating letters, color transitions, and dynamic typography movement. Text-only kinetic animation.`
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
      
      console.log('OPTIMIZATION: Cover scene generated after user confirmation');
    } catch (err) {
      console.error('Cover generation failed:', err);
      console.error('Error details:', {
        name: err.name,
        message: err.message,
        stack: err.stack
      });
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