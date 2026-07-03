// Runs on any page that lists job cards (index.html, jobs.html).
// Each card carries data-title / data-company; this finds the matching
// entry in JOBS (jobs-data.js) and points that card's "View Details" /
// "Apply" links at the right job id, instead of every card linking to
// the same generic job-details.html / apply.html.
document.querySelectorAll(".job-card, .jobs-card").forEach(card => {
    const title = card.dataset.title;
    const company = card.dataset.company;
    if (!title || !company) return; // card wasn't tagged - skip rather than guess

    const job = JOBS.find(j => j.title === title && j.company === company);
    if (!job) return;

    const detailsLink = card.querySelector(".details-btn");
    const applyLink = card.querySelector(".apply-btn");

    if (detailsLink) {
        detailsLink.href = `job-details.html?id=${job.id}`;
    }
    if (applyLink) {
        applyLink.href = `apply.html?id=${job.id}&title=${encodeURIComponent(job.title)}&company=${encodeURIComponent(job.company)}`;
    }
});
