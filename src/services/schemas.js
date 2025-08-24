// OpenAI Structured Outputs JSON Schema format
export const storyContentSchema = {
  name: "story_content_extraction",
  schema: {
    type: "object",
    properties: {
      story_pages: {
        type: "array",
        description: "An array of objects, where each object represents a page containing the main story narrative.",
        items: {
          type: "object",
          properties: {
            page_number: { 
              type: "number", 
              description: "The original page number from the PDF." 
            },
            text: { 
              type: "string", 
              description: "The narrative text from this page." 
            }
          },
          required: ["page_number", "text"],
          additionalProperties: false
        }
      },
      end_scene_elements: {
        type: "object",
        description: "Key story elements to create a beautiful end scene without characters",
        properties: {
          main_setting: {
            type: "string",
            description: "The primary location/environment where most of the story takes place (e.g., 'cozy bedroom', 'magical forest', 'school playground')"
          },
          key_objects: {
            type: "array",
            description: "2-3 memorable objects from the story that represent the journey",
            items: {
              type: "string"
            },
            maxItems: 3
          },
          mood: {
            type: "string",
            description: "Overall emotional tone for the ending (e.g., 'peaceful and satisfied', 'triumphant and joyful', 'warm and cozy')"
          },
          color_palette: {
            type: "string",
            description: "Dominant colors or lighting that would represent the story's atmosphere (e.g., 'warm golden sunset', 'soft pastel blues and greens', 'rich autumn colors')"
          }
        },
        required: ["main_setting", "key_objects", "mood", "color_palette"],
        additionalProperties: false
      },
      background_music_prompt: {
        type: "string",
        description: "A contextual ElevenLabs music prompt (maximum 50 words) that matches the story's authentic mood and genre. Analyze the story's tone, setting, and emotional arc to create appropriate music. Format: '[Musical style matching story genre] [actual story mood/emotion], [appropriate instruments], [fitting tempo]'. Examples: 'Ethereal orchestral music, mystical and enchanting, soft strings with delicate harp' (fantasy), 'Gentle acoustic music, warm and comforting, soft piano with tender guitar' (heartwarming), 'Ambient atmospheric music, curious and intriguing, subtle piano with mysterious synth' (mystery)."
      }
    },
    required: ["story_pages", "end_scene_elements", "background_music_prompt"],
    additionalProperties: false
  }
};

export const coverAnalysisSchema = {
  name: "cover_analysis",
  schema: {
    type: "object",
    properties: {
      title: { type: "string" },
      author: { type: "string" },
      confidence: {
        type: "object",
        properties: {
          title: { type: "number" },
          author: { type: "number" }
        },
        required: ["title", "author"],
        additionalProperties: false
      },
      notes: { type: "string" }
    },
    required: ["title", "author", "confidence", "notes"],
    additionalProperties: false
  }
};

export const animationPromptSchema = {
  name: "animation_prompt_generation", 
  schema: {
    type: "object",
    properties: {
      page_number: { type: "number" },
      scene_summary: { type: "string" },
      animation_style: { type: "string" },
      animation_tone: { type: "string" },
      primary_action: { type: "string" },
      subtle_motions: { type: "string" },
      extracted_title: { type: "string" },
      extracted_author: { type: "string" }
    },
    required: ["page_number", "scene_summary", "animation_style", "animation_tone", "primary_action", "subtle_motions", "extracted_title", "extracted_author"],
    additionalProperties: false
  }
};