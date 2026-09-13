// ---- Contact Form Validation ----

// Get references to the form and the message paragraph
const contactForm = document.getElementById('contact-form');
const formMessage = document.getElementById('form-message');

// Listen for the form being submitted
contactForm.addEventListener('submit', function (e) {
    // Prevent the page from actually reloading/submitting (since there's no backend)
    e.preventDefault();

    // Get the current values typed into each field
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone No').value.trim();
    const message = document.getElementById('Message').value.trim();

    // Simple email format check using a regular expression
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // ---- Validation checks ----
    if (name === '') {
        showMessage('Please enter your name.', 'error');
        return;
    }

    if (!emailPattern.test(email)) {
        showMessage('Please enter a valid email address.', 'error');
        return;
    }

    if (phone === '') {
        showMessage('Please enter your phone number.', 'error');
        return;
    }

    if (message === '') {
        showMessage('Please enter a message.', 'error');
        return;
    }

    // If all checks passed:
    showMessage('Message sent successfully! We will get back to you soon.', 'success');

    // Clear the form fields after a successful "submit"
    contactForm.reset();
});

// Helper function to display a message below the form
function showMessage(text, type) {
    formMessage.textContent = text;
    formMessage.style.color = type === 'error' ? 'red' : 'green';
}

// ---- Mobile Nav Toggle ----
 
function toggleMenu() {
    const navLinks = document.getElementById('nav-links');
    navLinks.classList.toggle('active');
}

// ---- Order Now Button: Smooth Scroll to Contact ----
 
const orderBtn = document.querySelector('#home .btn');
const contactSection = document.getElementById('contact');
 
orderBtn.addEventListener('click', function () {
    contactSection.scrollIntoView({ behavior: 'smooth' });
});