document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('registrationForm').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form submission

        const username = document.getElementById('username').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirmPassword').value;
        const gender = document.getElementById('gender').value;
        const dob = document.getElementById('dob').value;
        const terms = document.getElementById('terms').checked;

        let errorMessages = [];
        let passwordError = '';

        if (username.length < 5) {
            errorMessages.push('Username must be at least 5 characters long.');
        }

        if (password.length < 8) {
            errorMessages.push('Password must be at least 8 characters long.');
        }

        if (password !== confirmPassword) {
            passwordError = 'Passwords do not match.';
        }

        if (gender === "") {
            errorMessages.push('Please select a gender.');
        }

        const dobDate = new Date(dob);
        const today = new Date();
        let age = today.getFullYear() - dobDate.getFullYear();
        const m = today.getMonth() - dobDate.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < dobDate.getDate())) {
            age--;
        }
        if (age < 18) {
            errorMessages.push('You must be at least 18 years old.');
        }

        if (!terms) {
            errorMessages.push('You must agree to the terms and conditions.');
        }

        const errorMessagesDiv = document.getElementById('errorMessages');
        const passwordErrorDiv = document.getElementById('passwordError');
        errorMessagesDiv.innerHTML = '';
        passwordErrorDiv.innerHTML = '';

        if (passwordError) {
            passwordErrorDiv.textContent = passwordError;
        }

        if (errorMessages.length > 0 || passwordError) {
            errorMessages.forEach(message => {
                const p = document.createElement('p');
                p.textContent = message;
                errorMessagesDiv.appendChild(p);
            });
        } else {
            // If the form is valid, redirect to the home page
            window.location.href = 'home.html';
        }
    });
});
