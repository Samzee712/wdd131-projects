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


  // Local Dishes Data
  const dishes = [
    {
      name: "Edikang Ikong Soup",
      description: "A nutritious vegetable soup made with pumpkin leaves, water leaves, and a variety of meats.",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTz0C1jxg-3ISRWlkXq9clpch7rZwIL_svcfA&s"
    },
    {
      name: "Afang Soup",
      description: "A delicious soup made with Afang leaves and water leaves, cooked with meat and seafood.",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS31LyLZleDqsBiqjDHCX3FXMoWHXmlakzQbw&s"
    },
    {
      name: "Ekpang Nkukwo",
      description: "A traditional Calabar dish made from grated cocoyam wrapped in leaves and cooked with periwinkles.",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5YAgPSqb1nEFOT7Gr_A7SvLY1GypL44kjxw&s"
    },
    {
      name: "Egusi Soup",
      description: "A rich soup made with melon seeds, vegetables, and a variety of meats.",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRw0Mdu1KGZt05sKNS02ly5w7Pq1WJOoh75JbPNnP3sv7ba7yZylvRr1KFbIU_-t5ItvQ0&usqp=CAU"
    },
    {
      name: "Atama Soup",
      description: "A delicious soup made with Atama leaves, water leaves, and a variety of meats.",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRqJHXIODso4MGkxw_1X0UNHeWq9w8oUdwNg&s"
    },
    {
      name: "Ofe Owerri",
      description: "A traditional Igbo soup made with assorted meats, fish, and local spices.",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTz0C1jxg-3ISRWlkXq9clpch7rZwIL_svcfA&s"
    },
    {
      name: "Bitterleaf Soup",
      description: "A traditional soup made with bitterleaf, waterleaf, and a variety of meats, stock fish, canda etc...",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5YAgPSqb1nEFOT7Gr_A7SvLY1GypL44kjxw&s"
    },
    {
      name: "Okro Soup",
      description: "A delicious soup made with okra, vegetables, and a variety of meats, chicken, fish, snails etc...",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRqJHXIODso4MGkxw_1X0UNHeWq9w8oUdwNg&s"
    }
  ];

  const foodContainer = document.getElementById("foodContainer");

  function displayDishes() {
    foodContainer.innerHTML = "";
    dishes.forEach(dish => {
      let foodCard = `
          <div class="food-card">
            <img src="${dish.imageUrl}" alt="${dish.name}" loading="lazy">
            <h3>${dish.name}</h3>
            <p>${dish.description}</p>
          </div>`;
      foodContainer.innerHTML += foodCard;
      console.log(`Added ${dish.name} with image URL: ${dish.imageUrl}`);
    });
  }

  displayDishes();
});

