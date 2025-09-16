// Cloudflare Worker for Animation Studio API
// Exact copy of original Express server functionality

// CORS headers for all responses
const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization',
};

// Handle CORS preflight requests
function handleCORS(request) {
  if (request.method === 'OPTIONS') {
    return new Response(null, {
      status: 200,
      headers: corsHeaders
    });
  }
  return null;
}

// Handle OpenAI API requests - EXACT COPY OF ORIGINAL SERVER
async function handleOpenAI(request, env) {
  if (!env.OPENAI_API_KEY) {
    return new Response(JSON.stringify({ error: 'OpenAI API key not configured' }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' }
    });
  }

  try {
    const response = await fetch('https://api.openai.com/v1/responses', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${env.OPENAI_API_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(await request.json())
    });

    if (!response.ok) {
      const errorBody = await response.text();
      console.error('OpenAI GPT-5 API Error:', errorBody);
      return new Response(JSON.stringify({ 
        error: 'OpenAI GPT-5 API Error', 
        details: errorBody 
      }), {
        status: response.status,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      });
    }

    const data = await response.json();
    return new Response(JSON.stringify(data), {
      status: 200,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' }
    });
  } catch (error) {
    console.error('Error in OpenAI GPT-5 proxy:', error);
    return new Response(JSON.stringify({ 
      error: 'Internal server error', 
      details: error.message 
    }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' }
    });
  }
}

