// lib/firebaseConfig.ts

// Import the functions you need from the Firebase SDK
import { initializeApp } from "firebase/app";

// Your Firebase configuration (as provided by the Firebase Console)
const firebaseConfig = {
  apiKey: "AIzaSyD369KjmGWOExDpVfEuPQzooUjW3zgUVzA",
  authDomain: "myquizapp-58a8f.firebaseapp.com",
  projectId: "myquizapp-58a8f",
  storageBucket: "myquizapp-58a8f.appspot.com",
  messagingSenderId: "763802001807",
  appId: "1:763802001807:web:7cf7614a888e41bc63abfa",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export the initialized app
export default app;
