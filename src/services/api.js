import { storyContentSchema, coverAnalysisSchema, animationPromptSchema } from './schemas';

// Extract story content from PDF pages using GPT-5
export const findStoryContent = async (allPagesText, setError) => {
  const promptText = `Analyze these PDF pages and identify which contain the main story narrative.

PAGES:
${allPagesText.map(p => `Page ${p.pageNum}: "${p.text}"`).join('\n')}

INCLUDE: Pages with narrative, dialogue, character actions, story events
EXCLUDE: Title pages, copyright, dedications, "The End" pages, blank pages, publisher info

Return story pages with clean narrative text (remove page numbers from beginning of text).`;

  const payload = {
    model: "gpt-5",
    input: [
      {
        role: "user", 
        content: [
          { type: "input_text", text: promptText }
        ]
      }
    ],
    text: {
      format: {
        type: "json_schema",
        name: storyContentSchema.name,
        schema: storyContentSchema.schema
      }
    },
    max_output_tokens: 2000
  };

  try {
    const response = await fetch('/api/openai', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });

    if (!response.ok) {
      const errorBody = await response.text();
      throw new Error(`OpenAI GPT-5 API Error: ${response.status} ${response.statusText} - ${errorBody}`);
    }

    const result = await response.json();
    console.log('Full GPT-5 Story Content Response:', JSON.stringify(result, null, 2));
    
    if (result.output && result.output.length > 0) {
      const messageOutput = result.output.find(output => output.type === 'message');
      console.log('Message output found:', messageOutput);
      
      if (messageOutput && messageOutput.content && messageOutput.content[0] && messageOutput.content[0].text) {
        console.log('Raw JSON text:', messageOutput.content[0].text);
        try {
          const parsedJson = JSON.parse(messageOutput.content[0].text);
          console.log('GPT-5 Enhanced Story Content Analysis:', parsedJson);
          return parsedJson.story_pages;
        } catch (parseError) {
          console.error('JSON parsing failed:', parseError.message);
          console.error('Failed at character position:', parseError.message.match(/column (\d+)/)?.[1] || 'unknown');
          throw new Error(`GPT-5 returned malformed JSON: ${parseError.message}`);
        }
      }
    }
    
    // If no message output found, GPT-5 might have only reasoning output (token limit exceeded)
    console.error("GPT-5 used all tokens for reasoning, no message output produced. Consider simplifying the prompt or increasing token limit.");
    throw new Error('GPT-5 analysis incomplete - try with shorter content or simpler prompts.');
  } catch (err) {
    console.error("Error in findStoryContent:", err);
    setError(err.message);
    throw err;
  }
};

// Build Seedance video prompt text with comment system support
const buildSeedancePromptText = (project, sceneId, feedback, textData = null) => {
  // Extract text data from the scene or use provided textData
  const sceneData = project.scenes[sceneId];
  let sceneText = sceneData?.text || '';
  let animationNotes = '';
  
  // If textData is provided (from comment system), use it
  if (textData) {
    sceneText = textData.originalText;
    animationNotes = textData.animationNotes;
  }
  
  let taskInstruction = '';
  if (sceneId === 'cover') {
    taskInstruction = `This is the COVER SCENE. Focus on creating a cinematic title sequence.`;
  } else if (sceneId === 'end') {
    taskInstruction = `This is the final scene. Create a gentle, concluding animation.`;
  } else {
    taskInstruction = `This is Page ${sceneId} of the story. Create a video prompt that brings this scene to life.`;
  }
  
  if (feedback) {
    taskInstruction += ` FEEDBACK: ${feedback}`;
  }

  let prompt = `Create a simple video prompt for this content:

Scene text: "${sceneText}"`;

  if (animationNotes) {
    prompt += `
Animation notes: ${animationNotes}`;
  }

  prompt += `

${taskInstruction} Keep it to 1-2 sentences. Focus mainly on character movements (people and animals), with minimal environment details.`;

  return prompt;
};

