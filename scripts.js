<<<<<<< HEAD
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Here you could add some form validation or AJAX submission

    // Display the contact information
    document.getElementById('contactInfo').classList.remove('hidden');
});
=======
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Here you could add some form validation or AJAX submission

    // Display the contact information
    document.getElementById('contactInfo').classList.remove('hidden');
});
>>>>>>> b06fc2bcdb3fccb02f4c3fe2bc0f5b82d248b885
