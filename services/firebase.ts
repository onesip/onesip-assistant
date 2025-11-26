
import { initializeApp } from "firebase/app";
import { getAuth, signInAnonymously } from "firebase/auth";
import { getFirestore, collection, doc, setDoc, onSnapshot, updateDoc, deleteDoc, Firestore, Auth } from "firebase/firestore";

interface FirebaseModules {
  auth: Auth;
  db: Firestore;
  collection: typeof collection;
  doc: typeof doc;
  setDoc: typeof setDoc;
  updateDoc: typeof updateDoc;
  deleteDoc: typeof deleteDoc;
  onSnapshot: typeof onSnapshot;
}

let firebaseModules: FirebaseModules | null = null;

export const initFirebase = async (): Promise<FirebaseModules | null> => {
  if (firebaseModules) return firebaseModules;

  // Check if env vars exist. If not, return null to use local fallback.
  // Using standard Vite/CRA env vars pattern.
  const env = (import.meta as any).env;
  const apiKey = env?.VITE_FIREBASE_API_KEY || process.env.REACT_APP_FIREBASE_API_KEY;
  
  if (!apiKey) {
    console.warn("Firebase config not found. Using local data mode.");
    return null;
  }

  const firebaseConfig = {
    apiKey: apiKey,
    authDomain: env?.VITE_FIREBASE_AUTH_DOMAIN || process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId: env?.VITE_FIREBASE_PROJECT_ID || process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: env?.VITE_FIREBASE_STORAGE_BUCKET || process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: env?.VITE_FIREBASE_MESSAGING_SENDER_ID || process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: env?.VITE_FIREBASE_APP_ID || process.env.REACT_APP_FIREBASE_APP_ID
  };

  try {
    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app);
    const db = getFirestore(app);
    await signInAnonymously(auth);
    
    firebaseModules = { auth, db, collection, doc, setDoc, updateDoc, deleteDoc, onSnapshot };
    return firebaseModules;
  } catch (e) {
    console.error("Firebase init failed:", e);
    return null;
  }
};
