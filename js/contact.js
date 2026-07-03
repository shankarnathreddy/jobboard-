const contactForm = document.getElementById("contactForm");
const popup = document.getElementById("popup");

contactForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("contactName").value.trim();
    const email = document.getElementById("contactEmail").value.trim();
    const subject = document.getElementById("contactSubject").value.trim();
    const message = document.getElementById("contactMessage").value.trim();

    if (!name || !email || !message) {
        alert("Please fill in your name, email, and message.");
        return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert("Enter a valid email address");
        return;
    }

    // No backend endpoint exists for contact messages (out of scope for
    // this assessment), so we store it locally as a lightweight record
    // and confirm receipt to the user.
    const messages = JSON.parse(localStorage.getItem("contactMessages")) || [];
    messages.push({
        id: Date.now(),
        name,
        email,
        subject: subject || "(no subject)",
        message,
        sentDate: new Date().toLocaleDateString()
    });
    localStorage.setItem("contactMessages", JSON.stringify(messages));

    popup.style.display = "flex";
    contactForm.reset();
});
