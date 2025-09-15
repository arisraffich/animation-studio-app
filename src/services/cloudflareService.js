// Cloudflare Services Integration
import { initializeD1, initializeR2 } from './storageService.js';

// Cloudflare configuration
const CLOUDFLARE_CONFIG = {
  apiToken: process.env.CLOUDFLARE_API_TOKEN || import.meta.env.VITE_CLOUDFLARE_API_TOKEN,
  accountId: process.env.CLOUDFLARE_ACCOUNT_ID || import.meta.env.VITE_CLOUDFLARE_ACCOUNT_ID,
  databaseId: process.env.CLOUDFLARE_D1_DATABASE_ID || import.meta.env.VITE_CLOUDFLARE_D1_DATABASE_ID,
  bucketName: process.env.CLOUDFLARE_R2_BUCKET_NAME || import.meta.env.VITE_CLOUDFLARE_R2_BUCKET_NAME
};

// Initialize Cloudflare services
export const initializeCloudflareServices = async () => {
  try {
    // Initialize D1 Database
    const d1 = await initializeD1(CLOUDFLARE_CONFIG.accountId, CLOUDFLARE_CONFIG.databaseId);
    
    // Initialize R2 Storage
    const r2 = await initializeR2(
      CLOUDFLARE_CONFIG.accountId,
      process.env.CLOUDFLARE_ACCESS_KEY_ID,
      process.env.CLOUDFLARE_SECRET_ACCESS_KEY
    );
    
    console.log('✅ Cloudflare services initialized successfully');
    return { d1, r2 };
  } catch (error) {
    console.error('❌ Cloudflare initialization failed:', error);
    throw error;
  }
};

// D1 Database operations
export const d1Operations = {
  // Get all projects
  getAllProjects: async (d1) => {
    const result = await d1.prepare('SELECT * FROM projects ORDER BY created_at DESC').all();
    return result.results;
  },

  // Get single project
  getProject: async (d1, projectId) => {
    const result = await d1.prepare('SELECT * FROM projects WHERE id = ?').bind(projectId).first();
    return result;
  },

  // Create project
  createProject: async (d1, projectData) => {
    const id = crypto.randomUUID();
    const now = new Date().toISOString();
    
    const result = await d1.prepare(`
      INSERT INTO projects (id, name, author, story_text, total_pages, scenes, page_dimensions, created_at, updated_at)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
    `).bind(
      id,
      projectData.name,
      projectData.author,
      projectData.storyText,
      projectData.totalPages,
      JSON.stringify(projectData.scenes),
      JSON.stringify(projectData.pageDimensions),
      now,
      now
    ).run();
    
    return { id, success: result.success };
  },

  // Update project
  updateProject: async (d1, projectId, updates) => {
    const now = new Date().toISOString();
    const updateFields = [];
    const updateValues = [];
    
    Object.keys(updates).forEach(key => {
      if (key === 'scenes' || key === 'pageDimensions') {
        updateFields.push(`${key} = ?`);
        updateValues.push(JSON.stringify(updates[key]));
      } else {
        updateFields.push(`${key} = ?`);
        updateValues.push(updates[key]);
      }
    });
    
    updateFields.push('updated_at = ?');
    updateValues.push(now);
    updateValues.push(projectId);
    
    const result = await d1.prepare(`
      UPDATE projects 
      SET ${updateFields.join(', ')} 
      WHERE id = ?
    `).bind(...updateValues).run();
    
    return { success: result.success };
  },

  // Delete project
  deleteProject: async (d1, projectId) => {
    const result = await d1.prepare('DELETE FROM projects WHERE id = ?').bind(projectId).run();
    return { success: result.success };
  }
};

export default CLOUDFLARE_CONFIG;
