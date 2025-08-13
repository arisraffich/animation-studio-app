import { storyContentSchema, animationPromptSchema } from './schemas';

export const findStoryContent = async (allPagesText, setError) => {
  const promptText = `You are a literary assistant. Analyze the following pages from a children's book and extract the main story content.

TASK: Identify which pages contain the primary narrative story (not title pages, copyright pages, or back matter).

PAGES TO ANALYZE:
${allPagesText.map(p => `Page ${p.pageNum}: "${p.text}"`).join('\n')}

RULES:
- Include only pages with main story narrative
- Exclude title pages, copyright, acknowledgments, etc.
- Keep original page numbers
- Preserve the exact text content`;

  const payload = {
    model: "gpt-4o-2024-08-06", // Use the specific model that supports Structured Outputs
    messages: [
      {
        role: "user",
        content: promptText
      }
    ],
    response_format: {
      type: "json_schema",
      json_schema: storyContentSchema
    },
    max_tokens: 2000,
    temperature: 0.7
  };

  try {
    const response = await fetch('/api/openai', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });

    if (!response.ok) {
      const errorBody = await response.text();
      throw new Error(`OpenAI API Error: ${response.status} ${response.statusText} - ${errorBody}`);
    }

    const result = await response.json();
    
    if (result.choices && result.choices.length > 0 && result.choices[0].message.content) {
      const parsedJson = JSON.parse(result.choices[0].message.content);
      console.log('OpenAI Structured Output - Story Content:', parsedJson);
      return parsedJson.story_pages;
    } else {
      console.error("OpenAI Response for story content was empty or invalid:", result);
      throw new Error('OpenAI returned an empty or invalid response for story content.');
    }
  } catch (err) {
    console.error("Error in findStoryContent:", err);
    setError(err.message);
    throw err;
  }
};

// Build prompt for Seedance direct video generation
const buildSeedancePromptText = (project, sceneId, feedback) => {
  const sceneText = project.scenes[sceneId]?.text || '';
  
  let taskInstruction = '';
  if (sceneId === 'cover') {
    taskInstruction = `This is the COVER SCENE. Focus on creating a cinematic title sequence that captures the essence of the book while maintaining the illustration's composition.`;
  } else if (sceneId === 'end') {
    taskInstruction = `This is the final scene. Create a gentle, concluding animation that provides closure and evokes a feeling of happy resolution.`;
  } else {
    taskInstruction = `This is Page ${sceneId} of the story. Create a video prompt that brings this specific scene to life.`;
  }
  
  if (feedback) {
    taskInstruction += `\n\nREGENERATION FEEDBACK: Please adjust based on this feedback: "${feedback}"`;
  }

  return `You are a professional animation director specializing in children's book video adaptations. Your job is to create a single, cinematic video prompt that brings this illustration to life while preserving its artistic composition and maintaining story context.

CRITICAL RULES:
1. PRESERVE COMPOSITION: Maintain the illustration's exact camera angle, shot type (wide/medium/close-up), and visual framing. DO NOT change what the illustrator created.
2. ADD LIFE THROUGH MOTION: Introduce gentle, natural movements that enhance the scene without overwhelming it.
3. MAINTAIN STORY TONE: Keep the emotional atmosphere and pacing appropriate for this moment in the story.
4. CHILDREN'S CONTENT: All motion should be gentle, peaceful, and appropriate for young audiences.
5. FOLLOW USER INSTRUCTIONS: If the user provides specific instructions in the scene text, YOU MUST incorporate them EXACTLY as requested. Do not ignore user requirements.

ANALYSIS STEPS:
1. Identify the shot type shown in the illustration (wide establishing shot, medium shot, close-up, etc.)
2. Observe the main subjects and their positioning
3. Note the environmental elements that could have gentle motion
4. Consider the story context and emotional tone
5. Determine appropriate subtle character movements if any

OUTPUT FORMAT:
[Shot type matching illustration] Main scene description with gentle motion added. Environmental atmosphere and lighting. Subtle secondary movements.

MOTION GUIDELINES:
- Environmental: leaves rustling, water flowing, clouds drifting, grass swaying
- Character: breathing, blinking, slight head movements, natural posture shifts  
- Atmospheric: soft lighting changes, gentle shadows, mist or steam
- Avoid: sudden movements, dramatic changes, anything startling or intense

EXAMPLE OUTPUTS:
- [Wide establishing shot] A cozy cottage sits in a meadow as morning mist gently rises from the grass. Soft sunlight filters through nearby trees, casting dappled shadows. Chimney smoke drifts lazily upward while wildflowers sway softly in the breeze.
- [Medium close-up shot] A curious rabbit sits by a babbling brook, ears twitching slightly as it listens to the water. Dappled sunlight shifts gently through overhead branches. Small ripples move across the brook's surface while nearby flowers bob softly.

CONTEXT PROVIDED:
- Full Story: ${project.storyText}
- Current Scene Text: "${sceneText}"
- Scene ID: ${sceneId}
- Task: ${taskInstruction}

IMPORTANT: Pay special attention to any SPECIFIC INSTRUCTIONS in the scene text. If the user has added requirements like "keep the toy the same size", "maintain object proportions", or any other specific directives, you MUST incorporate these into your video prompt.

Now analyze the provided illustration and create a single video prompt that brings it to life while preserving its artistic vision AND following any user-specified requirements.

Your response should be ONLY the video prompt text - no explanations, no additional text, no JSON structure.`;
};

