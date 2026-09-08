import { initializeApp } from "https://www.gstatic.com/firebasejs/12.3.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.3.0/firebase-firestore.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.3.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyBaaTpIVMdVyeq9fLWUZSD1CU9QJGaAoq0",
  authDomain: "titoind-eb0c8.firebaseapp.com",
  projectId: "titoind-eb0c8",
  storageBucket: "titoind-eb0c8.firebasestorage.app",
  messagingSenderId: "312206125548",
  appId: "1:312206125548:web:2e3ca3ead306d70d4c78c9",
  measurementId: "G-JZRT6J8DFJ"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
