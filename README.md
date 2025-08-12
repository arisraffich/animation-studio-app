# Animation Studio - Refactored

A modern React application for creating animation prompts from children's books.

## 🚀 Quick Start

### Development
```bash
npm install
npm run dev          # Start development server
```

### Production
```bash
npm run build        # Build for production
npm run server       # Start production server
npm run start        # Build + Start (used by Railway)
```

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

## 🌐 Railway Deployment

This app is configured for Railway deployment with:

- **Build Command**: `npm run build`
- **Start Command**: `npm run server`
- **Environment Variables**: Set `GEMINI_API_KEY`

### Deployment Files:
- `nixpacks.toml` - Railway build configuration
- `railway.json` - Railway deployment settings  
- `Procfile` - Process configuration
- `server.cjs` - Production Express server

### After pushing to GitHub:
1. Railway auto-deploys from your repository
2. Builds the React app using Vite
3. Serves from `dist/` folder with Express
4. API proxy available at `/api/proxy`

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