const buildApiPromptText = (project, sceneId, feedback) => {
  const systemInstruction = `You are a precise and detail-oriented animation director. Your primary goal is to create a structured JSON animation prompt from a children's book page.
  
**CRITICAL RULES:**
1.  **Character Presence is Gospel:** The illustration is the ONLY source of truth for determining WHICH CHARACTERS ARE VISUALLY PRESENT. For every known character in the story's glossary, you MUST include them in the 'characters' array and set 'is_present_in_scene' to 'true' or 'false' based ONLY on who you can see in the current illustration. Do not add characters who are not visible.
2.  **Character Identity & Decomposition:** Decompose group descriptions (e.g., "a family") into individual character objects. If a new name appears in the text (e.g., "Poppy"), first determine if it is a nickname for an existing character from the glossary before creating a new one. Assign simple, consistent, lowercase character_ids (e.g., 'mike', 'dad', 'grandfather').
3.  **Metadata, Not On-Screen Text:** The 'character_id' field is a metadata tag for tracking. It MUST NOT be rendered as visible text in the final video.
4.  **Dynamic and Cinematic Animation:** Describe camera movements and character actions with dynamic, evocative, and cinematic language to create an engaging result.`;
  
  let taskInstruction = '';
  const sceneText = project.scenes[sceneId]?.text || '';
  
  // Build context from previous scenes for consistency
  let establishedContext = "### Established Story Context\n";
  const characterGlossary = {};
  let establishedStyle = null;

  Object.values(project.scenes).forEach(scene => {
    if (scene.status === 'completed' && scene.prompt && scene.prompt.characters) {
      scene.prompt.characters.forEach(char => {
        if (char.character_id && !characterGlossary[char.character_id]) {
          characterGlossary[char.character_id] = char.description;
        }
      });
      if (!establishedStyle && scene.prompt.animation_style) {
        establishedStyle = scene.prompt.animation_style;
      }
    }
  });

  if (Object.keys(characterGlossary).length > 0) {
    establishedContext += "\n**Character Glossary:**\n";
    for (const [id, desc] of Object.entries(characterGlossary)) {
      establishedContext += `- ${id}: ${desc}\n`;
    }
  } else {
    establishedContext += "\nNo characters have been established yet.\n";
  }
  
  if (establishedStyle) {
    establishedContext += `\n**Animation Style Guide:**\n- Style: ${establishedStyle.style}\n- Tone: ${establishedStyle.tone}\n- Palette: ${establishedStyle.color_palette}\n`;
  }

  if (sceneId === 'cover') {
    taskInstruction = `This is the COVER SCENE. Your task is to generate a structured and visually dynamic title sequence.
    1.  **Extract Main Info:** Identify the main book Title and the Author's name. Populate the top-level 'extracted_title' and 'extracted_author' fields. IGNORE all other text like 'Illustrated by' or small taglines.
    2.  **Describe the Overall Scene:** Crucially, analyze the visual elements of the cover illustration (characters, setting, mood). Describe a dynamic, animated version of this scene in the main 'action', 'scene', and 'animation_style' fields. Make it engaging and hint at the story's themes. Do not leave 'subtle_motions' as 'None'. For example, describe an animated background based on the cover art.
    3.  **Build Animation Timeline:** Create a 'title_sequence' array with separate, sequential steps for the title and author. Use an ORDERLY animation style like 'reveal word by word' or 'gentle fade-in' and AVOID chaotic, scattered effects. The author's animation MUST start after the title's animation ends. For multi-line titles, create a separate step for each line.
    4.  **Add Director's Note:** In the 'metadata.notes' field, add a note to ensure the final text layout is clean and visually appealing, without duplicated or overlapping words.`;
    
  } else if (sceneId === 'end') {
    taskInstruction = `This is the final scene. Generate a concluding animation prompt. Use the Character Glossary to create a gentle, summary scene evoking a feeling of happy resolution.`;
    
  } else {
    taskInstruction = `Analyze the attached illustration and its corresponding text for Page ${sceneId}. Generate a detailed animation prompt. Strictly follow all rules in the System Instruction, especially the 'Roll Call' for character presence based on the illustration.`;
  }
  
  if (feedback) {
    taskInstruction += `\n\nREGENERATION FEEDBACK: The previous attempt was not quite right. Please regenerate the JSON, taking this user feedback into account: "${feedback}"`;
  }
  
  return `
    ${systemInstruction}
    ---
    ${establishedContext}
    ---
    FULL STORY NARRATIVE:
    ${project.storyText}
    ---
    CURRENT SCENE ANALYSIS TASK:
    - Scene ID: ${sceneId}
    - Scene Text: "${sceneText}"
    - Task: ${taskInstruction}
    Now, populate the JSON schema based on all the rules and context provided.
  `;
};

