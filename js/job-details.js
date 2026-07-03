const params = new URLSearchParams(window.location.search);
const jobId = params.get("id");
const job = jobId ? getJobById(jobId) : null;

function escapeHtml(str) {
    const div = document.createElement("div");
    div.textContent = str ?? "";
    return div.innerHTML;
}

if (!job) {
    document.getElementById("jobTitle").textContent = "Job not found";
    document.getElementById("jobDescription").textContent =
        "Please go back to the Jobs page and choose a listing to view its details.";
    document.getElementById("applyNowLink").style.display = "none";
} else {
    document.title = `${job.title} | JobBoard`;
    document.getElementById("jobTitle").textContent = job.title;
    document.getElementById("jobCompany").textContent = job.company;
    document.getElementById("jobLocation").textContent = job.location;
    document.getElementById("jobSalary").textContent = `${job.salaryLpa} LPA`;
    document.getElementById("jobType").textContent = job.type;
    document.getElementById("jobDescription").textContent = job.description;

    document.getElementById("jobResponsibilities").innerHTML =
        job.responsibilities.map(r => `<li>${escapeHtml(r)}</li>`).join("");

    document.getElementById("jobRequirements").innerHTML =
        job.requirements.map(r => `<li>${escapeHtml(r)}</li>`).join("");

    document.getElementById("jobCompanyBlurb").textContent = job.companyBlurb;

    document.getElementById("applyNowLink").href =
        `apply.html?id=${job.id}&title=${encodeURIComponent(job.title)}&company=${encodeURIComponent(job.company)}`;
}
