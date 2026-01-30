import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

// 🔥 Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAck2I4L3k3l1Lir7xQkLPuwjWtzDSHRK0",
  authDomain: "levoria-796f4.firebaseapp.com",
  projectId: "levoria-796f4",
  storageBucket: "levoria-796f4.appspot.com",
  messagingSenderId: "600746388380",
  appId: "PASTE_REAL_APP_ID_HERE"
};

// 🔥 Initialize Firebase
const app = initializeApp(firebaseConfig);

// 🔥 Initialize Firestore
const db = getFirestore(app);

// 🔥 Make function available globally
window.saveEntry = async function (text, mood) {
  try {
    await addDoc(collection(db, "entries"), {
      text: text,
      mood: mood,
      createdAt: new Date()
    });
    alert("Saved to Firebase ✅");
  } catch (error) {
    console.error("Firebase error:", error);
    alert("Error saving data ❌");
  }
};
