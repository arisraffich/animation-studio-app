# Aura - AI-Powered Animation Studio

Transform static illustrations into animated videos with AI-powered scene generation.

## Features

- **PDF Processing**: Upload children's books and extract story content
- **AI Scene Analysis**: OpenAI analyzes illustrations and generates animation prompts  
- **Video Generation**: Replicate's Seedance model creates animated videos
- **Project Management**: Firebase storage for projects and scene data
- **Multiple Video Versions**: Generate and manage multiple versions per scene

## Tech Stack

- **Frontend**: React + Vite + Tailwind CSS
- **Backend**: Node.js + Express
- **AI Services**: 
  - OpenAI GPT-5 (enhanced scene analysis & prompt generation)
  - Replicate Seedance (video generation)
- **Database**: Firebase Firestore
- **Deployment**: Railway

## Environment Variables

Create a `.env` file with:

```bash
# OpenAI API Configuration
OPENAI_API_KEY=your_openai_api_key_here

# Replicate API Configuration (for Seedance video generation)  
REPLICATE_API_TOKEN=your_replicate_token_here

# Server Configuration
PORT=3001

# Firebase Configuration (get from Firebase console)
VITE_FIREBASE_API_KEY=your_firebase_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id
```

## Installation

```bash
npm install
npm run dev
```

## Deployment

```bash
npm run build
npm start
```

## API Endpoints

- `/api/openai` - OpenAI GPT-5 proxy for enhanced scene analysis
- `/api/seedance/create` - Create Seedance video generation task
- `/api/seedance/status/:id` - Check video generation status

## Usage

1. Upload a PDF children's book
2. Extract story pages
3. Upload illustrations for each scene
4. Generate animated videos using AI
5. Manage and preview multiple video versions

## License

Private project - All rights reserved