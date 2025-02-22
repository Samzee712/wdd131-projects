document.addEventListener("DOMContentLoaded", function () {
    // Dynamic year and last modified date in footer
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
  
    // Event Data Array
    const events = [
      {
        title: "Calabar Carnival",
        date: "December 25",
        time: "5:00 PM",
        location: "Calabar Main Street",
        description: "The biggest street party in Africa! Enjoy music, dance, and cultural displays.",
        imageUrl: "https://www.carnival.crossriverstate.gov.ng/_next/static/media/gallery4.d18c5ca0.webp"
      },
      {
        title: "Ekpe Festival",
        date: "August 15",
        time: "12:00 PM",
        location: "Calabar Cultural Center",
        description: "A historic masquerade festival celebrating the traditions of the Efik people.",
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuNOAOMM8bo8CbblfqpxnI_KUk2FyRAc8HwA&s"
      },
      {
        title: "Boat Regatta",
        date: "November 10",
        time: "10:00 AM",
        location: "Calabar River",
        description: "A thrilling boat racing event showcasing the rich riverine heritage of Calabar.",
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHtKtWNLTO54FSvQZN30wzY1tVkbl1YYHN9g&s"
      }
    ];
  
    const eventContainer = document.getElementById("eventContainer");
  
    function displayEvents() {
      eventContainer.innerHTML = "";
      events.forEach(event => {
        let eventCard = `
          <div class="event-card">
            <img src="${event.imageUrl}" alt="${event.title}" loading="lazy">
            <h3>${event.title}</h3>
            <p><strong>Date:</strong> ${event.date} | <strong>Time:</strong> ${event.time}</p>
            <p><strong>Location:</strong> ${event.location}</p>
            <p>${event.description}</p>
            <button class="learn-more" data-title="${event.title}">Learn More</button>
          </div>`;
        eventContainer.innerHTML += eventCard;
      });
    }
  
    displayEvents();
  
    // Modal Popup Functionality
    document.addEventListener("click", function (e) {
      if (e.target.classList.contains("learn-more")) {
        const title = e.target.getAttribute("data-title");
        const selectedEvent = events.find(ev => ev.title === title);
        document.getElementById("modalTitle").textContent = selectedEvent.title;
        document.getElementById("modalDate").textContent = `Date: ${selectedEvent.date}`;
        document.getElementById("modalLocation").textContent = `Location: ${selectedEvent.location}`;
        document.getElementById("modalDescription").textContent = selectedEvent.description;
        document.getElementById("modalImage").src = selectedEvent.imageUrl;
        document.getElementById("eventModal").style.display = "block";
      }
    });
  
    document.querySelector(".close").addEventListener("click", function () {
      document.getElementById("eventModal").style.display = "none";
    });
  
  