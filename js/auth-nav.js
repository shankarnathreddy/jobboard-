// Include on every page. Swaps the Login/Sign Up buttons in .nav-buttons
// for "Hi, {name}" + Logout whenever someone is signed in (per login.js /
// signup.js setting localStorage "currentUser"). Without this, the nav
// always showed Login/Sign Up even after a successful login - nothing on
// the site reflected that you were actually signed in.
(function () {
    const currentUserEmail = localStorage.getItem("currentUser");
    const navButtons = document.querySelector(".nav-buttons");
    if (!navButtons) return;

    if (currentUserEmail) {
        const stored = localStorage.getItem(currentUserEmail);
        const user = stored ? JSON.parse(stored) : null;
        const displayName = user ? user.name.split(" ")[0] : currentUserEmail;

        navButtons.innerHTML = `
            <span style="margin-right:12px; font-weight:600;">Hi, ${displayName}</span>
            <a href="#" id="logoutLink" class="login-btn">Logout</a>
        `;

        document.getElementById("logoutLink").addEventListener("click", function (e) {
            e.preventDefault();
            localStorage.removeItem("currentUser");
            window.location.href = "index.html";
        });
    }
})();
