// steps.js

// Step 1: Setting up the HTML structure
// We have set up the initial HTML structure including header, main content, and footer.
// The header contains the logo, navigation links, and authentication buttons.
// The main content includes sections for features, integrations, benefits, and invoicing.
// The footer provides links to various sections of the site and a subscription form.


// Step 2: Creating the CSS styles
// We created styles for the overall layout including the header, main content, and footer.
// Header styles include layout, font sizes, and colors for the navigation and authentication buttons.
// Main content styles handle section layout, text alignment, and button styling.
// Footer styles include layout for different sections, font sizes, and subscription form styles.


// Step 3: Implementing the JavaScript
// We implemented basic JavaScript functionality to handle the login and register buttons.
// The buttons are set to navigate to separate pages for login and registration.


// Step 4: Creating additional pages
// Created `login.html` and `register.html` with forms for user authentication.
// Each form includes fields for email, password, and password confirmation (for registration).


// Step 5: Adding the dashboard page
// Created `dashboard.html` for users to see after logging in.
// The dashboard contains a welcome message and logout button.


// Step 6: Ensuring consistency across pages
// Added the same header and footer to all pages for a consistent look and feel.


// Step 7: Making the site responsive
// Added CSS media queries to ensure the site looks good on different screen sizes.


// Step 8: Adding additional features and enhancements
// 1. Implemented a "Enter without Registration" button on the registration page to allow quick access to the dashboard.
// 2. Updated the JavaScript to handle navigation for the "Enter without Registration" button.
// 3. Added JavaScript to handle logout functionality across all pages.
// 4. Ensured all pages contain the same consistent footer and navigation elements.
// 5. Deployed the project to Render for live testing and accessibility.


// Existing code

function handleLogin(event) {
    event.preventDefault();
    alert("Logging in...");
    // Implement login logic here
}

function handleRegister(event) {
    event.preventDefault();
    const password = document.getElementById('registerPassword').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    if (password !== confirmPassword) {
        alert("Passwords do not match!");
        return;
    }

    alert("Registering...");
    // Implement registration logic here
}

function showLogin() {
    window.location.href = 'login.html';
}

function showRegister() {
    window.location.href = 'register.html';
}

// scripts.js

function showLogin() {
    alert('Show login form');
}

function showRegister() {
    alert('Show register form');
}

document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');

    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const email = document.getElementById('loginEmail').value;
            const password = document.getElementById('loginPassword').value;
            alert(`Logged in with email: ${email}`);
            window.location.href = 'dashboard.html';
        });
    }

    if (registerForm) {
        registerForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const email = document.getElementById('registerEmail').value;
            const password = document.getElementById('registerPassword').value;
            const confirmPassword = document.getElementById('confirmPassword').value;
            if (password !== confirmPassword) {
                alert('Passwords do not match');
                return;
            }
            alert(`Registered with email: ${email}`);
            window.location.href = 'dashboard.html';
        });
    }
});

// Placeholder script file
function logout() {
    window.location.href = 'index.html';
}
