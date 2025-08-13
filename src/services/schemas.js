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
      }
    },
    required: ["story_pages"],
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
      animation_style: { 
        type: "object", 
        properties: { 
          style: { type: "string" }, 
          color_palette: { type: "string" }, 
          tone: { type: "string" }
        },
        required: ["style", "color_palette", "tone"],
        additionalProperties: false
      },
      scene: { 
        type: "object", 
        properties: { 
          location: { type: "string" }, 
          time_of_day: { type: "string" }, 
          environment_details: { type: "string" }
        },
        required: ["location", "time_of_day", "environment_details"],
        additionalProperties: false
      },
      characters: {
        type: "array",
        items: {
          type: "object",
          properties: {
            character_id: { 
              type: "string", 
              description: "A unique, simple, lowercase ID for the character (e.g., 'mikey', 'grandfather')." 
            },
            description: { 
              type: "string", 
              description: "A detailed visual description of the character's appearance and clothing." 
            },
            initial_expression: { 
              type: "string", 
              description: "The character's primary emotion or expression at the start of the scene." 
            },
            is_present_in_scene: { 
              type: "boolean", 
              description: "Set to true if the character is visually present in the illustration for this specific page, otherwise set to false." 
            }
          },
          required: ["character_id", "description", "initial_expression", "is_present_in_scene"],
          additionalProperties: false
        }
      },
      camera: { 
        type: "object", 
        properties: { 
          shot_type: { type: "string" }, 
          movement: { type: "string" }
        },
        required: ["shot_type", "movement"],
        additionalProperties: false
      },
      action: { 
        type: "object", 
        properties: { 
          primary_action: { type: "string" }, 
          subtle_motions: { type: "string" }
        },
        required: ["primary_action", "subtle_motions"],
        additionalProperties: false
      },
      metadata: { 
        type: "object", 
        properties: { 
          estimated_duration_seconds: { type: "number" }, 
          notes: { type: "string" }
        },
        required: ["estimated_duration_seconds", "notes"],
        additionalProperties: false
      },
      extracted_title: { type: "string" },
      extracted_author: { type: "string" }
    },
    required: ["page_number", "scene_summary", "animation_style", "scene", "characters", "camera", "action", "metadata"],
    additionalProperties: false
  }
};