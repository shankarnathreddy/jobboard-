const form = document.querySelector("form");

// ================== SHOW/HIDE PASSWORD ==================

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

const toggleConfirmPassword = document.getElementById("toggleConfirmPassword");
const confirmPasswordInput = document.getElementById("confirmPassword");

toggleConfirmPassword.addEventListener("click", () => {
    if (confirmPasswordInput.type === "password") {
        confirmPasswordInput.type = "text";
        toggleConfirmPassword.classList.replace("fa-eye", "fa-eye-slash");
    } else {
        confirmPasswordInput.type = "password";
        toggleConfirmPassword.classList.replace("fa-eye-slash", "fa-eye");
    }
});

// ================== SIGNUP ==================

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const fullName = document.querySelector('input[type="text"]').value.trim();
    const email = document.querySelector('input[type="email"]').value.trim();
    const mobile = document.querySelector('input[type="tel"]').value.trim();
    const password = passwordInput.value;
    const confirmPassword = confirmPasswordInput.value;

    if (fullName === "") {
        alert("Please enter your full name.");
        return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return;
    }

    const mobilePattern = /^[0-9]{10}$/;

    if (!mobilePattern.test(mobile)) {
        alert("Mobile number must contain exactly 10 digits.");
        return;
    }

    if (password.length < 6) {
        alert("Password must be at least 6 characters.");
        return;
    }

    if (password !== confirmPassword) {
        alert("Passwords do not match.");
        return;
    }

    if (localStorage.getItem(email)) {
        alert("An account with this email already exists.");
        return;
    }

    const user = {
        name: fullName,
        email: email,
        mobile: mobile,
        password: password
    };

    localStorage.setItem(email, JSON.stringify(user));
    localStorage.setItem("currentUser", email);

    alert("Account created successfully!");

    window.location.href = "index.html";
});