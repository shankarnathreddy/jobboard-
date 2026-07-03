// Homepage hero search: redirects to jobs.html, which reads ?q= and
// ?location= on load and pre-fills + runs the same search used there
// (see js/jobs.js). Keeps there being a single source of truth for
// how job search actually works.
const heroSearchBtn = document.getElementById("heroSearchBtn");
const heroSearchKeyword = document.getElementById("heroSearchKeyword");
const heroSearchLocation = document.getElementById("heroSearchLocation");

function goToJobsSearch() {
    const keyword = heroSearchKeyword.value.trim();
    const location = heroSearchLocation.value.trim();

    const params = new URLSearchParams();
    if (keyword) params.set("q", keyword);
    if (location) params.set("location", location);

    const query = params.toString();
    window.location.href = "jobs.html" + (query ? `?${query}` : "");
}

heroSearchBtn.addEventListener("click", (e) => {
    e.preventDefault();
    goToJobsSearch();
});

// Enter key in either field also triggers the search.
[heroSearchKeyword, heroSearchLocation].forEach(input => {
    input.addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
            e.preventDefault();
            goToJobsSearch();
        }
    });
});