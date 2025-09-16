export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    const path = url.pathname;
    const method = request.method;

    console.log(`Request: ${method} ${path}`);

    if (path === '/test') {
      return new Response('Test working');
    }

    if (path === '/api/openai' && method === 'POST') {
      return new Response(JSON.stringify({ message: 'OpenAI endpoint working' }), {
        headers: { 'Content-Type': 'application/json' }
      });
    }

    return new Response('Default response');
  }
};

