import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBITxiwZgRrlZ84ovhbUJBE0RjXF9r39vA",
  authDomain: "chat-2f82d.firebaseapp.com",
  projectId: "chat-2f82d",
  storageBucket: "chat-2f82d.appspot.com",
  messagingSenderId: "756165535555",
  appId: "1:756165535555:web:7f3e27b07eb4c2aafcf1f6",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()