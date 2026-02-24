// Import Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

// Your config
const firebaseConfig = {
  apiKey: "AIzaSyAD_WwJPnmRc2i1Qa7QlYPL_ILRYwV3QKc",
  authDomain: "career-mentor-platform.firebaseapp.com",
  projectId: "career-mentor-platform",
  storageBucket: "career-mentor-platform.firebasestorage.app",
  messagingSenderId: "638387586265",
  appId: "1:638387586265:web:bc17bc72685c5ec225eac8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Services
export const auth = getAuth(app);
export const db = getFirestore(app);