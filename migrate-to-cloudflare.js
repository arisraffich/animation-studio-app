#!/usr/bin/env node

// Migration script: Firebase Firestore → Cloudflare D1
// This script exports data from Firebase and imports it into D1

import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import { initializeD1 } from './src/services/storageService.js';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config({ path: '.env.local' });

const firebaseConfig = {
  apiKey: process.env.VITE_FIREBASE_API_KEY,
  authDomain: process.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: process.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.VITE_FIREBASE_APP_ID
};

async function migrateData() {
  try {
    console.log('🚀 Starting Firebase → Cloudflare D1 migration...\n');

    // Initialize Firebase
    console.log('📡 Connecting to Firebase...');
    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);
    console.log('✅ Firebase connected\n');

    // Initialize Cloudflare D1
    console.log('☁️ Connecting to Cloudflare D1...');
    const accountId = process.env.CLOUDFLARE_ACCOUNT_ID;
    const databaseId = process.env.CLOUDFLARE_D1_DATABASE_ID;
    
    if (!accountId || !databaseId) {
      throw new Error('Cloudflare credentials not found in environment variables');
    }
    
    const d1 = await initializeD1(accountId, databaseId);
    console.log('✅ Cloudflare D1 connected\n');

    // Export projects from Firebase
    console.log('📤 Exporting projects from Firebase...');
    const querySnapshot = await getDocs(collection(db, 'projects'));
    const projects = [];
    
    querySnapshot.forEach((doc) => {
      const data = doc.data();
      projects.push({
        id: doc.id,
        name: data.name || 'Untitled Project',
        author: data.author || 'Unknown Author',
        storyText: data.storyText || '',
        totalPages: data.totalPages || 0,
        scenes: data.scenes || {},
        pageDimensions: data.pageDimensions || null,
        createdAt: data.createdAt || new Date().toISOString(),
        updatedAt: data.updatedAt || new Date().toISOString()
      });
    });
    
    console.log(`📊 Found ${projects.length} projects to migrate\n`);

    if (projects.length === 0) {
      console.log('ℹ️ No projects found in Firebase. Migration complete.');
      return;
    }

    // Import projects to D1
    console.log('📥 Importing projects to Cloudflare D1...');
    
    for (const project of projects) {
      try {
        console.log(`  📝 Migrating: "${project.name}" (${project.id})`);
        
        const result = await d1.prepare(`
          INSERT INTO projects (id, name, author, story_text, total_pages, scenes, page_dimensions, created_at, updated_at)
          VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
        `).bind(
          project.id,
          project.name,
          project.author,
          project.storyText,
          project.totalPages,
          JSON.stringify(project.scenes),
          JSON.stringify(project.pageDimensions),
          project.createdAt,
          project.updatedAt
        ).run();
        
        if (result.success) {
          console.log(`    ✅ Successfully migrated`);
        } else {
          console.log(`    ❌ Failed to migrate`);
        }
      } catch (error) {
        console.log(`    ❌ Error migrating project: ${error.message}`);
      }
    }

    // Verify migration
    console.log('\n🔍 Verifying migration...');
    const verifyResult = await d1.prepare('SELECT COUNT(*) as count FROM projects').bind().all();
    const migratedCount = verifyResult.results[0].count;
    
    console.log(`📊 Migration Summary:`);
    console.log(`  📤 Exported from Firebase: ${projects.length} projects`);
    console.log(`  📥 Imported to D1: ${migratedCount} projects`);
    
    if (migratedCount === projects.length) {
      console.log('✅ Migration completed successfully!');
    } else {
      console.log('⚠️ Some projects may not have migrated successfully');
    }

  } catch (error) {
    console.error('❌ Migration failed:', error);
    process.exit(1);
  }
}

// Run migration
migrateData();
