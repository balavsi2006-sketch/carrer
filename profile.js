import { db, auth } from "./firebase.js";
import {
  doc,
  setDoc
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

window.saveProfile = async function () {

  const user = auth.currentUser;

  await setDoc(doc(db, "users", user.uid), {
    education: document.getElementById("education").value,
    skills: document.getElementById("skills").value,
    interest: document.getElementById("interest").value
  });

  alert("Career Profile Saved!");
};