// Build structured animation prompt for OpenAI with comment system support
const buildApiPromptText = (project, sceneId, feedback, textData = null) => {
  const systemInstruction = `Create a concise animation prompt from this children's book page. Keep each field to 1-2 short sentences maximum. Focus on essential visual elements and simple motion.`;
  
  // Extract text data from the scene or use provided textData
  const sceneData = project.scenes[sceneId];
  let sceneText = sceneData?.text || '';
  let animationNotes = '';
  
  // If textData is provided (from comment system), use it
  if (textData) {
    sceneText = textData.originalText;
    animationNotes = textData.animationNotes;
  }
  
  let taskInstruction = '';
  if (sceneId === 'cover') {
    taskInstruction = `COVER SCENE: Extract book title and author. Create simple cover animation.`;
  } else if (sceneId === 'end') {
    taskInstruction = `FINAL SCENE: Create simple concluding animation.`;
  } else {
    taskInstruction = `PAGE ${sceneId}: Create simple animation prompt.`;
  }
  
  if (feedback) {
    taskInstruction += ` FEEDBACK: ${feedback}`;
  }
  
  let prompt = `${systemInstruction}

STORY: ${project.storyText}

Scene text: "${sceneText}"`;

  if (animationNotes) {
    prompt += `
Animation notes: ${animationNotes}`;
  }

  prompt += `

TASK: ${taskInstruction}

LENGTH REQUIREMENTS:
- scene_summary: 1-2 sentences maximum
- animation_style: 1 sentence maximum  
- animation_tone: 1 sentence maximum
- primary_action: 1-2 sentences maximum
- subtle_motions: 1 sentence maximum`;

  return prompt;
};

// Determine Seedance aspect ratio based on image dimensions
const getSeedanceAspectRatio = (width, height) => {
  const aspectRatio = width / height;
  
  // Square (close to 1:1)
  if (aspectRatio >= 0.9 && aspectRatio <= 1.1) {
    return '1:1';
  }
  
  // Portrait orientations
  if (aspectRatio < 0.9) {
    if (aspectRatio <= 0.5) {
      return '9:21';  // Very tall (ultra portrait)
    } else if (aspectRatio <= 0.65) {
      return '9:16';  // Standard mobile portrait
    } else {
      return '3:4';   // Book/photo portrait
    }
  }
  
  // Landscape orientations
  if (aspectRatio > 1.1) {
    if (aspectRatio >= 2.2) {
      return '21:9';  // Ultra-wide cinematic
    } else if (aspectRatio >= 1.4) {
      return '16:9';  // Standard widescreen
    } else {
      return '4:3';   // Traditional landscape
    }
  }
  
  // Fallback to landscape
  return '16:9';
};

// Seedance via Replicate API functions
export const createSeedanceTask = async (imageBase64, seedancePrompt, imageDimensions, setError, generationId = null) => {
  const aspectRatio = getSeedanceAspectRatio(imageDimensions.width, imageDimensions.height);
  
  const payload = {
    input: {
      prompt: seedancePrompt,
      image: `data:image/jpeg;base64,${imageBase64}`,
      resolution: '1080p',  // Always use highest quality
      aspect_ratio: aspectRatio,
      duration: 5,          // 5 second videos
      fps: 24,
      camera_fixed: true    // Prevent unwanted camera movements
    },
    generationId: generationId  // OPTIMIZATION 3: Include generation ID for WebSocket progress
  };

  try {
    const response = await fetch('/api/seedance/create', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    });

    if (!response.ok) {
      const errorBody = await response.text();
      throw new Error(`Seedance API Error: ${response.status} ${response.statusText} - ${errorBody}`);
    }

    const result = await response.json();
    return result.id;
  } catch (err) {
    console.error('Error creating Seedance task:', err);
    setError(`Failed to create video generation task: ${err.message}`);
    throw err;
  }
};

export const pollSeedanceTask = async (predictionId, setError, generationId = null) => {
  try {
    const url = generationId 
      ? `/api/seedance/status/${predictionId}?generationId=${encodeURIComponent(generationId)}`
      : `/api/seedance/status/${predictionId}`;
      
    const response = await fetch(url, {
      headers: {
        'Content-Type': 'application/json'
      }
    });

    if (!response.ok) {
      const errorBody = await response.text();
      throw new Error(`Seedance Status Error: ${response.status} ${response.statusText} - ${errorBody}`);
    }

    const result = await response.json();
    return result;
  } catch (err) {
    console.error('Error polling Seedance task:', err);
    setError(`Failed to check video generation status: ${err.message}`);
    throw err;
  }
};

