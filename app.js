import { auth } from "./firebase.js";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

// SIGNUP
window.signup = function () {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  createUserWithEmailAndPassword(auth, email, password)
    .then(() => {
      alert("Account Created!");
      window.location = "dashboard.html";
    })
    .catch(err => alert(err.message));
};

// LOGIN
window.login = function () {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  signInWithEmailAndPassword(auth, email, password)
    .then(() => {
      window.location = "dashboard.html";
    })
    .catch(err => alert(err.message));
};

// Demo Login Function
function login() {

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // Sample Login Credentials
    const demoEmail = "student@career.com";
    const demoPassword = "123456";

    if (email === demoEmail && password === demoPassword) {

        alert("Login Successful ✅");

        // Redirect to Main Page
        window.location.href = "index.html";

    } else {
        alert("Invalid Email or Password ❌");
    }
}