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
        });
    }
});

// scripts.js

function showLogin() {
    alert('Show login form');
}

function showRegister() {
    alert('Show register form');
}

function logout() {
    alert('Logged out');
    window.location.href = 'index.html';
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
