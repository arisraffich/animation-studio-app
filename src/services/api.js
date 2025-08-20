import { storyContentSchema, coverAnalysisSchema, animationPromptSchema } from './schemas';

// Extract story content from PDF pages using GPT-5
export const findStoryContent = async (allPagesText, setError) => {
  // Process all pages - no sampling to avoid missing story content
  const pagesToAnalyze = allPagesText;

  const promptText = `Analyze these PDF pages and identify which contain the main story narrative. Also extract key story elements for creating a beautiful end scene.

PAGES:
${pagesToAnalyze.map(p => `Page ${p.pageNum}: "${p.text.substring(0, 500)}${p.text.length > 500 ? '...' : ''}"`).join('\n')}

STORY PAGE ANALYSIS:
INCLUDE: Pages with narrative, dialogue, character actions, story events
EXCLUDE: Title pages, copyright, dedications, "The End" pages, blank pages, publisher info

Return ALL story pages found that contain actual narrative content.

END SCENE ELEMENTS ANALYSIS:
From the complete story, identify:
- Main setting/environment where most action occurs (no characters, just the location)
- 2-3 key objects that represent the story journey (toys, tools, magical items, etc.)
- Overall mood for a satisfying conclusion
- Dominant colors/lighting that capture the story's atmosphere

This will be used to create a beautiful "The End" scene with story elements but no characters.

BACKGROUND MUSIC ANALYSIS:
Generate a concise ElevenLabs music prompt (maximum 50 words) for upbeat background music for children's stories. IMPORTANT: Always create energetic, positive music regardless of the specific story mood - children's content should have dynamic, inspiring soundtracks.

Format: "[Musical style] [mood/emotion], [key instruments], [tempo description]"

Examples:
- "Upbeat acoustic children's music, joyful and inspiring, bright guitar with lively strings"
- "Dynamic folk background music, energetic and positive, ukulele with cheerful percussion" 
- "Vibrant orchestral piece, adventurous and uplifting, playful woodwinds and piano"

Create a short, energetic prompt that ignores story mood and focuses on positive, upbeat children's music.`;

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
    max_output_tokens: 4000,
    reasoning: { "effort": "minimal" }  // Reduce reasoning effort for speed
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
    
    if (result.output && result.output.length > 0) {
      const messageOutput = result.output.find(output => output.type === 'message');
      
      if (messageOutput && messageOutput.content && messageOutput.content[0] && messageOutput.content[0].text) {
        try {
          const parsedJson = JSON.parse(messageOutput.content[0].text);
          
          // Return exactly the story pages GPT-5 identified - no reconstruction needed
          
          return {
            story_pages: parsedJson.story_pages,
            end_scene_elements: parsedJson.end_scene_elements,
            background_music_prompt: parsedJson.background_music_prompt
          };
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

// Build advanced Seedance video prompt text with GPT-5 intelligence
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
    taskInstruction = `This is the COVER PAGE. Create a modern, character-focused animation that brings the cover illustration to life.`;
  } else if (sceneId === 'end') {
    taskInstruction = `This is the final scene. Create a gentle, concluding animation.`;
  } else {
    taskInstruction = `This is Page ${sceneId} of the story. Create a video prompt that brings this scene to life.`;
  }
  
  if (feedback) {
    taskInstruction += ` FEEDBACK: ${feedback}`;
  }

  let prompt = `You are an expert video animation director specializing in children's book illustrations and AI video generation.

TASK: Generate precise Seedance video prompt for children's book animation.

SCENE ANALYSIS:
Text: "${sceneText}"
Context: ${taskInstruction}`;

  if (animationNotes) {
    prompt += `
Animation notes: ${animationNotes}`;
  }

  // Enhanced prompt generation based on scene type
  if (sceneId === 'cover') {
    prompt += `

SEEDANCE PRO 1.0 COVER ANIMATION REQUIREMENTS:

STEP 1 - CHARACTER FOCUS:
Identify the main character(s) in the cover illustration:
- What is the character's pose and expression?
- How can we create subtle, natural movement? (breathing, hair movement, clothes sway)
- What personality does the character convey?

STEP 2 - SUPPORTING ELEMENTS:
Animate environmental elements that enhance the scene:
- Background elements (trees swaying, clouds drifting, water flowing)
- Objects and props (subtle movement, physics)
- Atmospheric effects (particles, light shifts)

STEP 3 - TEXT ANIMATION (MODERN APPROACH):
For title and author text visible in the image:
- Use subtle modern effects: gentle fade-in, soft scale, elegant drift
- NO old-fashioned glow or harsh effects
- Text animation should feel contemporary and sophisticated
- Keep text movements minimal and tasteful

STEP 4 - TECHNICAL EXECUTION:
- Use "Subject + Action" format with motion intensity
- Specify camera as "static locked shot" to maintain cover composition  
- Duration: 5 seconds with smooth, looped motion
- Preserve exact visual appearance and colors of all illustration elements

Generate a video prompt (3-4 sentences) that creates a modern, character-focused cover animation with supporting environmental movement and contemporary text effects.`;
  } else {
    prompt += `

STEP 1 - ACTION EXTRACTION:
Identify the PRIMARY ACTION in scene text:
- What is the main character doing? (walking, picking up, placing, etc.)
- What objects are involved in the action?
- What is the intended outcome of this action?

STEP 2 - MOTION SPECIFICS:
Design natural movement for extracted action:
- Start position → end position
- Speed and timing (slow/normal/quick)
- Body language and facial expressions
- Object physics and interactions

STEP 3 - FIDELITY CONSTRAINTS:
ONLY animate elements visible in input image:
- Character positions must match illustration
- Preserve original colors and materials of all objects exactly as shown
- No additional characters or objects
- Same background and composition
- Static locked shot: maintain exact visual appearance of all elements

Write a precise 1-2 sentence Seedance prompt for this 5-second video that focuses on the primary action while maintaining fidelity to the illustration.`;
  }

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
export const createSeedanceTask = async (imageBase64, seedancePrompt, imageDimensions, setError, generationId = null, duration = 5) => {
  const aspectRatio = imageDimensions ? getSeedanceAspectRatio(imageDimensions.width, imageDimensions.height) : '16:9';
  
  const payload = {
    input: {
      prompt: seedancePrompt,
      ...(imageBase64 ? { image: `data:image/jpeg;base64,${imageBase64}` } : {}),
      resolution: '1080p',  // Always use highest quality
      aspect_ratio: aspectRatio,
      duration: duration,   // Dynamic duration from GPT-5 analysis
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
  const seedancePrompt = await generateSeedancePrompt(project, sceneId, imageBase64, feedback, setError, textData);
  
  // Determine aspect ratio based on image dimensions (default to 16:9 for text-only)
  const aspectRatio = imageDimensions ? 
    getSeedanceAspectRatio(imageDimensions.width, imageDimensions.height) : 
    '16:9';
  
  // Create Seedance task with 5 second duration
  const predictionId = await createSeedanceTask(imageBase64, seedancePrompt, imageDimensions, setError, generationId, 5);
  
  // Wait 10 seconds before starting to poll
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
        resolution: '1080p',
        duration: 5
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
      
      // Let WebSocket/fallback handle progress display
    }
    // WebSocket updates will be handled by the callback automatically
    
    // Wait 10 seconds before next poll
    await new Promise(resolve => setTimeout(resolve, 10000));
    attempts++;
  }
  
  // If we get here, polling timed out
  throw new Error('Seedance generation timed out after 10 minutes');
};



// Enhanced Seedance prompt generation using GPT-5's superior reasoning with dynamic duration
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
    max_output_tokens: 1200,
    reasoning: { "effort": "minimal" },
    text: { "verbosity": "low" }
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
    
    if (result.output && result.output.length > 0) {
      const messageOutput = result.output.find(output => output.type === 'message');
      
      if (messageOutput && messageOutput.content && messageOutput.content[0] && messageOutput.content[0].text) {
        const responseText = messageOutput.content[0].text.trim();
        
        return responseText;
      }
      
      // Fallback: check if there's any text output in different format
      for (const output of result.output) {
        if (output.content && output.content[0] && output.content[0].text) {
          const promptText = output.content[0].text.trim();
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
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 45000); // 45 second timeout for cover analysis
    
    const response = await fetch('/api/openai', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
      signal: controller.signal
    });
    
    clearTimeout(timeout);

    if (!response.ok) {
      const errorBody = await response.text();
      throw new Error(`OpenAI GPT-5 Cover Analysis Error: ${response.status} ${response.statusText} - ${errorBody}`);
    }

    const result = await response.json();
    
    if (result.output && result.output.length > 0) {
      const messageOutput = result.output.find(output => output.type === 'message');
      if (messageOutput && messageOutput.content && messageOutput.content[0] && messageOutput.content[0].text) {
        const coverData = JSON.parse(messageOutput.content[0].text);
        return coverData;
      }
    }
    
    console.error("GPT-5 Cover Analysis Response was invalid:", result);
    throw new Error('GPT-5 returned an invalid response for cover analysis.');
  } catch (err) {
    console.error("Error in analyzeCover:", err);
    if (err.name === 'AbortError') {
      const timeoutError = 'Cover analysis timed out - please try again.';
      setError(timeoutError);
      throw new Error(timeoutError);
    }
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

// ElevenLabs Music API Integration for background music generation
export const generateMusicWithElevenLabs = async (musicPrompt, setError, setLoadingMessage, options = {}) => {
  const { generationId = null, websocketCallback = null } = options;
  
  try {
    setLoadingMessage('Creating music with ElevenLabs...');
    
    // Create composition plan with upbeat requirements to override story mood
    const compositionPlan = {
      positive_global_styles: ["upbeat", "energetic", "children's music", "positive", "cheerful"],
      negative_global_styles: ["gentle", "slow", "ambient", "sad", "melancholy"],
      sections: [{
        section_name: "Main Theme",
        positive_local_styles: ["dynamic", "lively", "inspiring"],
        negative_local_styles: ["calm", "peaceful", "quiet"],
        duration_ms: 120000, // 2 minutes (API max per section)
        lines: ["Upbeat children's background music"] // Required field
      }]
    };
    
    const musicInput = {
      composition_plan: compositionPlan, // Use composition plan only (forces upbeat music)
      model_id: "music_v1"
      // Note: music_length_ms is controlled by composition_plan section durations
    };
    
    // Direct API call to ElevenLabs
    const response = await fetch('https://api.elevenlabs.io/v1/music', {
      method: 'POST',
      headers: { 
        'Content-Type': 'application/json',
        'xi-api-key': 'sk_ae3474dc3b5cf90d49c3db3ffbf043f56945f2a5a5452ac1'
      },
      body: JSON.stringify(musicInput)
    });

    if (!response.ok) {
      const errorBody = await response.text();
      throw new Error(`ElevenLabs Music Error: ${response.status} ${response.statusText} - ${errorBody}`);
    }

    // ElevenLabs returns audio directly, no polling needed
    const audioBlob = await response.blob();
    
    // Convert blob to data URL for immediate use
    const audioUrl = URL.createObjectURL(audioBlob);
    
    return {
      prompt: musicPrompt,
      audio_url: audioUrl, // Blob URL for immediate playback
      audio_blob: audioBlob, // For file operations
      model: 'elevenlabs-music-v1',
      format: 'mp3',
      duration: 120 // 2 minutes
    };
    
  } catch (err) {
    console.error('Error in generateMusicWithElevenLabs:', err);
    setError(`Music generation failed: ${err.message}`);
    throw err;
  }
};