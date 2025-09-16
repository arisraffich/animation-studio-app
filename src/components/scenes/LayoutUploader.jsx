import { useState } from 'react';
import { Loader2, UploadCloud } from '../common/Icons';
import PDFProgressModal from '../common/PDFProgressModal';
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
  const [progressStep, setProgressStep] = useState('');
  const [subProgress, setSubProgress] = useState('');
  const [stepProgress, setStepProgress] = useState(0);

  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;
    setStoryFile(file);
    setIsFileParsing(true);
    setError('');

    try {
      const startTime = performance.now();
      setProgressStep('processing');
      setLoadingMessage('Processing PDF...');
      let coverImageBase64 = '';
      let pageDimensions = null;
      let coverStorageData = null;
      let storyPageImages = [];
      let pdf = null;
      const allPagesText = [];

      if (file.type === 'application/pdf') {
        if (!window.pdfjsLib) throw new Error("PDF parsing library not loaded.");
        const fileBuffer = await file.arrayBuffer();
        pdf = await window.pdfjsLib.getDocument(fileBuffer).promise;
        
        // OPTIMIZATION: Extract text and cover image in parallel
        setLoadingMessage('Processing PDF pages...');
        const textExtractionPromise = (async () => {
          // OPTIMIZATION: Extract text from multiple pages in parallel (chunks of 10)
          const pages = [];
          const chunkSize = 10; // Process 10 pages at a time for faster processing
          
          for (let i = 1; i <= pdf.numPages; i += chunkSize) {
            const chunkPromises = [];
            const endIndex = Math.min(i + chunkSize - 1, pdf.numPages);
            
            // Update sub-progress and step progress
            setSubProgress(`Page ${i} of ${pdf.numPages}`);
            setStepProgress(Math.round((i / pdf.numPages) * 100));
            
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
        
        // Extract cover image (page 1)
        const coverExtractionPromise = (async () => {
          const coverPage = await pdf.getPage(1);
          
          console.log('🖼️ Extracting cover image at native resolution...');
          
          // Use scale 1.0 for native PDF resolution
          const viewport = coverPage.getViewport({ scale: 1.0 });
          console.log(`📄 Cover extracted at ${viewport.width}x${viewport.height}px`);
          
          const canvas = document.createElement('canvas');
          canvas.height = viewport.height;
          canvas.width = viewport.width;
          
          await coverPage.render({ 
            canvasContext: canvas.getContext('2d'), 
            viewport 
          }).promise;
          
          return {
            base64: canvas.toDataURL('image/jpeg', 1.0).split(',')[1], // JPEG 100% quality
            dimensions: {
              width: viewport.width,
              height: viewport.height,
              aspectRatio: viewport.width / viewport.height
            }
          };
        })();

        
        // Wait for text and cover extraction to complete  
        const pdfStartTime = performance.now();
        const [extractedPages, coverData] = await Promise.all([
          textExtractionPromise, 
          coverExtractionPromise
        ]);
        const pdfEndTime = performance.now();
        
        allPagesText.push(...extractedPages);
        coverImageBase64 = coverData.base64;
        pageDimensions = coverData.dimensions;
      } else {
        throw new Error("Unsupported file type. Please upload a PDF file.");
      }
      
      // OPTIMIZATION: Run all three operations in parallel for maximum speed  
      setProgressStep('analyzing');
      setLoadingMessage('Analyzing content and uploading cover...');
      const aiStartTime = performance.now();
      const tempProjectId = project.id || `temp_${Date.now()}`;
      
      const [storyContent, coverAnalysis, coverUploadResult] = await Promise.all([
        findStoryContent(allPagesText, setError),
        analyzeCover(coverImageBase64, setError),
        uploadImageFromBase64(
          tempProjectId,
          'cover', 
          'v1',
          coverImageBase64
        )
      ]);
      
      // Now extract images using GPT-5 identified text pages
      console.log(`🖼️ Extracting images for ${storyContent.story_pages.length} story text pages...`);
      
      const storyPageImageExtractions = storyContent.story_pages.map(async (textPage, index) => {
        try {
          // For each text page, extract image from page_number + 1
          const imagePageNum = textPage.page_number + 1;
          
          // Check if the image page exists in PDF
          if (imagePageNum > pdf.numPages) {
            console.log(`⚠️ PDF page ${imagePageNum} doesn't exist for text page ${textPage.page_number}`);
            return null;
          }
          
          console.log(`📖 Extracting image from PDF page ${imagePageNum} for story text page ${textPage.page_number}`);
          
          const imagePage = await pdf.getPage(imagePageNum);
          const viewport = imagePage.getViewport({ scale: 1.0 });
          
          const canvas = document.createElement('canvas');
          canvas.height = viewport.height;
          canvas.width = viewport.width;
          
          await imagePage.render({ 
            canvasContext: canvas.getContext('2d'), 
            viewport 
          }).promise;
          
          const base64 = canvas.toDataURL('image/jpeg', 1.0).split(',')[1];
          
          console.log(`✅ Dashboard page ${index + 1} image extracted: ${viewport.width}x${viewport.height}px`);
          
          return {
            sceneId: String(index + 1), // Scene ID (1, 2, 3, etc.) matching dashboard
            base64: base64,
            dimensions: {
              width: viewport.width,
              height: viewport.height,
              aspectRatio: viewport.width / viewport.height
            }
          };
        } catch (error) {
          console.log(`⚠️ Failed to extract image for dashboard page ${index + 1}:`, error.message);
          return null;
        }
      });
      
      // Wait for all image extractions to complete
      storyPageImages = await Promise.all(storyPageImageExtractions);
      storyPageImages = storyPageImages.filter(result => result !== null); // Remove failed extractions
      
      // Upload all story page images with progress tracking
      setProgressStep('uploading');
      setStepProgress(0);
      const storyPageStorageData = [];
      const totalFiles = storyPageImages.length + 1; // +1 for cover
      let completedFiles = 1; // Cover is already uploaded
      
      for (let i = 0; i < storyPageImages.length; i++) {
        const imageData = storyPageImages[i];
        try {
          const uploadResult = await uploadImageFromBase64(
            tempProjectId,
            imageData.sceneId,
            'v1',
            imageData.base64
          );
          storyPageStorageData.push({
            sceneId: imageData.sceneId,
            uploadData: uploadResult,
            dimensions: imageData.dimensions
          });
          
          completedFiles++;
          setStepProgress(Math.round((completedFiles / totalFiles) * 100));
          
        } catch (error) {
          console.log(`⚠️ Failed to upload image for scene ${imageData.sceneId}:`, error.message);
          storyPageStorageData.push(null);
          completedFiles++;
          setStepProgress(Math.round((completedFiles / totalFiles) * 100));
        }
      }
      
      // Assign the cover storage data to the existing variable
      coverStorageData = coverUploadResult;
      const aiEndTime = performance.now();
      
      // Filter out failed uploads
      const successfulStoryPageUploads = storyPageStorageData.filter(upload => upload !== null);
      
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
      
      // Create story page scenes with their corresponding images
      storyContent.story_pages.forEach((page, index) => {
        const sceneId = String(index + 1);
        const sceneData = { 
          status: 'pending', 
          text: page.text 
        };
        
        // Find the corresponding uploaded image for this scene
        const correspondingUpload = successfulStoryPageUploads.find(upload => upload.sceneId === sceneId);
        if (correspondingUpload) {
          sceneData.storedImage = {
            url: correspondingUpload.uploadData.url,
            path: correspondingUpload.uploadData.path,
            dimensions: correspondingUpload.dimensions,
            uploadedAt: new Date().toISOString()
          };
          console.log(`✅ Scene ${sceneId} pre-populated with image from PDF`);
        } else {
          console.log(`⚠️ Scene ${sceneId} has no corresponding image - user will need to upload manually`);
        }
        
        scenes[sceneId] = sceneData;
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
      
      // Auto-confirm with AI extracted values (no manual review needed)
      const confirmedTitle = coverAnalysis.title || file.name.replace(/\.pdf$/i, '') || 'Untitled Project';
      const confirmedAuthor = coverAnalysis.author || 'Unknown Author';
      
      // Generate cover scene immediately (no user confirmation step)
      setProgressStep('generating');
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
      const apiUrl = import.meta.env.VITE_API_URL || '/api';
      const imageResponse = await fetch(`${apiUrl}/api/firebase-image`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ imageUrl: coverStorageData.url })
      });
      
      if (!imageResponse.ok) {
        throw new Error(`Failed to fetch cover image: ${imageResponse.status}`);
      }
      
      const { base64: fetchedCoverImageBase64 } = await imageResponse.json();
      // Generate sophisticated Seedance prompt using GPT-5's advanced cover analysis
      const seedancePrompt = await generateSeedancePrompt(projectWithConfirmedInfo, 'cover', fetchedCoverImageBase64, '', handleGenerationError);
      
      // Also generate structured prompt for completeness
      const newPrompt = await generateScene(projectWithConfirmedInfo, 'cover', fetchedCoverImageBase64, '', handleGenerationError);
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
      setProgressStep('');
      setSubProgress('');
      setStepProgress(0);

    } catch (err) {
      setError(err.message);
      setIsFileParsing(false);
      setProgressStep('');
      setSubProgress('');
      setStepProgress(0);
    }
  };


  return (
    <>
      <PDFProgressModal 
        isVisible={isFileParsing}
        currentStep={progressStep}
        subProgress={subProgress}
        stepProgress={stepProgress}
      />
      
      <div className="bg-gray-800/50 p-6 rounded-lg">
          <h3 className="text-2xl font-bold mb-4 text-center">Upload Your Book's Layout</h3>
          <label htmlFor="story-upload" className={`flex flex-col items-center justify-center w-full h-48 border-2 border-gray-600 border-dashed rounded-lg bg-gray-800/50 transition cursor-pointer hover:bg-gray-700/50 ${isFileParsing ? 'opacity-50 cursor-not-allowed' : ''}`}>
            {isFileParsing ? (
              <>
                <Loader2 className="animate-spin text-indigo-400" size={32} />
                <p className="mt-2 text-indigo-300">Processing...</p>
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