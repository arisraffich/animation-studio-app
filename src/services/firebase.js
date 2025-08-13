// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBqNSX8DIBhqjBuapPcVOTAw7UCESg-oXI",
  authDomain: "animation-studio-mvp.firebaseapp.com",
  projectId: "animation-studio-mvp",
  storageBucket: "animation-studio-mvp.firebasestorage.app",
  messagingSenderId: "32447193910",
  appId: "1:32447193910:web:ec44c1dbff2d324d5b8997"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase services
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;