// Handle D1 database operations
async function handleProjects(request, env) {
  const url = new URL(request.url);
  const pathname = url.pathname;
  
  try {
    if (request.method === 'GET' && pathname === '/api/projects') {
      // Get all projects
      const result = await env.animation_studio_db.prepare('SELECT * FROM projects ORDER BY created_at DESC').all();
      return new Response(JSON.stringify(result.results), {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      });
    }
    
    if (request.method === 'GET' && pathname.startsWith('/api/projects/')) {
      // Get single project
      const projectId = pathname.split('/')[3];
      const result = await env.animation_studio_db.prepare('SELECT * FROM projects WHERE id = ?').bind(projectId).first();
      
      if (!result) {
        return new Response(JSON.stringify({ error: 'Project not found' }), {
          status: 404,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' }
        });
      }
      
      return new Response(JSON.stringify(result), {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      });
    }
    
    if (request.method === 'POST' && pathname === '/api/projects') {
      // Create project
      const projectData = await request.json();
      const id = crypto.randomUUID();
      const now = new Date().toISOString();
      
      await env.animation_studio_db.prepare(`
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
      
      return new Response(JSON.stringify({ id }), {
        status: 201,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      });
    }
    
    if (request.method === 'PUT' && pathname.startsWith('/api/projects/')) {
      // Update project
      const projectId = pathname.split('/')[3];
      const updates = await request.json();
      const now = new Date().toISOString();
      
      // Build dynamic update query
      const fields = [];
      const values = [];
      
      if (updates.name !== undefined) {
        fields.push('name = ?');
        values.push(updates.name);
      }
      if (updates.author !== undefined) {
        fields.push('author = ?');
        values.push(updates.author);
      }
      if (updates.storyText !== undefined) {
        fields.push('story_text = ?');
        values.push(updates.storyText);
      }
      if (updates.totalPages !== undefined) {
        fields.push('total_pages = ?');
        values.push(updates.totalPages);
      }
      if (updates.scenes !== undefined) {
        fields.push('scenes = ?');
        values.push(JSON.stringify(updates.scenes));
      }
      if (updates.pageDimensions !== undefined) {
        fields.push('page_dimensions = ?');
        values.push(JSON.stringify(updates.pageDimensions));
      }
      
      fields.push('updated_at = ?');
      values.push(now);
      values.push(projectId);
      
      await env.animation_studio_db.prepare(`
        UPDATE projects SET ${fields.join(', ')} WHERE id = ?
      `).bind(...values).run();
      
      return new Response(JSON.stringify({ success: true }), {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      });
    }
    
    if (request.method === 'DELETE' && pathname.startsWith('/api/projects/')) {
      // Delete project
      const projectId = pathname.split('/')[3];
      
      // Delete from R2 storage first
      try {
        const objects = await env.animation_studio_storage.list({ prefix: `projects/${projectId}/` });
        for (const object of objects.objects) {
          await env.animation_studio_storage.delete(object.key);
        }
      } catch (storageError) {
        console.warn('Storage deletion failed:', storageError);
      }
      
      // Delete from database
      await env.animation_studio_db.prepare('DELETE FROM projects WHERE id = ?').bind(projectId).run();
      
      return new Response(JSON.stringify({ success: true }), {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      });
    }
    
    return new Response(JSON.stringify({ error: 'Not found' }), {
      status: 404,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' }
    });
    
  } catch (error) {
    console.error('Database operation error:', error);
    return new Response(JSON.stringify({ 
      error: 'Database operation failed', 
      details: error.message 
    }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' }
    });
  }
}

// Handle image proxy (for CORS issues)
async function handleFirebaseImage(request, env) {
  try {
    const { imageUrl } = await request.json();
    
    if (!imageUrl) {
      return new Response(JSON.stringify({ error: 'Image URL is required' }), {
        status: 400,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      });
    }
    
    // Fetch the image from the URL
    const response = await fetch(imageUrl);
    
    if (!response.ok) {
      return new Response(JSON.stringify({ 
        error: 'Failed to fetch image',
        status: response.status 
      }), {
        status: response.status,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      });
    }
    
    // Convert to buffer then base64
    const buffer = await response.arrayBuffer();
    const base64 = btoa(String.fromCharCode(...new Uint8Array(buffer)));
    
    return new Response(JSON.stringify({ base64 }), {
      status: 200,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' }
    });
    
  } catch (error) {
    console.error('Error fetching image:', error);
    return new Response(JSON.stringify({ 
      error: 'Internal server error',
      details: error.message 
    }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' }
    });
  }
}

// Handle R2 image uploads
async function handleR2Upload(request, env) {
  try {
    const data = await request.json();
    
    // Handle both formats: new format and frontend format
    let projectId, sceneId, versionId, base64Data;
    
    if (data.sceneId && data.versionId && data.base64Data) {
      // New format
      ({ projectId, sceneId, versionId, base64Data } = data);
    } else if (data.imageData && data.fileName) {
      // Frontend format
      projectId = data.projectId;
      base64Data = data.imageData;
      
      // Parse fileName: "cover/v1.png" -> sceneId="cover", versionId="v1"
      const fileNameParts = data.fileName.split('/');
      sceneId = fileNameParts[0];
      versionId = fileNameParts[1].replace('.png', '');
    } else {
      return new Response(JSON.stringify({ error: 'Missing required fields' }), {
        status: 400,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      });
    }
    
    if (!projectId || !sceneId || !versionId || !base64Data) {
      return new Response(JSON.stringify({ error: 'Missing required fields' }), {
        status: 400,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      });
    }
    
    // Convert base64 to buffer
    const binaryData = Uint8Array.from(atob(base64Data), c => c.charCodeAt(0));
    
    // Upload to R2
    const key = `projects/${projectId}/scenes/${sceneId}/versions/${versionId}.jpg`;
    await env.animation_studio_storage.put(key, binaryData, {
      httpMetadata: {
        contentType: 'image/jpeg'
      }
    });
    
    // Generate URL
    const url = `https://animation-studio-storage.bookimagic-com.workers.dev/${key}`;
    
    return new Response(JSON.stringify({ 
      url,
      path: key,
      size: binaryData.length,
      imageUrl: url,  // Frontend expects this field
      key: key        // Frontend expects this field
    }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' }
    });
    
  } catch (error) {
    console.error('R2 upload error:', error);
    return new Response(JSON.stringify({ 
      error: 'R2 upload failed', 
      details: error.message 
    }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' }
    });
  }
}

// Main request handler
export default {
  async fetch(request, env, ctx) {
    // Handle CORS
    const corsResponse = handleCORS(request);
    if (corsResponse) return corsResponse;
    
    const url = new URL(request.url);
    const pathname = url.pathname;
    
    // Route requests
    if (pathname === '/api/openai') {
      return handleOpenAI(request, env);
    }
    
    if (pathname.startsWith('/api/projects')) {
      return handleProjects(request, env);
    }
    
    if (pathname === '/api/r2-upload') {
      return handleR2Upload(request, env);
    }
    
    if (pathname === '/api/firebase-image') {
      return handleFirebaseImage(request, env);
    }
    
    // Default response
    return new Response(JSON.stringify({ error: 'Not found' }), {
      status: 404,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' }
    });
  }
};