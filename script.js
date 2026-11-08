
// Get navigation elements
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

// Open and close mobile navigation
menuToggle.addEventListener("click", function () {

    const isOpen = navLinks.classList.toggle("open");

    menuToggle.setAttribute(
        "aria-expanded",
        String(isOpen)
    );

});

// Close navigation after clicking a section
const navigationItems = document.querySelectorAll(
    ".nav-links a"
);

navigationItems.forEach(function (link) {

    link.addEventListener("click", function () {

        navLinks.classList.remove("open");

        menuToggle.setAttribute(
            "aria-expanded",
            "false"
        );

    });

});

// Automatically update copyright year
document.getElementById("year").textContent =
    new Date().getFullYear();
