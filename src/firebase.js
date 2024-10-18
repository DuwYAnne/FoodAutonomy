// Import Firebase modules
import { initializeApp } from "firebase/app";
import { getDatabase, ref, onValue } from "firebase/database";

// Firebase configuration from Firebase Console
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID
};
  
// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

// Export Firestore instance
export const db = getDatabase(firebaseApp);
