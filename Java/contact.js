// contact.js

document.addEventListener('DOMContentLoaded', function() {
    var contactForm = document.getElementById('contact-form');

    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();

        // Retrieve form data
        var formData = new FormData(contactForm);
        
        // Example: You can now handle the form data as needed
        // For example, you can send it to a server using fetch API

        // Clear the form after submission (optional)
        contactForm.reset();

        // Show a success message or redirect the user to a thank you page
        alert('Your message has been sent! We will get back to you soon.');
    });
});