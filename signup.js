import { auth, createUserWithEmailAndPassword } from "./firebase.js";

window.signup = function () {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      alert("Signup Successful ✅");
      window.location.href = "dashboard.html";
    })
    .catch((error) => {
      alert(error.message);
    });
};