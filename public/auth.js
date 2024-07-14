// auth.js

function enterWithoutRegistration() {
    window.location.href = '../html/dashboard.html';
}

document.addEventListener('DOMContentLoaded', () => {
    const registerForm = document.getElementById('registerForm');
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
            window.location.href = '../html/dashboard.html';
        });
    }
});

// auth.js

function logout() {
    alert('Logged out');
    window.location.href = 'index.html';
}
