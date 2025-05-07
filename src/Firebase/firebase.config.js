// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAyKHJiNDogyYzvWEprSfrC7MmCwHEIqL8",
  authDomain: "app-store-9a5f8.firebaseapp.com",
  projectId: "app-store-9a5f8",
  storageBucket: "app-store-9a5f8.firebasestorage.app",
  messagingSenderId: "840644139048",
  appId: "1:840644139048:web:8152613c30701baf3e7d1d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);


// apiKey: import.meta.env.VITE_apiKey,
// authDomain: import.meta.env.VITE_authDomain,
// projectId: import.meta.env.VITE_projectId,
// storageBucket: import.meta.env.VITE_storageBucket,
// messagingSenderId: import.meta.env.VITE_messagingSenderId,
// appId: import.meta.env.VITE_appId,