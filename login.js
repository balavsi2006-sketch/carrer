

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