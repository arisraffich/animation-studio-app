# 🔐 Security Setup Guide

## 🚨 IMMEDIATE ACTION REQUIRED

1. **Revoke the exposed ElevenLabs API key**:
   - Go to https://elevenlabs.io/app/api-keys
   - Delete key: `sk_ae3474dc3b5cf90d49c3db3ffbf043f56945f2a5a5452ac1`
   - Generate a new API key

2. **Check for unauthorized usage**:
   - Review your ElevenLabs usage logs
   - Monitor for unexpected charges

## 🛠 Environment Variables Setup

### Local Development (.env file)
```env
# Add your NEW ElevenLabs API key here
VITE_ELEVENLABS_API_KEY=your_new_api_key_here
ELEVENLABS_API_KEY=your_new_api_key_here

# Other APIs
OPENAI_API_KEY=your_openai_key
REPLICATE_API_TOKEN=your_replicate_token

# Firebase config
VITE_FIREBASE_API_KEY=your_firebase_key
# ... other Firebase vars
```

### Production (Railway)
Set these environment variables in Railway dashboard:
- `VITE_ELEVENLABS_API_KEY` = your_new_api_key
- `ELEVENLABS_API_KEY` = your_new_api_key
- All other existing variables you have

## ✅ How It Works Now

1. **Local**: Uses `.env` file (never committed to git)
2. **Production**: Uses Railway environment variables
3. **Secure**: API keys are never in source code
4. **Fallback**: Code checks both VITE_ and regular env vars

## 🔄 Code Changes Made

- Removed hardcoded API key from `src/services/api.js`
- Added environment variable lookup with error handling
- Updated `.env.example` with proper structure

## ⚠️ Important Notes

- Never commit `.env` files to git (already in .gitignore)
- Always use environment variables for API keys
- Rotate keys regularly for security
- Monitor usage logs for suspicious activity