import { storyContentSchema, animationPromptSchema } from './schemas';

export const findStoryContent = async (allPagesText, setError) => {
  const promptText = `
    You are a literary assistant. Analyze the following pages from a children's book...
    Here is the text from the pages:
    ${allPagesText.map(p => `Page ${p.pageNum}: "${p.text}"`).join('\n')}
  `;

  const payload = {
    contents: [{ role: "user", parts: [{ text: promptText }] }],
    generationConfig: {
      responseMimeType: "application/json",
      responseSchema: storyContentSchema,
    }
  };

  try {
    const response = await fetch('/api/proxy', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });

    if (!response.ok) {
      const errorBody = await response.text();
      throw new Error(`API Error: ${response.status} ${response.statusText} - ${errorBody}`);
    }

    const result = await response.json();
    
    if (result.candidates && result.candidates.length > 0) {
      const jsonText = result.candidates[0].content.parts[0].text;
      const parsedJson = JSON.parse(jsonText);
      return parsedJson.story_pages;
    } else {
      console.error("API Response for story content was empty or invalid:", result);
      throw new Error('The model returned an empty or invalid response for story content.');
    }
  } catch (err) {
    console.error("Error in findStoryContent:", err);
    setError(err.message);
    throw err;
  }
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

export const generateScene = async (project, sceneId, imageBase64, feedback, setError) => {
  const textPrompt = buildApiPromptText(project, sceneId, feedback);
  const payload = {
    contents: [{
      role: "user",
      parts: [
        { text: textPrompt },
        ...(imageBase64 ? [{ inlineData: { mimeType: 'image/jpeg', data: imageBase64 } }] : [])
      ]
    }],
    generationConfig: {
      responseMimeType: "application/json",
      responseSchema: animationPromptSchema,
    }
  };

  try {
    const response = await fetch('/api/proxy', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });

    if (!response.ok) {
      const errorBody = await response.text();
      throw new Error(`API Error: ${response.status} ${response.statusText} - ${errorBody}`);
    }

    const result = await response.json();
    
    if (result.candidates && result.candidates.length > 0 && result.candidates[0].content.parts[0].text) {
      const jsonText = result.candidates[0].content.parts[0].text;
      const newPrompt = JSON.parse(jsonText);
      return newPrompt;
    } else {
      console.error("API Response was empty or invalid:", result);
      throw new Error('The model returned an empty or invalid response.');
    }
  } catch (err) {
    console.error("Error in generateScene:", err);
    setError(err.message);
    throw err;
  }
};