// Vidu API Integration Test
// This script tests the complete Vidu API workflow with provided credentials

const API_KEY = 'vda_852723603643314176_wMoqukzQVO9feGLWqy1SBuPwpA1WKxxb';
const BASE_URL = 'https://app.vidu.ai/api';

// Test with a small base64 encoded test image (1x1 pixel PNG)
const TEST_IMAGE_BASE64 = 'iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8/5+hHgAHggJ/PchI7wAAAABJRU5ErkJggg==';

async function testViduAPI() {
  console.log('🚀 Starting Vidu API Integration Test\n');
  
  // Step 1: Test basic authentication
  console.log('1️⃣ Testing API Authentication...');
  try {
    const authResponse = await fetch(`${BASE_URL}/user/info`, {
      headers: {
        'Authorization': `Bearer ${API_KEY}`,
        'Content-Type': 'application/json'
      }
    });
    
    console.log(`   Status: ${authResponse.status}`);
    if (authResponse.ok) {
      const userInfo = await authResponse.json();
      console.log('   ✅ Authentication successful');
      console.log(`   User ID: ${userInfo.id || 'N/A'}`);
    } else {
      const error = await authResponse.text();
      console.log('   ❌ Authentication failed:', error);
      return;
    }
  } catch (error) {
    console.log('   ❌ Authentication error:', error.message);
    return;
  }
  
  // Step 2: Create image-to-video task
  console.log('\n2️⃣ Creating Image-to-Video Task...');
  const taskPayload = {
    model: 'viduq1',
    prompt: 'A magical storybook illustration comes to life. The camera slowly zooms into a cozy family scene with gentle character movements and soft lighting.',
    duration: 5,
    resolution: '720p',
    movement_amplitude: 'medium',
    image: `data:image/png;base64,${TEST_IMAGE_BASE64}`
  };
  
  let taskId = null;
  
  try {
    const taskResponse = await fetch(`${BASE_URL}/video/generate`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${API_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(taskPayload)
    });
    
    console.log(`   Status: ${taskResponse.status}`);
    
    if (taskResponse.ok) {
      const taskResult = await taskResponse.json();
      taskId = taskResult.task_id || taskResult.id;
      console.log('   ✅ Task created successfully');
      console.log(`   Task ID: ${taskId}`);
      console.log(`   Full Response:`, JSON.stringify(taskResult, null, 2));
    } else {
      const error = await taskResponse.text();
      console.log('   ❌ Task creation failed:', error);
      
      // Try to parse error for better debugging
      try {
        const errorJson = JSON.parse(error);
        console.log('   Error details:', errorJson);
      } catch (e) {
        console.log('   Raw error:', error);
      }
      return;
    }
  } catch (error) {
    console.log('   ❌ Task creation error:', error.message);
    return;
  }
  
  // Step 3: Poll for task status
  if (taskId) {
    console.log('\n3️⃣ Polling Task Status...');
    const maxPolls = 10;
    let polls = 0;
    
    while (polls < maxPolls) {
      polls++;
      console.log(`   Poll ${polls}/${maxPolls}`);
      
      try {
        const statusResponse = await fetch(`${BASE_URL}/video/status/${taskId}`, {
          headers: {
            'Authorization': `Bearer ${API_KEY}`,
            'Content-Type': 'application/json'
          }
        });
        
        console.log(`   Status: ${statusResponse.status}`);
        
        if (statusResponse.ok) {
          const status = await statusResponse.json();
          console.log(`   Task Status: ${status.status || 'unknown'}`);
          console.log(`   Response:`, JSON.stringify(status, null, 2));
          
          if (status.status === 'completed' && status.video_url) {
            console.log('   ✅ Video generation completed!');
            console.log(`   Video URL: ${status.video_url}`);
            break;
          } else if (status.status === 'failed' || status.status === 'error') {
            console.log('   ❌ Task failed:', status.message || 'Unknown error');
            break;
          }
        } else {
          const error = await statusResponse.text();
          console.log(`   ❌ Status check failed (${statusResponse.status}):`, error);
          
          if (statusResponse.status === 404) {
            console.log('   Task might not exist or is not accessible');
            break;
          }
        }
      } catch (error) {
        console.log(`   ❌ Status check error: ${error.message}`);
      }
      
      // Wait 5 seconds between polls
      if (polls < maxPolls) {
        console.log('   ⏳ Waiting 5 seconds...');
        await new Promise(resolve => setTimeout(resolve, 5000));
      }
    }
  }
  
  console.log('\n🏁 Test completed');
}

// Alternative endpoints to test
async function testAlternativeEndpoints() {
  console.log('\n🔄 Testing Alternative API Endpoints...');
  
  const endpoints = [
    '/tasks/create',
    '/generate/video',
    '/video/create',
    '/api/video/generate'
  ];
  
  for (const endpoint of endpoints) {
    console.log(`\nTesting: ${BASE_URL}${endpoint}`);
    try {
      const response = await fetch(`${BASE_URL}${endpoint}`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${API_KEY}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          model: 'viduq1',
          prompt: 'Test prompt',
          duration: 5
        })
      });
      
      console.log(`   Status: ${response.status}`);
      const result = await response.text();
      console.log(`   Response: ${result.substring(0, 200)}...`);
    } catch (error) {
      console.log(`   Error: ${error.message}`);
    }
  }
}

// Run the test
testViduAPI().then(() => {
  return testAlternativeEndpoints();
}).catch(console.error);