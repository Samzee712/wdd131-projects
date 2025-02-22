document.addEventListener("DOMContentLoaded", function () {
    // Dynamic Footer Year
    document.getElementById("currentYear").textContent = new Date().getFullYear();
    document.getElementById("lastModified").textContent = `Last Modified: ${document.lastModified}`;

    const openButton = document.getElementById('open-sidebar-button');
    const closeButton = document.getElementById('close-sidebar-button');
    const navbar = document.getElementById('navbar');
    const overlay = document.getElementById('overlay');

    const media = window.matchMedia("(max-width: 700px)");

    media.addEventListener('change', (e) => updateNavbar(e));

    function updateNavbar(e) {
        const isMobile = e.matches;
        console.log(isMobile);
        if (isMobile) {
            navbar.setAttribute('inert', '');
        } else {
            // desktop device
            navbar.removeAttribute('inert');
        }
    }

    window.openSidebar = function () {
        navbar.classList.add('show');
        openButton.setAttribute('aria-expanded', 'true');
        navbar.removeAttribute('inert');
        overlay.style.display = 'block';
    };

    window.closeSidebar = function () {
        navbar.classList.remove('show');
        openButton.setAttribute('aria-expanded', 'false');
        navbar.setAttribute('inert', '');
        overlay.style.display = 'none';
    };

    updateNavbar(media);
});