// Enhanced video generation using GPT-5 
export const generateVideoWithSeedance = async (project, sceneId, imageBase64, feedback, setError, setLoadingMessage, options = {}) => {
  const { imageDimensions = null, textData = null, generationId = null, websocketCallback = null } = options;
  
  // Generate prompt with GPT-5 for superior analysis
  setLoadingMessage('Creating animation...');
  const seedancePrompt = await generateSeedancePrompt(project, sceneId, imageBase64, feedback, setError, textData);
  
  // Determine aspect ratio based on image dimensions
  if (!imageDimensions) {
    throw new Error('Image dimensions are required for Seedance generation');
  }
  
  const aspectRatio = getSeedanceAspectRatio(imageDimensions.width, imageDimensions.height);
  console.log(`Image dimensions: ${imageDimensions.width}x${imageDimensions.height}, using aspect ratio: ${aspectRatio}`);
  console.log(`GPT-5 Enhanced Seedance prompt: "${seedancePrompt}"`);
  
  // Create Seedance task with WebSocket support
  setLoadingMessage('Starting video generation...');
  const predictionId = await createSeedanceTask(imageBase64, seedancePrompt, imageDimensions, setError, generationId);
  
  // Wait 10 seconds before starting to poll
  setLoadingMessage('Processing video...');
  await new Promise(resolve => setTimeout(resolve, 10000));
  
  // Poll for completion
  let attempts = 0;
  const maxAttempts = 60; // 10 minutes max
  
  while (attempts < maxAttempts) {
    const prediction = await pollSeedanceTask(predictionId, setError, generationId);
    
    if (prediction.status === 'succeeded' && prediction.output) {
      // Video is ready!
      return {
        prompt: seedancePrompt,
        video_url: prediction.output,
        prediction_id: predictionId,
        model: 'seedance-gpt5',
        aspect_ratio: aspectRatio,
        resolution: '1080p'
      };
    } else if (prediction.status === 'failed') {
      const errorMessage = prediction.error || 'Unknown error';
      throw new Error(`Seedance generation failed: ${errorMessage}`);
    } else if (prediction.status === 'canceled') {
      throw new Error('Seedance generation was canceled');
    }
    
    // OPTIMIZATION 3: Use WebSocket progress if available, fallback to simulated
    if (!websocketCallback) {
      // Fallback: Map actual progress to visual progress (30% actual = 100% visual, 3x faster)
      let actualProgress;
      if (attempts < 3) {
        actualProgress = 10 + (attempts * 5); // 10% -> 25% (faster start)
      } else if (attempts < 8) {
        actualProgress = 25 + ((attempts - 3) * 1); // 25% -> 30% (gradual finish)
      } else {
        actualProgress = Math.min(30, 30); // Cap at 30% actual
      }
      
      // Convert to visual percentage (30% actual = 100% visual)
      const currentProgress = Math.min(100, (actualProgress / 30) * 100);
      
      setLoadingMessage(`Generating video... ${Math.round(currentProgress)}%`);
    }
    // WebSocket updates will be handled by the callback automatically
    
    // Wait 10 seconds before next poll
    await new Promise(resolve => setTimeout(resolve, 10000));
    attempts++;
  }
  
  // If we get here, polling timed out
  throw new Error('Seedance generation timed out after 10 minutes');
};

// Enhanced Seedance prompt generation using GPT-5's superior reasoning  
export const generateSeedancePrompt = async (project, sceneId, imageBase64, feedback, setError, textData = null) => {
  const systemPrompt = buildSeedancePromptText(project, sceneId, feedback, textData);
  
  const payload = {
    model: "gpt-5",
    input: [
      {
        role: "user",
        content: [
          { type: "input_text", text: systemPrompt },
          ...(imageBase64 ? [{
            type: "input_image", 
            image_url: `data:image/jpeg;base64,${imageBase64}`
          }] : [])
        ]
      }
    ],
    max_output_tokens: 800
  };

  try {
    const response = await fetch('/api/openai', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });

    if (!response.ok) {
      const errorBody = await response.text();
      throw new Error(`OpenAI GPT-5 Seedance Prompt Error: ${response.status} ${response.statusText} - ${errorBody}`);
    }

    const result = await response.json();
    console.log('Full GPT-5 Seedance Prompt Response:', JSON.stringify(result, null, 2));
    
    if (result.output && result.output.length > 0) {
      const messageOutput = result.output.find(output => output.type === 'message');
      console.log('Seedance message output found:', messageOutput);
      
      if (messageOutput && messageOutput.content && messageOutput.content[0] && messageOutput.content[0].text) {
        const promptText = messageOutput.content[0].text.trim();
        console.log('Seedance prompt text:', promptText);
        return promptText;
      }
      
      // Fallback: check if there's any text output in different format
      for (const output of result.output) {
        if (output.content && output.content[0] && output.content[0].text) {
          const promptText = output.content[0].text.trim();
          console.log('Seedance prompt text (fallback):', promptText);
          return promptText;
        }
      }
    }
    
    console.error("GPT-5 Seedance Prompt Response was invalid:", result);
    throw new Error('GPT-5 returned an invalid response for Seedance prompt generation.');
  } catch (err) {
    console.error("Error in generateSeedancePrompt:", err);
    setError(err.message);
    throw err;
  }
};

