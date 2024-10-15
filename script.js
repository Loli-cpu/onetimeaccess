function togglePassword() {
    const passwordField = document.getElementById('password');
    const toggleIcon = document.querySelector('.toggle-password');
    if (passwordField.type === 'password') {
        passwordField.type = 'text';
        toggleIcon.textContent = '🙈'; // Change to an eye-off icon
    } else {
        passwordField.type = 'password';
        toggleIcon.textContent = '👁️'; // Change back to eye icon
    }
}

function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Simple validation
    if (username === "" || password.length < 8) {
        alert("Please fill in all fields with valid information.");
        return;
    }

    // Generate a simple token for one-time access
    const token = Math.random().toString(36).substr(2);
    localStorage.setItem('accessToken', token);
    alert("Login successful! Your access token is: " + token);
}
