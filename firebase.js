import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyAck2I4L3k3l1Lir7xQkLPuwjWtzDSHRK0",
  authDomain: "levoria-796f4.firebaseapp.com",
  projectId: "levoria-796f4",
  storageBucket: "levoria-796f4",
  messagingSenderId: "600746388380",
  appId: "600746388380"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// expose function globally
window.saveEntry = async function (text, mood) {
  await addDoc(collection(db, "entries"), {
    text,
    mood,
    createdAt: new Date()
  });
  alert("Saved to Firebase ✅");
};
