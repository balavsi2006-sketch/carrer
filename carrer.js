import { db, auth } from "./firebase.js";
import { doc, getDoc } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

window.analyzeCareer = async function () {

  const user = auth.currentUser;
  const docRef = doc(db, "users", user.uid);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {

    const data = docSnap.data();
    const interest = data.interest.toLowerCase();

    let suggestion = "";

    // 🔎 Career Logic (Step-8)
    if (interest.includes("coding") || interest.includes("programming")) {
      suggestion = "Recommended Career: Software Developer";
    }
    else if (interest.includes("design")) {
      suggestion = "Recommended Career: UI/UX Designer";
    }
    else if (interest.includes("network")) {
      suggestion = "Recommended Career: Network Engineer";
    }
    else {
      suggestion = "Recommended Career: Explore General IT Roles";
    }

    document.getElementById("result").innerText = suggestion;
  }
};