// Convert structured JSON to neutral Veo-3 prompt (text format)
const convertToVeo3TextPrompt = (structuredData) => {
  const { scene, characters, action } = structuredData;
  
  let prompt = 'A serene illustrated scene animates with figures in harmonious motion';
  
  // Add basic location if available
  if (scene?.location) {
    prompt += ` in ${scene.location}`;
  }
  
  // Add present figures in neutral terms
  const presentCharacters = characters?.filter(char => char.is_present_in_scene) || [];
  if (presentCharacters.length > 0) {
    prompt += ' with illustrated figures moving naturally';
  }
  
  // Add basic motion if available
  if (action?.subtle_motions && action.subtle_motions !== 'None') {
    prompt += ', featuring subtle, gentle movement';
  }
  
  prompt += '. Soft lighting, peaceful mood, pastel colors.';
  
  return prompt;
};

// Convert structured JSON to JSON-structured Veo-3 prompt
const convertToVeo3JsonPrompt = (structuredData) => {
  const { scene, characters, action } = structuredData;
  const presentCharacters = characters?.filter(char => char.is_present_in_scene) || [];
  
  return {
    shot: {
      composition: "wide illustrated scene with natural elements",
      lens: "soft focus",
      camera_movement: "subtle pan"
    },
    subject: {
      description: presentCharacters.length > 0 ? "illustrated figures interacting gently" : "illustrated elements",
      action: action?.subtle_motions && action.subtle_motions !== 'None' ? "moving naturally with subtle motion" : "gentle movement"
    },
    scene: {
      location: scene?.location || "peaceful setting",
      environment: "soft lighting, serene atmosphere"
    },
    visual_details: {
      tone: "whimsical and calm",
      color_palette: "pastel colors"
    },
    negative_prompt: "no distortion, no harsh elements, no realism in figures"
  };
};

// Generate negative prompt from structured data
const generateNegativePrompt = (structuredData) => {
  const baseNegative = 'text overlays, logos, modern objects, harsh lighting, camera shake, abrupt movements';
  
  // Add characters who are NOT present to negative prompt
  const absentCharacters = structuredData.characters?.filter(char => !char.is_present_in_scene) || [];
  if (absentCharacters.length > 0) {
    const absentDescriptions = absentCharacters.map(char => char.character_id).join(', ');
    return `${baseNegative}, ${absentDescriptions}`;
  }
  
  return baseNegative;
};

