// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY || "AIzaSyBqNSX8DIBhqjBuapPcVOTAw7UCESg-oXI",
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || "animation-studio-mvp.firebaseapp.com",
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || "animation-studio-mvp",
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || "animation-studio-mvp.firebasestorage.app",
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || "32447193910",
  appId: import.meta.env.VITE_FIREBASE_APP_ID || "1:32447193910:web:ec44c1dbff2d324d5b8997"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase services
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;