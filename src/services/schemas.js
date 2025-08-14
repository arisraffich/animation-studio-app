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