// src/firebase.js
import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCPQTCQw5u5sXin5p4oIHTGEn90NuSpcNw",
  authDomain: "authentication-3e173.firebaseapp.com",
  projectId: "authentication-3e173",
  storageBucket: "authentication-3e173.firebasestorage.app",
  messagingSenderId: "436548425084",
  appId: "1:436548425084:web:e7342c17d1a8d54a7040f9",
  measurementId: "G-GMQ90Y9VCH",
};

// Initialize
const app = initializeApp(firebaseConfig);

// Auth
export const auth = getAuth(app);

// Provider
export const googleProvider = new GoogleAuthProvider();

// ✅ ADD THIS FUNCTION (IMPORTANT)
export const googleLogin = async () => {
  const result = await signInWithPopup(auth, googleProvider);
  return result.user;
};

// Logout
export const logout = async () => {
  await signOut(auth);
};

// Analytics
export const analytics = getAnalytics(app);

export default app;
