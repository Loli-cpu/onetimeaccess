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

        // Display the access token
        document.getElementById('accessToken').innerText = token;
        document.getElementById('tokenDisplay').style.display = 'block';

        // Now you can use the token for other operations
        // For example, store the username as well for later use
        localStorage.setItem('currentUser', username);
    } else {
        alert("Invalid username or password.");
    }
}
