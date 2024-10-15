let isCreatingAccount = false; // To toggle between login and create account

document.getElementById('authForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Simple validation for password length
    if (password.length < 8) {
        alert("Password must be at least 8 characters long.");
        return;
    }

    if (isCreatingAccount) {
        // Create Account Logic
        if (localStorage.getItem('account_' + username)) {
            alert("Username already exists. Please choose a different username.");
        } else {
            localStorage.setItem('account_' + username, password);
            alert("Account created successfully! You can now log in.");
            toggleForm(); // Switch back to login form after account creation
        }
    } else {
        // Login Logic
        const storedPassword = localStorage.getItem('account_' + username);

        if (storedPassword && storedPassword === password) {
            // Generate an access token
            const token = Math.random().toString(36).substr(2);
            localStorage.setItem('accessToken', token);

            // Display the token
            document.getElementById('accessToken').innerText = token;
            document.getElementById('tokenDisplay').style.display = 'block';
        } else {
            alert("Invalid username or password. Please try again.");
        }
    }
});

// Toggle between "Login" and "Create Account"
document.getElementById('toggleForm').addEventListener('click', function() {
    toggleForm();
});

function toggleForm() {
    isCreatingAccount = !isCreatingAccount;

    if (isCreatingAccount) {
        document.getElementById('formTitle').innerText = "Create Account";
        document.getElementById('authButton').innerText = "Create Account";
        document.getElementById('toggleMessage').innerHTML = 'Already have an account? <a href="#" id="toggleForm">Log In</a>';
    } else {
        document.getElementById('formTitle').innerText = "Login";
        document.getElementById('authButton').innerText = "Login";
        document.getElementById('toggleMessage').innerHTML = 'Don\'t have an account? <a href="#" id="toggleForm">Create Account</a>';
    }

    // Re-attach the event listener for the new text link after switching
    document.getElementById('toggleForm').addEventListener('click', function() {
        toggleForm();
    });
}
