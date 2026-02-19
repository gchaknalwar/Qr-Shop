import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage"; // ✅ ADDED

const firebaseConfig = {
  apiKey: "AIzaSyAzTbzNJfaGZON0SKJjbN_G-Hj7rScwxI4",
  authDomain: "qr-shop-ee1bc.firebaseapp.com",
  projectId: "qr-shop-ee1bc",
  storageBucket: "qr-shop-ee1bc.firebasestorage.app",
  messagingSenderId: "1068059901955",
  appId: "1:1068059901955:web:225468da96323cfde98e36",
  measurementId: "G-9060QR2V48",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const storage = getStorage(app); // ✅ ADDED
