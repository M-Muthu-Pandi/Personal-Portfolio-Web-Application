import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB-c1eIq9cV6AVnExV0R1Wb1A16ZHWyoss",
  authDomain: "muthu-portfolio.firebaseapp.com",
  projectId: "muthu-portfolio",
  storageBucket: "muthu-portfolio.firebasestorage.app",
  messagingSenderId: "136977056898",
  appId: "1:136977056898:web:3b74e26bcb5a5be2f4a09b",
  measurementId: "G-B04N3L3P21",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Get authentication instance
export const auth = getAuth(app);

// Create Google authentication provider
export const provider = new GoogleAuthProvider();
