document.addEventListener("DOMContentLoaded", function () {
    // Dynamic Footer Year
    document.getElementById("currentYear").textContent = new Date().getFullYear();
    document.getElementById("lastModified").textContent = `Last Modified: ${document.lastModified}`;

    // Mobile Navigation Toggle
    const menuToggle = document.getElementById("menuToggle");
    const navMenu = document.getElementById("navMenu");

    menuToggle.addEventListener("click", function () {
        navMenu.classList.toggle("visible");
        menuToggle.textContent = navMenu.classList.contains("visible") ? "✖" : "☰";
    });
});
