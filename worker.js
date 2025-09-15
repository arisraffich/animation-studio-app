// Cloudflare Worker - Backend API for Animation Studio App
// This replaces the Express server for production deployment

import { initializeD1, initializeR2 } from './src/services/storageService.js';

// Environment variables (set in Cloudflare Workers dashboard)
const CLOUDFLARE_CONFIG = {
  apiToken: '',
  accountId: '',
  databaseId: '',
  bucketName: '',
  accessKeyId: '',
  secretAccessKey: ''
};

// Initialize services
let d1Client = null;
let r2Client = null;

async function initializeServices() {
  if (!d1Client) {
    d1Client = await initializeD1(CLOUDFLARE_CONFIG.accountId, CLOUDFLARE_CONFIG.databaseId);
  }
  if (!r2Client) {
    r2Client = await initializeR2(CLOUDFLARE_CONFIG.accountId, CLOUDFLARE_CONFIG.accessKeyId, CLOUDFLARE_CONFIG.secretAccessKey);
  }
}

// CORS headers
const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization',
};

// Handle CORS preflight
function handleCORS(request) {
  if (request.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }
}

// Get all projects
async function getAllProjects(d1Client) {
  try {
    const result = await d1Client.prepare('SELECT * FROM projects ORDER BY created_at DESC').all();
    
    const projects = result.results.map(row => ({
      id: row.id,
      name: row.name,
      author: row.author,
      storyText: row.story_text,
      totalPages: row.total_pages,
      scenes: row.scenes ? JSON.parse(row.scenes) : {},
      pageDimensions: row.page_dimensions ? JSON.parse(row.page_dimensions) : null,
      createdAt: row.created_at,
      updatedAt: row.updated_at
    }));
    
    return new Response(JSON.stringify(projects), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' }
    });
  } catch (error) {
    console.error('Projects API error:', error);
    return new Response(JSON.stringify({ error: 'Failed to fetch projects' }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' }
    });
  }
}

// Get single project
async function getProject(d1Client, projectId) {
  try {
    const result = await d1Client.prepare('SELECT * FROM projects WHERE id = ?').bind(projectId).first();
    
    if (result) {
      const project = {
        id: result.id,
        name: result.name,
        author: result.author,
        storyText: result.story_text,
        totalPages: result.total_pages,
        scenes: result.scenes ? JSON.parse(result.scenes) : {},
        pageDimensions: result.page_dimensions ? JSON.parse(result.page_dimensions) : null,
        createdAt: result.created_at,
        updatedAt: result.updated_at
      };
      return new Response(JSON.stringify(project), {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      });
    } else {
      return new Response(JSON.stringify(null), {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      });
    }
  } catch (error) {
    console.error('Project get API error:', error);
    return new Response(JSON.stringify({ error: 'Failed to fetch project' }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' }
    });
  }
}

// Create project
async function createProject(d1Client, request) {
  try {
    const projectData = await request.json();
    
    const id = crypto.randomUUID();
    const now = new Date().toISOString();
    
    const result = await d1Client.prepare(`
      INSERT INTO projects (id, name, author, story_text, total_pages, scenes, page_dimensions, created_at, updated_at)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
    `).bind(
      id,
      projectData.name || 'Untitled Project',
      projectData.author || 'Unknown Author',
      projectData.storyText || '',
      projectData.totalPages || 0,
      JSON.stringify(projectData.scenes || {}),
      JSON.stringify(projectData.pageDimensions || null),
      now,
      now
    ).run();
    
    if (result.success) {
      return new Response(JSON.stringify({ id }), {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      });
    } else {
      throw new Error('Failed to create project in database');
    }
  } catch (error) {
    console.error('Project create API error:', error);
    return new Response(JSON.stringify({ error: 'Failed to create project' }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' }
    });
  }
}

// Update project
async function updateProject(d1Client, projectId, request) {
  try {
    const updates = await request.json();
    
    const now = new Date().toISOString();
    const updateFields = [];
    const updateValues = [];
    
    Object.keys(updates).forEach(key => {
      if (key === 'scenes' || key === 'pageDimensions') {
        updateFields.push(`${key === 'scenes' ? 'scenes' : 'page_dimensions'} = ?`);
        updateValues.push(JSON.stringify(updates[key]));
      } else if (key === 'storyText') {
        updateFields.push('story_text = ?');
        updateValues.push(updates[key]);
      } else if (key === 'totalPages') {
        updateFields.push('total_pages = ?');
        updateValues.push(updates[key]);
      } else {
        updateFields.push(`${key} = ?`);
        updateValues.push(updates[key]);
      }
    });
    
    updateFields.push('updated_at = ?');
    updateValues.push(now);
    updateValues.push(projectId);
    
    const result = await d1Client.prepare(`
      UPDATE projects 
      SET ${updateFields.join(', ')} 
      WHERE id = ?
    `).bind(...updateValues).run();
    
    if (result.success) {
      return new Response(JSON.stringify({ success: true }), {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      });
    } else {
      throw new Error('Failed to update project in database');
    }
  } catch (error) {
    console.error('Project update API error:', error);
    return new Response(JSON.stringify({ error: 'Failed to update project' }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' }
    });
  }
}

// Delete project
async function deleteProject(d1Client, projectId) {
  try {
    const result = await d1Client.prepare('DELETE FROM projects WHERE id = ?').bind(projectId).run();
    
    if (result.success) {
      return new Response(JSON.stringify({ success: true }), {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      });
    } else {
      throw new Error('Failed to delete project from database');
    }
  } catch (error) {
    console.error('Project delete API error:', error);
    return new Response(JSON.stringify({ error: 'Failed to delete project' }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' }
    });
  }
}

// Main Worker handler
export default {
  async fetch(request, env, ctx) {
    // Use D1 binding directly instead of API calls
    const d1Client = env.animation_studio_db;

    // Handle CORS
    const corsResponse = handleCORS(request);
    if (corsResponse) return corsResponse;

    const url = new URL(request.url);
    const path = url.pathname;
    const method = request.method;

    // Route handling
    if (path === '/api/projects' && method === 'GET') {
      return await getAllProjects(d1Client);
    }
    
    if (path.startsWith('/api/projects/') && method === 'GET') {
      const projectId = path.split('/')[3];
      return await getProject(d1Client, projectId);
    }
    
    if (path === '/api/projects' && method === 'POST') {
      return await createProject(d1Client, request);
    }
    
    if (path.startsWith('/api/projects/') && method === 'PUT') {
      const projectId = path.split('/')[3];
      return await updateProject(d1Client, projectId, request);
    }
    
    if (path.startsWith('/api/projects/') && method === 'DELETE') {
      const projectId = path.split('/')[3];
      return await deleteProject(d1Client, projectId);
    }

    // Default response
    return new Response('Animation Studio API - Cloudflare Worker', {
      headers: { ...corsHeaders, 'Content-Type': 'text/plain' }
    });
  },
};
