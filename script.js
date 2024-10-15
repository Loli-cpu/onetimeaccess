document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Simple validation for password length
    if (password.length < 8) {
        alert("Password must be at least 8 characters long.");
        return;
    }

    // For demo purposes, let's simulate a valid username and password
    const validUsername = "user";
    const validPassword = "password123"; // Example password

    // Check if the entered credentials match the valid ones
    if (username === validUsername && password === validPassword) {
        // Generate an access token
        const token = Math.random().toString(36).substr(2);
        localStorage.setItem('accessToken', token);

        // Display the token
        document.getElementById('accessToken').innerText = token;
        document.getElementById('tokenDisplay').style.display = 'block';
    } else {
        alert("Invalid username or password. Please try again.");
    }
});
window.onload = function() {
    checkAccessToken();
};

function checkAccessToken() {
    const token = localStorage.getItem('accessToken');
    
    if (!token) {
        // If there's no token, redirect to login or show an alert
        alert("You need to log in to access this page.");
        window.location.href = "index.html"; // Redirect to your login page
    } else {
        // If token exists, you can do something with it (e.g., display a message)
        console.log("Access Token:", token);
        // You can also check for expiration if you implement that feature
    }
}