// Determine Veo-3 resolution based on image dimensions
const getVeo3Resolution = (width, height) => {
  const aspectRatio = width / height;
  
  // For smaller/square images, use 720p
  if (aspectRatio >= 0.8 && aspectRatio <= 1.25) {
    return '720p';
  }
  
  // For all other aspect ratios, use 1080p
  return '1080p';
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

// Veo-3 via Replicate API functions
export const createVeo3Task = async (imageBase64, structuredData, resolution = '1080p', setError, options = {}) => {
  const { useJsonPrompt = false } = options;
  
  let prompt, negativePrompt;
  
  if (useJsonPrompt) {
    // Try JSON-structured prompt
    const jsonPrompt = convertToVeo3JsonPrompt(structuredData);
    prompt = JSON.stringify(jsonPrompt);
    negativePrompt = jsonPrompt.negative_prompt || generateNegativePrompt(structuredData);
  } else {
    // Use text prompt with neutral language
    prompt = convertToVeo3TextPrompt(structuredData);
    negativePrompt = generateNegativePrompt(structuredData);
  }
  
  const payload = {
    model: 'google/veo-3',
    input: {
      prompt: prompt,
      image: `data:image/jpeg;base64,${imageBase64}`,
      resolution: resolution,
      negative_prompt: negativePrompt
    }
  };

  try {
    const response = await fetch('/api/replicate/create', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    });

    if (!response.ok) {
      const errorBody = await response.text();
      throw new Error(`Veo-3 API Error: ${response.status} ${response.statusText} - ${errorBody}`);
    }

    const result = await response.json();
    return result.id;
  } catch (err) {
    console.error('Error creating Veo-3 task:', err);
    setError(`Failed to create video generation task: ${err.message}`);
    throw err;
  }
};

export const pollVeo3Task = async (predictionId, setError) => {
  try {
    const response = await fetch(`/api/replicate/status/${predictionId}`, {
      headers: {
        'Content-Type': 'application/json'
      }
    });

    if (!response.ok) {
      const errorBody = await response.text();
      throw new Error(`Veo-3 Status Error: ${response.status} ${response.statusText} - ${errorBody}`);
    }

    const result = await response.json();
    return result;
  } catch (err) {
    console.error('Error polling Veo-3 task:', err);
    setError(`Failed to check video generation status: ${err.message}`);
    throw err;
  }
};

// Prompt sanitization function
const sanitizePrompt = (prompt) => {
  // Common words that might trigger sensitivity filters
  const sensitiveWords = [
    'violent', 'aggressive', 'attack', 'fight', 'battle', 'war', 'weapon', 'gun', 'knife', 'sword',
    'blood', 'death', 'kill', 'murder', 'hurt', 'pain', 'suffer', 'cry', 'scream', 'angry',
    'scary', 'terrifying', 'horror', 'nightmare', 'monster', 'demon', 'evil', 'dark', 'shadow',
    'naked', 'nude', 'body', 'skin', 'flesh', 'romance', 'kiss', 'love', 'intimate', 'sexual'
  ];
  
  let sanitized = prompt.toLowerCase();
  
  // Replace sensitive words with gentler alternatives
  const replacements = {
    'fight': 'play',
    'battle': 'game',
    'attack': 'approach',
    'angry': 'focused',
    'scary': 'mysterious',
    'dark': 'shadowy',
    'hurt': 'tired',
    'cry': 'express emotion',
    'scream': 'call out'
  };
  
  // Apply replacements
  Object.entries(replacements).forEach(([word, replacement]) => {
    sanitized = sanitized.replace(new RegExp(word, 'gi'), replacement);
  });
  
  // Remove any remaining sensitive words
  sensitiveWords.forEach(word => {
    sanitized = sanitized.replace(new RegExp(word, 'gi'), '');
  });
  
  // Clean up extra spaces
  sanitized = sanitized.replace(/\s+/g, ' ').trim();
  
  return sanitized;
};

// Sanitize text fields in structured data
const sanitizeText = (text) => {
  if (!text) return '';
  return text.replace(/\b(fight|battle|attack|scary|dark|hurt|cry|scream|angry)\b/gi, (match) => {
    const replacements = {
      'fight': 'play',
      'battle': 'game', 
      'attack': 'approach',
      'scary': 'mysterious',
      'dark': 'shadowy',
      'hurt': 'tired',
      'cry': 'express emotion',
      'scream': 'call out',
      'angry': 'focused'
    };
    return replacements[match.toLowerCase()] || '';
  });
};

