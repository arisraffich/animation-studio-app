export const storyContentSchema = {
  type: "OBJECT",
  properties: {
    story_pages: {
      type: "ARRAY",
      description: "An array of objects, where each object represents a page containing the main story narrative.",
      items: {
        type: "OBJECT",
        properties: {
          page_number: { type: "NUMBER", description: "The original page number from the PDF." },
          text: { type: "STRING", description: "The narrative text from this page." }
        },
        required: ["page_number", "text"]
      }
    }
  },
  required: ["story_pages"]
};

export const animationPromptSchema = {
  type: "OBJECT",
  properties: {
    page_number: { type: "NUMBER" },
    scene_summary: { type: "STRING" },
    animation_style: { type: "OBJECT", properties: { style: { type: "STRING" }, color_palette: { type: "STRING" }, tone: { type: "STRING" }}},
    scene: { type: "OBJECT", properties: { location: { type: "STRING" }, time_of_day: { type: "STRING" }, environment_details: { type: "STRING" }}},
    characters: {
      type: "ARRAY",
      items: {
        type: "OBJECT",
        properties: {
          character_id: { type: "STRING", description: "A unique, simple, lowercase ID for the character (e.g., 'mikey', 'grandfather')." },
          description: { type: "STRING", description: "A detailed visual description of the character's appearance and clothing." },
          initial_expression: { type: "STRING", description: "The character's primary emotion or expression at the start of the scene." },
          is_present_in_scene: { type: "BOOLEAN", description: "Set to true if the character is visually present in the illustration for this specific page, otherwise set to false." }
        },
        required: ["character_id", "description", "initial_expression", "is_present_in_scene"]
      }
    },
    camera: { type: "OBJECT", properties: { shot_type: { type: "STRING" }, movement: { type: "STRING" }}},
    action: { type: "OBJECT", properties: { primary_action: { type: "STRING" }, subtle_motions: { type: "STRING" }}},
    metadata: { type: "OBJECT", properties: { estimated_duration_seconds: { type: "NUMBER" }, notes: { type: "STRING" }}},
    extracted_title: { type: "STRING" },
    extracted_author: { type: "STRING" },
  }
};