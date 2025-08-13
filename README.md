# Animation Studio - Universal Deployment Ready

A modern React application for creating animation prompts from children's books.

## 🚀 Quick Start

### Development (Local)
```bash
# 1. Copy environment template
cp .env.example .env.local

# 2. Add your Gemini API key to .env.local
GEMINI_API_KEY=your_actual_api_key_here

# 3. Install and run
npm install
npm run dev          # Frontend: http://localhost:3003
npm run server       # Backend: http://localhost:8081 (separate terminal)
```

### Production (Railway/Any Platform)
```bash
npm run build        # Build React app
npm run server       # Start production server
```

## 🌐 Deployment

### Railway Deployment
1. **Set Environment Variable**: `GEMINI_API_KEY=your_api_key` in Railway dashboard
2. **Push to GitHub**: `git push origin main`
3. **Auto-Deploy**: Railway builds and deploys automatically

### Universal Configuration
- **Local Development**: Uses `.env.local` file (git-ignored)
- **Production**: Uses platform environment variables
- **Same Codebase**: No changes needed between environments

## 📁 Project Structure

```
src/
├── components/
│   ├── common/          # Reusable UI components
│   ├── dashboard/       # Dashboard view
│   ├── workspace/       # Project workspace
│   └── scenes/         # Scene-specific components
├── hooks/              # Custom React hooks
├── services/           # API calls and business logic
└── styles/            # CSS files
```

## ⚙️ Features

- 📚 PDF upload and text extraction
- 🎨 AI-powered scene generation using Google Gemini
- 💾 Local storage for project persistence
- 🎬 Animation prompt generation
- 📱 Responsive design with Tailwind CSS

## 🔧 Tech Stack

- **Frontend**: React 18, Vite, Tailwind CSS
- **Backend**: Express.js, Node.js
- **AI**: Google Gemini API
- **PDF**: PDF.js for text extraction
- **Deployment**: Railway/Render/Heroku compatible

## 🔒 Security

- Environment variables secured with `.gitignore`
- API keys never committed to repository
- Production-ready configuration out of the box