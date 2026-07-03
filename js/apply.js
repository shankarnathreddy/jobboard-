const form = document.getElementById("applyForm");
const popup = document.getElementById("popup");

// Show which job this application is for, and remember it for submission.
const applyParams = new URLSearchParams(window.location.search);
const appliedJobId = applyParams.get("id");
const appliedJob = appliedJobId ? getJobById(appliedJobId) : null;

(function showApplyingFor() {
    const label = document.getElementById("applyingForLabel");
    if (appliedJob) {
        label.textContent = `Applying for: ${appliedJob.title} at ${appliedJob.company}`;
    } else {
        label.textContent = "General application (not tied to a specific listing)";
    }
})();

form.addEventListener("submit", function(e){
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const experience = document.getElementById("experience").value;
    const resume = document.getElementById("resume").files[0];

    // VALIDATION
    if(!name || !email || !phone || !experience){
        alert("Please fill all fields");
        return;
    }

    // Was previously restricted to @gmail.com addresses only, which rejected
    // every valid non-Gmail applicant. A standard email shape check instead.
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!emailPattern.test(email)){
        alert("Enter a valid email address");
        return;
    }

    if(phone.length < 10 || phone.length > 10){
        alert("Enter valid phone number");
        return;
    }

    // CHECK FILE
    if(!resume){
        alert("Please upload your resume");
        return;
    }

    // OPTIONAL: check file type
    const allowedTypes = [
        "application/pdf",
        "application/msword",
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
    ];

    if(!allowedTypes.includes(resume.type)){
        alert("Only PDF or DOC files allowed");
        return;
    }

    // SUCCESS
    // Create application object - now includes which job this was for,
    // so "My Applications" can show it instead of a bare name/email list.
    const application = {
        id: Date.now(),
        jobId: appliedJob ? appliedJob.id : null,
        jobTitle: appliedJob ? appliedJob.title : "General Application",
        jobCompany: appliedJob ? appliedJob.company : "",
        name,
        email,
        phone,
        experience,
        resume: resume.name,
        appliedDate: new Date().toLocaleDateString()
    };

    // Get existing applications
    let applications =
        JSON.parse(localStorage.getItem("applications")) || [];

    // Add new application
    applications.push(application);

    // Save back
    localStorage.setItem(
        "applications",
        JSON.stringify(applications)
    );

    // Show popup
    popup.style.display = "flex";

    form.reset();
});

function closePopup(){
    document.getElementById("popup").style.display = "none";
}
