document.addEventListener("DOMContentLoaded", function () {
    // Update footer dynamic content
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
    
    
    // Handle Contact Form Submission
    const messageForm = document.querySelector(".contact-form form");
    messageForm.addEventListener("submit", function (e) {
      e.preventDefault();
  
      // Retrieve values from contact form fields
      const name = document.getElementById("name").value;
      // Use querySelector to target the email inside the contact-form section
      const email = document.querySelector(".contact-form input[type='email']").value;
      const message = document.getElementById("message").value;
  
      // Create an object to represent the message
      const contactMessage = {
        name: name,
        email: email,
        message: message,
        submitted: new Date().toISOString()
      };
  
      // Retrieve any existing messages from localStorage; if none, initialize an empty array
      let messages = JSON.parse(localStorage.getItem("contactMessages")) || [];
      messages.push(contactMessage);
      localStorage.setItem("contactMessages", JSON.stringify(messages));
  
      alert("Your message has been received. Thank you!");
      messageForm.reset();
    });
  
    // Handle Newsletter Subscription
    const newsletterDiv = document.querySelector(".newsletter .form");
    const newsletterButton = newsletterDiv.querySelector("button");
    newsletterButton.addEventListener("click", function (e) {
      e.preventDefault();
  
      // Retrieve the newsletter email from within the newsletter section
      const newsletterEmail = newsletterDiv.querySelector("input[type='email']").value;
  
      // Retrieve existing subscriptions from localStorage, or initialize an empty array
      let newsletterEmails = JSON.parse(localStorage.getItem("newsletterEmails")) || [];
      newsletterEmails.push({
        email: newsletterEmail,
        subscribed: new Date().toISOString()
      });
      localStorage.setItem("newsletterEmails", JSON.stringify(newsletterEmails));
  
      alert("Thank you for subscribing to our newsletter!");
      newsletterDiv.querySelector("input[type='email']").value = "";
    });
  });
  