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

function toggleNewPassword() {
    const newPasswordField = document.getElementById('newPassword');
    const toggleIcon = document.querySelectorAll('.toggle-password')[1];
    if (newPasswordField.type === 'password') {
        newPasswordField.type = 'text';
        toggleIcon.textContent = '🙈'; // Change to an eye-off icon
    } else {
        newPasswordField.type = 'password';
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

    // Check if user exists
    const storedPassword = localStorage.getItem(username);
    if (storedPassword && storedPassword === password) {
        // Generate a simple token for one-time access
        const token = Math.random().toString(36).substr(2);
        localStorage.setItem('accessToken', token);
        alert("Login successful! Your access token is: " + token);
    } else {
        alert("Invalid username or password.");
    }
}

function createAccount() {
    const newUsername = document.getElementById('newUsername').value;
    const newPassword = document.getElementById('newPassword').value;

    // Simple validation
    if (newUsername === "" || newPassword.length < 8) {
        alert("Please fill in all fields with valid information.");
        return;
    }

    // Store the new account details
    localStorage.setItem(newUsername, newPassword);
    alert("Account created successfully! You can now log in.");
    hideCreateAccount();
}

function showCreateAccount() {
    document.getElementById('createAccount').style.display = 'block';
}

function hideCreateAccount() {
    document.getElementById('createAccount').style.display = 'none';
}