// Enhanced cover analysis using GPT-5's superior OCR capabilities
export const analyzeCover = async (imageBase64, setError) => {
  const systemPrompt = `Extract book title and author from this cover image.`;

  const payload = {
    model: "gpt-5",
    input: [
      {
        role: "user",
        content: [
          { type: "input_text", text: systemPrompt },
          {
            type: "input_image",
            image_url: `data:image/jpeg;base64,${imageBase64}`
          }
        ]
      }
    ],
    text: {
      format: {
        type: "json_schema",
        name: coverAnalysisSchema.name,
        schema: coverAnalysisSchema.schema
      }
    },
    max_output_tokens: 1000
  };

  try {
    const response = await fetch('/api/openai', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });

    if (!response.ok) {
      const errorBody = await response.text();
      throw new Error(`OpenAI GPT-5 Cover Analysis Error: ${response.status} ${response.statusText} - ${errorBody}`);
    }

    const result = await response.json();
    console.log('Full GPT-5 Cover Analysis Response:', JSON.stringify(result, null, 2));
    
    if (result.output && result.output.length > 0) {
      const messageOutput = result.output.find(output => output.type === 'message');
      console.log('Message output found:', messageOutput);
      if (messageOutput && messageOutput.content && messageOutput.content[0] && messageOutput.content[0].text) {
        const coverData = JSON.parse(messageOutput.content[0].text);
        console.log('GPT-5 Enhanced Cover Analysis:', coverData);
        return coverData;
      }
    }
    
    console.error("GPT-5 Cover Analysis Response was invalid:", result);
    throw new Error('GPT-5 returned an invalid response for cover analysis.');
  } catch (err) {
    console.error("Error in analyzeCover:", err);
    setError(`Cover analysis failed: ${err.message}`);
    throw err;
  }
};

// Enhanced scene generation using GPT-5's superior reasoning
export const generateScene = async (project, sceneId, imageBase64, feedback, setError, textData = null) => {
  const systemPrompt = buildApiPromptText(project, sceneId, feedback, textData);
  
  const payload = {
    model: "gpt-5",
    input: [
      {
        role: "user",
        content: [
          { type: "input_text", text: systemPrompt },
          ...(imageBase64 ? [{
            type: "input_image",
            image_url: `data:image/jpeg;base64,${imageBase64}`
          }] : [])
        ]
      }
    ],
    text: {
      format: {
        type: "json_schema",
        name: animationPromptSchema.name,
        schema: animationPromptSchema.schema
      }
    },
    max_output_tokens: 3000
  };

  try {
    const response = await fetch('/api/openai', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });

    if (!response.ok) {
      const errorBody = await response.text();
      throw new Error(`OpenAI GPT-5 Scene Generation Error: ${response.status} ${response.statusText} - ${errorBody}`);
    }

    const result = await response.json();
    
    if (result.output && result.output.length > 0) {
      const messageOutput = result.output.find(output => output.type === 'message');
      
      if (messageOutput && messageOutput.content && messageOutput.content[0] && messageOutput.content[0].text) {
        const parsedJson = JSON.parse(messageOutput.content[0].text);
        console.log('GPT-5 Enhanced Scene Generation:', parsedJson);
        return parsedJson;
      }
    }
    
    console.error("GPT-5 Scene Generation Response was invalid:", result);
    throw new Error('GPT-5 returned an invalid response for scene generation.');
  } catch (err) {
    console.error("Error in generateScene:", err);
    setError(err.message);
    throw err;
  }
};