// ===================================================================
// Jobs page: search bar + sidebar filters + sort, all reading from
// data-* attributes on each .jobs-card (set in jobs.html) rather than
// scraping rendered text, so markup changes can't silently break this.
// ===================================================================

const jobsList = document.getElementById("jobsList");
const jobsCount = document.getElementById("jobsCount");
const sortSelect = document.getElementById("sortSelect");

const searchJobInput = document.getElementById("searchJob");
const searchLocationInput = document.getElementById("searchLocation");
const categorySelect = document.getElementById("category");

const allCards = Array.from(document.querySelectorAll(".jobs-card"));

// Give every card's "posted" text a source of truth (data-posted) so the
// displayed "Posted X days ago" stays consistent instead of being a second,
// hand-typed copy of the same fact.
function formatPostedLabel(dateStr) {
    const posted = new Date(dateStr);
    const days = Math.floor((Date.now() - posted.getTime()) / (1000 * 60 * 60 * 24));
    if (days <= 0) return "Posted Today";
    if (days === 1) return "Posted Yesterday";
    return `Posted ${days} days ago`;
}

allCards.forEach(card => {
    const postedEl = card.querySelector(".posted-text");
    if (postedEl && card.dataset.posted) {
        postedEl.innerHTML = `<i class="fa-solid fa-clock"></i> ${formatPostedLabel(card.dataset.posted)}`;
    }
});

function salaryBucket(lpa) {
    if (lpa <= 5) return "0-5";
    if (lpa <= 10) return "5-10";
    return "10-plus";
}

function checkedValues(selector) {
    return Array.from(document.querySelectorAll(selector + ":checked")).map(cb => cb.value);
}

function getFilters() {
    return {
        q: searchJobInput.value.trim().toLowerCase(),
        location: searchLocationInput.value.trim().toLowerCase(),
        category: categorySelect.value,
        jobTypes: checkedValues(".filter-jobtype"),
        experience: checkedValues(".filter-experience"),
        salary: checkedValues(".filter-salary"),
        locations: checkedValues(".filter-location")
    };
}

function cardMatches(card, f) {
    const title = card.dataset.title.toLowerCase();
    const company = card.dataset.company.toLowerCase();
    const location = card.dataset.location;
    const type = card.dataset.type;
    const category = card.dataset.category;
    const experience = card.dataset.experience;
    const lpa = parseFloat(card.dataset.salaryLpa);

    // Search bar: title/company keyword
    if (f.q && !title.includes(f.q) && !company.includes(f.q)) return false;

    // Search bar: free-text location
    if (f.location && !location.toLowerCase().includes(f.location)) return false;

    // Category dropdown
    if (f.category && f.category !== "All Categories" && f.category !== category) return false;

    // Sidebar checkbox groups (OR within a group, AND across groups)
    if (f.jobTypes.length && !f.jobTypes.includes(type)) return false;
    if (f.experience.length && !f.experience.includes(experience)) return false;
    if (f.salary.length && !f.salary.includes(salaryBucket(lpa))) return false;
    if (f.locations.length && !f.locations.includes(location)) return false;

    return true;
}

function applySort(cards) {
    const sorted = [...cards];
    const sortValue = sortSelect.value;
    if (sortValue === "salary-desc") {
        sorted.sort((a, b) => parseFloat(b.dataset.salaryLpa) - parseFloat(a.dataset.salaryLpa));
    } else if (sortValue === "salary-asc") {
        sorted.sort((a, b) => parseFloat(a.dataset.salaryLpa) - parseFloat(b.dataset.salaryLpa));
    } else {
        sorted.sort((a, b) => new Date(b.dataset.posted) - new Date(a.dataset.posted));
    }
    return sorted;
}

function render() {
    const filters = getFilters();
    const matches = allCards.filter(card => cardMatches(card, filters));
    const ordered = applySort(matches);

    // Reset display, then re-append in sorted order so sort is visible
    // even though we're not removing non-matching cards from the DOM.
    allCards.forEach(card => { card.style.display = "none"; });
    ordered.forEach(card => {
        card.style.display = "block";
        jobsList.appendChild(card);
    });

    let emptyState = jobsList.querySelector(".jobs-empty-state");
    if (ordered.length === 0) {
        if (!emptyState) {
            emptyState = document.createElement("div");
            emptyState.className = "jobs-empty-state";
            emptyState.innerHTML = `
                <p><strong>No jobs match your filters.</strong></p>
                <p>Try removing a filter or clearing your search.</p>`;
            jobsList.appendChild(emptyState);
        }
    } else if (emptyState) {
        emptyState.remove();
    }

    jobsCount.textContent = `Showing ${ordered.length} Job${ordered.length === 1 ? "" : "s"}`;
}

function clearFilters() {
    searchJobInput.value = "";
    searchLocationInput.value = "";
    categorySelect.value = "All Categories";
    document.querySelectorAll(".jobs-filters input[type=checkbox]").forEach(cb => cb.checked = false);
    sortSelect.value = "newest";
    render();
}

document.getElementById("searchJobsBtn").addEventListener("click", (e) => {
    e.preventDefault();
    render();
});

document.getElementById("applyFiltersBtn").addEventListener("click", (e) => {
    e.preventDefault();
    render();
});

document.getElementById("clearFiltersBtn").addEventListener("click", (e) => {
    e.preventDefault();
    clearFilters();
});

sortSelect.addEventListener("change", render);

// Let Enter in either search field trigger a search without needing the button.
[searchJobInput, searchLocationInput].forEach(input => {
    input.addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
            e.preventDefault();
            render();
        }
    });
});

// Support arriving from a "?q=...&location=..." link elsewhere on the site.
const initialParams = new URLSearchParams(window.location.search);
if (initialParams.get("q")) searchJobInput.value = initialParams.get("q");
if (initialParams.get("location")) searchLocationInput.value = initialParams.get("location");

render();