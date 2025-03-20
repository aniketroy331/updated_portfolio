function filterProjects() {
    const typeFilter = document.getElementById('projectTypeFilter').value;
    const projectCards = document.querySelectorAll('.project-card');
    const projectsGrid = document.querySelector('.projects-grid');
    let hasMatches = false;

    // Clear any existing "no results" message
    const existingMessage = projectsGrid.querySelector('.no-results-message');
    if (existingMessage) {
        existingMessage.remove();
    }

    projectCards.forEach(card => {
        const title = card.querySelector('h3').textContent.toLowerCase();
        const type = card.getAttribute('data-type');
        const matchesType = typeFilter === '' || type === typeFilter;

        if (matchesType) {
            card.style.display = 'block';
            hasMatches = true; // At least one match found
        } else {
            card.style.display = 'none'; // Hide non-matching cards
        }
    });

    // If no matches found, display a message
    if (!hasMatches) {
        const noResultsMessage = document.createElement('div');
        noResultsMessage.className = 'no-results-message';
        noResultsMessage.textContent = 'Sorry, no search results found.';
        projectsGrid.appendChild(noResultsMessage);
    }
}


document.addEventListener("DOMContentLoaded", function () {
    const projectCards = document.querySelectorAll(".project-card");

    const observer = new IntersectionObserver(
        (entries, observer) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("show"); // Adds .show class
                    observer.unobserve(entry.target); // Stops observing once visible
                }
            });
        },
        { threshold: 0.2 } // Triggers when 20% of the card is visible
    );

    projectCards.forEach((card) => {
        observer.observe(card);
    });
});
