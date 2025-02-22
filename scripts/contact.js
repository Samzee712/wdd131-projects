document.addEventListener("DOMContentLoaded", function () {
    // Update footer dynamic content
    document.getElementById("currentYear").textContent = new Date().getFullYear();
    document.getElementById("lastModified").textContent = `Last Modified: ${document.lastModified}`;
  
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
  