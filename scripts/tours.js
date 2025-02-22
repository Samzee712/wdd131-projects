document.addEventListener("DOMContentLoaded", function () {
    // Dynamic year in footer
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

    // Tour Packages Data
    const tours = [
      {
        name: "Historical Sites Tour",
        description: "Explore the rich history of Calabar, visiting ancient landmarks and museums.",
        duration: "3 Hours",
        price: "₦30000 per person",
        imageUrl: "https://th.bing.com/th/id/OIP.-TdgHJcYsYAu0p4CAYyWIQHaEf?w=282&h=180&c=7&r=0&o=5&pid=1.7"
        
      },

      {

        name: "Cross River National Park Tour",
        description: "Discover the diverse flora and fauna of the rainforest in Cross River National Park.",
        duration: "4 Hours",
        price: "₦35000 per person",
        imageUrl: "https://th.bing.com/th/id/OIP.tcEFNi-o3LmF8J5T69yGcgAAAA?pid=ImgDet&w=191&h=106&c=7"
      },


      {
        name: "Cultural Experience Tour",
        description: "Immerse yourself in the traditions and festivals of Calabar.",
        duration: "5 Hours",
        price: "₦35000 per person",
        imageUrl: "https://th.bing.com/th/id/OIP.GWvpPTgvHQiX5gErfOTfpQHaE9?w=206&h=180&c=7&r=0&o=5&pid=1.7"
      },
      {
        name: "Nature & Adventure Tour",
        description: "Discover breathtaking landscapes, rivers, and wildlife in Calabar.",
        duration: "6 Hours",
        price: "₦40000 per person",
        imageUrl: "https://th.bing.com/th/id/OIP.WzimW0bC3dooI-YOYF89agHaEK?w=274&h=180&c=7&r=0&o=5&pid=1.7"
      }
    ];
  
    const tourContainer = document.getElementById("tourContainer");
  
    function displayTours() {
      tourContainer.innerHTML = "";
      tours.forEach(tour => {
        let tourCard = `
          <div class="tour-card">
            <img src="${tour.imageUrl}" alt="${tour.name}" loading="lazy">
            <h3>${tour.name}</h3>
            <p>${tour.description}</p>
            <p><strong>${tour.duration}</strong></p>
            <p><strong>${tour.price}</strong></p>
          </div>`;
        tourContainer.innerHTML += tourCard;
      });
    }
  
    displayTours();
  });
  