export const generateVideoWithVeo3 = async (project, sceneId, imageBase64, feedback, setError, setLoadingMessage, options = {}) => {
  const { useJsonPrompt = false, imageDimensions = null } = options;
  
  // Generate structured data from Gemini
  setLoadingMessage('Generating animation data with Gemini...');
  const structuredData = await generateScene(project, sceneId, imageBase64, feedback, setError);
  
  // Determine resolution based on image dimensions
  let resolution = '1080p'; // default fallback
  if (imageDimensions) {
    resolution = getVeo3Resolution(imageDimensions.width, imageDimensions.height);
    console.log(`Image dimensions: ${imageDimensions.width}x${imageDimensions.height}, using resolution: ${resolution}`);
  }
  
  // Create Veo-3 task with the structured data
  setLoadingMessage('Creating Veo-3 video generation task...');
  const predictionId = await createVeo3Task(
    imageBase64, 
    structuredData,
    resolution,
    setError,
    { useJsonPrompt }
  );
  
  // Wait 10 seconds before starting to poll
  setLoadingMessage('Processing video with Google Veo-3...');
  await new Promise(resolve => setTimeout(resolve, 10000));
  
  // Poll for completion
  setLoadingMessage('Checking Veo-3 generation progress...');
  let attempts = 0;
  const maxAttempts = 60; // 10 minutes max
  
  while (attempts < maxAttempts) {
    const prediction = await pollVeo3Task(predictionId, setError);
    
    if (prediction.status === 'succeeded' && prediction.output) {
      // Video is ready!
      return {
        ...structuredData,
        video_url: prediction.output,
        prediction_id: predictionId,
        model: 'veo-3'
      };
    } else if (prediction.status === 'failed') {
      const errorMessage = prediction.error || 'Unknown error';
      throw new Error(`Veo-3 generation failed: ${errorMessage}`);
    } else if (prediction.status === 'canceled') {
      throw new Error('Veo-3 generation was canceled');
    }
    
    // Update progress message
    setLoadingMessage(`Generating video with Veo-3... (${Math.floor((attempts + 1) / maxAttempts * 100)}%)`);
    
    // Wait 10 seconds before next poll
    await new Promise(resolve => setTimeout(resolve, 10000));
    attempts++;
  }
  
  // If we get here, polling timed out
  throw new Error('Veo-3 generation timed out after 10 minutes');
};

// Seedance via Replicate API functions
export const createSeedanceTask = async (imageBase64, seedancePrompt, imageDimensions, setError) => {
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
    }
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

