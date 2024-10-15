document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Simple validation for password length
    if (password.length < 8) {
        alert("Password must be at least 8 characters long.");
        return;
    }

    // Here you would normally check the username and password against a database
    // For this example, let's simulate successful login if username is not empty
    if (username) {
        // Generate an access token
        const token = Math.random().toString(36).substr(2);
        localStorage.setItem('accessToken', token);

        // Display the token
        document.getElementById('accessToken').innerText = token;
        document.getElementById('tokenDisplay').style.display = 'block';
    } else {
        alert("Please enter a valid username.");
    }
});
