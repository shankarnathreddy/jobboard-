const togglePassword = document.getElementById("togglePassword");
const passwordInput = document.getElementById("password");

togglePassword.addEventListener("click", () => {
    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        togglePassword.classList.replace("fa-eye", "fa-eye-slash");
    } else {
        passwordInput.type = "password";
        togglePassword.classList.replace("fa-eye-slash", "fa-eye");
    }
});

// ================== LOGIN ==================
// signup.js stores each account as localStorage[email] = JSON user object.
// This checks the entered credentials against that, and on success stores
// the signed-in user's email under "currentUser" so other pages (via
// js/auth-nav.js) can show a logged-in state in the nav.
const loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const email = document.getElementById("loginEmail").value.trim();
    const password = passwordInput.value;

    if (!email || !password) {
        alert("Please enter your email and password.");
        return;
    }

    const stored = localStorage.getItem(email);
    if (!stored) {
        alert("No account found with that email. Please sign up first.");
        return;
    }

    const user = JSON.parse(stored);
    if (user.password !== password) {
        alert("Incorrect password.");
        return;
    }

    localStorage.setItem("currentUser", email);
    window.location.href = "index.html";
});
