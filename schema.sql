-- Animation Studio D1 Database Schema
-- Safe migration from Firebase Firestore to Cloudflare D1

CREATE TABLE IF NOT EXISTS projects (
  id TEXT PRIMARY KEY,
  name TEXT NOT NULL,
  author TEXT,
  story_text TEXT,
  total_pages INTEGER DEFAULT 0,
  scenes TEXT, -- JSON column for scene data
  page_dimensions TEXT, -- JSON column for PDF dimensions
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- Index for better query performance
CREATE INDEX IF NOT EXISTS idx_projects_created_at ON projects(created_at);
CREATE INDEX IF NOT EXISTS idx_projects_name ON projects(name);