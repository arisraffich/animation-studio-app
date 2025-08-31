# Aura - AI-Powered Animation Studio v1.0.5

🎬 **Transform children's books into animated stories with AI-powered video generation**

A complete production-ready application that converts PDF storybooks into animated videos using advanced AI models, real-time progress tracking, and cloud storage.

## 🚀 Key Features

### **Story Processing**
- **PDF Upload & Analysis**: Intelligent extraction of story content from PDF files
- **GPT-5 Story Parsing**: Advanced AI identifies story pages vs. metadata 
- **Automatic Pagination**: Smart scene breakdown and text extraction
- **Cover & End Scene Generation**: Automated title sequences and closing scenes

### **AI-Powered Video Generation**
- **Veo-3 Video Generation**: High-quality 5-second animations via Replicate Seedance
- **GPT-5 Prompt Engineering**: Sophisticated prompt generation for precise animations
- **Bulk Generation**: Generate videos for all scenes automatically with progress tracking
- **Real-time Progress**: WebSocket-powered live updates during generation

### **Advanced Project Management**  
- **Firebase Cloud Storage**: Secure project persistence and file storage
- **Version Control**: Multiple video versions per scene with regeneration
- **Auto-Download**: Automatic video downloads after generation
- **Project Dashboard**: Visual project management with creation timestamps

### **Music & Audio**
- **ElevenLabs Integration**: AI-generated background music matching story tone
- **Automatic Audio Sync**: Story-appropriate music generation and download

### **Enhanced User Experience**
- **Progress Tracking**: Real-time generation progress with animated UI
- **Batch Operations**: Bulk video generation with cancellation support
- **Modern UI**: Responsive design with Tailwind CSS and smooth animations
- **Error Handling**: Comprehensive error recovery and user feedback

## 🛠 Tech Stack

- **Frontend**: React 18 + Vite + Tailwind CSS
- **Backend**: Express.js + WebSocket (ws) for real-time updates
- **AI Services**: 
  - OpenAI GPT-5 (story analysis & prompt generation)
  - Replicate Veo-3 via Seedance (video generation)
  - ElevenLabs (music generation)
- **Database**: Firebase Firestore + Firebase Storage
- **Deployment**: Railway with auto-deploy from GitHub

## 📋 Environment Variables

Create a `.env.local` file with:

```bash
# OpenAI API Configuration
OPENAI_API_KEY=your_openai_api_key_here

# Replicate API Configuration (for Seedance video generation)
REPLICATE_API_TOKEN=your_replicate_token_here

# Server Configuration  
PORT=8081

# ElevenLabs API Configuration
VITE_ELEVENLABS_API_KEY=your_elevenlabs_api_key_here
ELEVENLABS_API_KEY=your_elevenlabs_api_key_here

# Firebase Configuration (get from Firebase console)
VITE_FIREBASE_API_KEY=your_firebase_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id
```

## 🚀 Quick Start

### Development
```bash
npm install
npm run dev      # Start frontend (port 3000)
npm run server   # Start backend (port 8081)
```

### Production
```bash
npm run build
npm start        # Build and start production server
```

## 🔌 API Endpoints

### Core APIs
- `POST /api/openai` - GPT-5 proxy for story analysis & prompt generation
- `POST /api/seedance/create` - Create Veo-3 video generation task
- `GET /api/seedance/status/:id` - Poll video generation progress
- `POST /api/firebase-image` - Firebase Storage image proxy (CORS handling)

### Utility APIs
- `GET /api/download/video/:filename` - Video download proxy
- `GET /api/download/music/:filename` - Music download proxy
- `POST /api/elevenlabs/music` - ElevenLabs music generation

## 📖 How to Use

### 1. **Upload PDF Storybook**
- Click "New Project" on dashboard
- Upload PDF children's book
- AI extracts story content and identifies pages

### 2. **Generate All Videos (Bulk Mode)**
- On cover page, click "Generate All Videos"  
- Real-time progress tracking with WebSocket updates
- Auto-download feature saves videos locally
- Retry logic handles failures automatically

### 3. **Individual Scene Management**
- Navigate through story pages
- Upload custom illustrations (optional)
- Generate/regenerate individual scenes
- Manage multiple video versions per scene

### 4. **Download & Export**
- Auto-download during bulk generation
- Manual download buttons on all videos
- Download music tracks separately
- Export complete animated story

## 🔄 Version Management

- **Multiple Versions**: Each scene supports multiple video versions
- **Version History**: Track creation timestamps and latest versions
- **Regeneration**: Re-generate scenes with improved prompts
- **Selection Mode**: Bulk select and manage video versions

## 🎯 Latest Updates (v1.0.5)

- ✅ **Fixed bulk generation error** (setEstimatedTime undefined)
- ✅ **Enhanced batch modal UI** (centered play/download buttons)  
- ✅ **Improved progress tracking** with WebSocket integration
- ✅ **Auto-download functionality** for bulk generation
- ✅ **Firebase optimization** and error handling improvements

## 🗄 Backup & Restoration

**Complete Backup**: `version_1` git tag contains full production state
```bash
git checkout version_1    # Restore to complete working state
npm install              # Restore dependencies  
npm start               # Deploy restored version
```

## 🏗 Architecture

```
Frontend (React + Vite)     Backend (Express + WebSocket)     External APIs
├── Project Dashboard  ──→  ├── PDF Processing           ──→  ├── OpenAI GPT-5
├── Scene Generator    ──→  ├── Video Generation         ──→  ├── Replicate Veo-3  
├── Progress Tracking  ──→  ├── Progress Broadcasting    ──→  ├── ElevenLabs
└── File Management    ──→  └── Firebase Proxy          ──→  └── Firebase Storage
```

## 📜 License

Private project - All rights reserved