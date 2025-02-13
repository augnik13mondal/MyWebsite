// script.js

// Hero button click event
const heroButton = document.querySelector('.hero button'); // Select the button
heroButton.addEventListener('click', () => {
  // You can add more complex actions here, like smooth scrolling,
  // redirecting to another page, or opening a modal.
  alert("Hero button clicked!"); // For now, just an alert
});


// Contact form submission handling (example)
const contactForm = document.querySelector('.contact form');
contactForm.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent default form submission

    // Get form values (replace with your actual form element IDs)
    const name = document.querySelector('input[type="text"]').value;
    const email = document.querySelector('input[type="email"]').value;
    const message = document.querySelector('textarea').value;

    // Basic form validation (you can improve this)
    if (!name || !email || !message) {
        alert("Please fill in all fields.");
        return; // Stop further execution
    }

    // You can now do something with the form data, like send it to a server
    // using fetch or XMLHttpRequest.  For this example, we'll just log
    // the values to the console.
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Message:", message);

    // Optionally, you can reset the form after successful submission
    // contactForm.reset();
    // alert("Message sent!");
});


// Simple smooth scrolling (example - you can target specific elements)
const navLinks = document.querySelectorAll('nav a'); // Select all links in the nav

navLinks.forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default jump behavior

        const targetId = this.getAttribute('href'); // Get the target element ID
        const targetElement = document.querySelector(targetId); // Find the element

        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth' // Smooth scrolling
            });
        }
    });
});


// Example: Dynamically updating content (you can adapt this)
const aboutSection = document.querySelector('.about');
setTimeout(() => {
    const newParagraph = document.createElement('p');
    newParagraph.textContent = "This is some dynamically added text!";
    aboutSection.appendChild(newParagraph);
}, 3000); // After 3 seconds


// Example: Adding a class on scroll (for a sticky nav or other effects)
window.addEventListener('scroll', () => {
  const header = document.querySelector('header');
  if (window.scrollY > 100) { // Adjust the scroll threshold as needed
    header.classList.add('sticky');
  } else {
    header.classList.remove('sticky');
  }
});