export const pollSeedanceTask = async (predictionId, setError) => {
  try {
    const response = await fetch(`/api/seedance/status/${predictionId}`, {
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

export const generateVideoWithSeedance = async (project, sceneId, imageBase64, feedback, setError, setLoadingMessage, options = {}) => {
  const { imageDimensions = null } = options;
  
  // Generate prompt with OpenAI
  setLoadingMessage('Creating animation...');
  const seedancePrompt = await generateSeedancePrompt(project, sceneId, imageBase64, feedback, setError);
  
  // Determine aspect ratio based on image dimensions
  if (!imageDimensions) {
    throw new Error('Image dimensions are required for Seedance generation');
  }
  
  const aspectRatio = getSeedanceAspectRatio(imageDimensions.width, imageDimensions.height);
  console.log(`Image dimensions: ${imageDimensions.width}x${imageDimensions.height}, using aspect ratio: ${aspectRatio}`);
  console.log(`Generated Seedance prompt: "${seedancePrompt}"`);
  
  // Create Seedance task
  setLoadingMessage('Starting video generation...');
  const predictionId = await createSeedanceTask(imageBase64, seedancePrompt, imageDimensions, setError);
  
  // Wait 10 seconds before starting to poll
  setLoadingMessage('Processing video...');
  await new Promise(resolve => setTimeout(resolve, 10000));
  
  // Poll for completion
  let attempts = 0;
  const maxAttempts = 60; // 10 minutes max
  
  while (attempts < maxAttempts) {
    const prediction = await pollSeedanceTask(predictionId, setError);
    
    if (prediction.status === 'succeeded' && prediction.output) {
      // Video is ready!
      return {
        prompt: seedancePrompt,
        video_url: prediction.output,
        prediction_id: predictionId,
        model: 'seedance',
        aspect_ratio: aspectRatio,
        resolution: '1080p'
      };
    } else if (prediction.status === 'failed') {
      const errorMessage = prediction.error || 'Unknown error';
      throw new Error(`Seedance generation failed: ${errorMessage}`);
    } else if (prediction.status === 'canceled') {
      throw new Error('Seedance generation was canceled');
    }
    
    // More realistic progress calculation
    let currentProgress;
    if (attempts < 5) {
      currentProgress = 10 + (attempts * 3); // 10% -> 22% (slower start)
    } else if (attempts < 15) {
      currentProgress = 22 + ((attempts - 5) * 2); // 22% -> 42% (gradual)
    } else if (attempts < 30) {
      currentProgress = 42 + ((attempts - 15) * 1.5); // 42% -> 64% (steady)
    } else if (attempts < 45) {
      currentProgress = 64 + ((attempts - 30) * 1); // 64% -> 79% (slower)
    } else {
      currentProgress = Math.min(95, 79 + ((attempts - 45) * 0.5)); // 79% -> 95% (very slow finish)
    }
    
    setLoadingMessage(`Generating video... ${Math.round(currentProgress)}%`);
    
    // Wait 10 seconds before next poll
    await new Promise(resolve => setTimeout(resolve, 10000));
    attempts++;
  }
  
  // If we get here, polling timed out
  throw new Error('Seedance generation timed out after 10 minutes');
};


// Generate Seedance video prompt using OpenAI
export const generateSeedancePrompt = async (project, sceneId, imageBase64, feedback, setError) => {
  const systemPrompt = buildSeedancePromptText(project, sceneId, feedback);
  
  const payload = {
    model: "gpt-4o", // Will switch to GPT-5 when available
    messages: [
      {
        role: "user",
        content: [
          { type: "text", text: systemPrompt },
          ...(imageBase64 ? [{ 
            type: "image_url", 
            image_url: { url: `data:image/jpeg;base64,${imageBase64}` }
          }] : [])
        ]
      }
    ],
    max_tokens: 300,
    temperature: 0.7
  };

  try {
    const response = await fetch('/api/openai', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });

    if (!response.ok) {
      const errorBody = await response.text();
      throw new Error(`OpenAI API Error: ${response.status} ${response.statusText} - ${errorBody}`);
    }

    const result = await response.json();
    
    if (result.choices && result.choices.length > 0 && result.choices[0].message.content) {
      const promptText = result.choices[0].message.content.trim();
      return promptText;
    } else {
      console.error("OpenAI Response was empty or invalid:", result);
      throw new Error('OpenAI returned an empty or invalid response.');
    }
  } catch (err) {
    console.error("Error in generateSeedancePrompt:", err);
    setError(err.message);
    throw err;
  }
};

export const generateScene = async (project, sceneId, imageBase64, feedback, setError) => {
  const systemPrompt = buildApiPromptText(project, sceneId, feedback);
  
  const payload = {
    model: "gpt-4o-2024-08-06", // Use the specific model that supports Structured Outputs
    messages: [
      {
        role: "user",
        content: [
          { type: "text", text: systemPrompt },
          ...(imageBase64 ? [{ 
            type: "image_url", 
            image_url: { url: `data:image/jpeg;base64,${imageBase64}` }
          }] : [])
        ]
      }
    ],
    response_format: {
      type: "json_schema",
      json_schema: animationPromptSchema
    },
    max_tokens: 2000,
    temperature: 0.7
  };

  try {
    const response = await fetch('/api/openai', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });

    if (!response.ok) {
      const errorBody = await response.text();
      throw new Error(`OpenAI API Error: ${response.status} ${response.statusText} - ${errorBody}`);
    }

    const result = await response.json();
    
    if (result.choices && result.choices.length > 0 && result.choices[0].message.content) {
      const parsedJson = JSON.parse(result.choices[0].message.content);
      console.log('OpenAI Structured Output - Animation Prompt:', parsedJson);
      return parsedJson;
    } else {
      console.error("OpenAI Response was empty or invalid:", result);
      throw new Error('OpenAI returned an empty or invalid response.');
    }
  } catch (err) {
    console.error("Error in generateScene:", err);
    setError(err.message);
    throw err;
  }
};